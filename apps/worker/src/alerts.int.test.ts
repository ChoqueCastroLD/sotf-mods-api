/**
 * Operational alerts (PLAN §10.3) against PostgreSQL 16 + pg-boss 12: a job that fails its last
 * attempt reaches the dead-letter queue and emails the admins once; KelvinSeek at 80 % of the daily
 * budget emails once per UTC day; nothing is re-sent on the next check.
 */
import { randomBytes } from 'node:crypto';
import { silentLogger, systemClock } from '@sotf/core';
import { createMemoryTransport } from '@sotf/core/email/index';
import { recordKelvinUsage } from '@sotf/core/kelvinseek/index';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createAlertMonitor } from './alerts.ts';
import { createWorker, type Worker } from './app.ts';
import { parseWorkerEnv } from './env.ts';

let db: TestDb;
let worker: Worker;
let f: Factories;
const QUEUE = 'sotf-test.always-fails';

async function waitFor<T>(probe: () => Promise<T | undefined | null | false>, timeoutMs = 30_000): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await probe();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}

beforeAll(async () => {
  db = await startTestDb({ pgBoss: true });
  f = createFactories(db.db);
  const env = parseWorkerEnv({
    NODE_ENV: 'test',
    LOG_LEVEL: 'silent',
    PUBLIC_SITE_URL: 'https://sotf-mods.test',
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET: randomBytes(32).toString('base64url'),
    DATABASE_URL: db.url,
  });
  worker = createWorker({ env, db, logger: silentLogger(), schedules: false, groups: [], alerts: true });
  await worker.start();
}, 240_000);

afterAll(async () => {
  await worker?.stop(5000);
  await db?.stop();
});

describe('operational alerts', () => {
  it('is wired into the worker when enabled', () => {
    expect(worker.alerts).not.toBeNull();
  });

  it('emails the admins about new dead letters and KelvinSeek at 80 %, once', async () => {
    await f.user({ role: 'admin', email: 'admin@example.test' });
    await f.user({ role: 'admin', email: 'gone@example.test', deletedAt: new Date() });
    await f.user({ email: 'user@example.test' });

    const transport = createMemoryTransport();
    const monitor = createAlertMonitor({
      db: db.db,
      bossSchema: 'pgboss',
      kelvinDailyBudgetUsd: 3,
      kelvinModel: 'gpt-4o-mini',
      transport: () => transport,
      from: 'SOTF Mods <noreply@sotf-mods.com>',
      clock: systemClock,
      log: silentLogger(),
      intervalMs: 60_000,
    });

    // Nothing to report yet.
    expect(await monitor.runOnce()).toEqual([]);

    // A job failing its only attempt: pg-boss moves it to the shared dead-letter queue.
    await worker.boss.createQueue(QUEUE, { retryLimit: 0, deadLetter: 'dead-letter' });
    await worker.boss.work(QUEUE, { pollingIntervalSeconds: 0.5 }, async () => {
      throw new Error('boom');
    });
    await worker.boss.send(QUEUE, { n: 1 });
    await waitFor(async () => {
      const result = await db.pool.query(`SELECT count(*)::int AS n FROM pgboss.job WHERE name = 'dead-letter'`);
      return (result.rows[0] as { n: number }).n > 0;
    });

    const day = new Date().toISOString().slice(0, 10);
    await recordKelvinUsage(db.db, day, {
      requests: 10,
      fallbacks: 0,
      tokensIn: 1000,
      tokensOut: 1000,
      costMicroUsd: 2_500_000,
    });

    const alerts = await monitor.runOnce();
    expect(alerts.map((a) => a.kind).sort()).toEqual(['dead-letter', 'kelvinseek-budget']);
    expect(transport.sent.map((m) => m.to)).toEqual(['admin@example.test', 'admin@example.test']);
    expect(transport.sent.find((m) => m.subject.includes('dead-letter'))?.subject).toContain('1 job(s)');
    expect(transport.sent.find((m) => m.subject.includes('KelvinSeek'))?.subject).toContain('83 %');

    // The next check has nothing new.
    expect(await monitor.runOnce()).toEqual([]);
    expect(transport.sent).toHaveLength(2);
    await monitor.stop();
  }, 90_000);
});
