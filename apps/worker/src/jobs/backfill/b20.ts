/**
 * B20 · automatic checks of the versions of legacy mods that are still waiting for review.
 *
 * The 28 mods that the old site never approved are `pending` in v2, and the latest version of each
 * has `"checksStatus" = 'pending'`: the automatic checks never ran on files imported from the old
 * site (B15 only inspects objects that exist and have no inspection). This backfill runs them now,
 * with the same checks as `inspection.run`, from the object that is already in the bucket
 * (`storageKey`, or the key inside `downloadUrl`). No `Upload` is created: nothing is uploaded,
 * moved or deleted, the objects are only read.
 *
 * For every version with `checksStatus = 'pending'` of a mod with `status = 'pending'`:
 *
 * - Mod zips: SHA-256 (streamed), zip structure over Range reads (entries, ratio, zip slip,
 *   extensions), `manifest.json`. Builds: BuildShare blueprint (20 MB). Legacy files are
 *   grandfathered as in B15: a manifest id that differs from the mod's, and a file over the
 *   uploader's size limit (200 MB, 500 MB for verified creators), are warnings (`flagged`), not
 *   errors, because the old site never checked them. Everything else is an error (`failed`).
 * - The result is written to `VersionInspection` (upsert) and `ModVersion.checksStatus` becomes
 *   `passed`, `flagged` or `failed`. `fileSize`, `sha256`, `contentType`, the manifest and the
 *   declared game/loader/platform are filled only where empty.
 * - A missing object (HEAD 404, or no key to read) is `failed` with the flag and the
 *   `VersionInspection.error` `object_missing`, never a crash.
 * - VirusTotal, when `VIRUSTOTAL_API_KEY` is set: a lookup by SHA-256 through the shared quota
 *   (4/min, 500/day) of the `security.scan` rules (clean 0, suspicious 1-2, malicious 3 or more)
 *   stored in `SecurityScan`. Unlike `security.scan` it never holds a version, never notifies and
 *   never uploads a file: files VirusTotal does not know stay "not scanned" (moderators decide). A
 *   suspicious file adds a `scan_detections` warning, a malicious one an error. When the daily quota
 *   is spent the run stops and leaves the rest `pending`: run it again after 00:00 UTC.
 * - Never changes `Mod.status` or `ModVersion.status`. The mods stay `pending` for the moderators.
 * - Every changed `ModVersion` column is recorded in `"DataFixAudit"` (`fixId = 'B20'`);
 *   `pnpm db:revert-fix B20` restores them (the `VersionInspection` and `SecurityScan` rows it
 *   created are left behind, they describe the file). A cache invalidation is published for the
 *   touched mods.
 *
 * Idempotent: a version leaves the candidates as soon as its `checksStatus` changes; a transient
 * read error or a deferred VirusTotal lookup leaves it `pending` for the next run. Dry run (the
 * default of `backfill.run`): only `HEAD` requests and counts, no VirusTotal call, nothing written.
 */
import type { InspectionFlagDTO } from '@sotf/contracts/manifest';
import { FILE_CHECKS } from '@sotf/contracts/manifest';
import type { Ctx } from '@sotf/core';
import { inspectionStatus } from '@sotf/core/inspection/index';
import { publishCacheInvalidation } from '@sotf/core/kernel/notify';
import {
  QuotaExhausted,
  type VirusTotalClient,
  VirusTotalError,
  VirusTotalRateLimited,
  verdictOf,
} from '@sotf/core/security-scan/index';
import type { ObjectStorage } from '@sotf/core/storage/index';
import { sql } from 'drizzle-orm';
import {
  type Candidate,
  declared,
  type Inspected,
  inspectBuildVersion,
  inspectZipVersion,
  isBuildFile,
  storeBuildThumbnail,
} from './b15-versions.ts';
import { mapLimit, pushSample, startRun } from './run-record.ts';

export const B20_FIX_ID = 'B20';
const CONCURRENCY = 3;
const CACHE_TAGS_PER_NOTIFY = 100;

export interface B20Options {
  dryRun: boolean;
  batchSize: number;
  signal: AbortSignal;
  /** VirusTotal client, or null when `VIRUSTOTAL_API_KEY` is not set. */
  virusTotal: VirusTotalClient | null;
}

