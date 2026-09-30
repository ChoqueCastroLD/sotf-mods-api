/**
 * WP-31 acceptance (downloads): exact `Location` for legacy keys (space, apostrophe, `+`, `()`,
 * `/`), the redirect headers, what counts (HEAD, `Range`, bots, empty UA, prefetch, the 61st
 * request of a minute), the rows and aggregates written by the flush, 404/410, the legacy aliases,
 * the internal resolve of the web route and "My downloads" — against PostgreSQL 16.
 */
import { SESSION_COOKIE } from '@sotf/contracts/auth';
import { ipHash, utcDay } from '@sotf/core';
import { createSession } from '@sotf/core/auth/index';
import { createFactories, type Factories } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { downloadsRuntimeOf } from './runtime.ts';
import { waitUntilServing } from './test-helpers.ts';

const R2 = 'https://r2.test.sotf-mods.com';
const CHROME =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36';

let t: TestApp;
let f: Factories;
let ipCounter = 10;

/** A fresh client IP per scenario (the soft limit is per IP and per minute). */
function nextIp(): string {
  ipCounter += 1;
  return `203.0.113.${ipCounter}`;
}

async function flush(): Promise<void> {
  const runtime = downloadsRuntimeOf(t.app.platform);
  if (!runtime) throw new Error('downloads runtime missing');
  await runtime.counter.flush();
}

async function rows<T = Record<string, unknown>>(query: ReturnType<typeof sql>): Promise<T[]> {
  const result = await t.db.db.execute(query);
  return result.rows as T[];
}

async function count(query: ReturnType<typeof sql>): Promise<number> {
  const [row] = await rows<{ n: string | number }>(query);
  return Number(row?.n ?? 0);
}

interface Fixture {
  userSlug: string;
  modId: number;
  modSlug: string;
  manifestId: string;
  versionId: number;
  version: string;
  key: string;
}

async function modWithKey(
  key: string,
  overrides: { slug?: string; version?: string; name?: string } = {},
): Promise<Fixture> {
  const owner = await f.user();
  const slug = overrides.slug ?? `mod-${owner.id}`;
  const version = overrides.version ?? '1.0.0';
  const { mod, version: v } = await f.modWithVersion(
    { userId: owner.id, slug, manifestId: `Manifest${owner.id}`, name: overrides.name ?? `Mod ${owner.id}` },
    { version, storageKey: key, downloadUrl: `${R2}/${key}`, filename: key },
  );
  return {
    userSlug: owner.slug,
    modId: mod.id,
    modSlug: slug,
    manifestId: mod.manifestId,
    versionId: v.id,
    version,
    key,
  };
}

beforeAll(async () => {
  t = await buildTestApp({ env: { R2_PUBLIC_BASE_URL: R2 } });
  f = createFactories(t.db.db);
  await waitUntilServing(t.app);
});

afterAll(async () => {
  await t?.close();
});

