/**
 * WP-31 acceptance (resolver, PLAN §4.6): every rule on purpose-built rows, then the five broken
 * external links of research/01 §4.4 and real legacy keys on the development seed
 * (`db:seed:dev --small`: public snapshot + backfills).
 */

import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { silentLogger } from '@sotf/db';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { seedDev } from '@sotf/migration-tools';
import { sql } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { waitUntilServing } from '../downloads/test-helpers.ts';

async function resolve(t: TestApp, path: string) {
  const res = await t.app.inject({ method: 'GET', url: `/api/v2/resolve?path=${encodeURIComponent(path)}` });
  expect(res.statusCode, path).toBe(200);
  return { body: res.json(), headers: res.headers };
}

describe('resolver rules', () => {
  let t: TestApp;
  let f: Factories;

  beforeAll(async () => {
    t = await buildTestApp();
    f = createFactories(t.db.db);
    await waitUntilServing(t.app);
  });
  afterAll(async () => {
    await t?.close();
  });

  it('1. exact path → 200 (also on canonicalSlug); wrong prefix → 301 kind_mismatch', async () => {
    const owner = await f.user({ slug: 'imaxel', name: 'ImAxel' });
    const { mod } = await f.modWithVersion({
      userId: owner.id,
      slug: "axel's-mod-menu",
      canonicalSlug: 'axels-mod-menu',
    });
    const exact = await resolve(t, "/mods/imaxel/axel's-mod-menu");
    expect(exact.body).toEqual({
      status: 200,
      kind: 'mod',
      id: mod.id,
      canonicalPath: "/mods/imaxel/axel's-mod-menu",
      rule: 'exact',
    });
    expect(exact.headers['cache-tag']).toContain(`mod:${mod.id}`);
    expect(exact.headers['cache-control']).toContain('public');
    const encoded = await resolve(t, '/mods/imaxel/axel%27s-mod-menu');
    expect(encoded.body.status).toBe(200);
    expect((await resolve(t, '/mods/imaxel/axels-mod-menu')).body).toMatchObject({ status: 200, rule: 'exact' });
    expect((await resolve(t, "/builds/imaxel/axel's-mod-menu")).body).toEqual({
      status: 301,
      kind: 'mod',
      id: mod.id,
      canonicalPath: "/mods/imaxel/axel's-mod-menu",
      rule: 'kind_mismatch',
    });
    const build = await f.mod({ userId: owner.id, slug: 'my-base', type: 'Build' });
    expect((await resolve(t, '/mods/imaxel/my-base')).body).toMatchObject({
      status: 301,
      kind: 'build',
      id: build.id,
      canonicalPath: '/builds/imaxel/my-base',
      rule: 'kind_mismatch',
    });
  });

  it('keeps the locale prefix and the rest of the path', async () => {
    const owner = await f.user({ slug: 'smokyace' });
    await f.mod({ userId: owner.id, slug: 'upgradeable-stats' });
    expect((await resolve(t, '/es/mods/codengine/upgradeable-stats/versions/1.0.0')).body).toMatchObject({
      status: 301,
      canonicalPath: '/es/mods/smokyace/upgradeable-stats/versions/1.0.0',
      rule: 'global_slug',
    });
  });

  it('history: an old path or an old slug of any owner → 301 history', async () => {
    const owner = await f.user({ slug: 'new-owner' });
    const mod = await f.mod({ userId: owner.id, slug: 'renamed-mod' });
    await t.db.db.execute(sql`
      INSERT INTO "ModSlugHistory" ("modId", "userSlug", "slug", "reason")
      VALUES (${mod.id}, 'old-owner', 'old-name', 'renamed')`);
    expect((await resolve(t, '/mods/old-owner/old-name')).body).toEqual({
      status: 301,
      kind: 'mod',
      id: mod.id,
      canonicalPath: '/mods/new-owner/renamed-mod',
      rule: 'history',
    });
    expect((await resolve(t, '/mods/nobody/old-name')).body).toMatchObject({ status: 301, rule: 'history' });
  });

  it('normalized comparison (case, punctuation, hyphen runs) and manifest ids', async () => {
    const owner = await f.user({ slug: 'regitoxic' });
    const chainsaw = await f.mod({
      userId: owner.id,
      slug: 'skeletal-chainsaw(alpha)',
      manifestId: 'SkeletalChainsaw',
    });
    expect((await resolve(t, '/mods/regitoxic/Skeletal--Chainsaw(ALPHA)')).body).toEqual({
      status: 301,
      kind: 'mod',
      id: chainsaw.id,
      canonicalPath: '/mods/regitoxic/skeletal-chainsaw(alpha)',
      rule: 'normalized',
    });
    expect((await resolve(t, '/mods/whoever/skeletalchainsaw')).body).toMatchObject({
      status: 301,
      id: chainsaw.id,
      rule: 'manifest_id',
    });
  });

  it('removed → 410, rejected → 404, tombstones → 410, explicit redirects → 301, unknown → 404', async () => {
    const owner = await f.user({ slug: 'states' });
    await f.mod({ userId: owner.id, slug: 'removed-one', status: 'removed' });
    await f.mod({ userId: owner.id, slug: 'rejected-one', status: 'rejected' });
    const unlisted = await f.mod({ userId: owner.id, slug: 'unlisted-one', status: 'unlisted' });
    expect((await resolve(t, '/mods/states/removed-one')).body).toMatchObject({
      status: 410,
      kind: 'mod',
      canonicalPath: null,
    });
    expect((await resolve(t, '/mods/states/rejected-one')).body).toMatchObject({ status: 404, canonicalPath: null });
    expect((await resolve(t, '/mods/states/unlisted-one')).body).toMatchObject({ status: 200, id: unlisted.id });

    await t.db.db.execute(
      sql`INSERT INTO "Tombstone" ("path", "status", "reason") VALUES ('/mods/gone/deleted-mod', 410, 'test')`,
    );
    expect((await resolve(t, '/mods/gone/deleted-mod')).body).toEqual({
      status: 410,
      kind: null,
      id: null,
      canonicalPath: null,
      rule: 'tombstone',
    });
    expect((await resolve(t, '/es/mods/gone/deleted-mod')).body).toMatchObject({ status: 410, rule: 'tombstone' });

    await t.db.db.execute(
      sql`INSERT INTO "Redirect" ("fromPath", "toPath") VALUES ('/mods/promo', '/kits/staff/best-of')`,
    );
    expect((await resolve(t, '/mods/promo')).body).toEqual({
      status: 301,
      kind: null,
      id: null,
      canonicalPath: '/kits/staff/best-of',
      rule: 'redirect',
    });
    expect((await resolve(t, '/mods/nobody/nothing-here')).body).toEqual({
      status: 404,
      kind: null,
      id: null,
      canonicalPath: null,
      rule: 'none',
    });
    expect((await resolve(t, '/mods')).body).toMatchObject({ status: 404 });
  });

  it('profiles: exact, case-insensitive and old handles', async () => {
    const user = await f.user({ slug: 'Survivor-One' });
    await t.db.db.execute(sql`INSERT INTO "UserSlugHistory" ("userId", "slug") VALUES (${user.id}, 'old-survivor')`);
    expect((await resolve(t, '/profile/Survivor-One')).body).toEqual({
      status: 200,
      kind: 'user',
      id: user.id,
      canonicalPath: '/profile/Survivor-One',
      rule: 'exact',
    });
    expect((await resolve(t, '/fr/profile/survivor-one')).body).toMatchObject({
      status: 301,
      canonicalPath: '/fr/profile/Survivor-One',
      rule: 'normalized',
    });
    expect((await resolve(t, '/profile/old-survivor')).body).toMatchObject({
      status: 301,
      canonicalPath: '/profile/Survivor-One',
      rule: 'history',
    });
    expect((await resolve(t, '/profile/nobody-at-all')).body).toMatchObject({ status: 404 });
  });

  it('kits: exact, case-insensitive; private kits are not found', async () => {
    const owner = await f.user({ slug: 'kitter' });
    const kit = await f.kit({ ownerId: owner.id, slug: 'coop-essentials' });
    await f.kit({ ownerId: owner.id, slug: 'secret', visibility: 'private' });
    expect((await resolve(t, '/kits/kitter/coop-essentials')).body).toEqual({
      status: 200,
      kind: 'kit',
      id: kit.id,
      canonicalPath: '/kits/kitter/coop-essentials',
      rule: 'exact',
    });
    expect((await resolve(t, '/kits/Kitter/Coop-Essentials')).body).toMatchObject({ status: 301, rule: 'normalized' });
    expect((await resolve(t, '/kits/kitter/secret')).body).toMatchObject({ status: 404 });
  });

  it('validates the path', async () => {
    const res = await t.app.inject({ method: 'GET', url: '/api/v2/resolve?path=https://evil.test/x' });
    expect(res.statusCode).toBe(422);
  });
});

