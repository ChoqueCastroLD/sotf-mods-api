/**
 * Badge rules (PLAN §7.2 "Insignias T0"): every automatic badge is a set-based SQL query that
 * returns the `(userId, key, contextKey)` rows that deserve it, so the same code serves the
 * per-user evaluation after an event, the nightly reconciliation and the retroactive B16 pass.
 *
 * - Awarding inserts the missing `"UserBadge"` rows (`ON CONFLICT DO NOTHING`, unique per user,
 *   badge and context) and emits `badge.awarded` for each new row inside the same transaction
 *   (`silent` for B16: no individual signal). New badges are featured automatically while the user
 *   shows fewer than `FEATURED_MAX` badges.
 * - Badges are permanent, except the ones that mirror a current state: the role badges
 *   (`verified-creator`, `ranger`) and the award badges (`mod-of-the-week`, `staff-pick`, removed
 *   when the admin deletes or replaces the award). Those are reconciled (deleted when no longer
 *   deserved).
 * - `original-survivor-<year>` needs the launch instant (the first finished B16 run): accounts
 *   created before it, per creation year. Before B16 has run nobody gets it.
 * - `night-owl` uses the browser time zone the client reported (`User.onboarding.timeZone`, IANA);
 *   UTC when unknown.
 * - `translator` is manual (`grantManualBadge`).
 */
import type { BadgeKey } from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { at, query, queryOne, toDate } from '../follows/sql.ts';
import type { Jobs } from '../kernel/jobs.ts';
import { badgeIds, NIGHT_OWL_END_HOUR, NIGHT_OWL_TARGET, REVIEW_TEXT_MIN } from './catalog.ts';

/** Badges shown on the profile header ("featured"). */
export const FEATURED_MAX = 6;

/** Badges removed when their condition stops holding. */
export const RECONCILED_BADGES: readonly BadgeKey[] = ['verified-creator', 'ranger', 'mod-of-the-week', 'staff-pick'];

/** Years that have an `original-survivor-<year>` badge (inclusive range). */
export const FIRST_SURVIVOR_YEAR = 2023;
export const LAST_SURVIVOR_YEAR = 2026;

/** Mod statuses that mean "was published" (still reachable by URL). */
export const PUBLISHED_ONCE = sql`('published', 'unlisted', 'archived')`;

/** Review body with text (v2 Markdown, else the legacy message). */
export const REVIEW_TEXT = sql`coalesce(nullif(btrim(r."bodyMd"), ''), btrim(r."message"))`;

export interface BadgeCandidate {
  userId: number;
  key: BadgeKey;
  contextKey: string;
}

export interface CandidateOptions {
  /** Only this user (per-user evaluation); all users when omitted. */
  userId?: number;
  /** Launch instant (first B16 run); `null` = no `original-survivor-*` yet. */
  launchCutoff: Date | null;
}

function only(column: SQL, userId: number | undefined): SQL {
  return userId === undefined ? sql`` : sql` AND ${column} = ${userId}`;
}