describe('302 to R2 with the key encoded per segment', () => {
  const cases: Array<[string, string]> = [
    ['1790458408372_arctic fox savage.zip', '1790458408372_arctic%20fox%20savage.zip'],
    ["1775413983720_axel's-mod-menu_1.3.8.zip", "1775413983720_axel's-mod-menu_1.3.8.zip"],
    ['1765726049138_virginia-wardrobe-18+_0.0.4.zip', '1765726049138_virginia-wardrobe-18%2B_0.0.4.zip'],
    ['1734_skeletal-chainsaw(alpha)_1.1.5.zip', '1734_skeletal-chainsaw(alpha)_1.1.5.zip'],
    ['download/1722123985521_virginia wardrobe_0.0.3.zip', 'download/1722123985521_virginia%20wardrobe_0.0.3.zip'],
  ];

  it.each(cases)('%s', async (key, encoded) => {
    const fx = await modWithKey(key);
    const expected = `${R2}/${encoded}`;
    const ip = nextIp();
    const headers = { 'cf-connecting-ip': ip, 'user-agent': CHROME };

    const v2 = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${fx.versionId}/download`, headers });
    const legacy = await t.app.inject({
      method: 'GET',
      url: `/api/mods/${encodeURIComponent(fx.manifestId)}/download/${fx.version}?ip=1.2.3.4&agent=x`,
      headers,
    });
    const legacySlug = await t.app.inject({
      method: 'GET',
      url: `/api/mods/slug/${fx.userSlug}/${fx.modSlug}/download/${fx.version}`,
      headers,
    });
    for (const res of [v2, legacy, legacySlug]) {
      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(expected);
      expect(res.headers['cache-control']).toBe('no-store, private');
      expect(res.headers['x-robots-tag']).toBe('noindex, nofollow');
      expect(res.headers['referrer-policy']).toBe('no-referrer');
      expect(res.headers['cloudflare-cdn-cache-control']).toBeUndefined();
    }

    const internal = await t.app.inject({
      method: 'GET',
      url: `/internal/downloads/resolve?user=${fx.userSlug}&slug=${fx.modSlug}&version=${fx.version}`,
      headers: { ...t.internal(), ...headers },
    });
    expect(internal.statusCode).toBe(200);
    expect(internal.json()).toEqual({
      status: 302,
      location: expected,
      reason: 'ok',
      counted: true,
      modId: fx.modId,
      versionId: fx.versionId,
    });
    await flush();
    // Four counted GETs (v2, legacy by manifest, legacy by slug, web) from the same IP: one unique.
    const [version] = await rows<{ downloadsCount: number; uniqueDownloadsCount: number }>(
      sql`SELECT "downloadsCount", "uniqueDownloadsCount" FROM "ModVersion" WHERE "id" = ${fx.versionId}`,
    );
    expect(version).toEqual({ downloadsCount: 4, uniqueDownloadsCount: 1 });
  });

  it('never answers 301, even for tolerant slug resolution (latest/undefined, wrong user, case)', async () => {
    const fx = await modWithKey('mods/1/2/tolerant-1.0.0.zip', { slug: 'tolerant-mod' });
    await f.modVersion({ modId: fx.modId, version: '0.9.0', isLatest: false, storageKey: 'mods/1/1/old.zip' });
    const headers = { 'cf-connecting-ip': nextIp(), 'user-agent': '' };
    for (const url of [
      `/api/mods/slug/undefined/tolerant-mod/download/latest`,
      `/api/mods/slug/someone-else/Tolerant-Mod/download/undefined`,
      `/api/mods/slug/${fx.userSlug}/tolerant-mod/download/1.0.0`,
    ]) {
      const res = await t.app.inject({ method: 'GET', url, headers });
      expect(res.statusCode, url).toBe(302);
      expect(res.headers.location).toBe(`${R2}/mods/1/2/tolerant-1.0.0.zip`);
    }
    const old = await t.app.inject({
      method: 'GET',
      url: `/api/mods/slug/${fx.userSlug}/tolerant-mod/download/0.9.0`,
      headers,
    });
    expect(old.headers.location).toBe(`${R2}/mods/1/1/old.zip`);
  });

  it('derives the key from the legacy downloadUrl when storageKey is not filled yet', async () => {
    const owner = await f.user();
    const { version } = await f.modWithVersion(
      { userId: owner.id, slug: `nokey-${owner.id}` },
      {
        storageKey: null,
        downloadUrl: "https://r2.sotf-mods.com/1766549349465_Regi's%20Modding%20Library.zip",
      },
    );
    const res = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${version.id}/download` });
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe(`${R2}/1766549349465_Regi's%20Modding%20Library.zip`);
  });
});

