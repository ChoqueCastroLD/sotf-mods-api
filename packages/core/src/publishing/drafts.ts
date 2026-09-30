/**
 * Publishing drafts (PLAN §5.2 `/drafts*`, §7.5 "Asistente «Nuevo mod»"): the wizard autosaves
 * its state in `"ModDraft"` (never in `"Mod"`, which the legacy would list) every 3 s and on each
 * step change; every read returns the preflight rows, the listing quality score and the inspection
 * flags of the file, so the review step is always up to date.
 *
 * Kinds: `mod` (mods and libraries, from a zip), `build` (BuildShare JSON) and `version` (a new
 * version of `modId`; stored with the kind of the target and `modId` set).
 *
 * `submit` turns a draft into a publication (see `submit.ts`) and deletes it.
 */

import type { DraftDTO, DraftKind, PreflightItemDTO } from '@sotf/contracts/studio';
import { DraftData, type DraftData as DraftDataSchema } from '@sotf/contracts/studio';
import { type Executor, type ModDraft, modDraft, upload } from '@sotf/db';
import { and, desc, eq, inArray, sql } from 'drizzle-orm';
import { checkAgainstMod } from '../inspection/checks.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { rawHtmlWarning, SLUG_PATTERN, slugify } from './listing.ts';
import { type FileState, type ListingFacts, type PreflightFacts, preflight, qualityScore } from './preflight.ts';
import {
  actorOf,
  assertWriter,
  dependencyCycles,
  existingVersions,
  type FileUpload,
  findCategory,
  findTags,
  kindOfType,
  loadFileUpload,
  loadMedia,
  loadOwnedMod,
  manifestIdTaken,
  type ResolvedDependency,
  resolveDependencies,
  slugTaken,
  uploadRef,
} from './queries.ts';
import { BUILDSHARE_MANIFEST_ID } from './release.ts';

/** Open drafts per user. */
export const MAX_DRAFTS_PER_USER = 20;

type Data = DraftDataSchema;

/** Stored data, validated (a row written by an older schema degrades to its valid subset). */
export function draftData(row: Pick<ModDraft, 'data'>): Data {
  const parsed = DraftData.safeParse(row.data ?? {});
  if (parsed.success) return parsed.data;
  const record = { ...(row.data as Record<string, unknown>) };
  for (const issue of parsed.error.issues) {
    const key = issue.path[0];
    if (typeof key === 'string') delete record[key];
  }
  const retry = DraftData.safeParse(record);
  return retry.success ? retry.data : {};
}

export function draftKindOf(row: Pick<ModDraft, 'kind' | 'modId'>): DraftKind {
  return row.modId !== null ? 'version' : row.kind;
}

/** Upload ids referenced by the data (file, cover, gallery). */
export function referencedUploads(data: Data): string[] {
  const ids = [data.fileUploadId, data.thumbnail?.uploadId, ...(data.gallery ?? []).map((g) => g.uploadId)].filter(
    (id): id is string => typeof id === 'string',
  );
  return [...new Set(ids)];
}

/** Uploads of `ids` that belong to the actor. */
async function ownUploads(ctx: Ctx, ids: readonly string[]): Promise<string[]> {
  if (ids.length === 0) return [];
  const actor = actorOf(ctx);
  const found = await ctx.db
    .select({ id: upload.id })
    .from(upload)
    .where(and(inArray(upload.id, [...ids]), eq(upload.userId, actor.userId)));
  const own = new Set(found.map((r) => r.id));
  return ids.filter((id) => own.has(id));
}

async function loadOwnDraft(ctx: Ctx, id: string, exec: Executor = ctx.db): Promise<ModDraft> {
  const actor = actorOf(ctx);
  const [row] = await exec.select().from(modDraft).where(eq(modDraft.id, id)).limit(1);
  if (!row || row.userId !== actor.userId) throw errors.notFound('Draft');
  return row;
}

// -----------------------------------------------------------------------------------------------
// Evaluation (preflight, quality, flags)
// -----------------------------------------------------------------------------------------------

