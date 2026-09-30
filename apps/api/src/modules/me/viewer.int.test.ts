// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Session reads and writes added for the web islands and the console (backlogs WP-30, WP-31,
 * WP-41, WP-42, WP-60, WP-62, WP-70, WP-71, WP-80, WP-81): `GET /me/profile`, creator defaults in
 * the settings, kits in `/me/home`, `GET /me/kits/:id`, `GET /mods/:id/kits`, the featured badges,
 * removing one mod from "My downloads", the social-state lookup and the Turnstile exemption of a
 * creator answering on their own mod. Runs on the small development seed.
 */
import { BADGES } from '@sotf/contracts/gamification';
import type { TurnstileVerifier } from '@sotf/core/auth/index';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { modules } from '../_registry.gen.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';
import { createCommentsModule } from '../comments/module.ts';

let db: TestDb;
let t: TestApp;
let member: TestUser;
let other: TestUser;
let creator: TestUser;
let creatorModId: number;

const SONS_AX_LIB = 19;
const AXEL_MOD_MENU = 20;

/** Every challenge fails: only the exemptions can pass. */
const rejectingTurnstile: TurnstileVerifier = { verify: async () => false };

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

async function latestVersionId(modId: number): Promise<number> {
  const res = await exec(
    db,
    `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 AND "isLatest" ORDER BY "id" DESC LIMIT 1`,
    [modId],
  );
  return Number(res.rows[0].id);
}

