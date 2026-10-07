/**
 * Studio mods (PLAN §5.2 `/studio/mods*`, §7.5 "Gestión de mods"): the author's view of their
 * mods (any status), listing edits without re-uploading images, cover and gallery, new versions,
 * changelog edits, yank/unyank and the status transitions the author may perform (§7.4):
 *
 * | From | Action | To |
 * |---|---|---|
 * | published | unlist / archive (+ successor) | unlisted / archived |
 * | unlisted | publish / archive | published / archived |
 * | archived | publish / unlist | published / unlisted |
 * | rejected | resubmit (`/publish`) | pending |
 * | any but removed | request removal | unchanged (a report for the moderators) |
 *
 * Every transition is written to `AuditLog`, emits `mod.status_changed` (author notification,
 * cache purge) and keeps `isApproved` in step through the status trigger.
 */
import type { ModStatus } from '@sotf/contracts/common';
import type {
  OwnerVersionDTO,
  PutModMediaBody,
  StudioModDTO,
  StudioModRowDTO,
  StudioModStateDTO,
  StudioTransition,
  UpdateStudioModBody,
  UpdateVersionBody,
} from '@sotf/contracts/studio';
import { type Executor, type Mod, mod, modVersion, report } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import { buildModDetail } from '../catalog/detail.ts';
import { imageDto, type MediaRow } from '../catalog/media.ts';
import { type CatalogEntry, type CatalogSnapshot, getSnapshot } from '../catalog/snapshot.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { audit, evictLocal, modRouting, modTags, type PublishingDeps } from './context.ts';
import { writeMediaSet } from './gallery.ts';
import { rawHtmlWarning, resolveListing, setModTags, storedListingFacts } from './listing.ts';
import { type PreflightFacts, preflight, qualityScore } from './preflight.ts';
import {
  actorOf,
  assertWriter,
  descriptionFormatOf,
  kindOfType,
  loadManagedMod,
  loadOwnedMod,
  lockManagedMod,
  lockOwnedMod,
  persistDescriptionFormat,
} from './queries.ts';
import { releaseVersion } from './submit.ts';
import { legacyText, renderChangelog } from './text.ts';
import { ownerVersions, recomputeLatest } from './versions.ts';

/** Transitions the author may perform from a status. */
export function allowedTransitions(status: ModStatus): StudioTransition[] {
  switch (status) {
    case 'published':
      return ['unlist', 'archive', 'request_removal'];
    case 'unlisted':
      return ['publish', 'archive', 'request_removal'];
    case 'archived':
      return ['publish', 'unlist', 'request_removal'];
    case 'rejected':
      return ['resubmit', 'request_removal'];
    case 'pending':
      return ['request_removal'];
    case 'removed':
      return [];
  }
}

function modStatusOf(value: string): ModStatus {
  return (
    (['pending', 'published', 'unlisted', 'rejected', 'archived', 'removed'] as const).find((s) => s === value) ??
    'pending'
  );
}

/** The snapshot entry of a mod, reloading the snapshot once when it is not there yet. */
async function entryOf(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
): Promise<{ snapshot: CatalogSnapshot; entry: CatalogEntry }> {
  let snapshot = await getSnapshot(ctx, deps.config);
  let entry = snapshot.byId.get(modId);
  if (!entry) {
    evictLocal(ctx, ['list:mods', 'list:builds', `mod:${modId}`]);
    snapshot = await getSnapshot(ctx, deps.config);
    entry = snapshot.byId.get(modId);
  }
  if (!entry) throw errors.notFound('Mod');
  return { snapshot, entry };
}

// -----------------------------------------------------------------------------------------------
// Reads
// -----------------------------------------------------------------------------------------------

interface RowStats {
  modId: number;
  openCompatReports: number;
  unansweredComments: number;
  unansweredReviews: number;
}

