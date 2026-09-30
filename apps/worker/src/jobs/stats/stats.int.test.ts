/**
 * WP-52 acceptance for the worker (testing phase): `stats.rollup` equals the raw computation and is
 * idempotent; `legacy.counters` equals the formulas of the legacy crons
 * (`sotf-mods-api/src/api/mods/cron.ts`) and never moves `updatedAt` — against PostgreSQL 16.
 */
import { Jobs, ManualClock, silentLogger, systemCtx } from '@sotf/core';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { JobContext } from '../../define-job.ts';
import legacyCountersJobs from '../legacy-counters/index.ts';
import statsJobs from './index.ts';

let db: TestDb;
let f: Factories;
const NOW = '2026-10-10T12:30:00.000Z';
const clock = new ManualClock(NOW);

beforeAll(async () => {
  db = await startTestDb();
  f = createFactories(db.db);
});

afterAll(async () => {
  await db?.stop();
});

function context(queue: string): JobContext {
  const jobs = new Jobs({ send: async () => null, sendDebounced: async () => null } as never, { clock });
  return {
    ctx: systemCtx({ db: db.db, jobs, clock, log: silentLogger(), appSecret: 'x'.repeat(40) }, `job-${queue}`),
    job: { id: `job-${queue}`, queue, retryCount: 0, signal: new AbortController().signal },
    services: { env: {} as never, storage: () => null },
  };
}

async function run(group: typeof statsJobs, queue: string, data: object = {}): Promise<unknown> {
  const job = group.jobs.find((j) => j.queue === queue);
  if (!job) throw new Error(`no handler for ${queue}`);
  return (job.handler as (d: object, c: JobContext) => Promise<unknown>)(data, context(queue));
}

async function rows<T>(query: ReturnType<typeof sql>): Promise<T[]> {
  return (await db.db.execute(query)).rows as T[];
}

describe('stats.rollup', () => {
  it('equals the raw rows of the day and is idempotent', async () => {
    const author = await f.user();
    const fan = await f.user();
    const a = await f.modWithVersion({ userId: author.id });
    const b = await f.modWithVersion({ userId: author.id });
    const today = '2026-10-10';
    await db.db.execute(sql`
      INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads", "uniqueDownloads") VALUES
        (${a.version.id}, ${today}, 'web', 5, 4), (${a.version.id}, ${today}, 'redmanager', 3, 3),
        (${a.version.id}, '2026-10-01', 'web', 7, 6), (${b.version.id}, ${today}, 'api', 2, 1)`);
    await db.db.execute(sql`
      INSERT INTO "AnalyticsEvent" ("ts", "kind", "entityType", "entityId", "referrerDomain", "locale", "country", "visitorHash") VALUES
        ('2026-10-10T08:00:00Z', 'page_view', 'mod', ${a.mod.id}, 'reddit.com', 'es', 'ES', 'v1'),
        ('2026-10-10T09:00:00Z', 'page_view', 'mod', ${a.mod.id}, NULL, 'en', 'US', 'v1'),
        ('2026-10-10T10:00:00Z', 'page_view', 'mod', ${a.mod.id}, 'reddit.com', 'es', 'ES', 'v2'),
        ('2026-10-09T23:59:59Z', 'page_view', 'mod', ${a.mod.id}, NULL, 'en', 'US', 'v3')`);
    const favorite = await f.favorite({ userId: fan.id, modId: a.mod.id });
    const comment = await f.comment({ modId: a.mod.id, userId: fan.id });
    // Created "today" for the manual clock (the columns default to the real time).
    await db.db.execute(sql`UPDATE "ModFavorite" SET "createdAt" = '2026-10-10T07:00:00' WHERE "id" = ${favorite.id}`);
    await db.db.execute(sql`UPDATE "Comment" SET "createdAt" = '2026-10-10T07:00:00' WHERE "id" = ${comment.id}`);

    const first = (await run(statsJobs, 'stats.rollup', { hour: '2026-10-10T11:00:00.000Z' })) as {
      days: Array<{ day: string; rows: number }>;
    };
    expect(first.days.map((d) => d.day)).toEqual([today]);

    const daily = await rows<Record<string, unknown>>(
      sql`SELECT "modId", "views", "uniqueViews", "downloads", "uniqueDownloads", "follows", "comments",
                 "bySource", "byReferrer", "byLocale", "byCountry"
            FROM "ModStatsDaily" WHERE "day" = ${today} ORDER BY "modId"`,
    );
    expect(daily).toEqual([
      {
        modId: a.mod.id,
        views: 3,
        uniqueViews: 2,
        downloads: 8,
        uniqueDownloads: 7,
        follows: 1,
        comments: 1,
        bySource: { web: 5, redmanager: 3 },
        byReferrer: { 'reddit.com': 2, direct: 1 },
        byLocale: { es: 2, en: 1 },
        byCountry: { ES: 2, US: 1 },
      },
      {
        modId: b.mod.id,
        views: 0,
        uniqueViews: 0,
        downloads: 2,
        uniqueDownloads: 1,
        follows: 0,
        comments: 0,
        bySource: { api: 2 },
        byReferrer: {},
        byLocale: {},
        byCountry: {},
      },
    ]);
    const [statsA] = await rows<Record<string, unknown>>(
      sql`SELECT "downloadsTotal", "downloads7d", "downloads30d", "followers" FROM "ModStats" WHERE "modId" = ${a.mod.id}`,
    );
    expect(statsA).toEqual({ downloadsTotal: '15', downloads7d: 8, downloads30d: 15, followers: 1 });
    const [userStats] = await rows<Record<string, unknown>>(
      sql`SELECT "modsCount", "downloadsTotal" FROM "UserStats" WHERE "userId" = ${author.id}`,
    );
    expect(userStats).toEqual({ modsCount: 2, downloadsTotal: '17' });

    const snapshot = () =>
      rows(sql`SELECT to_jsonb(s) - 'updatedAt' AS row FROM "ModStatsDaily" s ORDER BY "modId", "day"`);
    const before = await snapshot();
    const second = (await run(statsJobs, 'stats.rollup', { hour: '2026-10-10T11:00:00.000Z' })) as {
      days: Array<{ rows: number }>;
      modStats: number;
      userStats: number;
      siteStats: number;
    };
    expect(second.days[0]?.rows).toBe(0);
    expect(second.modStats).toBe(0);
    expect(second.userStats).toBe(0);
    expect(second.siteStats).toBe(0);
    expect(await snapshot()).toEqual(before);
  });
});

