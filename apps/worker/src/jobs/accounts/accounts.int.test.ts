/**
 * Account and email jobs through the real worker runtime (pg-boss 12 + PostgreSQL 16):
 * `email.send` delivers an outbox row (memory transport, real templates) and is idempotent;
 * `accounts.trust-level` recomputes levels; `cleanup.sessions` applies the retention rules;
 * `account.export` and `account.delete` run from their queues.
 */
import { randomBytes } from 'node:crypto';
import { silentLogger } from '@sotf/core';
import { MemoryExportStorage } from '@sotf/core/accounts/index';
import { createMemoryTransport, queueEmail } from '@sotf/core/email/index';
import { accountDeletion, authEvent, dataExport, emailOutbox, session, user, withTx } from '@sotf/db';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from '../../app.ts';
import { parseWorkerEnv } from '../../env.ts';
import { createEmailJobs } from '../email/index.ts';
import { createAccountJobs } from './index.ts';

let db: TestDb;
let worker: Worker;
let f: Factories;
const transport = createMemoryTransport();
const storage = new MemoryExportStorage();
const SITE = 'https://sotf-mods.test';

async function waitFor<T>(probe: () => Promise<T | undefined | null | false>, timeoutMs = 20_000): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await probe();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

beforeAll(async () => {
  db = await startTestDb({ pgBoss: true });
  f = createFactories(db.db);
  const env = parseWorkerEnv({
    NODE_ENV: 'test',
    LOG_LEVEL: 'silent',
    PUBLIC_SITE_URL: SITE,
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET: randomBytes(32).toString('base64url'),
    DATABASE_URL: db.url,
    WORKER_CONCURRENCY: '2',
  });
  worker = createWorker({
    env,
    db,
    logger: silentLogger(),
    schedules: false,
    pollingIntervalSeconds: 0.5,
    groups: [
      createEmailJobs({ transport, from: 'SOTF Mods <noreply@sotf-mods.com>', siteUrl: SITE }),
      createAccountJobs({ storage, siteUrl: SITE }),
    ],
  });
  await worker.start();
}, 240_000);

afterAll(async () => {
  await worker?.stop(5000);
  await db?.stop();
});

describe('email.send', () => {
  it('renders and delivers a queued email once', async () => {
    const u = await f.user({ email: 'mail@example.test' });
    const id = await withTx(db.db, (tx) =>
      queueEmail(tx, worker.jobs, {
        userId: u.id,
        to: u.email,
        template: 'auth.password_reset',
        locale: 'fr',
        payload: { displayName: 'Kelvin', url: `${SITE}/fr/reset-password?token=abc`, expiresMinutes: 60 },
        dedupeKey: 'test:reset:1',
      }),
    );
    const row = await waitFor(async () => {
      const [r] = await db.db.select().from(emailOutbox).where(eq(emailOutbox.id, id));
      return r?.status === 'sent' ? r : null;
    });
    expect(row).toMatchObject({ attempts: 1, providerId: 'memory-1' });
    expect(transport.sent).toHaveLength(1);
    expect(transport.sent[0]).toMatchObject({ to: 'mail@example.test', from: 'SOTF Mods <noreply@sotf-mods.com>' });
    expect(transport.sent[0]?.subject).toBe('Réinitialisez votre mot de passe SOTF Mods');
    expect(transport.sent[0]?.html).toContain(`${SITE}/fr/reset-password?token=abc`);
    expect(transport.sent[0]?.idempotencyKey).toBe(`outbox-${id}`);
    // A duplicate dedupe key does not queue a second email.
    const again = await withTx(db.db, (tx) =>
      queueEmail(tx, worker.jobs, {
        userId: u.id,
        to: u.email,
        template: 'auth.password_reset',
        locale: 'fr',
        payload: { displayName: 'Kelvin', url: `${SITE}/fr/reset-password?token=abc`, expiresMinutes: 60 },
        dedupeKey: 'test:reset:1',
      }),
    );
    expect(again).toBe(id);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    expect(transport.sent).toHaveLength(1);
  });
});