describe('what counts', () => {
  async function scenario(
    requests: Array<{ method?: 'GET' | 'HEAD'; headers?: Record<string, string> }>,
  ): Promise<{ fx: Fixture; statuses: number[]; counted: number }> {
    const fx = await modWithKey(`mods/count/${Math.random().toString(36).slice(2)}.zip`);
    const ip = nextIp();
    const statuses: number[] = [];
    for (const r of requests) {
      const res = await t.app.inject({
        method: r.method ?? 'GET',
        url: `/api/v2/versions/${fx.versionId}/download`,
        headers: { 'cf-connecting-ip': ip, ...r.headers },
      });
      statuses.push(res.statusCode);
    }
    await flush();
    const counted = await count(sql`SELECT count(*) AS n FROM "ModDownload" WHERE "modVersionId" = ${fx.versionId}`);
    return { fx, statuses, counted };
  }

  it('HEAD redirects but does not count', async () => {
    const { statuses, counted } = await scenario([{ method: 'HEAD', headers: { 'user-agent': CHROME } }]);
    expect(statuses).toEqual([302]);
    expect(counted).toBe(0);
  });

  it('Range: bytes=100- does not count; bytes=0- does', async () => {
    const partial = await scenario([{ headers: { 'user-agent': CHROME, range: 'bytes=100-' } }]);
    expect(partial).toMatchObject({ statuses: [302], counted: 0 });
    const full = await scenario([{ headers: { 'user-agent': CHROME, range: 'bytes=0-' } }]);
    expect(full).toMatchObject({ statuses: [302], counted: 1 });
  });

  it('declared bots and prefetches do not count; the empty User-Agent does', async () => {
    const bot = await scenario([{ headers: { 'user-agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' } }]);
    expect(bot).toMatchObject({ statuses: [302], counted: 0 });
    const prefetch = await scenario([{ headers: { 'user-agent': CHROME, 'sec-purpose': 'prefetch' } }]);
    expect(prefetch).toMatchObject({ statuses: [302], counted: 0 });
    const empty = await scenario([{ headers: { 'user-agent': '' } }, { headers: { 'user-agent': '  ' } }]);
    expect(empty).toMatchObject({ statuses: [302, 302], counted: 2 });
    const [row] = await rows<{ source: string; userAgent: string }>(
      sql`SELECT "source", "userAgent" FROM "ModDownload" WHERE "modVersionId" = ${empty.fx.versionId} LIMIT 1`,
    );
    expect(row).toEqual({ source: 'client', userAgent: '' });
  });

  it('the 61st request of a minute from one IP redirects but is not counted', async () => {
    const { statuses, counted } = await scenario(
      Array.from({ length: 61 }, () => ({ headers: { 'user-agent': CHROME } })),
    );
    expect(statuses).toHaveLength(61);
    expect(new Set(statuses)).toEqual(new Set([302]));
    expect(counted).toBe(60);
  });

  it('the internal resolve shares the per-IP soft limit and reports `counted`', async () => {
    const fx = await modWithKey('mods/internal/limit.zip');
    const headers = { ...t.internal(), 'cf-connecting-ip': nextIp(), 'user-agent': CHROME };
    const url = `/internal/downloads/resolve?user=${fx.userSlug}&slug=${fx.modSlug}&version=latest`;
    const results: boolean[] = [];
    for (let i = 0; i < 61; i += 1) {
      const res = await t.app.inject({ method: 'GET', url, headers });
      expect(res.json().status).toBe(302);
      results.push(res.json().counted as boolean);
    }
    expect(results.filter(Boolean)).toHaveLength(60);
    expect(results[60]).toBe(false);
    const head = await t.app.inject({
      method: 'GET',
      url: `${url}&method=HEAD`,
      headers: { ...headers, 'cf-connecting-ip': nextIp() },
    });
    expect(head.json()).toMatchObject({ status: 302, counted: false });
  });

  it('refuses the internal route without X-Internal-Auth', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/internal/downloads/resolve?user=a&slug=b&version=1' });
    expect(res.statusCode).toBe(403);
  });
});

