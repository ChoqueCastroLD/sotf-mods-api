/**
 * Kits service (PLAN §7.8, T0-18): create, edit, delete (soft), items with automatic
 * dependencies, fork with attribution, revisions and the public reads (by id, slug, code,
 * listings, profile tab, "my kits").
 *
 * Visibility: `public` kits are listed; `unlisted` kits are reachable by id, slug or code only;
 * `private` kits only by their owner (404 for everybody else, never 403, so existence does not
 * leak). Kits of deleted or banned owners are hidden from everybody but the owner.
 *
 * Every write runs in one transaction with its domain event (`kit.created|updated|deleted`, which
 * purges `kit:{id}`, `list:kits` and `user:{ownerId}`). Items are replaced as a whole; the
 * required dependencies of the explicit items (of their pinned or latest version, transitively)
 * are appended as `isAutoDependency`. A change of the items bumps `Kit.revision` and records a
 * `KitRevision` (`changes = {summary, added, removed, reordered, edited}`).
 */
import type {
  CreateKitBody,
  ForkKitBody,
  KitCardDTO,
  KitDTO,
  KitListQuery,
  PutKitItemsBody,
  UpdateKitBody,
} from '@sotf/contracts/kits';
import { KIT_LIMITS, normalizeKitCode } from '@sotf/contracts/kits';
import { totalPages } from '@sotf/contracts/pagination';
import { type Executor, type JsonObject, type Transaction, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { type CatalogSnapshot, getSnapshot } from '../catalog/snapshot.ts';
import { resolveUserId } from '../catalog/users.ts';
import { textToHtml } from '../catalog/versions.ts';
import { at, intArray, query, queryOne, sqlState } from '../follows/sql.ts';
import type { Actor, Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { assertCan } from '../permissions/can.ts';
import {
  buildKitCards,
  buildKitDto,
  type ItemRow,
  isAddable,
  type KitRow,
  type KitView,
  kitCompatOf,
  loadItems,
  loadKitRow,
  loadKitRows,
  makeResolver,
  type ResolvedVersion,
  resolveVersions,
  viewOf,
} from './read.ts';
import {
  compatWorks,
  deletedSlug,
  diffItems,
  generateKitCode,
  REVISION_SUMMARY_MAX,
  resolveAutoDependencies,
  revisionSummary,
  type StoredItem,
  slugCandidate,
  slugFromName,
} from './rules.ts';

export interface KitsDeps {
  config: CatalogConfig;
  /**
   * Renders a kit description (Markdown) to safe HTML. Defaults to escaped paragraphs until core
   * depends on `@sotf/markdown` (docs/backlog/WP-42.md).
   */
  renderDescription?: (md: string) => string;
}

/** A kit and how the viewer sees it (`owner` responses must not be cached publicly). */
export interface KitResult {
  kit: KitDTO;
  view: KitView;
}

type CreateInput = z.output<typeof CreateKitBody>;
type UpdateInput = z.output<typeof UpdateKitBody>;
type ItemsInput = z.output<typeof PutKitItemsBody>;
type ForkInput = z.output<typeof ForkKitBody>;
type ListInput = z.output<typeof KitListQuery>;

const MAX_CREATE_ATTEMPTS = 20;
/** Levels of transitive dependencies resolved (a guard against pathological chains). */
const MAX_DEPENDENCY_DEPTH = 16;

function actorOf(ctx: Ctx): Actor {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor;
}

function renderOf(deps: KitsDeps): (md: string) => string {
  return deps.renderDescription ?? textToHtml;
}

function describe(deps: KitsDeps, md: string | null | undefined): { md: string | null; html: string | null } {
  const trimmed = md?.trim() ?? '';
  if (trimmed === '') return { md: null, html: null };
  return { md: trimmed, html: renderOf(deps)(trimmed) };
}

// -----------------------------------------------------------------------------------------------
// Reads
// -----------------------------------------------------------------------------------------------

async function respond(ctx: Ctx, deps: KitsDeps, db: Executor, kit: KitRow, view: KitView): Promise<KitResult> {
  const snapshot = await getSnapshot(ctx, deps.config);
  return { kit: await buildKitDto(db, deps.config, snapshot, kit, view), view };
}

function visibleOr404(kit: KitRow | null | undefined, ctx: Ctx): { kit: KitRow; view: KitView } {
  const view = kit ? viewOf(kit, ctx.actor?.userId ?? null) : null;
  if (!kit || !view) throw errors.notFound('Kit');
  return { kit, view };
}

/**
 * `GET /kits/:id` and the other public reads. They are edge-cacheable and the platform does not
 * resolve sessions for them (a cached response must not vary by cookie), so they always answer
 * as for an anonymous visitor: private kits are 404 there, even for their owner. Owners read their
 * kits with `getOwnKit`.
 */
export async function getKit(ctx: Ctx, deps: KitsDeps, kitId: number): Promise<KitResult> {
  const { kit, view } = visibleOr404(await loadKitRow(ctx.db, kitId), ctx);
  return respond(ctx, deps, ctx.db, kit, view);
}

/** `GET /kits/by-slug/:user/:slug` (owner handle case-insensitive, slug exact). */
export async function getKitBySlug(ctx: Ctx, deps: KitsDeps, handle: string, slug: string): Promise<KitResult> {
  const [row] = await loadKitRows(
    ctx.db,
    sql`lower(u."slug") = lower(${handle}) AND k."slug" = ${slug} AND k."deletedAt" IS NULL`,
    sql`(u."slug" = ${handle}) DESC, k."id"`,
  );
  const { kit, view } = visibleOr404(row, ctx);
  return respond(ctx, deps, ctx.db, kit, view);
}

/** `GET /kits/by-code/:code` (`KIT-XXXX-XX`, the short `XXXXXX` form, any case, confusables folded). */
export async function getKitByCode(ctx: Ctx, deps: KitsDeps, input: string): Promise<KitResult> {
  const code = normalizeKitCode(input);
  if (!code) throw errors.notFound('Kit');
  const [row] = await loadKitRows(ctx.db, sql`k."code" = ${code}`);
  const { kit, view } = visibleOr404(row, ctx);
  return respond(ctx, deps, ctx.db, kit, view);
}

/**
 * The owner's view of one of their kits, of any visibility, with `descriptionMd` (for the editor;
 * private response). 404 for kits of others.
 */
export async function getOwnKit(ctx: Ctx, deps: KitsDeps, kitId: number): Promise<KitResult> {
  const actor = actorOf(ctx);
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit || kit.ownerId !== actor.userId || viewOf(kit, actor.userId) !== 'owner') throw errors.notFound('Kit');
  return respond(ctx, deps, ctx.db, kit, 'owner');
}

export interface KitPage {
  items: KitCardDTO[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/** Condition of the public listing: public, alive, with items, of a visible owner. */
const LISTED = sql`k."visibility" = 'public' AND k."deletedAt" IS NULL AND k."itemsCount" > 0
  AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL`;

/**
 * `GET /kits`: public kits. `popular` = followers, then forks, staff picks and freshness; `new` =
 * creation date. `compat=works` keeps kits with no broken item and no conflict on the current
 * build.
 */
export async function listKits(ctx: Ctx, deps: KitsDeps, input: ListInput): Promise<KitPage> {
  const staffPick = input.staffPick === true ? sql` AND k."isStaffPick"` : sql``;
  const order =
    input.sort === 'new'
      ? sql`k."createdAt" DESC, k."id" DESC`
      : sql`k."followersCount" DESC, "forks" DESC, k."isStaffPick" DESC, k."updatedAt" DESC, k."id" DESC`;
  let ids = (
    await query<{ id: number }>(
      ctx.db,
      sql`SELECT k."id",
                 (SELECT count(*) FROM "Kit" f
                   WHERE f."forkedFromId" = k."id" AND f."deletedAt" IS NULL AND f."visibility" <> 'private') AS "forks"
            FROM "Kit" k JOIN "User" u ON u."id" = k."ownerId"
           WHERE ${LISTED}${staffPick}
           ORDER BY ${order}`,
    )
  ).map((r) => r.id);
  const snapshot = await getSnapshot(ctx, deps.config);
  if (input.compat === 'works' && ids.length > 0) {
    const items = await loadItems(ctx.db, ids);
    const byKit = groupItems(items);
    const versions = await resolveVersions(ctx.db, uniqueResolutions(items));
    ids = ids.filter((id) => compatWorks(kitCompatOf(snapshot, byKit.get(id) ?? [], versions)));
  }
  return pageOfIds(ctx, deps, snapshot, ids, input.page, input.pageSize);
}

/** `GET /users/:handle/kits`: public kits of a user, newest edit first (empty when `hideKits`). */
export async function listUserKits(
  ctx: Ctx,
  deps: KitsDeps,
  handle: string,
  paging: { page: number; pageSize: number },
): Promise<{ userId: number; page: KitPage }> {
  const user = await resolveUserId(ctx, handle);
  const snapshot = await getSnapshot(ctx, deps.config);
  if (user.privacy.hideKits) {
    return {
      userId: user.id,
      page: { items: [], page: paging.page, pageSize: paging.pageSize, total: 0, totalPages: 0 },
    };
  }
  const ids = (
    await query<{ id: number }>(
      ctx.db,
      sql`SELECT "id" FROM "Kit" WHERE "ownerId" = ${user.id} AND "visibility" = 'public' AND "deletedAt" IS NULL
           ORDER BY "updatedAt" DESC, "id" DESC`,
    )
  ).map((r) => r.id);
  return { userId: user.id, page: await pageOfIds(ctx, deps, snapshot, ids, paging.page, paging.pageSize) };
}

async function pageOfIds(
  ctx: Ctx,
  deps: KitsDeps,
  snapshot: CatalogSnapshot,
  ids: readonly number[],
  page: number,
  pageSize: number,
): Promise<KitPage> {
  const slice = ids.slice((page - 1) * pageSize, page * pageSize);
  const rows = slice.length === 0 ? [] : await loadKitRows(ctx.db, sql`k."id" = ANY(${intArray(slice)})`);
  const byId = new Map(rows.map((r) => [r.id, r]));
  const ordered = slice.map((id) => byId.get(id)).filter((r): r is KitRow => r !== undefined);
  return {
    items: await buildKitCards(ctx.db, deps.config, snapshot, ordered),
    page,
    pageSize,
    total: ids.length,
    totalPages: totalPages(ids.length, pageSize),
  };
}

/** Maximum kits returned by `GET /me/kits`. */
export const MY_KITS_MAX = 500;

/** `GET /me/kits`: the signed-in user's kits of any visibility, newest edit first. */
export async function listMyKits(ctx: Ctx, deps: KitsDeps): Promise<KitCardDTO[]> {
  return recentKitCards(ctx, deps, actorOf(ctx).userId, MY_KITS_MAX);
}

/** A user's kits (any visibility), newest edit first: `/me/kits` and the `/me/home` block. */
export async function recentKitCards(ctx: Ctx, deps: KitsDeps, userId: number, limit = 3): Promise<KitCardDTO[]> {
  const rows = await loadKitRows(
    ctx.db,
    sql`k."ownerId" = ${userId} AND k."deletedAt" IS NULL`,
    sql`k."updatedAt" DESC, k."id" DESC LIMIT ${Math.max(1, Math.min(limit, MY_KITS_MAX))}`,
  );
  return buildKitCards(ctx.db, deps.config, await getSnapshot(ctx, deps.config), rows);
}

function groupItems(items: readonly ItemRow[]): Map<number, ItemRow[]> {
  const out = new Map<number, ItemRow[]>();
  for (const item of items) out.set(item.kitId, [...(out.get(item.kitId) ?? []), item]);
  return out;
}

/**
 * One resolution per mod across kits: a mod pinned differently in two kits resolves to its latest
 * version for the listing filter (the detail page always uses the kit's own pin).
 */
function uniqueResolutions(items: readonly ItemRow[]): Array<{ modId: number; pinnedVersionId: number | null }> {
  const byMod = new Map<number, number | null>();
  for (const item of items) {
    const previous = byMod.get(item.modId);
    byMod.set(
      item.modId,
      previous === undefined ? item.pinnedVersionId : previous === item.pinnedVersionId ? previous : null,
    );
  }
  return [...byMod].map(([modId, pinnedVersionId]) => ({ modId, pinnedVersionId }));
}

// -----------------------------------------------------------------------------------------------
// Writes: helpers
// -----------------------------------------------------------------------------------------------

/** Loads a kit for a write, locked: 404 unless the actor can see it, 403 unless they own it. */
async function lockOwnKit(
  ctx: Ctx,
  tx: Transaction,
  kitId: number,
  action: 'kit.edit' | 'kit.delete',
): Promise<KitRow> {
  const actor = actorOf(ctx);
  const kit = await loadKitRow(tx, kitId, true);
  const view = kit ? viewOf(kit, actor.userId) : null;
  if (!kit || !view) throw errors.notFound('Kit');
  assertCan(actor, action, { ownerId: kit.ownerId }, ctx.clock.now());
  return kit;
}

/** `Media` id behind an image upload of the actor, for a kit cover. */
async function coverMediaOf(db: Executor, userId: number, uploadId: string): Promise<string> {
  const found = await queryOne<{ mediaId: string | null; status: string; purpose: string; mediaStatus: string | null }>(
    db,
    sql`SELECT m."id" AS "mediaId", up."status", up."purpose", m."status" AS "mediaStatus"
          FROM "Upload" up
          LEFT JOIN "Media" m
            ON m."id" = CASE WHEN up."resultRef"->>'mediaId' ~ '^[0-9a-fA-F-]{36}$'
                             THEN (up."resultRef"->>'mediaId')::uuid END
         WHERE up."id" = ${uploadId}::uuid AND up."userId" = ${userId}`,
  );
  if (
    !found?.mediaId ||
    found.purpose !== 'image' ||
    !['processing', 'ready'].includes(found.status) ||
    found.mediaStatus === 'failed'
  ) {
    throw errors.validation('The cover must be an image you uploaded', [
      { path: 'coverUploadId', code: 'invalid', message: 'not a processed image upload of yours' },
    ]);
  }
  return found.mediaId;
}

function slugTaken(): DomainError {
  return new DomainError('CONFLICT', undefined, 'You already have a kit with this slug', {
    internal: { constraint: 'Kit_ownerId_slug_key' },
  });
}

/** Slugs of the owner's kits starting with `base` (to pick the first free derived candidate). */
async function takenSlugs(db: Executor, ownerId: number, base: string): Promise<Set<string>> {
  const list = await query<{ slug: string }>(
    db,
    sql`SELECT "slug" FROM "Kit" WHERE "ownerId" = ${ownerId} AND ("slug" = ${base} OR "slug" LIKE ${`${base.replace(/[\\%_]/g, '\\$&')}-%`})`,
  );
  return new Set(list.map((r) => r.slug));
}

interface NewKit {
  ownerId: number;
  name: string;
  /** Explicit slug (CONFLICT when taken) or null to derive one from the name. */
  slug: string | null;
  descriptionMd: string | null;
  descriptionHtml: string | null;
  visibility: string;
  coverMediaId: string | null;
  forkedFromId: number | null;
}

/**
 * Inserts a kit with a fresh share code and a free slug. Unique violations of the code (a random
 * collision) or of a derived slug (a concurrent create) retry with the next candidate; `ON CONFLICT
 * DO NOTHING` keeps the transaction usable between attempts.
 */
async function insertKit(tx: Transaction, kit: NewKit, now: Date): Promise<{ id: number; code: string }> {
  const base = kit.slug ?? slugFromName(kit.name);
  const taken = kit.slug ? new Set<string>() : await takenSlugs(tx, kit.ownerId, base);
  let attempt = 1;
  for (let tries = 0; tries < MAX_CREATE_ATTEMPTS; tries++) {
    let slug = kit.slug ?? slugCandidate(base, attempt);
    while (!kit.slug && taken.has(slug)) slug = slugCandidate(base, ++attempt);
    const code = generateKitCode();
    const inserted = await queryOne<{ id: number }>(
      tx,
      sql`INSERT INTO "Kit" ("ownerId", "slug", "name", "descriptionMd", "descriptionHtml", "visibility", "code",
                             "coverMediaId", "forkedFromId", "revision", "itemsCount", "createdAt", "updatedAt")
          VALUES (${kit.ownerId}, ${slug}, ${kit.name}, ${kit.descriptionMd}, ${kit.descriptionHtml}, ${kit.visibility},
                  ${code}, ${kit.coverMediaId}::uuid, ${kit.forkedFromId}, 1, 0, ${at(now)}, ${at(now)})
          ON CONFLICT DO NOTHING RETURNING "id"`,
    );
    if (inserted) return { id: inserted.id, code };
    const slugInUse = await queryOne<{ id: number }>(
      tx,
      sql`SELECT "id" FROM "Kit" WHERE "ownerId" = ${kit.ownerId} AND "slug" = ${slug}`,
    );
    if (slugInUse) {
      if (kit.slug) throw slugTaken();
      taken.add(slug);
    }
    // Otherwise the random code collided: try again with another code.
  }
  throw errors.unavailable('Could not allocate a kit code, try again');
}

async function recordRevision(tx: Transaction, kitId: number, revision: number, changes: JsonObject, now: Date) {
  await tx.execute(
    sql`INSERT INTO "KitRevision" ("kitId", "revision", "changes", "createdAt")
        VALUES (${kitId}, ${revision}, ${JSON.stringify(changes)}::jsonb, ${at(now)})
        ON CONFLICT ("kitId", "revision") DO UPDATE SET "changes" = EXCLUDED."changes", "createdAt" = EXCLUDED."createdAt"`,
  );
}

async function writeItems(tx: Transaction, kitId: number, items: ReadonlyArray<StoredItem & { addedAt: Date }>) {
  await tx.execute(sql`DELETE FROM "KitItem" WHERE "kitId" = ${kitId}`);
  for (const [position, item] of items.entries()) {
    await tx.execute(
      sql`INSERT INTO "KitItem" ("kitId", "modId", "position", "note", "pinnedVersionId", "isAutoDependency", "addedAt")
          VALUES (${kitId}, ${item.modId}, ${position}, ${item.note}, ${item.pinnedVersionId}, ${item.isAutoDependency},
                  ${at(item.addedAt)})`,
    );
  }
}

/**
 * Resolves the stored item list of an explicit list: validates the mods (new ones must be
 * addable; mods already in the kit may stay even if they were archived or removed since) and the
 * pins (an `active` version of that mod, or the current pin), then appends the required
 * dependencies as `auto`.
 */
async function resolveItems(
  tx: Transaction,
  snapshot: CatalogSnapshot,
  current: readonly ItemRow[],
  input: ItemsInput['items'],
): Promise<StoredItem[]> {
  const currentByMod = new Map(current.map((i) => [i.modId, i]));
  const problems: Array<{ path: string; code: string; message: string }> = [];
  for (const [index, item] of input.entries()) {
    const entry = snapshot.byId.get(item.modId);
    const kept = currentByMod.has(item.modId) && entry !== undefined;
    if (!kept && !isAddable(snapshot, entry)) {
      problems.push({ path: `items.${index}.modId`, code: 'not_found', message: 'mod not found or not available' });
    }
  }
  const pins = input.filter((i) => i.pinnedVersionId !== undefined).map((i) => i.pinnedVersionId as number);
  const pinRows =
    pins.length === 0
      ? []
      : await query<{ id: number; modId: number; status: string }>(
          tx,
          sql`SELECT "id", "modId", "status" FROM "ModVersion" WHERE "id" = ANY(${intArray(pins)})`,
        );
  const pinById = new Map(pinRows.map((r) => [r.id, r]));
  for (const [index, item] of input.entries()) {
    if (item.pinnedVersionId === undefined) continue;
    const pin = pinById.get(item.pinnedVersionId);
    const unchanged = currentByMod.get(item.modId)?.pinnedVersionId === item.pinnedVersionId;
    if (!pin || pin.modId !== item.modId || (pin.status !== 'active' && !unchanged)) {
      problems.push({
        path: `items.${index}.pinnedVersionId`,
        code: 'invalid',
        message: 'not an available version of this mod',
      });
    }
  }
  if (problems.length > 0) throw errors.validation('Some items cannot be added', problems);

  const explicit: StoredItem[] = input.map((i) => ({
    modId: i.modId,
    note: i.note?.trim() ? i.note.trim() : null,
    pinnedVersionId: i.pinnedVersionId ?? null,
    isAutoDependency: false,
  }));
  const explicitIds = explicit.map((i) => i.modId);
  const versions = new Map<number, ResolvedVersion>();
  const loaded = new Set<number>();
  let pending: Array<{ modId: number; pinnedVersionId: number | null }> = explicit.map((i) => ({
    modId: i.modId,
    pinnedVersionId: i.pinnedVersionId,
  }));
  let auto: number[] = [];
  for (let depth = 0; depth <= MAX_DEPENDENCY_DEPTH; depth++) {
    if (pending.length > 0) {
      for (const [modId, version] of await resolveVersions(tx, pending)) versions.set(modId, version);
      for (const p of pending) loaded.add(p.modId);
    }
    const result = resolveAutoDependencies(explicitIds, makeResolver(snapshot, versions, loaded));
    auto = result.auto;
    if (result.unknown.length === 0) break;
    pending = result.unknown.map((modId) => ({ modId, pinnedVersionId: null }));
  }
  const items = [
    ...explicit,
    ...auto.map((modId) => ({ modId, note: null, pinnedVersionId: null, isAutoDependency: true })),
  ];
  if (items.length > KIT_LIMITS.maxItems) {
    throw errors.validation(`A kit holds at most ${KIT_LIMITS.maxItems} items, dependencies included`, [
      { path: 'items', code: 'too_big', message: `${items.length} items with dependencies` },
    ]);
  }
  return items;
}

function nameOf(snapshot: CatalogSnapshot): (modId: number) => string {
  return (modId) => snapshot.byId.get(modId)?.name ?? `#${modId}`;
}

async function emitUpdated(
  ctx: Ctx,
  tx: Transaction,
  kitId: number,
  ownerId: number,
  visibility: string,
  revision: number,
) {
  await ctx.jobs.emitNew(
    tx,
    'kit.updated',
    { kitId, ownerId, visibility: visibility as KitRow['visibility'], revision },
    { actorId: ctx.actor?.userId ?? null },
  );
}

function mapUniqueViolation(error: unknown): never {
  if (sqlState(error) === '23505') throw slugTaken();
  throw error;
}

// -----------------------------------------------------------------------------------------------
// Writes
// -----------------------------------------------------------------------------------------------

/** `POST /kits`. */
export async function createKit(ctx: Ctx, deps: KitsDeps, input: CreateInput): Promise<KitResult> {
  const actor = actorOf(ctx);
  const now = ctx.clock.now();
  assertCan(actor, 'kit.write', undefined, now);
  const description = describe(deps, input.descriptionMd);
  const coverMediaId = input.coverUploadId ? await coverMediaOf(ctx.db, actor.userId, input.coverUploadId) : null;
  const created = await withTx(ctx.db, async (tx) => {
    const { id } = await insertKit(
      tx,
      {
        ownerId: actor.userId,
        name: input.name,
        slug: input.slug ?? null,
        descriptionMd: description.md,
        descriptionHtml: description.html,
        visibility: input.visibility,
        coverMediaId,
        forkedFromId: null,
      },
      now,
    );
    await recordRevision(tx, id, 1, { summary: 'Created', added: [], removed: [] }, now);
    await ctx.jobs.emitNew(
      tx,
      'kit.created',
      { kitId: id, ownerId: actor.userId, visibility: input.visibility, forkedFromId: null },
      { actorId: actor.userId },
    );
    return id;
  }).catch(mapUniqueViolation);
  const kit = await loadKitRow(ctx.db, created);
  if (!kit) throw errors.notFound('Kit');
  return respond(ctx, deps, ctx.db, kit, 'owner');
}

/** `PATCH /kits/:id`: metadata (name, slug, description, visibility, cover). */
export async function updateKit(ctx: Ctx, deps: KitsDeps, kitId: number, input: UpdateInput): Promise<KitResult> {
  const actor = actorOf(ctx);
  const now = ctx.clock.now();
  const description = input.descriptionMd === undefined ? undefined : describe(deps, input.descriptionMd);
  const coverMediaId =
    input.coverUploadId === undefined
      ? undefined
      : input.coverUploadId === null
        ? null
        : await coverMediaOf(ctx.db, actor.userId, input.coverUploadId);
  await withTx(ctx.db, async (tx) => {
    const kit = await lockOwnKit(ctx, tx, kitId, 'kit.edit');
    if (input.slug !== undefined && input.slug !== kit.slug) {
      const clash = await queryOne<{ id: number }>(
        tx,
        sql`SELECT "id" FROM "Kit" WHERE "ownerId" = ${kit.ownerId} AND "slug" = ${input.slug} AND "id" <> ${kit.id}`,
      );
      if (clash) throw slugTaken();
    }
    const sets = [sql`"updatedAt" = ${at(now)}`];
    if (input.name !== undefined) sets.push(sql`"name" = ${input.name}`);
    if (input.slug !== undefined) sets.push(sql`"slug" = ${input.slug}`);
    if (description !== undefined) {
      sets.push(sql`"descriptionMd" = ${description.md}`, sql`"descriptionHtml" = ${description.html}`);
    }
    if (input.visibility !== undefined) sets.push(sql`"visibility" = ${input.visibility}`);
    if (coverMediaId !== undefined) sets.push(sql`"coverMediaId" = ${coverMediaId}::uuid`);
    await tx.execute(sql`UPDATE "Kit" SET ${sql.join(sets, sql`, `)} WHERE "id" = ${kit.id}`);
    await emitUpdated(ctx, tx, kit.id, kit.ownerId, input.visibility ?? kit.visibility, kit.revision);
  }).catch(mapUniqueViolation);
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit) throw errors.notFound('Kit');
  return respond(ctx, deps, ctx.db, kit, 'owner');
}

/** `DELETE /kits/:id`: soft delete (the slug is freed, the code stays reserved). */
export async function deleteKit(ctx: Ctx, kitId: number): Promise<void> {
  const now = ctx.clock.now();
  await withTx(ctx.db, async (tx) => {
    const kit = await lockOwnKit(ctx, tx, kitId, 'kit.delete');
    await tx.execute(
      sql`UPDATE "Kit" SET "deletedAt" = ${at(now)}, "updatedAt" = ${at(now)}, "slug" = ${deletedSlug(kit.slug, kit.id)}
           WHERE "id" = ${kit.id}`,
    );
    await ctx.jobs.emitNew(
      tx,
      'kit.deleted',
      { kitId: kit.id, ownerId: kit.ownerId },
      { actorId: ctx.actor?.userId ?? null },
    );
  });
}

/** `PUT /kits/:id/items`: replaces the items; a real change creates a new revision. */
export async function putKitItems(ctx: Ctx, deps: KitsDeps, kitId: number, input: ItemsInput): Promise<KitResult> {
  const actor = actorOf(ctx);
  const now = ctx.clock.now();
  assertCan(actor, 'kit.write', undefined, now);
  const snapshot = await getSnapshot(ctx, deps.config);
  await withTx(ctx.db, async (tx) => {
    const kit = await lockOwnKit(ctx, tx, kitId, 'kit.edit');
    const current = await loadItems(tx, [kit.id]);
    const next = await resolveItems(tx, snapshot, current, input.items);
    const diff = diffItems(current, next);
    if (!diff.changed) return;
    const addedAt = new Map(current.map((i) => [i.modId, i.addedAt]));
    await writeItems(
      tx,
      kit.id,
      next.map((i) => ({ ...i, addedAt: addedAt.get(i.modId) ?? now })),
    );
    const revision = kit.revision + 1;
    const summary = input.revisionSummary?.trim() || revisionSummary(diff, nameOf(snapshot));
    await recordRevision(
      tx,
      kit.id,
      revision,
      {
        summary: summary.slice(0, REVISION_SUMMARY_MAX),
        added: diff.added,
        removed: diff.removed,
        reordered: diff.reordered,
        edited: diff.edited,
      },
      now,
    );
    await tx.execute(
      sql`UPDATE "Kit" SET "revision" = ${revision}, "itemsCount" = ${next.length}, "updatedAt" = ${at(now)}
           WHERE "id" = ${kit.id}`,
    );
    await emitUpdated(ctx, tx, kit.id, kit.ownerId, kit.visibility, revision);
  });
  const kit = await loadKitRow(ctx.db, kitId);
  if (!kit) throw errors.notFound('Kit');
  return respond(ctx, deps, ctx.db, kit, 'owner');
}

/** `POST /kits/:id/fork`: copies a visible kit (items, notes, pins, description, cover) with attribution. */
export async function forkKit(ctx: Ctx, deps: KitsDeps, kitId: number, input: ForkInput): Promise<KitResult> {
  const actor = actorOf(ctx);
  const now = ctx.clock.now();
  assertCan(actor, 'kit.write', undefined, now);
  const { kit: source } = visibleOr404(await loadKitRow(ctx.db, kitId), ctx);
  const created = await withTx(ctx.db, async (tx) => {
    const items = await loadItems(tx, [source.id]);
    const { id } = await insertKit(
      tx,
      {
        ownerId: actor.userId,
        name: input.name ?? source.name,
        slug: null,
        descriptionMd: source.descriptionMd,
        descriptionHtml: source.descriptionHtml,
        visibility: input.visibility,
        coverMediaId: source.coverMediaId,
        forkedFromId: source.id,
      },
      now,
    );
    await writeItems(
      tx,
      id,
      items.map((i) => ({ ...i, addedAt: now })),
    );
    await tx.execute(sql`UPDATE "Kit" SET "itemsCount" = ${items.length} WHERE "id" = ${id}`);
    await recordRevision(
      tx,
      id,
      1,
      {
        summary: `Forked from ${source.name}`.slice(0, REVISION_SUMMARY_MAX),
        forkedFromId: source.id,
        forkedFromRevision: source.revision,
        added: items.map((i) => i.modId),
        removed: [],
      },
      now,
    );
    await ctx.jobs.emitNew(
      tx,
      'kit.created',
      { kitId: id, ownerId: actor.userId, visibility: input.visibility, forkedFromId: source.id },
      { actorId: actor.userId },
    );
    return id;
  });
  const kit = await loadKitRow(ctx.db, created);
  if (!kit) throw errors.notFound('Kit');
  return respond(ctx, deps, ctx.db, kit, 'owner');
}
