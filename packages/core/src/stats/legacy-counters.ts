/**
 * `legacy.counters` (every 30 min, only after the cut-over: PLAN §2.9, §6.8 "Contadores").
 *
 * Replaces the legacy Elysia crons (`sotf-mods-api/src/api/mods/cron.ts`) with **the same
 * formulas**, so the legacy columns the old clients read keep the same values:
 *
 * | Column                   | Legacy formula                                                        |
 * |--------------------------|-----------------------------------------------------------------------|
 * | `Mod.downloads`          | count of `ModDownload` rows of the mod's versions                     |
 * | `Mod.lastWeekDownloads`  | same, `createdAt` > now − 7 days                                      |
 * | `Mod.favoritesCount`     | count of `ModFavorite` rows of the mod                                |
 * | `Mod.commentsCount`      | count of `Comment` rows of the mod (any status, like the legacy)      |
 *
 * Differences with the legacy, on purpose: one set-based `UPDATE` instead of one query per mod,
 * only rows whose values change are written, and **`updatedAt` is never touched** (Prisma's
 * `@updatedAt` bumped it every 30 minutes; v2 does not use it as a signal, §6.8).
 *
 * `ModDownload.createdAt` is a `timestamp(3)` holding UTC wall time: the cutoff is converted
 * explicitly, independent of the session time zone. A download flushed while the statement runs
 * is counted by the next run (the legacy cron had the same window).
 */

import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';

const WEEK_MS = 7 * 86_400_000;

export interface LegacyCountersResult {
  /** Mods whose legacy counters changed. */
  updated: number;
  weekCutoff: string;
}

/** Recomputes the legacy counters of every mod as of `now`. */
export async function recomputeLegacyCounters(exec: Executor, now: Date): Promise<LegacyCountersResult> {
  const weekCutoff = new Date(now.getTime() - WEEK_MS).toISOString();
  const result = await exec.execute(sql`
    WITH dl AS (
      SELECT v."modId", count(*)::int AS total,
             count(*) FILTER (WHERE d."createdAt" > (${weekCutoff}::timestamptz AT TIME ZONE 'UTC'))::int AS week
        FROM "ModDownload" d
        JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE v."modId" IS NOT NULL
       GROUP BY v."modId"
    ), fav AS (
      SELECT "modId", count(*)::int AS n FROM "ModFavorite" WHERE "modId" IS NOT NULL GROUP BY "modId"
    ), com AS (
      SELECT "modId", count(*)::int AS n FROM "Comment" GROUP BY "modId"
    ), computed AS (
      SELECT m."id", coalesce(dl.total, 0) AS downloads, coalesce(dl.week, 0) AS week,
             coalesce(fav.n, 0) AS favorites, coalesce(com.n, 0) AS comments
        FROM "Mod" m
        LEFT JOIN dl ON dl."modId" = m."id"
        LEFT JOIN fav ON fav."modId" = m."id"
        LEFT JOIN com ON com."modId" = m."id"
    )
    UPDATE "Mod" m
       SET "downloads" = c.downloads, "lastWeekDownloads" = c.week,
           "favoritesCount" = c.favorites, "commentsCount" = c.comments
      FROM computed c
     WHERE m."id" = c."id"
       AND (m."downloads", m."lastWeekDownloads", m."favoritesCount", m."commentsCount")
           IS DISTINCT FROM (c.downloads, c.week, c.favorites, c.comments)`);
  return { updated: result.rowCount ?? 0, weekCutoff };
}

/** Job entry point: recompute in one transaction and evict the `stats` tag when something moved. */
export async function runLegacyCounters(ctx: Ctx): Promise<LegacyCountersResult> {
  return ctx.db.transaction(async (tx) => {
    const result = await recomputeLegacyCounters(tx, ctx.clock.now());
    if (result.updated > 0) await publishCacheInvalidation(tx, ['stats']);
    return result;
  });
}
