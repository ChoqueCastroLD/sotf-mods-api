/**
 * XP engine (PLAN §7.2 "Reglas de XP"): every grant is an `XpEvent` row (auditable), unique per
 * `(userId, kind, refType, refId)`, and reversible (`revokedAt`). `User.xp` is the sum of the
 * non-revoked points and `UserStats.survivorRank` its rank; both are recomputed from the rows after
 * every change, so they can never drift.
 *
 * - **Daily caps** are per user, kind and UTC day of the action. Every row created that day counts
 *   (revoked ones included), so deleting and re-posting cannot farm XP.
 * - **Once** rules (`profile_completed`, `onboarding_completed`, `first_follow`) use a fixed
 *   reference (`refType = 'user'`, `refId = <userId>`), so the unique key enforces them.
 * - A revoked grant whose reason comes back (a review shown again, a comment marked again) is
 *   restored instead of re-created: it already counted in its day's cap.
 * - Writes take a transaction-scoped advisory lock per user so concurrent consumers cannot both
 *   pass the cap check.
 */
import { SURVIVOR_RANKS, survivorRankFor, XP_RULES, type XpEventKind } from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';
import { at, queryOne, toInt } from '../follows/sql.ts';

/** Namespace of the per-user XP advisory lock (`pg_advisory_xact_lock(ns, userId)`). */
const XP_LOCK_NAMESPACE = 60_001;

export interface XpGrant {
  userId: number;
  kind: XpEventKind;
  refType: string;
  refId: string | number;
  /** When the action happened (defines the cap day). */
  at: Date;
}

export type XpGrantOutcome = 'granted' | 'restored' | 'exists' | 'capped';

async function lockUser(tx: Executor, userId: number): Promise<void> {
  await tx.execute(sql`SELECT pg_advisory_xact_lock(${XP_LOCK_NAMESPACE}::int, ${userId}::int)`);
}

/** Start and end of the UTC day of an instant. */
export function utcDayBounds(date: Date): { start: Date; end: Date } {
  const start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  return { start, end: new Date(start.getTime() + 86_400_000) };
}

/** Grants XP (idempotent). Call inside the transaction of the change that earns it. */
export async function grantXp(tx: Executor, grant: XpGrant): Promise<XpGrantOutcome> {
  const rule = XP_RULES[grant.kind];
  const refId = String(grant.refId);
  await lockUser(tx, grant.userId);
  const existing = await queryOne<{ id: number; revokedAt: Date | null }>(
    tx,
    sql`SELECT "id", "revokedAt" FROM "XpEvent"
         WHERE "userId" = ${grant.userId} AND "kind" = ${grant.kind} AND "refType" = ${grant.refType} AND "refId" = ${refId}`,
  );
  if (existing) {
    if (existing.revokedAt === null) return 'exists';
    await tx.execute(sql`UPDATE "XpEvent" SET "revokedAt" = NULL WHERE "id" = ${existing.id}`);
    await refreshUserXp(tx, grant.userId);
    return 'restored';
  }
  if (rule.dailyCap !== null) {
    const { start, end } = utcDayBounds(grant.at);
    const used = await queryOne<{ n: number }>(
      tx,
      sql`SELECT count(*)::int AS "n" FROM "XpEvent"
           WHERE "userId" = ${grant.userId} AND "kind" = ${grant.kind}
             AND "createdAt" >= ${at(start)} AND "createdAt" < ${at(end)}`,
    );
    if (toInt(used?.n) >= rule.dailyCap) return 'capped';
  }
  const inserted = await tx.execute(sql`
    INSERT INTO "XpEvent" ("userId", "kind", "points", "refType", "refId", "createdAt")
    VALUES (${grant.userId}, ${grant.kind}, ${rule.points}, ${grant.refType}, ${refId}, ${at(grant.at)})
    ON CONFLICT ("userId", "kind", "refType", "refId") DO NOTHING`);
  if ((inserted.rowCount ?? 0) === 0) return 'exists';
  await refreshUserXp(tx, grant.userId);
  return 'granted';
}

/** A grant of a once-per-user rule. */
export function onceGrant(userId: number, kind: XpEventKind, when: Date): XpGrant {
  return { userId, kind, refType: 'user', refId: userId, at: when };
}

/**
 * Revokes the matching grants (all users when `userId` is omitted; `refIdPrefix` matches
 * `<prefix>:*` references such as every helpful vote of a review). Returns the users affected.
 */