describe('rows and aggregates written by the flush', () => {
  it('writes legacy-compatible rows, daily aggregates, counters and uniqueness', async () => {
    const fx = await modWithKey('mods/agg/agg-1.0.0.zip');
    const [before] = await rows<{ updatedAt: Date; downloads: number }>(
      sql`SELECT "updatedAt", "downloads" FROM "Mod" WHERE "id" = ${fx.modId}`,
    );
    const ipA = nextIp();
    const ipB = nextIp();
    const url = `/api/v2/versions/${fx.versionId}/download`;
    await t.app.inject({
      method: 'GET',
      url,
      headers: { 'cf-connecting-ip': ipA, 'user-agent': CHROME, 'cf-ipcountry': 'es' },
    });
    await t.app.inject({ method: 'GET', url, headers: { 'cf-connecting-ip': ipA, 'user-agent': CHROME } });
    await t.app.inject({ method: 'GET', url, headers: { 'cf-connecting-ip': ipB, 'user-agent': '' } });
    await t.app.inject({
      method: 'GET',
      url: `/internal/downloads/resolve?user=${fx.userSlug}&slug=${fx.modSlug}&version=${fx.version}`,
      headers: { ...t.internal(), 'cf-connecting-ip': ipB, 'user-agent': 'RedManager/1.2.0' },
    });
    await flush();

    const hashA = ipHash(t.env.APP_SECRET, ipA, utcDay(new Date()));
    const hashB = ipHash(t.env.APP_SECRET, ipB, utcDay(new Date()));
    const downloads = await rows<Record<string, unknown>>(sql`
      SELECT "ip", "userAgent", "ipHash", "country", "source", "userId", "isUnique"
        FROM "ModDownload" WHERE "modVersionId" = ${fx.versionId} ORDER BY "id"`);
    expect(downloads).toEqual([
      { ip: hashA, userAgent: CHROME, ipHash: hashA, country: 'ES', source: 'api', userId: null, isUnique: true },
      { ip: hashA, userAgent: CHROME, ipHash: hashA, country: null, source: 'api', userId: null, isUnique: false },
      { ip: hashB, userAgent: '', ipHash: hashB, country: null, source: 'client', userId: null, isUnique: true },
      {
        ip: hashB,
        userAgent: 'RedManager/1.2.0',
        ipHash: hashB,
        country: null,
        source: 'redmanager',
        userId: null,
        isUnique: false,
      },
    ]);
    // Never the IP in clear.
    expect(JSON.stringify(downloads)).not.toContain('203.0.113.');

    const daily = await rows(sql`
      SELECT "channel", "downloads", "uniqueDownloads" FROM "ModVersionDownloadDaily"
       WHERE "modVersionId" = ${fx.versionId} AND "day" = ${utcDay(new Date())}::date ORDER BY "channel"`);
    expect(daily).toEqual([
      { channel: 'api', downloads: 2, uniqueDownloads: 1 },
      { channel: 'client', downloads: 1, uniqueDownloads: 1 },
      { channel: 'redmanager', downloads: 1, uniqueDownloads: 0 },
    ]);
    expect(await count(sql`SELECT count(*) AS n FROM "DownloadUnique" WHERE "modVersionId" = ${fx.versionId}`)).toBe(2);
    const [after] = await rows<{ updatedAt: Date; downloads: number }>(
      sql`SELECT "updatedAt", "downloads" FROM "Mod" WHERE "id" = ${fx.modId}`,
    );
    expect(after?.downloads).toBe((before?.downloads ?? 0) + 4);
    expect(after?.updatedAt).toEqual(before?.updatedAt);
    const [version] = await rows(
      sql`SELECT "downloadsCount", "uniqueDownloadsCount" FROM "ModVersion" WHERE "id" = ${fx.versionId}`,
    );
    expect(version).toEqual({ downloadsCount: 4, uniqueDownloadsCount: 2 });

    // A second flush on the same day keeps adding to the same aggregate rows.
    await t.app.inject({ method: 'GET', url, headers: { 'cf-connecting-ip': ipA, 'user-agent': CHROME } });
    await flush();
    const [api] = await rows(sql`
      SELECT "downloads", "uniqueDownloads" FROM "ModVersionDownloadDaily"
       WHERE "modVersionId" = ${fx.versionId} AND "channel" = 'api'`);
    expect(api).toEqual({ downloads: 3, uniqueDownloads: 1 });
  });

  it('links web-route downloads to the user through the forwarded session cookie', async () => {
    const fx = await modWithKey('mods/user/web-linked.zip');
    const fan = await f.user();
    const { token } = await createSession(t.db.db, {
      userId: fan.id,
      passwordHash: fan.password,
      remember: true,
      ipHash: null,
      userAgent: null,
      now: new Date(),
    });
    const url = `/internal/downloads/resolve?user=${fx.userSlug}&slug=${fx.modSlug}&version=latest`;
    const signedIn = await t.app.inject({
      method: 'GET',
      url,
      headers: { ...t.internal(), 'user-agent': CHROME, cookie: `${SESSION_COOKIE}=${token}` },
    });
    expect(signedIn.json()).toMatchObject({ status: 302, counted: true });
    const bogus = await t.app.inject({
      method: 'GET',
      url,
      headers: { ...t.internal(), 'user-agent': CHROME, cookie: `${SESSION_COOKIE}=not-a-real-token` },
    });
    expect(bogus.json()).toMatchObject({ status: 302, counted: true });
    await flush();
    const users = await rows<{ userId: number | null }>(
      sql`SELECT "userId" FROM "ModDownload" WHERE "modVersionId" = ${fx.versionId} ORDER BY "id"`,
    );
    expect(users).toEqual([{ userId: fan.id }, { userId: null }]);
  });

  it('links signed-in downloads to the user unless the history is disabled', async () => {
    const fx = await modWithKey('mods/user/linked.zip');
    const fan = await f.user();
    const private_ = await f.user({ settings: { downloadHistory: false } });
    const url = `/api/v2/versions/${fx.versionId}/download`;
    await t.app.inject({ method: 'GET', url, headers: { ...t.as({ userId: fan.id }), 'user-agent': CHROME } });
    await t.app.inject({ method: 'GET', url, headers: { ...t.as({ userId: private_.id }), 'user-agent': CHROME } });
    await flush();
    const users = await rows<{ userId: number | null }>(
      sql`SELECT "userId" FROM "ModDownload" WHERE "modVersionId" = ${fx.versionId} ORDER BY "id"`,
    );
    expect(users).toEqual([{ userId: fan.id }, { userId: null }]);
  });
});

