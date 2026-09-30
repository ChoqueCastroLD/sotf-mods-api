/**
 * Direct-to-R2 uploads (PLAN §2.8 "Subida"): no byte passes through our servers.
 *
 *   create   → validate + quota → `Upload` row (24 h) → presigned PUT (15 min, `Content-Type` and
 *              `Content-Length` signed) to `sotf-mods-private/incoming/{userId}/{uploadId}`, or
 *              presigned multipart parts (16 MB) above 100 MB.
 *   complete → (multipart: complete) → HEAD → size and type must match the declaration, else the
 *              object is deleted and the upload `rejected` → `processing` + `inspection.run`
 *              (mod zips, build JSON) or a `Media` row + `media.process` (images), in one transaction.
 *   finalize → (publication flow, WP-40) `CopyObject` into the public bucket with the final metadata
 *              (`Content-Disposition: attachment`, immutable cache), then delete `incoming/`.
 *   expire   → (hourly `cleanup.uploads`) abandoned uploads: abort multipart, delete the object,
 *              `expired`.
 *
 * Single use: a completed upload cannot be completed again (only its state is returned), its URL
 * expires after 15 minutes and finalisation deletes the incoming object.
 *
 * `Upload.resultRef` (jsonb) carries `{ multipart?, mediaId?, inspection?, final? }`; the inspection
 * job (WP-40/WP-84) writes `inspection` with the `UploadInspectionDTO` shape and moves the upload to
 * `ready` or `rejected`.
 */

import type { PresignedUploadDTO } from '@sotf/contracts/uploads';
import { PRESIGN_TTL_SECONDS, type UploadDTO, UploadInspectionDTO } from '@sotf/contracts/uploads';
import { type JsonObject, media, type Transaction, type Upload, upload } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { type CatalogConfig, variantUrlOnly } from '../catalog/media.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { attachmentDisposition, IMMUTABLE_CACHE_CONTROL } from '../storage/disposition.ts';
import { incomingKey, isSafeKey, quarantineKey } from '../storage/keys.ts';
import { baseContentType, mediaPurposeOf, partSize, UPLOAD_QUOTA, UPLOAD_TTL_MS, validateUpload } from './rules.ts';

export interface UploadResultRef {
  multipart?: { uploadId: string; partBytes: number; parts: number };
  mediaId?: string;
  inspection?: unknown;
  final?: { bucket: string; key: string; size: number; at: string };
  quarantine?: { key: string; at: string };
}

type Row = Record<string, unknown>;

function toJson(ref: UploadResultRef): JsonObject {
  return JSON.parse(JSON.stringify(ref)) as JsonObject;
}

function refOf(row: Pick<Upload, 'resultRef'>): UploadResultRef {
  return (row.resultRef ?? {}) as UploadResultRef;
}

/** Public DTO of an upload row (`previewUrl` is resolved by `getUpload`). */
export function toUploadDTO(row: Upload, previewUrl: string | null = null): UploadDTO {
  const ref = refOf(row);
  const inspection = ref.inspection === undefined ? null : UploadInspectionDTO.safeParse(ref.inspection);
  return {
    id: row.id,
    purpose: row.purpose,
    status: row.status,
    filename: row.filename,
    contentType: row.contentType,
    size: row.declaredBytes,
    sha256: row.sha256,
    createdAt: row.createdAt.toISOString(),
    expiresAt: row.expiresAt.toISOString(),
    completedAt: row.completedAt ? row.completedAt.toISOString() : null,
    inspection: inspection?.success ? inspection.data : null,
    mediaId: ref.mediaId ?? null,
    previewUrl,
    error: row.error,
  };
}

function requireStorage(storage: ObjectStorage | null): ObjectStorage {
  if (!storage) throw errors.unavailable('File storage is not configured');
  return storage;
}

function requireActor(ctx: Ctx) {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  if (!actor.emailVerified) throw new DomainError('EMAIL_NOT_VERIFIED', undefined, 'Verify your email first');
  if (actor.suspendedUntil && actor.suspendedUntil.getTime() > ctx.clock.now().getTime()) {
    throw new DomainError('SUSPENDED', undefined, 'Your account is suspended');
  }
  return actor;
}

