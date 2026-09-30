/**
 * `security.scan {modVersionId, sha256}` (PLAN §7.4 "security.scan", "Política de publicación").
 *
 * 1. Builds are not scanned (JSON blueprints; the quota is kept for executable content).
 * 2. Without `VIRUSTOTAL_API_KEY` the version gets an `unknown` ("not scanned") report and, when
 *    its author is not a verified creator, goes to human review.
 * 3. Otherwise the file is looked up by SHA-256; an unknown file is uploaded (streamed from R2:
 *    the public copy, or the quarantined one for held files) and polled every 2 minutes until
 *    VirusTotal has a first analysis (≤ 30 polls, then `unknown`). Every API call takes a quota
 *    slot (4/min, 500/day); a spent daily quota or a 429 reschedules the job.
 * 4. The verdict: 0 detections → `clean`, 1–2 → `suspicious`, ≥ 3 → `malicious` (a detection is
 *    an engine with category `malicious`). Policy on the version: `malicious` holds it for
 *    everyone; `suspicious` and `unknown` hold it unless the author is a verified creator (or
 *    staff); `clean` changes nothing. Holding = `active` → `pending` with a scan reason (latest
 *    recomputed, `version.status_changed`, a signal to the author, the `versions` lane updated).
 * 5. `scan.completed` is emitted for every final verdict (the public report on the mod page).
 *
 * Idempotent: a version whose latest scan of that SHA-256 is final (or overridden by a ranger) is
 * skipped. `overrideScan` is the ranger's "verified false positive" / "malicious" switch.
 */
import type { ScanOverrideBody, ScanOverrideResultDTO } from '@sotf/contracts/moderation';
import type { Transaction } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { query, queryOne } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { assertStaff } from '../moderation/guard.ts';
import { publishLaneCounts } from '../moderation/lanes.ts';
import { kindOfType, utcTimestamp } from '../moderation/shared.ts';
import { writeNotificationDrafts } from '../notifications/service.ts';
import { modRouting } from '../publishing/context.ts';
import { recomputeLatest } from '../publishing/versions.ts';
import type { ObjectStorage } from '../storage/client.ts';
import { QuotaExhausted } from './throttle.ts';
import {
  type FileReport,
  type VirusTotalClient,
  VirusTotalError,
  VirusTotalRateLimited,
  VT_UPLOAD_MAX,
} from './virustotal.ts';

export type ScanVerdict = 'pending' | 'clean' | 'suspicious' | 'malicious' | 'unknown' | 'false_positive';

/** Detections at or above which a file is malicious for everyone (PLAN §7.4). */
export const MALICIOUS_THRESHOLD = 3;
export const POLL_INTERVAL_MS = 2 * 60_000;
export const MAX_POLLS = 30;
/** `statusReason` of a version held by the scan (also how an override recognises it). */
export const SCAN_HOLD_REASON = 'Held for review after the security scan';
export const MALICIOUS_REASON = 'Confirmed malicious by a ranger';

export interface ScanDeps {
  /** null when `VIRUSTOTAL_API_KEY` is not set. */
  virusTotal: VirusTotalClient | null;
  storage: ObjectStorage | null;
}

export type ScanOutcome =
  | { status: 'skipped'; reason: string }
  | { status: 'rescheduled'; reason: string; at: string }
  | { status: 'done'; verdict: ScanVerdict; positives: number | null; held: boolean };

interface VersionFacts {
  id: number;
  modId: number;
  version: string;
  sha256: string | null;
  status: string;
  storageKey: string | null;
  modType: string | null;
  modStatus: string;
  authorId: number | null;
  trustedAuthor: boolean;
}

interface ScanRowFacts {
  id: number;
  sha256: string;
  verdict: ScanVerdict;
  raw: Record<string, unknown> | null;
}

export function verdictOf(positives: number): 'clean' | 'suspicious' | 'malicious' {
  if (positives >= MALICIOUS_THRESHOLD) return 'malicious';
  return positives > 0 ? 'suspicious' : 'clean';
}

/** Whether a verdict holds the version (see the module comment). */
export function shouldHold(verdict: ScanVerdict, trustedAuthor: boolean): boolean {
  if (verdict === 'malicious') return true;
  if (verdict === 'suspicious' || verdict === 'unknown') return !trustedAuthor;
  return false;
}