async function rowStats(exec: Executor, modIds: readonly number[]): Promise<Map<number, RowStats>> {
  const map = new Map<number, RowStats>();
  if (modIds.length === 0) return map;
  const res = await exec.execute<{
    modId: number;
    compat: number;
    comments: number;
    reviews: number;
  }>(sql`
    SELECT m."id" AS "modId",
           (SELECT count(*)::int FROM "CompatReport" r JOIN "ModVersion" v ON v."id" = r."modVersionId"
             WHERE v."modId" = m."id" AND r."status" = 'visible' AND r."result" <> 'works' AND r."acknowledgedAt" IS NULL) AS "compat",
           (SELECT count(*)::int FROM "Comment" c
             WHERE c."modId" = m."id" AND c."replyId" IS NULL AND c."status" = 'visible'
               AND c."userId" IS DISTINCT FROM m."userId"
               AND NOT EXISTS (SELECT 1 FROM "Comment" r WHERE r."replyId" = c."id" AND r."userId" = m."userId")) AS "comments",
           (SELECT count(*)::int FROM "ModReview" rv
             WHERE rv."modId" = m."id" AND rv."status" = 'visible' AND rv."authorRepliedAt" IS NULL) AS "reviews"
      FROM "Mod" m WHERE m."id" = ANY(${sql.param([...modIds])}::int[])`);
  for (const r of res.rows) {
    map.set(Number(r.modId), {
      modId: Number(r.modId),
      openCompatReports: Number(r.compat),
      unansweredComments: Number(r.comments),
      unansweredReviews: Number(r.reviews),
    });
  }
  return map;
}

/** `GET /studio/mods`: my mods and builds (any status), most recently released first. */
/** Filters of «My mods» (`StudioModsQuery`). Without `page` / `pageSize` the whole list is returned. */
export interface StudioModsFilter {
  q?: string | undefined;
  status?: ModStatus | undefined;
  category?: string | undefined;
  sort?: 'downloads' | 'updated' | 'name' | 'rating' | 'attention' | undefined;
  page?: number | undefined;
  pageSize?: number | undefined;
}

type StudioModList = {
  items: StudioModRowDTO[];
  page?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  facets?: {
    status: Partial<Record<ModStatus, number>>;
    categories: Array<{ slug: string; nameKey: string; name: string; count: number }>;
  };
};

function attentionScore(row: StudioModRowDTO): number {
  return (
    row.openCompatReports * 3 +
    row.unansweredComments +
    row.unansweredReviews +
    (row.mod.status === 'rejected' ? 100 : 0)
  );
}

const nameCollator = new Intl.Collator('en', { sensitivity: 'base', numeric: true });

/** Filters, sorts and (when asked) paginates the rows of «My mods». Exported for tests. */
export function refineStudioMods(all: StudioModRowDTO[], filter: StudioModsFilter): StudioModList {
  const paged = filter.page !== undefined || filter.pageSize !== undefined;
  const q = filter.q?.trim().toLowerCase() ?? '';
  const statusFacets: Partial<Record<ModStatus, number>> = {};
  const categoryFacets = new Map<string, { slug: string; nameKey: string; name: string; count: number }>();
  for (const row of all) {
    statusFacets[row.mod.status] = (statusFacets[row.mod.status] ?? 0) + 1;
    const category = row.mod.category;
    if (category) {
      const entry = categoryFacets.get(category.slug);
      if (entry) entry.count += 1;
      else
        categoryFacets.set(category.slug, {
          slug: category.slug,
          nameKey: category.nameKey,
          name: category.name,
          count: 1,
        });
    }
  }
  let rows = all.filter(
    (row) =>
      (!q || row.mod.name.toLowerCase().includes(q)) &&
      (!filter.status || row.mod.status === filter.status) &&
      (!filter.category || row.mod.category?.slug === filter.category),
  );
  switch (filter.sort) {
    case 'downloads':
      rows = [...rows].sort((a, b) => b.downloads7d - a.downloads7d || b.mod.downloads - a.mod.downloads);
      break;
    case 'name':
      rows = [...rows].sort((a, b) => nameCollator.compare(a.mod.name, b.mod.name));
      break;
    case 'rating':
      rows = [...rows].sort(
        (a, b) => (b.mod.ratingAvg ?? 0) - (a.mod.ratingAvg ?? 0) || b.mod.ratingCount - a.mod.ratingCount,
      );
      break;
    case 'attention':
      rows = [...rows].sort((a, b) => attentionScore(b) - attentionScore(a));
      break;
    default:
      // `updated` and the unspecified order keep the database order (latest release first).
      break;
  }
  if (!paged) return { items: rows };
  const pageSize = filter.pageSize ?? 20;
  const total = rows.length;
  const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
  const page = Math.min(filter.page ?? 1, Math.max(1, totalPages));
  return {
    items: rows.slice((page - 1) * pageSize, page * pageSize),
    page,
    pageSize,
    total,
    totalPages,
    facets: {
      status: statusFacets,
      categories: [...categoryFacets.values()].sort((a, b) => nameCollator.compare(a.name, b.name)),
    },
  };
}

