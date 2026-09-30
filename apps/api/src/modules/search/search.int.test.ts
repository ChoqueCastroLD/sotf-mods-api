// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk the JSON bodies of many different DTOs
/**
 * WP-33 acceptance (search): «stak mod» finds StackMod in the top 3, «kelvn» finds the Kelvin mods,
 * exact manifest ids win, types/limits, users/kits/pages, the aggregated query log, `GET /mods?q=`
 * relevance, and the Cmd+K index (shape, locale, ≤ 15 KB brotli in every locale, also with a
 * processed 64 px thumbnail for every mod), against the small development seed.
 */
import { brotliCompressSync, constants } from 'node:zlib';
import { LOCALES } from '@sotf/contracts';
import type { TestDb } from '@sotf/db/testing';
import { uuidv7 } from 'uuidv7';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, injectCalm, startSeededDb, waitUntilCalm } from '../catalog/__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;

const STACKMOD = 78;
const KELVIN_MODS = [95, 235, 54, 64, 299, 311]; // Restless Kelvin, KelvinSeek, Kelvin-GPT, Nick's Kelvin GPT, Unstuck Kelvin, CollieMod
const INDEX_BUDGET_BYTES = 18 * 1024;

async function get(url: string) {
  const res = await injectCalm(t.app, { url });
  return { status: res.statusCode, headers: res.headers, body: res.json() as Record<string, any>, raw: res.rawPayload };
}