describe('on the development seed', () => {
  let db: TestDb;
  let t: TestApp;
  const R2 = 'https://r2.sotf-mods.com';

  beforeAll(async () => {
    db = await startTestDb({ migrate: false });
    await seedDev({
      url: db.url,
      small: true,
      outDir: mkdtempSync(join(tmpdir(), 'sotf-resolve-')),
      log: silentLogger,
    });
    t = await buildTestApp({ db, env: { R2_PUBLIC_BASE_URL: R2 } });
    await waitUntilServing(t.app);
  }, 300_000);

  afterAll(async () => {
    await t?.app.close();
    await db?.stop();
  });

  it('fixes the five known broken external links (research/01 §4.4)', async () => {
    const expectations: Array<[string, { status: number; canonicalPath: string | null }]> = [
      [
        '/mods/codengine/upgradeableplayerstats',
        { status: 301, canonicalPath: '/mods/smokyace/upgradeableplayerstats' },
      ],
      ['/mods/anwender/helimod', { status: 301, canonicalPath: '/mods/eisbrecher18/helikopter-mod' }],
      ['/mods/tempbito/perishableshuffler', { status: 301, canonicalPath: '/mods/tempbito/perishable-shuffler' }],
      ['/mods/simmelsau/RemoveMountainFog', { status: 301, canonicalPath: '/mods/simmelsau/removemountainfog' }],
      ['/mods/aedev/gyrocopter', { status: 410, canonicalPath: null }],
    ];
    for (const [path, expected] of expectations) {
      expect((await resolve(t, path)).body, path).toMatchObject(expected);
    }
    // And the canonical pages themselves are 200.
    for (const [, expected] of expectations.slice(0, 4)) {
      expect((await resolve(t, expected.canonicalPath as string)).body).toMatchObject({ status: 200, rule: 'exact' });
    }
  });

  it('download links of the broken URLs go straight to R2 (no intermediate 301)', async () => {
    for (const path of [
      '/mods/anwender/helimod',
      '/mods/codengine/upgradeableplayerstats',
      '/mods/simmelsau/RemoveMountainFog',
    ]) {
      const [, , user, slug] = path.split('/');
      const res = await t.app.inject({
        method: 'GET',
        url: `/internal/downloads/resolve?user=${user}&slug=${slug}&version=latest`,
        headers: t.internal(),
      });
      expect(res.json(), path).toMatchObject({ status: 302, reason: 'ok' });
      expect(res.json().location).toMatch(/^https:\/\/r2\.sotf-mods\.com\/\S+$/);
    }
    const gone = await t.app.inject({
      method: 'GET',
      url: '/internal/downloads/resolve?user=aedev&slug=gyrocopter&version=latest',
      headers: t.internal(),
    });
    expect(gone.json()).toMatchObject({ status: 410, reason: 'mod_removed', location: null });
  });

  it('real legacy keys (spaces, apostrophes, +, parentheses) redirect with the exact encoding', async () => {
    const found = await db.db.execute<{ id: number; storageKey: string }>(sql`
      SELECT DISTINCT ON (kind) kind, v."id", v."storageKey" FROM (
        SELECT CASE WHEN "storageKey" LIKE '% %' THEN 'space'
                    WHEN "storageKey" LIKE '%''%' THEN 'apostrophe'
                    WHEN "storageKey" LIKE '%+%' THEN 'plus'
                    WHEN "storageKey" LIKE '%(%' THEN 'paren' END AS kind, "id"
          FROM "ModVersion" WHERE "storageKey" IS NOT NULL AND "status" = 'active') k
      JOIN "ModVersion" v ON v."id" = k."id"
      WHERE kind IS NOT NULL ORDER BY kind, v."id"`);
    const kinds = found.rows.map((r) => (r as unknown as { kind: string }).kind).sort();
    // The seed's only `+` key is the lost file (410 below); `+` is covered on purpose-built rows.
    expect(kinds).toEqual(expect.arrayContaining(['apostrophe', 'paren', 'space']));
    for (const row of found.rows) {
      const res = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${row.id}/download` });
      const manual = row.storageKey
        .split('/')
        .map((s) => s.replaceAll('%', '%25').replaceAll(' ', '%20').replaceAll('+', '%2B'))
        .join('/');
      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toBe(`${R2}/${manual}`);
      expect(res.headers.location).not.toContain('+');
    }
  });

  it('the version on the lost legacy file host is 410', async () => {
    const missing = await db.db.execute<{ id: number }>(
      sql`SELECT "id" FROM "ModVersion" WHERE "status" = 'file_missing' ORDER BY "id" LIMIT 1`,
    );
    const id = missing.rows[0]?.id;
    expect(id).toBeDefined();
    const res = await t.app.inject({ method: 'GET', url: `/api/v2/versions/${id}/download` });
    expect(res.statusCode).toBe(410);
  });
});
