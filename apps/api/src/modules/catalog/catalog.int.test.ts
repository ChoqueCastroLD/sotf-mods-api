// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk the JSON bodies of many different DTOs
/**
 * WP-33 acceptance (catalog): `GET /mods` (defaults, types, filters with inclusion/exclusion,
 * facets, sorts, pagination), detail status and NSFW rules, semver ordering (BuildShare
 * 1.0.10 > 1.0.2), dependencies/dependents, related, taxonomy, creators, public profiles
 * (privacy), and the HTTP caching contract (Cache-Control, Cache-Tag, ETag/304, CORS, LRU
 * invalidation by `NOTIFY cache`), against the small development seed on PostgreSQL 16.
 */
import { publishCacheInvalidation } from '@sotf/core';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, injectCalm, startSeededDb, waitUntilCalm } from './__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;

// Mods of the public snapshot (ids are the production ids).
const SONS_AX_LIB = 19;
const AXEL_MOD_MENU = 20;
const NICKS_KELVIN_GPT = 64;
const KELVIN_GPT = 54;
const BUILDSHARE = 74;
const CUSTOM_STACKS = 75;
const STACKMOD = 78;
const RESTLESS_KELVIN = 95;
const LITF_IMPROVED_KELVIN = 284; // unapproved in the legacy → pending
const ALTERNATE_OUTFITS = 133; // unapproved → pending (stays unchecked)

let nsfwModId: number;
let removedModId: number;
let rejectedModId: number;
let unlistedModId: number;

async function get(url: string, headers: Record<string, string> = {}) {
  const res = await injectCalm(t.app, { url, headers });
  return { status: res.statusCode, headers: res.headers, body: res.json() as Record<string, any> };
}

