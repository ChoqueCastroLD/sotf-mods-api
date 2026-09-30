/**
 * `compat.reconcile` (nightly, after `accounts.trust-level`; backlog WP-50): report weights depend on
 * the reporter's current flags (`trustLevel`, `verifiedCreator`) and reports of banned or deleted
 * accounts stop counting, but those changes emit no event, so the aggregates would only notice
 * them on the next report of each version. This sweep recomputes every stored aggregate in memory
 * with the pure rules, enqueues `compat.aggregate` for the versions that drifted (the job rewrites
 * the rows, the weights and emits the usual events) and refreshes `Mod.compatStatus` /
 * `Mod.possiblyOutdated` of every mod (the current or breaking build may also have moved).
 *
 * Read-only apart from the enqueues and the mod-level refresh; running it twice enqueues nothing
 * the second time once the aggregates caught up.
 */
import { withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { query } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { modTags, refreshModsCompat } from './aggregate.ts';
import { type AggregateReport, aggregateReports, reporterWeight } from './rules.ts';

export interface ReconcileResult {
  /** Version × build aggregates compared. */
  checked: number;
  /** Versions whose aggregate drifted (a `compat.aggregate` job was enqueued for each). */
  drifted: number[];
  /** Mods whose denormalised compat status changed. */
  modsChanged: number;
}

interface ReportFact {
  modVersionId: number;
  gameBuildId: number;
  userId: number;
  result: AggregateReport['result'];
  weight: number;
  verifiedCreator: boolean;
  trustLevel: number;
  gone: boolean;
  authorId: number | null;
}

interface StoredAggregate {
  modVersionId: number;
  gameBuildId: number;
  works: number;
  partial: number;
  broken: number;
  weightedScore: number | null;
  computedStatus: string;
  authorTested: boolean;
  authorId: number | null;
}

const key = (versionId: number, buildId: number) => `${versionId}:${buildId}`;
const close = (a: number | null, b: number | null) =>
  a === null || b === null ? a === b : Math.abs(Number(a) - Number(b)) < 1e-3;

/** Versions whose stored aggregate or report weights differ from the current rules. */
export async function driftedVersions(ctx: Ctx): Promise<{ checked: number; versions: number[] }> {
  const [reports, stored] = await Promise.all([
    query<ReportFact>(
      ctx.db,
      sql`SELECT r."modVersionId", r."gameBuildId", r."userId", r."result", r."weight",
                 u."verifiedCreator", u."trustLevel",
                 (u."deletedAt" IS NOT NULL OR u."bannedAt" IS NOT NULL) AS "gone",
                 m."userId" AS "authorId"
            FROM "CompatReport" r
            JOIN "User" u ON u."id" = r."userId"
            JOIN "ModVersion" v ON v."id" = r."modVersionId"
            LEFT JOIN "Mod" m ON m."id" = v."modId"
           WHERE r."status" = 'visible'`,
    ),
    query<StoredAggregate>(
      ctx.db,
      sql`SELECT c."modVersionId", c."gameBuildId", c."works", c."partial", c."broken", c."weightedScore",
                 c."computedStatus", c."authorTested", m."userId" AS "authorId"
            FROM "ModVersionCompat" c
            JOIN "ModVersion" v ON v."id" = c."modVersionId"
            LEFT JOIN "Mod" m ON m."id" = v."modId"`,
    ),
  ]);

  const drifted = new Set<number>();
  const byPair = new Map<string, { reports: AggregateReport[]; authorId: number | null }>();
  for (const r of reports) {
    const versionId = Number(r.modVersionId);
    const pair = key(versionId, Number(r.gameBuildId));
    const entry = byPair.get(pair) ?? { reports: [], authorId: r.authorId === null ? null : Number(r.authorId) };
    byPair.set(pair, entry);
    if (r.gone) continue;
    const weight = reporterWeight({
      isModAuthor: entry.authorId !== null && Number(r.userId) === entry.authorId,
      verifiedCreator: r.verifiedCreator === true,
      trustLevel: Number(r.trustLevel) || 0,
    });
    if (!close(Number(r.weight), weight)) drifted.add(versionId);
    entry.reports.push({ userId: Number(r.userId), result: r.result, weight });
  }

  const seen = new Set<string>();
  for (const row of stored) {
    const versionId = Number(row.modVersionId);
    const pair = key(versionId, Number(row.gameBuildId));
    seen.add(pair);
    const agg = aggregateReports({
      reports: byPair.get(pair)?.reports ?? [],
      authorTested: row.authorTested === true,
      authorId: row.authorId === null ? null : Number(row.authorId),
    });
    const same =
      agg.works === Number(row.works) &&
      agg.partial === Number(row.partial) &&
      agg.broken === Number(row.broken) &&
      agg.status === row.computedStatus &&
      close(agg.weightedScore, row.weightedScore === null ? null : Number(row.weightedScore));
    if (!same) drifted.add(versionId);
  }
  // Reports on a build the version has no aggregate for yet (a lost job).
  for (const [pair, entry] of byPair) {
    if (!seen.has(pair) && entry.reports.length > 0) drifted.add(Number(pair.split(':')[0]));
  }
  return { checked: stored.length, versions: [...drifted].sort((a, b) => a - b) };
}

/** The `compat.reconcile` job. */
export async function reconcileCompat(ctx: Ctx): Promise<ReconcileResult> {
  const { checked, versions } = await driftedVersions(ctx);
  for (const modVersionId of versions) await ctx.jobs.enqueue('compat.aggregate', { modVersionId });
  const changed = await withTx(ctx.db, async (tx) => {
    const mods = await refreshModsCompat(tx, ctx.clock.now(), 'all');
    if (mods.length > 0) await purge(ctx.jobs, modTags(mods), 'compat reconcile', { tx });
    return mods;
  });
  if (versions.length > 0 || changed.length > 0) {
    ctx.log.info({ checked, drifted: versions.length, modsChanged: changed.length }, 'compat aggregates reconciled');
  }
  return { checked, drifted: versions, modsChanged: changed.length };
}
