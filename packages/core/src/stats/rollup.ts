/**
 * `stats.rollup` (hourly, PLAN §2.9, §6.4 "Estadísticas y analítica").
 *
 * Every figure is **recomputed from the raw rows** of the day (never incremented), so a run is
 * idempotent and a retry, a late event or a second run only converges to the same values:
 *
 * 1. `ModStatsDaily` of the rolled-up day (and of today, so Basecamp is at most an hour behind):
 *    - downloads / unique downloads / `bySource` (channel) from `ModVersionDownloadDaily`, which the
 *      download flush keeps exact (legacy history comes from B1);
 *    - views, unique views (daily visitor hashes), `byReferrer`, `byLocale`, `byCountry` from the
 *      `page_view` events of mod and build pages in `AnalyticsEvent`;
 *    - follows (`ModFavorite.createdAt`), unfollows (`mod_unfollow` server events), comments,
 *      reviews and field reports created that day (visible only).
 *    Days older than the analytics retention keep their event-derived columns untouched: the raw
 *    events are gone, recomputing would erase history.
 * 2. `ModStats` of every mod (totals, 7/30-day windows, followers = distinct users, visible
 *    comments and reviews, rating).
 * 3. `UserStats` of every user (published mods and builds, their downloads, followers, following,
 *    reviews received and their rating, helpful votes, field reports). Tier and rank belong to the
 *    gamification (WP-60) and are left untouched.
 * 4. `SiteStat` (legacy definitions, same as B11 and the legacy `/api/stats`).
 *
 * Only rows whose values change are written. The legacy `updatedAt` columns are never touched
 * (no legacy table is written here at all).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { ANALYTICS_RETENTION_DAYS } from '../analytics/retention.ts';
import { utcDay } from '../kernel/clock.ts';
import type { Ctx } from '../kernel/context.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';

const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;

/** Days whose event-derived columns may still be recomputed (a margin before the retention). */
export const EVENT_RECOMPUTE_DAYS = ANALYTICS_RETENTION_DAYS - 5;

/** Start of the UTC hour of `date`. */
export function hourStart(date: Date): Date {
  return new Date(Math.floor(date.getTime() / HOUR_MS) * HOUR_MS);
}

/** UTC day after `day` (`YYYY-MM-DD`). */
export function nextDay(day: string): string {
  return utcDay(new Date(Date.parse(`${day}T00:00:00.000Z`) + DAY_MS));
}

/** Days recomputed by a run for `hour` at `now`: the hour's day and today (deduplicated, ascending). */
export function rollupDays(hour: Date, now: Date): string[] {
  return [...new Set([utcDay(hourStart(hour)), utcDay(now)])].sort();
}

type Row = Record<string, unknown>;