beforeAll(async () => {
  db = await startSeededDb();
  // Fixtures on top of the seed (the seed has no v2-only data yet).
  await exec(
    db,
    `INSERT INTO "_ModToTag" ("A", "B")
     SELECT m.id, t.id FROM (VALUES (${STACKMOD}, 'inventory'), (${STACKMOD}, 'storage'), (${CUSTOM_STACKS}, 'inventory')) AS v(mod, slug)
       JOIN "Mod" m ON m.id = v.mod JOIN "Tag" t ON t.slug = v.slug`,
  );
  await exec(db, `UPDATE "ModVersion" SET "checksStatus" = 'passed' WHERE "modId" = $1`, [LITF_IMPROVED_KELVIN]);
  await exec(db, `UPDATE "Mod" SET "status" = 'archived', "successorModId" = $2 WHERE "id" = $1`, [
    NICKS_KELVIN_GPT,
    KELVIN_GPT,
  ]);
  const picks = await exec(
    db,
    `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND NOT "isNSFW" AND "type" = 'Mod'
       AND "id" NOT IN (${[SONS_AX_LIB, AXEL_MOD_MENU, KELVIN_GPT, BUILDSHARE, CUSTOM_STACKS, STACKMOD, RESTLESS_KELVIN].join(',')})
     ORDER BY "id" LIMIT 3`,
  );
  [removedModId, rejectedModId, unlistedModId] = picks.rows.map((r: { id: number }) => r.id) as [
    number,
    number,
    number,
  ];
  await exec(db, `UPDATE "Mod" SET "status" = 'removed' WHERE "id" = $1`, [removedModId]);
  await exec(db, `UPDATE "Mod" SET "status" = 'rejected' WHERE "id" = $1`, [rejectedModId]);
  await exec(db, `UPDATE "Mod" SET "status" = 'unlisted' WHERE "id" = $1`, [unlistedModId]);
  const nsfw = await exec(db, `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND "isNSFW" ORDER BY "id" LIMIT 1`);
  nsfwModId = nsfw.rows[0].id;
  t = await buildTestApp({ db });
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('GET /mods', () => {
  it('lists only published items by default (no pending, unlisted, archived, removed or NSFW)', async () => {
    const res = await get('/api/v2/mods?pageSize=100&sort=downloads');
    expect(res.status).toBe(200);
    const all: Array<Record<string, any>> = [];
    for (let page = 1; page <= res.body.totalPages; page++) {
      all.push(...(await get(`/api/v2/mods?pageSize=100&sort=downloads&page=${page}`)).body.items);
    }
    expect(all).toHaveLength(res.body.total);
    expect(new Set(all.map((m) => m.status))).toEqual(new Set(['published']));
    const ids = all.map((m) => m.id);
    for (const hidden of [
      LITF_IMPROVED_KELVIN,
      ALTERNATE_OUTFITS,
      NICKS_KELVIN_GPT,
      removedModId,
      rejectedModId,
      unlistedModId,
      nsfwModId,
    ]) {
      expect(ids).not.toContain(hidden);
    }
    const pending = await exec(db, `SELECT count(*)::int AS n FROM "Mod" WHERE "status" = 'pending'`);
    expect(pending.rows[0].n).toBe(28);
    expect(all.every((m) => m.nsfw === false)).toBe(true);
  });

  it('SonsAxLib is in type=library and type=all, not in type=mod', async () => {
    const lib = await get('/api/v2/mods?type=library&pageSize=100');
    expect(lib.body.items.map((m: any) => m.name)).toContain('SonsAxLib');
    expect(lib.body.items.every((m: any) => m.kind === 'library')).toBe(true);
    const all = await get('/api/v2/mods?type=all&pageSize=100&sort=downloads');
    const allIds: number[] = [];
    for (let page = 1; page <= all.body.totalPages; page++) {
      allIds.push(
        ...(await get(`/api/v2/mods?type=all&pageSize=100&sort=downloads&page=${page}`)).body.items.map(
          (m: any) => m.id,
        ),
      );
    }
    expect(allIds).toContain(SONS_AX_LIB);
    const mods = await get('/api/v2/mods?type=mod&pageSize=100');
    expect(mods.body.items.map((m: any) => m.id)).not.toContain(SONS_AX_LIB);
  });

  it('returns correct facets (disjunctive, with counts that match the filtered totals)', async () => {
    const base = await get('/api/v2/mods?type=all&facets=1&pageSize=1');
    const facets = base.body.facets;
    const kindTotal = facets.kind.reduce((s: number, b: any) => s + b.count, 0);
    expect(kindTotal).toBe(base.body.total);
    for (const bucket of facets.kind) {
      const r = await get(`/api/v2/mods?type=${bucket.value}&pageSize=1`);
      expect(r.body.total, `kind ${bucket.value}`).toBe(bucket.count);
    }
    for (const bucket of facets.category) {
      const r = await get(`/api/v2/mods?type=all&category=${bucket.value}&pageSize=1`);
      expect(r.body.total, `category ${bucket.value}`).toBe(bucket.count);
    }
    for (const bucket of facets.compat) {
      if (bucket.value !== 'works' && bucket.value !== 'untested') continue;
      const r = await get(`/api/v2/mods?type=all&compat=${bucket.value}&pageSize=1`);
      expect(r.body.total, `compat ${bucket.value}`).toBe(bucket.count);
    }
    expect(facets.tag).toEqual([
      { value: 'inventory', count: 2 },
      { value: 'storage', count: 1 },
    ]);
    // Selecting a kind keeps the other kinds in the facet (disjunctive) but narrows the others.
    const mods = await get('/api/v2/mods?type=mod&facets=1&pageSize=1');
    expect(mods.body.facets.kind).toEqual(facets.kind);
    const libraryCount = mods.body.facets.category.find((b: any) => b.value === 'library')?.count ?? 0;
    const allLibraryCategory = facets.category.find((b: any) => b.value === 'library')?.count ?? 0;
    expect(libraryCount).toBeLessThan(allLibraryCategory);
  });

  it('filters with inclusion and exclusion (legacy category slugs resolve)', async () => {
    const qol = await get('/api/v2/mods?category=quality-of-life&pageSize=1');
    const legacy = await get('/api/v2/mods?category=qol&pageSize=1');
    expect(qol.body.total).toBeGreaterThan(50);
    expect(legacy.body.total).toBe(qol.body.total);
    expect(qol.body.items[0].category.slug).toBe('quality-of-life');
    const all = await get('/api/v2/mods?pageSize=1');
    const noQol = await get('/api/v2/mods?excludeCategory=quality-of-life&pageSize=1');
    expect(noQol.body.total).toBe(all.body.total - qol.body.total);

    const inv = await get('/api/v2/mods?tag=inventory&sort=downloads');
    expect(inv.body.items.map((m: any) => m.id).sort()).toEqual([CUSTOM_STACKS, STACKMOD].sort());
    const both = await get('/api/v2/mods?tag=inventory&tag=storage');
    expect(both.body.items.map((m: any) => m.id)).toEqual([STACKMOD]);
    const excluded = await get('/api/v2/mods?tag=inventory&excludeTag=storage');
    expect(excluded.body.items.map((m: any) => m.id)).toEqual([CUSTOM_STACKS]);

    const author = await get('/api/v2/mods?author=ImAxel&type=all&pageSize=100');
    expect(author.body.total).toBeGreaterThan(5);
    expect(author.body.items.every((m: any) => m.userHandle === 'imaxel')).toBe(true);
    const verified = await get('/api/v2/mods?verified=1&pageSize=100');
    expect(verified.body.items.every((m: any) => m.verifiedCreator)).toBe(true);
  });

  it('includes NSFW with nsfw=1 and flags it', async () => {
    const res = await get('/api/v2/mods?nsfw=1&type=all&pageSize=100&sort=downloads');
    const ids: number[] = [];
    for (let page = 1; page <= res.body.totalPages; page++) {
      ids.push(
        ...(await get(`/api/v2/mods?nsfw=1&type=all&pageSize=100&sort=downloads&page=${page}`)).body.items.map(
          (m: any) => m.id,
        ),
      );
    }
    expect(ids).toContain(nsfwModId);
  });

  it('sorts and paginates', async () => {
    const byDownloads = await get('/api/v2/mods?sort=downloads&pageSize=10');
    const dl = byDownloads.body.items.map((m: any) => m.downloads);
    expect(dl).toEqual([...dl].sort((a: number, b: number) => b - a));
    const asc = await get('/api/v2/mods?sort=downloads&order=asc&pageSize=10');
    expect(asc.body.items[0].downloads).toBeLessThanOrEqual(asc.body.items[9].downloads);
    const updated = await get('/api/v2/mods?sort=updated&pageSize=10');
    const dates = updated.body.items.map((m: any) => m.lastReleasedAt);
    expect(dates).toEqual([...dates].sort().reverse());
    const page2 = await get('/api/v2/mods?sort=downloads&pageSize=10&page=2');
    expect(page2.body.items[0].id).not.toBe(byDownloads.body.items[0].id);
    expect(page2.body).toMatchObject({ page: 2, pageSize: 10, total: byDownloads.body.total });
    const beyond = await get('/api/v2/mods?page=500');
    expect(beyond.body.items).toEqual([]);
  });

  it('rejects invalid queries with 422', async () => {
    expect((await get('/api/v2/mods?sort=nope')).status).toBe(422);
    expect((await get('/api/v2/mods?pageSize=1000')).status).toBe(422);
  });
});

describe('mod detail and status rules', () => {
  it('serves a published mod by id, slug and manifest id', async () => {
    const byId = await get(`/api/v2/mods/${SONS_AX_LIB}`);
    expect(byId.status).toBe(200);
    expect(byId.body).toMatchObject({
      id: SONS_AX_LIB,
      kind: 'library',
      manifestId: 'SonsAxLib',
      canonicalPath: '/mods/imaxel/sonsaxlib',
      banners: [],
      noindex: false,
      author: { handle: 'imaxel' },
    });
    expect(byId.body.descriptionMd).toBeUndefined();
    expect(byId.body.alternates).toHaveLength(14);
    expect(byId.body.latestVersion.version).toBe('1.2.1');
    const bySlug = await get('/api/v2/mods/by-slug/imaxel/sonsaxlib');
    expect(bySlug.body.id).toBe(SONS_AX_LIB);
    const byManifest = await get('/api/v2/mods/by-manifest/SonsAxLib');
    expect(byManifest.body.id).toBe(SONS_AX_LIB);
    expect((await get('/api/v2/mods/by-manifest/sonsaxlib')).status).toBe(404);
    expect((await get("/api/v2/mods/by-slug/imaxel/axel's-mod-menu")).body.id).toBe(AXEL_MOD_MENU);
    expect((await get('/api/v2/mods/999999')).status).toBe(404);
  });

  it('pending: 404 without passed checks, 200 + banner + noindex with them', async () => {
    expect((await get(`/api/v2/mods/${ALTERNATE_OUTFITS}`)).status).toBe(404);
    const pending = await get(`/api/v2/mods/${LITF_IMPROVED_KELVIN}`);
    expect(pending.status).toBe(200);
    expect(pending.body).toMatchObject({ status: 'pending', noindex: true });
    expect(pending.body.banners).toContain('pending_review');
  });

  it('archived shows the banner and the successor; unlisted is noindex; removed 410; rejected 404', async () => {
    const archived = await get(`/api/v2/mods/${NICKS_KELVIN_GPT}`);
    expect(archived.status).toBe(200);
    expect(archived.body.banners).toContain('archived');
    expect(archived.body.successor).toMatchObject({ id: KELVIN_GPT, manifestId: 'KelvinGPT' });
    const unlisted = await get(`/api/v2/mods/${unlistedModId}`);
    expect(unlisted.status).toBe(200);
    expect(unlisted.body).toMatchObject({ noindex: true, banners: expect.arrayContaining(['unlisted']) });
    const removed = await get(`/api/v2/mods/${removedModId}`);
    expect(removed.status).toBe(410);
    expect(removed.body.code).toBe('GONE');
    expect(removed.headers['cache-control']).toBe('no-store');
    expect((await get(`/api/v2/mods/${rejectedModId}`)).status).toBe(404);
    expect((await get(`/api/v2/mods/${removedModId}/versions`)).status).toBe(410);
  });

  it('NSFW is reachable by URL with the nsfw banner', async () => {
    const res = await get(`/api/v2/mods/${nsfwModId}`);
    expect(res.status).toBe(200);
    expect(res.body.nsfw).toBe(true);
    expect(res.body.banners).toContain('nsfw');
  });
});

describe('versions, dependencies and related', () => {
  it('orders versions by semver: BuildShare 1.0.10 > 1.0.2', async () => {
    const res = await get(`/api/v2/mods/${BUILDSHARE}/versions`);
    expect(res.status).toBe(200);
    const versions = res.body.items.map((v: any) => v.version);
    expect(versions).toEqual(['1.0.10', '1.0.8', '1.0.7', '1.0.6', '1.0.4', '1.0.3', '1.0.2', '1.0.1', '1.0.0']);
    expect(versions.indexOf('1.0.10')).toBeLessThan(versions.indexOf('1.0.2'));
    const first = res.body.items[0];
    expect(first.downloadPath).toMatch(/^\/mods\/[^/]+\/buildshare\/download\/1\.0\.10$/);
    expect(first.downloadsCount).toBeGreaterThanOrEqual(0);
  });

  it('gets one version by id, string or latest', async () => {
    const list = (await get(`/api/v2/mods/${BUILDSHARE}/versions`)).body.items;
    const latest = await get(`/api/v2/mods/${BUILDSHARE}/versions/latest`);
    expect(latest.status).toBe(200);
    expect(latest.body.isLatest).toBe(true);
    const byString = await get(`/api/v2/mods/${BUILDSHARE}/versions/1.0.2`);
    expect(byString.body.version).toBe('1.0.2');
    const byId = await get(`/api/v2/mods/${BUILDSHARE}/versions/${list[3].id}`);
    expect(byId.body.id).toBe(list[3].id);
    expect((await get(`/api/v2/mods/${BUILDSHARE}/versions/9.9.9`)).status).toBe(404);
  });

  it('resolves dependencies against manifestId and lists dependents ("Required by")', async () => {
    const deps = await get(`/api/v2/mods/${AXEL_MOD_MENU}/dependencies`);
    expect(deps.status).toBe(200);
    expect(deps.body.items).toContainEqual(
      expect.objectContaining({
        manifestId: 'SonsAxLib',
        kind: 'required',
        state: 'ok',
        mod: expect.objectContaining({ id: SONS_AX_LIB }),
      }),
    );
    const dependents = await get(`/api/v2/mods/${SONS_AX_LIB}/dependents`);
    expect(dependents.body.items.map((m: any) => m.id)).toContain(AXEL_MOD_MENU);
    const detail = await get(`/api/v2/mods/${SONS_AX_LIB}`);
    expect(detail.body.dependentsCount).toBe(dependents.body.items.length);
  });

  it('marks dependencies that are not on the site as missing', async () => {
    const version = await exec(db, `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 AND "isLatest"`, [
      RESTLESS_KELVIN,
    ]);
    await exec(
      db,
      `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "kind") VALUES ($1, 'NotOnTheSite', 'optional')`,
      [version.rows[0].id],
    );
    await publishCacheInvalidation(t.db.db, [`mod:${RESTLESS_KELVIN}`]);
    await expect
      .poll(async () => (await get(`/api/v2/mods/${RESTLESS_KELVIN}/dependencies`)).body.items, { timeout: 10_000 })
      .toContainEqual({
        manifestId: 'NotOnTheSite',
        kind: 'optional',
        versionRange: null,
        state: 'missing',
        mod: null,
      });
  });

  it('suggests related mods of the same family', async () => {
    const res = await get(`/api/v2/mods/${STACKMOD}/related`);
    expect(res.status).toBe(200);
    const ids = res.body.items.map((m: any) => m.id);
    expect(ids).toContain(CUSTOM_STACKS);
    expect(ids).not.toContain(STACKMOD);
    expect(res.body.items.every((m: any) => m.kind !== 'build' && m.status === 'published' && !m.nsfw)).toBe(true);
  });
});

describe('taxonomy, creators and profiles', () => {
  it('lists active categories with i18n and counts (retired ones fold into their successor)', async () => {
    const res = await get('/api/v2/categories?kind=mod');
    const slugs = res.body.items.map((c: any) => c.slug);
    expect(slugs.slice(0, 12)).toEqual([
      'quality-of-life',
      'gameplay',
      'building',
      'companions',
      'weapons-gear',
      'vehicles-movement',
      'model-swap',
      'ui-hud',
      'menus-sandbox',
      'multiplayer-servers',
      'library',
      'misc',
    ]);
    expect(slugs).not.toContain('qol');
    const qol = res.body.items.find((c: any) => c.slug === 'quality-of-life');
    expect(qol).toMatchObject({ legacySlugs: ['qol'], names: { es: 'Calidad de vida', pt: expect.any(String) } });
    expect(qol.count).toBe((await get('/api/v2/mods?category=quality-of-life&type=all&pageSize=1')).body.total);
    const builds = await get('/api/v2/categories?kind=build');
    expect(builds.body.items.length).toBeGreaterThan(0);
    expect(builds.body.items.every((c: any) => c.kind === 'build')).toBe(true);
  });

  it('lists curated tags with counts', async () => {
    const res = await get('/api/v2/tags');
    expect(res.body.items.length).toBe(40);
    expect(res.body.items.find((t: any) => t.slug === 'inventory')).toMatchObject({
      count: 2,
      nameKey: 'taxonomy_tag_inventory',
    });
  });

  it('lists creators by downloads with stats', async () => {
    const res = await get('/api/v2/creators?pageSize=5');
    expect(res.status).toBe(200);
    const totals = res.body.items.map((c: any) => c.downloadsTotal);
    expect(totals).toEqual([...totals].sort((a: number, b: number) => b - a));
    expect(res.body.items[0].topMod).not.toBeNull();
    const spotlight = await get('/api/v2/creators?sort=spotlight&pageSize=100');
    expect(spotlight.body.total).toBe(res.body.total);
  });

  it('serves public profiles, their mods and respects privacy', async () => {
    const profile = await get('/api/v2/users/ImAxel');
    expect(profile.status).toBe(200);
    expect(profile.body).toMatchObject({ handle: 'imaxel', canonicalPath: '/profile/imaxel', hasPublicContent: true });
    expect(profile.headers['cache-tag']).toBe(`user:${profile.body.id}`);
    const mods = await get('/api/v2/users/imaxel/mods?pageSize=100');
    expect(mods.body.total).toBe(profile.body.stats.modsCount);
    expect(mods.body.items.map((m: any) => m.id)).toContain(SONS_AX_LIB);
    const builds = await get('/api/v2/users/imaxel/builds');
    expect(builds.body.total).toBe(0);

    await exec(
      db,
      `UPDATE "User" SET "privacy" = '{"hideRank": true, "hideActivity": true}', "xp" = 120 WHERE "id" = $1`,
      [profile.body.id],
    );
    await exec(
      db,
      `INSERT INTO "UserActivityDaily" ("userId", "day", "releases") VALUES ($1, (now() AT TIME ZONE 'UTC')::date, 2)`,
      [profile.body.id],
    );
    await publishCacheInvalidation(t.db.db, [`user:${profile.body.id}`]);
    await expect
      .poll(async () => (await get('/api/v2/users/imaxel')).body.privacy.hideRank, { timeout: 10_000 })
      .toBe(true);
    const hidden = await get('/api/v2/users/imaxel');
    expect(hidden.body).toMatchObject({ xp: null, survivorRank: null });
    const activity = await get('/api/v2/users/imaxel/activity');
    expect(activity.body.days).toEqual([]);
    await exec(db, `UPDATE "User" SET "privacy" = '{}' WHERE "id" = $1`, [profile.body.id]);
    await publishCacheInvalidation(t.db.db, [`user:${profile.body.id}`]);
    await expect
      .poll(async () => (await get('/api/v2/users/imaxel/activity')).body.days, { timeout: 10_000 })
      .toEqual([expect.objectContaining({ releases: 2 })]);

    const reviews = await get('/api/v2/users/imaxel/reviews');
    expect(reviews.body).toEqual({ items: [], nextCursor: null });
    expect((await get('/api/v2/users/nobody-here-123')).status).toBe(404);
  });

  it('pages user reviews with a cursor', async () => {
    const reviewer = await exec(db, `SELECT "id" FROM "User" WHERE "slug" = 'tonimacaroni'`);
    const uid = reviewer.rows[0].id;
    for (const [i, modId] of [STACKMOD, CUSTOM_STACKS, SONS_AX_LIB].entries()) {
      await exec(
        db,
        `INSERT INTO "ModReview" ("title", "message", "rating", "isHidden", "userId", "modId", "status", "createdAt", "updatedAt")
         VALUES ($1, 'Works fine', 5, false, $2, $3, 'visible', now() - ($4 || ' hours')::interval, now())`,
        [`Review ${i}`, uid, modId, String(i)],
      );
    }
    const first = await get('/api/v2/users/tonimacaroni/reviews?limit=2');
    expect(first.body.items.map((r: any) => r.mod.id)).toEqual([STACKMOD, CUSTOM_STACKS]);
    expect(first.body.nextCursor).toEqual(expect.any(String));
    const second = await get(`/api/v2/users/tonimacaroni/reviews?limit=2&cursor=${first.body.nextCursor}`);
    expect(second.body.items.map((r: any) => r.mod.id)).toEqual([SONS_AX_LIB]);
    expect(second.body.nextCursor).toBeNull();
    expect((await get('/api/v2/users/tonimacaroni/reviews?cursor=%2A%2A')).status).toBe(422);
  });
});

describe('HTTP caching (ETag, Cache-Control, Cache-Tag, CORS, LRU)', () => {
  it('public responses carry the edge policy, tags and a weak ETag honoured with 304', async () => {
    const res = await get(`/api/v2/mods/${STACKMOD}`);
    expect(res.headers['cache-control']).toBe('public, max-age=0');
    expect(res.headers['cloudflare-cdn-cache-control']).toBe('public, max-age=60, stale-while-revalidate=600');
    expect(String(res.headers['cache-tag']).split(',')).toEqual(expect.arrayContaining([`mod:${STACKMOD}`]));
    expect(res.headers['set-cookie']).toBeUndefined();
    const etag = String(res.headers.etag);
    expect(etag).toMatch(/^W\//);
    const again = await t.app.inject({
      method: 'GET',
      url: `/api/v2/mods/${STACKMOD}`,
      headers: { 'if-none-match': etag },
    });
    expect(again.statusCode).toBe(304);
    const cors = await get('/api/v2/mods?pageSize=1', { origin: 'https://example.org' });
    expect(cors.headers['access-control-allow-origin']).toBe('*');
    const filtered = await get('/api/v2/mods?category=quality-of-life&tag=inventory');
    expect(String(filtered.headers['cache-tag']).split(',')).toEqual(
      expect.arrayContaining(['list:mods', 'list:builds', 'category:quality-of-life', 'tag:inventory']),
    );
  });

  it('serves from the LRU until NOTIFY cache evicts the tags', async () => {
    const before = await get(`/api/v2/mods/${STACKMOD}`);
    await exec(db, `UPDATE "Mod" SET "shortDescription" = 'Bigger stacks, tested' WHERE "id" = $1`, [STACKMOD]);
    const cached = await get(`/api/v2/mods/${STACKMOD}`);
    expect(cached.body.shortDescription).toBe(before.body.shortDescription);
    await publishCacheInvalidation(t.db.db, [`mod:${STACKMOD}`, 'list:mods']);
    await expect
      .poll(async () => (await get(`/api/v2/mods/${STACKMOD}`)).body.shortDescription, { timeout: 10_000 })
      .toBe('Bigger stacks, tested');
    const listed = await get('/api/v2/mods?tag=storage');
    expect(listed.body.items[0].shortDescription).toBe('Bigger stacks, tested');
  });
});

describe('multiplayer filter (several roles)', () => {
  it('accepts repeated roles as OR and still accepts a single role', async () => {
    const one = await get('/api/v2/mods?multiplayer=host_only&type=all&pageSize=100');
    const other = await get('/api/v2/mods?multiplayer=all_players&type=all&pageSize=100');
    const both = await get('/api/v2/mods?multiplayer=host_only&multiplayer=all_players&type=all&pageSize=100');
    expect([one.status, other.status, both.status]).toEqual([200, 200, 200]);
    expect(both.body.total).toBe(one.body.total + other.body.total);
    expect((await get('/api/v2/mods?multiplayer=host_only&multiplayer=everyone')).status).toBe(422);
  });
});