async function loadVersion(ctx: Ctx, id: number): Promise<VersionFacts | null> {
  return queryOne<VersionFacts>(
    ctx.db,
    sql`SELECT v."id", v."modId", v."version", v."sha256", v."status", v."storageKey", m."type" AS "modType",
               m."status" AS "modStatus", m."userId" AS "authorId",
               coalesce(u."verifiedCreator" OR u."role" IN ('moderator', 'admin'), false) AS "trustedAuthor"
          FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" LEFT JOIN "User" u ON u."id" = m."userId"
         WHERE v."id" = ${id}`,
  );
}

async function latestScan(ctx: Ctx, versionId: number): Promise<ScanRowFacts | null> {
  return queryOne<ScanRowFacts>(
    ctx.db,
    sql`SELECT "id", "sha256", "verdict", "raw" FROM "SecurityScan" WHERE "modVersionId" = ${versionId}
         ORDER BY "createdAt" DESC, "id" DESC LIMIT 1`,
  );
}

async function pendingRow(
  ctx: Ctx,
  version: VersionFacts,
  sha256: string,
  existing: ScanRowFacts | null,
): Promise<ScanRowFacts> {
  if (existing && existing.sha256 === sha256 && existing.verdict === 'pending') return existing;
  const row = await queryOne<ScanRowFacts>(
    ctx.db,
    sql`INSERT INTO "SecurityScan" ("modVersionId", "sha256", "engine", "verdict", "raw")
        VALUES (${version.id}, ${sha256}, 'virustotal', 'pending', '{}'::jsonb)
        RETURNING "id", "sha256", "verdict", "raw"`,
  );
  if (!row) throw new Error('SecurityScan insert returned no row');
  return row;
}

async function saveRaw(ctx: Ctx, scanId: number, raw: Record<string, unknown>): Promise<void> {
  await ctx.db.execute(sql`UPDATE "SecurityScan" SET "raw" = ${JSON.stringify(raw)}::jsonb WHERE "id" = ${scanId}`);
}

async function reschedule(
  ctx: Ctx,
  data: { modVersionId: number; sha256: string },
  at: Date,
  reason: string,
): Promise<ScanOutcome> {
  await ctx.jobs.enqueue('security.scan', data, { startAfter: at });
  ctx.log.info({ modVersionId: data.modVersionId, at: at.toISOString(), reason }, 'security scan rescheduled');
  return { status: 'rescheduled', reason, at: at.toISOString() };
}

/** Where the version's bytes are (quarantine for held files, else the public object). */
async function fileLocation(
  ctx: Ctx,
  storage: ObjectStorage,
  version: VersionFacts,
): Promise<{ bucket: string; key: string } | null> {
  const upload = await queryOne<{ bucket: string; key: string; resultRef: Record<string, unknown> | null }>(
    ctx.db,
    sql`SELECT "bucket", "key", "resultRef" FROM "Upload"
         WHERE ("resultRef"->'reserved'->>'versionId') = ${String(version.id)}
            ${version.storageKey ? sql`OR ("resultRef"->'final'->>'key') = ${version.storageKey}` : sql``}
         ORDER BY "createdAt" DESC LIMIT 1`,
  );
  const ref = (upload?.resultRef ?? {}) as { final?: { bucket?: string; key?: string }; quarantine?: { key?: string } };
  if (ref.final?.key) return { bucket: ref.final.bucket ?? storage.config.publicBucket, key: ref.final.key };
  if (upload && ref.quarantine?.key) return { bucket: upload.bucket, key: ref.quarantine.key };
  if (version.storageKey) return { bucket: storage.config.publicBucket, key: version.storageKey };
  if (upload) return { bucket: upload.bucket, key: upload.key };
  return null;
}

