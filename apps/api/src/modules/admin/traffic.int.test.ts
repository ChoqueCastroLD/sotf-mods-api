// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Owner dashboard (`GET /api/v2/admin/traffic`): the hourly rollup of page views (by page type,
 * signed-in or guest, referrer…), SotF Mods Manager activity and the owner-only gate.
 */
import { rollupSiteTraffic } from '@sotf/core/analytics/index';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let owner: TestUser;
let otherAdmin: TestUser;

const call = (method: Method, url: string, who: TestUser | null) =>
  callAs(t, method, url, who) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  owner = await createTestUser(db, 'ShokoCC', 'admin');
  otherAdmin = await createTestUser(db, 'traffic-admin', 'admin');
  t = await buildTestApp({ db });
  const now = new Date().toISOString();
  await exec(
    db,
    `INSERT INTO "AnalyticsEvent" ("ts", "kind", "path", "locale", "referrerDomain", "country", "device", "visitorHash", "props")
     VALUES ($1, 'page_view', '/es/mods/imaxel/axel', 'es', 'google', 'PE', 'mobile', 'v1', NULL),
            ($1, 'page_view', '/mods/imaxel/axel', 'en', NULL, 'US', 'desktop', 'v2', '{"auth":"1"}'),
            ($1, 'page_view', '/', 'en', NULL, 'US', 'desktop', 'v2', '{"auth":"1"}'),
            ($1, 'page_view', '/modpacks', 'en', 'discord', 'US', 'desktop', 'v3', NULL),
            ($1, 'manager_download_click', '/', 'en', NULL, 'US', 'desktop', 'v3', '{"placement":"home"}'),
            ($1, 'manager_active', '/', NULL, NULL, 'US', 'desktop', 'm1', '{"version":"0.7.0"}'),
            ($1, 'manager_active', '/', NULL, NULL, 'MX', 'desktop', 'm2', '{"version":"0.6.0"}')`,
    [now],
  );
  await rollupSiteTraffic(db.db as never, new Date());
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('owner traffic dashboard', () => {
  it('only the site owner can read it', async () => {
    expect((await call('GET', '/api/v2/admin/traffic?range=7d', otherAdmin)).status).toBe(403);
    expect((await call('GET', '/api/v2/admin/traffic?range=7d', null)).status).toBe(401);
  });

  it('rolls up page views by type, signed-in state, referrer and the manager', async () => {
    const res = await call('GET', '/api/v2/admin/traffic?range=7d', owner);
    expect(res.status).toBe(200);
    const today = res.body.days.at(-1);
    expect(today.views).toBe(4);
    expect(today.visitors).toBe(3);
    expect(today.memberViews).toBe(2);
    expect(today.managerActive).toBe(2);
    expect(today.managerClicks).toBe(1);
    const keyOf = (dim: string) => Object.fromEntries(res.body.breakdowns[dim].map((r: any) => [r.key, r.views]));
    expect(keyOf('type')).toMatchObject({ mod: 2, home: 1, modpacks_list: 1 });
    expect(keyOf('auth')).toMatchObject({ member: 2, guest: 2 });
    expect(keyOf('referrer')).toMatchObject({ google: 1, discord: 1, direct: 2 });
    expect(keyOf('page')).toMatchObject({ '/mods/imaxel/axel': 2 });
    expect(keyOf('manager_version')).toMatchObject({ '0.7.0': 1, '0.6.0': 1 });
    expect(res.body.days).toHaveLength(7);
  });

  it('is idempotent', async () => {
    await rollupSiteTraffic(db.db as never, new Date());
    const res = await call('GET', '/api/v2/admin/traffic?range=7d', owner);
    expect(res.body.days.at(-1).views).toBe(4);
  });
});
