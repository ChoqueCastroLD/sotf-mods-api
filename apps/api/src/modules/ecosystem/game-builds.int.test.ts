// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Game builds admin list (search, filters, sort, pages), the Steam sync status and the "sync now"
 * enqueue, and the public list the upload wizard reads (`limit`, `q`). Runs on the small seed.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let admin: TestUser;
let ranger: TestUser;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'builds-admin', 'admin');
  ranger = await createTestUser(db, 'builds-ranger', 'moderator');
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
  await exec(db, `DELETE FROM "GameBuild"`);
  const rows: Array<[string, string, string | null, boolean, boolean]> = [
    ['Patch 9', '2023-08-17', null, false, false],
    ['Patch 10', '2023-08-31', null, false, false],
    ['Patch 15', '2023-11-30', null, true, false],
    ['Hotfix 2024-05-14', '2024-05-14', null, false, false],
    ['Update 2025-10-03', '2025-10-03', '20228174', false, true],
  ];
  for (const [label, day, steam, breaking, current] of rows) {
    await exec(
      db,
      `INSERT INTO "GameBuild" ("label", "releasedAt", "steamBuildId", "isBreaking", "isCurrent") VALUES ($1, $2, $3, $4, $5)`,
      [label, day, steam, breaking, current],
    );
  }
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

const labels = (res: { body: any }) => res.body.items.map((g: any) => g.label);

describe('GET /admin/game-builds', () => {
  it('is admin only', async () => {
    expect((await call('GET', '/api/v2/admin/game-builds', ranger)).status).toBe(403);
    expect((await call('GET', '/api/v2/admin/game-builds', null)).status).toBe(401);
  });

  it('pages, sorts, searches and filters on the server', async () => {
    const all = await call('GET', '/api/v2/admin/game-builds', admin);
    expect(all.status).toBe(200);
    expect(all.body).toMatchObject({ page: 1, pageSize: 25, total: 5, totalPages: 1 });
    expect(labels(all)).toEqual(['Update 2025-10-03', 'Hotfix 2024-05-14', 'Patch 15', 'Patch 10', 'Patch 9']);

    const oldest = await call('GET', '/api/v2/admin/game-builds?sort=released&dir=asc&pageSize=2&page=2', admin);
    expect(oldest.body).toMatchObject({ page: 2, pageSize: 2, total: 5, totalPages: 3 });
    expect(labels(oldest)).toEqual(['Patch 15', 'Hotfix 2024-05-14']);

    // Natural order: Patch 9 before Patch 10.
    const byLabel = await call('GET', '/api/v2/admin/game-builds?sort=label&dir=asc', admin);
    expect(labels(byLabel)).toEqual(['Hotfix 2024-05-14', 'Patch 9', 'Patch 10', 'Patch 15', 'Update 2025-10-03']);

    expect(labels(await call('GET', '/api/v2/admin/game-builds?q=patch', admin))).toEqual([
      'Patch 15',
      'Patch 10',
      'Patch 9',
    ]);
    expect(labels(await call('GET', '/api/v2/admin/game-builds?q=2022', admin))).toEqual(['Update 2025-10-03']);
    expect(labels(await call('GET', '/api/v2/admin/game-builds?breaking=1', admin))).toEqual(['Patch 15']);
    expect(labels(await call('GET', '/api/v2/admin/game-builds?current=1', admin))).toEqual(['Update 2025-10-03']);
    expect((await call('GET', '/api/v2/admin/game-builds?current=0', admin)).body.total).toBe(4);
    expect(labels(await call('GET', '/api/v2/admin/game-builds?source=steam', admin))).toEqual(['Update 2025-10-03']);
    expect((await call('GET', '/api/v2/admin/game-builds?source=manual', admin)).body.total).toBe(4);
    const none = await call('GET', '/api/v2/admin/game-builds?q=nothing-like-this', admin);
    expect(none.body).toMatchObject({ items: [], total: 0, totalPages: 0, page: 1 });
    // `%` and `_` are plain characters in a search.
    expect((await call('GET', '/api/v2/admin/game-builds?q=%25', admin)).body.total).toBe(0);
    // A page beyond the end shows the last one.
    expect((await call('GET', '/api/v2/admin/game-builds?pageSize=2&page=9', admin)).body.page).toBe(3);
    expect((await call('GET', '/api/v2/admin/game-builds?pageSize=500', admin)).status).toBe(422);
  });
});