export interface CreateUploadInput {
  purpose: UploadDTO['purpose'];
  filename: string;
  size: number;
  contentType: string;
  sha256?: string | undefined;
}

/** `POST /uploads`. */
export async function createUpload(
  ctx: Ctx,
  storageOrNull: ObjectStorage | null,
  input: CreateUploadInput,
): Promise<z.input<typeof PresignedUploadDTO>> {
  const actor = requireActor(ctx);
  const storage = requireStorage(storageOrNull);
  const now = ctx.clock.now();

  const profile = await ctx.db.execute<Row>(sql`
    SELECT u."verifiedCreator",
           (SELECT count(*)::int FROM "Upload" o
             WHERE o."userId" = u."id" AND o."status" IN ('pending', 'uploaded') AND o."expiresAt" > ${now}) AS "open",
           (SELECT coalesce(sum(o."declaredBytes"), 0)::bigint FROM "Upload" o
             WHERE o."userId" = u."id" AND o."createdAt" > ${new Date(now.getTime() - 86_400_000)}) AS "bytes24h",
           (SELECT min(o."createdAt") FROM "Upload" o
             WHERE o."userId" = u."id" AND o."createdAt" > ${new Date(now.getTime() - 86_400_000)}) AS "oldest24h"
      FROM "User" u WHERE u."id" = ${actor.userId}`);
  const me = profile.rows[0];
  if (!me) throw errors.unauthenticated();

  const valid = validateUpload({
    purpose: input.purpose,
    filename: input.filename,
    size: input.size,
    contentType: input.contentType,
    verifiedCreator: me.verifiedCreator === true,
  });

  if (Number(me.open) >= UPLOAD_QUOTA.maxOpen) {
    throw errors.rateLimited(15 * 60, 'Too many uploads in progress: finish or wait for the pending ones');
  }
  if (Number(me.bytes24h) + valid.size > UPLOAD_QUOTA.dailyBytes) {
    const oldest = me.oldest24h ? new Date(String(me.oldest24h)).getTime() : now.getTime();
    const retry = Math.max(60, Math.ceil((oldest + 86_400_000 - now.getTime()) / 1000));
    throw errors.rateLimited(retry, 'Daily upload quota reached');
  }

  const id = newId();
  const key = incomingKey(actor.userId, id);
  const bucket = storage.config.privateBucket;
  const presignExpires = new Date(now.getTime() + PRESIGN_TTL_SECONDS * 1000);

  let url: string | null = null;
  let headers: Record<string, string> = {};
  let multipart: { partBytes: number; parts: Array<{ partNumber: number; url: string }> } | null = null;
  const ref: UploadResultRef = {};
  if (valid.multipart) {
    const s3UploadId = await storage.createMultipart({ bucket, key, contentType: valid.contentType });
    ref.multipart = { uploadId: s3UploadId, partBytes: valid.multipart.partBytes, parts: valid.multipart.parts };
    const parts: Array<{ partNumber: number; url: string }> = [];
    for (let n = 1; n <= valid.multipart.parts; n += 1) {
      parts.push({
        partNumber: n,
        url: await storage.presignPart({
          bucket,
          key,
          uploadId: s3UploadId,
          partNumber: n,
          contentLength: partSize(valid.size, valid.multipart.partBytes, n),
          expiresInSeconds: PRESIGN_TTL_SECONDS,
        }),
      });
    }
    multipart = { partBytes: valid.multipart.partBytes, parts };
  } else {
    const signed = await storage.presignPut({
      bucket,
      key,
      contentType: valid.contentType,
      contentLength: valid.size,
      expiresInSeconds: PRESIGN_TTL_SECONDS,
    });
    url = signed.url;
    headers = signed.headers;
  }

  const [row] = await ctx.db
    .insert(upload)
    .values({
      id,
      userId: actor.userId,
      purpose: valid.purpose,
      bucket,
      key,
      filename: valid.filename,
      contentType: valid.contentType,
      declaredBytes: valid.size,
      maxBytes: valid.maxBytes,
      sha256: input.sha256 ?? null,
      status: 'pending',
      resultRef: toJson(ref),
      expiresAt: new Date(now.getTime() + UPLOAD_TTL_MS),
      createdAt: now,
    })
    .returning();
  ctx.log.info({ uploadId: id, purpose: valid.purpose, size: valid.size, multipart: !!multipart }, 'upload created');
  return {
    upload: toUploadDTO(row as Upload),
    method: 'PUT',
    url,
    headers,
    expiresAt: presignExpires.toISOString(),
    multipart,
  };
}

