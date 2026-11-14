// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Modpacks (2026-11): kits under their public name. Approval like mods (verified creators and
 * staff publish at once, everyone else waits for a moderator), only approved mods, automatic
 * dependencies and conflict warnings, the public JSON API in the shape of `/api/mods`, the
 * `.sotfprofile` download for SotF Mods Manager (with its counter and limit) and the profile
 * import. Runs on the small development seed.
 */
import { publishCacheInvalidation } from '@sotf/core';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb, waitUntilCalm } from '../catalog/__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;

const SONS_AX_LIB = 19;
const AXEL_MOD_MENU = 20;
const CUSTOM_STACKS = 75;
const STACKMOD = 78;
const ALTERNATE_OUTFITS = 133; // pending: not an approved mod

let creator: number;
let newcomer: number;
let moderator: number;
const roles = new Map<number, { role: 'user' | 'moderator'; verifiedCreator: boolean }>();

async function createUser(handle: string): Promise<number> {
  const res = await exec(
    db,
    `INSERT INTO "User" ("email", "password", "name", "slug", "emailVerifiedAt") VALUES ($1, 'x', $2, $2, now()) RETURNING "id"`,
    [`${handle}@example.test`, handle],
  );
  return res.rows[0].id;
}

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

async function call(method: Method, url: string, userId: number | null, body?: unknown, ip = '81.2.3.4') {
  const who = userId === null ? null : (roles.get(userId) ?? { role: 'user' as const, verifiedCreator: false });
  const res = await t.app.inject({
    method,
    url,
    remoteAddress: ip,
    headers: { ...t.sameOrigin(), ...(who && userId !== null ? t.as({ userId, emailVerified: true, ...who }) : {}) },
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  let json: any = null;
  try {
    json = res.body ? res.json() : null;
  } catch {
    json = null;
  }
  return { status: res.statusCode, headers: res.headers, body: json, text: res.body };
}

async function manifestIdOf(modId: number): Promise<string> {
  return (await exec(db, `SELECT "mod_id" FROM "Mod" WHERE "id" = $1`, [modId])).rows[0].mod_id;
}

async function latestVersionId(modId: number): Promise<number> {
  const res = await exec(
    db,
    `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 AND "isLatest" ORDER BY "id" DESC LIMIT 1`,
    [modId],
  );
  return res.rows[0].id;
}

async function makePack(userId: number, name: string, modIds: number[]) {
  const created = await call('POST', '/api/v2/kits', userId, { name, descriptionMd: `About **${name}**` });
  expect(created.status).toBe(201);
  const items = await call('PUT', `/api/v2/kits/${created.body.id}/items`, userId, {
    items: modIds.map((modId) => ({ modId })),
  });
  expect(items.status).toBe(200);
  return items.body;
}

beforeAll(async () => {
  db = await startSeededDb();
  creator = await createUser('pack-creator');
  newcomer = await createUser('pack-newcomer');
  moderator = await createUser('pack-moderator');
  roles.set(creator, { role: 'user', verifiedCreator: true });
  roles.set(newcomer, { role: 'user', verifiedCreator: false });
  roles.set(moderator, { role: 'moderator', verifiedCreator: false });
  // StackMod declares Custom Stacks incompatible; Axel's Mod Menu requires SonsAxLib.
  await exec(db, `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "kind") VALUES ($1, $2, 'conflicts')`, [
    await latestVersionId(STACKMOD),
    await manifestIdOf(CUSTOM_STACKS),
  ]);
  await exec(
    db,
    `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "depModId", "kind") VALUES ($1, $2, $3, 'required')
     ON CONFLICT ("modVersionId", "depManifestId") DO NOTHING`,
    [await latestVersionId(AXEL_MOD_MENU), await manifestIdOf(SONS_AX_LIB), SONS_AX_LIB],
  );
  t = await buildTestApp({
    db,
    rateLimits: {
      kitsWrite: { max: 100_000, window: '1 minute' },
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
      legacyRead: { max: 100_000, window: '1 minute' },
    },
  });
  await publishCacheInvalidation(t.db.db, ['list:mods']);
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('approval like mods', () => {
  it('publishes the modpacks of verified creators at once', async () => {
    const pack = await makePack(creator, 'Creator pack', [AXEL_MOD_MENU]);
    expect(pack.approvalStatus).toBe('published');
    expect((await call('GET', `/api/v2/kits/${pack.id}`, null)).status).toBe(200);
  });

  it('keeps a newcomer modpack pending (404 for others) until a moderator approves it', async () => {
    const pack = await makePack(newcomer, 'Newcomer pack', [STACKMOD]);
    expect(pack.approvalStatus).toBe('pending');
    expect((await call('GET', `/api/v2/kits/${pack.id}`, null)).status).toBe(404);
    expect((await call('GET', '/api/modpacks?limit=100', null)).body.data.map((p: any) => p.id)).not.toContain(pack.id);
    // The owner still sees it in their own list.
    const mine = await call('GET', '/api/v2/me/kits', newcomer);
    expect(mine.body.items.map((k: any) => k.id)).toContain(pack.id);

    // Moderators only.
    expect((await call('GET', '/api/v2/kits/review', newcomer)).status).toBe(403);
    const queue = await call('GET', '/api/v2/kits/review', moderator);
    expect(queue.status).toBe(200);
    expect(queue.body.items.map((k: any) => k.id)).toContain(pack.id);
    expect((await call('GET', `/api/v2/kits/review/${pack.id}`, moderator)).body.name).toBe('Newcomer pack');
    expect((await call('POST', `/api/v2/kits/${pack.id}/approval`, newcomer, { approved: true })).status).toBe(403);

    const approved = await call('POST', `/api/v2/kits/${pack.id}/approval`, moderator, { approved: true });
    expect(approved.status).toBe(200);
    expect(approved.body.approvalStatus).toBe('published');
    expect((await call('GET', `/api/v2/kits/${pack.id}`, null)).status).toBe(200);

    const unapproved = await call('POST', `/api/v2/kits/${pack.id}/approval`, moderator, { approved: false });
    expect(unapproved.body.approvalStatus).toBe('pending');
    expect((await call('GET', `/api/v2/kits/${pack.id}`, null)).status).toBe(404);
  });
});

describe('contents', () => {
  it('only takes approved mods, adds missing dependencies and warns about incompatible pairs', async () => {
    const created = await call('POST', '/api/v2/kits', creator, { name: 'Content checks' });
    const refused = await call('PUT', `/api/v2/kits/${created.body.id}/items`, creator, {
      items: [{ modId: ALTERNATE_OUTFITS }],
    });
    expect(refused.status).toBe(422);
    const pack = await call('PUT', `/api/v2/kits/${created.body.id}/items`, creator, {
      items: [{ modId: AXEL_MOD_MENU }, { modId: STACKMOD }, { modId: CUSTOM_STACKS }],
    });
    expect(pack.status).toBe(200);
    const ids = pack.body.items.map((i: any) => i.mod.id);
    expect(ids).toContain(SONS_AX_LIB);
    expect(pack.body.items.find((i: any) => i.mod.id === SONS_AX_LIB).isAutoDependency).toBe(true);
    expect(pack.body.conflictPairs).toHaveLength(1);
    expect(pack.body.items.every((i: any) => i.available)).toBe(true);
  });

  it('cleans control characters out of names', async () => {
    const created = await call('POST', '/api/v2/kits', creator, { name: 'Bad\u0007 ‮name   here' });
    expect(created.status).toBe(201);
    expect(created.body.name).toBe('Bad name here');
  });
});

describe('public API (/api/modpacks)', () => {
  let packSlug: string;
  let packId: number;

  beforeAll(async () => {
    const pack = await makePack(creator, 'Co-op essentials', [AXEL_MOD_MENU, CUSTOM_STACKS]);
    packSlug = pack.slug;
    packId = pack.id;
  });

  it('lists approved modpacks in the shape of /api/mods, with search, sort and pages', async () => {
    const res = await call('GET', '/api/modpacks?limit=2&sort=new', null);
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('application/json');
    expect(Object.keys(res.body)).toEqual(['status', 'data', 'meta']);
    expect(res.body.status).toBe(true);
    expect(Object.keys(res.body.meta)).toEqual(['total', 'page', 'limit', 'pages', 'next_page', 'prev_page']);
    expect(res.body.data.length).toBeLessThanOrEqual(2);
    expect(Object.keys(res.body.data[0])).toEqual([
      'id',
      'name',
      'slug',
      'url',
      'imageUrl',
      'modsCount',
      'downloads',
      'isApproved',
      'user',
      'createdAt',
      'updatedAt',
    ]);
    const search = await call('GET', '/api/modpacks?search=co-op%20ess', null);
    expect(search.body.data.map((p: any) => p.id)).toEqual([packId]);
    expect((await call('GET', '/api/modpacks?limit=1000', null)).status).toBe(422);
  });

  it('serves one modpack with its ordered mods, dependencies flagged', async () => {
    const res = await call('GET', `/api/modpacks/slug/pack-creator/${packSlug}`, null);
    expect(res.status).toBe(200);
    const data = res.body.data;
    expect(data.description).toBe('About **Co-op essentials**');
    expect(data.url).toMatch(/\/modpacks\/pack-creator\/co-op-essentials$/);
    expect(data.downloadUrl).toMatch(/\/api\/modpacks\/slug\/pack-creator\/co-op-essentials\/download$/);
    expect(data.mods.map((m: any) => m.mod_id)).toEqual([
      await manifestIdOf(AXEL_MOD_MENU),
      await manifestIdOf(CUSTOM_STACKS),
      await manifestIdOf(SONS_AX_LIB),
    ]);
    expect(Object.keys(data.mods[0])).toEqual([
      'mod_id',
      'name',
      'user',
      'slug',
      'latestVersion',
      'imageUrl',
      'url',
      'available',
      'isDependency',
    ]);
    expect(data.mods.map((m: any) => m.isDependency)).toEqual([false, false, true]);
    expect((await call('GET', '/api/modpacks/slug/pack-creator/nope', null)).status).toBe(404);
  });

  it('downloads the .sotfprofile of SotF Mods Manager and counts it', async () => {
    const res = await call('GET', `/api/modpacks/slug/pack-creator/${packSlug}/download`, null);
    expect(res.status).toBe(200);
    expect(res.headers['content-disposition']).toBe('attachment; filename="co-op-essentials.sotfprofile"');
    expect(res.headers['cache-control']).toBe('no-store');
    const profile = JSON.parse(res.text);
    expect(Object.keys(profile)).toEqual(['profile', 'game', 'mods', 'source']);
    expect(profile.profile).toBe('Co-op essentials');
    expect(profile.game).toBe('Sons of the Forest');
    expect(profile.mods[0]).toMatchObject({ id: await manifestIdOf(AXEL_MOD_MENU), user: expect.any(String) });
    expect(profile.source).toMatch(/\/modpacks\/pack-creator\/co-op-essentials$/);
    // Counted at once (the public answers show it when their short cache expires).
    const stored = await exec(db, `SELECT "downloads" FROM "Kit" WHERE "id" = $1`, [packId]);
    expect(stored.rows[0].downloads).toBeGreaterThanOrEqual(1);
  });

  it('limits downloads per address', async () => {
    let limited = 0;
    for (let i = 0; i < 35; i++) {
      const res = await call(
        'GET',
        `/api/modpacks/slug/pack-creator/${packSlug}/download`,
        null,
        undefined,
        '81.9.9.9',
      );
      if (res.status === 429) limited++;
    }
    expect(limited).toBeGreaterThan(0);
  });

  it('shows a mod that is no longer approved as unavailable and leaves it out of the download', async () => {
    await exec(db, `UPDATE "Mod" SET "status" = 'archived' WHERE "id" = $1`, [CUSTOM_STACKS]);
    await publishCacheInvalidation(t.db.db, ['list:mods', `kit:${packId}`]);
    await waitUntilCalm(t.app);
    const res = await call('GET', `/api/modpacks/slug/pack-creator/${packSlug}?fresh=1`, null);
    const custom = res.body.data.mods.find((m: any) => m.mod_id === 'CustomStacks' || m.name.includes('Custom'));
    expect(custom.available).toBe(false);
    const file = await call('GET', `/api/modpacks/slug/pack-creator/${packSlug}/download`, null, undefined, '81.7.7.7');
    expect(JSON.parse(file.text).mods.map((m: any) => m.id)).not.toContain(custom.mod_id);
    await exec(db, `UPDATE "Mod" SET "status" = 'published' WHERE "id" = $1`, [CUSTOM_STACKS]);
  });
});

describe('profile import', () => {
  it('resolves the ids of a .sotfprofile and reports the skipped ones', async () => {
    const text = JSON.stringify({
      profile: 'My\u0000 launcher profile',
      game: 'Sons of the Forest',
      mods: [
        { id: await manifestIdOf(AXEL_MOD_MENU), name: 'whatever' },
        { id: 'DoesNotExist' },
        { id: await manifestIdOf(AXEL_MOD_MENU) },
        { id: await manifestIdOf(ALTERNATE_OUTFITS) },
        { name: 'no id' },
      ],
    });
    const res = await call('POST', '/api/v2/kits/resolve-profile', creator, { text });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('My launcher profile');
    expect(res.body.items.map((i: any) => i.modId)).toEqual([AXEL_MOD_MENU]);
    expect(res.body.skipped).toEqual(['DoesNotExist', await manifestIdOf(ALTERNATE_OUTFITS)]);
  });

  it('refuses files that are not profiles, and anonymous callers', async () => {
    expect((await call('POST', '/api/v2/kits/resolve-profile', creator, { text: 'not json' })).status).toBe(422);
    expect((await call('POST', '/api/v2/kits/resolve-profile', creator, { text: '{"mods": 3}' })).status).toBe(422);
    expect((await call('POST', '/api/v2/kits/resolve-profile', creator, { text: 'x'.repeat(300_000) })).status).toBe(
      422,
    );
    expect((await call('POST', '/api/v2/kits/resolve-profile', null, { text: '{"mods":[]}' })).status).toBe(401);
  });
});
