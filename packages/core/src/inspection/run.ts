/**
 * `inspection.run` (PLAN §2.8 step 3, §7.4): the automatic checks of an uploaded mod zip or build
 * JSON, written to `Upload.resultRef.inspection` in the `UploadInspectionDTO` shape.
 *
 * - Mod zips are read with Range requests (`presignedRangeSource` + yauzl), never loaded whole; the
 *   SHA-256 is computed by streaming the object once.
 * - Build JSON (≤ 20 MB) is read into memory and validated as a BuildShare blueprint; a blueprint
 *   with an embedded thumbnail enqueues `build.extract`.
 * - The size limit depends on the uploader (200 MB, 500 MB for verified creators).
 * - When the upload already belongs to a mod (a new-version draft, or `modVersionId`), the
 *   mod-relative checks (same manifest id, greater semver) are added.
 *
 * Outcome: `passed` → upload `ready`; `flagged` (warnings) → upload `ready` and the file moved to
 * `quarantine/` (private, no lifecycle) for the moderators; `failed` → upload `rejected` and the
 * object deleted. With `modVersionId` the result is also stored in `VersionInspection`.
 *
 * Idempotent: an upload that already carries an inspection is not inspected again.
 */
import { createHash } from 'node:crypto';
import { FILE_CHECKS, type InspectionFlagDTO } from '@sotf/contracts/manifest';
import type { UploadInspectionDTO as UploadInspectionSchema } from '@sotf/contracts/uploads';
import { type JsonObject, type Upload, upload, versionInspection } from '@sotf/db';
import { and, eq, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { buildMetaOf, inspectBlueprint } from '../builds/blueprint.ts';
import type { Ctx } from '../kernel/context.ts';
import { DomainError } from '../kernel/errors.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { objectChanged, quarantineUpload } from '../uploads/service.ts';
import { checkAgainstMod, inspectionStatus } from './checks.ts';
import { presignedRangeSource, type RandomAccessSource } from './reader.ts';
import { inspectZip } from './zip.ts';

type UploadInspectionDTO = z.infer<typeof UploadInspectionSchema>;

/** Zip entries kept in the DTO (the full list goes to `VersionInspection.entries`). */
export const DTO_ENTRIES_MAX = 500;

export type InspectionOutcome =
  | { status: 'passed' | 'flagged' | 'failed'; inspection: UploadInspectionDTO }
  | { status: 'skipped'; reason: string };

export interface InspectionDetail {
  dto: UploadInspectionDTO;
  /** Every zip entry (for `VersionInspection.entries`). */
  entries: Array<{ path: string; size: number; compressed: number; crc32: number }>;
}

interface UploadRef {
  /** ETag recorded when the upload was completed (see `UploadResultRef.etag`). */
  etag?: unknown;
  inspection?: unknown;
  inspectionEntries?: unknown;
  [key: string]: unknown;
}

function refOf(row: Pick<Upload, 'resultRef'>): UploadRef {
  return (row.resultRef ?? {}) as UploadRef;
}

async function sha256Of(storage: ObjectStorage, bucket: string, key: string, ifMatch?: string): Promise<string> {
  const { body } = await storage.get(bucket, key, ifMatch ? { ifMatch } : {});
  const hash = createHash('sha256');
  for await (const chunk of body as AsyncIterable<Buffer>) hash.update(chunk);
  return hash.digest('hex');
}

/** The whole object, or null when it is larger than `maxBytes` (reading stops there). */
async function readSmall(
  storage: ObjectStorage,
  bucket: string,
  key: string,
  maxBytes: number,
  ifMatch?: string,
): Promise<Buffer | null> {
  const { body } = await storage.get(bucket, key, ifMatch ? { ifMatch } : {});
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of body as AsyncIterable<Buffer>) {
    total += chunk.length;
    if (total > maxBytes) {
      (body as { destroy?: () => void }).destroy?.();
      return null;
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function tooLargeBuild(size: number): InspectionDetail {
  return {
    entries: [],
    dto: {
      status: 'failed',
      manifest: null,
      buildMeta: null,
      entries: [],
      entriesTotal: 0,
      uncompressedBytes: size,
      ratio: null,
      sha256: null,
      flags: [
        {
          code: 'file_too_large',
          severity: 'error',
          path: null,
          detail: `${size} bytes (max ${FILE_CHECKS.maxBuildBytes})`,
        },
      ],
    },
  };
}

/** Target mod of an upload: the draft that references it (version drafts) or the given version. */
async function targetOf(
  ctx: Ctx,
  uploadId: string,
  modVersionId: number | null,
): Promise<{ manifestId: string; existingVersions: string[]; kind: string | null } | null> {
  const res = await ctx.db.execute<{ modId: number | null }>(
    modVersionId !== null
      ? sql`SELECT "modId" FROM "ModVersion" WHERE "id" = ${modVersionId}`
      : sql`SELECT d."modId" FROM "ModDraft" d WHERE ${uploadId}::uuid = ANY(d."uploadIds") AND d."modId" IS NOT NULL
             ORDER BY d."updatedAt" DESC LIMIT 1`,
  );
  const modId = res.rows[0]?.modId;
  if (!modId) return null;
  const mod = await ctx.db.execute<{ manifestId: string; type: string | null }>(
    sql`SELECT "mod_id" AS "manifestId", "type" FROM "Mod" WHERE "id" = ${modId}`,
  );
  const m = mod.rows[0];
  if (!m) return null;
  const versions = await ctx.db.execute<{ version: string }>(
    sql`SELECT "version" FROM "ModVersion" WHERE "modId" = ${modId} AND "status" <> 'rejected'
          AND (${modVersionId}::int IS NULL OR "id" <> ${modVersionId})`,
  );
  return { manifestId: m.manifestId, existingVersions: versions.rows.map((v) => v.version), kind: m.type };
}

async function verifiedCreator(ctx: Ctx, userId: number): Promise<boolean> {
  const res = await ctx.db.execute<{ v: boolean; role: string }>(
    sql`SELECT "verifiedCreator" AS "v", "role" FROM "User" WHERE "id" = ${userId}`,
  );
  const row = res.rows[0];
  return row?.v === true || row?.role === 'moderator' || row?.role === 'admin';
}

/** Inspects a mod zip from any random-access source (also used by the backfill, WP-84). */
export async function inspectModArchive(
  source: RandomAccessSource,
  options: { sha256: string | null; maxBytes: number },
): Promise<InspectionDetail> {
  const zip = await inspectZip(source);
  const flags: InspectionFlagDTO[] = [...zip.flags];
  if (source.size > options.maxBytes) {
    flags.unshift({
      code: 'file_too_large',
      severity: 'error',
      path: null,
      detail: `${source.size} bytes (max ${options.maxBytes})`,
    });
  }
  const status = inspectionStatus(flags);
  return {
    entries: zip.entries,
    dto: {
      status,
      manifest: zip.manifest ? (JSON.parse(JSON.stringify(zip.manifest)) as UploadInspectionDTO['manifest']) : null,
      buildMeta: null,
      entries: zip.entries
        .slice(0, DTO_ENTRIES_MAX)
        .map((e) => ({ path: e.path, size: e.size, compressed: e.compressed })),
      entriesTotal: zip.entriesTotal,
      uncompressedBytes: zip.uncompressedBytes,
      ratio: zip.ratio,
      sha256: options.sha256,
      flags,
    },
  };
}

/** Inspects a BuildShare blueprint (also used by the backfill, WP-84). */
export function inspectBuildFile(buffer: Buffer): InspectionDetail {
  const blueprint = inspectBlueprint(buffer);
  const status = inspectionStatus(blueprint.flags);
  return {
    entries: [],
    dto: {
      status,
      manifest: null,
      buildMeta: blueprint.summary ? buildMetaOf(blueprint.summary) : null,
      entries: [],
      entriesTotal: 0,
      uncompressedBytes: buffer.length,
      ratio: null,
      sha256: createHash('sha256').update(buffer).digest('hex'),
      flags: blueprint.flags,
    },
  };
}

/** Adds the mod-relative flags and recomputes the status. */
export function withModChecks(
  dto: UploadInspectionDTO,
  target: { manifestId: string; existingVersions: readonly string[] } | null,
): UploadInspectionDTO {
  if (!target || !dto.manifest) return dto;
  const extra = checkAgainstMod(dto.manifest, target).filter(
    (f) => !dto.flags.some((existing) => existing.code === f.code),
  );
  if (extra.length === 0) return dto;
  const flags = [...dto.flags, ...extra];
  return { ...dto, flags, status: inspectionStatus(flags) };
}

/** Stores an inspection in `VersionInspection` (upsert). */
export async function saveVersionInspection(
  exec: Pick<Ctx['db'], 'insert'>,
  modVersionId: number,
  dto: UploadInspectionDTO,
  entries: InspectionDetail['entries'] | null,
  at: Date,
): Promise<void> {
  const values = {
    modVersionId,
    status: dto.status,
    manifest: (dto.manifest ?? (dto.buildMeta ? { buildMeta: dto.buildMeta } : null)) as JsonObject | null,
    entries: entries ?? dto.entries.map((e) => ({ ...e, crc32: 0 })),
    flags: dto.flags as unknown as JsonObject[],
    uncompressedBytes: dto.uncompressedBytes,
    ratio: dto.ratio,
    sha256: dto.sha256,
    error: null,
    inspectedAt: at,
  };
  await exec
    .insert(versionInspection)
    .values(values)
    .onConflictDoUpdate({ target: versionInspection.modVersionId, set: { ...values } });
}

/**
 * The object was replaced after the upload was completed (the presigned PUT lives 15 minutes): what
 * was checked is no longer what is stored, so the upload is rejected and the object deleted.
 */
async function rejectChangedObject(
  ctx: Ctx,
  storage: ObjectStorage,
  row: Upload,
): Promise<Extract<InspectionOutcome, { status: 'skipped' }>> {
  await ctx.db
    .update(upload)
    .set({ status: 'rejected', error: 'object_changed', completedAt: ctx.clock.now() })
    .where(and(eq(upload.id, row.id), sql`NOT (coalesce(${upload.resultRef}, '{}'::jsonb) ? 'inspection')`));
  await storage.delete(row.bucket, row.key).catch((error: unknown) => {
    ctx.log.warn({ err: error, uploadId: row.id }, 'could not delete a replaced upload (lifecycle rule will)');
  });
  ctx.log.warn({ uploadId: row.id }, 'upload object changed after it was completed: rejected');
  return { status: 'skipped', reason: 'object_changed' };
}

/** Runs the inspection of an upload (the `inspection.run` job). */
export async function runInspection(
  ctx: Ctx,
  storage: ObjectStorage,
  input: { uploadId: string; modVersionId: number | null },
): Promise<InspectionOutcome> {
  const row = await ctx.db.query.upload.findFirst({ where: eq(upload.id, input.uploadId) });
  if (!row) return { status: 'skipped', reason: 'not_found' };
  if (row.purpose !== 'mod_file' && row.purpose !== 'build_file') return { status: 'skipped', reason: 'not_a_file' };
  const ref = refOf(row);
  if (ref.inspection !== undefined) return { status: 'skipped', reason: 'already_inspected' };
  if (row.status !== 'processing' && row.status !== 'uploaded') {
    return { status: 'skipped', reason: `status_${row.status}` };
  }

  const before = await storage.head(row.bucket, row.key);
  if (!before) return { status: 'skipped', reason: 'object_missing' };
  if (objectChanged(ref, before)) return rejectChangedObject(ctx, storage, row);
  // Every read below is conditional on this ETag: a presigned PUT that swaps the object meanwhile
  // fails them instead of letting the checks mix two files.
  const pin = typeof ref.etag === 'string' ? ref.etag : (before.etag ?? undefined);

  let detail: InspectionDetail;
  try {
    if (row.purpose === 'mod_file') {
      const maxBytes = (await verifiedCreator(ctx, row.userId))
        ? FILE_CHECKS.maxModBytesVerified
        : FILE_CHECKS.maxModBytes;
      const [sha256, source] = await Promise.all([
        sha256Of(storage, row.bucket, row.key, pin),
        presignedRangeSource(storage, row.bucket, row.key, before.size, pin ? { ifMatch: pin } : {}),
      ]);
      detail = await inspectModArchive(source, { sha256, maxBytes });
      ctx.log.debug({ uploadId: row.id, rangeRequests: source.requests }, 'zip inspected with range reads');
    } else {
      const buffer = await readSmall(storage, row.bucket, row.key, FILE_CHECKS.maxBuildBytes, pin);
      detail = buffer === null ? tooLargeBuild(row.declaredBytes) : inspectBuildFile(buffer);
    }
  } catch (error) {
    if (error instanceof DomainError && error.code === 'CONFLICT') return rejectChangedObject(ctx, storage, row);
    throw error;
  }
  // Still the object that was completed? (it is read in several requests, and a presigned PUT can swap it)
  const after = await storage.head(row.bucket, row.key);
  if (!after) return { status: 'skipped', reason: 'object_missing' };
  if (after.etag !== before.etag || objectChanged(ref, after)) return rejectChangedObject(ctx, storage, row);
  const dto = withModChecks(detail.dto, await targetOf(ctx, row.id, input.modVersionId));

  const now = ctx.clock.now();
  const nextRef = { ...ref, inspection: dto };
  await ctx.db.transaction(async (tx) => {
    await tx
      .update(upload)
      .set({
        resultRef: JSON.parse(JSON.stringify(nextRef)) as JsonObject,
        status: dto.status === 'failed' ? 'rejected' : 'ready',
        error: dto.status === 'failed' ? `inspection_failed: ${dto.flags[0]?.code ?? 'invalid'}` : null,
        sha256: dto.sha256 ?? row.sha256,
      })
      .where(and(eq(upload.id, row.id), sql`NOT (coalesce(${upload.resultRef}, '{}'::jsonb) ? 'inspection')`));
    if (input.modVersionId !== null) {
      await saveVersionInspection(tx, input.modVersionId, dto, detail.entries, now);
      await tx.execute(
        sql`UPDATE "ModVersion" SET "checksStatus" = ${dto.status}, "sha256" = coalesce("sha256", ${dto.sha256})
             WHERE "id" = ${input.modVersionId}`,
      );
    }
    if (row.purpose === 'build_file' && dto.status !== 'failed' && dto.buildMeta) {
      await ctx.jobs.enqueue(
        'build.extract',
        { uploadId: row.id, modVersionId: input.modVersionId },
        { tx, singletonKey: `build:${row.id}` },
      );
    }
  });

  if (dto.status === 'failed') {
    await storage.delete(row.bucket, row.key).catch((error: unknown) => {
      ctx.log.warn({ err: error, uploadId: row.id }, 'could not delete a failed upload (lifecycle rule will)');
    });
  } else if (dto.status === 'flagged') {
    try {
      await quarantineUpload(ctx, storage, row.id);
    } catch (error) {
      if (!(error instanceof DomainError) || error.code !== 'CONFLICT') throw error;
      // Replaced between the check and the copy: nothing that was inspected is kept.
      await ctx.db.update(upload).set({ status: 'rejected', error: 'object_changed' }).where(eq(upload.id, row.id));
      await storage.delete(row.bucket, row.key).catch(() => undefined);
      ctx.log.warn({ uploadId: row.id }, 'upload object changed while it was quarantined: rejected');
      return { status: 'skipped', reason: 'object_changed' };
    }
  }
  ctx.log.info({ uploadId: row.id, status: dto.status, flags: dto.flags.length }, 'upload inspected');
  return { status: dto.status === 'pending' ? 'flagged' : dto.status, inspection: dto };
}
