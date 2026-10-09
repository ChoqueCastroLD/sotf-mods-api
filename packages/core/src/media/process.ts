/**
 * `media.process` (PLAN §2.9, §8.3): a pending `Media` row whose source is a private object
 * (`incoming/…` of an upload, a build thumbnail or a replicated remote image) becomes
 *
 *   media/{id}/original.webp            (full size, oriented, metadata stripped, WebP quality 75)
 *   media/{id}/{w}.webp                 (widths of IMAGE_RULES, WebP quality 75, never enlarged)
 *
 * in the public bucket with `Cache-Control: immutable`. WebP is the only format ever stored (animated
 * GIF/APNG/WebP stay animated); PNG, JPEG, GIF and AVIF are accepted as input only. The row gets width,
 * height, bytes, the ThumbHash, the dominant colour and the variant list, and its source now points at
 * the public original (`original.webp`; rows processed before the WebP-only change keep their
 * `original.png|jpg|gif` and AVIF variants until the B22 backfill converts them). The private source object is deleted and the upload that produced it (if any) moves
 * to `ready`. Invalid images mark the media `failed` and the upload `rejected`.
 *
 * Idempotent: a `ready` media is left alone; a retry after a partial failure rewrites the same
 * immutable keys. Pages showing the media (mods using it as cover or gallery image) are purged.
 */
import { type Media, type MediaVariant, media, upload } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { IMMUTABLE_CACHE_CONTROL } from '../storage/disposition.ts';
import { mediaOriginalKey, mediaVariantKey } from '../storage/keys.ts';
import { ImageRejectedError, processImage } from './image.ts';

/** Largest source accepted (the largest image upload limit). */
export const MAX_MEDIA_SOURCE_BYTES = 10 * 1024 * 1024;

export type ProcessMediaOutcome =
  | { status: 'ready'; media: Media }
  | { status: 'failed'; reason: string }
  | { status: 'skipped'; reason: string };

async function readAll(stream: NodeJS.ReadableStream, maxBytes: number): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of stream as AsyncIterable<Buffer | string>) {
    const buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
    total += buffer.length;
    if (total > maxBytes) throw new ImageRejectedError('too_large', `larger than ${maxBytes} bytes`);
    chunks.push(buffer);
  }
  return Buffer.concat(chunks);
}

/** Mods that show a media (as cover or in the gallery): their pages are purged when it changes. */
async function modsUsing(ctx: Ctx, mediaId: string): Promise<Array<{ id: number; userId: number | null }>> {
  const res = await ctx.db.execute<{ id: number; userId: number | null }>(sql`
    SELECT m."id", m."userId" FROM "Mod" m
     WHERE m."thumbnailMediaId" = ${mediaId}
        OR EXISTS (SELECT 1 FROM "ModImage" i WHERE i."modId" = m."id" AND i."mediaId" = ${mediaId})`);
  return res.rows;
}

async function purgeUsers(ctx: Ctx, mediaId: string): Promise<void> {
  const mods = await modsUsing(ctx, mediaId);
  if (mods.length === 0) return;
  const tags = mods.flatMap((m) => [`mod:${m.id}`, ...(m.userId ? [`user:${m.userId}`] : [])]);
  await publishCacheInvalidation(ctx.db, tags);
  await purge(ctx.jobs, tags, 'media.ready');
}

async function markUpload(
  ctx: Ctx,
  mediaId: string,
  status: 'ready' | 'rejected',
  error: string | null,
): Promise<void> {
  await ctx.db
    .update(upload)
    .set({ status, error })
    .where(sql`${upload.resultRef}->>'mediaId' = ${mediaId} AND ${upload.status} IN ('processing', 'uploaded')`);
}