export async function listStudioMods(
  ctx: Ctx,
  deps: PublishingDeps,
  filter: StudioModsFilter = {},
): Promise<StudioModList> {
  const actor = actorOf(ctx);
  const own = await ctx.db.execute<{ id: number; statusReason: string | null; qualityScore: number | null }>(sql`
    SELECT "id", "statusReason", "qualityScore" FROM "Mod" WHERE "userId" = ${actor.userId}
     ORDER BY "lastReleasedAt" DESC, "id" DESC`);
  if (own.rows.length === 0) return refineStudioMods([], filter);
  let snapshot = await getSnapshot(ctx, deps.config);
  if (own.rows.some((r) => !snapshot.byId.has(Number(r.id)))) {
    evictLocal(ctx, ['list:mods', 'list:builds']);
    snapshot = await getSnapshot(ctx, deps.config);
  }
  const stats = await rowStats(
    ctx.db,
    own.rows.map((r) => Number(r.id)),
  );
  const items: StudioModRowDTO[] = [];
  for (const r of own.rows) {
    const entry = snapshot.byId.get(Number(r.id));
    if (!entry) continue;
    const s = stats.get(entry.id);
    items.push({
      mod: entry.card,
      statusReason: r.statusReason,
      downloads7d: entry.downloads7d,
      openCompatReports: s?.openCompatReports ?? 0,
      unansweredComments: s?.unansweredComments ?? 0,
      unansweredReviews: s?.unansweredReviews ?? 0,
      qualityScore: Math.max(0, Math.min(100, Number(r.qualityScore ?? 0))),
    });
  }
  return refineStudioMods(items, filter);
}

/** Owner view (`GET /studio/mods/:id` and the response of every studio write). */
export async function getStudioMod(ctx: Ctx, deps: PublishingDeps, modId: number): Promise<StudioModDTO> {
  const row = await loadManagedMod(ctx, modId);
  const { snapshot, entry } = await entryOf(ctx, deps, row.id);
  const kind = kindOfType(row.type);
  const [detail, versions, facts, descriptionFormat, media] = await Promise.all([
    buildModDetail(ctx, deps.config, snapshot, entry),
    ownerVersions(ctx, snapshot, entry),
    storedListingFacts(ctx.db, row.id, kind === 'build' ? 'build' : 'mod'),
    descriptionFormatOf(ctx.db, row.id),
    studioMedia(ctx, deps, row.id),
  ]);
  const legacy = descriptionFormat === 'legacy';
  const descriptionMd = row.descriptionMd ?? row.description;
  const listingPreflight: PreflightFacts = {
    mode: 'edit',
    listing: facts,
    file: { state: 'none', flags: [] },
    slugValid: true,
    slugTaken: false,
    manifestIdTaken: false,
    categoryValid: facts.categorySlug !== null,
    unknownTags: [],
    unknownDependencies: (versions.find((v) => v.isLatest)?.dependencies ?? [])
      .filter((d) => d.state === 'missing' && d.kind !== 'conflicts')
      .map((d) => d.manifestId),
    dependencyCycles: [],
    mediaPending: 0,
    mediaInvalid: 0,
    descriptionRawHtml: rawHtmlWarning(row.descriptionMd, legacy),
    changelogMd: null,
  };
  const status = modStatusOf(row.status);
  return {
    mod: { ...detail, descriptionMd },
    descriptionMd,
    descriptionFormat,
    statusReason: row.statusReason,
    qualityScore: qualityScore(facts),
    preflight: preflight(listingPreflight),
    allowedTransitions: allowedTransitions(status),
    versions,
    media,
  };
}

