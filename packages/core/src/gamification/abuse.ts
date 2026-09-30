/**
 * Anti-abuse guards of PLAN §7.2:
 *
 * - Votes and Field reports between accounts that used the same `ipHash` within 24 h of the action
 *   do not count (sock puppets). The address trail is the session table (`Session.ipHash`, the
 *   daily-salted HMAC of `hashing.ts`, so equal hashes mean the same address on the same UTC day)
 *   plus the security log (`AuthEvent.ipHash`).
 * - Downloads never give XP (no rule consumes them).
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { at, queryOne } from '../follows/sql.ts';

/** Window around an action in which a shared address disqualifies it. */
export const SHARED_IP_WINDOW_HOURS = 24;

/** True when both accounts were seen with the same address within 24 h before `when`. */
export async function sharedIpRecently(exec: Executor, a: number, b: number, when: Date): Promise<boolean> {
  if (a === b) return true;
  const from = new Date(when.getTime() - SHARED_IP_WINDOW_HOURS * 3_600_000);
  const to = new Date(when.getTime() + 60_000);
  const row = await queryOne<{ shared: boolean }>(
    exec,
    sql`
      WITH seen AS (
        SELECT s."userId", s."ipHash" FROM "Session" s
         WHERE s."userId" IN (${a}, ${b}) AND s."ipHash" IS NOT NULL
           AND s."lastSeenAt" >= ${at(from)} AND s."createdAt" <= ${at(to)}
        UNION
        SELECT e."userId", e."ipHash" FROM "AuthEvent" e
         WHERE e."userId" IN (${a}, ${b}) AND e."ipHash" IS NOT NULL
           AND e."createdAt" BETWEEN ${at(from)} AND ${at(to)}
      )
      SELECT EXISTS (
        SELECT 1 FROM seen x JOIN seen y ON y."ipHash" = x."ipHash"
         WHERE x."userId" = ${a} AND y."userId" = ${b}
      ) AS "shared"`,
  );
  return row?.shared === true;
}
