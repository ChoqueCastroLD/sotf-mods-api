/**
 * The legacy `/api/*` layer (WP-32) against a real PostgreSQL 16: exact envelopes and key order
 * (the contract schemas generated from the golden fixtures), the filters and quirks of
 * research/01 §2.3–§2.6, the v2 deviations of PLAN §5.5, Tier 2 deprecation headers, Tier 3 410s,
 * CORS, cache headers, the snake_case alias flag, the second host and the User-Agent/Origin log.
 */
import {
  LEGACY_GONE_BODY,
  LEGACY_RETIRED_ROUTES,
  LegacyCategoriesResponse,
  LegacyCheckResponse,
  LegacyCommentsResponse,
  LegacyDownloadStatsResponse,
  LegacyFeaturedBuildsResponse,
  LegacyFeaturedModsResponse,
  LegacyModDetailResponse,
  LegacyModFindResponse,
  LegacyModListResponse,
  LegacyStatsResponse,
  LegacyUserResponse,
  LegacyUserStatsResponse,
  validateLegacy,
} from '@sotf/contracts/legacy';
import { ManualClock } from '@sotf/core';
import { createFactories, type Factories } from '@sotf/db/testing';
import { sql } from 'drizzle-orm';
import type { FastifyInstance, InjectOptions, LightMyRequestResponse } from 'fastify';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { z } from 'zod';
import { createLegacyModule, LEGACY_SUNSET } from '../../src/legacy/index.ts';
import { RETIRED_ROUTES } from '../../src/legacy/retired.ts';
import { buildTestApp, type TestApp } from '../../src/testing.ts';

const NOW = '2026-10-10T12:00:00.000Z';
const clock = new ManualClock(NOW);

let t: TestApp;
let f: Factories;
const ids: Record<string, number> = {};

const legacyModule = () => createLegacyModule({ clock, cacheTtlMs: 0, usage: { flushMs: 0 } });

/**
 * `app.inject` that waits out `@fastify/under-pressure` 503s: the shared CI host can stall the event
 * loop for more than a second while containers start, which is load shedding, not the behaviour
 * under test.
 */
