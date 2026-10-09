/**
 * B15, part 1 — the files of every legacy version (PLAN §6.9 B15, research/02 §3.2 and §4.1).
 *
 * For each `ModVersion` with a `storageKey` (B2) and no `VersionInspection` yet:
 *
 * 1. `HEAD` of the public object → `fileSize` and the canonical `contentType` (`application/zip`,
 *    `application/json`: the value B17 writes on the object).
 * 2. Mod zips: SHA-256 by streaming the object once and, in parallel, the automatic checks of
 *    `inspectZip` over HTTP `Range` reads (central directory + the manifest entry only; a 500 MB
 *    zip costs a handful of small requests). The normalised RedLoader manifest fills
 *    `ModVersion.manifest`, `gameVersionDeclared`, `loaderVersionDeclared` and `platformDeclared`;
 *    a manifest that does not validate is still kept raw in `VersionInspection.manifest` (B8 and the
 *    `Library` reclassification read it).
 * 3. Builds (BuildShare JSON ≤ 20 MB, read whole): blueprint validation, `buildMeta` and, when the
 *    build has no cover, the PNG embedded in the blueprint becomes its thumbnail `Media`
 *    (`purpose = 'thumbnail'`, processed inline into WebP variants).
 * 4. `VersionInspection` (status, flags, entries, sizes, SHA-256) and, for versions still waiting
 *    for their checks (`checksStatus` NULL or `pending`, the unapproved legacy mods of B12), the
 *    inspection status. Approved legacy versions keep `passed`: their flags are informative.
 * 5. After the pass: `Mod.logColor` from the manifest of the latest version that declares it.
 *
 * Only v2 columns are written and only when empty (`coalesce`): a second run changes nothing.
 * **The objects are only read** (HEAD, GET, ranged GET); nothing in the bucket changes except the
 * new thumbnail media objects of step 3. Missing objects are reported, never re-labelled here.
 */
import { createHash } from 'node:crypto';
import { FILE_CHECKS, type InspectionFlagDTO } from '@sotf/contracts/manifest';
import type { Ctx } from '@sotf/core';
import { decodeThumbnail, inspectBlueprint, storedBuildMeta } from '@sotf/core/builds/index';
import {
  entryName,
  inspectionStatus,
  inspectZip,
  MAX_MANIFEST_BYTES,
  nextEntry,
  openZip,
  presignedRangeSource,
  type RandomAccessSource,
  readEntry,
} from '@sotf/core/inspection/index';
import { processMedia } from '@sotf/core/media/index';
import { incomingKey, type ObjectStorage } from '@sotf/core/storage/index';
import type { JsonObject } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { uuidv7 } from 'uuidv7';
import { mapLimit, pushSample } from './run-record.ts';

/** Versions inspected in parallel (each one streams its object once for the SHA-256). */
const VERSION_CONCURRENCY = 4;

export interface VersionPassReport {
  candidates: number;
  inspected: number;
  passed: number;
  flagged: number;
  failed: number;
  bytesHashed: number;
  checksStatusUpdated: number;
  manifestsStored: number;
  rawManifests: number;
  buildMeta: number;
  buildThumbnails: number;
  logColors: number;
  missingObjects: string[];
  errors: Array<{ versionId: number; error: string }>;
}

export type Candidate = {
  id: number;
  version: string;
  storageKey: string;
  extension: string | null;
  sha256: string | null;
  modId: number | null;
  type: string | null;
  manifestId: string | null;
  userId: number | null;
};

export interface Inspected {
  status: 'passed' | 'flagged' | 'failed';
  flags: InspectionFlagDTO[];
  sha256: string;
  size: number;
  contentType: string;
  /** Normalised manifest (null when absent or invalid). */
  manifest: JsonObject | null;
  /** Raw manifest JSON when the normalised one is null but the file parses. */
  rawManifest: JsonObject | null;
  entries: Array<{ path: string; size: number; compressed: number; crc32: number }>;
  uncompressedBytes: number | null;
  ratio: number | null;
  buildMeta: JsonObject | null;
  thumbnail: Buffer | null;
}

export function isBuildFile(candidate: Pick<Candidate, 'type' | 'storageKey' | 'extension'>): boolean {
  return (
    candidate.type === 'Build' ||
    /\.json$/i.test(candidate.storageKey) ||
    candidate.extension?.replace(/^\./, '').toLowerCase() === 'json'
  );
}

