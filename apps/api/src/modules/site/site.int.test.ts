// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk the JSON bodies of many different DTOs
/**
 * WP-33 public figures: `GET /site/stats` (download totals equal count("ModDownload"), legacy
 * orphan rows included), `GET /live/pulse`, `GET /mods/:id/live` and the zero-filled public
 * download series, against the small development seed.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, injectCalm, startSeededDb, waitUntilCalm } from '../catalog/__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;
const STACKMOD = 78;

async function get(url: string) {
  const res = await injectCalm(t.app, { url });
  return { status: res.statusCode, headers: res.headers, body: res.json() as Record<string, any> };
}

beforeAll(async () => {
  db = await startSeededDb();
  // Two fresh downloads of StackMod's latest version (as the download flush writes them).
  const version = await exec(db, `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 AND "isLatest"`, [STACKMOD]);
  for (const minutesAgo of [2, 20]) {
    await exec(
      db,
      `INSERT INTO "ModDownload" ("ip", "userAgent", "createdAt", "updatedAt", "modVersionId", "source")
       VALUES ('h', 'test', (now() AT TIME ZONE 'UTC') - ($2 || ' minutes')::interval, now() AT TIME ZONE 'UTC', $1, 'web')`,
      [version.rows[0].id, String(minutesAgo)],
    );
    await exec(
      db,
      `INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads", "uniqueDownloads")
       VALUES ($1, (now() AT TIME ZONE 'UTC')::date, 'web', 1, 1)
       ON CONFLICT ("modVersionId", "day", "channel") DO UPDATE SET "downloads" = "ModVersionDownloadDaily"."downloads" + 1`,
      [version.rows[0].id],
    );
  }
  t = await buildTestApp({ db });
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('site figures', () => {
  it('GET /site/stats: totals from the aggregates equal count("ModDownload")', async () => {
    const res = await get('/api/v2/site/stats');
    expect(res.status).toBe(200);
    expect(res.headers['cache-tag']).toBe('stats');
    const counts = await exec(
      db,
      `SELECT (SELECT count(*)::int FROM "ModDownload") AS downloads, (SELECT count(*)::int FROM "User") AS users`,
    );
    expect(res.body.downloads).toBe(counts.rows[0].downloads);
    expect(res.body.users).toBe(counts.rows[0].users);
    const mods = await get('/api/v2/mods?type=all&nsfw=1&pageSize=1');
    const builds = await get('/api/v2/mods?type=build&nsfw=1&pageSize=1');
    expect(res.body.builds).toBe(builds.body.total);
    expect(res.body.mods + res.body.builds).toBe(mods.body.total);
    expect(res.body.creators).toBeGreaterThan(40);
    expect(res.body.downloads7d).toBeGreaterThan(0);
    expect(res.body.downloads7d).toBeLessThanOrEqual(res.body.downloads);
  });

  it('GET /live/pulse: today, last hour, recent downloads and the latest release', async () => {
    const res = await get('/api/v2/live/pulse');
    expect(res.status).toBe(200);
    expect(res.headers['cloudflare-cdn-cache-control']).toBe('public, max-age=30, stale-while-revalidate=60');
    expect(res.body.downloadsLastHour).toBeGreaterThanOrEqual(2);
    const today = await exec(
      db,
      `SELECT count(*)::int AS n FROM "ModDownload" WHERE "createdAt" >= date_trunc('day', now() AT TIME ZONE 'UTC')`,
    );
    expect(res.body.downloadsToday).toBe(today.rows[0].n);
    expect(res.body.recent[0].mod.id).toBe(STACKMOD);
    expect(res.body.recent.length).toBeLessThanOrEqual(12);
    expect(res.body.recent.every((r: any) => r.mod.status === 'published' && !r.mod.nsfw)).toBe(true);
    expect(res.body.latestRelease).toMatchObject({ mod: { status: 'published' }, version: expect.any(String) });
  });

  it('GET /mods/:id/live: totals, last 24 h and followers', async () => {
    const res = await get(`/api/v2/mods/${STACKMOD}/live`);
    expect(res.status).toBe(200);
    const card = (await get(`/api/v2/mods/${STACKMOD}`)).body;
    expect(res.body.downloads).toBeGreaterThanOrEqual(card.downloads);
    expect(res.body.downloads24h).toBeGreaterThanOrEqual(2);
    const followers = await exec(db, `SELECT count(*)::int AS n FROM "ModFavorite" WHERE "modId" = $1`, [STACKMOD]);
    expect(res.body.followers).toBe(followers.rows[0].n);
    expect((await get('/api/v2/mods/999999/live')).status).toBe(404);
  });

  it('GET /mods/:id/stats/public: zero-filled daily and weekly series', async () => {
    const d30 = await get(`/api/v2/mods/${STACKMOD}/stats/public`);
    expect(d30.status).toBe(200);
    expect(d30.body).toMatchObject({ range: '30d', granularity: 'day' });
    expect(d30.body.series).toHaveLength(30);
    expect(d30.body.series[0].day).toBe(d30.body.from);
    expect(d30.body.series.at(-1).day).toBe(d30.body.to);
    expect(d30.body.series.at(-1).downloads).toBeGreaterThanOrEqual(2);
    const year = await get(`/api/v2/mods/${STACKMOD}/stats/public?range=1y`);
    expect(year.body.series).toHaveLength(365);
    const all = await get(`/api/v2/mods/${STACKMOD}/stats/public?range=all`);
    expect(all.body.granularity).toBe('week');
    expect(new Date(`${all.body.series[0].day}T00:00:00Z`).getUTCDay()).toBe(1);
    const total = all.body.series.reduce((sum: number, p: any) => sum + p.downloads, 0);
    const expected = await exec(
      db,
      `SELECT coalesce(sum(a."downloads"), 0)::int AS n FROM "ModVersionDownloadDaily" a
         JOIN "ModVersion" v ON v."id" = a."modVersionId" WHERE v."modId" = $1`,
      [STACKMOD],
    );
    expect(total).toBe(expected.rows[0].n);
    expect((await get(`/api/v2/mods/${STACKMOD}/stats/public?range=5y`)).status).toBe(422);
  });
});
