/**
 * Migrations 2000–2008 (integration of the dev-phase backlogs): new columns, the moderation
 * assignment table, the immutable audit log, the known tombstones and the two indexes.
 */
import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { category, mod, moderationAssignment, session, tombstone, user } from '../src/schema/_index.gen.ts';
import { createFactories, type Factories, startTestDb, stopTestServer, type TestDb } from '../src/testing.ts';

let t: TestDb;
let f: Factories;

beforeAll(async () => {
  t = await startTestDb();
  f = createFactories(t.db);
});
afterAll(async () => {
  await t.stop();
  await stopTestServer();
});

describe('new nullable columns (2000–2003)', () => {
  it('Session.country, Mod.commentsLockedAt/descriptionFormat and Category.ogImageKey default to null', async () => {
    const m = await f.mod();
    expect(m.commentsLockedAt).toBeNull();
    expect(m.descriptionFormat).toBeNull();
    const [cat] = await t.db.select().from(category).limit(1);
    expect(cat?.ogImageKey).toBeNull();

    const u = await f.user();
    const [s] = await t.db
      .insert(session)
      .values({
        userId: u.id,
        tokenHash: 'h'.repeat(64),
        pwdFingerprint: 'f'.repeat(16),
        expiresAt: new Date(Date.now() + 3_600_000),
        absoluteExpiresAt: new Date(Date.now() + 7_200_000),
        country: 'ES',
      })
      .returning();
    expect(s?.country).toBe('ES');
  });

  it('a legacy-style INSERT into "Mod" (explicit legacy columns only) still works', async () => {
    const u = await f.user();
    const { rows } = await t.pool.query<{ commentsLockedAt: Date | null; descriptionFormat: string | null }>(
      `INSERT INTO "Mod" ("name", "slug", "mod_id", "shortDescription", "description", "dependencies", "type", "isNSFW",
                          "isApproved", "isFeatured", "lastReleasedAt", "createdAt", "updatedAt", "userId")
       VALUES ('L', 'l-2001', 'Legacy.l2001', '', 'x', '', 'Mod', false, false, false, now(), now(), now(), $1)
       RETURNING "commentsLockedAt", "descriptionFormat"`,
      [u.id],
    );
    expect(rows[0]).toEqual({ commentsLockedAt: null, descriptionFormat: null });
  });

  it('stores the thread lock and the description format', async () => {
    const m = await f.mod();
    const lockedAt = new Date('2026-09-30T10:00:00.000Z');
    const [updated] = await t.db
      .update(mod)
      .set({ commentsLockedAt: lockedAt, descriptionFormat: 'legacy' })
      .where(eq(mod.id, m.id))
      .returning();
    expect(updated?.commentsLockedAt?.toISOString()).toBe(lockedAt.toISOString());
    expect(updated?.descriptionFormat).toBe('legacy');
  });
});

describe('ModerationAssignment (2004)', () => {
  it('keys one row per target, checks the target type and nulls the assignee when the user goes', async () => {
    const ranger = await f.user();
    await t.db.insert(moderationAssignment).values({
      targetType: 'version',
      targetId: 640,
      assigneeId: ranger.id,
      assignedAt: new Date(),
    });
    await expect(t.db.insert(moderationAssignment).values({ targetType: 'version', targetId: 640 })).rejects.toThrow();
    await expect(
      t.pool.query(`INSERT INTO "ModerationAssignment" ("targetType", "targetId") VALUES ('user', 1)`),
    ).rejects.toThrow(/ModerationAssignment_targetType_check/);

    await t.db.delete(user).where(eq(user.id, ranger.id));
    const [row] = await t.db.select().from(moderationAssignment).where(eq(moderationAssignment.targetId, 640));
    expect(row?.assigneeId).toBeNull();
  });
});

describe('AuditLog is insert-only even for the owner (2005)', () => {
  it('refuses UPDATE, DELETE and TRUNCATE', async () => {
    const { rows } = await t.pool.query<{ id: string }>(
      `INSERT INTO "AuditLog" ("action", "targetType", "targetId") VALUES ('mod.approve', 'mod', 1) RETURNING "id"`,
    );
    const id = rows[0]?.id;
    await expect(t.pool.query(`UPDATE "AuditLog" SET "reason" = 'x' WHERE "id" = $1`, [id])).rejects.toThrow(
      /insert-only \(UPDATE refused\)/,
    );
    await expect(t.pool.query(`DELETE FROM "AuditLog" WHERE "id" = $1`, [id])).rejects.toThrow(
      /insert-only \(DELETE refused\)/,
    );
    await expect(t.pool.query(`TRUNCATE "AuditLog"`)).rejects.toThrow(/insert-only \(TRUNCATE refused\)/);
    const count = await t.pool.query(`SELECT count(*)::int AS n FROM "AuditLog" WHERE "id" = $1`, [id]);
    expect(count.rows[0]?.n).toBe(1);
  });
});

describe('known tombstones (2006) and indexes (2007, 2008)', () => {
  it('stores /mods/aedev/gyrocopter as a 410', async () => {
    const [row] = await t.db.select().from(tombstone).where(eq(tombstone.path, '/mods/aedev/gyrocopter'));
    expect(row?.status).toBe(410);
  });

  it('creates the pending-email and kind/ts indexes as valid indexes', async () => {
    const { rows } = await t.pool.query<{ name: string; valid: boolean }>(
      `SELECT c.relname AS name, i.indisvalid AS valid
         FROM pg_index i JOIN pg_class c ON c.oid = i.indexrelid
        WHERE c.relname IN ('Notification_unemailed_idx', 'AnalyticsEvent_kind_ts_idx')
        ORDER BY 1`,
    );
    expect(rows).toEqual([
      { name: 'AnalyticsEvent_kind_ts_idx', valid: true },
      { name: 'Notification_unemailed_idx', valid: true },
    ]);
  });
});