/** Everything the submission needs, computed once. */
export interface DraftEvaluation {
  row: ModDraft;
  kind: DraftKind;
  data: Data;
  /** Publication kind of the file (`mod`/`library` from the manifest type, or `build`). */
  publicationKind: 'mod' | 'library' | 'build';
  file: FileUpload | null;
  manifestId: string | null;
  slug: string | null;
  dependencies: ResolvedDependency[];
  /** Media ids of the cover and the gallery (resolved from upload ids). */
  thumbnailMediaId: string | null;
  gallery: Array<{ mediaId: string; alt: string | null }>;
  target: { id: number; manifestId: string; status: string; type: string | null; userId: number | null } | null;
  preflight: PreflightItemDTO[];
  qualityScore: number;
  flags: DraftDTO['inspectionFlags'];
}

/** Media id behind an image reference of the draft (a processed media, or an image upload). */
function mediaIdOf(
  ref: { uploadId?: string | undefined; mediaId?: string | undefined } | undefined,
  uploadMedia: ReadonlyMap<string, string>,
): string | null {
  if (!ref) return null;
  if (ref.mediaId) return ref.mediaId;
  return ref.uploadId ? (uploadMedia.get(ref.uploadId) ?? null) : null;
}

async function uploadMediaIds(ctx: Ctx, ids: readonly string[]): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (ids.length === 0) return map;
  const actor = actorOf(ctx);
  const found = await ctx.db
    .select({ id: upload.id, resultRef: upload.resultRef })
    .from(upload)
    .where(and(inArray(upload.id, [...ids]), eq(upload.userId, actor.userId)));
  for (const r of found) {
    const mediaId = uploadRef(r).mediaId;
    if (mediaId) map.set(r.id, mediaId);
  }
  return map;
}

function fileStateOrNone(file: FileUpload | null, uploadId: string | undefined): FileState {
  if (!uploadId) return 'none';
  return file ? file.state : 'missing';
}