type GalleryRow = MediaRow & { mediaId: string | null; url: string; alt: string | null } & Record<string, unknown>;

/**
 * Media ids of the owner view: the cover (`Mod.thumbnailMediaId`) and the gallery in the order and
 * with the URLs of `ModDetailDTO.gallery` (legacy rows not adopted by B15 have no media id).
 */
async function studioMedia(ctx: Ctx, deps: PublishingDeps, modId: number): Promise<StudioModDTO['media']> {
  const [cover, gallery] = await Promise.all([
    ctx.db.execute<{ thumbnailMediaId: string | null }>(
      sql`SELECT "thumbnailMediaId" FROM "Mod" WHERE "id" = ${modId}`,
    ),
    ctx.db.execute<GalleryRow>(
      sql`SELECT i."mediaId", i."url", i."alt", med."width", med."height", med."thumbhash", med."dominantColor",
                 med."variants", med."sourceBucket", med."sourceKey"
            FROM "ModImage" i LEFT JOIN "Media" med ON med."id" = i."mediaId"
           WHERE i."modId" = ${modId} AND NOT i."isThumbnail"
           ORDER BY i."position" NULLS LAST, i."isPrimary" DESC, i."id"`,
    ),
  ]);
  const items: StudioModDTO['media']['gallery'] = [];
  for (const g of gallery.rows) {
    const image = imageDto(deps.config, g.sourceKey === null && g.variants === null ? null : g, g.url, g.alt);
    if (image) items.push({ mediaId: g.mediaId, url: image.url });
  }
  return { thumbnailMediaId: cover.rows[0]?.thumbnailMediaId ?? null, gallery: items };
}

// -----------------------------------------------------------------------------------------------
// Listing and media
// -----------------------------------------------------------------------------------------------

async function afterModWrite(ctx: Ctx, tx: Executor, current: Mod, fields: readonly string[]): Promise<void> {
  const kind = kindOfType(current.type);
  const facts = await storedListingFacts(tx, current.id, kind === 'build' ? 'build' : 'mod');
  await tx
    .update(mod)
    .set({ qualityScore: qualityScore(facts) })
    .where(eq(mod.id, current.id));
  if (fields.length === 0) return;
  const routing = await modRouting(tx, current.id);
  await ctx.jobs.emitNew(
    tx,
    'mod.updated',
    {
      modId: current.id,
      authorId: routing.authorId,
      kind: routing.kind,
      categorySlug: routing.categorySlug,
      fields: [...fields],
    },
    { actorId: ctx.actor?.userId ?? null },
  );
  await publishCacheInvalidation(tx, modTags(current.id, current.userId, kind));
}

/** `PATCH /studio/mods/:id`. */
export async function updateStudioMod(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  body: UpdateStudioModBody,
): Promise<StudioModDTO> {
  assertWriter(ctx);
  const current = await loadOwnedMod(ctx, modId);
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot be edited');
  const kind = kindOfType(current.type);
  const format = await descriptionFormatOf(ctx.db, current.id);
  // «Convert to Markdown»: the stored source is re-rendered with the `full` profile (no way back).
  const convert = body.descriptionFormat === 'markdown' && format === 'legacy';
  const legacy = format === 'legacy' && !convert;
  const { descriptionFormat: _format, ...fields } = body;
  const input =
    convert && fields.descriptionMd === undefined
      ? { ...fields, descriptionMd: current.descriptionMd ?? current.description }
      : fields;
  const now = ctx.clock.now();
  const listing = await resolveListing(ctx.db, input, {
    kind,
    legacy,
    now,
    current: {
      platform: current.platform,
      multiplayerRole: current.multiplayerRole,
      dedicatedServer: current.dedicatedServer,
    },
  });
  if (listing.fields.length > 0) {
    await ctx.db.transaction(async (tx) => {
      await lockOwnedMod(ctx, tx, current.id);
      await persistDescriptionFormat(tx, current.id, format);
      if (Object.keys(listing.columns).length > 0)
        await tx.update(mod).set(listing.columns).where(eq(mod.id, current.id));
      if (listing.tagIds) await setModTags(tx, current.id, listing.tagIds);
      await afterModWrite(ctx, tx, current, listing.fields);
    });
    evictLocal(ctx, modTags(current.id, current.userId, kind));
    ctx.log.info({ modId: current.id, fields: listing.fields }, 'mod listing updated');
  }
  return getStudioMod(ctx, deps, current.id);
}