/** Recomputes `ModStatsDaily` for one UTC day. Returns the rows written. */
export async function rollupModStatsDay(exec: Executor, day: string, includeEvents: boolean): Promise<number> {
  const dayStart = `${day}T00:00:00.000Z`;
  const dayEnd = `${nextDay(day)}T00:00:00.000Z`;
  const result = await exec.execute<Row>(sql`
    WITH dl_channel AS (
      SELECT v."modId", d."channel", sum(d."downloads")::int AS n, sum(d."uniqueDownloads")::int AS u
        FROM "ModVersionDownloadDaily" d
        JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE d."day" = ${day}::date AND v."modId" IS NOT NULL
       GROUP BY 1, 2
    ), dl AS (
      SELECT "modId", sum(n)::int AS downloads, sum(u)::int AS uniq,
             jsonb_object_agg("channel", n) FILTER (WHERE n > 0) AS by_source
        FROM dl_channel GROUP BY 1
    ), ev AS (
      SELECT "entityId" AS "modId", "referrerDomain", "locale", "country", "visitorHash"
        FROM "AnalyticsEvent"
       WHERE ${includeEvents}::boolean
         AND "ts" >= ${dayStart}::timestamptz AND "ts" < ${dayEnd}::timestamptz
         AND "kind" = 'page_view' AND "entityType" IN ('mod', 'build') AND "entityId" IS NOT NULL
    ), views AS (
      SELECT "modId", count(*)::int AS views, count(DISTINCT "visitorHash")::int AS uniq FROM ev GROUP BY 1
    ), ref AS (
      SELECT "modId", jsonb_object_agg(k, n) AS m
        FROM (SELECT "modId", coalesce("referrerDomain", 'direct') AS k, count(*)::int AS n FROM ev GROUP BY 1, 2) x
       GROUP BY 1
    ), loc AS (
      SELECT "modId", jsonb_object_agg(k, n) AS m
        FROM (SELECT "modId", "locale" AS k, count(*)::int AS n FROM ev WHERE "locale" IS NOT NULL GROUP BY 1, 2) x
       GROUP BY 1
    ), ctry AS (
      SELECT "modId", jsonb_object_agg(k, n) AS m
        FROM (SELECT "modId", "country" AS k, count(*)::int AS n FROM ev WHERE "country" IS NOT NULL GROUP BY 1, 2) x
       GROUP BY 1
    ), unf AS (
      SELECT "entityId" AS "modId", count(*)::int AS n
        FROM "AnalyticsEvent"
       WHERE ${includeEvents}::boolean
         AND "ts" >= ${dayStart}::timestamptz AND "ts" < ${dayEnd}::timestamptz
         AND "kind" = 'mod_unfollow' AND "entityType" = 'mod' AND "entityId" IS NOT NULL
       GROUP BY 1
    ), fol AS (
      SELECT "modId", count(*)::int AS n FROM "ModFavorite"
       WHERE "modId" IS NOT NULL
         AND "createdAt" >= ${day}::date::timestamp AND "createdAt" < (${day}::date + 1)::timestamp
       GROUP BY 1
    ), com AS (
      SELECT "modId", count(*)::int AS n FROM "Comment"
       WHERE "status" = 'visible'
         AND "createdAt" >= ${day}::date::timestamp AND "createdAt" < (${day}::date + 1)::timestamp
       GROUP BY 1
    ), rev AS (
      SELECT "modId", count(*)::int AS n FROM "ModReview"
       WHERE "status" = 'visible' AND "modId" IS NOT NULL
         AND "createdAt" >= ${day}::date::timestamp AND "createdAt" < (${day}::date + 1)::timestamp
       GROUP BY 1
    ), cr AS (
      SELECT v."modId", count(*)::int AS n FROM "CompatReport" r
        JOIN "ModVersion" v ON v."id" = r."modVersionId"
       WHERE r."status" = 'visible' AND v."modId" IS NOT NULL
         AND r."createdAt" >= ${dayStart}::timestamptz AND r."createdAt" < ${dayEnd}::timestamptz
       GROUP BY 1
    ), keys AS (
      SELECT "modId" FROM dl UNION SELECT "modId" FROM views UNION SELECT "modId" FROM unf
      UNION SELECT "modId" FROM fol UNION SELECT "modId" FROM com UNION SELECT "modId" FROM rev
      UNION SELECT "modId" FROM cr
      UNION SELECT "modId" FROM "ModStatsDaily" WHERE "day" = ${day}::date
    ), computed AS (
      SELECT k."modId",
             coalesce(views.views, 0) AS views, coalesce(views.uniq, 0) AS uniq_views,
             coalesce(dl.downloads, 0) AS downloads, coalesce(dl.uniq, 0) AS uniq_downloads,
             coalesce(fol.n, 0) AS follows, coalesce(unf.n, 0) AS unfollows,
             coalesce(com.n, 0) AS comments, coalesce(rev.n, 0) AS reviews, coalesce(cr.n, 0) AS compat,
             coalesce(dl.by_source, '{}'::jsonb) AS by_source, coalesce(ref.m, '{}'::jsonb) AS by_referrer,
             coalesce(ctry.m, '{}'::jsonb) AS by_country, coalesce(loc.m, '{}'::jsonb) AS by_locale
        FROM keys k
        JOIN "Mod" m ON m."id" = k."modId"
        LEFT JOIN dl ON dl."modId" = k."modId" LEFT JOIN views ON views."modId" = k."modId"
        LEFT JOIN unf ON unf."modId" = k."modId" LEFT JOIN fol ON fol."modId" = k."modId"
        LEFT JOIN com ON com."modId" = k."modId" LEFT JOIN rev ON rev."modId" = k."modId"
        LEFT JOIN cr ON cr."modId" = k."modId" LEFT JOIN ref ON ref."modId" = k."modId"
        LEFT JOIN loc ON loc."modId" = k."modId" LEFT JOIN ctry ON ctry."modId" = k."modId"
    )
    INSERT INTO "ModStatsDaily" AS s ("modId", "day", "views", "uniqueViews", "downloads", "uniqueDownloads",
                                     "follows", "unfollows", "comments", "reviews", "compatReports",
                                     "bySource", "byReferrer", "byCountry", "byLocale")
    SELECT "modId", ${day}::date, views, uniq_views, downloads, uniq_downloads, follows, unfollows, comments,
           reviews, compat, by_source, by_referrer, by_country, by_locale
      FROM computed
    ON CONFLICT ("modId", "day") DO UPDATE SET
      "views" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."views" ELSE s."views" END,
      "uniqueViews" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."uniqueViews" ELSE s."uniqueViews" END,
      "byReferrer" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."byReferrer" ELSE s."byReferrer" END,
      "byCountry" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."byCountry" ELSE s."byCountry" END,
      "byLocale" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."byLocale" ELSE s."byLocale" END,
      "unfollows" = CASE WHEN ${includeEvents}::boolean THEN EXCLUDED."unfollows" ELSE s."unfollows" END,
      "downloads" = EXCLUDED."downloads", "uniqueDownloads" = EXCLUDED."uniqueDownloads",
      "follows" = EXCLUDED."follows", "comments" = EXCLUDED."comments", "reviews" = EXCLUDED."reviews",
      "compatReports" = EXCLUDED."compatReports", "bySource" = EXCLUDED."bySource"
    WHERE (s."downloads", s."uniqueDownloads", s."follows", s."comments", s."reviews", s."compatReports", s."bySource")
          IS DISTINCT FROM
          (EXCLUDED."downloads", EXCLUDED."uniqueDownloads", EXCLUDED."follows", EXCLUDED."comments",
           EXCLUDED."reviews", EXCLUDED."compatReports", EXCLUDED."bySource")
       OR (${includeEvents}::boolean AND
           (s."views", s."uniqueViews", s."unfollows", s."byReferrer", s."byCountry", s."byLocale")
           IS DISTINCT FROM
           (EXCLUDED."views", EXCLUDED."uniqueViews", EXCLUDED."unfollows", EXCLUDED."byReferrer",
            EXCLUDED."byCountry", EXCLUDED."byLocale"))`);
  return result.rowCount ?? 0;
}