async function streamSha256(storage: ObjectStorage, bucket: string, key: string): Promise<string> {
  const { body } = await storage.get(bucket, key);
  const hash = createHash('sha256');
  for await (const chunk of body as AsyncIterable<Buffer>) hash.update(chunk);
  return hash.digest('hex');
}

async function readWhole(storage: ObjectStorage, bucket: string, key: string, maxBytes: number): Promise<Buffer> {
  const { body } = await storage.get(bucket, key);
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of body as AsyncIterable<Buffer>) {
    total += chunk.length;
    if (total > maxBytes) {
      (body as { destroy?: () => void }).destroy?.();
      throw new Error(`object larger than ${maxBytes} bytes`);
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

export function asJsonObject(value: unknown): JsonObject | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (JSON.parse(JSON.stringify(value)) as JsonObject)
    : null;
}

/** The raw JSON of the manifest at `path` (legacy manifests that fail the v2 schema). */
async function readRawManifest(source: RandomAccessSource, path: string): Promise<JsonObject | null> {
  const zip = await openZip(source);
  try {
    for (;;) {
      const entry = await nextEntry(zip);
      if (!entry) return null;
      if (entryName(entry).replaceAll('\\', '/') !== path) continue;
      const text = new TextDecoder('utf-8', { fatal: false })
        .decode(await readEntry(zip, entry, MAX_MANIFEST_BYTES))
        .replace(/^\uFEFF/, '');
      try {
        return asJsonObject(JSON.parse(text));
      } catch {
        return null;
      }
    }
  } finally {
    zip.close();
  }
}

export async function inspectZipVersion(
  storage: ObjectStorage,
  bucket: string,
  candidate: Candidate,
  size: number,
): Promise<Inspected> {
  const [sha256, source] = await Promise.all([
    candidate.sha256 ?? streamSha256(storage, bucket, candidate.storageKey),
    presignedRangeSource(storage, bucket, candidate.storageKey, size),
  ]);
  const zip = await inspectZip(source);
  // Legacy files are grandfathered: no size limit, and a manifest id that differs from the mod's
  // is a warning for the moderators, not a failure (the legacy never checked it).
  const flags: InspectionFlagDTO[] = [...zip.flags];
  if (zip.manifest && candidate.manifestId && zip.manifest.id !== candidate.manifestId) {
    flags.push({
      code: 'manifest_id_mismatch',
      severity: 'warning',
      path: zip.manifestPath,
      detail: `manifest id "${zip.manifest.id}" differs from the mod's "${candidate.manifestId}"`,
    });
  }
  const manifest = zip.manifest ? asJsonObject(zip.manifest) : null;
  const rawManifest =
    !manifest && zip.manifestPath ? await readRawManifest(source, zip.manifestPath).catch(() => null) : null;
  return {
    status: inspectionStatus(flags),
    flags,
    sha256,
    size,
    contentType: 'application/zip',
    manifest,
    rawManifest,
    entries: zip.entries,
    uncompressedBytes: zip.uncompressedBytes,
    ratio: zip.ratio,
    buildMeta: null,
    thumbnail: null,
  };
}

export async function inspectBuildVersion(
  storage: ObjectStorage,
  bucket: string,
  candidate: Candidate,
  size: number,
): Promise<Inspected> {
  if (size > FILE_CHECKS.maxBuildBytes) {
    const sha256 = candidate.sha256 ?? (await streamSha256(storage, bucket, candidate.storageKey));
    const flags: InspectionFlagDTO[] = [
      {
        code: 'file_too_large',
        severity: 'error',
        path: null,
        detail: `${size} bytes (max ${FILE_CHECKS.maxBuildBytes})`,
      },
    ];
    return {
      status: 'failed',
      flags,
      sha256,
      size,
      contentType: 'application/json',
      manifest: null,
      rawManifest: null,
      entries: [],
      uncompressedBytes: size,
      ratio: null,
      buildMeta: null,
      thumbnail: null,
    };
  }
  const buffer = await readWhole(storage, bucket, candidate.storageKey, FILE_CHECKS.maxBuildBytes);
  const blueprint = inspectBlueprint(buffer);
  const meta = storedBuildMeta(blueprint.buildMeta);
  return {
    status: inspectionStatus(blueprint.flags),
    flags: blueprint.flags,
    sha256: createHash('sha256').update(buffer).digest('hex'),
    size: buffer.length,
    contentType: 'application/json',
    manifest: null,
    rawManifest: null,
    entries: [],
    uncompressedBytes: buffer.length,
    ratio: null,
    buildMeta: meta ? asJsonObject(meta) : null,
    thumbnail: blueprint.summary ? decodeThumbnail(blueprint.summary) : null,
  };
}

export function declared(manifest: JsonObject | null, field: string): string | null {
  const value = manifest?.[field];
  return typeof value === 'string' && value.trim() !== '' ? value.trim().slice(0, 40) : null;
}

/** Thumbnail of a build without cover: private source → `Media` → variants → `Mod.thumbnailMediaId`. */
export async function storeBuildThumbnail(
  ctx: Ctx,
  storage: ObjectStorage,
  candidate: Candidate,
  png: Buffer,
): Promise<boolean> {
  if (candidate.modId === null) return false;
  const current = await ctx.db.execute<{ thumbnailMediaId: string | null }>(
    sql`SELECT "thumbnailMediaId" FROM "Mod" WHERE "id" = ${candidate.modId}`,
  );
  if (!current.rows[0] || current.rows[0].thumbnailMediaId) return false;
  const key = incomingKey(candidate.userId ?? 0, `b15-${candidate.id}-thumbnail`);
  const bucket = storage.config.privateBucket;
  await storage.put({ bucket, key, body: png, contentLength: png.length, contentType: 'image/png' });
  const inserted = await ctx.db.execute<{ id: string }>(sql`
    INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "bytes", "contentType", "status")
    VALUES (${uuidv7()}::uuid, ${candidate.userId}, 'thumbnail', ${bucket}, ${key}, ${png.length}, 'image/png', 'pending')
    ON CONFLICT ("sourceBucket", "sourceKey") DO UPDATE SET "bytes" = EXCLUDED."bytes"
    RETURNING "id"`);
  const mediaId = inserted.rows[0]?.id;
  if (!mediaId) return false;
  const outcome = await processMedia(ctx, storage, mediaId);
  if (outcome.status !== 'ready') {
    ctx.log.warn({ versionId: candidate.id, mediaId, outcome }, 'B15: build thumbnail rejected');
    return false;
  }
  const updated = await ctx.db.execute(sql`
    UPDATE "Mod" SET "thumbnailMediaId" = ${mediaId}::uuid
     WHERE "id" = ${candidate.modId} AND "thumbnailMediaId" IS NULL`);
  return (updated.rowCount ?? 0) > 0;
}

async function save(ctx: Ctx, candidate: Candidate, result: Inspected): Promise<{ checksUpdated: boolean }> {
  const manifestForInspection =
    result.manifest ?? result.rawManifest ?? (result.buildMeta ? { buildMeta: result.buildMeta } : null);
  const entries = JSON.stringify(result.entries);
  const flags = JSON.stringify(result.flags);
  return ctx.db.transaction(async (tx) => {
    await tx.execute(sql`
      INSERT INTO "VersionInspection"
        ("modVersionId", "status", "manifest", "entries", "flags", "uncompressedBytes", "ratio", "sha256", "error", "inspectedAt")
      VALUES (${candidate.id}, ${result.status}, ${manifestForInspection ? JSON.stringify(manifestForInspection) : null}::jsonb,
              ${entries}::jsonb, ${flags}::jsonb, ${result.uncompressedBytes}, ${result.ratio}, ${result.sha256}, NULL, now())
      ON CONFLICT ("modVersionId") DO NOTHING`);
    const updated = await tx.execute<{ checksUpdated: boolean }>(sql`
      UPDATE "ModVersion" v SET
        "fileSize" = coalesce(v."fileSize", ${result.size}),
        "sha256" = coalesce(v."sha256", ${result.sha256}),
        "contentType" = coalesce(v."contentType", ${result.contentType}),
        "manifest" = coalesce(v."manifest", ${result.manifest ? JSON.stringify(result.manifest) : null}::jsonb),
        "gameVersionDeclared" = coalesce(v."gameVersionDeclared", ${declared(result.manifest, 'gameVersion')}),
        "loaderVersionDeclared" = coalesce(v."loaderVersionDeclared", ${declared(result.manifest, 'loaderVersion')}),
        "platformDeclared" = coalesce(v."platformDeclared", ${declared(result.manifest, 'platform')}),
        "buildMeta" = coalesce(v."buildMeta", ${result.buildMeta ? JSON.stringify(result.buildMeta) : null}::jsonb),
        "checksStatus" = CASE WHEN v."checksStatus" IS NULL OR v."checksStatus" = 'pending'
                              THEN ${result.status} ELSE v."checksStatus" END
        FROM (SELECT "checksStatus" AS "oldChecks" FROM "ModVersion" WHERE "id" = ${candidate.id}) o
       WHERE v."id" = ${candidate.id}
       RETURNING (o."oldChecks" IS NULL OR o."oldChecks" = 'pending') AS "checksUpdated"`);
    return { checksUpdated: updated.rows[0]?.checksUpdated === true };
  });
}

/** Fills `Mod.logColor` (NULL only) from the latest version whose manifest declares one. */
async function fillLogColors(ctx: Ctx): Promise<number> {
  const res = await ctx.db.execute(sql`
    UPDATE "Mod" m SET "logColor" = s."color"
      FROM (SELECT DISTINCT ON (v."modId") v."modId", upper(v."manifest" ->> 'logColor') AS "color"
              FROM "ModVersion" v
             WHERE v."modId" IS NOT NULL AND v."manifest" ? 'logColor'
             ORDER BY v."modId", v."createdAt" DESC, v."id" DESC) s
     WHERE m."id" = s."modId" AND m."logColor" IS NULL AND s."color" ~ '^#[0-9A-F]{6}$'`);
  return res.rowCount ?? 0;
}

const CANDIDATES_SQL = (afterId: number, limit: number) => sql`
  SELECT v."id", v."version", v."storageKey", v."extension", v."sha256", v."modId",
         m."type", m."mod_id" AS "manifestId", m."userId"
    FROM "ModVersion" v
    LEFT JOIN "Mod" m ON m."id" = v."modId"
   WHERE v."storageKey" IS NOT NULL AND v."status" <> 'file_missing' AND v."id" > ${afterId}
     AND NOT EXISTS (SELECT 1 FROM "VersionInspection" vi WHERE vi."modVersionId" = v."id")
   ORDER BY v."id"
   LIMIT ${limit}`;

export async function runVersionPass(
  ctx: Ctx,
  storage: ObjectStorage,
  options: { dryRun: boolean; batchSize: number; signal: AbortSignal },
): Promise<VersionPassReport> {
  const report: VersionPassReport = {
    candidates: 0,
    inspected: 0,
    passed: 0,
    flagged: 0,
    failed: 0,
    bytesHashed: 0,
    checksStatusUpdated: 0,
    manifestsStored: 0,
    rawManifests: 0,
    buildMeta: 0,
    buildThumbnails: 0,
    logColors: 0,
    missingObjects: [],
    errors: [],
  };
  const bucket = storage.config.publicBucket;
  let cursor = 0;
  for (;;) {
    if (options.signal.aborted) throw new Error('B15 aborted (job cancelled or expired); run it again to resume');
    const batch = (await ctx.db.execute<Candidate>(CANDIDATES_SQL(cursor, options.batchSize))).rows;
    if (batch.length === 0) break;
    cursor = (batch[batch.length - 1] as Candidate).id;
    report.candidates += batch.length;
    await mapLimit(batch, VERSION_CONCURRENCY, options.signal, async (candidate) => {
      try {
        const head = await storage.head(bucket, candidate.storageKey);
        if (!head) {
          pushSample(report.missingObjects, `${candidate.id}:${candidate.storageKey}`);
          return;
        }
        if (options.dryRun) return;
        const result = isBuildFile(candidate)
          ? await inspectBuildVersion(storage, bucket, candidate, head.size)
          : await inspectZipVersion(storage, bucket, candidate, head.size);
        if (!candidate.sha256) report.bytesHashed += head.size;
        if (result.thumbnail && (await storeBuildThumbnail(ctx, storage, candidate, result.thumbnail))) {
          report.buildThumbnails += 1;
        }
        const { checksUpdated } = await save(ctx, candidate, result);
        report.inspected += 1;
        report[result.status] += 1;
        if (checksUpdated) report.checksStatusUpdated += 1;
        if (result.manifest) report.manifestsStored += 1;
        if (result.rawManifest) report.rawManifests += 1;
        if (result.buildMeta) report.buildMeta += 1;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        ctx.log.warn({ versionId: candidate.id, key: candidate.storageKey, err: error }, 'B15: version not inspected');
        pushSample(report.errors, { versionId: candidate.id, error: message.slice(0, 300) });
      }
    });
    if (batch.length < options.batchSize) break;
  }
  if (!options.dryRun) report.logColors = await fillLogColors(ctx);
  return report;
}