/** `PUT /studio/mods/:id/media`. */
export async function putStudioModMedia(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  body: PutModMediaBody,
): Promise<StudioModDTO> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const current = await loadOwnedMod(ctx, modId);
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot be edited');
  const kind = kindOfType(current.type);
  const changed = await ctx.db.transaction(async (tx) => {
    await lockOwnedMod(ctx, tx, current.id);
    const result = await writeMediaSet(
      tx,
      current.id,
      { thumbnailMediaId: body.thumbnailMediaId, gallery: body.gallery },
      {
        mediaBaseUrl: deps.config.mediaBaseUrl,
        publicBucket: deps.config.publicBucket,
        actorId: actor.userId,
        isAdmin: actor.role === 'admin',
      },
    );
    if (result.changed) {
      await tx.update(mod).set({ updatedAt: ctx.clock.now(), editedAt: ctx.clock.now() }).where(eq(mod.id, current.id));
      await afterModWrite(ctx, tx, current, ['media']);
    }
    return result.changed;
  });
  if (changed) evictLocal(ctx, modTags(current.id, current.userId, kind));
  return getStudioMod(ctx, deps, current.id);
}

// -----------------------------------------------------------------------------------------------
// Versions
// -----------------------------------------------------------------------------------------------

async function ownerVersion(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  versionId: number,
): Promise<OwnerVersionDTO> {
  const { snapshot, entry } = await entryOf(ctx, deps, modId);
  const [version] = await ownerVersions(ctx, snapshot, entry, versionId);
  if (!version) throw errors.notFound('Version');
  return version;
}

/** `POST /studio/mods/:id/versions`. */
export async function createStudioVersion(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  body: {
    uploadId: string;
    changelogMd: string;
    channel: 'release' | 'beta';
    testedGameBuildIds: readonly number[];
    notifyFollowers: boolean;
  },
): Promise<OwnerVersionDTO> {
  const result = await releaseVersion(ctx, deps, modId, body);
  return ownerVersion(ctx, deps, modId, result.versionId);
}

