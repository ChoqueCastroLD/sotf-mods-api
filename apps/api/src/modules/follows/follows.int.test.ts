// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * WP-42 acceptance (follows): following mods reuses the legacy `ModFavorite` table; concurrent
 * follows of one (user, mod) leave exactly one row even without the deferred unique index;
 * `Mod.favoritesCount` moves by exactly the rows inserted/deleted (never touching `updatedAt`);
 * creator follows (`UserFollow`, no self follows); the backpack with `hasUpdate` and current-build
 * compatibility; the lookup; events; auth, CSRF and cache headers. Runs on the small development
 * seed (PostgreSQL 16).
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
const STACKMOD = 78;
const ALTERNATE_OUTFITS = 133; // unapproved in the legacy → pending with unchecked versions

let alice: number;
let bob: number;
let creator: { id: number; handle: string };
let removedModId: number;

async function createUser(handle: string): Promise<number> {
  const res = await exec(
    db,
    `INSERT INTO "User" ("email", "password", "name", "slug", "emailVerifiedAt")
     VALUES ($1, 'x', $2, $2, now()) RETURNING "id"`,
    [`${handle}@example.test`, handle],
  );
  return res.rows[0].id;
}

function as(userId: number, extra: Record<string, unknown> = {}) {
  return { ...t.as({ userId, ...extra }), ...t.sameOrigin() };
}

