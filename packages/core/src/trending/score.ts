/**
 * Trending score (PLAN §7.2 "Mod of the Week", §5.2 `sort=trending`), recomputed hourly by
 * `stats.trending`:
 *
 *   trendingScore = uniqueDownloads7d × clamp((d7 + 10) / (prev7 + 10), 0.5, 3)
 *
 * - `d7` / `prev7`: downloads of the last 7 UTC days (today included) and of the 7 days before;
 * - `uniqueDownloads7d`: unique downloads (one per IP, version and day) of the last 7 days. Days of
 *   a version recorded before v2 counted uniques (legacy history, B1: every channel of that
 *   version-day has `uniqueDownloads = 0` although it has downloads) contribute their raw downloads,
 *   so the ranking does not collapse to zero right after the cut-over. A version-day with at least
 *   one v2 download always has ≥ 1 unique, so v2 days are never mistaken for legacy ones.
 *
 * The +10 smoothing keeps tiny mods from exploding on a handful of downloads; the clamp bounds how
 * much momentum can multiply (×3) or penalise (×0.5) the base.
 */

import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';

export const TRENDING_SMOOTHING = 10;
export const TRENDING_MIN_FACTOR = 0.5;
export const TRENDING_MAX_FACTOR = 3;

/** The formula, for one mod (also used by the tests and by admin previews). */
export function trendingScore(unique7: number, d7: number, prev7: number): number {
  const factor = (d7 + TRENDING_SMOOTHING) / (prev7 + TRENDING_SMOOTHING);
  return Math.max(0, unique7) * Math.min(TRENDING_MAX_FACTOR, Math.max(TRENDING_MIN_FACTOR, factor));
}

export interface TrendingResult {
  today: string;
  /** Mods whose score changed. */
  updated: number;
}

/** Recomputes `Mod.trendingScore` of every mod (a v2 column: the legacy `updatedAt` is untouched). */
export async function recomputeTrending(exec: Executor, today: string): Promise<TrendingResult> {
  const result = await exec.execute(sql`
    WITH vd AS (
      SELECT v."modId", d."day",
             sum(d."downloads")::bigint AS downloads, sum(d."uniqueDownloads")::bigint AS uniq
        FROM "ModVersionDownloadDaily" d
        JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE d."day" > ${today}::date - 14 AND v."modId" IS NOT NULL
       GROUP BY v."modId", d."modVersionId", d."day"
    ), w AS (
      SELECT "modId",
             coalesce(sum(CASE WHEN uniq > 0 THEN uniq ELSE downloads END)
                        FILTER (WHERE "day" > ${today}::date - 7), 0)::float8 AS u7,
             coalesce(sum(downloads) FILTER (WHERE "day" > ${today}::date - 7), 0)::float8 AS d7,
             coalesce(sum(downloads) FILTER (WHERE "day" <= ${today}::date - 7), 0)::float8 AS p7
        FROM vd GROUP BY "modId"
    ), scores AS (
      SELECT m."id",
             coalesce(w.u7, 0) * least(${TRENDING_MAX_FACTOR}::float8,
                                   greatest(${TRENDING_MIN_FACTOR}::float8,
                                            (coalesce(w.d7, 0) + ${TRENDING_SMOOTHING}) / (coalesce(w.p7, 0) + ${TRENDING_SMOOTHING})))
               AS score
        FROM "Mod" m LEFT JOIN w ON w."modId" = m."id"
    )
    UPDATE "Mod" m SET "trendingScore" = s.score
      FROM scores s
     WHERE m."id" = s."id" AND m."trendingScore" IS DISTINCT FROM s.score`);
  return { today, updated: result.rowCount ?? 0 };
}

/** Job entry point: one transaction, then the listings and the landing drop their LRU entries. */
export async function runTrending(ctx: Ctx): Promise<TrendingResult> {
  const today = utcDay(ctx.clock.now());
  return ctx.db.transaction(async (tx) => {
    const result = await recomputeTrending(tx, today);
    if (result.updated > 0) await publishCacheInvalidation(tx, ['stats', 'list:mods', 'list:builds', 'home']);
    return result;
  });
}