describe('404 and 410', () => {
  it('unknown mods and versions are 404 (problem for v2, legacy envelope for /api)', async () => {
    const fx = await modWithKey('mods/nf/nf.zip');
    const v2 = await t.app.inject({ method: 'GET', url: '/api/v2/versions/999999/download' });
    expect(v2.statusCode).toBe(404);
    expect(v2.headers['content-type']).toContain('application/problem+json');
    expect(v2.headers['cache-control']).toBe('no-store');

    for (const url of [
      `/api/mods/NoSuchManifest/download/1.0.0`,
      `/api/mods/${fx.manifestId}/download/9.9.9`,
      `/api/mods/slug/${fx.userSlug}/no-such-mod-anywhere/download/1.0.0`,
    ]) {
      const res = await t.app.inject({ method: 'GET', url });
      expect(res.statusCode, url).toBe(404);
      expect(res.json()).toEqual({ status: false, error: 'NOT_FOUND', message: 'No se encontró el recurso.' });
    }
    const internal = await t.app.inject({
      method: 'GET',
      url: `/internal/downloads/resolve?user=${fx.userSlug}&slug=${fx.modSlug}&version=9.9.9`,
      headers: t.internal(),
    });
    expect(internal.json()).toMatchObject({ status: 404, reason: 'version_not_found', location: null, counted: false });
  });

  it('file_missing and removed mods are 410; rejected mods and rejected versions are 404', async () => {
    const missing = await modWithKey('mods/gone/gone.zip');
    await t.db.db.execute(sql`UPDATE "ModVersion" SET "status" = 'file_missing' WHERE "id" = ${missing.versionId}`);
    const removed = await modWithKey('mods/gone/removed.zip');
    await t.db.db.execute(sql`UPDATE "Mod" SET "status" = 'removed' WHERE "id" = ${removed.modId}`);
    const rejected = await modWithKey('mods/gone/rejected.zip');
    await t.db.db.execute(sql`UPDATE "Mod" SET "status" = 'rejected' WHERE "id" = ${rejected.modId}`);
    const lostHost = await f.user();
    const { version: lost } = await f.modWithVersion(
      { userId: lostHost.id, slug: `lost-${lostHost.id}` },
      { storageKey: null, downloadUrl: 'https://legacy-files.example/download/lost.zip' },
    );

    const expectStatus = async (versionId: number, status: number) => {
      const res = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${versionId}/download` });
      expect(res.statusCode, `version ${versionId}`).toBe(status);
      expect(res.headers.location).toBeUndefined();
    };
    await expectStatus(missing.versionId, 410);
    await expectStatus(removed.versionId, 410);
    await expectStatus(rejected.versionId, 404);
    await expectStatus(lost.id, 410);

    const legacyGone = await t.app.inject({ method: 'GET', url: `/api/mods/${missing.manifestId}/download/1.0.0` });
    expect(legacyGone.statusCode).toBe(410);
    expect(legacyGone.json()).toMatchObject({ status: false, error: 'GONE' });

    const internal = await t.app.inject({
      method: 'GET',
      url: `/internal/downloads/resolve?user=${removed.userSlug}&slug=${removed.modSlug}&version=latest`,
      headers: t.internal(),
    });
    expect(internal.json()).toMatchObject({ status: 410, reason: 'mod_removed', counted: false });
    await flush();
    expect(
      await count(
        sql`SELECT count(*) AS n FROM "ModDownload" WHERE "modVersionId" IN (${missing.versionId}, ${removed.versionId}, ${rejected.versionId})`,
      ),
    ).toBe(0);
  });

  it('pending versions are downloadable only with passed checks; rejected versions never', async () => {
    const fx = await modWithKey('mods/pending/ok.zip');
    await t.db.db.execute(
      sql`UPDATE "ModVersion" SET "status" = 'pending', "checksStatus" = 'pending' WHERE "id" = ${fx.versionId}`,
    );
    const blocked = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${fx.versionId}/download` });
    expect(blocked.statusCode).toBe(404);
    await t.db.db.execute(sql`UPDATE "ModVersion" SET "checksStatus" = 'passed' WHERE "id" = ${fx.versionId}`);
    // Resolutions are cached for a few seconds; a fresh key shows the new state.
    const other = await t.app.inject({ method: 'GET', url: `/api/mods/${fx.manifestId}/download/${fx.version}` });
    expect(other.statusCode).toBe(302);
  });
});

