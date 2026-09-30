/**
 * Replication of remote images to R2 (PLAN §8.3 "Legacy", §9.1 "SSRF"; WP-15 backlog): images
 * embedded in Markdown descriptions are fetched with `safeFetch` (https only, public addresses only,
 * 10 MB, 5 s), stored privately and run through the normal pipeline, so pages serve them from
 * `r2.sotf-mods.com` (the only image host the CSP allows besides YouTube thumbnails) with known
 * dimensions (no layout shift).
 *
 * The media id is derived from the URL (a name-based UUID), so the same remote image is fetched
 * once for the whole site and re-rendering a description never downloads it again.
 */
import { createHash } from 'node:crypto';
import { type Media, type MediaPurpose, media } from '@sotf/db';
import { eq } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { incomingKey } from '../storage/keys.ts';
import { detectImageFormat } from './image.ts';
import { processMedia } from './process.ts';
import { REMOTE_FETCH_LIMITS, type SafeFetchOptions, safeFetch } from './ssrf.ts';

/** Name-based UUID (version 5 layout over SHA-256) of a remote image URL. */
export function remoteMediaId(url: string): string {
  const hash = createHash('sha256').update(`sotf-remote-image\n${url}`).digest();
  hash[6] = ((hash[6] ?? 0) & 0x0f) | 0x50;
  hash[8] = ((hash[8] ?? 0) & 0x3f) | 0x80;
  const hex = hash.subarray(0, 16).toString('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

export interface RemoteImportOptions {
  ownerId: number | null;
  purpose?: MediaPurpose;
  fetch?: SafeFetchOptions;
}

export type RemoteImportResult = { status: 'ready'; media: Media } | { status: 'failed'; reason: string };

/** Fetches, stores and processes a remote image (or returns the existing replica). */
export async function importRemoteImage(
  ctx: Ctx,
  storage: ObjectStorage,
  url: string,
  options: RemoteImportOptions,
): Promise<RemoteImportResult> {
  const id = remoteMediaId(url);
  const existing = await ctx.db.query.media.findFirst({ where: eq(media.id, id) });
  if (existing?.status === 'ready') return { status: 'ready', media: existing };
  if (existing?.status === 'failed') return { status: 'failed', reason: existing.error ?? 'failed' };

  if (!existing) {
    let fetched: Awaited<ReturnType<typeof safeFetch>>;
    try {
      fetched = await safeFetch(url, {
        maxBytes: REMOTE_FETCH_LIMITS.maxBytes,
        headers: { accept: 'image/avif,image/webp,image/png,image/jpeg,image/gif;q=0.8' },
        ...options.fetch,
      });
    } catch (error) {
      const reason = error instanceof Error ? error.message : 'fetch failed';
      ctx.log.info({ url, reason }, 'remote image not replicated');
      return { status: 'failed', reason };
    }
    const format = await detectImageFormat(fetched.body);
    if (!format) return { status: 'failed', reason: 'not a supported image' };
    const key = incomingKey(options.ownerId ?? 0, id);
    await storage.put({
      bucket: storage.config.privateBucket,
      key,
      body: fetched.body,
      contentLength: fetched.body.length,
      contentType: format.contentType,
    });
    await ctx.db
      .insert(media)
      .values({
        id,
        ownerId: options.ownerId,
        purpose: options.purpose ?? 'mod_image',
        sourceBucket: storage.config.privateBucket,
        sourceKey: key,
        bytes: fetched.body.length,
        contentType: format.contentType,
        status: 'pending',
      })
      .onConflictDoNothing();
  }
  const outcome = await processMedia(ctx, storage, id);
  if (outcome.status === 'ready') return { status: 'ready', media: outcome.media };
  const row = await ctx.db.query.media.findFirst({ where: eq(media.id, id) });
  if (row?.status === 'ready') return { status: 'ready', media: row };
  return { status: 'failed', reason: outcome.status === 'failed' ? outcome.reason : (row?.error ?? outcome.reason) };
}