export async function evaluateDraft(ctx: Ctx, row: ModDraft): Promise<DraftEvaluation> {
  const actor = actorOf(ctx);
  const data = draftData(row);
  const kind = draftKindOf(row);

  let target: DraftEvaluation['target'] = null;
  if (row.modId !== null) {
    const m = await loadOwnedMod(ctx, row.modId).catch(() => null);
    if (m) target = { id: m.id, manifestId: m.manifestId, status: m.status, type: m.type, userId: m.userId };
  }
  const isBuild = row.kind === 'build';
  const file = await loadFileUpload(ctx, data.fileUploadId, isBuild ? 'build_file' : 'mod_file');
  const inspection = file?.inspection ?? null;
  const manifest = inspection?.manifest ?? null;
  const buildMeta = inspection?.buildMeta ?? null;

  const publicationKind: DraftEvaluation['publicationKind'] = isBuild
    ? 'build'
    : manifest
      ? manifest.type === 'Library'
        ? 'library'
        : 'mod'
      : target && kindOfType(target.type) === 'library'
        ? 'library'
        : 'mod';
  const manifestId = target ? target.manifestId : isBuild ? (buildMeta?.guid ?? null) : (manifest?.id ?? null);

  // Mod-relative checks of a new version (same manifest id, greater semver).
  const flags: DraftDTO['inspectionFlags'] = [...(inspection?.flags ?? [])];
  if (target && manifest && !isBuild) {
    const extra = checkAgainstMod(manifest, {
      manifestId: target.manifestId,
      existingVersions: await existingVersions(ctx.db, target.id),
    });
    for (const f of extra) if (!flags.some((g) => g.code === f.code)) flags.push(f);
  }

  const name = data.name ?? (isBuild ? null : (manifest?.name ?? null));
  const slug = data.slug ?? (name ? slugify(name) : '');
  const [category, tags, taken, idTaken] = await Promise.all([
    data.categorySlug ? findCategory(ctx.db, data.categorySlug, publicationKind) : Promise.resolve(null),
    findTags(ctx.db, data.tagSlugs ?? []),
    kind !== 'version' && slug ? slugTaken(ctx.db, actor.userId, slug) : Promise.resolve(false),
    kind !== 'version' && manifestId ? manifestIdTaken(ctx.db, manifestId) : Promise.resolve(false),
  ]);

  const manifestDeps = isBuild ? [BUILDSHARE_MANIFEST_ID] : (manifest?.dependencies ?? []);
  const dependencies = manifestId
    ? await resolveDependencies(ctx.db, manifestId, manifestDeps, data.dependencies ?? [])
    : [];
  const cycles = manifestId ? await dependencyCycles(ctx.db, manifestId, dependencies) : [];

  const uploadMedia = await uploadMediaIds(ctx, referencedUploads(data));
  let thumbnailMediaId = mediaIdOf(data.thumbnail, uploadMedia);
  if (!thumbnailMediaId && isBuild && file) {
    thumbnailMediaId = uploadRef(file.row).buildThumbnail?.mediaId ?? null;
  }
  const gallery = (data.gallery ?? [])
    .map((g) => ({ mediaId: mediaIdOf(g, uploadMedia), alt: g.alt?.trim() || null }))
    .filter((g): g is { mediaId: string; alt: string | null } => g.mediaId !== null);
  const imageRefs = [...(data.thumbnail ? [data.thumbnail] : []), ...(data.gallery ?? [])];
  const unresolvedImages = imageRefs.filter((ref) => mediaIdOf(ref, uploadMedia) === null).length;
  const mediaIds = [...new Set([...(thumbnailMediaId ? [thumbnailMediaId] : []), ...gallery.map((g) => g.mediaId)])];
  const media = await loadMedia(ctx.db, mediaIds);
  let mediaPending = 0;
  let mediaInvalid = unresolvedImages;
  for (const id of mediaIds) {
    const m = media.get(id);
    if (!m || m.status === 'failed' || m.ownerId !== actor.userId) mediaInvalid += 1;
    else if (m.status === 'pending') mediaPending += 1;
  }

  const listing: ListingFacts = {
    kind: isBuild ? 'build' : 'mod',
    name,
    shortDescription: data.shortDescription ?? (isBuild ? null : (manifest?.description?.slice(0, 200) ?? null)),
    descriptionMd: data.descriptionMd ?? null,
    categorySlug: data.categorySlug ?? null,
    tagCount: tags.ids.length,
    license: data.license ?? null,
    sourceUrl: data.sourceUrl ?? null,
    platform: data.platform ?? manifest?.platform ?? null,
    galleryCount: gallery.length,
    hasThumbnail: thumbnailMediaId !== null,
  };
  const facts: PreflightFacts = {
    mode: kind === 'version' ? 'version' : 'new',
    listing,
    file: { state: fileStateOrNone(file, data.fileUploadId), flags },
    slugValid: SLUG_PATTERN.test(slug) && slug.length >= 2 && slug.length <= 80,
    slugTaken: taken,
    manifestIdTaken: idTaken,
    categoryValid: category !== null,
    unknownTags: tags.unknown,
    unknownDependencies: dependencies
      .filter((d) => d.depModId === null && d.kind !== 'conflicts')
      .map((d) => d.manifestId),
    dependencyCycles: cycles,
    mediaPending,
    mediaInvalid,
    descriptionRawHtml: rawHtmlWarning(data.descriptionMd, false),
    changelogMd: data.version?.changelogMd ?? null,
  };
  const rows = preflight(facts);
  if (!data.fileUploadId) rows.unshift({ field: 'file', severity: 'error', code: 'file_missing' });
  if (row.modId !== null && !target) rows.unshift({ field: 'modId', severity: 'error', code: 'target_missing' });
  if (target?.status === 'removed') rows.unshift({ field: 'modId', severity: 'error', code: 'target_removed' });

  return {
    row,
    kind,
    data,
    publicationKind,
    file,
    manifestId,
    slug: slug || null,
    dependencies,
    thumbnailMediaId,
    gallery,
    target,
    preflight: rows,
    qualityScore: qualityScore(listing),
    flags,
  };
}

