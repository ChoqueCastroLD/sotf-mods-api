/**
 * Shared pieces of the moderation services: deployment deps, row helpers, risk scoring of queue
 * items, inspection/scan loaders and the author history block of the item view.
 */
import { InspectionFlagDTO } from '@sotf/contracts/manifest';
import type { ModerationLane, QueueItemDetailDTO } from '@sotf/contracts/moderation';
import type { ScanSummaryDTO } from '@sotf/contracts/versions';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import type { CatalogConfig } from '../catalog/media.ts';
import { intArray, query, queryOne, toDate, toInt } from '../follows/sql.ts';
import type { ObjectStorage } from '../storage/client.ts';

/** What the moderation services need from the deployment. */
export interface ModerationDeps {
  /** Public media origin (avatars, thumbnails, gallery). */
  config: CatalogConfig;
  /** R2, to publish held files on approval (null → approving a held file answers 503). */
  storage: ObjectStorage | null;
}

export type Risk = 'low' | 'medium' | 'high';
export const RISK_RANK: Record<Risk, number> = { high: 2, medium: 1, low: 0 };

export type InspectionFlag = z.infer<typeof InspectionFlagDTO>;
export type ScanSummary = z.infer<typeof ScanSummaryDTO>;
export type AuthorHistory = z.infer<typeof QueueItemDetailDTO>['authorHistory'];

/** Days a version stays in the post-review lanes when nobody reviews it (the SLA is 72 h). */
export const POST_REVIEW_WINDOW_DAYS = 30;

/** Audit actions that take a version out of the post-review lanes. */
export const POST_REVIEW_DONE_ACTIONS = [
  'version.post_review_approve',
  'version.approve',
  'version.reject',
  'version.remove',
] as const;

export const LANES: readonly ModerationLane[] = [
  'new_mods',
  'versions',
  'post_review',
  'reports',
  'comments',
  'builds',
];

/** Valid flags of a stored `VersionInspection.flags` array. */
export function flagsOf(value: unknown): InspectionFlag[] {
  if (!Array.isArray(value)) return [];
  const out: InspectionFlag[] = [];
  for (const item of value) {
    const parsed = InspectionFlagDTO.safeParse(item);
    if (parsed.success) out.push(parsed.data);
  }
  return out;
}

export interface RiskFacts {
  flags: readonly InspectionFlag[];
  checksStatus: string | null;
  scanVerdict: string | null;
  scanPositives: number | null;
  verifiedAuthor: boolean;
}

/**
 * Risk of a mod or version in the queue (PLAN §7.4 "ordenados por antigüedad y riesgo"):
 * - high: ≥ 3 detections, a malicious verdict, a failed check or a flagged executable;
 * - medium: 1–2 detections, a suspicious verdict, any other flag, or an author who is not a
 *   verified creator and whose file was not scanned yet (no VirusTotal key, or pending);
 * - low: otherwise.
 */
export function riskOf(facts: RiskFacts): Risk {
  const positives = facts.scanPositives ?? 0;
  if (facts.scanVerdict === 'malicious' || positives >= 3 || facts.checksStatus === 'failed') return 'high';
  if (facts.flags.some((f) => f.code === 'extension_flagged' || f.severity === 'error')) return 'high';
  if (facts.scanVerdict === 'suspicious' || positives > 0 || facts.flags.length > 0) return 'medium';
  const unscanned = facts.scanVerdict === null || facts.scanVerdict === 'pending' || facts.scanVerdict === 'unknown';
  if (unscanned && !facts.verifiedAuthor) return 'medium';
  return 'low';
}

/** Risk of a user report by its reason and how many open reports the target has. */
export function reportRisk(reason: string, openOnTarget: number): Risk {
  if (reason === 'malware' || reason === 'illegal' || openOnTarget >= 3) return 'high';
  if (reason === 'harassment' || reason === 'nsfw_unmarked' || reason === 'reupload' || openOnTarget >= 2) {
    return 'medium';
  }
  return 'low';
}

// -----------------------------------------------------------------------------------------------
// Scans
// -----------------------------------------------------------------------------------------------

export interface ScanRow {
  id: number;
  modVersionId: number;
  verdict: string;
  engine: string;
  positives: number | null;
  total: number | null;
  permalink: string | null;
  scannedAt: Date | string | null;
}

const SCAN_VERDICTS = new Set(['pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive']);