/** `PATCH /studio/mods/:id/versions/:vid`: changelog, tested builds, yank or unyank. */
export async function updateStudioVersion(
  ctx: Ctx,
  deps: PublishingDeps,
  modId: number,
  versionId: number,
  body: UpdateVersionBody,
): Promise<OwnerVersionDTO> {
  assertWriter(ctx);
  if (body.yank && body.unyank) {
    throw errors.validation('Yank or unyank, not both', [
      { path: 'yank', code: 'invalid', message: 'yank and unyank' },
    ]);
  }
  const current = await loadManagedMod(ctx, modId);
  if (current.status === 'removed') throw errors.forbidden('A removed mod cannot be edited');
  const kind = kindOfType(current.type);
  const now = ctx.clock.now();

  await ctx.db.transaction(async (tx) => {
    await lockManagedMod(ctx, tx, current.id);
    const [version] = await tx
      .select()
      .from(modVersion)
      .where(and(eq(modVersion.id, versionId), eq(modVersion.modId, current.id)))
      .for('update')
      .limit(1);
    if (!version) throw errors.notFound('Version');
    const routing = await modRouting(tx, current.id);
    const touched = new Set<string>();

    if (body.changelogMd !== undefined) {
      const rendered = renderChangelog(body.changelogMd, version.id);
      await tx
        .update(modVersion)
        .set({
          changelogMd: body.changelogMd,
          changelogHtml: rendered.html,
          changelog: legacyText(body.changelogMd),
          updatedAt: now,
        })
        .where(eq(modVersion.id, version.id));
      touched.add('changelog');
    }
    if (body.testedGameBuildIds !== undefined) {
      const builds = [...new Set(body.testedGameBuildIds)];
      await tx.execute(sql`
        UPDATE "ModVersionCompat" SET "authorTested" = false
         WHERE "modVersionId" = ${version.id} AND "authorTested" AND NOT ("gameBuildId" = ANY(${sql.param(builds)}::int[]))`);
      if (builds.length > 0) {
        await tx.execute(sql`
          INSERT INTO "ModVersionCompat" ("modVersionId", "gameBuildId", "authorTested", "updatedAt")
          SELECT ${version.id}, g."id", true, now() FROM "GameBuild" g WHERE g."id" = ANY(${sql.param(builds)}::int[])
          ON CONFLICT ("modVersionId", "gameBuildId") DO UPDATE SET "authorTested" = true`);
      }
      if (version.status === 'active') {
        for (const gameBuildId of builds) {
          await ctx.jobs.enqueue('compat.aggregate', { modVersionId: version.id, gameBuildId }, { tx });
        }
      }
      touched.add('testedGameBuilds');
    }
    if (body.yank) {
      if (version.status !== 'active') throw errors.conflict('Only an active version can be yanked');
      await tx
        .update(modVersion)
        .set({ status: 'yanked', statusReason: body.yank.reason, updatedAt: now })
        .where(eq(modVersion.id, version.id));
      await recomputeLatest(tx, current.id, kind);
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        { ...routingOf(routing), versionId: version.id, from: 'active', to: 'yanked', reason: body.yank.reason },
        { actorId: ctx.actor?.userId ?? null },
      );
      await audit(ctx, tx, {
        action: 'version.yank',
        targetType: 'version',
        targetId: version.id,
        before: { status: 'active' },
        after: { status: 'yanked' },
        reason: body.yank.reason,
      });
      touched.add('status');
    }
    if (body.unyank) {
      if (version.status !== 'yanked') throw errors.conflict('Only a yanked version can be restored');
      await tx
        .update(modVersion)
        .set({ status: 'active', statusReason: null, updatedAt: now })
        .where(eq(modVersion.id, version.id));
      await recomputeLatest(tx, current.id, kind);
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        { ...routingOf(routing), versionId: version.id, from: 'yanked', to: 'active', reason: null },
        { actorId: ctx.actor?.userId ?? null },
      );
      await audit(ctx, tx, {
        action: 'version.unyank',
        targetType: 'version',
        targetId: version.id,
        before: { status: 'yanked' },
        after: { status: 'active' },
      });
      touched.add('status');
    }
    if (touched.size > 0) {
      await tx.update(mod).set({ updatedAt: now }).where(eq(mod.id, current.id));
      await publishCacheInvalidation(tx, modTags(current.id, current.userId, kind));
    }
  });
  evictLocal(ctx, modTags(current.id, current.userId, kind));
  return ownerVersion(ctx, deps, current.id, versionId);
}

function routingOf(r: Awaited<ReturnType<typeof modRouting>>) {
  return { modId: r.modId, authorId: r.authorId, kind: r.kind, categorySlug: r.categorySlug };
}

// -----------------------------------------------------------------------------------------------
// Status transitions
// -----------------------------------------------------------------------------------------------

function stateOf(row: Pick<Mod, 'id' | 'status' | 'statusReason'>): StudioModStateDTO {
  const status = modStatusOf(row.status);
  return { modId: row.id, status, statusReason: row.statusReason, allowedTransitions: allowedTransitions(status) };
}

type TransitionAction = 'archive' | 'unlist' | 'publish';

const TARGET: Record<TransitionAction, (from: ModStatus) => ModStatus | null> = {
  archive: (from) => (from === 'published' || from === 'unlisted' ? 'archived' : null),
  unlist: (from) => (from === 'published' || from === 'archived' ? 'unlisted' : null),
  publish: (from) =>
    from === 'unlisted' || from === 'archived' ? 'published' : from === 'rejected' ? 'pending' : null,
};

