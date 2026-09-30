/**
 * VirusTotal quota (PLAN §7.4: the free API allows 4 requests per minute and 500 per day).
 *
 * Every API call first takes a slot from a ledger in Postgres (`"AnalyticsEvent"` rows of kind
 * `virustotal_call`, the operational-event table already used for `legacy_call`, 90-day
 * retention), under an advisory transaction lock, so the quota holds across worker processes and
 * restarts:
 *
 * - more than 4 calls in the last 60 s → wait until the oldest leaves the window (the job sleeps
 *   up to a minute; the scan queue runs one job at a time);
 * - 500 calls since 00:00 UTC → `QuotaExhausted` with the time the day resets; the job reschedules
 *   itself for then.
 */
import type { Database } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { queryOne, toDate } from '../follows/sql.ts';
import type { Clock } from '../kernel/clock.ts';

export const VT_PER_MINUTE = 4;
export const VT_PER_DAY = 500;
export const VT_CALL_KIND = 'virustotal_call';

export class QuotaExhausted extends Error {
  override readonly name = 'QuotaExhausted';
  readonly retryAt: Date;
  constructor(retryAt: Date) {
    super(`VirusTotal quota exhausted until ${retryAt.toISOString()}`);
    this.retryAt = retryAt;
  }
}

export interface ThrottleOptions {
  perMinute?: number;
  perDay?: number;
  /** Longest in-job wait for a minute slot (ms). Default 65 s. */
  maxWaitMs?: number;
  sleep?: (ms: number) => Promise<void>;
}

const defaultSleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

function startOfUtcDay(date: Date): Date {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

/**
 * Tries to take one slot. Returns `0` when taken, else the milliseconds to wait for the next
 * minute slot; throws `QuotaExhausted` when the daily quota is spent.
 */
export async function tryTakeSlot(
  db: Database,
  now: Date,
  limits: { perMinute: number; perDay: number },
  purpose: string,
): Promise<number> {
  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtextextended('virustotal:quota', 0))`);
    const dayStart = startOfUtcDay(now);
    const minuteAgo = new Date(now.getTime() - 60_000);
    const row = await queryOne<{ day: number; minute: number; oldest: Date | string | null }>(
      tx,
      sql`SELECT count(*)::int AS "day",
                 count(*) FILTER (WHERE "ts" > ${minuteAgo.toISOString()}::timestamptz)::int AS "minute",
                 min("ts") FILTER (WHERE "ts" > ${minuteAgo.toISOString()}::timestamptz) AS "oldest"
            FROM "AnalyticsEvent"
           WHERE "kind" = ${VT_CALL_KIND} AND "ts" >= ${dayStart.toISOString()}::timestamptz`,
    );
    if ((row?.day ?? 0) >= limits.perDay) {
      throw new QuotaExhausted(new Date(dayStart.getTime() + 86_400_000 + 30_000));
    }
    if ((row?.minute ?? 0) >= limits.perMinute) {
      const oldest = toDate(row?.oldest ?? null) ?? now;
      return Math.max(250, oldest.getTime() + 60_000 - now.getTime() + 250);
    }
    await tx.execute(
      sql`INSERT INTO "AnalyticsEvent" ("ts", "kind", "props")
          VALUES (${now.toISOString()}::timestamptz, ${VT_CALL_KIND}, ${JSON.stringify({ purpose })}::jsonb)`,
    );
    return 0;
  });
}

/** Builds the `beforeRequest` hook of the VirusTotal client. */
export function createVirusTotalThrottle(db: Database, clock: Clock, options: ThrottleOptions = {}) {
  const limits = { perMinute: options.perMinute ?? VT_PER_MINUTE, perDay: options.perDay ?? VT_PER_DAY };
  const maxWaitMs = options.maxWaitMs ?? 65_000;
  const sleep = options.sleep ?? defaultSleep;
  return async (purpose = 'api'): Promise<void> => {
    let waited = 0;
    for (;;) {
      const wait = await tryTakeSlot(db, clock.now(), limits, purpose);
      if (wait === 0) return;
      if (waited + wait > maxWaitMs) throw new QuotaExhausted(new Date(clock.now().getTime() + wait));
      await sleep(wait);
      waited += wait;
    }
  };
}