describe('accounts.trust-level', () => {
  it('recomputes levels 0–3', async () => {
    const old = new Date(Date.now() - 60 * 24 * 3600 * 1000);
    const fresh = await f.user({ emailVerifiedAt: new Date() });
    const unverified = await f.user({ createdAt: old });
    const regular = await f.user({ createdAt: old, emailVerifiedAt: old });
    const contributor = await f.user({ createdAt: old, emailVerifiedAt: old });
    const creator = await f.user({ verifiedCreator: true });
    const moderator = await f.user({ role: 'moderator' });
    const target = await f.mod();
    for (let i = 0; i < 5; i += 1) await f.comment({ modId: target.id, userId: contributor.id });
    await worker.boss.send('accounts.trust-level', {});
    const levels = await waitFor(async () => {
      const rows = await db.db.select({ id: user.id, level: user.trustLevel }).from(user);
      const map = new Map(rows.map((r) => [r.id, r.level]));
      return map.get(moderator.id) === 3 ? map : null;
    });
    expect(levels.get(fresh.id)).toBe(0);
    expect(levels.get(unverified.id)).toBe(0);
    expect(levels.get(regular.id)).toBe(1);
    expect(levels.get(contributor.id)).toBe(2);
    expect(levels.get(creator.id)).toBe(3);
  });
});

describe('cleanup.sessions', () => {
  it('deletes old sessions, auth events and expired exports; keeps recent data', async () => {
    const u = await f.user();
    const recent = await f.session({ userId: u.id });
    const stale = await f.session({ userId: u.id });
    await db.db
      .update(session)
      .set({ expiresAt: new Date(Date.now() - 40 * 24 * 3600 * 1000) })
      .where(eq(session.id, stale.id));
    await db.db.insert(authEvent).values([
      { userId: u.id, kind: 'login', success: true, createdAt: new Date(Date.now() - 100 * 24 * 3600 * 1000) },
      { userId: u.id, kind: 'login', success: true },
    ]);
    await storage.put(`exports/${u.id}/old.zip`, new Uint8Array([1]), 'application/zip', 'old.zip');
    const [expiredExport] = await db.db
      .insert(dataExport)
      .values({ userId: u.id, status: 'ready', key: `exports/${u.id}/old.zip`, expiresAt: new Date(Date.now() - 1000) })
      .returning();
    await worker.boss.send('cleanup.sessions', {});
    await waitFor(async () => {
      const [e] = await db.db
        .select()
        .from(dataExport)
        .where(eq(dataExport.id, expiredExport?.id as string));
      return e?.status === 'expired';
    });
    const sessions = await db.db.select({ id: session.id }).from(session).where(eq(session.userId, u.id));
    expect(sessions.map((s) => s.id)).toEqual([recent.id]);
    const events = await db.db.select().from(authEvent).where(eq(authEvent.userId, u.id));
    expect(events).toHaveLength(1);
    expect(storage.objects.has(`exports/${u.id}/old.zip`)).toBe(false);
  });
});

describe('account.export and account.delete queues', () => {
  it('builds an export and runs a due deletion', async () => {
    const u = await f.user({ email: 'queue@example.test', slug: 'queue-user' });
    const [created] = await db.db.insert(dataExport).values({ userId: u.id }).returning();
    await worker.jobs.enqueue('account.export', { exportId: created?.id as string });
    await waitFor(async () => {
      const [e] = await db.db
        .select()
        .from(dataExport)
        .where(eq(dataExport.id, created?.id as string));
      return e?.status === 'ready';
    });
    expect(storage.objects.has(`exports/${u.id}/${created?.id}.zip`)).toBe(true);

    await db.db.insert(accountDeletion).values({
      userId: u.id,
      requestedAt: new Date(Date.now() - 15 * 24 * 3600 * 1000),
      executeAfter: new Date(Date.now() - 24 * 3600 * 1000),
      mode: 'keep_mods_anonymous',
    });
    await worker.jobs.enqueue('account.delete', { userId: u.id });
    const row = await waitFor(async () => {
      const [r] = await db.db.select().from(user).where(eq(user.id, u.id));
      return r?.deletedAt ? r : null;
    });
    expect(row.email).toBe(`deleted-${u.id}@deleted.invalid`);
    expect(storage.objects.has(`exports/${u.id}/${created?.id}.zip`)).toBe(false);
  });
});
