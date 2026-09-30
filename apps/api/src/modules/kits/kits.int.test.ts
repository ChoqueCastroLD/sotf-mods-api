// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * WP-42 acceptance (kits): CRUD with owner-only writes, unique share codes (`KIT-XXXX-XX`) and
 * derived slugs under concurrency, visibility (public listed · unlisted by link · private owner
 * only, never publicly cached), items with automatic dependencies, pins, conflicts, the
 * multiplayer/compatibility summaries, revisions, fork with attribution, soft delete, the
 * listings (sort, staff picks, compat filter, profile tab with `hideKits`) and events. Runs on the
 * small development seed (PostgreSQL 16).
 */
import { KitCode } from '@sotf/contracts/kits';
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
const ALTERNATE_OUTFITS = 133; // pending with unchecked versions: not addable

let owner: number;
let other: number;
let unverified: number;

async function createUser(handle: string, verified = true): Promise<number> {
  const res = await exec(
    db,
    `INSERT INTO "User" ("email", "password", "name", "slug", "emailVerifiedAt")
     VALUES ($1, 'x', $2, $2, ${verified ? 'now()' : 'NULL'}) RETURNING "id"`,
    [`${handle}@example.test`, handle],
  );
  return res.rows[0].id;
}

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

async function call(method: Method, url: string, userId: number | null, body?: unknown, emailVerified = true) {
  const headers = {
    ...t.sameOrigin(),
    ...(userId === null ? {} : t.as({ userId, emailVerified })),
  };
  const res = await t.app.inject({
    method,
    url,
    headers,
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  return { status: res.statusCode, headers: res.headers, body: res.body ? (res.json() as Record<string, any>) : null };
}

async function createKit(userId: number, body: Record<string, unknown>) {
  const res = await call('POST', '/api/v2/kits', userId, body);
  expect(res.status).toBe(201);
  return res.body as Record<string, any>;
}

async function events(type: string, kitId: number): Promise<number> {
  const res = await exec(
    db,
    `SELECT count(*)::int AS n FROM pgboss.job WHERE name = 'domain.event' AND data->>'type' = $1
       AND (data->'payload'->>'kitId')::int = $2`,
    [type, kitId],
  );
  return res.rows[0].n;
}

async function latestVersionId(modId: number): Promise<number> {
  const res = await exec(
    db,
    `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 AND "isLatest" ORDER BY "id" DESC LIMIT 1`,
    [modId],
  );
  return res.rows[0].id;
}

beforeAll(async () => {
  db = await startSeededDb();
  owner = await createUser('kit-owner');
  other = await createUser('kit-other');
  unverified = await createUser('kit-unverified', false);
  // StackMod declares a conflict with Custom Stacks (by manifest id).
  const manifest = await exec(db, `SELECT "mod_id" FROM "Mod" WHERE "id" = $1`, [CUSTOM_STACKS]);
  await exec(db, `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "kind") VALUES ($1, $2, 'conflicts')`, [
    await latestVersionId(STACKMOD),
    manifest.rows[0].mod_id,
  ]);
  // Multiplayer roles for the summary.
  await exec(
    db,
    `UPDATE "Mod" SET "multiplayerRole" = v.role
       FROM (VALUES (${AXEL_MOD_MENU}, 'all_players'), (${SONS_AX_LIB}, 'all_players'), (${STACKMOD}, 'host_only'), (${CUSTOM_STACKS}, 'client_side')) AS v(id, role)
      WHERE "Mod"."id" = v.id`,
  );
  t = await buildTestApp({
    db,
    rateLimits: {
      kitsWrite: { max: 100_000, window: '1 minute' },
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
  await publishCacheInvalidation(t.db.db, ['list:mods']);
  await waitUntilCalm(t.app);
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('create', () => {
  it('needs a session and a verified email', async () => {
    expect((await call('POST', '/api/v2/kits', null, { name: 'Nope' })).status).toBe(401);
    const res = await call('POST', '/api/v2/kits', unverified, { name: 'Nope' }, false);
    expect(res.status).toBe(403);
    expect(res.body?.code).toBe('EMAIL_NOT_VERIFIED');
  });

  it('creates a kit with a share code, a derived slug, revision 1 and a private (no-store) response', async () => {
    const res = await call('POST', '/api/v2/kits', owner, {
      name: 'Dédié Server Pack!',
      descriptionMd: '<script>alert(1)</script> **bold**',
      visibility: 'public',
    });
    expect(res.status).toBe(201);
    expect(res.headers['cache-control']).toBe('no-store');
    const kit = res.body as Record<string, any>;
    expect(KitCode.safeParse(kit.code).success).toBe(true);
    expect(kit).toMatchObject({
      slug: 'dedie-server-pack',
      name: 'Dédié Server Pack!',
      canonicalPath: '/kits/kit-owner/dedie-server-pack',
      visibility: 'public',
      revision: 1,
      itemsCount: 0,
      items: [],
      forkedFrom: null,
      noindex: true,
      descriptionMd: '<script>alert(1)</script> **bold**',
      recentRevisions: [{ revision: 1, summary: 'Created' }],
      owner: { id: owner, handle: 'kit-owner' },
    });
    expect(kit.descriptionHtml).not.toContain('<script');
    expect(kit.descriptionHtml).toContain('&lt;script&gt;');
    expect(await events('kit.created', kit.id)).toBe(1);
  });

  it('gives unique codes and unique derived slugs to concurrent creates', async () => {
    const results = await Promise.all(
      Array.from({ length: 12 }, () =>
        call('POST', '/api/v2/kits', owner, { name: 'Same Name', visibility: 'private' }),
      ),
    );
    expect(results.map((r) => r.status)).toEqual(Array(12).fill(201));
    const codes = results.map((r) => r.body?.code);
    const slugs = results.map((r) => r.body?.slug);
    expect(new Set(codes).size).toBe(12);
    expect(new Set(slugs).size).toBe(12);
    expect(slugs).toContain('same-name');
    expect(slugs).toContain('same-name-12');
    const dupes = await exec(db, `SELECT "code" FROM "Kit" GROUP BY "code" HAVING count(*) > 1`);
    expect(dupes.rows).toEqual([]);
  });

  it('refuses an explicit slug that is taken (409) and a cover that is not an image upload of the user', async () => {
    await createKit(owner, { name: 'Explicit', slug: 'explicit-slug' });
    const clash = await call('POST', '/api/v2/kits', owner, { name: 'Explicit 2', slug: 'explicit-slug' });
    expect(clash.status).toBe(409);
    const cover = await call('POST', '/api/v2/kits', owner, {
      name: 'With cover',
      coverUploadId: '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f',
    });
    expect(cover.status).toBe(422);
  });

  it('uses a processed image upload of the user as the cover', async () => {
    const media = await exec(
      db,
      `INSERT INTO "Media" ("id", "ownerId", "purpose", "sourceBucket", "sourceKey", "status", "width", "height", "variants")
       VALUES (gen_random_uuid(), $1, 'kit_cover', $2, 'media/test/cover.png', 'ready', 1200, 630, $3::jsonb) RETURNING "id"`,
      [
        owner,
        t.env.R2_BUCKET,
        JSON.stringify([{ key: 'media/test/cover-640.webp', w: 640, h: 336, format: 'webp', bytes: 1000 }]),
      ],
    );
    const upload = await exec(
      db,
      `INSERT INTO "Upload" ("id", "userId", "purpose", "bucket", "key", "filename", "contentType", "declaredBytes", "maxBytes",
                             "status", "resultRef", "expiresAt")
       VALUES (gen_random_uuid(), $1, 'image', 'private', 'incoming/x', 'cover.png', 'image/png', 10, 100, 'ready', $2::jsonb, now() + interval '1 day')
       RETURNING "id"`,
      [owner, JSON.stringify({ mediaId: media.rows[0].id })],
    );
    const kit = await createKit(owner, { name: 'Covered', coverUploadId: upload.rows[0].id });
    expect(kit.cover?.url).toContain('media/test/cover-640.webp');
    // Somebody else's upload is refused.
    const stolen = await call('POST', '/api/v2/kits', other, { name: 'Stolen', coverUploadId: upload.rows[0].id });
    expect(stolen.status).toBe(422);
    // Removing the cover.
    const cleared = await call('PATCH', `/api/v2/kits/${kit.id}`, owner, { coverUploadId: null });
    expect(cleared.body?.cover).toBeNull();
  });
});

describe('items, dependencies, conflicts and revisions', () => {
  let kit: Record<string, any>;

  beforeAll(async () => {
    kit = await createKit(owner, { name: 'Coop essentials', visibility: 'public', descriptionMd: 'For a first run.' });
  });

  it('adds required dependencies automatically as auto items and records a revision', async () => {
    const res = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [{ modId: AXEL_MOD_MENU, note: 'Press F1' }],
    });
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('no-store');
    const body = res.body as Record<string, any>;
    expect(body.items.map((i: any) => [i.mod.id, i.isAutoDependency, i.position])).toEqual([
      [AXEL_MOD_MENU, false, 0],
      [SONS_AX_LIB, true, 1],
    ]);
    expect(body.items[0].note).toBe('Press F1');
    expect(body.revision).toBe(2);
    expect(body.itemsCount).toBe(2);
    expect(body.recentRevisions[0].revision).toBe(2);
    expect(body.recentRevisions[0].summary).toMatch(/^\+.+, \+.+$/);
    expect(body.multiplayer).toEqual({ allPlayers: 2, hostOnly: 0, clientSide: 0, singleplayerOnly: 0, unknown: 0 });
    expect(body.compat.conflicts).toBe(0);
    expect(await events('kit.updated', kit.id)).toBe(1);
  });

  it('does not create a revision when nothing changed, and keeps auto items the explicit list still needs', async () => {
    const res = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [{ modId: AXEL_MOD_MENU, note: 'Press F1' }],
    });
    expect(res.body?.revision).toBe(2);
    expect(await events('kit.updated', kit.id)).toBe(1);
  });

  it('detects conflicts, summarises multiplayer roles and total size, and uses the custom revision summary', async () => {
    const res = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [{ modId: STACKMOD }, { modId: AXEL_MOD_MENU, note: 'Press F1' }, { modId: CUSTOM_STACKS }],
      revisionSummary: '+StackMod and Custom Stacks',
    });
    expect(res.status).toBe(200);
    const body = res.body as Record<string, any>;
    expect(body.items.map((i: any) => i.mod.id)).toEqual([STACKMOD, AXEL_MOD_MENU, CUSTOM_STACKS, SONS_AX_LIB]);
    expect(body.compat.conflicts).toBe(1);
    expect(body.compat.works + body.compat.untested + body.compat.broken).toBe(4);
    expect(body.multiplayer).toEqual({ allPlayers: 2, hostOnly: 1, clientSide: 1, singleplayerOnly: 0, unknown: 0 });
    expect(body.revision).toBe(3);
    expect(body.recentRevisions.map((r: any) => r.summary)[0]).toBe('+StackMod and Custom Stacks');
    expect(body.noindex).toBe(false);
    const sizes = await exec(
      db,
      `SELECT sum("fileSize")::bigint AS n FROM "ModVersion" WHERE "isLatest" AND "modId" = ANY($1) AND "status" <> 'rejected'`,
      [[STACKMOD, AXEL_MOD_MENU, CUSTOM_STACKS, SONS_AX_LIB]],
    );
    expect(body.totalBytes).toBe(sizes.rows[0].n === null ? null : Number(sizes.rows[0].n));
  });

  it('pins a version of the mod and refuses pins of other mods', async () => {
    const versions = await exec(
      db,
      `SELECT "id", "version" FROM "ModVersion" WHERE "modId" = $1 AND NOT "isLatest" AND "status" = 'active' ORDER BY "id" LIMIT 1`,
      [STACKMOD],
    );
    const old = versions.rows[0];
    const res = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [
        { modId: STACKMOD, pinnedVersionId: old.id },
        { modId: AXEL_MOD_MENU, note: 'Press F1' },
      ],
    });
    expect(res.status).toBe(200);
    expect(res.body?.items[0].pinnedVersion).toEqual({ id: old.id, version: old.version });
    expect(res.body?.items.find((i: any) => i.mod.id === AXEL_MOD_MENU).pinnedVersion).toBeNull();
    const wrong = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [{ modId: AXEL_MOD_MENU, pinnedVersionId: old.id }],
    });
    expect(wrong.status).toBe(422);
    expect(wrong.body?.errors?.[0]?.path).toBe('items.0.pinnedVersionId');
  });

  it('refuses unknown or unavailable mods and duplicates (422), and non-owners (403)', async () => {
    const unknown = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, { items: [{ modId: 999999 }] });
    expect(unknown.status).toBe(422);
    expect(unknown.body?.errors?.[0]?.path).toBe('items.0.modId');
    const pending = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, { items: [{ modId: ALTERNATE_OUTFITS }] });
    expect(pending.status).toBe(422);
    const dupes = await call('PUT', `/api/v2/kits/${kit.id}/items`, owner, {
      items: [{ modId: STACKMOD }, { modId: STACKMOD }],
    });
    expect(dupes.status).toBe(422);
    const notMine = await call('PUT', `/api/v2/kits/${kit.id}/items`, other, { items: [{ modId: STACKMOD }] });
    expect(notMine.status).toBe(403);
  });
});