/** Holds an active version for review after the scan (returns true when it changed). */
async function holdVersion(ctx: Ctx, tx: Transaction, version: VersionFacts, verdict: ScanVerdict): Promise<boolean> {
  const now = ctx.clock.now();
  const held = await queryOne<{ id: number }>(
    tx,
    sql`UPDATE "ModVersion" SET "status" = 'pending', "statusReason" = ${SCAN_HOLD_REASON}, "updatedAt" = ${utcTimestamp(now)}
         WHERE "id" = ${version.id} AND "status" = 'active'
     RETURNING "id"`,
  );
  if (!held) return false;
  const kind = kindOfType(version.modType);
  await recomputeLatest(tx, version.modId, kind);
  const routing = await modRouting(tx, version.modId);
  await ctx.jobs.emitNew(
    tx,
    'version.status_changed',
    {
      modId: version.modId,
      authorId: routing.authorId,
      kind: routing.kind,
      categorySlug: routing.categorySlug,
      versionId: version.id,
      from: 'active',
      to: 'pending',
      reason: SCAN_HOLD_REASON,
    },
    { actorId: null },
  );
  if (version.authorId !== null) {
    const mod = await queryOne<{ name: string }>(tx, sql`SELECT "name" FROM "Mod" WHERE "id" = ${version.modId}`);
    await writeNotificationDrafts(
      tx,
      { jobs: ctx.jobs, clock: ctx.clock },
      [
        {
          userId: version.authorId,
          type: 'mod.status_changed',
          actorId: null,
          target: {
            type: 'mod',
            id: version.modId,
            title: mod?.name ?? '',
            path: `/basecamp/mods/${version.modId}/details`,
          },
          groupKey: null,
          data: {
            modId: version.modId,
            modName: mod?.name ?? '',
            status: 'version_held',
            versionId: version.id,
            version: version.version,
            reason: SCAN_HOLD_REASON,
            templateKey: null,
            scanVerdict: verdict,
          },
          dedupeKey: `scan-hold:${version.id}:${verdict}`,
        },
      ],
      'security-scan',
    );
  }
  await publishCacheInvalidation(tx, [`mod:${version.modId}`, 'list:mods', 'list:builds']);
  return true;
}

/** Stores a final verdict, applies the policy and emits `scan.completed`. */
async function finish(
  ctx: Ctx,
  version: VersionFacts,
  scanId: number,
  result: {
    verdict: ScanVerdict;
    positives: number | null;
    total: number | null;
    permalink: string | null;
    raw: Record<string, unknown>;
  },
): Promise<ScanOutcome> {
  const now = ctx.clock.now();
  const held = await ctx.db.transaction(async (tx) => {
    await tx.execute(
      sql`UPDATE "SecurityScan" SET "verdict" = ${result.verdict}, "positives" = ${result.positives}, "total" = ${result.total},
                 "permalink" = ${result.permalink}, "raw" = ${JSON.stringify(result.raw)}::jsonb,
                 "scannedAt" = ${now.toISOString()}::timestamptz
           WHERE "id" = ${scanId}`,
    );
    const hold =
      shouldHold(result.verdict, version.trustedAuthor) && (await holdVersion(ctx, tx, version, result.verdict));
    await ctx.jobs.emitNew(
      tx,
      'scan.completed',
      { modId: version.modId, versionId: version.id, verdict: result.verdict, positives: result.positives },
      { actorId: null },
    );
    await publishCacheInvalidation(tx, [`mod:${version.modId}`]);
    await publishLaneCounts(
      tx,
      now,
      kindOfType(version.modType) === 'build' ? ['builds'] : ['versions', 'post_review', 'new_mods'],
    );
    return hold;
  });
  ctx.log.info(
    { modVersionId: version.id, verdict: result.verdict, positives: result.positives, held },
    'security scan finished',
  );
  return { status: 'done', verdict: result.verdict, positives: result.positives, held };
}

function reportResult(sha256: string, report: FileReport, raw: Record<string, unknown>) {
  const stats = report.stats;
  if (!stats) return null;
  const positives = stats.malicious;
  const total = stats.malicious + stats.suspicious + stats.undetected + stats.harmless;
  return {
    verdict: verdictOf(positives) as ScanVerdict,
    positives,
    total,
    permalink: `https://www.virustotal.com/gui/file/${sha256}`,
    raw: {
      ...raw,
      stats,
      lastAnalysisAt: report.lastAnalysisAt?.toISOString() ?? null,
      detections: Object.fromEntries(Object.entries(report.detections).slice(0, 40)),
    },
  };
}

