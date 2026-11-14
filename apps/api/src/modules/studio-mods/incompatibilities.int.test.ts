// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Incompatibilities (2026-11, SotF Mods Manager): the owner edits them from the mod editor
 * (`PATCH /studio/mods/:id`), they are stored as `conflicts` of the latest version and served as
 * `incompatibilities` (always a list) by `GET /api/mods` and `GET /api/mods/slug/:u/:s`. Unknown
 * ids, the mod itself and its dependencies are refused. Runs on the small seed.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let owner: TestUser;
const AXEL_MOD_MENU = 20;
const SONS_AX_LIB = 19;
let other: { id: number; manifestId: string };
let self: { manifestId: string; userSlug: string; slug: string };

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  owner = await createTestUser(db, 'incompat-owner');
  await exec(db, `UPDATE "Mod" SET "userId" = $1 WHERE "id" = $2`, [owner.userId, AXEL_MOD_MENU]);
  const found = await exec(
    db,
    `SELECT m."id", m."mod_id" FROM "Mod" m WHERE m."status" = 'published' AND m."id" NOT IN ($1, $2)
       AND coalesce(m."type", 'Mod') <> 'Build' ORDER BY m."id" LIMIT 1`,
    [AXEL_MOD_MENU, SONS_AX_LIB],
  );
  other = { id: Number(found.rows[0].id), manifestId: found.rows[0].mod_id };
  const me = await exec(
    db,
    `SELECT m."mod_id", m."slug", u."slug" AS "userSlug" FROM "Mod" m JOIN "User" u ON u."id" = m."userId" WHERE m."id" = $1`,
    [AXEL_MOD_MENU],
  );
  self = { manifestId: me.rows[0].mod_id, userSlug: me.rows[0].userSlug, slug: me.rows[0].slug };
  // Make sure the dependency on SonsAxLib exists on the latest version.
  await exec(
    db,
    `INSERT INTO "ModDependency" ("modVersionId", "depManifestId", "depModId", "kind")
     SELECT v."id", lib."mod_id", lib."id", 'required' FROM "ModVersion" v, "Mod" lib
      WHERE v."modId" = $1 AND v."isLatest" AND lib."id" = $2
     ON CONFLICT ("modVersionId", "depManifestId") DO NOTHING`,
    [AXEL_MOD_MENU, SONS_AX_LIB],
  );
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
      legacyRead: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

async function legacyDetail() {
  const res = await call(
    'GET',
    `/api/mods/slug/${encodeURIComponent(self.userSlug)}/${encodeURIComponent(self.slug)}`,
    null,
  );
  expect(res.status).toBe(200);
  return res.body.data;
}

async function legacyListItem(manifestId: string) {
  const res = await call('GET', `/api/mods?limit=1000&approved=true&modIds=${encodeURIComponent(manifestId)}`, null);
  expect(res.status).toBe(200);
  return res.body.data.find((m: any) => m.mod_id === manifestId);
}

describe('incompatibilities', () => {
  it('are an empty list, never null, when a mod has none', async () => {
    const detail = await legacyDetail();
    expect(detail.incompatibilities).toEqual([]);
    const keys = Object.keys(detail);
    expect(keys.indexOf('incompatibilities')).toBe(keys.indexOf('dependencies') + 1);
    expect((await legacyListItem(other.manifestId)).incompatibilities).toEqual([]);
  });

  it('are saved from the editor and served by the list and the detail', async () => {
    const res = await call('PATCH', `/api/v2/studio/mods/${AXEL_MOD_MENU}`, owner, {
      incompatibilities: [other.manifestId.toLowerCase()],
    });
    expect(res.status).toBe(200);
    // Stored with the site's own casing.
    expect((await legacyDetail()).incompatibilities).toEqual([other.manifestId]);
    expect((await legacyListItem(self.manifestId)).incompatibilities).toEqual([other.manifestId]);
    // The other mod does not get a copy: the relation is stored once (the launcher checks both ways).
    expect((await legacyListItem(other.manifestId)).incompatibilities).toEqual([]);
  });

  it('refuses unknown mods, the mod itself and its dependencies', async () => {
    for (const [ids, code] of [
      [['DoesNotExist123'], 'incompatibility_unknown'],
      [[self.manifestId], 'incompatibility_self'],
      [['SonsAxLib'], 'incompatibility_dependency'],
    ] as const) {
      const res = await call('PATCH', `/api/v2/studio/mods/${AXEL_MOD_MENU}`, owner, { incompatibilities: ids });
      expect(res.status, code).toBe(422);
      expect(JSON.stringify(res.body)).toContain(code);
    }
    // Nothing changed.
    expect((await legacyDetail()).incompatibilities).toEqual([other.manifestId]);
  });

  it('are cleared with an empty list', async () => {
    const res = await call('PATCH', `/api/v2/studio/mods/${AXEL_MOD_MENU}`, owner, { incompatibilities: [] });
    expect(res.status).toBe(200);
    expect((await legacyDetail()).incompatibilities).toEqual([]);
  });
});