export async function revokeXp(
  tx: Executor,
  match: { kind: XpEventKind; refType: string; refId?: string | number; refIdPrefix?: string; userId?: number },
  when: Date,
): Promise<number[]> {
  const conditions = [sql`"kind" = ${match.kind}`, sql`"refType" = ${match.refType}`, sql`"revokedAt" IS NULL`];
  if (match.refId !== undefined) conditions.push(sql`"refId" = ${String(match.refId)}`);
  if (match.refIdPrefix !== undefined) conditions.push(sql`starts_with("refId", ${`${match.refIdPrefix}:`})`);
  if (match.userId !== undefined) conditions.push(sql`"userId" = ${match.userId}`);
  const result = await tx.execute<{ userId: number }>(sql`
    UPDATE "XpEvent" SET "revokedAt" = ${at(when)}
     WHERE ${sql.join(conditions, sql` AND `)}
    RETURNING "userId"`);
  const users = [...new Set(result.rows.map((r) => Number(r.userId)))];
  for (const userId of users) {
    await lockUser(tx, userId);
    await refreshUserXp(tx, userId);
  }
  return users;
}

/**
 * Recomputes `User.xp` (a v2 column; the legacy `updatedAt` is untouched) and
 * `UserStats.survivorRank` from the rows. Returns the new total.
 */
export async function refreshUserXp(tx: Executor, userId: number): Promise<number> {
  const row = await queryOne<{ xp: number }>(
    tx,
    sql`SELECT coalesce(sum("points"), 0)::int AS "xp" FROM "XpEvent" WHERE "userId" = ${userId} AND "revokedAt" IS NULL`,
  );
  const xp = Math.max(0, toInt(row?.xp));
  await tx.execute(sql`UPDATE "User" SET "xp" = ${xp} WHERE "id" = ${userId} AND "xp" IS DISTINCT FROM ${xp}`);
  await tx.execute(sql`
    INSERT INTO "UserStats" ("userId", "survivorRank") VALUES (${userId}, ${survivorRankFor(xp)})
    ON CONFLICT ("userId") DO UPDATE SET "survivorRank" = EXCLUDED."survivorRank"
    WHERE "UserStats"."survivorRank" IS DISTINCT FROM EXCLUDED."survivorRank"`);
  return xp;
}

/** SQL `CASE` mapping an XP total to its survivor rank key (mirrors `survivorRankFor`). */
export function survivorRankCase(xpColumn: SQL): SQL {
  const steps = [...SURVIVOR_RANKS].sort((a, b) => b.minXp - a.minXp);
  return sql`CASE ${sql.join(
    steps.map((step) => sql`WHEN ${xpColumn} >= ${step.minXp} THEN ${step.key}`),
    sql` `,
  )} ELSE 'castaway' END`;
}

/**
 * Set-based reconciliation of every user's `User.xp` and survivor rank (nightly and B16). Returns
 * the number of rows changed.
 */
export async function refreshAllXp(exec: Executor): Promise<number> {
  const users = await exec.execute(sql`
    WITH totals AS (
      SELECT u."id", coalesce(sum(e."points") FILTER (WHERE e."revokedAt" IS NULL), 0)::int AS xp
        FROM "User" u LEFT JOIN "XpEvent" e ON e."userId" = u."id"
       GROUP BY u."id"
    )
    UPDATE "User" u SET "xp" = greatest(0, t.xp)
      FROM totals t
     WHERE u."id" = t."id" AND u."xp" IS DISTINCT FROM greatest(0, t.xp)`);
  const ranks = await exec.execute(sql`
    INSERT INTO "UserStats" AS s ("userId", "survivorRank")
    SELECT u."id", ${survivorRankCase(sql.raw('u."xp"'))} FROM "User" u
    ON CONFLICT ("userId") DO UPDATE SET "survivorRank" = EXCLUDED."survivorRank"
    WHERE s."survivorRank" IS DISTINCT FROM EXCLUDED."survivorRank"`);
  return (users.rowCount ?? 0) + (ranks.rowCount ?? 0);
}

/**
 * Restores the revoked helpful-vote grants of a review shown again, for the votes that still stand
 * (a withdrawn vote stays revoked).
 */
export async function restoreReviewVoteXp(tx: Executor, reviewId: number): Promise<number[]> {
  const result = await tx.execute<{ userId: number }>(sql`
    UPDATE "XpEvent" e SET "revokedAt" = NULL
      FROM "ReviewVote" v
     WHERE e."kind" = 'review_helpful_vote' AND e."refType" = 'review_vote' AND e."revokedAt" IS NOT NULL
       AND v."reviewId" = ${reviewId} AND v."value" = 1
       AND e."refId" = v."reviewId"::text || ':' || v."userId"::text
    RETURNING e."userId"`);
  const users = [...new Set(result.rows.map((r) => Number(r.userId)))];
  for (const userId of users) {
    await lockUser(tx, userId);
    await refreshUserXp(tx, userId);
  }
  return users;
}