/** One query per rule; each returns `"userId", "key", "contextKey"`. */
function candidateQueries(options: CandidateOptions): SQL[] {
  const u = options.userId;
  const queries: SQL[] = [];
  if (options.launchCutoff) {
    queries.push(sql`
      SELECT u."id" AS "userId", 'original-survivor-' || extract(year FROM u."createdAt")::int AS "key", '' AS "contextKey"
        FROM "User" u
       WHERE u."deletedAt" IS NULL AND u."createdAt" < ${at(options.launchCutoff)}
         AND extract(year FROM u."createdAt")::int BETWEEN ${FIRST_SURVIVOR_YEAR} AND ${LAST_SURVIVOR_YEAR}
         ${only(sql`u."id"`, u)}`);
  }
  queries.push(sql`
    SELECT DISTINCT m."userId", 'crash-landing' AS "key", '' AS "contextKey"
      FROM "Mod" m
     WHERE m."userId" IS NOT NULL AND m."status" IN ${PUBLISHED_ONCE} AND coalesce(m."type", 'Mod') <> 'Build'
       ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT m."userId", 'first-blueprint' AS "key", '' AS "contextKey"
      FROM "Mod" m
     WHERE m."userId" IS NOT NULL AND m."status" IN ${PUBLISHED_ONCE} AND m."type" = 'Build'
       ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT lib."userId", 'pillar-of-the-island' AS "key", '' AS "contextKey"
      FROM "Mod" lib
      JOIN "ModDependency" d ON d."depModId" = lib."id" AND d."kind" = 'required'
      JOIN "ModVersion" v ON v."id" = d."modVersionId" AND v."isLatest"
      JOIN "Mod" m ON m."id" = v."modId" AND m."status" = 'published'
                  AND m."userId" IS NOT NULL AND m."userId" <> lib."userId"
     WHERE lib."userId" IS NOT NULL AND lib."status" IN ${PUBLISHED_ONCE} ${only(sql`lib."userId"`, u)}
     GROUP BY lib."userId", lib."id"
    HAVING count(DISTINCT m."id") >= 3`);
  queries.push(sql`
    SELECT DISTINCT m."userId", 'patch-day-hero' AS "key", '' AS "contextKey"
      FROM "GameBuild" g
      JOIN "ModVersionCompat" c ON c."gameBuildId" = g."id" AND c."computedStatus" = 'works'
      JOIN "ModVersion" v ON v."id" = c."modVersionId" AND v."status" = 'active'
      JOIN "Mod" m ON m."id" = v."modId" AND m."userId" IS NOT NULL AND m."status" IN ${PUBLISHED_ONCE}
     WHERE g."isBreaking"
       AND (coalesce(v."publishedAt", v."createdAt")::date - g."releasedAt") BETWEEN 0 AND 7
       ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT m."userId", 'island-favorite' AS "key", '' AS "contextKey"
      FROM "Mod" m
      JOIN (SELECT r."modId", avg(r."rating") AS avg, count(*) AS n
              FROM "ModReview" r WHERE r."status" = 'visible' AND r."modId" IS NOT NULL GROUP BY r."modId") s
        ON s."modId" = m."id"
     WHERE m."userId" IS NOT NULL AND m."status" = 'published' AND s.n >= 20 AND s.avg >= 4.5
       ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT m."userId", 'well-documented' AS "key", '' AS "contextKey"
      FROM "Mod" m
     WHERE m."userId" IS NOT NULL AND m."status" = 'published' AND m."qualityScore" >= 100
       ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT c."userId", 'first-field-report' AS "key", '' AS "contextKey"
      FROM "CompatReport" c WHERE c."status" = 'visible' ${only(sql`c."userId"`, u)}`);
  queries.push(sql`
    SELECT e."userId", 'field-medic' AS "key", '' AS "contextKey"
      FROM "XpEvent" e
     WHERE e."kind" = 'compat_report_consensus' AND e."revokedAt" IS NULL ${only(sql`e."userId"`, u)}
     GROUP BY e."userId" HAVING count(*) >= 10`);
  queries.push(sql`
    SELECT c."userId", 'bug-hunter' AS "key", '' AS "contextKey"
      FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
     WHERE c."userId" IS NOT NULL AND c."isBugReport" AND c."bugResolvedInVersionId" IS NOT NULL
       AND c."status" = 'visible' AND c."userId" IS DISTINCT FROM m."userId" ${only(sql`c."userId"`, u)}
     GROUP BY c."userId" HAVING count(*) >= 5`);
  queries.push(sql`
    SELECT DISTINCT r."userId", 'first-review' AS "key", '' AS "contextKey"
      FROM "ModReview" r JOIN "Mod" m ON m."id" = r."modId"
     WHERE r."userId" IS NOT NULL AND r."status" = 'visible' AND r."userId" IS DISTINCT FROM m."userId"
       AND char_length(${REVIEW_TEXT}) >= ${REVIEW_TEXT_MIN} ${only(sql`r."userId"`, u)}`);
  queries.push(sql`
    SELECT r."userId", 'voice-of-the-island' AS "key", '' AS "contextKey"
      FROM "ReviewVote" v JOIN "ModReview" r ON r."id" = v."reviewId"
     WHERE v."value" = 1 AND r."userId" IS NOT NULL AND v."userId" <> r."userId" ${only(sql`r."userId"`, u)}
     GROUP BY r."userId" HAVING count(*) >= 50`);
  queries.push(sql`
    SELECT c."userId", 'helping-hand' AS "key", '' AS "contextKey"
      FROM "Comment" c JOIN "Mod" m ON m."id" = c."modId"
     WHERE c."userId" IS NOT NULL AND c."status" = 'visible' AND c."userId" IS DISTINCT FROM m."userId"
       AND (c."isSolution" OR (c."pinnedById" IS NOT NULL AND c."pinnedById" = m."userId"))
       ${only(sql`c."userId"`, u)}
     GROUP BY c."userId" HAVING count(*) >= 5`);
  queries.push(sql`
    SELECT DISTINCT k."ownerId" AS "userId", 'cartographer' AS "key", '' AS "contextKey"
      FROM "Kit" k
     WHERE k."visibility" = 'public' AND k."deletedAt" IS NULL AND k."followersCount" >= 10
       ${only(sql`k."ownerId"`, u)}`);
  queries.push(sql`
    SELECT u."id" AS "userId", 'survived-day-one' AS "key", '' AS "contextKey"
      FROM "User" u
     WHERE u."deletedAt" IS NULL AND (u."onboarding"->>'completedAt') IS NOT NULL ${only(sql`u."id"`, u)}`);
  queries.push(sql`
    SELECT m."userId", 'mod-of-the-week' AS "key", to_char(a."periodStart", 'IYYY-"W"IW') AS "contextKey"
      FROM "Award" a JOIN "Mod" m ON m."id" = a."modId"
     WHERE a."kind" = 'mod_of_week' AND m."userId" IS NOT NULL ${only(sql`m."userId"`, u)}`);
  // Mod Jams: rewards exist only once the results of a jam are published.
  queries.push(sql`
    SELECT DISTINCT a."userId", 'jam-participant' AS "key", 'jam:' || e."jamId" AS "contextKey"
      FROM "JamEntry" e
      JOIN "Jam" j ON j."id" = e."jamId" AND j."resultsPublishedAt" IS NOT NULL
      JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
     WHERE e."status" = 'active' ${only(sql`a."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT a."userId", 'jam-podium' AS "key", 'jam:' || e."jamId" || ':' || r."categoryKey" AS "contextKey"
      FROM "JamResult" r
      JOIN "Jam" j ON j."id" = r."jamId" AND j."resultsPublishedAt" IS NOT NULL
      JOIN "JamEntry" e ON e."id" = r."entryId" AND e."status" = 'active'
      JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
     WHERE r."categoryKey" <> '_overall' AND r."rank" <= 3 ${only(sql`a."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT a."userId", 'jam-champion' AS "key", 'jam:' || e."jamId" AS "contextKey"
      FROM "JamResult" r
      JOIN "Jam" j ON j."id" = r."jamId" AND j."resultsPublishedAt" IS NOT NULL
      JOIN "JamEntry" e ON e."id" = r."entryId" AND e."status" = 'active'
      JOIN "JamEntryAuthor" a ON a."entryId" = e."id"
     WHERE r."categoryKey" = '_overall' AND r."rank" = 1 ${only(sql`a."userId"`, u)}`);
  queries.push(sql`
    SELECT DISTINCT m."userId", 'staff-pick' AS "key", 'mod:' || m."id" AS "contextKey"
      FROM "Award" a JOIN "Mod" m ON m."id" = a."modId"
     WHERE a."kind" = 'staff_pick' AND m."userId" IS NOT NULL ${only(sql`m."userId"`, u)}`);
  queries.push(sql`
    SELECT u."id" AS "userId", 'verified-creator' AS "key", '' AS "contextKey"
      FROM "User" u WHERE u."deletedAt" IS NULL AND u."verifiedCreator" ${only(sql`u."id"`, u)}`);
  queries.push(sql`
    SELECT u."id" AS "userId", 'ranger' AS "key", '' AS "contextKey"
      FROM "User" u WHERE u."deletedAt" IS NULL AND u."role" IN ('moderator', 'admin') ${only(sql`u."id"`, u)}`);
  queries.push(sql`
    WITH zones AS (
      SELECT u."id",
             CASE WHEN (u."onboarding"->>'timeZone') IN (SELECT "name" FROM pg_timezone_names)
                  THEN u."onboarding"->>'timeZone' ELSE 'UTC' END AS "zone"
        FROM "User" u WHERE u."deletedAt" IS NULL ${only(sql`u."id"`, u)}
    ), contributions AS (
      SELECT c."userId", c."createdAt" AT TIME ZONE 'UTC' AS "at"
        FROM "Comment" c WHERE c."userId" IS NOT NULL AND c."status" = 'visible' ${only(sql`c."userId"`, u)}
      UNION ALL
      SELECT r."userId", r."createdAt" AT TIME ZONE 'UTC'
        FROM "ModReview" r WHERE r."userId" IS NOT NULL AND r."status" = 'visible' ${only(sql`r."userId"`, u)}
      UNION ALL
      SELECT cr."userId", cr."createdAt"
        FROM "CompatReport" cr WHERE cr."status" = 'visible' ${only(sql`cr."userId"`, u)}
    )
    SELECT c."userId", 'night-owl' AS "key", '' AS "contextKey"
      FROM contributions c JOIN zones z ON z."id" = c."userId"
     WHERE extract(hour FROM (c."at" AT TIME ZONE z."zone")) < ${NIGHT_OWL_END_HOUR}
     GROUP BY c."userId" HAVING count(*) >= ${NIGHT_OWL_TARGET}`);
  return queries;
}

/** Every `(user, badge, context)` that deserves a badge now. */
export async function badgeCandidates(exec: Executor, options: CandidateOptions): Promise<BadgeCandidate[]> {
  const out: BadgeCandidate[] = [];
  for (const statement of candidateQueries(options)) {
    const rows = await query<{ userId: number; key: string; contextKey: string }>(exec, statement);
    for (const r of rows) {
      out.push({ userId: Number(r.userId), key: r.key as BadgeKey, contextKey: r.contextKey ?? '' });
    }
  }
  return out;
}

/** Launch instant: start of the first finished B16 run (null before B16). */
export async function launchCutoff(exec: Executor): Promise<Date | null> {
  const row = await queryOne<{ at: Date | string | null }>(
    exec,
    sql`SELECT min("startedAt") AS "at" FROM "MigrationRun" WHERE "name" = 'backfill:B16' AND "finishedAt" IS NOT NULL`,
  );
  return toDate(row?.at);
}

export interface AwardBadgesOptions {
  jobs: Jobs;
  now: Date;
  /** Retroactive grant (B16): `badge.awarded.silent = true`. */
  silent: boolean;
}

export interface AwardedBadge {
  userId: number;
  key: string;
  contextKey: string;
}

/** Inserts the missing badges, features them while there is room and emits `badge.awarded`. */
export async function awardBadges(
  tx: Executor,
  candidates: readonly BadgeCandidate[],
  options: AwardBadgesOptions,
): Promise<AwardedBadge[]> {
  if (candidates.length === 0) return [];
  const ids = await badgeIds(tx);
  const rows = candidates
    .filter((c) => ids.has(c.key))
    .map((c) => ({ userId: c.userId, badgeId: ids.get(c.key) as number, contextKey: c.contextKey }));
  if (rows.length === 0) return [];
  const inserted = await query<{ id: number; userId: number; badgeId: number; contextKey: string }>(
    tx,
    sql`
      INSERT INTO "UserBadge" ("userId", "badgeId", "contextKey", "awardedAt")
      SELECT c."userId", c."badgeId", c."contextKey", ${at(options.now)}
        FROM jsonb_to_recordset(${JSON.stringify(rows)}::jsonb) AS c("userId" integer, "badgeId" integer, "contextKey" text)
        JOIN "User" u ON u."id" = c."userId" AND u."deletedAt" IS NULL AND u."bannedAt" IS NULL
      ON CONFLICT ("userId", "badgeId", "contextKey") DO NOTHING
      RETURNING "id", "userId", "badgeId", "contextKey"`,
  );
  if (inserted.length === 0) return [];
  const idList = `{${inserted.map((r) => Number(r.id)).join(',')}}`;
  await tx.execute(sql`
    WITH fresh AS (
      SELECT ub."id", ub."userId",
             row_number() OVER (PARTITION BY ub."userId" ORDER BY b."sortOrder", ub."id") AS rn
        FROM "UserBadge" ub JOIN "Badge" b ON b."id" = ub."badgeId"
       WHERE ub."id" = ANY(${idList}::bigint[]) AND NOT b."isSecret"
    ), room AS (
      SELECT f."id", f.rn,
             (SELECT count(*) FROM "UserBadge" x WHERE x."userId" = f."userId" AND x."isFeatured") AS featured
        FROM fresh f
    )
    UPDATE "UserBadge" ub SET "isFeatured" = true
      FROM room WHERE ub."id" = room."id" AND room.featured + room.rn <= ${FEATURED_MAX}`);
  const keyById = new Map([...ids.entries()].map(([key, id]) => [id, key]));
  const awarded: AwardedBadge[] = [];
  for (const row of inserted) {
    const key = keyById.get(Number(row.badgeId));
    if (!key) continue;
    const badge = { userId: Number(row.userId), key, contextKey: row.contextKey };
    awarded.push(badge);
    await options.jobs.emitNew(
      tx,
      'badge.awarded',
      { userId: badge.userId, badgeKey: key, contextKey: badge.contextKey, silent: options.silent },
      { actorId: null },
    );
  }
  return awarded;
}

/**
 * Deletes the reconciled badges (`RECONCILED_BADGES`) that are no longer deserved. `userId`
 * limits the reconciliation to one user. Returns the users affected.
 */
export async function reconcileBadges(
  tx: Executor,
  candidates: readonly BadgeCandidate[],
  userId?: number,
): Promise<number[]> {
  const keep = candidates
    .filter((c) => RECONCILED_BADGES.includes(c.key))
    .map((c) => ({ userId: c.userId, key: c.key, contextKey: c.contextKey }));
  const keys = `{${RECONCILED_BADGES.map((k) => `"${k}"`).join(',')}}`;
  const removed = await query<{ userId: number }>(
    tx,
    sql`
      DELETE FROM "UserBadge" ub
       USING "Badge" b
       WHERE b."id" = ub."badgeId" AND b."key" = ANY(${keys}::text[]) ${only(sql`ub."userId"`, userId)}
         AND NOT EXISTS (
           SELECT 1 FROM jsonb_to_recordset(${JSON.stringify(keep)}::jsonb) AS k("userId" integer, "key" text, "contextKey" text)
            WHERE k."userId" = ub."userId" AND k."key" = b."key" AND k."contextKey" = ub."contextKey")
      RETURNING ub."userId"`,
  );
  return [...new Set(removed.map((r) => Number(r.userId)))];
}

/** Removes one badge context (an award deleted or replaced). Returns true when a row went away. */
export async function removeBadge(tx: Executor, userId: number, key: BadgeKey, contextKey: string): Promise<boolean> {
  const result = await tx.execute(sql`
    DELETE FROM "UserBadge" ub USING "Badge" b
     WHERE b."id" = ub."badgeId" AND b."key" = ${key} AND ub."userId" = ${userId} AND ub."contextKey" = ${contextKey}`);
  return (result.rowCount ?? 0) > 0;
}

/** Manual badges (`translator`) granted or removed by an admin. */
export async function grantManualBadge(
  tx: Executor,
  jobs: Jobs,
  userId: number,
  key: 'translator',
  now: Date,
): Promise<boolean> {
  const awarded = await awardBadges(tx, [{ userId, key, contextKey: '' }], { jobs, now, silent: false });
  return awarded.length > 0;
}