beforeAll(async () => {
  db = await startSeededDb();
  member = await createTestUser(db, 'viewer-member');
  other = await createTestUser(db, 'viewer-other');
  creator = await createTestUser(db, 'viewer-creator');
  // Accounts older than 24 h, except the creator (new account, Turnstile would apply).
  await exec(db, `UPDATE "User" SET "createdAt" = now() - interval '30 days' WHERE "id" = ANY($1::int[])`, [
    [member.userId, other.userId],
  ]);
  // The creator owns a published mod (moved from its seed author).
  const mod = await exec(
    db,
    `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND "id" NOT IN (${SONS_AX_LIB}, ${AXEL_MOD_MENU}) ORDER BY "id" LIMIT 1`,
  );
  creatorModId = Number(mod.rows[0].id);
  await exec(db, `UPDATE "Mod" SET "userId" = $1 WHERE "id" = $2`, [creator.userId, creatorModId]);
  const registry = modules.map((m) =>
    m.name === 'comments' ? createCommentsModule({ turnstile: rejectingTurnstile }) : m,
  );
  t = await buildTestApp({
    db,
    modules: registry,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      kitsWrite: { max: 100_000, window: '1 minute' },
      comments: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('profile and settings', () => {
  it('reads the own profile with the bio source, rendered as Markdown lite', async () => {
    const patched = await call('PATCH', '/api/v2/me/profile', member, { bioMd: 'I build **bases** and _cabins_.' });
    expect(patched.status).toBe(200);
    const res = await call('GET', '/api/v2/me/profile', member);
    expect(res.status).toBe(200);
    expect(res.body.bioMd).toBe('I build **bases** and _cabins_.');
    expect(res.body.bioHtml).toContain('<strong>bases</strong>');
    expect(res.body.bioHtml).toContain('<em>cabins</em>');
    expect(res.body.handle).toBe('viewer-member');
    expect((await call('GET', '/api/v2/me/profile', null)).status).toBe(401);
  });

  it('stores the creator defaults (licence and canned replies)', async () => {
    const templates = [{ name: 'Logs', text: 'Please share your RedLoader log.' }];
    const res = await call('PATCH', '/api/v2/me/settings', member, {
      defaultLicense: 'mit',
      replyTemplates: templates,
    });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ defaultLicense: 'mit', replyTemplates: templates });
    const me = await call('GET', '/api/v2/me', member);
    expect(me.body.settings).toMatchObject({ defaultLicense: 'mit', replyTemplates: templates });

    const cleared = await call('PATCH', '/api/v2/me/settings', member, { defaultLicense: null, replyTemplates: [] });
    expect(cleared.body).toMatchObject({ defaultLicense: null, replyTemplates: [] });
    const tooMany = Array.from({ length: 11 }, (_, i) => ({ name: `T${i}`, text: 'x' }));
    expect((await call('PATCH', '/api/v2/me/settings', member, { replyTemplates: tooMany })).status).toBe(422);
    expect((await call('PATCH', '/api/v2/me/settings', member, { defaultLicense: 'wtfpl' })).status).toBe(422);
  });
});

describe('kits', () => {
  it('lists my recent kits in /me/home and reads one of my private kits', async () => {
    const created = await call('POST', '/api/v2/kits', member, { name: 'Secret base kit', visibility: 'private' });
    expect(created.status).toBe(201);
    const home = await call('GET', '/api/v2/me/home', member);
    expect(home.status).toBe(200);
    expect(home.body.recentKits.map((k: any) => k.id)).toContain(created.body.id);

    const own = await call('GET', `/api/v2/me/kits/${created.body.id}`, member);
    expect(own.status).toBe(200);
    expect(own.body).toMatchObject({ id: created.body.id, name: 'Secret base kit', visibility: 'private' });
    expect((await call('GET', `/api/v2/me/kits/${created.body.id}`, other)).status).toBe(404);
    expect((await call('GET', `/api/v2/me/kits/${created.body.id}`, null)).status).toBe(401);
  });

  it('lists the public kits that contain a mod', async () => {
    const kit = await call('POST', '/api/v2/kits', member, { name: 'Menu essentials', visibility: 'public' });
    await call('PUT', `/api/v2/kits/${kit.body.id}/items`, member, { items: [{ modId: AXEL_MOD_MENU }] });
    const hidden = await call('POST', '/api/v2/kits', member, { name: 'Hidden menu kit', visibility: 'private' });
    await call('PUT', `/api/v2/kits/${hidden.body.id}/items`, member, { items: [{ modId: AXEL_MOD_MENU }] });

    const res = await t.app.inject({ method: 'GET', url: `/api/v2/mods/${AXEL_MOD_MENU}/kits?limit=10` });
    expect(res.statusCode).toBe(200);
    const ids = res.json().items.map((k: any) => k.id);
    expect(ids).toContain(kit.body.id);
    expect(ids).not.toContain(hidden.body.id);
    expect(res.headers['cache-tag']).toContain(`mod:${AXEL_MOD_MENU}`);
    // Automatic dependencies count too (Axel's Mod Menu requires SonsAxLib).
    const dep = await t.app.inject({ method: 'GET', url: `/api/v2/mods/${SONS_AX_LIB}/kits` });
    expect(dep.json().items.map((k: any) => k.id)).toContain(kit.body.id);
    const none = await t.app.inject({ method: 'GET', url: '/api/v2/mods/99999999/kits' });
    expect(none.statusCode).toBe(200);
    expect(none.json().items).toEqual([]);
  });
});

describe('featured badges', () => {
  it('features earned badges only and shows them on the profile', async () => {
    expect((await t.app.inject({ method: 'GET', url: '/api/v2/badges' })).statusCode).toBe(200);
    const [first, second, third] = BADGES.filter((b) => !b.secret).map((b) => b.key as string);
    for (const key of [first, second, third]) {
      await exec(
        db,
        `INSERT INTO "UserBadge" ("userId", "badgeId", "contextKey", "isFeatured")
         SELECT $1, b."id", '', true FROM "Badge" b WHERE b."key" = $2`,
        [member.userId, key],
      );
    }
    const res = await call('PATCH', '/api/v2/me/badges/featured', member, { keys: [second] });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ featuredBadgeKeys: [second] });
    const featured = await exec(
      db,
      `SELECT b."key" FROM "UserBadge" ub JOIN "Badge" b ON b."id" = ub."badgeId" WHERE ub."userId" = $1 AND ub."isFeatured"`,
      [member.userId],
    );
    expect(featured.rows.map((r) => r.key)).toEqual([second]);
    const profile = await t.app.inject({ method: 'GET', url: '/api/v2/users/viewer-member' });
    expect(profile.json().featuredBadgeKeys).toEqual([second]);

    const unearned = BADGES.map((b) => b.key as string).find((key) => ![first, second, third].includes(key));
    expect((await call('PATCH', '/api/v2/me/badges/featured', member, { keys: [unearned] })).status).toBe(422);
    expect((await call('PATCH', '/api/v2/me/badges/featured', member, { keys: [first, first] })).status).toBe(422);
    expect((await call('PATCH', '/api/v2/me/badges/featured', member, { keys: [] })).body).toEqual({
      featuredBadgeKeys: [],
    });
  });
});

describe('my downloads', () => {
  it('removes one mod from the history and keeps the others', async () => {
    for (const modId of [AXEL_MOD_MENU, SONS_AX_LIB]) {
      await exec(
        db,
        `INSERT INTO "ModDownload" ("ip", "userAgent", "modVersionId", "userId", "source")
         VALUES ('0.0.0.0', 'test', $1, $2, 'web')`,
        [await latestVersionId(modId), member.userId],
      );
    }
    const before = await call('GET', '/api/v2/me/downloads', member);
    expect(before.body.items.map((i: any) => i.mod.id).sort()).toEqual([SONS_AX_LIB, AXEL_MOD_MENU].sort());

    expect((await call('DELETE', `/api/v2/me/downloads/${AXEL_MOD_MENU}`, member)).status).toBe(204);
    const after = await call('GET', '/api/v2/me/downloads', member);
    expect(after.body.items.map((i: any) => i.mod.id)).toEqual([SONS_AX_LIB]);
    // The downloads keep counting (only the personal link is removed); idempotent.
    const rows = await exec(
      db,
      `SELECT count(*)::int AS n FROM "ModDownload" d JOIN "ModVersion" v ON v."id" = d."modVersionId"
        WHERE v."modId" = $1 AND d."userAgent" = 'test'`,
      [AXEL_MOD_MENU],
    );
    expect(rows.rows[0].n).toBe(1);
    expect((await call('DELETE', `/api/v2/me/downloads/${AXEL_MOD_MENU}`, member)).status).toBe(204);
  });
});