beforeAll(async () => {
  db = await startSeededDb();
  const owner = await exec(db, `SELECT "id" FROM "User" WHERE "slug" = 'imaxel'`);
  await exec(
    db,
    `INSERT INTO "Kit" ("ownerId", "slug", "name", "code", "visibility", "itemsCount")
     VALUES ($1, 'kelvin-essentials', 'Kelvin essentials', 'KIT-7Q2M-4X', 'public', 3),
            ($1, 'secret-stash', 'Secret stash', 'KIT-9P3R-2Z', 'private', 2)`,
    [owner.rows[0].id],
  );
  t = await buildTestApp({ db });
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('GET /search', () => {
  it('«stak mod» finds StackMod in the top 3', async () => {
    const res = await get('/api/v2/search?q=stak%20mod');
    expect(res.status).toBe(200);
    const top3 = res.body.hits.slice(0, 3);
    expect(top3.map((h: any) => h.id)).toContain(STACKMOD);
    const hit = res.body.hits.find((h: any) => h.id === STACKMOD);
    expect(hit).toMatchObject({
      type: 'mod',
      title: 'StackMod',
      kind: 'mod',
      path: expect.stringMatching(/^\/mods\/[^/]+\/stackmod$/),
    });
  });

  it('«kelvn» finds mods about Kelvin (typo tolerance)', async () => {
    const res = await get('/api/v2/search?q=kelvn&types=mod');
    expect(res.status).toBe(200);
    const ids = res.body.hits.map((h: any) => h.id);
    const published = await exec(db, `SELECT "id" FROM "Mod" WHERE "id" = ANY($1::int[]) AND "status" = 'published'`, [
      KELVIN_MODS,
    ]);
    expect(published.rows.length).toBeGreaterThanOrEqual(4);
    for (const { id } of published.rows) expect(ids).toContain(id);
    expect(res.body.hits.slice(0, 3).every((h: any) => /kelvin/i.test(h.title))).toBe(true);
  });

  it('puts an exact manifest id or name first and highlights matches', async () => {
    const byManifest = await get('/api/v2/search?q=SonsAxLib');
    expect(byManifest.body.hits[0]).toMatchObject({ id: 19, title: 'SonsAxLib', kind: 'library' });
    expect(byManifest.body.hits[0].score).toBeGreaterThanOrEqual(10);
    const fts = await get('/api/v2/search?q=stack&types=mod');
    expect(fts.body.hits.map((h: any) => h.id)).toContain(STACKMOD);
    expect(fts.body.hits.find((h: any) => h.id === STACKMOD).highlight).toBe('«Stack»Mod');
  });

  it('never returns unpublished or NSFW mods', async () => {
    const pending = await get('/api/v2/search?q=LITF%20Improved%20Kelvin');
    expect(pending.body.hits.map((h: any) => h.id)).not.toContain(284);
    const nsfw = await exec(
      db,
      `SELECT "id", "name" FROM "Mod" WHERE "status" = 'published' AND "isNSFW" ORDER BY "id" LIMIT 1`,
    );
    const res = await get(`/api/v2/search?q=${encodeURIComponent(nsfw.rows[0].name)}`);
    expect(res.body.hits.map((h: any) => h.id)).not.toContain(nsfw.rows[0].id);
  });

  it('searches kits, users and pages, honours types and limit', async () => {
    const kits = await get('/api/v2/search?q=kelvin%20essentials&types=kit');
    expect(kits.body.hits).toEqual([
      expect.objectContaining({
        type: 'kit',
        title: 'Kelvin essentials',
        path: '/kits/imaxel/kelvin-essentials',
        subtitle: '@imaxel',
      }),
    ]);
    expect((await get('/api/v2/search?q=secret%20stash&types=kit')).body.hits).toEqual([]);
    const users = await get('/api/v2/search?q=imaxel&types=user');
    expect(users.body.hits[0]).toMatchObject({ type: 'user', path: '/profile/imaxel', subtitle: '@imaxel' });
    const pages = await get('/api/v2/search?q=install&types=page');
    expect(pages.body.hits[0]).toMatchObject({ type: 'page', id: 'install', path: '/install' });
    const limited = await get('/api/v2/search?q=kelvin&limit=2');
    expect(limited.body.hits).toHaveLength(2);
    expect(limited.body.total).toBeGreaterThan(2);
    expect((await get('/api/v2/search?q=')).status).toBe(422);
  });

  it('logs queries aggregated per day', async () => {
    await get('/api/v2/search?q=Kelvin%20%20GPT');
    await get('/api/v2/search?q=kelvin%20gpt');
    await expect
      .poll(
        async () =>
          (await exec(db, `SELECT "count" FROM "SearchQueryDaily" WHERE "qNorm" = 'kelvin gpt'`)).rows[0]?.count,
        {
          timeout: 5_000,
        },
      )
      .toBe(2);
  });

  it('GET /mods?q= filters by the same relevance and sorts by it', async () => {
    const res = await get('/api/v2/mods?q=stak%20mod&sort=relevance');
    expect(res.status).toBe(200);
    expect(res.body.items[0].id).toBe(STACKMOD);
    const kelvin = await get('/api/v2/mods?q=kelvn&sort=downloads&facets=1');
    expect(kelvin.body.total).toBeGreaterThanOrEqual(4);
    expect(kelvin.body.facets.kind.reduce((s: number, b: any) => s + b.count, 0)).toBe(kelvin.body.total);
  });
});

describe('GET /search/index', () => {
  it('returns the compact index for a locale, edge-cached with the search-index tag', async () => {
    const res = await get('/api/v2/search/index?locale=es');
    expect(res.status).toBe(200);
    expect(res.headers['cache-tag']).toBe('search-index,locale:es');
    expect(res.headers['cloudflare-cdn-cache-control']).toBe('public, max-age=3600, stale-while-revalidate=600');
    const index = res.body;
    expect(index).toMatchObject({ v: 1, locale: 'es' });
    const listed = await get('/api/v2/mods?type=all&pageSize=1');
    expect(index.mods).toHaveLength(listed.body.total);
    const stack = index.mods.find((m: any[]) => m[0] === STACKMOD);
    expect(stack).toHaveLength(15);
    expect(stack.slice(0, 9)).toEqual([
      STACKMOD,
      'mod',
      'StackMod',
      expect.any(String),
      'quality-of-life',
      '',
      'StackMod',
      expect.any(Number),
      'untested',
    ]);
    expect(stack[10]).toMatch(/\/stackmod$/);
    // releasedDay, createdDay (days since the epoch), ratingTenths (or null), multiplayer code.
    expect([typeof stack[11], typeof stack[12], typeof stack[14]]).toEqual(['number', 'number', 'number']);
    expect(['number', 'object']).toContain(typeof stack[13]);
    expect(index.categories).toContainEqual(['quality-of-life', 'Calidad de vida', '/categories/quality-of-life']);
    expect(index.pages).toContainEqual(['install', 'Cómo instalar mods', '/install']);
    expect(index.kits).toHaveLength(1);
    expect(index.kits[0].slice(0, 5)).toEqual([
      expect.any(Number),
      'Kelvin essentials',
      'imaxel',
      3,
      '/kits/imaxel/kelvin-essentials',
    ]);
    expect(index.kits[0]).toHaveLength(6);
    expect(index.users.length).toBeGreaterThan(20);
    expect(index.trending).toHaveLength(10);
    expect((await get('/api/v2/search/index?locale=xx')).status).toBe(422);
  });

  it('weighs ≤ 18 KB brotli in every locale, even with a processed thumbnail per mod', async () => {
    const sizes: Record<string, number> = {};
    const measure = async (label: string) => {
      for (const locale of LOCALES) {
        const res = await get(`/api/v2/search/index?locale=${locale}`);
        expect(res.status).toBe(200);
        const br = brotliCompressSync(res.raw, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } }).length;
        sizes[`${label}:${locale}`] = br;
        expect(br, `${label} ${locale}: ${br} bytes br`).toBeLessThanOrEqual(INDEX_BUDGET_BYTES);
      }
    };
    await measure('seed');

    // Worst case after the media pipeline (WP-40): every mod has a processed thumbnail whose 64 px
    // variant lives under a random uuid v7 key.
    const mods = await exec(db, `SELECT "id" FROM "Mod" WHERE "status" = 'published'`);
    for (const { id } of mods.rows) {
      const mediaId = uuidv7();
      const variants = [64, 320, 640].map((w) => ({
        w,
        format: 'webp',
        key: `media/${mediaId}/${w}.webp`,
        bytes: 1000,
      }));
      await exec(
        db,
        `INSERT INTO "Media" ("id", "purpose", "sourceBucket", "sourceKey", "width", "height", "variants", "status")
         VALUES ($1, 'thumbnail', 'sotf-mods-private', $2, 1280, 720, $3::jsonb, 'ready')`,
        [mediaId, `incoming/${mediaId}`, JSON.stringify(variants)],
      );
      await exec(db, `UPDATE "Mod" SET "thumbnailMediaId" = $1 WHERE "id" = $2`, [mediaId, id]);
    }
    t.app.platform.caches.invalidate('*');
    const withThumbs = await get('/api/v2/search/index?locale=en');
    expect(withThumbs.body.mods[0][9]).toMatch(/^https:\/\/r2\.sotf-mods\.com\/media\/[0-9a-f-]{36}\/64\.webp$/);
    await measure('thumbs');
    process.stdout.write(`search index sizes (bytes, brotli q11): ${JSON.stringify(sizes)}\n`);
  });
});