/** The `security.scan` job. */
export async function runSecurityScan(
  ctx: Ctx,
  deps: ScanDeps,
  data: { modVersionId: number; sha256: string },
): Promise<ScanOutcome> {
  const version = await loadVersion(ctx, data.modVersionId);
  if (!version) return { status: 'skipped', reason: 'version_missing' };
  if (kindOfType(version.modType) === 'build') return { status: 'skipped', reason: 'build' };
  if (version.status === 'rejected' || version.modStatus === 'removed')
    return { status: 'skipped', reason: 'withdrawn' };
  const sha256 = version.sha256 && /^[0-9a-f]{64}$/.test(version.sha256) ? version.sha256 : data.sha256;
  const existing = await latestScan(ctx, version.id);
  if (existing && existing.sha256 === sha256 && existing.verdict !== 'pending') {
    return { status: 'skipped', reason: `already_${existing.verdict}` };
  }
  const scan = await pendingRow(ctx, version, sha256, existing);
  const raw: Record<string, unknown> = { ...(scan.raw ?? {}) };

  if (!deps.virusTotal) {
    return finish(ctx, version, scan.id, {
      verdict: 'unknown',
      positives: null,
      total: null,
      permalink: null,
      raw: { ...raw, reason: 'no_api_key' },
    });
  }

  try {
    const report = await deps.virusTotal.lookup(sha256);
    const done = report ? reportResult(sha256, report, raw) : null;
    if (done) return finish(ctx, version, scan.id, done);

    const polls = Number(raw.polls ?? 0);
    if (report || raw.uploadedAt) {
      // Known but not analysed yet, or uploaded and waiting: poll again (bounded).
      if (polls >= MAX_POLLS) {
        return finish(ctx, version, scan.id, {
          verdict: 'unknown',
          positives: null,
          total: null,
          permalink: `https://www.virustotal.com/gui/file/${sha256}`,
          raw: { ...raw, reason: 'analysis_timeout' },
        });
      }
      await saveRaw(ctx, scan.id, { ...raw, polls: polls + 1 });
      return reschedule(ctx, data, new Date(ctx.clock.now().getTime() + POLL_INTERVAL_MS), 'analysis_pending');
    }

    // Unknown to VirusTotal: upload it.
    const storage = deps.storage;
    const location = storage ? await fileLocation(ctx, storage, version) : null;
    if (!storage || !location) {
      return finish(ctx, version, scan.id, {
        verdict: 'unknown',
        positives: null,
        total: null,
        permalink: null,
        raw: { ...raw, reason: storage ? 'file_missing' : 'no_storage' },
      });
    }
    const head = await storage.head(location.bucket, location.key);
    if (!head) {
      return finish(ctx, version, scan.id, {
        verdict: 'unknown',
        positives: null,
        total: null,
        permalink: null,
        raw: { ...raw, reason: 'file_missing' },
      });
    }
    if (head.size > VT_UPLOAD_MAX) {
      return finish(ctx, version, scan.id, {
        verdict: 'unknown',
        positives: null,
        total: null,
        permalink: null,
        raw: { ...raw, reason: 'too_large', size: head.size },
      });
    }
    const object = await storage.get(location.bucket, location.key);
    const filename = location.key.split('/').pop() ?? `${version.id}.zip`;
    const analysisId = await deps.virusTotal.upload({ body: object.body, size: head.size, filename });
    await saveRaw(ctx, scan.id, { ...raw, analysisId, uploadedAt: ctx.clock.now().toISOString(), polls: 0 });
    return reschedule(ctx, data, new Date(ctx.clock.now().getTime() + POLL_INTERVAL_MS), 'uploaded');
  } catch (error) {
    if (error instanceof QuotaExhausted) return reschedule(ctx, data, error.retryAt, 'daily_quota');
    if (error instanceof VirusTotalRateLimited) {
      return reschedule(ctx, data, new Date(ctx.clock.now().getTime() + 65_000), 'rate_limited');
    }
    if (error instanceof VirusTotalError && (error.status === 401 || error.status === 403)) {
      ctx.log.error({ status: error.status }, 'VirusTotal refused the API key');
      return finish(ctx, version, scan.id, {
        verdict: 'unknown',
        positives: null,
        total: null,
        permalink: null,
        raw: { ...raw, reason: 'api_key_refused' },
      });
    }
    throw error;
  }
}

// -----------------------------------------------------------------------------------------------
// Ranger override
// -----------------------------------------------------------------------------------------------

type ScanOverrideInput = z.output<typeof ScanOverrideBody>;

/**
 * `POST /ranger/scans/:id/override {verdict, note}`:
 * - `false_positive`: the public report says "verified false positive"; a version held only by the
 *   scan goes back to `active` (a version held for flagged files still needs an approval).
 * - `malicious`: the version is pulled (`rejected`), whatever its state.
 */