async function call(method: 'GET' | 'PUT' | 'DELETE', url: string, userId: number | null, body?: unknown) {
  const headers: Record<string, string> = userId === null ? t.sameOrigin() : as(userId);
  const res = await t.app.inject({
    method,
    url,
    headers,
    // The typed client always sends a JSON body on writes (`{}` when the contract has none).
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  return { status: res.statusCode, headers: res.headers, body: res.body ? (res.json() as Record<string, any>) : null };
}

async function favoriteRows(userId: number, modId: number): Promise<number> {
  const res = await exec(db, `SELECT count(*)::int AS n FROM "ModFavorite" WHERE "userId" = $1 AND "modId" = $2`, [
    userId,
    modId,
  ]);
  return res.rows[0].n;
}

async function modCounters(modId: number): Promise<{ favoritesCount: number; updatedAt: string }> {
  const res = await exec(db, `SELECT "favoritesCount", "updatedAt"::text AS "updatedAt" FROM "Mod" WHERE "id" = $1`, [
    modId,
  ]);
  return res.rows[0];
}

async function events(type: string, key: string, value: number): Promise<number> {
  const res = await exec(
    db,
    `SELECT count(*)::int AS n FROM pgboss.job WHERE name = 'domain.event' AND data->>'type' = $1
       AND (data->'payload'->>$2)::int = $3`,
    [type, key, value],
  );
  return res.rows[0].n;
}

beforeAll(async () => {
  db = await startSeededDb();
  // Prove that uniqueness does not depend on the deferred index (production may not have it yet).
  await exec(db, `DROP INDEX IF EXISTS "ModFavorite_userId_modId_key"`);
  alice = await createUser('follow-alice');
  bob = await createUser('follow-bob');
  const creatorId = await exec(
    db,
    `SELECT "userId" AS id, u."slug" FROM "Mod" m JOIN "User" u ON u.id = m."userId" WHERE m.id = $1`,
    [STACKMOD],
  );
  creator = { id: creatorId.rows[0].id, handle: creatorId.rows[0].slug };
  const removed = await exec(
    db,
    `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND "id" NOT IN ($1, $2, $3) ORDER BY "id" DESC LIMIT 1`,
    [SONS_AX_LIB, AXEL_MOD_MENU, STACKMOD],
  );
  removedModId = removed.rows[0].id;
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('follow a mod (ModFavorite)', () => {
  it('requires a session and a same-origin request', async () => {
    const anonymous = await call('PUT', `/api/v2/mods/${STACKMOD}/follow`, null, { notify: true });
    expect(anonymous.status).toBe(401);
    const crossSite = await t.app.inject({
      method: 'PUT',
      url: `/api/v2/mods/${STACKMOD}/follow`,
      headers: { ...t.as({ userId: alice }), 'content-type': 'application/json', 'sec-fetch-site': 'cross-site' },
      payload: JSON.stringify({ notify: true }),
    });
    expect(crossSite.statusCode).toBe(403);
    expect(await favoriteRows(alice, STACKMOD)).toBe(0);
  });

  it('two (and ten) concurrent follows of the same mod by one user leave exactly one row and +1', async () => {
    const before = await modCounters(STACKMOD);
    const results = await Promise.all(
      Array.from({ length: 10 }, () => call('PUT', `/api/v2/mods/${STACKMOD}/follow`, alice, { notify: true })),
    );
    for (const r of results) {
      expect(r.status).toBe(200);
      expect(r.body).toMatchObject({ following: true, notify: true });
    }
    expect(await favoriteRows(alice, STACKMOD)).toBe(1);
    const after = await modCounters(STACKMOD);
    expect(after.favoritesCount).toBe(before.favoritesCount + 1);
    expect(after.updatedAt).toBe(before.updatedAt);
    expect(Math.max(...results.map((r) => r.body?.followers as number))).toBe(after.favoritesCount);
    expect(await events('follow.mod_created', 'userId', alice)).toBe(1);
    expect(await favoriteRows(alice, STACKMOD)).toBe(1);
  });

  it('keeps favoritesCount coherent with concurrent follows and unfollows of many users', async () => {
    const users = await Promise.all(Array.from({ length: 8 }, (_, i) => createUser(`follow-crowd-${i}`)));
    const before = await modCounters(AXEL_MOD_MENU);
    const rowsBefore = (
      await exec(db, `SELECT count(*)::int AS n FROM "ModFavorite" WHERE "modId" = $1`, [AXEL_MOD_MENU])
    ).rows[0].n;
    await Promise.all(
      users.flatMap((u) => [
        call('PUT', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, u, { notify: true }),
        call('PUT', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, u, { notify: false }),
      ]),
    );
    const mid = await modCounters(AXEL_MOD_MENU);
    const rowsMid = (await exec(db, `SELECT count(*)::int AS n FROM "ModFavorite" WHERE "modId" = $1`, [AXEL_MOD_MENU]))
      .rows[0].n;
    expect(rowsMid - rowsBefore).toBe(users.length);
    expect(mid.favoritesCount - before.favoritesCount).toBe(users.length);

    await Promise.all(
      users
        .slice(0, 5)
        .flatMap((u) => [
          call('DELETE', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, u),
          call('DELETE', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, u),
        ]),
    );
    const after = await modCounters(AXEL_MOD_MENU);
    const rowsAfter = (
      await exec(db, `SELECT count(*)::int AS n FROM "ModFavorite" WHERE "modId" = $1`, [AXEL_MOD_MENU])
    ).rows[0].n;
    expect(rowsAfter - rowsBefore).toBe(3);
    expect(after.favoritesCount - before.favoritesCount).toBe(3);
    expect(after.updatedAt).toBe(before.updatedAt);
    const state = await call('DELETE', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, users[0] as number);
    expect(state.body).toEqual({ following: false, notify: false, followers: after.favoritesCount });
  });

  it('changing notify updates the row without a new follow or event', async () => {
    const res = await call('PUT', `/api/v2/mods/${STACKMOD}/follow`, alice, { notify: false });
    expect(res.body).toMatchObject({ following: true, notify: false });
    const row = await exec(db, `SELECT "notify" FROM "ModFavorite" WHERE "userId" = $1 AND "modId" = $2`, [
      alice,
      STACKMOD,
    ]);
    expect(row.rows).toEqual([{ notify: false }]);
    expect(await events('follow.mod_created', 'userId', alice)).toBe(1);
  });

  it('notify defaults to true', async () => {
    const res = await call('PUT', `/api/v2/mods/${SONS_AX_LIB}/follow`, bob, {});
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ following: true, notify: true });
  });

  it('unfollow removes legacy duplicates too and decrements by the rows removed', async () => {
    // A legacy duplicate (B5 not run yet in production).
    await exec(db, `INSERT INTO "ModFavorite" ("userId", "modId") VALUES ($1, $2)`, [bob, SONS_AX_LIB]);
    await exec(db, `UPDATE "Mod" SET "favoritesCount" = "favoritesCount" + 1 WHERE "id" = $1`, [SONS_AX_LIB]);
    const before = await modCounters(SONS_AX_LIB);
    const res = await call('DELETE', `/api/v2/mods/${SONS_AX_LIB}/follow`, bob);
    expect(res.status).toBe(200);
    expect(await favoriteRows(bob, SONS_AX_LIB)).toBe(0);
    expect((await modCounters(SONS_AX_LIB)).favoritesCount).toBe(before.favoritesCount - 2);
    expect(await events('follow.mod_deleted', 'userId', bob)).toBe(1);
  });

  it('refuses mods that are not reachable (unknown, pending without checks, removed); unfollow still works', async () => {
    expect((await call('PUT', '/api/v2/mods/999999/follow', alice, { notify: true })).status).toBe(404);
    expect((await call('PUT', `/api/v2/mods/${ALTERNATE_OUTFITS}/follow`, alice, { notify: true })).status).toBe(404);
    await call('PUT', `/api/v2/mods/${removedModId}/follow`, alice, { notify: true });
    await exec(db, `UPDATE "Mod" SET "status" = 'removed' WHERE "id" = $1`, [removedModId]);
    expect((await call('PUT', `/api/v2/mods/${removedModId}/follow`, bob, { notify: true })).status).toBe(404);
    const unfollow = await call('DELETE', `/api/v2/mods/${removedModId}/follow`, alice);
    expect(unfollow.status).toBe(200);
    expect(await favoriteRows(alice, removedModId)).toBe(0);
    expect((await call('DELETE', '/api/v2/mods/999999/follow', alice)).status).toBe(404);
  });
});

describe('follow a creator (UserFollow)', () => {
  it('follows by handle (case-insensitive), idempotently, with counters and events', async () => {
    const first = await call('PUT', `/api/v2/users/${creator.handle.toUpperCase()}/follow`, alice, { notify: true });
    expect(first.status).toBe(200);
    expect(first.body).toMatchObject({ following: true, notify: true });
    const again = await Promise.all([
      call('PUT', `/api/v2/users/${creator.handle}/follow`, alice, { notify: false }),
      call('PUT', `/api/v2/users/${creator.handle}/follow`, alice, { notify: false }),
    ]);
    expect(again.map((r) => r.status)).toEqual([200, 200]);
    const rows = await exec(db, `SELECT "notify" FROM "UserFollow" WHERE "followerId" = $1 AND "followeeId" = $2`, [
      alice,
      creator.id,
    ]);
    expect(rows.rows).toEqual([{ notify: false }]);
    const count = await exec(db, `SELECT count(*)::int AS n FROM "UserFollow" WHERE "followeeId" = $1`, [creator.id]);
    expect(again[0]?.body?.followers).toBe(count.rows[0].n);
    const stats = await exec(
      db,
      `SELECT "followersCount", "followingCount" FROM "UserStats" WHERE "userId" = ANY($1)`,
      [[creator.id, alice]],
    );
    expect(stats.rows.length).toBe(2);
    const followingOfAlice = await exec(db, `SELECT "followingCount" FROM "UserStats" WHERE "userId" = $1`, [alice]);
    expect(followingOfAlice.rows[0].followingCount).toBe(1);
    expect(await events('follow.user_created', 'followerId', alice)).toBe(1);
  });

  it('never follows yourself (403) and 404s unknown or banned users', async () => {
    const handle = (await exec(db, `SELECT "slug" FROM "User" WHERE "id" = $1`, [alice])).rows[0].slug;
    expect((await call('PUT', `/api/v2/users/${handle}/follow`, alice, { notify: true })).status).toBe(403);
    expect((await call('PUT', '/api/v2/users/nobody-here-42/follow', alice, { notify: true })).status).toBe(404);
    const banned = await createUser('follow-banned');
    await exec(db, `UPDATE "User" SET "bannedAt" = now() WHERE "id" = $1`, [banned]);
    expect((await call('PUT', '/api/v2/users/follow-banned/follow', alice, { notify: true })).status).toBe(404);
  });

  it('unfollows (idempotent) and decrements the counters', async () => {
    const res = await call('DELETE', `/api/v2/users/${creator.handle}/follow`, alice);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ following: false });
    expect((await call('DELETE', `/api/v2/users/${creator.handle}/follow`, alice)).status).toBe(200);
    const followingOfAlice = await exec(db, `SELECT "followingCount" FROM "UserStats" WHERE "userId" = $1`, [alice]);
    expect(followingOfAlice.rows[0].followingCount).toBe(0);
    expect(await events('follow.user_deleted', 'followerId', alice)).toBe(1);
  });
});