async function inject(app: FastifyInstance, options: InjectOptions): Promise<LightMyRequestResponse> {
  for (let attempt = 0; ; attempt += 1) {
    const res = await app.inject(options);
    if (res.statusCode !== 503 || !res.body.includes('under pressure') || attempt >= 40) return res;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
}

async function get(url: string, headers: Record<string, string> = {}) {
  const res = await inject(t.app, { method: 'GET', url, headers });
  return { res, body: res.body ? (JSON.parse(res.body) as Record<string, unknown>) : null };
}

function expectLegacy<S extends z.ZodType>(schema: S, body: unknown): z.output<S> {
  const result = validateLegacy(schema, body);
  if (!result.success) {
    throw new Error(
      `legacy contract violated:\n${JSON.stringify({ zod: result.zodIssues.slice(0, 5), keyOrder: result.keyOrder.slice(0, 5) }, null, 2)}`,
    );
  }
  return result.data;
}

function listIds(body: Record<string, unknown> | null): string[] {
  return ((body?.data ?? []) as Array<{ mod_id: string }>).map((m) => m.mod_id);
}

const at = (iso: string) => new Date(iso);
const BUILD = 'e215ede2e4d742398c72aaca62496c10';

beforeAll(async () => {
  t = await buildTestApp({ modules: [legacyModule()] });
  f = createFactories(t.db.db);
  const db = t.db.db;

  const imaxel = await f.user({
    name: 'ImAxel',
    slug: 'imaxel',
    isTrusted: true,
    createdAt: at('2023-09-22T06:13:49.867Z'),
  });
  const other = await f.user({
    name: 'Toni Macaroni',
    slug: 'tonimacaroni',
    imageUrl: 'https://r2.sotf-mods.com/toni.png',
  });
  const fan = await f.user({ name: 'Fan', slug: 'fan' });
  const gone = await f.user({ name: 'Gone', slug: 'gone-user', deletedAt: at('2026-01-01T00:00:00Z') });
  ids.imaxel = imaxel.id;
  ids.gone = gone.id;
  // The migrations seed the taxonomy (0025): reuse a category when it already exists.
  const category = async (slug: string, name: string, type: 'Mod' | 'Build') => {
    const found = (await db.execute(sql`SELECT "id" FROM "Category" WHERE "slug" = ${slug}`)).rows[0] as
      | { id: number }
      | undefined;
    return found ?? (await f.category({ name, slug, type }));
  };
  const misc = await category('misc', 'Misc', 'Mod');
  const qol = await category('qol', 'Quality of Life', 'Mod');
  await category('zz-test-bases', 'ZZ Test Bases', 'Build');

  const mk = async (
    name: string,
    over: Parameters<Factories['mod']>[0],
    versions: Array<Record<string, unknown>> = [],
  ) => {
    const m = await f.mod({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9']+/g, '-'),
      manifestId: name.replace(/\W/g, ''),
      ...over,
    });
    ids[name] = m.id;
    for (const v of versions) {
      const row = await f.modVersion({ modId: m.id, isLatest: false, ...v });
      ids[`${name}@${row.version}`] = row.id;
    }
    return m;
  };

  await mk(
    "Axel's Mod Menu",
    {
      manifestId: 'AxelModMenu',
      slug: "axel's-mod-menu",
      userId: imaxel.id,
      categoryId: misc.id,
      dependencies: 'SonsAxLib, Other',
      latestVersion: '1.0.10',
      lastWeekDownloads: 511,
      downloads: 117_719,
      favoritesCount: 2,
      averageRating: null,
      reviewsCount: null,
      lastReleasedAt: at('2026-04-05T18:33:04.942Z'),
      createdAt: at('2023-10-10T16:43:13.458Z'),
      imageUrl: "https://r2.sotf-mods.com/axel's-mod-menu_thumbnail.png",
    },
    [
      { version: '1.0.2', changelog: 'two', checksStatus: 'passed' },
      { version: '1.0.10', isLatest: true, changelog: 'ten', checksStatus: 'passed', downloadsCount: 42 },
      { version: '1.0.0', changelog: 'zero' },
      { version: '1.0.11', status: 'pending', changelog: 'under review' },
    ],
  );
  await db.execute(sql`INSERT INTO "ModImage" ("url", "isPrimary", "isThumbnail", "modId", "updatedAt")
    VALUES ('https://r2.sotf-mods.com/a.png', true, false, ${ids["Axel's Mod Menu"]}, now()),
           ('https://r2.sotf-mods.com/b.png', false, true, ${ids["Axel's Mod Menu"]}, now())`);
  await f.favorite({ userId: fan.id, modId: ids["Axel's Mod Menu"] as number });
  await f.favorite({ userId: other.id, modId: ids["Axel's Mod Menu"] as number });

  await mk(
    'SonsAxLib',
    { type: 'Library', userId: imaxel.id, categoryId: qol.id, lastReleasedAt: at('2026-03-01T00:00:00Z') },
    [{ version: '1.2.0', isLatest: true, checksStatus: 'passed' }],
  );
  await mk('Speed 100% Boost', { userId: other.id, lastReleasedAt: at('2026-02-01T00:00:00Z') }, [
    { version: '2.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('Kelvin Helper', { userId: other.id, lastReleasedAt: at('2026-02-01T00:00:00Z'), lastWeekDownloads: 900 }, [
    { version: '1.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('Spicy', { isNSFW: true, userId: other.id, lastReleasedAt: at('2026-01-15T00:00:00Z') }, [
    { version: '1.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('PendingOk', { status: 'pending', userId: other.id, lastReleasedAt: at('2026-05-01T00:00:00Z') }, [
    { version: '0.1.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('PendingNo', { status: 'pending', userId: other.id, lastReleasedAt: at('2026-05-02T00:00:00Z') }, [
    { version: '0.1.0', isLatest: true, checksStatus: 'pending' },
  ]);
  await mk('Archived', { status: 'archived', userId: other.id, lastReleasedAt: at('2025-01-01T00:00:00Z') }, [
    { version: '1.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('Unlisted', { status: 'unlisted', userId: other.id, lastReleasedAt: at('2025-01-02T00:00:00Z') }, [
    { version: '1.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk('Rejected', { status: 'rejected', userId: other.id }, [{ version: '1.0.0', isLatest: true }]);
  await mk('Removed', { status: 'removed', userId: other.id }, [{ version: '1.0.0', isLatest: true }]);
  await mk('Orphan Mod', { userId: null, lastReleasedAt: at('2024-01-01T00:00:00Z') }, [
    { version: '1.0.0', isLatest: true, checksStatus: 'passed' },
  ]);
  await mk(
    'Base Build',
    { type: 'Build', manifestId: 'e215ede2e4d742398c72aaca62496c10', userId: imaxel.id, lastWeekDownloads: 3 },
    [{ version: '019a1b2c-0000-7000-8000-000000000000', isLatest: true, checksStatus: 'passed' }],
  );

  // Comments: two top-level (one hidden), a reply, a reply by a deleted-account (null user).
  const c1 = await f.comment({
    modId: ids["Axel's Mod Menu"] as number,
    userId: fan.id,
    message: 'first',
    createdAt: at('2026-01-01T00:00:00Z'),
  });
  await f.comment({
    modId: ids["Axel's Mod Menu"] as number,
    userId: other.id,
    message: 'second',
    createdAt: at('2026-02-01T00:00:00Z'),
  });
  await f.comment({
    modId: ids["Axel's Mod Menu"] as number,
    userId: fan.id,
    message: 'hidden',
    isHidden: true,
    createdAt: at('2026-03-01T00:00:00Z'),
  });
  await f.comment({
    modId: ids["Axel's Mod Menu"] as number,
    userId: null,
    message: 'reply',
    replyId: c1.id,
    createdAt: at('2026-01-02T00:00:00Z'),
  });

  // Download aggregates (+ orphans) and a visible review.
  const axel10 = ids["Axel's Mod Menu@1.0.10"] as number;
  const axel2 = ids["Axel's Mod Menu@1.0.2"] as number;
  const build = ids['Base Build@019a1b2c-0000-7000-8000-000000000000'] as number;
  await db.execute(sql`INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads") VALUES
    (${axel10}, '2026-10-10', 'web', 5), (${axel10}, '2026-10-10', 'redmanager', 2), (${axel10}, '2026-10-05', 'web', 3),
    (${axel2}, '2026-10-03', 'web', 1), (${axel2}, '2026-10-02', 'web', 9), (${axel2}, '2026-09-01', 'web', 100),
    (${axel2}, '2026-10-04', 'web', 0), (${build}, '2026-10-09', 'web', 4)`);
  await db.execute(
    sql`INSERT INTO "SiteDownloadDaily" ("day", "channel", "downloads") VALUES ('2024-01-01', 'unknown', 434)`,
  );
  await f.review({ modId: ids["Axel's Mod Menu"] as number, userId: fan.id, rating: 4 });
  await f.review({ modId: ids["Axel's Mod Menu"] as number, userId: other.id, rating: 1, status: 'hidden' });
});

afterAll(async () => {
  await t?.close();
});

describe('GET /api/mods (Tier 1)', () => {
  it('answers the exact envelope, key order, content type, CORS and cache headers', async () => {
    const { res, body } = await get('/api/mods?&approved=true&orderby=newest&page=1&nsfw=false');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('application/json');
    expect(res.headers['access-control-allow-origin']).toBe('*');
    expect(res.headers['access-control-allow-credentials']).toBeUndefined();
    expect(res.headers['cache-control']).toBe('public, max-age=60');
    expect(res.headers['cloudflare-cdn-cache-control']).toBe('public, max-age=300, stale-while-revalidate=600');
    expect(res.headers['cache-tag']).toBe('legacy');
    expect(res.headers.deprecation).toBeUndefined();
    const data = expectLegacy(LegacyModListResponse, body);
    expect(data.meta).toEqual({ total: 4, page: 1, limit: 10, pages: 1, next_page: 1, prev_page: 1 });
    // Published `Mod`s only, newest first; the tie of 2026-02-01 is broken by id (desc).
    expect(listIds(body)).toEqual(['AxelModMenu', 'KelvinHelper', 'Speed100Boost', 'OrphanMod']);
  });

  it('serialises an item with the legacy quirks', async () => {
    const { body } = await get('/api/mods?modIds=AxelModMenu');
    const [item] = expectLegacy(LegacyModListResponse, body).data;
    expect(item).toMatchObject({
      mod_id: 'AxelModMenu',
      dependencies: ['SonsAxLib', 'Other'],
      type: 'Mod',
      latestVersion: '1.0.10',
      latestVersionSize: '',
      averageRating: 0,
      reviewsCount: 0,
      sourceUrl: null,
      lastReleasedAt: '2026-04-05T18:33:04.942Z',
      createdAt: '2023-10-10T16:43:13.458Z',
      userId: ids.imaxel,
      images: [
        { isPrimary: true, isThumbnail: false, url: 'https://r2.sotf-mods.com/a.png' },
        { isPrimary: false, isThumbnail: true, url: 'https://r2.sotf-mods.com/b.png' },
      ],
      user: { name: 'ImAxel', slug: 'imaxel', imageUrl: '', isTrusted: true },
      category: { name: 'Misc', slug: 'misc' },
      // The lowest version by string order (1.0.0 < 1.0.10 < 1.0.2), never the pending one.
      versions: [{ version: '1.0.0', isLatest: false }],
      _count: { favorites: 2 },
    });
  });

  it('applies the v2 approval semantics (deviations 1–3)', async () => {
    const approved = await get('/api/mods?approved=true&type=Both&limit=100');
    expect(listIds(approved.body).sort()).toEqual(
      ['AxelModMenu', BUILD, 'KelvinHelper', 'OrphanMod', 'SonsAxLib', 'Speed100Boost'].sort(),
    );
    const unapproved = await get('/api/mods?approved=false&type=Both&limit=100');
    expect(listIds(unapproved.body)).toEqual(['PendingOk']);
    const other = await get('/api/mods?approved=anything&type=Both');
    expect(listIds(other.body)).toEqual(['PendingOk']);
    const absent = await get('/api/mods?type=Both&limit=100');
    expect(listIds(absent.body).sort()).toEqual(
      [
        'Archived',
        'AxelModMenu',
        BUILD,
        'KelvinHelper',
        'OrphanMod',
        'PendingOk',
        'SonsAxLib',
        'Speed100Boost',
        'Unlisted',
      ].sort(),
    );
  });

  it('defaults to type=Mod unless modIds is given, and filters NSFW', async () => {
    const def = await get('/api/mods?limit=100');
    expect(listIds(def.body)).not.toContain('SonsAxLib');
    expect(listIds(def.body)).not.toContain(BUILD);
    expect(listIds(def.body)).not.toContain('Spicy');
    const lib = await get('/api/mods?type=Library');
    expect(listIds(lib.body)).toEqual(['SonsAxLib']);
    const unknownType = await get('/api/mods?type=Whatever');
    expect(listIds(unknownType.body)).toEqual([]);
    const modIds = await get('/api/mods?limit=5&modIds=AxelModMenu,%20SonsAxLib,e215ede2e4d742398c72aaca62496c10,Nope');
    expect(listIds(modIds.body).sort()).toEqual(
      ['AxelModMenu', 'SonsAxLib', 'e215ede2e4d742398c72aaca62496c10'].sort(),
    );
    const nsfw = await get('/api/mods?approved=true&nsfw=true');
    expect(listIds(nsfw.body)).toEqual(['Spicy']);
  });

  it('searches name, description and author name literally (ILIKE, wildcards escaped)', async () => {
    const byName = await get('/api/mods?search=KELVIN');
    expect(listIds(byName.body)).toEqual(['KelvinHelper']);
    const byAuthor = await get('/api/mods?search=macaroni&limit=100');
    expect(listIds(byAuthor.body)).toContain('Speed100Boost');
    expect(listIds(byAuthor.body)).not.toContain('AxelModMenu');
    const percent = await get('/api/mods?search=100%25');
    expect(listIds(percent.body)).toEqual(['Speed100Boost']);
    const underscore = await get('/api/mods?search=_');
    expect(listIds(underscore.body)).toEqual([]);
  });

  it('filters by author, favourites and category', async () => {
    expect(listIds((await get('/api/mods?userSlug=imaxel&type=Both')).body).sort()).toEqual(
      ['AxelModMenu', BUILD, 'SonsAxLib'].sort(),
    );
    expect(listIds((await get('/api/mods?userSlugFavorites=fan')).body)).toEqual(['AxelModMenu']);
    expect(listIds((await get('/api/mods?category=qol&type=Library')).body)).toEqual(['SonsAxLib']);
  });

  it('sorts by every orderby with id as tie-breaker', async () => {
    const byWeek = await get('/api/mods?orderby=most_downloaded_week&type=Both');
    expect(listIds(byWeek.body).slice(0, 3)).toEqual(['KelvinHelper', 'AxelModMenu', BUILD]);
    const oldest = await get('/api/mods?orderby=oldest');
    expect(listIds(oldest.body)[0]).toBe('OrphanMod');
    const ties = await get('/api/mods?orderby=newest&search=e');
    const tied = listIds(ties.body).filter((id) => id === 'Speed100Boost' || id === 'KelvinHelper');
    // Same lastReleasedAt: id desc (Kelvin Helper was created after Speed 100% Boost).
    expect(tied).toEqual(['KelvinHelper', 'Speed100Boost']);
    const unknown = await get('/api/mods?approved=true&orderby=bogus');
    expect(listIds(unknown.body)[0]).toBe('AxelModMenu');
  });

  it('paginates with the legacy meta arithmetic', async () => {
    const page2 = await get('/api/mods?type=Both&approved=true&limit=4&page=2');
    const data = expectLegacy(LegacyModListResponse, page2.body);
    expect(data.meta).toEqual({ total: 6, page: 2, limit: 4, pages: 2, next_page: 2, prev_page: 1 });
    expect(data.data).toHaveLength(2);
    const empty = await get('/api/mods?search=nothing-matches');
    expect((empty.body as { meta: unknown }).meta).toEqual({
      total: 0,
      page: 1,
      limit: 10,
      pages: 0,
      next_page: 0,
      prev_page: 1,
    });
  });

  it('never outputs null numbers or a null type (UpdatesChecker value fields)', async () => {
    const { body } = await get('/api/mods?modIds=OrphanMod');
    const [item] = expectLegacy(LegacyModListResponse, body).data;
    expect(item).toMatchObject({
      userId: 0,
      categoryId: 0,
      type: 'Mod',
      user: { name: '', slug: '', imageUrl: '', isTrusted: false },
      category: null,
    });
  });

  it('rejects invalid limit and page with 422 VALIDATION (deviation 6) and tolerates unknown keys', async () => {
    for (const q of ['limit=0', 'limit=1001', 'limit=abc', 'page=0', 'page=x', 'limit=1.5']) {
      const { res, body } = await get(`/api/mods?${q}`);
      expect(res.statusCode, q).toBe(422);
      expect(res.headers['content-type']).toBe('application/json');
      expect(body).toEqual({ status: false, error: 'VALIDATION', message: ': undefined' });
    }
    const tolerant = await get('/api/mods?&_t=123&=x&limit=1000');
    expect(tolerant.res.statusCode).toBe(200);
  });
});

describe('GET /api/mods/:mod_id (Tier 1)', () => {
  it('answers every visible version in descending string order, the raw dependencies and exact key order', async () => {
    const { res, body } = await get('/api/mods/AxelModMenu');
    expect(res.statusCode).toBe(200);
    expect(res.headers['cache-tag']).toBe(`legacy,mod:${ids["Axel's Mod Menu"]}`);
    const { data } = expectLegacy(LegacyModDetailResponse, body);
    expect(data.dependencies).toBe('SonsAxLib, Other');
    expect(data.versions.map((v) => v.version)).toEqual(['1.0.2', '1.0.10', '1.0.0']);
    expect(data.versions[1]).toMatchObject({ isLatest: true, changelog: 'ten', _count: { downloads: 42 } });
    expect(data.images).toEqual([{ url: 'https://r2.sotf-mods.com/a.png' }, { url: 'https://r2.sotf-mods.com/b.png' }]);
    expect(data._count).toEqual({ favorites: 2 });
    expect(Object.keys(data)).not.toContain('user_slug');
  });

  it('is case-sensitive, 404s rejected/removed/reserved ids with the Spanish literal and serves pending/archived', async () => {
    for (const id of ['axelmodmenu', 'Rejected', 'Removed', 'slug', 'featured/check', 'DoesNotExist123']) {
      const { res, body } = await get(`/api/mods/${id}`);
      expect(res.statusCode, id).toBe(404);
      expect(body).toEqual({ status: false, error: 'NOT_FOUND', message: 'No se encontró el recurso.' });
      expect(res.headers['cache-control']).toBe('no-store');
    }
    for (const id of ['PendingNo', 'PendingOk', 'Archived', 'Unlisted']) {
      expect((await get(`/api/mods/${id}`)).res.statusCode, id).toBe(200);
    }
  });

  it('answers the same on the second host (sotf-mods.com/api/*)', async () => {
    const a = await get('/api/mods/AxelModMenu', { host: 'api.sotf-mods.com' });
    const b = await get('/api/mods/AxelModMenu', { host: 'sotf-mods.com' });
    expect(b.res.statusCode).toBe(200);
    expect(b.res.body).toBe(a.res.body);
  });
});

describe('GET /api/mods/:mod_id/check (Tier 1)', () => {
  it('gives the three exact answers with node-semver gt', async () => {
    const outdated = await get('/api/mods/AxelModMenu/check?version=1.0.2');
    expect(outdated.res.body).toBe(
      '{"status":true,"newVersionAvailable":true,"message":"New version available","version":"1.0.10","changelog":"ten"}',
    );
    expectLegacy(LegacyCheckResponse, outdated.body);
    const current = await get('/api/mods/AxelModMenu/check?version=v1.0.10');
    expect(current.body).toMatchObject({ newVersionAvailable: false, message: 'No new version available' });
    const newer = await get('/api/mods/AxelModMenu/check?version=2.0.0');
    expect(newer.body).toMatchObject({ newVersionAvailable: false, message: 'No new version available' });
    for (const url of ['/api/mods/AxelModMenu/check', '/api/mods/AxelModMenu/check?version=']) {
      expect((await get(url)).body).toMatchObject({
        newVersionAvailable: false,
        message: 'Latest version',
        version: '1.0.10',
      });
    }
  });

  it('answers 422 for non-semver versions and builds, 404 for unknown mods', async () => {
    for (const url of [
      '/api/mods/AxelModMenu/check?version=notsemver',
      '/api/mods/e215ede2e4d742398c72aaca62496c10/check?version=1.0.0',
    ]) {
      const { res, body } = await get(url);
      expect(res.statusCode).toBe(422);
      expect(body).toMatchObject({ status: false, error: 'VALIDATION' });
    }
    expect((await get('/api/mods/DoesNotExist123/check?version=1.0.0')).res.statusCode).toBe(404);
    expect((await get('/api/mods/Removed/check?version=1.0.0')).res.statusCode).toBe(404);
  });
});

describe('Tier 2 reads', () => {
  const deprecated = (res: { headers: Record<string, unknown> }) => {
    expect(res.headers.deprecation).toBe('true');
    expect(res.headers.sunset).toBe(LEGACY_SUNSET.toUTCString());
    expect(res.headers.link).toBe('<https://sotf-mods.com/developers>; rel="deprecation"');
  };

  it('/api/mods/slug/:u/:s equals the detail and /api/mods/find returns the manifest id', async () => {
    const bySlug = await get("/api/mods/slug/imaxel/axel's-mod-menu");
    deprecated(bySlug.res);
    expect(bySlug.body).toEqual((await get('/api/mods/AxelModMenu')).body);
    const find = await get("/api/mods/find?userSlug=imaxel&mod_slug=axel's-mod-menu");
    expect(expectLegacy(LegacyModFindResponse, find.body).data).toEqual({ mod_id: 'AxelModMenu' });
    deprecated(find.res);
    const missing = await get('/api/mods/find?userSlug=imaxel');
    expect(missing.res.statusCode).toBe(422);
    expect((await get('/api/mods/find?userSlug=imaxel&mod_slug=nope')).res.statusCode).toBe(404);
  });

  it('/api/mods/featured and /api/builds/featured', async () => {
    const mods = await get('/api/mods/featured');
    deprecated(mods.res);
    const data = expectLegacy(LegacyFeaturedModsResponse, mods.body).data;
    expect(data.map((m) => m.mod_id)).toEqual(['KelvinHelper', 'AxelModMenu', 'OrphanMod', 'Speed100Boost']);
    expect(data[1]?.dependencies).toBe('SonsAxLib, Other');
    const builds = expectLegacy(LegacyFeaturedBuildsResponse, (await get('/api/builds/featured')).body).data;
    expect(builds.map((b) => b.mod_id)).toEqual(['e215ede2e4d742398c72aaca62496c10']);
  });

  it('/api/stats counts the orphan downloads and /api/stats/builds only builds', async () => {
    const stats = await get('/api/stats');
    deprecated(stats.res);
    expect(expectLegacy(LegacyStatsResponse, stats.body).data).toEqual({
      users: 4,
      mods: 13,
      downloads: 5 + 2 + 3 + 1 + 9 + 100 + 0 + 4 + 434,
      developers: 2,
    });
    expect(expectLegacy(LegacyStatsResponse, (await get('/api/stats/builds')).body).data).toEqual({
      users: 4,
      mods: 1,
      downloads: 4,
      developers: 1,
    });
  });

  it('/api/categories by type (default Mod), every category ordered by name', async () => {
    const all = (await t.db.db.execute(sql`SELECT "slug", "type" FROM "Category"`)).rows as Array<{
      slug: string;
      type: string;
    }>;
    const mods = expectLegacy(LegacyCategoriesResponse, (await get('/api/categories')).body).data;
    expect(mods.map((c) => c.slug).sort()).toEqual(
      all
        .filter((c) => c.type === 'Mod')
        .map((c) => c.slug)
        .sort(),
    );
    expect(mods.map((c) => c.slug)).toEqual(expect.arrayContaining(['misc', 'qol']));
    const names = mods.map((c) => c.name);
    expect(names).toEqual([...names].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));
    const builds = expectLegacy(LegacyCategoriesResponse, (await get('/api/categories?type=Build')).body).data;
    expect(builds.map((c) => c.slug)).toContain('zz-test-bases');
    expect(builds.map((c) => c.slug)).not.toContain('misc');
    expect((await get('/api/categories?type=')).body).toEqual((await get('/api/categories')).body);
    expect((await get('/api/categories?type=Nope')).body).toEqual({ status: true, data: [] });
  });

  it('/api/users/:slug and its stats (from the daily aggregates)', async () => {
    const user = await get('/api/users/imaxel');
    expect(expectLegacy(LegacyUserResponse, user.body).data).toEqual({
      name: 'ImAxel',
      slug: 'imaxel',
      imageUrl: '',
      isTrusted: true,
      createdAt: '2023-09-22T06:13:49.867Z',
    });
    expect(user.res.headers['cache-tag']).toBe(`legacy,user:${ids.imaxel}`);
    const stats = expectLegacy(LegacyUserStatsResponse, (await get('/api/users/imaxel/stats')).body).data;
    expect(stats).toEqual({
      modsCount: 3,
      totalDownloads: 5 + 2 + 3 + 1 + 9 + 100 + 4,
      downloadsLastDay: 7,
      downloadsLast7Days: 7 + 3 + 4,
      downloadsLast30Days: 7 + 3 + 1 + 9 + 4,
      totalFavorites: 2,
      totalReviews: 1,
      averageRating: 4,
    });
    for (const slug of ['nobody-xyz-123', 'gone-user']) {
      const missing = await get(`/api/users/${slug}`);
      expect(missing.res.statusCode).toBe(404);
      expect(missing.body).toEqual({ status: false, error: 'NOT_FOUND', message: 'No se encontró el recurso.' });
    }
  });

  it('/api/comments excludes hidden comments (deviation 7), newest first with replies oldest first', async () => {
    const res = await get(`/api/comments?mod_id=${ids["Axel's Mod Menu"]}`);
    const data = expectLegacy(LegacyCommentsResponse, res.body).data;
    expect(data.map((c) => c.message)).toEqual(['second', 'first']);
    expect(data[1]?.replies).toEqual([
      {
        id: expect.any(Number),
        message: 'reply',
        imageUrl: null,
        createdAt: '2026-01-02T00:00:00.000Z',
        isHidden: false,
        user: null,
      },
    ]);
    expect(data[0]?.user).toEqual({
      name: 'Toni Macaroni',
      slug: 'tonimacaroni',
      imageUrl: 'https://r2.sotf-mods.com/toni.png',
      isTrusted: false,
    });
    for (const q of ['', '?mod_id=', '?mod_id=abc', '?mod_id=1.5']) {
      const bad = await get(`/api/comments${q}`);
      expect(bad.res.statusCode, q).toBe(422);
      expect(bad.body).toMatchObject({ status: false, error: 'VALIDATION' });
    }
    expect((await get(`/api/comments?mod_id=${ids.Removed}`)).body).toEqual({ status: true, data: [] });
  });

  it('/api/mods/:mod_id/download-stats from the daily aggregates', async () => {
    const week = await get('/api/mods/AxelModMenu/download-stats?period=week&_t=1');
    deprecated(week.res);
    expect(expectLegacy(LegacyDownloadStatsResponse, week.body).data).toEqual([
      { date: '2026-10-03', count: 1 },
      { date: '2026-10-05', count: 3 },
      { date: '2026-10-10', count: 7 },
    ]);
    expect((await get(`/api/mods/${ids["Axel's Mod Menu"]}/download-stats`)).body).toEqual(week.body);
    const month = await get('/api/mods/AxelModMenu/download-stats?period=month');
    expect(month.body?.data as unknown[]).toHaveLength(4);
    const all = await get('/api/mods/AxelModMenu/download-stats?period=all');
    expect((all.body?.data as Array<{ date: string }> | undefined)?.[0]).toEqual({ date: '2026-09-01', count: 100 });
    const invalid = await get('/api/mods/AxelModMenu/download-stats?period=year');
    expect(invalid.res.statusCode).toBe(422);
    const unknown = await get('/api/mods/DoesNotExist123/download-stats');
    expect(unknown.res.statusCode).toBe(200);
    expect(unknown.res.body).toBe('{"status":false,"message":"Mod not found"}');
  });
});

describe('Tier 3 (retired → 410)', () => {
  const samplePath = (path: string) => path.replace(/:mod_id/g, 'AxelModMenu').replace(/\*$/, 'anything/here');

  it('answers every retired route and method with the exact GONE envelope', async () => {
    const exact = JSON.stringify(LEGACY_GONE_BODY);
    for (const route of RETIRED_ROUTES) {
      const methods =
        route.method === '*' ? (['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'] as const) : [route.method];
      for (const method of methods) {
        for (const payload of [undefined, '{"email":"a@b.c"}', '{broken']) {
          if (payload && (method === 'GET' || method === 'HEAD')) continue;
          const res = await inject(t.app, {
            method,
            url: samplePath(route.path),
            ...(payload
              ? { payload, headers: { 'content-type': 'application/json', origin: 'https://evil.example' } }
              : {}),
          });
          expect(res.statusCode, `${method} ${route.path}`).toBe(410);
          expect(res.headers['content-type']).toBe('application/json');
          expect(res.headers['cache-control']).toBe('no-store');
          if (method !== 'HEAD') expect(res.body, `${method} ${route.path}`).toBe(exact);
        }
      }
    }
    expect(LEGACY_RETIRED_ROUTES.length).toBeGreaterThanOrEqual(16);
  });

  it('answers retired multipart uploads without reading them', async () => {
    const res = await inject(t.app, {
      method: 'POST',
      url: '/api/mods/AxelModMenu/release',
      headers: { 'content-type': 'multipart/form-data; boundary=x' },
      payload: `--x\r\nContent-Disposition: form-data; name="modFile"; filename="m.zip"\r\n\r\n${'z'.repeat(2 * 1024 * 1024)}\r\n--x--`,
    });
    expect(res.statusCode).toBe(410);
  });

  it('keeps 404 for other methods and unknown paths under the same prefixes', async () => {
    for (const [method, url] of [
      ['POST', '/api/mods/AxelModMenu/details'],
      ['PUT', '/api/mods/upload'],
      ['GET', '/api/mods/a/b/c'],
      ['GET', '/api/users/imaxel/other'],
    ] as const) {
      const res = await inject(t.app, { method, url });
      expect(res.statusCode, `${method} ${url}`).toBe(404);
      expect(res.body).toBe('{"status":false,"error":"NOT_FOUND","message":"No se encontró el recurso."}');
    }
  });

  it('answers CORS preflights with 204 (GET, HEAD, OPTIONS; *, no credentials; 24 h)', async () => {
    for (const url of ['/api/auth/login', '/api/mods', '/api/kelvinseek/prompt']) {
      const res = await inject(t.app, {
        method: 'OPTIONS',
        url,
        headers: { origin: 'https://tauri.localhost', 'access-control-request-method': 'GET' },
      });
      expect(res.statusCode, url).toBe(204);
      expect(res.headers['access-control-allow-origin']).toBe('*');
      expect(res.headers['access-control-allow-methods']).toBe('GET, HEAD, OPTIONS');
      expect(res.headers['access-control-max-age']).toBe('86400');
      expect(res.headers['access-control-allow-credentials']).toBeUndefined();
    }
  });
});

describe('flags and logging', () => {
  it('adds the snake_case aliases after the legacy keys only with LEGACY_SNAKE_ALIASES=true', async () => {
    const aliased = await buildTestApp({ db: t.db, env: { LEGACY_SNAKE_ALIASES: 'true' }, modules: [legacyModule()] });
    try {
      const list = JSON.parse((await inject(aliased.app, { method: 'GET', url: '/api/mods?modIds=AxelModMenu' })).body);
      const item = list.data[0] as Record<string, unknown>;
      expect(Object.keys(item).slice(-9)).toEqual([
        '_count',
        'user_slug',
        'user_name',
        'user_image_url',
        'category_slug',
        'category_name',
        'short_description',
        'latest_version',
        'favorites',
      ]);
      expect(item).toMatchObject({
        user_slug: 'imaxel',
        latest_version: '1.0.10',
        category_slug: 'misc',
        favorites: 2,
      });
      // The strict contract schema rejects the extra keys: the aliases are an opt-in rescue.
      expect(validateLegacy(LegacyModListResponse, list).success).toBe(false);
      const detail = JSON.parse((await inject(aliased.app, { method: 'GET', url: '/api/mods/AxelModMenu' })).body);
      expect(detail.data.user_slug).toBe('imaxel');
    } finally {
      await aliased.app.close();
    }
  });

  it('aggregates User-Agent and Origin per route and day in AnalyticsEvent(legacy_call)', async () => {
    const logged = await buildTestApp({ db: t.db, modules: [legacyModule()] });
    const call = (url: string, headers: Record<string, string>) => inject(logged.app, { method: 'GET', url, headers });
    await call('/api/mods?page=1', { 'user-agent': 'UpdatesChecker', origin: '' });
    await call('/api/mods?page=2', { 'user-agent': 'UpdatesChecker' });
    await call('/api/mods/AxelModMenu', { 'user-agent': 'tauri', origin: 'tauri://localhost' });
    await call('/api/auth/check', { 'user-agent': 'old-site' });
    await logged.app.close();
    const again = await buildTestApp({ db: t.db, modules: [legacyModule()] });
    await inject(again.app, { method: 'GET', url: '/api/mods?page=3', headers: { 'user-agent': 'UpdatesChecker' } });
    await again.app.close();
    const rows = (
      await t.db.db.execute(
        sql`SELECT "path", "props" FROM "AnalyticsEvent" WHERE "kind" = 'legacy_call' ORDER BY "path", "id"`,
      )
    ).rows as Array<{ path: string; props: Record<string, unknown> }>;
    const byKey = new Map(rows.map((r) => [`${r.path}|${r.props.ua}|${r.props.status}`, r.props]));
    expect(byKey.get('/api/mods|UpdatesChecker|2xx')).toMatchObject({ count: 3, origin: '', method: 'GET' });
    expect(byKey.get('/api/mods/:mod_id|tauri|2xx')).toMatchObject({ count: 1, origin: 'tauri://localhost' });
    expect(byKey.get('/api/auth/*|old-site|4xx')).toMatchObject({ count: 1 });
    // One row per route/method/status class/ua/origin and day, whatever the number of processes.
    expect(
      rows.filter((r) => r.path === '/api/mods' && r.props.ua === 'UpdatesChecker' && r.props.status === '2xx'),
    ).toHaveLength(1);
    expect(rows.every((r) => r.props.day === NOW.slice(0, 10))).toBe(true);
    expect(JSON.stringify(rows)).not.toContain('page=');
  });
});
