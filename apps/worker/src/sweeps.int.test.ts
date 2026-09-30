/**
 * Worker sweeps against PostgreSQL 16 + pg-boss 12: a security scan left `pending` for more than
 * 6 h without a live `security.scan` job is enqueued again once; a scan whose job is still queued
 * and a recent pending scan are left alone.
 */
import { randomBytes } from 'node:crypto';
import { silentLogger } from '@sotf/core';
import { securityScan } from '@sotf/db';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from './app.ts';
import { parseWorkerEnv } from './env.ts';
import { sweepLostSecurityScans } from './sweeps.ts';

let db: TestDb;
let worker: Worker;
let f: Factories;

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
  // No job groups: enqueued scans stay queued, which is what a live job looks like.
  worker = createWorker({ env, db, logger: silentLogger(), schedules: false, groups: [] });
  await worker.start();
}, 240_000);

afterAll(async () => {
  await worker?.stop(5000);
  await db?.stop();
});

async function queuedScans(modVersionId: number): Promise<number> {
  const result = await db.pool.query(
    `SELECT count(*)::int AS n FROM pgboss.job
      WHERE name = 'security.scan' AND state = 'created' AND (data->>'modVersionId')::int = $1`,
    [modVersionId],
  );
  return (result.rows[0] as { n: number }).n;
}

describe('lost security scan sweep', () => {
  it('re-enqueues only pending scans older than 6 h without a live job, once', async () => {
    const old = new Date(Date.now() - 7 * 3600 * 1000);
    const sha = (c: string) => c.repeat(64);
    const { version: lost } = await f.modWithVersion();
    const { version: recent } = await f.modWithVersion();
    const { version: done } = await f.modWithVersion();
    await db.db.insert(securityScan).values([
      { modVersionId: lost.id, sha256: sha('a'), verdict: 'pending', createdAt: old },
      { modVersionId: recent.id, sha256: sha('b'), verdict: 'pending' },
      { modVersionId: done.id, sha256: sha('c'), verdict: 'clean', createdAt: old },
    ]);

    expect(await sweepLostSecurityScans(worker.deps, 'pgboss')).toEqual([lost.id]);
    expect(await queuedScans(lost.id)).toBe(1);
    expect(await queuedScans(recent.id)).toBe(0);
    expect(await queuedScans(done.id)).toBe(0);

    // The job is queued now: the next sweep leaves it alone.
    expect(await sweepLostSecurityScans(worker.deps, 'pgboss')).toEqual([]);
    expect(await worker.sweeps.runNow('security-scan')).toBe(true);
    expect(await queuedScans(lost.id)).toBe(1);
  }, 60_000);
});