/** Recomputes `ModStats` for every mod (windows end on `today`, included). */
export async function refreshModStats(exec: Executor, today: string): Promise<number> {
  const result = await exec.execute(sql`
    WITH dl AS (
      SELECT v."modId",
             sum(d."downloads")::bigint AS total,
             coalesce(sum(d."downloads") FILTER (WHERE d."day" > ${today}::date - 7), 0)::int AS d7,
             coalesce(sum(d."downloads") FILTER (WHERE d."day" > ${today}::date - 30), 0)::int AS d30,
             sum(d."uniqueDownloads")::bigint AS uniq
        FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE v."modId" IS NOT NULL GROUP BY v."modId"
    ), views AS (
      SELECT "modId",
             coalesce(sum("views") FILTER (WHERE "day" > ${today}::date - 7), 0)::int AS v7,
             coalesce(sum("views") FILTER (WHERE "day" > ${today}::date - 30), 0)::int AS v30
        FROM "ModStatsDaily" WHERE "day" > ${today}::date - 30 GROUP BY "modId"
    ), fol AS (
      SELECT "modId", count(DISTINCT "userId")::int AS n FROM "ModFavorite"
       WHERE "modId" IS NOT NULL AND "userId" IS NOT NULL GROUP BY "modId"
    ), com AS (
      SELECT "modId", count(*)::int AS n FROM "Comment" WHERE "status" = 'visible' GROUP BY "modId"
    ), rev AS (
      SELECT "modId", count(*)::int AS n, avg("rating")::real AS avg FROM "ModReview"
       WHERE "status" = 'visible' AND "modId" IS NOT NULL GROUP BY "modId"
    ), computed AS (
      SELECT m."id" AS "modId",
             coalesce(dl.total, 0) AS total, coalesce(dl.d7, 0) AS d7, coalesce(dl.d30, 0) AS d30,
             coalesce(dl.uniq, 0) AS uniq, coalesce(views.v7, 0) AS v7, coalesce(views.v30, 0) AS v30,
             coalesce(fol.n, 0) AS followers, coalesce(com.n, 0) AS comments, coalesce(rev.n, 0) AS reviews, rev.avg
        FROM "Mod" m
        LEFT JOIN dl ON dl."modId" = m."id" LEFT JOIN views ON views."modId" = m."id"
        LEFT JOIN fol ON fol."modId" = m."id" LEFT JOIN com ON com."modId" = m."id" LEFT JOIN rev ON rev."modId" = m."id"
    )
    INSERT INTO "ModStats" AS s ("modId", "downloadsTotal", "downloads7d", "downloads30d", "uniqueDownloadsTotal",
                                 "views7d", "views30d", "followers", "commentsVisible", "reviewsVisible", "ratingAvg", "updatedAt")
    SELECT "modId", total, d7, d30, uniq, v7, v30, followers, comments, reviews, avg, now() FROM computed
    ON CONFLICT ("modId") DO UPDATE SET
      "downloadsTotal" = EXCLUDED."downloadsTotal", "downloads7d" = EXCLUDED."downloads7d",
      "downloads30d" = EXCLUDED."downloads30d", "uniqueDownloadsTotal" = EXCLUDED."uniqueDownloadsTotal",
      "views7d" = EXCLUDED."views7d", "views30d" = EXCLUDED."views30d", "followers" = EXCLUDED."followers",
      "commentsVisible" = EXCLUDED."commentsVisible", "reviewsVisible" = EXCLUDED."reviewsVisible",
      "ratingAvg" = EXCLUDED."ratingAvg", "updatedAt" = now()
    WHERE (s."downloadsTotal", s."downloads7d", s."downloads30d", s."uniqueDownloadsTotal", s."views7d", s."views30d",
           s."followers", s."commentsVisible", s."reviewsVisible", s."ratingAvg")
      IS DISTINCT FROM
          (EXCLUDED."downloadsTotal", EXCLUDED."downloads7d", EXCLUDED."downloads30d", EXCLUDED."uniqueDownloadsTotal",
           EXCLUDED."views7d", EXCLUDED."views30d", EXCLUDED."followers", EXCLUDED."commentsVisible",
           EXCLUDED."reviewsVisible", EXCLUDED."ratingAvg")`);
  return result.rowCount ?? 0;
}