async function loadOwn(ctx: Ctx, id: string): Promise<Upload> {
  const actor = ctx.actor;
  if (!actor) throw errors.unauthenticated();
  const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, id) });
  // Someone else's upload is indistinguishable from a missing one.
  if (!row || (row.userId !== actor.userId && actor.role !== 'admin')) throw errors.notFound('Upload');
  return row;
}

/** `GET /uploads/:id`. */
/**
 * `GET /uploads/:id`. With the catalog config, an image upload whose media is processed carries
 * `previewUrl` (smallest variant, ≥ 320 px when available): the publishing wizard shows it when a
 * draft is resumed on another device.
 */
export async function getUpload(ctx: Ctx, id: string, config?: CatalogConfig): Promise<UploadDTO> {
  const row = await loadOwn(ctx, id);
  const mediaId = refOf(row).mediaId;
  if (!config || !mediaId) return toUploadDTO(row);
  const [found] = await ctx.db
    .select({ variants: media.variants, status: media.status })
    .from(media)
    .where(and(eq(media.id, mediaId), eq(media.ownerId, row.userId)));
  const preview =
    found && found.status === 'ready'
      ? variantUrlOnly(
          config,
          {
            width: null,
            height: null,
            thumbhash: null,
            dominantColor: null,
            variants: found.variants,
            sourceBucket: null,
            sourceKey: null,
          },
          320,
        )
      : null;
  return toUploadDTO(row, preview);
}

async function reject(ctx: Ctx, storage: ObjectStorage, row: Upload, reason: string): Promise<void> {
  await storage.delete(row.bucket, row.key).catch((error: unknown) => {
    ctx.log.warn({ err: error, uploadId: row.id }, 'could not delete a rejected upload (lifecycle rule will)');
  });
  await ctx.db
    .update(upload)
    .set({ status: 'rejected', error: reason, completedAt: ctx.clock.now() })
    .where(and(eq(upload.id, row.id), eq(upload.status, 'pending')));
}

