// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * Ranger Station additions (backlog WP-51/WP-82): taking and releasing queue items, escalation,
 * the reason templates in force, the review-time metrics, the report behind a report item and the
 * scan id of the item view. Runs on the small development seed (PostgreSQL 16).
 */
import { randomUUID } from 'node:crypto';
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';

let db: TestDb;
let t: TestApp;

interface Staff {
  userId: number;
  role: 'user' | 'moderator' | 'admin';
  sessionId: string;
}

let ranger: Staff;
let otherRanger: Staff;
let admin: Staff;
let reporter: Staff;
let pendingModId: number;
let pendingItem: string;

async function createUser(handle: string, role: Staff['role']): Promise<Staff> {
  const res = await exec(
    db,
    `INSERT INTO "User" ("email", "password", "name", "slug", "emailVerifiedAt", "role", "trustLevel")
     VALUES ($1, 'x', $2, $2, now(), $3, 1) RETURNING "id"`,
    [`${handle}@example.test`, handle, role],
  );
  const userId = Number(res.rows[0].id);
  const sessionId = randomUUID();
  await exec(
    db,
    `INSERT INTO "Session" ("id", "userId", "tokenHash", "pwdFingerprint", "expiresAt", "absoluteExpiresAt")
     VALUES ($1, $2, $3, 'fp', now() + interval '1 day', now() + interval '30 days')`,
    [sessionId, userId, `hash-${sessionId}`],
  );
  return { userId, role, sessionId };
}

type Method = 'GET' | 'POST';

async function call(method: Method, url: string, who: Staff | null, body?: unknown) {
  const headers = {
    ...t.sameOrigin(),
    ...(who ? t.as({ userId: who.userId, role: who.role, sessionId: who.sessionId, emailVerified: true }) : {}),
  };
  const res = await t.app.inject({
    method,
    url,
    headers,
    ...(method === 'GET' ? {} : { payload: JSON.stringify(body ?? {}) }),
  });
  return { status: res.statusCode, body: res.body ? (res.json() as Record<string, any>) : null };
}