describe('visibility and caching', () => {
  let publicKit: Record<string, any>;
  let unlistedKit: Record<string, any>;
  let privateKit: Record<string, any>;

  beforeAll(async () => {
    publicKit = await createKit(owner, { name: 'Visible kit', visibility: 'public', descriptionMd: 'Hello' });
    unlistedKit = await createKit(owner, { name: 'Link only kit', visibility: 'unlisted' });
    privateKit = await createKit(owner, { name: 'Secret kit', visibility: 'private' });
    for (const k of [publicKit, unlistedKit, privateKit]) {
      const res = await call('PUT', `/api/v2/kits/${k.id}/items`, owner, { items: [{ modId: STACKMOD }] });
      expect(res.status).toBe(200);
    }
  });

  it('serves public kits to anyone with public cache headers and without descriptionMd', async () => {
    const res = await call('GET', `/api/v2/kits/${publicKit.id}`, null);
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('public, max-age=0');
    expect(res.headers['cache-tag']).toContain(`kit:${publicKit.id}`);
    expect(res.headers['cache-tag']).toContain(`user:${owner}`);
    expect(res.body).not.toHaveProperty('descriptionMd');
    expect(res.body?.descriptionHtml).toBe('<p>Hello</p>');
    const bySlug = await call('GET', `/api/v2/kits/by-slug/KIT-OWNER/visible-kit`, other);
    expect(bySlug.status).toBe(200);
    expect(bySlug.body?.id).toBe(publicKit.id);
  });

  it('never personalises the cacheable reads: the owner gets the anonymous view; writes return the owner view', async () => {
    const res = await call('GET', `/api/v2/kits/${publicKit.id}`, owner);
    expect(res.status).toBe(200);
    expect(res.headers['cache-control']).toBe('public, max-age=0');
    expect(res.body).not.toHaveProperty('descriptionMd');
    const edit = await call('PATCH', `/api/v2/kits/${publicKit.id}`, owner, { descriptionMd: 'Hello' });
    expect(edit.status).toBe(200);
    expect(edit.headers['cache-control']).toBe('no-store');
    expect(edit.body?.descriptionMd).toBe('Hello');
  });

  it('serves unlisted kits by id, slug and code (any form) but never lists them', async () => {
    const code: string = unlistedKit.code;
    const short = code.slice(4).replace('-', '');
    for (const url of [
      `/api/v2/kits/${unlistedKit.id}`,
      `/api/v2/kits/by-slug/kit-owner/link-only-kit`,
      `/api/v2/kits/by-code/${code}`,
      `/api/v2/kits/by-code/${short.toLowerCase()}`,
    ]) {
      const res = await call('GET', url, other);
      expect(res.status, url).toBe(200);
      expect(res.body?.id).toBe(unlistedKit.id);
      expect(res.body?.noindex).toBe(true);
    }
    const listed = await call('GET', '/api/v2/kits?pageSize=100', null);
    const ids = listed.body?.items.map((k: any) => k.id);
    expect(ids).toContain(publicKit.id);
    expect(ids).not.toContain(unlistedKit.id);
    expect(ids).not.toContain(privateKit.id);
  });

  it('hides private kits from the public reads (404, never 403); only the owner can act on them', async () => {
    for (const url of [
      `/api/v2/kits/${privateKit.id}`,
      `/api/v2/kits/by-slug/kit-owner/secret-kit`,
      `/api/v2/kits/by-code/${privateKit.code}`,
    ]) {
      expect((await call('GET', url, null)).status, url).toBe(404);
      expect((await call('GET', url, other)).status, url).toBe(404);
      // Cacheable reads are anonymous by design, even for the owner.
      expect((await call('GET', url, owner)).status, url).toBe(404);
    }
    const mine = await call('PATCH', `/api/v2/kits/${privateKit.id}`, owner, { name: 'Secret kit' });
    expect(mine.status).toBe(200);
    expect(mine.body).toMatchObject({ id: privateKit.id, visibility: 'private', itemsCount: 1 });
    expect((await call('PATCH', `/api/v2/kits/${privateKit.id}`, other, { name: 'Mine now' })).status).toBe(404);
    expect((await call('POST', `/api/v2/kits/${privateKit.id}/fork`, other, {})).status).toBe(404);
    expect((await call('DELETE', `/api/v2/kits/${privateKit.id}`, other)).status).toBe(404);
  });

  it('refuses edits of other users on visible kits with 403', async () => {
    expect((await call('PATCH', `/api/v2/kits/${publicKit.id}`, other, { name: 'Mine now' })).status).toBe(403);
    expect((await call('DELETE', `/api/v2/kits/${publicKit.id}`, other)).status).toBe(403);
  });

  it('lists the owner kits of any visibility in /me/kits and only public ones on the profile', async () => {
    const mine = await call('GET', '/api/v2/me/kits', owner);
    expect(mine.status).toBe(200);
    expect(mine.headers['cache-control']).toBe('private, no-store');
    const mineIds = mine.body?.items.map((k: any) => k.id);
    expect(mineIds).toEqual(expect.arrayContaining([publicKit.id, unlistedKit.id, privateKit.id]));
    const profile = await call('GET', '/api/v2/users/kit-owner/kits?pageSize=100', null);
    expect(profile.status).toBe(200);
    expect(profile.headers['cache-tag']).toContain(`user:${owner}`);
    const profileIds = profile.body?.items.map((k: any) => k.id);
    expect(profileIds).toContain(publicKit.id);
    expect(profileIds).not.toContain(unlistedKit.id);
    expect(profileIds).not.toContain(privateKit.id);
    expect(profile.body?.items.every((k: any) => k.visibility === 'public')).toBe(true);
    const card = profile.body?.items.find((k: any) => k.id === publicKit.id);
    expect(card.previewThumbnails.length).toBeLessThanOrEqual(6);
    expect(card.itemsCount).toBe(1);
  });

  it('respects hideKits on the profile tab', async () => {
    await exec(db, `UPDATE "User" SET "privacy" = '{"hideKits": true}'::jsonb WHERE "id" = $1`, [owner]);
    await publishCacheInvalidation(t.db.db, [`user:${owner}`]);
    await expect
      .poll(async () => (await call('GET', '/api/v2/users/kit-owner/kits', null)).body?.total, { timeout: 10_000 })
      .toBe(0);
    await exec(db, `UPDATE "User" SET "privacy" = '{}'::jsonb WHERE "id" = $1`, [owner]);
    await publishCacheInvalidation(t.db.db, [`user:${owner}`]);
  });

  it('switching visibility takes effect immediately', async () => {
    const res = await call('PATCH', `/api/v2/kits/${publicKit.id}`, owner, { visibility: 'private' });
    expect(res.status).toBe(200);
    expect(res.body?.visibility).toBe('private');
    expect((await call('GET', `/api/v2/kits/${publicKit.id}`, null)).status).toBe(404);
    await call('PATCH', `/api/v2/kits/${publicKit.id}`, owner, { visibility: 'public' });
    expect((await call('GET', `/api/v2/kits/${publicKit.id}`, null)).status).toBe(200);
  });

  it('hides kits of banned owners from everybody else', async () => {
    const banned = await createUser('kit-banned');
    const kit = await createKit(banned, { name: 'Banned kit', visibility: 'public' });
    await exec(db, `UPDATE "User" SET "bannedAt" = now() WHERE "id" = $1`, [banned]);
    expect((await call('GET', `/api/v2/kits/${kit.id}`, null)).status).toBe(404);
  });
});