/** `POST /uploads/:id/complete`. */
export async function completeUpload(
  ctx: Ctx,
  storageOrNull: ObjectStorage | null,
  id: string,
  body: { parts?: Array<{ partNumber: number; etag: string }> | undefined },
): Promise<UploadDTO> {
  const actor = requireActor(ctx);
  const row = await loadOwn(ctx, id);
  const now = ctx.clock.now();
  if (row.status === 'uploaded' || row.status === 'processing' || row.status === 'ready') return toUploadDTO(row);
  if (row.status === 'expired' || row.expiresAt.getTime() <= now.getTime()) throw errors.gone('This upload expired');
  if (row.status === 'rejected') throw errors.conflict(`This upload was rejected (${row.error ?? 'invalid'})`);
  const storage = requireStorage(storageOrNull);
  const ref = refOf(row);

  if (ref.multipart) {
    if (!body.parts || body.parts.length !== ref.multipart.parts) {
      throw errors.validation(`Send the ETag of all ${ref.multipart.parts} parts`, [
        { path: 'parts', code: 'invalid', message: `expected ${ref.multipart.parts} parts` },
      ]);
    }
    await storage.completeMultipart({
      bucket: row.bucket,
      key: row.key,
      uploadId: ref.multipart.uploadId,
      parts: body.parts,
    });
  }

  const head = await storage.head(row.bucket, row.key);
  if (!head) throw errors.conflict('The file has not been uploaded yet');
  if (head.size !== row.declaredBytes) {
    await reject(ctx, storage, row, 'size_mismatch');
    if (head.size > row.maxBytes)
      throw new DomainError('PAYLOAD_TOO_LARGE', undefined, 'The uploaded file is too large');
    throw errors.conflict(`The uploaded file has ${head.size} bytes, ${row.declaredBytes} were declared`);
  }
  if (head.contentType !== null && baseContentType(head.contentType) !== row.contentType) {
    await reject(ctx, storage, row, 'content_type_mismatch');
    throw new DomainError('UNSUPPORTED_MEDIA_TYPE', undefined, 'The uploaded file has another content type');
  }

  const updated = await ctx.db.transaction(async (tx) => {
    const mediaPurpose = mediaPurposeOf(row.purpose);
    const nextRef: UploadResultRef = { ...ref };
    if (mediaPurpose) nextRef.mediaId = newId();
    const [claimed] = await tx
      .update(upload)
      .set({ status: 'processing', completedAt: now, resultRef: toJson(nextRef) })
      .where(and(eq(upload.id, row.id), eq(upload.status, 'pending')))
      .returning();
    if (!claimed) return null; // a concurrent complete won
    if (mediaPurpose && nextRef.mediaId) {
      await tx.insert(media).values({
        id: nextRef.mediaId,
        ownerId: actor.userId,
        purpose: mediaPurpose,
        sourceBucket: row.bucket,
        sourceKey: row.key,
        bytes: head.size,
        contentType: row.contentType,
        status: 'pending',
      });
      await ctx.jobs.enqueue('media.process', { mediaId: nextRef.mediaId }, { tx: tx as Transaction });
    } else {
      await ctx.jobs.enqueue(
        'inspection.run',
        { uploadId: row.id, purpose: row.purpose, modVersionId: null },
        { tx: tx as Transaction, singletonKey: `upload:${row.id}` },
      );
    }
    return claimed;
  });
  if (!updated) return toUploadDTO(await loadOwn(ctx, id));
  ctx.log.info({ uploadId: row.id, purpose: row.purpose, size: head.size }, 'upload completed');
  return toUploadDTO(updated);
}

export interface FinalizeInput {
  uploadId: string;
  /** Destination key in the public bucket (`modFileKey`, `buildFileKey`, `mediaOriginalKey`…). */
  key: string;
  /** File name offered by `Content-Disposition` (`<Name> <version>.zip`); omit for inline media. */
  downloadName?: string;
  /** Overrides the upload's content type. */
  contentType?: string;
}

export interface FinalizeResult {
  bucket: string;
  key: string;
  size: number;
  url: string;
  copy: 'server' | 'stream';
}

/**
 * Moves a completed upload to its final public key (PLAN §2.8 step 4) and deletes the incoming
 * object. Idempotent: finalising again to the same key returns the recorded result.
 */
export async function finalizeUpload(
  ctx: Ctx,
  storageOrNull: ObjectStorage | null,
  input: FinalizeInput,
): Promise<FinalizeResult> {
  const storage = requireStorage(storageOrNull);
  if (!isSafeKey(input.key)) throw new TypeError(`unsafe destination key "${input.key}"`);
  const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, input.uploadId) });
  if (!row) throw errors.notFound('Upload');
  const ref = refOf(row);
  const bucket = storage.config.publicBucket;
  if (ref.final) {
    if (ref.final.key !== input.key) throw errors.conflict('This upload was already published under another key');
    return { ...ref.final, url: storage.publicUrl(ref.final.key), copy: 'server' };
  }
  if (row.status === 'pending' || row.status === 'rejected' || row.status === 'expired') {
    throw errors.conflict(`An upload in state "${row.status}" cannot be published`);
  }
  const copy = await storage.copy(
    { bucket: row.bucket, key: row.key },
    {
      bucket,
      key: input.key,
      contentType: input.contentType ?? row.contentType,
      cacheControl: IMMUTABLE_CACHE_CONTROL,
      ...(input.downloadName ? { contentDisposition: attachmentDisposition(input.downloadName) } : {}),
    },
  );
  const head = await storage.head(bucket, input.key);
  if (!head || head.size !== row.declaredBytes) {
    throw errors.unavailable('The published copy does not match the upload; try again');
  }
  const final = { bucket, key: input.key, size: head.size, at: ctx.clock.now().toISOString() };
  await ctx.db
    .update(upload)
    .set({ resultRef: toJson({ ...ref, final }) })
    .where(eq(upload.id, row.id));
  await storage.delete(row.bucket, row.key);
  ctx.log.info({ uploadId: row.id, key: input.key, copy }, 'upload finalized');
  return { ...final, url: storage.publicUrl(input.key), copy };
}

