// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Admin additions (backlog WP-42, WP-51, WP-60, WP-83, WP-50): the admin taxonomy reads carry the
 * retired state, the hub intro, tag descriptions and sort orders; recategorisation suggestions
 * carry the current tags; kit staff picks; the Markdown source of
 * game build and ecosystem notes. Runs on the small development seed.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type Method, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let admin: TestUser;
let ranger: TestUser;
let member: TestUser;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'admin-one', 'admin');
  ranger = await createTestUser(db, 'admin-ranger', 'moderator');
  member = await createTestUser(db, 'admin-member', 'user');
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      kitsWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('taxonomy reads', () => {
  it('returns the retired state and the hub intro of categories', async () => {
    const created = await call('POST', '/api/v2/admin/categories', admin, {
      slug: 'admin-test-cat',
      kind: 'mod',
      name: 'Admin test',
      hubIntro: { en: 'Intro in English', es: 'Intro en español' },
    });
    expect(created.status).toBe(201);
    expect(created.body.hubIntro).toEqual({ en: 'Intro in English', es: 'Intro en español' });
    expect(created.body.retiredAt).toBeNull();

    expect((await call('DELETE', `/api/v2/admin/categories/${created.body.id}`, admin)).status).toBe(204);
    const list = await call('GET', '/api/v2/admin/categories', admin);
    expect(list.status).toBe(200);
    const row = list.body.items.find((c: any) => c.id === created.body.id);
    expect(row.hubIntro).toEqual({ en: 'Intro in English', es: 'Intro en español' });
    expect(typeof row.retiredAt).toBe('string');
    // Every row carries the new fields.
    for (const c of list.body.items) {
      expect(c).toHaveProperty('retiredAt');
      expect(c).toHaveProperty('hubIntro');
    }
  });

  it('returns the description and sort order of tags', async () => {
    const created = await call('POST', '/api/v2/admin/tags', admin, {
      slug: 'admin-test-tag',
      name: 'Admin test tag',
      description: 'Only for tests',
      sortOrder: 7,
    });
    expect(created.status).toBe(201);
    expect(created.body).toMatchObject({ description: 'Only for tests', sortOrder: 7 });
    const list = await call('GET', '/api/v2/admin/tags', admin);
    const row = list.body.items.find((x: any) => x.slug === 'admin-test-tag');
    expect(row).toMatchObject({ description: 'Only for tests', sortOrder: 7 });
  });

  it('suggests recategorisations with the current tags', async () => {
    const res = await call('POST', '/api/v2/admin/recategorize', admin, { dryRun: true });
    expect(res.status).toBe(200);
    expect(res.body.suggestions.length).toBeGreaterThan(0);
    for (const s of res.body.suggestions) expect(Array.isArray(s.currentTags)).toBe(true);
    const withTags = await exec(
      db,
      `SELECT mt."A" AS "modId", array_agg(t."slug" ORDER BY t."slug") AS "slugs"
         FROM "_ModToTag" mt JOIN "Tag" t ON t."id" = mt."B" GROUP BY mt."A"`,
    );
    const byMod = new Map(withTags.rows.map((r) => [Number(r.modId), r.slugs as string[]]));
    for (const s of res.body.suggestions) expect(s.currentTags).toEqual(byMod.get(s.mod.id) ?? []);
  });
});