describe('edit, fork and delete', () => {
  it('renames, changes the slug (409 when taken) and keeps the code', async () => {
    const kit = await createKit(owner, { name: 'Renamable', visibility: 'public' });
    await createKit(owner, { name: 'Occupied' });
    const clash = await call('PATCH', `/api/v2/kits/${kit.id}`, owner, { slug: 'occupied' });
    expect(clash.status).toBe(409);
    const res = await call('PATCH', `/api/v2/kits/${kit.id}`, owner, { name: 'Renamed', slug: 'renamed-kit' });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      name: 'Renamed',
      slug: 'renamed-kit',
      code: kit.code,
      canonicalPath: '/kits/kit-owner/renamed-kit',
    });
    expect(await events('kit.updated', kit.id)).toBe(1);
  });

  it('forks a visible kit with attribution, items, notes and pins; private by default', async () => {
    const source = await createKit(owner, { name: 'Forkable', visibility: 'unlisted', descriptionMd: 'Original' });
    await call('PUT', `/api/v2/kits/${source.id}/items`, owner, { items: [{ modId: AXEL_MOD_MENU, note: 'F1' }] });
    const res = await call('POST', `/api/v2/kits/${source.id}/fork`, other, {});
    expect(res.status).toBe(201);
    const fork = res.body as Record<string, any>;
    expect(fork).toMatchObject({
      name: 'Forkable',
      slug: 'forkable',
      visibility: 'private',
      revision: 1,
      itemsCount: 2,
      owner: { id: other },
      descriptionMd: 'Original',
    });
    expect(fork.code).not.toBe(source.code);
    // Unlisted sources are not advertised as attribution (only public ones are).
    expect(fork.forkedFrom).toBeNull();
    expect(fork.items.map((i: any) => [i.mod.id, i.note, i.isAutoDependency])).toEqual([
      [AXEL_MOD_MENU, 'F1', false],
      [SONS_AX_LIB, null, true],
    ]);
    expect(fork.recentRevisions[0].summary).toBe('Forked from Forkable');
    const stored = await exec(db, `SELECT "forkedFromId" FROM "Kit" WHERE "id" = $1`, [fork.id]);
    expect(stored.rows[0].forkedFromId).toBe(source.id);
    await call('PATCH', `/api/v2/kits/${source.id}`, owner, { visibility: 'public' });
    const again = await call('PATCH', `/api/v2/kits/${fork.id}`, other, { visibility: 'public' });
    expect(again.status).toBe(200);
    expect(again.body?.forkedFrom).toEqual({
      id: source.id,
      name: 'Forkable',
      canonicalPath: '/kits/kit-owner/forkable',
      ownerHandle: 'kit-owner',
    });
    const named = await call('POST', `/api/v2/kits/${source.id}/fork`, other, {
      name: 'My take',
      visibility: 'public',
    });
    expect(named.body).toMatchObject({ name: 'My take', slug: 'my-take', visibility: 'public' });
  });

  it('soft-deletes: 404 afterwards, the slug is reusable and the code stays reserved', async () => {
    const kit = await createKit(owner, { name: 'Ephemeral', slug: 'ephemeral', visibility: 'public' });
    const res = await call('DELETE', `/api/v2/kits/${kit.id}`, owner);
    expect(res.status).toBe(204);
    expect((await call('GET', `/api/v2/kits/${kit.id}`, owner)).status).toBe(404);
    expect((await call('GET', `/api/v2/kits/by-code/${kit.code}`, null)).status).toBe(404);
    expect((await call('DELETE', `/api/v2/kits/${kit.id}`, owner)).status).toBe(404);
    const row = await exec(db, `SELECT "deletedAt" IS NOT NULL AS deleted, "code" FROM "Kit" WHERE "id" = $1`, [
      kit.id,
    ]);
    expect(row.rows[0]).toEqual({ deleted: true, code: kit.code });
    const reused = await createKit(owner, { name: 'Ephemeral again', slug: 'ephemeral' });
    expect(reused.slug).toBe('ephemeral');
    expect(reused.code).not.toBe(kit.code);
    expect(await events('kit.deleted', kit.id)).toBe(1);
  });
});

