// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * WP-51 acceptance (`pnpm --filter @sotf/api test:int -- ranger`): the permission matrix of Ranger
 * Station and the admin area (guest 401, member 403, moderator vs admin, sessions older than 12 h still work, no
 * re-authentication rule) and what a decision leaves behind: the status change, its domain event, the
 * author's signal and the CDN purge its event drives (the worker's consumers, run here through the
 * same core functions: `planForEvent`, `tagsForEvent`) and the `AuditLog` row; reports resolved with the target
 * hidden and the reporter told; announcements. Runs on the small development seed.
 */
import { randomUUID } from 'node:crypto';
import { tagsForEvent } from '@sotf/core';
import { planForEvent } from '@sotf/core/notifications/index';
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
let staleRanger: TestUser;

const call = (method: Method, url: string, who: TestUser | null, body?: unknown) =>
  callAs(t, method, url, who, body) as Promise<{ status: number; body: any }>;

async function jobsNamed(name: string, since: Date) {
  const res = await exec(
    db,
    `SELECT "data" FROM "${t.env.PGBOSS_SCHEMA}"."job" WHERE "name" = $1 AND "created_on" >= $2 ORDER BY "created_on"`,
    [name, since],
  );
  return res.rows.map((r: any) => r.data);
}

beforeAll(async () => {
  db = await startSeededDb();
  admin = await createTestUser(db, 'acc-admin', 'admin');
  ranger = await createTestUser(db, 'acc-ranger', 'moderator');
  member = await createTestUser(db, 'acc-member', 'user');
  staleRanger = await createTestUser(db, 'acc-stale', 'moderator');
  // A session created 13 hours ago: staff actions need one younger than 12 h.
  const stale = randomUUID();
  await exec(
    db,
    `INSERT INTO "Session" ("id", "userId", "tokenHash", "pwdFingerprint", "createdAt", "expiresAt", "absoluteExpiresAt")
     VALUES ($1, $2, $3, 'fp', now() - interval '13 hours', now() + interval '1 day', now() + interval '30 days')`,
    [stale, staleRanger.userId, `hash-${stale}`],
  );
  staleRanger = { ...staleRanger, sessionId: stale };
  t = await buildTestApp({
    db,
    rateLimits: {
      userWrite: { max: 100_000, window: '1 minute' },
      anonymousRead: { max: 100_000, window: '1 minute' },
      reports: { max: 100_000, window: '1 minute' },
    },
  });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('permission matrix', () => {
  const rangerReads = ['/api/v2/ranger/queue?lane=new_mods', '/api/v2/ranger/reports', '/api/v2/ranger/audit'];
  const adminReads = ['/api/v2/admin/ops', '/api/v2/admin/announcements', '/api/v2/admin/categories'];

  it('guests get 401 and members 403 everywhere in Ranger Station and the admin area', async () => {
    for (const url of [...rangerReads, ...adminReads]) {
      expect((await call('GET', url, null)).status, url).toBe(401);
      expect((await call('GET', url, member)).status, url).toBe(403);
    }
  });

  it('moderators reach Ranger Station but not the admin area', async () => {
    for (const url of rangerReads) expect((await call('GET', url, ranger)).status, url).toBe(200);
    for (const url of adminReads) expect((await call('GET', url, ranger)).status, url).toBe(403);
    for (const url of [...rangerReads, ...adminReads]) expect((await call('GET', url, admin)).status, url).toBe(200);
  });

  it('only admins change roles, and a moderator cannot promote themselves', async () => {
    const target = await createTestUser(db, 'acc-target', 'user');
    const byRanger = await call('PATCH', `/api/v2/ranger/users/${target.userId}/role`, ranger, { role: 'moderator' });
    expect(byRanger.status).toBe(403);
    const self = await call('PATCH', `/api/v2/ranger/users/${ranger.userId}/role`, ranger, { role: 'admin' });
    expect(self.status).toBe(403);
    const byAdmin = await call('PATCH', `/api/v2/ranger/users/${target.userId}/role`, admin, {
      role: 'moderator',
      reason: 'New ranger',
    });
    expect(byAdmin.status).toBe(200);
    const audit = await exec(
      db,
      `SELECT "action", "actorId" FROM "AuditLog" WHERE "targetType" = 'user' AND "targetId" = $1 ORDER BY "id" DESC LIMIT 1`,
      [target.userId],
    );
    expect(audit.rows[0]).toMatchObject({ actorId: admin.userId });
    expect(String(audit.rows[0].action)).toMatch(/role/);
  });

  it('does not ask for a fresh sign-in when the staff session is older than 12 h', async () => {
    for (const url of rangerReads) {
      const res = await call('GET', url, staleRanger);
      expect(res.status, url).toBe(200);
    }
  });

  it('restoring a removed mod is an admin decision', async () => {
    const found = await exec(
      db,
      `SELECT "id" FROM "Mod" WHERE "status" = 'published' AND "userId" IS NOT NULL ORDER BY "id" DESC LIMIT 1`,
    );
    const modId = Number(found.rows[0].id);
    const removed = await call('POST', `/api/v2/ranger/mods/${modId}/decision`, ranger, {
      action: 'remove',
      note: 'Malware confirmed by two rangers',
    });
    expect(removed.status).toBe(200);
    expect((await call('POST', `/api/v2/ranger/mods/${modId}/decision`, ranger, { action: 'restore' })).status).toBe(
      403,
    );
    expect((await call('POST', `/api/v2/ranger/mods/${modId}/decision`, admin, { action: 'restore' })).status).toBe(
      200,
    );
    const status = await exec(db, `SELECT "status" FROM "Mod" WHERE "id" = $1`, [modId]);
    expect(status.rows[0].status).toBe('published');
  });
});

describe('decisions', () => {
  it('approving a pending mod publishes it with an event, a signal, a purge job and an audit row', async () => {
    const found = await exec(
      db,
      `SELECT m."id", m."userId" FROM "Mod" m WHERE m."status" = 'pending' AND m."userId" IS NOT NULL
         AND coalesce(m."type", 'Mod') <> 'Build'
         AND EXISTS (SELECT 1 FROM "ModVersion" v WHERE v."modId" = m."id")
       ORDER BY m."id" LIMIT 1`,
    );
    const modId = Number(found.rows[0].id);
    const authorId = Number(found.rows[0].userId);
    const since = new Date(Date.now() - 1000);
    const res = await call('POST', `/api/v2/ranger/mods/${modId}/decision`, ranger, { action: 'approve' });
    expect(res.status).toBe(200);
    const mod = await exec(db, `SELECT "status" FROM "Mod" WHERE "id" = $1`, [modId]);
    expect(mod.rows[0].status).toBe('published');

    const events = await jobsNamed('domain.event', since);
    const changed = events.find((e: any) => e.type === 'mod.status_changed' && e.payload.modId === modId);
    expect(changed?.payload).toMatchObject({ from: 'pending', to: 'published' });
    // What the worker does with the event: purge the mod's pages and signal the author.
    expect(tagsForEvent(changed)).toContain(`mod:${modId}`);
    const plan = await planForEvent(db.db, changed);
    expect(plan.drafts.some((d) => d.userId === authorId && d.type === 'mod.status_changed')).toBe(true);
    const audit = await exec(
      db,
      `SELECT "action", "actorId" FROM "AuditLog" WHERE "targetType" = 'mod' AND "targetId" = $1 ORDER BY "id" DESC LIMIT 1`,
      [modId],
    );
    expect(audit.rows[0]).toEqual({ action: 'mod.approve', actorId: ranger.userId });
  });

  it('rejecting needs a reason and stores the English template text with the note', async () => {
    const found = await exec(
      db,
      `SELECT m."id" FROM "Mod" m WHERE m."status" = 'pending' AND m."userId" IS NOT NULL
         AND coalesce(m."type", 'Mod') <> 'Build' ORDER BY m."id" DESC LIMIT 1`,
    );
    const modId = Number(found.rows[0].id);
    expect((await call('POST', `/api/v2/ranger/mods/${modId}/decision`, ranger, { action: 'reject' })).status).toBe(
      422,
    );
    const res = await call('POST', `/api/v2/ranger/mods/${modId}/decision`, ranger, {
      action: 'reject',
      templateKey: 'spam',
      note: 'Only links to another site',
    });
    expect(res.status).toBe(200);
    const mod = await exec(db, `SELECT "status", "statusReason" FROM "Mod" WHERE "id" = $1`, [modId]);
    expect(mod.rows[0]).toEqual({
      status: 'rejected',
      statusReason: 'Spam or advertising.\n\nOnly links to another site',
    });
    const audit = await exec(
      db,
      `SELECT "reason" FROM "AuditLog" WHERE "targetType" = 'mod' AND "targetId" = $1 AND "action" = 'mod.reject'`,
      [modId],
    );
    expect(audit.rows[0].reason).toContain('Only links to another site');
  });
});

describe('reports', () => {
  it('resolving with the target hidden hides the comment, closes sibling reports and tells each reporter', async () => {
    const mod = await exec(db, `SELECT "id" FROM "Mod" WHERE "status" = 'published' ORDER BY "id" LIMIT 1`);
    const modId = Number(mod.rows[0].id);
    const author = await createTestUser(db, 'acc-commenter');
    const comment = await exec(
      db,
      `INSERT INTO "Comment" ("message", "modId", "userId", "bodyMd", "bodyHtml", "status", "ip", "createdAt", "updatedAt")
       VALUES ('buy cheap coins', $1, $2, 'buy cheap coins', '<p>buy cheap coins</p>', 'visible', '0.0.0.0', now(), now())
       RETURNING "id"`,
      [modId, author.userId],
    );
    const commentId = Number(comment.rows[0].id);
    const reporters = [member, await createTestUser(db, 'acc-reporter-2')];
    const ids: number[] = [];
    for (const who of reporters) {
      const res = await call('POST', '/api/v2/reports', who, {
        targetType: 'comment',
        targetId: commentId,
        reason: 'spam',
      });
      expect(res.status).toBe(201);
      ids.push(Number(res.body.id));
    }
    // Reporting your own content is a conflict.
    expect(
      (await call('POST', '/api/v2/reports', author, { targetType: 'comment', targetId: commentId, reason: 'spam' }))
        .status,
    ).toBe(409);

    const resolved = await call('POST', `/api/v2/ranger/reports/${ids[0]}/resolve`, ranger, {
      action: 'resolve',
      note: 'Spam removed',
      hideTarget: true,
    });
    expect(resolved.status).toBe(200);
    const row = await exec(db, `SELECT "status" FROM "Comment" WHERE "id" = $1`, [commentId]);
    expect(row.rows[0].status).toBe('hidden');
    const reports = await exec(db, `SELECT "status" FROM "Report" WHERE "id" = ANY($1::int[]) ORDER BY "id"`, [ids]);
    expect(reports.rows.every((r: any) => r.status !== 'open')).toBe(true);
    const events = (await jobsNamed('domain.event', new Date(Date.now() - 60_000))).filter(
      (e: any) => e.type === 'report.resolved' && ids.includes(e.payload.reportId),
    );
    expect(events).toHaveLength(2);
    const told = new Set<number>();
    for (const event of events) for (const d of (await planForEvent(db.db, event)).drafts) told.add(d.userId);
    expect([...told].sort()).toEqual(reporters.map((r) => r.userId).sort());
  });
});

describe('announcements', () => {
  it('admins publish a banner that the public read lists while it is active', async () => {
    const startsAt = new Date(Date.now() - 60_000).toISOString();
    const created = await call('POST', '/api/v2/admin/announcements', admin, {
      level: 'info',
      messages: { en: 'Maintenance tonight', es: 'Mantenimiento esta noche' },
      startsAt,
    });
    expect(created.status).toBe(201);
    expect(
      (await call('POST', '/api/v2/admin/announcements', ranger, { level: 'info', messages: { en: 'x' }, startsAt }))
        .status,
    ).toBe(403);
    const active = await call('GET', '/api/v2/announcements/active?locale=es', null);
    expect(active.status).toBe(200);
    const item = active.body.items.find((a: any) => a.id === created.body.id);
    expect(item).toBeTruthy();
    expect(JSON.stringify(item)).toContain('Mantenimiento esta noche');
  });
});