/** `POST /studio/mods/:id/{archive,unlist,publish}`. */
export async function transitionStudioMod(
  ctx: Ctx,
  modId: number,
  action: TransitionAction,
  options: { successorModId?: number | undefined } = {},
): Promise<StudioModStateDTO> {
  assertWriter(ctx);
  const current = await loadOwnedMod(ctx, modId);
  const kind = kindOfType(current.type);
  const now = ctx.clock.now();

  const updated = await ctx.db.transaction(async (tx) => {
    const locked = await lockOwnedMod(ctx, tx, current.id);
    const from = modStatusOf(locked.status);
    const to = TARGET[action](from);
    if (!to)
      throw errors.conflict(
        `A ${from} mod cannot be ${action === 'publish' ? 'published' : `${action}d`} by its author`,
      );

    let successorModId: number | null = locked.successorModId;
    if (action === 'archive' && options.successorModId !== undefined) {
      if (options.successorModId === locked.id) {
        throw errors.validation('A mod cannot succeed itself', [
          { path: 'successorModId', code: 'invalid', message: 'same mod' },
        ]);
      }
      const successor = await tx.execute<{ status: string }>(
        sql`SELECT "status" FROM "Mod" WHERE "id" = ${options.successorModId}`,
      );
      if (successor.rows[0]?.status !== 'published') {
        throw errors.validation('The successor must be a published mod', [
          { path: 'successorModId', code: 'invalid', message: 'successor not published' },
        ]);
      }
      successorModId = options.successorModId;
    }
    if (action === 'publish' && from === 'rejected') {
      // Resubmission: the latest version goes back to review too.
      await tx.execute(sql`
        UPDATE "ModVersion" SET "status" = 'pending', "statusReason" = NULL, "updatedAt" = ${now}
         WHERE "modId" = ${locked.id} AND "isLatest" AND "status" = 'rejected'`);
    }
    const [row] = await tx
      .update(mod)
      .set({
        status: to,
        statusReason: null,
        statusChangedAt: now,
        updatedAt: now,
        ...(to === 'archived' ? { archivedAt: now, successorModId } : {}),
        ...(to === 'published' ? { archivedAt: null } : {}),
      })
      .where(eq(mod.id, locked.id))
      .returning();
    if (!row) throw errors.notFound('Mod');
    const routing = await modRouting(tx, locked.id);
    await ctx.jobs.emitNew(
      tx,
      'mod.status_changed',
      { ...routingOf(routing), from, to, reason: null, templateKey: null },
      { actorId: ctx.actor?.userId ?? null },
    );
    await audit(ctx, tx, {
      action: `mod.${action === 'publish' && from === 'rejected' ? 'resubmit' : action}`,
      targetType: 'mod',
      targetId: locked.id,
      before: { status: from },
      after: { status: to, ...(to === 'archived' ? { successorModId } : {}) },
    });
    await publishCacheInvalidation(tx, [...modTags(locked.id, locked.userId, kind), 'sitemap', 'feed', 'home']);
    return row;
  });
  evictLocal(ctx, modTags(current.id, current.userId, kind));
  ctx.log.info({ modId: current.id, action, status: updated.status }, 'mod status changed by its author');
  return stateOf(updated);
}

/** `POST /studio/mods/:id/request-removal`: opens (once) a report for the moderators. */
export async function requestStudioModRemoval(ctx: Ctx, modId: number, reason: string): Promise<StudioModStateDTO> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const current = await loadOwnedMod(ctx, modId);
  if (current.status === 'removed') throw errors.conflict('This mod is already removed');
  await ctx.db.transaction(async (tx) => {
    const open = await tx.execute<{ id: number }>(sql`
      SELECT "id" FROM "Report"
       WHERE "targetType" = 'mod' AND "targetId" = ${current.id} AND "reporterId" = ${actor.userId}
         AND "status" = 'open' AND "details" LIKE '[author removal request]%' LIMIT 1`);
    if (open.rows[0]) return;
    await tx.insert(report).values({
      reporterId: actor.userId,
      targetType: 'mod',
      targetId: current.id,
      reason: 'other',
      details: `[author removal request] ${reason.trim()}`.slice(0, 2000),
    });
    await audit(ctx, tx, {
      action: 'mod.request_removal',
      targetType: 'mod',
      targetId: current.id,
      before: { status: current.status },
      reason: reason.trim(),
    });
  });
  ctx.log.info({ modId: current.id }, 'author requested the removal of a mod');
  return stateOf(current);
}