/** Recomputes `UserStats` for every user (tier and rank untouched). */
export async function refreshUserStats(exec: Executor): Promise<number> {
  const result = await exec.execute(sql`
    WITH dl AS (
      SELECT v."modId", sum(d."downloads")::bigint AS total
        FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
       WHERE v."modId" IS NOT NULL GROUP BY v."modId"
    ), owned AS (
      SELECT m."userId",
             count(*) FILTER (WHERE m."status" = 'published' AND coalesce(m."type", 'Mod') <> 'Build')::int AS mods,
             count(*) FILTER (WHERE m."status" = 'published' AND m."type" = 'Build')::int AS builds,
             coalesce(sum(dl.total), 0)::bigint AS downloads
        FROM "Mod" m LEFT JOIN dl ON dl."modId" = m."id"
       WHERE m."userId" IS NOT NULL GROUP BY m."userId"
    ), rating AS (
      SELECT m."userId", avg(r."rating")::real AS avg, count(*)::int AS n
        FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
       WHERE r."status" = 'visible' AND m."userId" IS NOT NULL GROUP BY m."userId"
    ), followers AS (
      SELECT "followeeId" AS "userId", count(*)::int AS n FROM "UserFollow" GROUP BY 1
    ), following AS (
      SELECT "followerId" AS "userId", count(*)::int AS n FROM "UserFollow" GROUP BY 1
    ), helpful AS (
      SELECT r."userId", count(*)::int AS n FROM "ReviewVote" v JOIN "ModReview" r ON r."id" = v."reviewId"
       WHERE v."value" = 1 AND r."userId" IS NOT NULL GROUP BY r."userId"
    ), compat AS (
      SELECT "userId", count(*)::int AS n FROM "CompatReport" WHERE "status" = 'visible' GROUP BY "userId"
    ), computed AS (
      SELECT u."id" AS "userId", coalesce(owned.mods, 0) AS mods, coalesce(owned.builds, 0) AS builds,
             coalesce(owned.downloads, 0) AS downloads, coalesce(followers.n, 0) AS followers,
             coalesce(following.n, 0) AS following, rating.avg, coalesce(rating.n, 0) AS reviews,
             coalesce(helpful.n, 0) AS helpful, coalesce(compat.n, 0) AS compat
        FROM "User" u
        LEFT JOIN owned ON owned."userId" = u."id" LEFT JOIN rating ON rating."userId" = u."id"
        LEFT JOIN followers ON followers."userId" = u."id" LEFT JOIN following ON following."userId" = u."id"
        LEFT JOIN helpful ON helpful."userId" = u."id" LEFT JOIN compat ON compat."userId" = u."id"
    )
    INSERT INTO "UserStats" AS s ("userId", "modsCount", "buildsCount", "downloadsTotal", "followersCount", "followingCount",
                                  "ratingAvg", "reviewsCount", "helpfulVotes", "compatReportsCount", "updatedAt")
    SELECT "userId", mods, builds, downloads, followers, following, avg, reviews, helpful, compat, now() FROM computed
    ON CONFLICT ("userId") DO UPDATE SET
      "modsCount" = EXCLUDED."modsCount", "buildsCount" = EXCLUDED."buildsCount", "downloadsTotal" = EXCLUDED."downloadsTotal",
      "followersCount" = EXCLUDED."followersCount", "followingCount" = EXCLUDED."followingCount",
      "ratingAvg" = EXCLUDED."ratingAvg", "reviewsCount" = EXCLUDED."reviewsCount",
      "helpfulVotes" = EXCLUDED."helpfulVotes", "compatReportsCount" = EXCLUDED."compatReportsCount", "updatedAt" = now()
    WHERE (s."modsCount", s."buildsCount", s."downloadsTotal", s."followersCount", s."followingCount", s."ratingAvg",
           s."reviewsCount", s."helpfulVotes", s."compatReportsCount")
      IS DISTINCT FROM
          (EXCLUDED."modsCount", EXCLUDED."buildsCount", EXCLUDED."downloadsTotal", EXCLUDED."followersCount",
           EXCLUDED."followingCount", EXCLUDED."ratingAvg", EXCLUDED."reviewsCount", EXCLUDED."helpfulVotes",
           EXCLUDED."compatReportsCount")`);
  return result.rowCount ?? 0;
}