describe('backpack and lookup', () => {
  it('lists followed mods with the last downloaded version, hasUpdate and compatibility', async () => {
    const carol = await createUser('follow-carol');
    await call('PUT', `/api/v2/mods/${STACKMOD}/follow`, carol, { notify: true });
    await call('PUT', `/api/v2/mods/${AXEL_MOD_MENU}/follow`, carol, { notify: false });
    // Carol downloaded an older StackMod version before the latest was released.
    const versions = await exec(
      db,
      `SELECT "id", "version", "isLatest", "createdAt" FROM "ModVersion" WHERE "modId" = $1 ORDER BY "createdAt"`,
      [STACKMOD],
    );
    const latest = versions.rows.find((v: any) => v.isLatest);
    const older = versions.rows.find((v: any) => !v.isLatest && v.version !== latest.version);
    expect(latest && older).toBeTruthy();
    await exec(
      db,
      `INSERT INTO "ModDownload" ("ip", "userAgent", "createdAt", "modVersionId", "userId")
       VALUES ('h', 'test', $1::timestamptz - interval '1 second', $2, $3)`,
      [latest.createdAt, older.id, carol],
    );
    // Compatibility of the latest version on the current build.
    await exec(db, `UPDATE "GameBuild" SET "isCurrent" = false WHERE "isCurrent"`);
    const build = await exec(
      db,
      `INSERT INTO "GameBuild" ("label", "isCurrent", "isBreaking", "releasedAt") VALUES ('wp42-test', true, false, now())
       RETURNING "id"`,
    );
    await exec(
      db,
      `INSERT INTO "ModVersionCompat" ("modVersionId", "gameBuildId", "works", "partial", "broken", "computedStatus")
       VALUES ($1, $2, 5, 1, 0, 'works')`,
      [latest.id, build.rows[0].id],
    );

    const res = await call('GET', '/api/v2/me/follows', carol);
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('private, no-store');
    const ids = res.body?.items.map((i: any) => i.mod.id);
    expect(ids).toEqual([AXEL_MOD_MENU, STACKMOD].filter((id) => ids.includes(id)));
    expect(ids).toHaveLength(2);
    const stack = res.body?.items.find((i: any) => i.mod.id === STACKMOD);
    expect(stack).toMatchObject({
      notify: true,
      lastDownloadedVersion: older.version,
      hasUpdate: true,
      compat: {
        status: 'works',
        works: 5,
        partial: 1,
        broken: 0,
        gameBuild: { id: build.rows[0].id, isCurrent: true },
      },
    });
    const axel = res.body?.items.find((i: any) => i.mod.id === AXEL_MOD_MENU);
    expect(axel).toMatchObject({ notify: false, lastDownloadedVersion: null, hasUpdate: false });
    expect(axel.compat.status).toBe('untested');
    expect(res.body?.updatesAvailable).toBe(1);

    // Downloading the latest clears the update.
    await exec(
      db,
      `INSERT INTO "ModDownload" ("ip", "userAgent", "createdAt", "modVersionId", "userId") VALUES ('h', 'test', now(), $1, $2)`,
      [latest.id, carol],
    );
    const after = await call('GET', '/api/v2/me/follows', carol);
    expect(after.body?.items.find((i: any) => i.mod.id === STACKMOD)).toMatchObject({
      lastDownloadedVersion: latest.version,
      hasUpdate: false,
    });
    expect(after.body?.updatesAvailable).toBe(0);
  });

  it('hides mods that stopped being public from the backpack but keeps removed ones visible as removed', async () => {
    const dave = await createUser('follow-dave');
    await call('PUT', `/api/v2/mods/${SONS_AX_LIB}/follow`, dave, { notify: true });
    await exec(db, `INSERT INTO "ModFavorite" ("userId", "modId") VALUES ($1, $2)`, [dave, removedModId]);
    await publishCacheInvalidation(t.db.db, [`mod:${removedModId}`]);
    await expect
      .poll(
        async () =>
          (await call('GET', '/api/v2/me/follows', dave)).body?.items.map((i: any) => [i.mod.id, i.mod.status]),
        {
          timeout: 10_000,
        },
      )
      .toEqual([
        [removedModId, 'removed'],
        [SONS_AX_LIB, 'published'],
      ]);
  });

  it('answers the lookup for the ♥ buttons of cached pages', async () => {
    const res = await call(
      'GET',
      `/api/v2/me/follows/lookup?mod=${STACKMOD}&mod=${SONS_AX_LIB}&mod=999999&user=${creator.id}`,
      alice,
    );
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('private, no-store');
    expect(res.body).toEqual({ mods: [STACKMOD], users: [] });
    expect((await call('GET', '/api/v2/me/follows/lookup', null)).status).toBe(401);
  });
});