beforeAll(async () => {
  db = await startSeededDb();
  ranger = await createUser('ranger-one', 'moderator');
  otherRanger = await createUser('ranger-two', 'moderator');
  admin = await createUser('ranger-admin', 'admin');
  reporter = await createUser('ranger-reporter', 'user');
  const pending = await exec(
    db,
    `SELECT "id" FROM "Mod" WHERE "status" = 'pending' AND "userId" IS NOT NULL AND coalesce("type", 'Mod') <> 'Build'
      ORDER BY "id" LIMIT 1`,
  );
  pendingModId = Number(pending.rows[0].id);
  pendingItem = `new_mods:mod:${pendingModId}`;
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

describe('access', () => {
  it('requires a moderator with a session younger than 12 h', async () => {
    expect((await call('GET', '/api/v2/ranger/templates', null)).status).toBe(401);
    expect((await call('GET', '/api/v2/ranger/templates', reporter)).status).toBe(403);
    const stale = { ...ranger, sessionId: randomUUID() };
    const res = await call('GET', '/api/v2/ranger/templates', stale);
    expect(res.status).toBe(403);
    expect(res.body?.code).toBe('REAUTH_REQUIRED');
  });
});

describe('templates', () => {
  it('lists the built-in templates until an admin saves the setting', async () => {
    const res = await call('GET', '/api/v2/ranger/templates', ranger);
    expect(res.status).toBe(200);
    expect(res.body?.source).toBe('built_in');
    expect(res.body?.items.map((i: any) => i.key)).toContain('spam');
    await exec(
      db,
      `INSERT INTO "SiteSetting" ("key", "value") VALUES ('moderationTemplates', $1::jsonb)
       ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value"`,
      [JSON.stringify([{ key: 'custom_one', action: 'reject', messages: { en: 'Custom', es: 'Propia' } }])],
    );
    const saved = await call('GET', '/api/v2/ranger/templates', ranger);
    expect(saved.body?.source).toBe('setting');
    expect(saved.body?.items).toEqual([
      { key: 'custom_one', action: 'reject', messages: { en: 'Custom', es: 'Propia' } },
    ]);
    await exec(db, `DELETE FROM "SiteSetting" WHERE "key" = 'moderationTemplates'`);
  });
});

describe('assignment', () => {
  it('takes an item, refuses a second ranger, and lets the assignee or an admin release it', async () => {
    const first = await call('POST', `/api/v2/ranger/items/${pendingItem}/assign`, ranger, { assign: true });
    expect(first.status).toBe(200);
    expect(first.body?.assignee?.handle).toBe('ranger-one');
    expect(first.body?.escalation).toBeNull();

    // Idempotent for the assignee.
    expect((await call('POST', `/api/v2/ranger/items/${pendingItem}/assign`, ranger, {})).status).toBe(200);
    const taken = await call('POST', `/api/v2/ranger/items/${pendingItem}/assign`, otherRanger, { assign: true });
    expect(taken.status).toBe(409);
    const notMine = await call('POST', `/api/v2/ranger/items/${pendingItem}/assign`, otherRanger, { assign: false });
    expect(notMine.status).toBe(403);

    const queue = await call('GET', '/api/v2/ranger/queue?lane=new_mods&limit=100', ranger);
    const listed = queue.body?.items.find((i: any) => i.id === pendingItem);
    expect(listed?.assignee?.handle).toBe('ranger-one');

    const released = await call('POST', `/api/v2/ranger/items/${pendingItem}/assign`, admin, { assign: false });
    expect(released.status).toBe(200);
    expect(released.body?.assignee).toBeNull();

    const audit = await exec(
      db,
      `SELECT "action", "actorId" FROM "AuditLog" WHERE "targetType" = 'mod' AND "targetId" = $1
         AND "action" LIKE 'queue.%' ORDER BY "id"`,
      [pendingModId],
    );
    expect(audit.rows.map((r) => r.action)).toEqual(['queue.assign', 'queue.unassign']);
  });

  it('answers 404 for an item that is not in the lane', async () => {
    const res = await call('POST', '/api/v2/ranger/items/versions:version:999999/assign', ranger, { assign: true });
    expect(res.status).toBe(404);
  });
});

describe('escalation', () => {
  it('needs a note, marks the item high risk and can be cleared', async () => {
    const noNote = await call('POST', `/api/v2/ranger/items/${pendingItem}/escalate`, ranger, { escalate: true });
    expect(noNote.status).toBe(422);

    const res = await call('POST', `/api/v2/ranger/items/${pendingItem}/escalate`, ranger, {
      escalate: true,
      note: 'Looks like a reupload, owner decision',
    });
    expect(res.status).toBe(200);
    expect(res.body?.risk).toBe('high');
    expect(res.body?.escalation?.note).toBe('Looks like a reupload, owner decision');
    expect(res.body?.escalation?.by?.handle).toBe('ranger-one');

    const queue = await call('GET', '/api/v2/ranger/queue?lane=new_mods&limit=5', ranger);
    expect(queue.body?.items[0]?.risk).toBe('high');
    expect(queue.body?.items.some((i: any) => i.id === pendingItem)).toBe(true);

    const cleared = await call('POST', `/api/v2/ranger/items/${pendingItem}/escalate`, otherRanger, {
      escalate: false,
    });
    expect(cleared.status).toBe(200);
    expect(cleared.body?.escalation).toBeNull();
  });
});

describe('item view', () => {
  it('carries the report of a report item, and its assignment is stored on the row', async () => {
    const created = await call('POST', '/api/v2/reports', reporter, {
      targetType: 'mod',
      targetId: pendingModId,
      reason: 'spam',
      details: 'Spam links in the description',
    });
    expect(created.status).toBe(201);
    const itemId = `reports:report:${created.body?.id}`;
    const detail = await call('GET', `/api/v2/ranger/items/${itemId}`, ranger);
    expect(detail.status).toBe(200);
    expect(detail.body?.report).toMatchObject({
      id: created.body?.id,
      targetType: 'mod',
      targetId: pendingModId,
      reason: 'spam',
      details: 'Spam links in the description',
      status: 'open',
    });
    expect(detail.body?.report?.reporter?.handle).toBe('ranger-reporter');

    const assigned = await call('POST', `/api/v2/ranger/items/${itemId}/assign`, ranger, { assign: true });
    expect(assigned.status).toBe(200);
    const row = await exec(db, `SELECT "assignedToId" FROM "Report" WHERE "id" = $1`, [created.body?.id]);
    expect(row.rows[0].assignedToId).toBe(ranger.userId);

    const other = await call('GET', `/api/v2/ranger/items/${pendingItem}`, ranger);
    expect(other.body?.report).toBeNull();
  });

  it('exposes the scan id so the verdict can be overridden', async () => {
    const version = await exec(db, `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 ORDER BY "id" DESC LIMIT 1`, [
      pendingModId,
    ]);
    const versionId = Number(version.rows[0].id);
    const scan = await exec(
      db,
      `INSERT INTO "SecurityScan" ("modVersionId", "sha256", "engine", "verdict", "positives", "total", "scannedAt")
       VALUES ($1, $2, 'virustotal', 'suspicious', 1, 70, now()) RETURNING "id"`,
      [versionId, 'a'.repeat(64)],
    );
    const detail = await call('GET', `/api/v2/ranger/items/${pendingItem}`, ranger);
    expect(detail.status).toBe(200);
    expect(detail.body?.scan?.id).toBe(Number(scan.rows[0].id));
    const override = await call('POST', `/api/v2/ranger/scans/${detail.body?.scan?.id}/override`, ranger, {
      verdict: 'false_positive',
      note: 'Il2Cpp interop DLLs trip heuristics',
    });
    expect(override.status).toBe(200);
    expect(override.body?.verdict).toBe('false_positive');
  });
});

describe('metrics', () => {
  it('measures submission → first decision and the SLA', async () => {
    const base = await exec(db, `SELECT coalesce(max("targetId"), 0) + 1000 AS n FROM "AuditLog"`);
    const modTarget = Number(base.rows[0].n);
    const versionTarget = modTarget + 1;
    const before = await call('GET', '/api/v2/ranger/metrics?days=7', ranger);
    expect(before.status).toBe(200);
    const insert = (action: string, type: string, id: number, hoursAgo: number, status?: string) =>
      exec(
        db,
        `INSERT INTO "AuditLog" ("actorId", "action", "targetType", "targetId", "after", "createdAt")
         VALUES (NULL, $1, $2, $3, $4::jsonb, now() - make_interval(secs => $5 * 3600))`,
        [action, type, id, status ? JSON.stringify({ status }) : null, hoursAgo],
      );
    // A mod reviewed in 10 h, a version reviewed in 100 h (over the SLA), an auto-published one ignored.
    await insert('mod.submit', 'mod', modTarget, 20, 'pending');
    await insert('mod.approve', 'mod', modTarget, 10);
    await insert('version.submit', 'version', versionTarget, 110, 'pending');
    await insert('version.reject', 'version', versionTarget, 10);
    await insert('version.submit', 'version', versionTarget + 1, 5, 'active');
    await insert('version.approve', 'version', versionTarget + 1, 4);

    const res = await call('GET', '/api/v2/ranger/metrics?days=7', ranger);
    expect(res.status).toBe(200);
    const b = before.body as any;
    const a = res.body as any;
    expect(a.windowDays).toBe(7);
    expect(a.slaHours).toBe(72);
    expect(a.overall.reviewed - b.overall.reviewed).toBe(2);
    expect(a.byTarget.mod.reviewed - b.byTarget.mod.reviewed).toBe(1);
    expect(a.byTarget.version.reviewed - b.byTarget.version.reviewed).toBe(1);
    expect(a.overall.withinSla - b.overall.withinSla).toBe(1);
    if (b.overall.reviewed === 0) {
      expect(a.overall.meanHours).toBeCloseTo(55, 0);
      expect(a.byTarget.mod.meanHours).toBeCloseTo(10, 0);
    }
    expect(a.openOverSla).toBeGreaterThanOrEqual(0);
  });

  it('validates the window', async () => {
    expect((await call('GET', '/api/v2/ranger/metrics?days=0', ranger)).status).toBe(422);
  });
});