describe('public listing', () => {
  it('sorts by new, filters staff picks and compat=works (no broken item, no conflict)', async () => {
    const clean = await createKit(other, { name: 'Clean kit', visibility: 'public' });
    await call('PUT', `/api/v2/kits/${clean.id}/items`, other, { items: [{ modId: AXEL_MOD_MENU }] });
    const conflicted = await createKit(other, { name: 'Conflicted kit', visibility: 'public' });
    await call('PUT', `/api/v2/kits/${conflicted.id}/items`, other, {
      items: [{ modId: STACKMOD }, { modId: CUSTOM_STACKS }],
    });
    const empty = await createKit(other, { name: 'Empty public kit', visibility: 'public' });

    const newest = await call('GET', '/api/v2/kits?sort=new&pageSize=100', null);
    expect(newest.status).toBe(200);
    expect(newest.headers['cache-tag']).toContain('list:kits');
    const ids = newest.body?.items.map((k: any) => k.id);
    expect(ids.indexOf(conflicted.id)).toBeLessThan(ids.indexOf(clean.id));
    expect(ids).not.toContain(empty.id);
    expect(newest.body?.total).toBe(ids.length);

    const works = await call('GET', '/api/v2/kits?compat=works&pageSize=100', null);
    const worksIds = works.body?.items.map((k: any) => k.id);
    expect(worksIds).toContain(clean.id);
    expect(worksIds).not.toContain(conflicted.id);

    await exec(db, `UPDATE "Kit" SET "isStaffPick" = true WHERE "id" = $1`, [clean.id]);
    const picks = await call('GET', '/api/v2/kits?staffPick=1', null);
    expect(picks.body?.items.map((k: any) => k.id)).toEqual([clean.id]);
    expect(picks.body?.items[0].isStaffPick).toBe(true);

    const page2 = await call('GET', '/api/v2/kits?sort=new&pageSize=1&page=2', null);
    expect(page2.body).toMatchObject({ page: 2, pageSize: 1, total: ids.length, totalPages: ids.length });
    expect(page2.body?.items.map((k: any) => k.id)).toEqual([ids[1]]);
  });

  it('404s unknown kits and malformed codes', async () => {
    expect((await call('GET', '/api/v2/kits/999999', null)).status).toBe(404);
    expect((await call('GET', '/api/v2/kits/by-code/NOT-A-CODE', null)).status).toBe(404);
    expect((await call('GET', '/api/v2/kits/by-slug/nobody/nothing', null)).status).toBe(404);
    expect((await call('GET', '/api/v2/users/nobody-at-all/kits', null)).status).toBe(404);
  });
});