describe('Steam sync', () => {
  it('reports "never" before the first check', async () => {
    const res = await call('GET', '/api/v2/admin/game-builds/steam', admin);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      appId: 1326470,
      status: 'never',
      lastAttemptAt: null,
      lastError: null,
      consecutiveFailures: 0,
      buildId: null,
      gameBuild: null,
    });
    expect((await call('GET', '/api/v2/admin/game-builds/steam', ranger)).status).toBe(403);
  });

  it('shows the stored state', async () => {
    await exec(
      db,
      `INSERT INTO "SiteSetting" ("key", "value") VALUES ('steamSync', $1::jsonb)
       ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value"`,
      [
        JSON.stringify({
          status: 'failed',
          lastAttemptAt: '2026-10-06T10:00:00.000Z',
          lastSuccessAt: '2026-10-06T09:30:00.000Z',
          lastError: 'HTTP 503',
          consecutiveFailures: 2,
          nextAttemptAt: '2026-10-06T11:40:00.000Z',
          buildId: '20228174',
          buildUpdatedAt: '2025-10-03T18:44:52.000Z',
          lastResult: 'unchanged',
          gameBuildId: 5,
          label: 'Update 2025-10-03',
        }),
      ],
    );
    const res = await call('GET', '/api/v2/admin/game-builds/steam', admin);
    expect(res.body).toMatchObject({
      status: 'failed',
      lastError: 'HTTP 503',
      consecutiveFailures: 2,
      nextAttemptAt: '2026-10-06T11:40:00.000Z',
      gameBuild: { id: 5, label: 'Update 2025-10-03' },
    });
  });

  it('enqueues one forced sync at a time and only for admins', async () => {
    expect((await call('POST', '/api/v2/admin/game-builds/steam/sync', ranger)).status).toBe(403);
    const first = await call('POST', '/api/v2/admin/game-builds/steam/sync', admin);
    expect(first.status).toBe(202);
    expect(first.body).toEqual({ queued: true });
    const second = await call('POST', '/api/v2/admin/game-builds/steam/sync', admin);
    expect(second.status).toBe(202);
    expect(second.body).toEqual({ queued: false });
    const jobs = await exec(
      db,
      `SELECT data FROM pgboss.job WHERE name = 'steam.sync' AND state IN ('created', 'retry', 'active')`,
    );
    expect(jobs.rows).toHaveLength(1);
    expect(jobs.rows[0]?.data).toEqual({ force: true });
  });
});

describe('GET /game-builds (public)', () => {
  it('lists every build, the newest N, or those matching a label', async () => {
    const all = await call('GET', '/api/v2/game-builds', null);
    expect(all.status).toBe(200);
    expect(labels(all)).toEqual(['Update 2025-10-03', 'Hotfix 2024-05-14', 'Patch 15', 'Patch 10', 'Patch 9']);
    expect(all.body.items[0]).toMatchObject({ isCurrent: true, isBreaking: false, steamBuildId: '20228174' });
    expect(labels(await call('GET', '/api/v2/game-builds?limit=2', null))).toEqual([
      'Update 2025-10-03',
      'Hotfix 2024-05-14',
    ]);
    expect(labels(await call('GET', '/api/v2/game-builds?q=patch&limit=2', null))).toEqual(['Patch 15', 'Patch 10']);
    expect((await call('GET', '/api/v2/game-builds?limit=0', null)).status).toBe(422);
  });
});
