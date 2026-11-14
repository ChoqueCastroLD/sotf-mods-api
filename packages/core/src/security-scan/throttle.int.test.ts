/**
 * The VirusTotal quota queue against a real Postgres: the free API allows 4 calls a minute and 500
 * a day, shared by every worker process (`throttle.ts`).
 */
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createVirusTotalThrottle, QuotaExhausted, tryTakeSlot, VT_CALL_KIND } from './throttle.ts';

let db: TestDb;
const T0 = new Date('2026-11-14T10:00:00.000Z');

beforeAll(async () => {
  db = await startTestDb();
}, 240_000);

afterAll(async () => {
  await db?.stop();
});

beforeEach(async () => {
  await db.db.execute(sql`DELETE FROM "AnalyticsEvent" WHERE "kind" = ${VT_CALL_KIND}`);
});

const limits = { perMinute: 4, perDay: 500 };
const at = (ms: number) => new Date(T0.getTime() + ms);

describe('VirusTotal quota queue', () => {
  it('lets 4 calls through in a minute, then says how long to wait for the oldest to expire', async () => {
    for (let i = 0; i < 4; i++) expect(await tryTakeSlot(db.db, at(i * 1000), limits, 'scan')).toBe(0);
    const wait = await tryTakeSlot(db.db, at(10_000), limits, 'scan');
    // The first call (t=0) leaves the window at t=60 s: wait ≈ 50 s (+ a small margin).
    expect(wait).toBeGreaterThanOrEqual(50_000);
    expect(wait).toBeLessThanOrEqual(51_000);
    expect(await tryTakeSlot(db.db, at(61_000), limits, 'scan')).toBe(0);
  });

  it('stops for the day at 500 calls and reschedules just after midnight UTC', async () => {
    await db.db.execute(sql`
      INSERT INTO "AnalyticsEvent" ("ts", "kind", "props")
      SELECT ${T0.toISOString()}::timestamptz - (g * interval '1 minute'), ${VT_CALL_KIND}, '{}'::jsonb
        FROM generate_series(1, 500) AS g`);
    const error = await tryTakeSlot(db.db, T0, limits, 'scan').catch((e: unknown) => e);
    expect(error).toBeInstanceOf(QuotaExhausted);
    expect((error as QuotaExhausted).retryAt.toISOString()).toBe('2026-11-15T00:00:30.000Z');
  });

  it('makes a job sleep for its slot instead of exceeding the minute limit', async () => {
    let now = T0.getTime();
    const slept: number[] = [];
    const throttle = createVirusTotalThrottle(
      db.db,
      { now: () => new Date(now) },
      {
        sleep: async (ms) => {
          slept.push(ms);
          now += ms;
        },
      },
    );
    for (let i = 0; i < 6; i++) await throttle('scan');
    // 4 immediate calls at t=0; the 5th waits until they leave the window (≈60 s), which frees the
    // 6th too.
    expect(slept).toHaveLength(1);
    expect(slept[0]).toBeGreaterThanOrEqual(60_000);
    expect(slept[0]).toBeLessThanOrEqual(61_000);
    const calls = await db.db.execute<{ n: number }>(
      sql`SELECT count(*)::int AS n FROM "AnalyticsEvent" WHERE "kind" = ${VT_CALL_KIND}`,
    );
    expect(calls.rows[0]?.n).toBe(6);
  });

  it('never exceeds the minute limit when several workers ask at once', async () => {
    const results = await Promise.all(Array.from({ length: 12 }, () => tryTakeSlot(db.db, T0, limits, 'scan')));
    expect(results.filter((wait) => wait === 0)).toHaveLength(4);
  });
});