/** Processes one media. */
export async function processMedia(ctx: Ctx, storage: ObjectStorage, mediaId: string): Promise<ProcessMediaOutcome> {
  const row = await ctx.db.query.media.findFirst({ where: eq(media.id, mediaId) });
  if (!row) return { status: 'skipped', reason: 'not_found' };
  if (row.status === 'ready') return { status: 'skipped', reason: 'already_ready' };
  if (row.status === 'failed') return { status: 'skipped', reason: 'already_failed' };

  const publicBucket = storage.config.publicBucket;
  let input: Buffer;
  try {
    const { body } = await storage.get(row.sourceBucket, row.sourceKey);
    input = await readAll(body, MAX_MEDIA_SOURCE_BYTES);
  } catch (error) {
    if (error instanceof ImageRejectedError) return fail(ctx, storage, row, error.message);
    throw error; // storage hiccup: let the job retry
  }

  let processed: Awaited<ReturnType<typeof processImage>>;
  try {
    processed = await processImage(input);
  } catch (error) {
    if (error instanceof ImageRejectedError) return fail(ctx, storage, row, error.message);
    throw error;
  }

  // Legacy images (B15): the original object is never touched, only variants are added (B22 converts it).
  const keepSource = row.purpose === 'legacy';
  const originalKey = keepSource ? row.sourceKey : mediaOriginalKey(row.id, 'webp');
  if (!keepSource) {
    await storage.put({
      bucket: publicBucket,
      key: originalKey,
      body: processed.original,
      contentLength: processed.original.length,
      contentType: processed.contentType,
      cacheControl: IMMUTABLE_CACHE_CONTROL,
    });
  }
  const variants: MediaVariant[] = [];
  for (const variant of processed.variants) {
    const key = mediaVariantKey(row.id, variant.width, variant.format);
    await storage.put({
      bucket: publicBucket,
      key,
      body: variant.body,
      contentLength: variant.body.length,
      contentType: 'image/webp',
      cacheControl: IMMUTABLE_CACHE_CONTROL,
    });
    variants.push({ w: variant.width, format: variant.format, key, bytes: variant.body.length });
  }

  const [updated] = await ctx.db
    .update(media)
    .set({
      sourceBucket: keepSource ? row.sourceBucket : publicBucket,
      sourceKey: originalKey,
      width: processed.width,
      height: processed.height,
      bytes: keepSource ? input.length : processed.original.length,
      contentType: keepSource ? processed.sourceContentType : processed.contentType,
      thumbhash: processed.thumbhash,
      dominantColor: processed.dominantColor,
      variants,
      status: 'ready',
      error: null,
      processedAt: ctx.clock.now(),
    })
    .where(eq(media.id, row.id))
    .returning();
  if (!keepSource && (row.sourceBucket !== publicBucket || row.sourceKey !== originalKey)) {
    await storage.delete(row.sourceBucket, row.sourceKey).catch((error: unknown) => {
      ctx.log.warn({ err: error, mediaId: row.id }, 'could not delete the media source (lifecycle rule will)');
    });
  }
  await markUpload(ctx, row.id, 'ready', null);
  await purgeUsers(ctx, row.id);
  ctx.log.info({ mediaId: row.id, variants: variants.length, width: processed.width }, 'media processed');
  return { status: 'ready', media: updated as Media };
}

async function fail(ctx: Ctx, storage: ObjectStorage, row: Media, reason: string): Promise<ProcessMediaOutcome> {
  await ctx.db
    .update(media)
    .set({ status: 'failed', error: reason.slice(0, 300), processedAt: ctx.clock.now() })
    .where(eq(media.id, row.id));
  // Public objects are never deleted (legacy originals), except the private `incoming/` source when the
  // private and the public role share one bucket (R2_PRIVATE_BUCKET = R2_BUCKET, as in production).
  if (
    row.purpose !== 'legacy' &&
    (row.sourceBucket !== storage.config.publicBucket || row.sourceKey.startsWith('incoming/'))
  ) {
    await storage.delete(row.sourceBucket, row.sourceKey).catch(() => undefined);
  }
  await markUpload(ctx, row.id, 'rejected', `invalid_image: ${reason}`.slice(0, 300));
  ctx.log.info({ mediaId: row.id, reason }, 'media rejected');
  return { status: 'failed', reason };
}
