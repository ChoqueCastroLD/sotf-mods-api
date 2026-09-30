/**
 * Cover and gallery of a mod (PLAN §5.2 `PUT /studio/mods/:id/media`, §7.5 "Medios"): processed
 * `Media` rows linked to the mod, written the way the legacy site reads them.
 *
 * - Cover: `Mod.thumbnailMediaId` + the legacy `Mod.imageUrl` (public URL of the processed original,
 *   exactly what the legacy publish flow stored).
 * - Gallery: one `"ModImage"` row per image (`url` = public original, `isPrimary`/`isThumbnail`
 *   false as the legacy wrote them, plus `mediaId`, `position` and `alt`). Rows whose media stays
 *   are updated in place (never deleted and re-created), removed ones are deleted, new ones
 *   inserted. Legacy rows without a `Media` (images not yet adopted by backfill B15) cannot be
 *   referenced by id and are left untouched.
 *
 * Every media must be `ready` and belong to the actor, or already be linked to this mod (legacy
 * media adopted by B15 have no owner).
 */
import { publicObjectUrl } from '@sotf/contracts/downloads';
import { type Executor, mod, modImage } from '@sotf/db';
import { and, eq, inArray, sql } from 'drizzle-orm';
import { errors } from '../kernel/errors.ts';
import { loadMedia, type MediaFacts } from './queries.ts';

export interface GalleryItemInput {
  mediaId: string;
  alt: string | null;
  position: number;
}

export interface MediaSetInput {
  thumbnailMediaId: string | null;
  gallery: readonly GalleryItemInput[];
}

export interface MediaSetOptions {
  /** `R2_PUBLIC_BASE_URL`. */
  mediaBaseUrl: string;
  /** The public bucket (processed originals live there). */
  publicBucket: string;
  actorId: number;
  /** Admins manage any mod's media. */
  isAdmin?: boolean;
}

export interface MediaSetResult {
  changed: boolean;
  galleryCount: number;
}

function publicUrlOf(media: MediaFacts, options: MediaSetOptions): string {
  if (media.sourceBucket !== options.publicBucket) {
    throw errors.validation('This image is still being processed', [
      { path: 'gallery', code: 'media_processing', message: 'image not processed yet' },
    ]);
  }
  return publicObjectUrl(options.mediaBaseUrl, media.sourceKey);
}

/** Media ids already linked to the mod (cover or gallery). */
async function linkedMedia(exec: Executor, modId: number): Promise<Set<string>> {
  const res = await exec.execute<{ id: string }>(sql`
    SELECT "thumbnailMediaId"::text AS "id" FROM "Mod" WHERE "id" = ${modId} AND "thumbnailMediaId" IS NOT NULL
    UNION SELECT "mediaId"::text FROM "ModImage" WHERE "modId" = ${modId} AND "mediaId" IS NOT NULL`);
  return new Set(res.rows.map((r) => r.id));
}

/** Validates that every media exists, is ready and may be used on this mod. */
export async function assertUsableMedia(
  exec: Executor,
  modId: number | null,
  ids: readonly string[],
  options: Pick<MediaSetOptions, 'actorId' | 'isAdmin'>,
): Promise<Map<string, MediaFacts>> {
  const found = await loadMedia(exec, ids);
  const linked = modId === null ? new Set<string>() : await linkedMedia(exec, modId);
  for (const [index, id] of ids.entries()) {
    const media = found.get(id);
    const path = `media.${index}`;
    if (!media || (media.ownerId !== options.actorId && !linked.has(id) && !options.isAdmin)) {
      throw errors.validation('Unknown image', [{ path, code: 'media_unknown', message: `unknown media ${id}` }]);
    }
    if (media.status === 'pending') {
      throw errors.validation('This image is still being processed', [
        { path, code: 'media_processing', message: 'image not processed yet' },
      ]);
    }
    if (media.status === 'failed') {
      throw errors.validation('This image could not be processed', [
        { path, code: 'media_invalid', message: 'invalid image' },
      ]);
    }
  }
  return found;
}

/** Writes the cover and the gallery of `modId` (inside the caller's transaction). */
export async function writeMediaSet(
  tx: Executor,
  modId: number,
  input: MediaSetInput,
  options: MediaSetOptions,
): Promise<MediaSetResult> {
  const seen = new Set<string>();
  const gallery: GalleryItemInput[] = [];
  for (const item of [...input.gallery].sort((a, b) => a.position - b.position)) {
    if (seen.has(item.mediaId)) continue;
    seen.add(item.mediaId);
    gallery.push(item);
  }
  const ids = [
    ...new Set([...gallery.map((g) => g.mediaId), ...(input.thumbnailMediaId ? [input.thumbnailMediaId] : [])]),
  ];
  const media = await assertUsableMedia(tx, modId, ids, options);

  let changed = false;
  const [current] = await tx
    .select({ thumbnailMediaId: mod.thumbnailMediaId, imageUrl: mod.imageUrl })
    .from(mod)
    .where(eq(mod.id, modId))
    .limit(1);
  if (!current) throw errors.notFound('Mod');
  if ((current.thumbnailMediaId ?? null) !== input.thumbnailMediaId) {
    const cover = input.thumbnailMediaId ? media.get(input.thumbnailMediaId) : undefined;
    await tx
      .update(mod)
      .set({
        thumbnailMediaId: input.thumbnailMediaId,
        imageUrl: cover ? publicUrlOf(cover, options) : current.imageUrl,
      })
      .where(eq(mod.id, modId));
    changed = true;
  }

  const existing = await tx
    .select({ id: modImage.id, mediaId: modImage.mediaId, position: modImage.position, alt: modImage.alt })
    .from(modImage)
    .where(and(eq(modImage.modId, modId), eq(modImage.isThumbnail, false)));
  const byMedia = new Map(existing.filter((r) => r.mediaId !== null).map((r) => [r.mediaId as string, r]));
  const wanted = new Set(gallery.map((g) => g.mediaId));
  const removed = existing.filter((r) => r.mediaId !== null && !wanted.has(r.mediaId)).map((r) => r.id);
  if (removed.length > 0) {
    await tx.delete(modImage).where(inArray(modImage.id, removed));
    changed = true;
  }
  for (const [position, item] of gallery.entries()) {
    const row = byMedia.get(item.mediaId);
    const alt = item.alt?.trim() || null;
    if (row) {
      if (row.position !== position || (row.alt ?? null) !== alt) {
        await tx.update(modImage).set({ position, alt }).where(eq(modImage.id, row.id));
        changed = true;
      }
      continue;
    }
    const m = media.get(item.mediaId);
    if (!m) continue;
    await tx.insert(modImage).values({
      url: publicUrlOf(m, options),
      isPrimary: false,
      isThumbnail: false,
      modId,
      mediaId: m.id,
      storageKey: m.sourceKey,
      position,
      alt,
    });
    changed = true;
  }
  const legacyRows = existing.filter((r) => r.mediaId === null).length;
  return { changed, galleryCount: gallery.length + legacyRows };
}