/** Moves a flagged upload to `quarantine/{uploadId}` for moderators (inspection flow). */
export async function quarantineUpload(
  ctx: Ctx,
  storageOrNull: ObjectStorage | null,
  uploadId: string,
): Promise<string> {
  const storage = requireStorage(storageOrNull);
  const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, uploadId) });
  if (!row) throw errors.notFound('Upload');
  const ref = refOf(row);
  if (ref.quarantine) return ref.quarantine.key;
  const key = quarantineKey(row.id);
  await storage.copy({ bucket: row.bucket, key: row.key }, { bucket: row.bucket, key, contentType: row.contentType });
  await ctx.db
    .update(upload)
    .set({ resultRef: toJson({ ...ref, quarantine: { key, at: ctx.clock.now().toISOString() } }) })
    .where(eq(upload.id, row.id));
  await storage.delete(row.bucket, row.key);
  return key;
}

export interface ExpireReport {
  expired: number;
  objectsDeleted: number;
  failures: number;
}

/**
 * `cleanup.uploads` (hourly): uploads past `expiresAt` that were never published are marked
 * `expired`, their multipart upload aborted and their incoming object deleted. Without storage
 * configured only the rows change (the bucket's 1-day lifecycle removes the objects).
 */
export async function expireUploads(
  ctx: Ctx,
  storage: ObjectStorage | null,
  options: { batchSize?: number; maxBatches?: number } = {},
): Promise<ExpireReport> {
  const report: ExpireReport = { expired: 0, objectsDeleted: 0, failures: 0 };
  const batchSize = options.batchSize ?? 200;
  for (let round = 0; round < (options.maxBatches ?? 50); round += 1) {
    const now = ctx.clock.now();
    const due = await ctx.db.execute<Row>(sql`
      SELECT "id" FROM "Upload"
       WHERE "status" IN ('pending', 'uploaded', 'processing', 'ready') AND "expiresAt" <= ${now}
         AND ("resultRef" IS NULL OR NOT ("resultRef" ? 'final'))
       ORDER BY "expiresAt"
       LIMIT ${batchSize}`);
    if (due.rows.length === 0) break;
    for (const { id } of due.rows) {
      const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, String(id)) });
      if (!row) continue;
      const ref = refOf(row);
      if (storage) {
        try {
          if (ref.multipart) {
            await storage.abortMultipart({ bucket: row.bucket, key: row.key, uploadId: ref.multipart.uploadId });
          }
          await storage.delete(row.bucket, row.key);
          report.objectsDeleted += 1;
        } catch (error) {
          report.failures += 1;
          ctx.log.warn({ err: error, uploadId: row.id }, 'could not delete an expired upload object');
        }
      }
      const res = await ctx.db
        .update(upload)
        .set({ status: 'expired', error: row.error ?? 'expired' })
        .where(and(eq(upload.id, row.id), sql`${upload.status} IN ('pending', 'uploaded', 'processing', 'ready')`))
        .returning({ id: upload.id });
      report.expired += res.length;
    }
    if (due.rows.length < batchSize) break;
  }
  if (report.expired > 0) ctx.log.info(report, 'expired uploads cleaned up');
  return report;
}
