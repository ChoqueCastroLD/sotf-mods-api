/**
 * B11 · Statistics (PLAN §6.9, §6.4 "Estadísticas").
 *
 * Recomputed from the B1 aggregates and the source rows (idempotent: rows are only written when a
 * value differs, so a second run changes nothing):
 * - `"ModVersion"."downloadsCount"` / `"uniqueDownloadsCount"` = Σ of the version's daily rows;
 * - `"ModStats"` per mod (downloads total/7 d/30 d, followers, visible comments and reviews, rating);
 * - `"SiteStat"`: `users`, `mods`, `downloads` (aggregates + orphans), `developers` and
 *   `buildDevelopers` (legacy definitions: users with an approved `Mod` / `Build`), `builds`,
 *   `buildDownloads`, `orphanDownloads`;
 * - `"UserStats"` per user (published mods and builds, their downloads, follows, reviews received,
 *   helpful votes, compatibility reports). Tiers and ranks belong to the gamification (WP-60).
 */
import type { Backfill } from './framework.ts';

const VERSION_COUNTS = `
WITH s AS (
  SELECT v."id", coalesce(sum(d."downloads"), 0)::int AS downloads, coalesce(sum(d."uniqueDownloads"), 0)::int AS uniq
    FROM "ModVersion" v LEFT JOIN "ModVersionDownloadDaily" d ON d."modVersionId" = v."id"
   GROUP BY v."id"
)
UPDATE "ModVersion" v SET "downloadsCount" = s.downloads, "uniqueDownloadsCount" = s.uniq
  FROM s WHERE v."id" = s."id"
   AND (v."downloadsCount" IS DISTINCT FROM s.downloads OR v."uniqueDownloadsCount" IS DISTINCT FROM s.uniq)`;

const MOD_STATS = `
WITH dl AS (
  SELECT v."modId",
         sum(d."downloads")::bigint AS total,
         sum(d."downloads") FILTER (WHERE d."day" > current_date - 7)::int AS d7,
         sum(d."downloads") FILTER (WHERE d."day" > current_date - 30)::int AS d30,
         sum(d."uniqueDownloads")::bigint AS uniq
    FROM "ModVersionDownloadDaily" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
   WHERE v."modId" IS NOT NULL GROUP BY v."modId"
), views AS (
  SELECT "modId", sum("views") FILTER (WHERE "day" > current_date - 7)::int AS v7,
         sum("views") FILTER (WHERE "day" > current_date - 30)::int AS v30
    FROM "ModStatsDaily" GROUP BY "modId"
), fol AS (
  SELECT "modId", count(*)::int AS n FROM "ModFavorite" WHERE "modId" IS NOT NULL GROUP BY "modId"
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
       EXCLUDED."reviewsVisible", EXCLUDED."ratingAvg")`;

const SITE_STATS = `
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
WHERE s."value" IS DISTINCT FROM EXCLUDED."value"`;

const USER_STATS = `
WITH owned AS (
  SELECT m."userId",
         count(*) FILTER (WHERE m."status" = 'published' AND coalesce(m."type", 'Mod') <> 'Build')::int AS mods,
         count(*) FILTER (WHERE m."status" = 'published' AND m."type" = 'Build')::int AS builds,
         coalesce(sum(s."downloadsTotal"), 0)::bigint AS downloads,
         sum(s."reviewsVisible")::int AS reviews
    FROM "Mod" m LEFT JOIN "ModStats" s ON s."modId" = m."id"
   WHERE m."userId" IS NOT NULL GROUP BY m."userId"
), rating AS (
  SELECT m."userId", avg(r."rating")::real AS avg
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
  SELECT "userId", count(*)::int AS n FROM "CompatReport" GROUP BY "userId"
), computed AS (
  SELECT u."id" AS "userId", coalesce(owned.mods, 0) AS mods, coalesce(owned.builds, 0) AS builds,
         coalesce(owned.downloads, 0) AS downloads, coalesce(followers.n, 0) AS followers,
         coalesce(following.n, 0) AS following, rating.avg, coalesce(owned.reviews, 0) AS reviews,
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
       EXCLUDED."compatReportsCount")`;

export const b11: Backfill = {
  id: 'B11',
  title: 'statistics (versions, mods, site, users)',
  touchesLegacy: false,
  delta: true,
  checksumSql: `SELECT string_agg("key" || '=' || "value", ',' ORDER BY "key") AS checksum FROM "SiteStat"`,
  async run(ctx) {
    const { client } = ctx;
    const steps: Array<[string, string]> = [
      ['versions', VERSION_COUNTS],
      ['modStats', MOD_STATS],
      ['siteStats', SITE_STATS],
      ['userStats', USER_STATS],
    ];
    let total = 0;
    for (const [name, sql] of steps) {
      const result = await ctx.batch(() => client.query(sql));
      ctx.notes[name] = result.rowCount ?? 0;
      total += result.rowCount ?? 0;
    }
    return total;
  },
};