/** Recomputes the `SiteStat` keys (legacy definitions; downloads include the orphan rows). */
export async function refreshSiteStats(exec: Executor): Promise<number> {
  const result = await exec.execute(sql`
    WITH v AS (
      SELECT coalesce(sum(d."downloads"), 0)::bigint AS all_versions,
             coalesce(sum(d."downloads") FILTER (WHERE m."type" = 'Build'), 0)::bigint AS builds
        FROM "ModVersionDownloadDaily" d JOIN "ModVersion" mv ON mv."id" = d."modVersionId"
        LEFT JOIN "Mod" m ON m."id" = mv."modId"
    ), o AS (
      SELECT coalesce(sum("downloads"), 0)::bigint AS orphans FROM "SiteDownloadDaily"
    ), stats(key, value) AS (
      VALUES
        ('users', (SELECT count(*) FROM "User")),
        ('mods', (SELECT count(*) FROM "Mod")),
        ('downloads', (SELECT all_versions FROM v) + (SELECT orphans FROM o)),
        ('developers', (SELECT count(DISTINCT "userId") FROM "Mod" WHERE "isApproved" AND "type" = 'Mod' AND "userId" IS NOT NULL)),
        ('builds', (SELECT count(*) FROM "Mod" WHERE "type" = 'Build')),
        ('buildDownloads', (SELECT builds FROM v)),
        ('buildDevelopers', (SELECT count(DISTINCT "userId") FROM "Mod" WHERE "isApproved" AND "type" = 'Build' AND "userId" IS NOT NULL)),
        ('orphanDownloads', (SELECT orphans FROM o))
    )
    INSERT INTO "SiteStat" AS s ("key", "value", "updatedAt")
    SELECT key, value, now() FROM stats
    ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value", "updatedAt" = now()
    WHERE s."value" IS DISTINCT FROM EXCLUDED."value"`);
  return result.rowCount ?? 0;
}

export interface RollupResult {
  hour: string;
  days: Array<{ day: string; rows: number; events: boolean }>;
  modStats: number;
  userStats: number;
  siteStats: number;
}

/**
 * Runs the whole rollup for `hour` (default: the previous full hour) in one transaction, then
 * evicts the `stats` tag from the API LRUs.
 */
export async function runStatsRollup(ctx: Ctx, hour?: Date): Promise<RollupResult> {
  const now = ctx.clock.now();
  const target = hourStart(hour ?? new Date(now.getTime() - HOUR_MS));
  if (target.getTime() > now.getTime()) throw new RangeError(`cannot roll up a future hour (${target.toISOString()})`);
  const today = utcDay(now);
  const oldestWithEvents = utcDay(new Date(now.getTime() - EVENT_RECOMPUTE_DAYS * DAY_MS));
  const result: RollupResult = {
    hour: target.toISOString(),
    days: [],
    modStats: 0,
    userStats: 0,
    siteStats: 0,
  };
  await ctx.db.transaction(async (tx) => {
    for (const day of rollupDays(target, now)) {
      const events = day >= oldestWithEvents;
      result.days.push({ day, rows: await rollupModStatsDay(tx, day, events), events });
    }
    result.modStats = await refreshModStats(tx, today);
    result.userStats = await refreshUserStats(tx);
    result.siteStats = await refreshSiteStats(tx);
    await publishCacheInvalidation(tx, ['stats']);
  });
  return result;
}