describe('My downloads', () => {
  it('lists the last downloaded version per mod with updates, and clears', async () => {
    const me = await f.user();
    const a = await modWithKey('mods/hist/a-1.zip', { version: '1.0.0' });
    const b = await modWithKey('mods/hist/b-1.zip', { version: '2.0.0' });
    const headers = { ...t.as({ userId: me.id }), 'user-agent': CHROME };
    await t.app.inject({ method: 'GET', url: `/api/v2/versions/${a.versionId}/download`, headers });
    await t.app.inject({ method: 'GET', url: `/api/v2/versions/${a.versionId}/download`, headers });
    await t.app.inject({ method: 'GET', url: `/api/v2/versions/${b.versionId}/download`, headers });
    await flush();
    // A newer version of A appears after the download.
    await t.db.db.execute(sql`UPDATE "ModVersion" SET "isLatest" = false WHERE "id" = ${a.versionId}`);
    const newer = await f.modVersion({
      modId: a.modId,
      version: '1.1.0',
      isLatest: true,
      storageKey: 'mods/hist/a-2.zip',
      createdAt: new Date(Date.now() + 60_000),
    });

    const res = await t.app.inject({ method: 'GET', url: '/api/v2/me/downloads', headers: t.as({ userId: me.id }) });
    expect(res.statusCode).toBe(200);
    expect(res.headers['cache-control']).toContain('private');
    const body = res.json();
    expect(body.enabled).toBe(true);
    expect(body.updatesAvailable).toBe(1);
    expect(body.items).toHaveLength(2);
    const itemA = body.items.find((i: { mod: { id: number } }) => i.mod.id === a.modId);
    expect(itemA).toMatchObject({
      lastDownloaded: { versionId: a.versionId, version: '1.0.0' },
      current: { versionId: newer.id, version: '1.1.0' },
      hasUpdate: true,
      downloadsCount: 2,
      compat: { status: 'untested', works: 0, partial: 0, broken: 0, gameBuild: null },
    });
    expect(itemA.mod).toMatchObject({ id: a.modId, kind: 'mod', canonicalPath: `/mods/${a.userSlug}/${a.modSlug}` });
    const itemB = body.items.find((i: { mod: { id: number } }) => i.mod.id === b.modId);
    expect(itemB).toMatchObject({ hasUpdate: false, downloadsCount: 1, current: { versionId: b.versionId } });

    const anon = await t.app.inject({ method: 'GET', url: '/api/v2/me/downloads' });
    expect(anon.statusCode).toBe(401);

    const cleared = await t.app.inject({
      method: 'DELETE',
      url: '/api/v2/me/downloads',
      headers: { ...t.as({ userId: me.id }), ...t.sameOrigin() },
      payload: '{}',
    });
    expect(cleared.statusCode).toBe(204);
    const after = await t.app.inject({ method: 'GET', url: '/api/v2/me/downloads', headers: t.as({ userId: me.id }) });
    expect(after.json()).toEqual({ enabled: true, updatesAvailable: 0, items: [] });
    // The downloads themselves still count.
    expect(await count(sql`SELECT count(*) AS n FROM "ModDownload" WHERE "modVersionId" = ${a.versionId}`)).toBe(2);
  });

  it('reports a disabled history', async () => {
    const me = await f.user({ settings: { downloadHistory: false } });
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/me/downloads', headers: t.as({ userId: me.id }) });
    expect(res.json()).toEqual({ enabled: false, updatesAvailable: 0, items: [] });
  });
});