describe('social state', () => {
  it('returns my reactions, comments, votes, review and field reports on a mod', async () => {
    const comment = await call('POST', `/api/v2/mods/${AXEL_MOD_MENU}/comments`, member, {
      bodyMd: 'Works with **SonsAxLib** 1.2',
    });
    expect(comment.status).toBe(201);
    const byOther = await call('POST', `/api/v2/mods/${AXEL_MOD_MENU}/comments`, other, { bodyMd: 'Same here' });
    expect(byOther.status).toBe(201);
    expect((await call('PUT', `/api/v2/comments/${byOther.body.id}/reactions/heart`, member)).status).toBe(200);
    expect((await call('PUT', `/api/v2/comments/${byOther.body.id}/reactions/fire`, member)).status).toBe(200);

    const versionId = await latestVersionId(AXEL_MOD_MENU);
    const review = await exec(
      db,
      `INSERT INTO "ModReview" ("title", "message", "rating", "isHidden", "userId", "modId", "bodyMd", "status", "modVersionId")
       VALUES ('Great', '', 5, false, $1, $2, 'Great **mod**', 'visible', $3) RETURNING "id"`,
      [member.userId, AXEL_MOD_MENU, versionId],
    );
    const otherReview = await exec(
      db,
      `INSERT INTO "ModReview" ("title", "message", "rating", "isHidden", "userId", "modId", "bodyMd", "status")
       VALUES ('Meh', '', 3, false, $1, $2, 'Meh', 'visible') RETURNING "id"`,
      [other.userId, AXEL_MOD_MENU],
    );
    await exec(db, `INSERT INTO "ReviewVote" ("reviewId", "userId", "value") VALUES ($1, $2, -1)`, [
      otherReview.rows[0].id,
      member.userId,
    ]);
    const build = await exec(
      db,
      `INSERT INTO "GameBuild" ("label", "releasedAt", "isCurrent") VALUES ('viewer-test', '2026-09-01', false) RETURNING "id"`,
    );
    await exec(
      db,
      `INSERT INTO "CompatReport" ("userId", "modVersionId", "gameBuildId", "mode", "result", "note")
       VALUES ($1, $2, $3, 'host', 'works', 'Fine with friends')`,
      [member.userId, versionId, build.rows[0].id],
    );

    const res = await call('GET', `/api/v2/me/social-state?modId=${AXEL_MOD_MENU}`, member);
    expect(res.status).toBe(200);
    expect(res.body.modId).toBe(AXEL_MOD_MENU);
    expect(res.body.reactions).toEqual([{ commentId: byOther.body.id, kinds: ['fire', 'heart'] }]);
    expect(res.body.comments).toEqual([
      {
        id: comment.body.id,
        parentId: null,
        status: 'visible',
        hiddenReason: null,
        bodyMd: 'Works with **SonsAxLib** 1.2',
      },
    ]);
    expect(res.body.votes).toEqual([{ reviewId: Number(otherReview.rows[0].id), value: -1 }]);
    expect(res.body.review).toMatchObject({ id: Number(review.rows[0].id), rating: 5, bodyMd: 'Great **mod**' });
    expect(res.body.compatReports).toHaveLength(1);
    expect(res.body.compatReports[0]).toMatchObject({ mode: 'host', result: 'works', note: 'Fine with friends' });

    const theirs = await call('GET', `/api/v2/me/social-state?modId=${AXEL_MOD_MENU}`, other);
    expect(theirs.body.reactions).toEqual([]);
    expect(theirs.body.review).toMatchObject({ id: Number(otherReview.rows[0].id) });
    expect(theirs.body.compatReports).toEqual([]);
    expect((await call('GET', `/api/v2/me/social-state?modId=${AXEL_MOD_MENU}`, null)).status).toBe(401);
  });
});

describe('Turnstile', () => {
  it('lets a new creator answer on their own mod without the challenge, not elsewhere', async () => {
    const own = await call('POST', `/api/v2/mods/${creatorModId}/comments`, creator, {
      bodyMd: 'Thanks for the report!',
    });
    expect(own.status).toBe(201);
    const elsewhere = await call('POST', `/api/v2/mods/${AXEL_MOD_MENU}/comments`, creator, { bodyMd: 'Hello' });
    expect(elsewhere.status).toBe(403);
    expect(elsewhere.body.code).toBe('TURNSTILE_REQUIRED');
  });
});
