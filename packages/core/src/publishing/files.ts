/**
 * Final objects of published versions (PLAN §2.8 step 4, key scheme):
 *
 *   mods/{modId}/{versionId}/{safe-name}-{version}.zip
 *   builds/{modId}/{versionId}/{safe-name}.json
 *
 * with `Content-Disposition: attachment; filename="<Name> <version>.<ext>"`, the right
 * `Content-Type` and the immutable cache. Files that passed the checks are copied from `incoming/`
 * (`finalizeUpload`, WP-31); flagged files wait in `quarantine/` until a moderator approves them and
 * are then copied from there (`publishVersionFile` is what moderation calls, WP-51).
 */
import type { Upload } from '@sotf/db';
import { upload } from '@sotf/db';
import { eq } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { attachmentDisposition, IMMUTABLE_CACHE_CONTROL, versionDownloadName } from '../storage/disposition.ts';
import { buildFileKey, modFileKey } from '../storage/keys.ts';
import { finalizeUpload } from '../uploads/service.ts';
import { uploadRef } from './queries.ts';

export interface VersionFileTarget {
  modId: number;
  versionId: number;
  modName: string;
  /** Version string (a UUIDv7 for builds). */
  version: string;
  kind: 'mod' | 'library' | 'build';
}

export interface VersionFile {
  key: string;
  extension: 'zip' | 'json';
  contentType: string;
  downloadName: string;
}

/** Key, extension, type and download name of a version's final object. */
export function versionFile(target: VersionFileTarget): VersionFile {
  if (target.kind === 'build') {
    return {
      key: buildFileKey(target.modId, target.versionId, target.modName),
      extension: 'json',
      contentType: 'application/json',
      downloadName: versionDownloadName(target.modName, target.version, 'json'),
    };
  }
  return {
    key: modFileKey(target.modId, target.versionId, target.modName, target.version),
    extension: 'zip',
    contentType: 'application/zip',
    downloadName: versionDownloadName(target.modName, target.version, 'zip'),
  };
}

export interface PublishedFile extends VersionFile {
  url: string;
  size: number;
}

/**
 * Copies the upload to the version's final key (idempotent per key). Handles both the normal case
 * (`incoming/`) and files held in `quarantine/`.
 */
export async function publishVersionFile(
  ctx: Ctx,
  storage: ObjectStorage | null,
  uploadId: string,
  target: VersionFileTarget,
): Promise<PublishedFile> {
  if (!storage) throw errors.unavailable('File storage is not configured');
  const file = versionFile(target);
  const [row] = await ctx.db.select().from(upload).where(eq(upload.id, uploadId)).limit(1);
  if (!row) throw errors.notFound('Upload');
  const ref = uploadRef(row);

  if (ref.final) {
    if (ref.final.key !== file.key) throw errors.conflict('This upload was already published under another key');
    return { ...file, url: storage.publicUrl(file.key), size: row.declaredBytes };
  }
  if (ref.quarantine) return publishFromQuarantine(ctx, storage, row, ref.quarantine.key, file);

  const result = await finalizeUpload(ctx, storage, {
    uploadId,
    key: file.key,
    downloadName: file.downloadName,
    contentType: file.contentType,
  });
  return { ...file, url: result.url, size: result.size };
}

async function publishFromQuarantine(
  ctx: Ctx,
  storage: ObjectStorage,
  row: Upload,
  quarantineKey: string,
  file: VersionFile,
): Promise<PublishedFile> {
  const bucket = storage.config.publicBucket;
  await storage.copy(
    { bucket: row.bucket, key: quarantineKey },
    {
      bucket,
      key: file.key,
      contentType: file.contentType,
      cacheControl: IMMUTABLE_CACHE_CONTROL,
      contentDisposition: attachmentDisposition(file.downloadName),
    },
  );
  const head = await storage.head(bucket, file.key);
  if (!head || head.size !== row.declaredBytes) {
    throw errors.unavailable('The published copy does not match the upload; try again');
  }
  const final = { bucket, key: file.key, size: head.size, at: ctx.clock.now().toISOString() };
  await ctx.db
    .update(upload)
    .set({ resultRef: JSON.parse(JSON.stringify({ ...uploadRef(row), final })) })
    .where(eq(upload.id, row.id));
  await storage.delete(row.bucket, quarantineKey);
  ctx.log.info({ uploadId: row.id, key: file.key }, 'quarantined upload published');
  return { ...file, url: storage.publicUrl(file.key), size: head.size };
}
