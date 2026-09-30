/**
 * Creator tiers (PLAN §7.2 "Creator tier"): automatic, by the lifetime downloads of all the
 * creator's mods **with the legacy history**. A mod's lifetime downloads are the larger of its
 * daily series (`ModVersionDownloadDaily`, which holds the legacy history since B1) and the legacy
 * counter `Mod.downloads`, so the tier is right even where the series is incomplete. Removed and
 * rejected mods do not count.
 *
 * The tier is stored in `UserStats.creatorTier` (the rollup of WP-52 never touches it) and changes
 * purge the creator's pages.
 */
import { CREATOR_TIERS } from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { query } from '../follows/sql.ts';

/** SQL `CASE` from a downloads expression to the tier key (NULL below the first tier). */
export function creatorTierCase(downloads: SQL): SQL {
  const steps = [...CREATOR_TIERS].sort((a, b) => b.minDownloads - a.minDownloads);
  return sql`CASE ${sql.join(
    steps.map((step) => sql`WHEN ${downloads} >= ${step.minDownloads} THEN ${step.key}`),
    sql` `,
  )} ELSE NULL END`;
}

/** Lifetime downloads per mod (daily series or legacy counter, whichever is larger). */
export function modLifetimeDownloadsSql(modFilter: SQL = sql``): SQL {
  return sql`
    SELECT m."id" AS "modId", m."userId", m."status",
           greatest(
             coalesce((SELECT sum(d."downloads") FROM "ModVersionDownloadDaily" d
                         JOIN "ModVersion" v ON v."id" = d."modVersionId"
                        WHERE v."modId" = m."id"), 0),
             m."downloads")::bigint AS "downloads"
      FROM "Mod" m
     WHERE true ${modFilter}`;
}

/**
 * Recomputes `UserStats.creatorTier` (every user, or one). Returns the users whose tier changed.
 */
export async function refreshCreatorTiers(exec: Executor, userId?: number): Promise<number[]> {
  const userFilter = userId === undefined ? sql`` : sql` AND u."id" = ${userId}`;
  const modFilter = userId === undefined ? sql`` : sql` AND m."userId" = ${userId}`;
  const rows = await query<{ userId: number }>(
    exec,
    sql`
      WITH mods AS (${modLifetimeDownloadsSql(modFilter)}),
      totals AS (
        SELECT "userId", sum("downloads")::bigint AS downloads
          FROM mods WHERE "userId" IS NOT NULL AND "status" NOT IN ('removed', 'rejected')
         GROUP BY "userId"
      )
      INSERT INTO "UserStats" AS s ("userId", "creatorTier")
      SELECT u."id", ${creatorTierCase(sql`coalesce(t.downloads, 0)`)}
        FROM "User" u LEFT JOIN totals t ON t."userId" = u."id"
       WHERE true ${userFilter}
      ON CONFLICT ("userId") DO UPDATE SET "creatorTier" = EXCLUDED."creatorTier"
      WHERE s."creatorTier" IS DISTINCT FROM EXCLUDED."creatorTier"
      RETURNING s."userId"`,
  );
  return rows.map((r) => Number(r.userId));
}