describe('kit staff picks', () => {
  it('features a public kit, refuses private ones and is admin only', async () => {
    const kit = await call('POST', '/api/v2/kits', member, { name: 'Starter kit for tests', visibility: 'public' });
    expect(kit.status).toBe(201);
    // Empty kits are never listed: add a published mod (SonsAxLib).
    expect((await call('PUT', `/api/v2/kits/${kit.body.id}/items`, member, { items: [{ modId: 19 }] })).status).toBe(
      200,
    );
    const url = `/api/v2/admin/kits/${kit.body.id}/staff-pick`;
    expect((await call('PUT', url, ranger, { isStaffPick: true })).status).toBe(403);

    const picked = await call('PUT', url, admin, { isStaffPick: true });
    expect(picked.status).toBe(200);
    expect(picked.body).toEqual({ kitId: kit.body.id, isStaffPick: true });
    const row = await exec(db, `SELECT "isStaffPick" FROM "Kit" WHERE "id" = $1`, [kit.body.id]);
    expect(row.rows[0].isStaffPick).toBe(true);
    const events = await exec(
      db,
      `SELECT count(*)::int AS n FROM pgboss.job WHERE name = 'domain.event' AND data->>'type' = 'kit.updated'
         AND (data->'payload'->>'kitId')::int = $1`,
      [kit.body.id],
    );
    expect(events.rows[0].n).toBeGreaterThanOrEqual(1);
    // Idempotent: no second audit row.
    await call('PUT', url, admin, { isStaffPick: true });
    const audit = await exec(
      db,
      `SELECT count(*)::int AS n FROM "AuditLog" WHERE "targetType" = 'kit' AND "targetId" = $1 AND "action" = 'kit.staff_pick'`,
      [kit.body.id],
    );
    expect(audit.rows[0].n).toBe(1);

    const listed = await call('GET', '/api/v2/kits?staffPick=1', null);
    expect(listed.status).toBe(200);
    expect(listed.body.items.some((k: any) => k.id === kit.body.id)).toBe(true);

    const unpicked = await call('PUT', url, admin, { isStaffPick: false });
    expect(unpicked.body.isStaffPick).toBe(false);

    const secret = await call('POST', '/api/v2/kits', member, { name: 'Private kit for tests', visibility: 'private' });
    const refused = await call('PUT', `/api/v2/admin/kits/${secret.body.id}/staff-pick`, admin, { isStaffPick: true });
    expect(refused.status).toBe(409);
    expect((await call('PUT', '/api/v2/admin/kits/99999999/staff-pick', admin, { isStaffPick: true })).status).toBe(
      404,
    );
  });
});

describe('removed badges and awards', () => {
  it('answers 410 to the manual badge and award writes and writes nothing', async () => {
    const url = `/api/v2/admin/users/${member.userId}/badges/translator`;
    expect((await call('PUT', url, admin)).status).toBe(410);
    expect((await call('DELETE', url, admin)).status).toBe(410);
    const held = await exec(db, `SELECT count(*)::int AS n FROM "UserBadge" WHERE "userId" = $1`, [member.userId]);
    expect(held.rows[0].n).toBe(0);
    expect((await call('GET', '/api/v2/admin/awards', admin)).status).toBe(200);
    expect(
      (
        await call('POST', '/api/v2/admin/awards', admin, {
          kind: 'mod_of_week',
          modId: 20,
          periodStart: '2026-09-28',
          periodEnd: '2026-10-04',
        })
      ).status,
    ).toBe(410);
  });
});

describe('game build notes', () => {
  it('returns the Markdown source and renders it with the lite profile', async () => {
    const created = await call('POST', '/api/v2/admin/game-builds', admin, {
      label: '9.9.9-test',
      releasedAt: '2026-09-01',
      notesMd: 'Cave update: **RedLoader 0.8.7** needed. See [notes](https://example.com/notes).',
    });
    expect(created.status).toBe(201);
    expect(created.body.notesMd).toBe(
      'Cave update: **RedLoader 0.8.7** needed. See [notes](https://example.com/notes).',
    );
    expect(created.body.notesHtml).toContain('<strong>RedLoader 0.8.7</strong>');
    expect(created.body.notesHtml).toContain('href="https://example.com/notes"');
    const list = await call('GET', '/api/v2/admin/game-builds', admin);
    const row = list.body.items.find((g: any) => g.id === created.body.id);
    expect(row.notesMd).toBe(created.body.notesMd);
  });
});

describe('operations', () => {
  it('reports queue depth, dead letters, downloads and purges to admins only', async () => {
    expect((await call('GET', '/api/v2/admin/ops', ranger)).status).toBe(403);
    await exec(
      db,
      `INSERT INTO "ModDownload" ("ip", "userAgent", "modVersionId", "createdAt", "updatedAt")
       SELECT '0.0.0.0', 'ops-test', v."id", now() AT TIME ZONE 'UTC', now() AT TIME ZONE 'UTC'
         FROM "ModVersion" v ORDER BY v."id" LIMIT 1`,
    );
    const res = await call('GET', '/api/v2/admin/ops', admin);
    expect(res.status).toBe(200);
    expect(res.body.downloads.lastHour).toBeGreaterThanOrEqual(1);
    expect(res.body.downloads.last24h).toBeGreaterThanOrEqual(res.body.downloads.lastHour);
    // No worker runs in the test: the domain events of the kit writes above are still queued.
    const events = res.body.queues.find((q: any) => q.name === 'domain.event');
    expect(events?.queued).toBeGreaterThan(0);
    expect(typeof events?.oldestQueuedAt).toBe('string');
    expect(res.body.deadLetter).toBe(0);
    expect(res.body.purge).toMatchObject({ failed24h: 0 });
  });
});