describe('legacy.counters', () => {
  it('matches the legacy cron formulas, writes only changes and never touches updatedAt', async () => {
    const { mod, version } = await f.modWithVersion();
    const older = await f.modVersion({ modId: mod.id, version: '0.9.0', isLatest: false });
    const fan = await f.user();
    const otherFan = await f.user();
    // Legacy formulas: all ModDownload rows of the mod's versions; the last-7-days window uses
    // "createdAt" (timestamp(3), UTC wall clock) > now − 7 days.
    for (const createdAt of ['2026-10-10T10:00:00Z', '2026-10-04T12:31:00Z', '2026-10-01T00:00:00Z']) {
      await f.download({ modVersionId: version.id, createdAt: new Date(createdAt) });
    }
    await f.download({ modVersionId: older.id, createdAt: new Date('2026-10-09T00:00:00Z') });
    await f.download({ modVersionId: null, createdAt: new Date('2026-10-09T00:00:00Z') });
    await f.favorite({ userId: fan.id, modId: mod.id });
    await f.favorite({ userId: otherFan.id, modId: mod.id });
    await f.comment({ modId: mod.id, isHidden: true });
    await f.comment({ modId: mod.id });
    await db.db.execute(sql`UPDATE "Mod" SET "updatedAt" = '2025-01-01T00:00:00' WHERE "id" = ${mod.id}`);

    const first = (await run(legacyCountersJobs as typeof statsJobs, 'legacy.counters')) as { updated: number };
    expect(first.updated).toBeGreaterThanOrEqual(1);
    const [row] = await rows<Record<string, unknown>>(
      sql`SELECT "downloads", "lastWeekDownloads", "favoritesCount", "commentsCount", "updatedAt"::text AS "updatedAt"
            FROM "Mod" WHERE "id" = ${mod.id}`,
    );
    expect(row).toMatchObject({ downloads: 4, lastWeekDownloads: 3, favoritesCount: 2, commentsCount: 2 });
    expect(row?.updatedAt).toBe('2025-01-01 00:00:00');

    const second = (await run(legacyCountersJobs as typeof statsJobs, 'legacy.counters')) as { updated: number };
    expect(second.updated).toBe(0);
  });
});