export async function overrideScan(
  ctx: Ctx,
  scanId: number,
  input: ScanOverrideInput,
): Promise<z.infer<typeof ScanOverrideResultDTO>> {
  const actor = await assertStaff(ctx, 'moderation.decide');
  const now = ctx.clock.now();
  await ctx.db.transaction(async (tx) => {
    const scan = await queryOne<{ id: number; modVersionId: number; verdict: string; positives: number | null }>(
      tx,
      sql`SELECT "id", "modVersionId", "verdict", "positives" FROM "SecurityScan" WHERE "id" = ${scanId} FOR UPDATE`,
    );
    if (!scan) throw errors.notFound('Scan');
    const version = await queryOne<{
      id: number;
      modId: number;
      status: string;
      statusReason: string | null;
      type: string | null;
    }>(
      tx,
      sql`SELECT v."id", v."modId", v."status", v."statusReason", m."type"
            FROM "ModVersion" v JOIN "Mod" m ON m."id" = v."modId" WHERE v."id" = ${scan.modVersionId} FOR UPDATE OF v`,
    );
    if (!version) throw errors.notFound('Version');
    await tx.execute(
      sql`UPDATE "SecurityScan" SET "verdict" = ${input.verdict}, "overrideById" = ${actor.userId},
                 "overrideNote" = ${input.note}, "scannedAt" = coalesce("scannedAt", ${now.toISOString()}::timestamptz)
           WHERE "id" = ${scanId}`,
    );
    const kind = kindOfType(version.type);
    let to: string | null = null;
    let reason: string | null = null;
    let condition: SQL | null = null;
    if (
      input.verdict === 'false_positive' &&
      version.status === 'pending' &&
      version.statusReason === SCAN_HOLD_REASON
    ) {
      to = 'active';
      condition = sql`"status" = 'pending'`;
    }
    if (input.verdict === 'malicious' && (version.status === 'active' || version.status === 'pending')) {
      to = 'rejected';
      reason = MALICIOUS_REASON;
      condition = sql`"status" IN ('active', 'pending')`;
    }
    if (to && condition) {
      await tx.execute(
        sql`UPDATE "ModVersion" SET "status" = ${to}, "statusReason" = ${reason}, "updatedAt" = ${utcTimestamp(now)}
             WHERE "id" = ${version.id} AND ${condition}`,
      );
      await recomputeLatest(tx, version.modId, kind);
      const routing = await modRouting(tx, version.modId);
      await ctx.jobs.emitNew(
        tx,
        'version.status_changed',
        {
          modId: version.modId,
          authorId: routing.authorId,
          kind: routing.kind,
          categorySlug: routing.categorySlug,
          versionId: version.id,
          from: version.status as 'active' | 'pending',
          to: to as 'active' | 'rejected',
          reason,
        },
        { actorId: actor.userId },
      );
    }
    await recordAudit(tx, ctx, {
      action: 'scan.override',
      targetType: 'scan',
      targetId: scanId,
      before: { verdict: scan.verdict, positives: scan.positives, versionStatus: version.status },
      after: { verdict: input.verdict, versionId: version.id, versionStatus: to ?? version.status },
      reason: input.note,
    });
    await ctx.jobs.emitNew(
      tx,
      'scan.completed',
      { modId: version.modId, versionId: version.id, verdict: input.verdict, positives: scan.positives },
      { actorId: actor.userId },
    );
    await publishCacheInvalidation(tx, [`mod:${version.modId}`, 'list:mods', 'list:builds']);
    await publishLaneCounts(tx, now, ['versions', 'post_review', 'new_mods', 'builds']);
  });
  return { scanId, verdict: input.verdict };
}

/** Versions whose scan never finished (e.g. the job was lost): for a periodic re-enqueue. */
export async function staleScans(
  ctx: Ctx,
  olderThanMs: number,
): Promise<Array<{ modVersionId: number; sha256: string }>> {
  const before = new Date(ctx.clock.now().getTime() - olderThanMs).toISOString();
  return query<{ modVersionId: number; sha256: string }>(
    ctx.db,
    sql`SELECT DISTINCT ON ("modVersionId") "modVersionId", "sha256" FROM "SecurityScan"
         WHERE "verdict" = 'pending' AND "createdAt" < ${before}::timestamptz
         ORDER BY "modVersionId", "createdAt" DESC LIMIT 100`,
  );
}