/** Latest scan of each version. */
export async function latestScans(exec: Executor, versionIds: readonly number[]): Promise<Map<number, ScanRow>> {
  if (versionIds.length === 0) return new Map();
  const list = await query<ScanRow>(
    exec,
    sql`SELECT DISTINCT ON ("modVersionId") "id", "modVersionId", "verdict", "engine", "positives", "total", "permalink", "scannedAt"
          FROM "SecurityScan" WHERE "modVersionId" = ANY(${intArray(versionIds)})
         ORDER BY "modVersionId", "createdAt" DESC, "id" DESC`,
  );
  return new Map(list.map((r) => [r.modVersionId, r]));
}

export function scanSummary(row: ScanRow | undefined | null): ScanSummary | null {
  if (!row || !SCAN_VERDICTS.has(row.verdict)) return null;
  return {
    verdict: row.verdict as ScanSummary['verdict'],
    engine: row.engine,
    positives: row.positives,
    total: row.total,
    permalink: row.permalink,
    scannedAt: toDate(row.scannedAt)?.toISOString() ?? null,
  };
}

/** Inspection flags and status of each version. */
export async function inspectionFacts(
  exec: Executor,
  versionIds: readonly number[],
): Promise<Map<number, { status: string; flags: InspectionFlag[] }>> {
  if (versionIds.length === 0) return new Map();
  const list = await query<{ modVersionId: number; status: string; flags: unknown }>(
    exec,
    sql`SELECT "modVersionId", "status", "flags" FROM "VersionInspection" WHERE "modVersionId" = ANY(${intArray(versionIds)})`,
  );
  return new Map(list.map((r) => [r.modVersionId, { status: r.status, flags: flagsOf(r.flags) }]));
}

// -----------------------------------------------------------------------------------------------
// Authors
// -----------------------------------------------------------------------------------------------

/** The "author history" block of the item view. */
export async function authorHistory(exec: Executor, userId: number | null, now: Date): Promise<AuthorHistory> {
  if (userId === null) {
    return { accountAgeDays: 0, modsPublished: 0, modsRejected: 0, activeSanctions: 0, trustLevel: 0 };
  }
  const row = await queryOne<{
    createdAt: Date | string;
    trustLevel: number;
    published: number;
    rejected: number;
    sanctions: number;
  }>(
    exec,
    sql`SELECT u."createdAt", u."trustLevel",
               (SELECT count(*)::int FROM "Mod" m WHERE m."userId" = u."id" AND m."status" IN ('published', 'unlisted', 'archived')) AS "published",
               (SELECT count(*)::int FROM "Mod" m WHERE m."userId" = u."id" AND m."status" IN ('rejected', 'removed')) AS "rejected",
               (SELECT count(*)::int FROM "UserSanction" s
                 WHERE s."userId" = u."id" AND s."revokedAt" IS NULL
                   AND (s."endsAt" IS NULL OR s."endsAt" > ${now.toISOString()}::timestamptz)) AS "sanctions"
          FROM "User" u WHERE u."id" = ${userId}`,
  );
  if (!row) return { accountAgeDays: 0, modsPublished: 0, modsRejected: 0, activeSanctions: 0, trustLevel: 0 };
  const created = toDate(row.createdAt) ?? now;
  return {
    accountAgeDays: Math.max(0, Math.floor((now.getTime() - created.getTime()) / 86_400_000)),
    modsPublished: toInt(row.published),
    modsRejected: toInt(row.rejected),
    activeSanctions: toInt(row.sanctions),
    trustLevel: Math.min(3, Math.max(0, toInt(row.trustLevel))),
  };
}

/** Verified-creator flag of each user. */
export async function verifiedAuthors(exec: Executor, userIds: readonly number[]): Promise<Set<number>> {
  if (userIds.length === 0) return new Set();
  const list = await query<{ id: number }>(
    exec,
    sql`SELECT "id" FROM "User" WHERE "id" = ANY(${intArray(userIds)}) AND ("verifiedCreator" OR "role" IN ('moderator', 'admin'))`,
  );
  return new Set(list.map((r) => r.id));
}

/** Kind of a mod from the legacy `type`. */
export function kindOfType(type: string | null): 'mod' | 'library' | 'build' {
  return type === 'Build' ? 'build' : type === 'Library' ? 'library' : 'mod';
}

/** A timestamp for a legacy `timestamp(3)` column (stored as UTC wall time). */
export function utcTimestamp(date: Date) {
  return sql`(${date.toISOString()}::timestamptz AT TIME ZONE 'UTC')`;
}

/** A `timestamptz` parameter. */
export function tstz(date: Date) {
  return sql`${date.toISOString()}::timestamptz`;
}
