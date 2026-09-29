/**
 * Nightly `trustLevel` recomputation (T0-22), job `accounts.trust-level`:
 *
 * - 3: verified creator, moderator or admin;
 * - 0: email not verified, account younger than 24 h, banned, deleted or suspended right now;
 * - 2: account ≥ 30 days old with ≥ 5 contributions (visible comments, visible reviews, published
 *   mods and compat reports) and no sanction in the last 90 days;
 * - 1: everyone else (verified and ≥ 24 h).
 *
 * One set-based UPDATE that only touches rows whose level changes (the legacy "updatedAt" is left
 * alone: this is derived data).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';

export const TRUST_LEVEL_SQL = sql`
  WITH contributions AS (
    SELECT u."id",
      (SELECT count(*) FROM "Comment" c WHERE c."userId" = u."id" AND c."status" = 'visible')
      + (SELECT count(*) FROM "ModReview" r WHERE r."userId" = u."id" AND r."status" = 'visible')
      + (SELECT count(*) FROM "Mod" m WHERE m."userId" = u."id" AND m."status" = 'published')
      + (SELECT count(*) FROM "CompatReport" cr WHERE cr."userId" = u."id") AS "n",
      EXISTS (
        SELECT 1 FROM "UserSanction" s
        WHERE s."userId" = u."id" AND s."revokedAt" IS NULL AND s."startsAt" > now() - interval '90 days'
      ) AS "sanctioned"
    FROM "User" u
  ),
  computed AS (
    SELECT u."id",
      CASE
        WHEN u."deletedAt" IS NOT NULL OR u."bannedAt" IS NOT NULL THEN 0
        WHEN u."suspendedUntil" IS NOT NULL AND u."suspendedUntil" > (now() AT TIME ZONE 'UTC') THEN 0
        WHEN u."verifiedCreator" OR u."role" IN ('moderator', 'admin') THEN 3
        WHEN u."emailVerifiedAt" IS NULL THEN 0
        WHEN u."createdAt" > (now() AT TIME ZONE 'UTC') - interval '24 hours' THEN 0
        WHEN u."createdAt" <= (now() AT TIME ZONE 'UTC') - interval '30 days' AND c."n" >= 5 AND NOT c."sanctioned" THEN 2
        ELSE 1
      END::smallint AS "level"
    FROM "User" u JOIN contributions c ON c."id" = u."id"
  )
  UPDATE "User" u SET "trustLevel" = computed."level"
  FROM computed
  WHERE computed."id" = u."id" AND u."trustLevel" IS DISTINCT FROM computed."level"`;

/** Recomputes every account's trust level; returns the number of rows that changed. */
export async function recomputeTrustLevels(db: Executor): Promise<number> {
  const result = await db.execute(TRUST_LEVEL_SQL);
  return result.rowCount ?? 0;
}