export function toDraftDTO(evaluation: DraftEvaluation): DraftDTO {
  const { row } = evaluation;
  return {
    id: row.id,
    kind: evaluation.kind,
    modId: row.modId,
    data: evaluation.data,
    uploadIds: row.uploadIds,
    preflight: evaluation.preflight,
    qualityScore: evaluation.qualityScore,
    inspectionFlags: evaluation.flags,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

// -----------------------------------------------------------------------------------------------
// CRUD
// -----------------------------------------------------------------------------------------------

/** `POST /drafts`. */
export async function createDraft(
  ctx: Ctx,
  input: { kind: DraftKind; modId?: number | undefined; data?: Data | undefined },
): Promise<DraftDTO> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  let dbKind: 'mod' | 'build';
  let modId: number | null = null;
  if (input.kind === 'version') {
    if (input.modId === undefined) {
      throw errors.validation('A new-version draft needs the mod', [
        { path: 'modId', code: 'required', message: 'modId is required for kind "version"' },
      ]);
    }
    const target = await loadOwnedMod(ctx, input.modId);
    if (target.status === 'removed') throw errors.forbidden('A removed mod cannot receive new versions');
    modId = target.id;
    dbKind = kindOfType(target.type) === 'build' ? 'build' : 'mod';
  } else {
    if (input.modId !== undefined) {
      throw errors.validation('Only new-version drafts target a mod', [
        { path: 'modId', code: 'unexpected', message: 'modId is only allowed with kind "version"' },
      ]);
    }
    dbKind = input.kind;
  }

  const count = await ctx.db.execute<{ n: number }>(
    sql`SELECT count(*)::int AS "n" FROM "ModDraft" WHERE "userId" = ${actor.userId}`,
  );
  if (Number(count.rows[0]?.n ?? 0) >= MAX_DRAFTS_PER_USER) {
    throw errors.conflict(`You have ${MAX_DRAFTS_PER_USER} drafts; delete one to start another`);
  }

  const data = input.data ?? {};
  const uploadIds = await ownUploads(ctx, referencedUploads(data));
  const [row] = await ctx.db
    .insert(modDraft)
    .values({
      userId: actor.userId,
      modId,
      kind: dbKind,
      data: JSON.parse(JSON.stringify(data)) as ModDraft['data'],
      uploadIds,
    })
    .returning();
  if (!row) throw errors.unavailable('Could not create the draft');
  ctx.log.info({ draftId: row.id, kind: input.kind, modId }, 'draft created');
  return toDraftDTO(await evaluateDraft(ctx, row));
}

/** `GET /drafts` (most recent first). */
export async function listDrafts(ctx: Ctx): Promise<{ items: DraftDTO[] }> {
  assertWriter(ctx);
  const actor = actorOf(ctx);
  const found = await ctx.db
    .select()
    .from(modDraft)
    .where(eq(modDraft.userId, actor.userId))
    .orderBy(desc(modDraft.updatedAt))
    .limit(MAX_DRAFTS_PER_USER * 2);
  const items: DraftDTO[] = [];
  for (const row of found) items.push(toDraftDTO(await evaluateDraft(ctx, row)));
  return { items };
}

/** `GET /drafts/:id`. */
export async function getDraft(ctx: Ctx, id: string): Promise<DraftDTO> {
  assertWriter(ctx);
  return toDraftDTO(await evaluateDraft(ctx, await loadOwnDraft(ctx, id)));
}

/** `PATCH /drafts/:id`: autosave (replaces `data`). */
export async function updateDraft(ctx: Ctx, id: string, data: Data): Promise<DraftDTO> {
  assertWriter(ctx);
  const row = await loadOwnDraft(ctx, id);
  const uploadIds = await ownUploads(ctx, referencedUploads(data));
  const [updated] = await ctx.db
    .update(modDraft)
    .set({
      data: JSON.parse(JSON.stringify(data)) as ModDraft['data'],
      uploadIds,
      updatedAt: ctx.clock.now(),
    })
    .where(eq(modDraft.id, row.id))
    .returning();
  if (!updated) throw errors.notFound('Draft');
  return toDraftDTO(await evaluateDraft(ctx, updated));
}

/** `DELETE /drafts/:id` (its uploads expire with the hourly cleanup). */
export async function deleteDraft(ctx: Ctx, id: string): Promise<void> {
  assertWriter(ctx);
  const row = await loadOwnDraft(ctx, id);
  await ctx.db.delete(modDraft).where(eq(modDraft.id, row.id));
  ctx.log.info({ draftId: row.id }, 'draft deleted');
}

export { loadOwnDraft };