export interface B20Report {
  dryRun: boolean;
  candidates: number;
  /** Dry run: objects found / not found. */
  present: number;
  missing: number;
  inspected: number;
  passed: number;
  flagged: number;
  failed: number;
  /** Versions whose object is not in storage (a subset of `failed`). */
  missingObjects: string[];
  sizeWarnings: number;
  shaMismatches: string[];
  buildThumbnails: number;
  scan: {
    enabled: boolean;
    clean: number;
    suspicious: number;
    malicious: number;
    reused: number;
    notKnown: number;
  };
  /** Versions left `pending` for the next run (read error, VirusTotal deferred). */
  deferred: number;
  mods: number;
  stoppedEarly: string | null;
  errors: Array<{ versionId: number; error: string }>;
  ms: number;
}

type B20Candidate = Omit<Candidate, 'storageKey'> & {
  storageKey: string | null;
  downloadUrl: string;
  trusted: boolean;
};

interface Scan {
  verdict: 'clean' | 'suspicious' | 'malicious' | 'false_positive';
  positives: number | null;
  total: number | null;
  permalink: string | null;
  raw: Record<string, unknown>;
  reused: boolean;
}

/** The object key inside a public URL of the bucket (`https://r2.sotf-mods.com/<key>`), or null. */
export function keyFromPublicUrl(url: string | null | undefined, publicBaseUrl: string): string | null {
  const base = `${publicBaseUrl.replace(/\/+$/, '')}/`;
  if (!url?.startsWith(base)) return null;
  const path = url.slice(base.length).split(/[?#]/, 1)[0] ?? '';
  if (path === '') return null;
  try {
    return decodeURIComponent(path);
  } catch {
    return path;
  }
}

function keyOf(candidate: B20Candidate, storage: ObjectStorage): string | null {
  return candidate.storageKey ?? keyFromPublicUrl(candidate.downloadUrl, storage.config.publicBaseUrl);
}

function missingResult(candidate: B20Candidate, key: string | null): Inspected {
  const build = isBuildFile({
    type: candidate.type,
    storageKey: key ?? candidate.downloadUrl,
    extension: candidate.extension,
  });
  const flags: InspectionFlagDTO[] = [
    {
      code: build ? 'blueprint_invalid' : 'zip_invalid',
      severity: 'error',
      path: null,
      detail: key ? `the file is not in storage (${key})` : 'the version has no file in storage',
    },
  ];
  return {
    status: 'failed',
    flags,
    sha256: '',
    size: 0,
    contentType: build ? 'application/json' : 'application/zip',
    manifest: null,
    rawManifest: null,
    entries: [],
    uncompressedBytes: null,
    ratio: null,
    buildMeta: null,
    thumbnail: null,
  };
}

async function existingScan(ctx: Ctx, versionId: number, sha256: string): Promise<Scan | null> {
  const res = await ctx.db.execute<{
    verdict: Scan['verdict'];
    positives: number | null;
    total: number | null;
    permalink: string | null;
  }>(sql`
    SELECT "verdict", "positives", "total", "permalink" FROM "SecurityScan"
     WHERE "modVersionId" = ${versionId} AND "sha256" = ${sha256}
       AND "verdict" IN ('clean', 'suspicious', 'malicious', 'false_positive')
     ORDER BY "createdAt" DESC, "id" DESC LIMIT 1`);
  const row = res.rows[0];
  return row ? { ...row, raw: {}, reused: true } : null;
}

/** Looks the file up by SHA-256. Null when VirusTotal does not know it or has no analysis yet. */
async function lookup(vt: VirusTotalClient, sha256: string): Promise<Scan | null> {
  const report = await vt.lookup(sha256);
  if (!report?.stats) return null;
  const { stats } = report;
  return {
    verdict: verdictOf(stats.malicious),
    positives: stats.malicious,
    total: stats.malicious + stats.suspicious + stats.undetected + stats.harmless,
    permalink: `https://www.virustotal.com/gui/file/${sha256}`,
    raw: {
      source: 'B20',
      stats,
      lastAnalysisAt: report.lastAnalysisAt?.toISOString() ?? null,
      detections: Object.fromEntries(Object.entries(report.detections).slice(0, 40)),
    },
    reused: false,
  };
}

function scanFlag(scan: Scan): InspectionFlagDTO | null {
  if (scan.verdict !== 'suspicious' && scan.verdict !== 'malicious') return null;
  return {
    code: 'scan_detections',
    severity: scan.verdict === 'malicious' ? 'error' : 'warning',
    path: null,
    detail: `${scan.positives ?? 0} of ${scan.total ?? 0} VirusTotal engines flagged the file`,
  };
}

interface AuditEntry {
  table: string;
  rowId: number;
  column: string;
  oldValue: unknown;
  newValue: unknown;
}

interface Saved {
  saved: boolean;
  modId: number | null;
}

async function save(
  ctx: Ctx,
  candidate: B20Candidate,
  result: Inspected,
  scan: Scan | null,
  error: string | null,
): Promise<Saved> {
  const manifestForInspection =
    result.manifest ?? result.rawManifest ?? (result.buildMeta ? { buildMeta: result.buildMeta } : null);
  const sha256 = result.sha256 === '' ? null : result.sha256;
  return ctx.db.transaction(async (tx) => {
    const locked = await tx.execute<Record<string, unknown>>(sql`
      SELECT "checksStatus", "fileSize", "sha256", "contentType", "manifest", "gameVersionDeclared",
             "loaderVersionDeclared", "platformDeclared", "buildMeta"
        FROM "ModVersion" WHERE "id" = ${candidate.id} FOR UPDATE`);
    const before = locked.rows[0];
    if (!before) return { saved: false, modId: candidate.modId };
    if (before.checksStatus !== 'pending') return { saved: false, modId: candidate.modId };

    await tx.execute(sql`
      INSERT INTO "VersionInspection"
        ("modVersionId", "status", "manifest", "entries", "flags", "uncompressedBytes", "ratio", "sha256", "error", "inspectedAt")
      VALUES (${candidate.id}, ${result.status}, ${manifestForInspection ? JSON.stringify(manifestForInspection) : null}::jsonb,
              ${JSON.stringify(result.entries)}::jsonb, ${JSON.stringify(result.flags)}::jsonb, ${result.uncompressedBytes},
              ${result.ratio}, ${sha256}, ${error}, now())
      ON CONFLICT ("modVersionId") DO UPDATE SET
        "status" = EXCLUDED."status", "manifest" = EXCLUDED."manifest", "entries" = EXCLUDED."entries",
        "flags" = EXCLUDED."flags", "uncompressedBytes" = EXCLUDED."uncompressedBytes", "ratio" = EXCLUDED."ratio",
        "sha256" = EXCLUDED."sha256", "error" = EXCLUDED."error", "inspectedAt" = EXCLUDED."inspectedAt"`);

    if (scan && !scan.reused) {
      await tx.execute(sql`
        INSERT INTO "SecurityScan" ("modVersionId", "sha256", "engine", "positives", "total", "permalink", "verdict", "raw", "scannedAt")
        VALUES (${candidate.id}, ${result.sha256}, 'virustotal', ${scan.positives}, ${scan.total}, ${scan.permalink},
                ${scan.verdict}, ${JSON.stringify(scan.raw)}::jsonb, now())`);
    }

    // Columns that were empty are filled; checksStatus always changes.
    const next: Record<string, unknown> = {
      checksStatus: result.status,
      fileSize: before.fileSize ?? (result.size > 0 ? result.size : null),
      sha256: before.sha256 ?? sha256,
      contentType: before.contentType ?? (result.size > 0 ? result.contentType : null),
      manifest: before.manifest ?? result.manifest,
      gameVersionDeclared: before.gameVersionDeclared ?? declared(result.manifest, 'gameVersion'),
      loaderVersionDeclared: before.loaderVersionDeclared ?? declared(result.manifest, 'loaderVersion'),
      platformDeclared: before.platformDeclared ?? declared(result.manifest, 'platform'),
      buildMeta: before.buildMeta ?? result.buildMeta,
    };
    const audit: AuditEntry[] = [];
    for (const [column, value] of Object.entries(next)) {
      if (JSON.stringify(value ?? null) === JSON.stringify(before[column] ?? null)) continue;
      audit.push({
        table: 'ModVersion',
        rowId: candidate.id,
        column,
        oldValue: before[column] === undefined ? null : before[column],
        newValue: value ?? null,
      });
    }
    await tx.execute(sql`
      UPDATE "ModVersion" SET
        "checksStatus" = ${next.checksStatus as string},
        "fileSize" = ${next.fileSize as number | null},
        "sha256" = ${next.sha256 as string | null},
        "contentType" = ${next.contentType as string | null},
        "manifest" = ${next.manifest ? JSON.stringify(next.manifest) : null}::jsonb,
        "gameVersionDeclared" = ${next.gameVersionDeclared as string | null},
        "loaderVersionDeclared" = ${next.loaderVersionDeclared as string | null},
        "platformDeclared" = ${next.platformDeclared as string | null},
        "buildMeta" = ${next.buildMeta ? JSON.stringify(next.buildMeta) : null}::jsonb
      WHERE "id" = ${candidate.id}`);
    await tx.execute(sql`
      INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
      SELECT ${B20_FIX_ID}, e."table", e."rowId"::text, e."column", e."oldValue", e."newValue"
        FROM jsonb_to_recordset(${JSON.stringify(audit)}::jsonb)
             AS e("table" text, "rowId" int, "column" text, "oldValue" jsonb, "newValue" jsonb)`);
    return { saved: true, modId: candidate.modId };
  });
}

const CANDIDATES_SQL = (afterId: number, limit: number) => sql`
  SELECT v."id", v."version", v."storageKey", v."downloadUrl", v."extension", v."sha256", v."modId",
         m."type", m."mod_id" AS "manifestId", m."userId",
         coalesce(u."verifiedCreator" OR u."role" IN ('moderator', 'admin'), false) AS "trusted"
    FROM "ModVersion" v
    JOIN "Mod" m ON m."id" = v."modId"
    LEFT JOIN "User" u ON u."id" = m."userId"
   WHERE m."status" = 'pending' AND v."checksStatus" = 'pending' AND v."id" > ${afterId}
   ORDER BY v."id"
   LIMIT ${limit}`;

export async function runB20(ctx: Ctx, storage: ObjectStorage, options: B20Options): Promise<B20Report> {
  const started = Date.now();
  const run = await startRun(ctx, B20_FIX_ID, options.dryRun);
  const report: B20Report = {
    dryRun: options.dryRun,
    candidates: 0,
    present: 0,
    missing: 0,
    inspected: 0,
    passed: 0,
    flagged: 0,
    failed: 0,
    missingObjects: [],
    sizeWarnings: 0,
    shaMismatches: [],
    buildThumbnails: 0,
    scan: { enabled: options.virusTotal !== null, clean: 0, suspicious: 0, malicious: 0, reused: 0, notKnown: 0 },
    deferred: 0,
    mods: 0,
    stoppedEarly: null,
    errors: [],
    ms: 0,
  };
  const bucket = storage.config.publicBucket;
  const touchedMods = new Set<number>();
  const touchedUsers = new Set<number>();
  const stop = new AbortController();
  const signal = AbortSignal.any([options.signal, stop.signal]);

  try {
    let cursor = 0;
    for (;;) {
      if (options.signal.aborted) throw new Error('B20 aborted (job cancelled or expired); run it again to resume');
      if (stop.signal.aborted) break;
      const batch = (await ctx.db.execute<B20Candidate>(CANDIDATES_SQL(cursor, options.batchSize))).rows;
      if (batch.length === 0) break;
      cursor = (batch[batch.length - 1] as B20Candidate).id;
      report.candidates += batch.length;

      await mapLimit(batch, CONCURRENCY, signal, async (candidate) => {
        try {
          const key = keyOf(candidate, storage);
          const head = key ? await storage.head(bucket, key) : null;
          if (options.dryRun) {
            if (head) report.present += 1;
            else {
              report.missing += 1;
              pushSample(report.missingObjects, `${candidate.id}:${key ?? candidate.downloadUrl}`);
            }
            return;
          }

          let result: Inspected;
          let error: string | null = null;
          if (!key || !head) {
            result = missingResult(candidate, key);
            error = 'object_missing';
            pushSample(report.missingObjects, `${candidate.id}:${key ?? candidate.downloadUrl}`);
          } else {
            const target = { ...candidate, storageKey: key, sha256: null };
            result = isBuildFile(target)
              ? await inspectBuildVersion(storage, bucket, target, head.size)
              : await inspectZipVersion(storage, bucket, target, head.size);
            const limit = candidate.trusted ? FILE_CHECKS.maxModBytesVerified : FILE_CHECKS.maxModBytes;
            if (!isBuildFile(target) && head.size > limit) {
              report.sizeWarnings += 1;
              result = {
                ...result,
                flags: [
                  {
                    code: 'file_too_large',
                    severity: 'warning',
                    path: null,
                    detail: `${head.size} bytes (max ${limit})`,
                  },
                  ...result.flags,
                ],
              };
            }
            if (candidate.sha256 && candidate.sha256 !== result.sha256) {
              pushSample(report.shaMismatches, `${candidate.id}:${candidate.sha256}`);
            }
          }

          // VirusTotal (mod zips only: blueprints are not executable).
          let scan: Scan | null = null;
          if (
            options.virusTotal &&
            !error &&
            result.status !== 'failed' &&
            !isBuildFile({ ...candidate, storageKey: key ?? '' })
          ) {
            try {
              scan =
                (await existingScan(ctx, candidate.id, result.sha256)) ??
                (await lookup(options.virusTotal, result.sha256));
            } catch (scanError) {
              const quota =
                scanError instanceof QuotaExhausted ||
                scanError instanceof VirusTotalRateLimited ||
                (scanError instanceof VirusTotalError && (scanError.status === 401 || scanError.status === 403));
              if (quota) {
                report.stoppedEarly = scanError instanceof Error ? scanError.message : String(scanError);
                stop.abort();
              }
              report.deferred += 1;
              pushSample(report.errors, {
                versionId: candidate.id,
                error: `VirusTotal: ${scanError instanceof Error ? scanError.message : String(scanError)}`.slice(
                  0,
                  300,
                ),
              });
              return;
            }
            if (scan?.reused) report.scan.reused += 1;
            else if (scan) report.scan[scan.verdict === 'false_positive' ? 'clean' : scan.verdict] += 1;
            else report.scan.notKnown += 1;
            const extra = scan ? scanFlag(scan) : null;
            if (extra) {
              const flags = [...result.flags, extra];
              result = { ...result, flags, status: inspectionStatus(flags) };
            }
          }

          if (
            result.thumbnail &&
            (await storeBuildThumbnail(ctx, storage, { ...candidate, storageKey: key ?? '' }, result.thumbnail))
          ) {
            report.buildThumbnails += 1;
          }
          const saved = await save(ctx, candidate, result, scan, error);
          if (!saved.saved) return;
          report.inspected += 1;
          report[result.status] += 1;
          if (candidate.modId !== null) touchedMods.add(candidate.modId);
          if (candidate.userId !== null) touchedUsers.add(candidate.userId);
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          ctx.log.warn({ versionId: candidate.id, err: error }, 'B20: version left pending');
          report.deferred += 1;
          pushSample(report.errors, { versionId: candidate.id, error: message.slice(0, 300) });
        }
      });
      if (batch.length < options.batchSize) break;
    }

    report.mods = touchedMods.size;
    if (!options.dryRun && touchedMods.size > 0) {
      const tags = [
        ...[...touchedMods].map((id) => `mod:${id}`),
        ...[...touchedUsers].map((id) => `user:${id}`),
        'list:mods',
        'list:builds',
      ];
      for (let i = 0; i < tags.length; i += CACHE_TAGS_PER_NOTIFY) {
        await publishCacheInvalidation(ctx.db, tags.slice(i, i + CACHE_TAGS_PER_NOTIFY));
      }
    }
    report.ms = Date.now() - started;
    await run.finish(report.inspected, { ...report });
    return report;
  } catch (error) {
    await run.fail(error, { ...report }).catch(() => undefined);
    throw error;
  }
}
