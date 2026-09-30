/**
 * Nightly compat reconciliation through the real worker runtime (pg-boss 12 + PostgreSQL 16):
 * `accounts.trust-level` recomputes the levels and then re-aggregates the versions whose stored
 * aggregate no longer matches the reporters (a banned reporter, a new verified creator), with no
 * domain event involved. A second pass finds nothing to do.
 */
import { randomBytes } from 'node:crypto';
import { silentLogger, systemCtx } from '@sotf/core';
import { aggregateCompat } from '@sotf/core/compat/index';
import { compatReport, mod, modVersionCompat, user } from '@sotf/db';
import { createFactories, type Factories, startTestDb, type TestDb } from '@sotf/db/testing';
import { eq } from 'drizzle-orm';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from '../../app.ts';
import { parseWorkerEnv } from '../../env.ts';
import { createAccountJobs } from '../accounts/index.ts';
import compatJobs from './index.ts';
import { reconcileCompat, staleCompatVersions } from './reconcile.ts';

let db: TestDb;
let worker: Worker;
let f: Factories;

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
    WORKER_CONCURRENCY: '2',
  });
  worker = createWorker({
    env,
    db,
    logger: silentLogger(),
    schedules: false,
    pollingIntervalSeconds: 0.5,
    groups: [createAccountJobs({ storage: null, siteUrl: 'https://sotf-mods.test' }), compatJobs],
  });
  await worker.start();
}, 240_000);

afterAll(async () => {
  await worker?.stop(5000);
  await db?.stop();
});

async function aggregateRow(modVersionId: number, gameBuildId: number) {
  const [row] = await db.db
    .select()
    .from(modVersionCompat)
    .where(eq(modVersionCompat.modVersionId, modVersionId))
    .then((rows) => rows.filter((r) => r.gameBuildId === gameBuildId));
  return row;
}

describe('compat reconciliation after accounts.trust-level', () => {
  it('re-aggregates versions whose reporters changed and is idempotent', async () => {
    const old = new Date(Date.now() - 60 * 24 * 3600 * 1000);
    const build = await f.gameBuild({ isCurrent: true, releasedAt: '2026-01-01' });
    const { mod: created, version } = await f.modWithVersion({}, { status: 'active' });
    const reporters = await Promise.all(
      [1, 2, 3].map(() => f.user({ createdAt: old, emailVerifiedAt: old, trustLevel: 1 })),
    );
    for (const reporter of reporters) {
      await db.db.insert(compatReport).values({
        userId: reporter.id,
        modVersionId: version.id,
        gameBuildId: build.id,
        mode: 'singleplayer',
        result: 'works',
        weight: 1,
      });
    }
    const ctx = systemCtx(worker.deps, 'test');
    await aggregateCompat(ctx, { modVersionId: version.id });
    expect(await aggregateRow(version.id, build.id)).toMatchObject({ works: 3, computedStatus: 'works' });
    expect(await staleCompatVersions(ctx)).not.toContain(version.id);

    // A ban (no domain event): the report must stop counting.
    await db.db
      .update(user)
      .set({ bannedAt: new Date() })
      .where(eq(user.id, (reporters[2] as { id: number }).id));
    expect(await staleCompatVersions(ctx)).toContain(version.id);

    await worker.jobs.enqueue('accounts.trust-level', {});
    const row = await waitFor(async () => {
      const current = await aggregateRow(version.id, build.id);
      return current?.works === 2 ? current : null;
    });
    expect(row.computedStatus).toBe('untested');
    const [banned] = await db.db
      .select()
      .from(user)
      .where(eq(user.id, (reporters[2] as { id: number }).id));
    expect(banned?.trustLevel).toBe(0);

    // The mod-level status followed the aggregate.
    await waitFor(async () => {
      const [row] = await db.db.select({ compatStatus: mod.compatStatus }).from(mod).where(eq(mod.id, created.id));
      return row?.compatStatus === 'untested';
    });

    // Nothing left to reconcile: a second pass schedules no aggregate.
    expect(await staleCompatVersions(ctx)).not.toContain(version.id);
    const again = await reconcileCompat(ctx);
    expect(again.mods).toBe(0);
  }, 90_000);

  it('detects a weight that no longer matches the reporter (verified creator)', async () => {
    const old = new Date(Date.now() - 60 * 24 * 3600 * 1000);
    const build = await f.gameBuild({ releasedAt: '2026-02-01' });
    const { version } = await f.modWithVersion({}, { status: 'active' });
    const reporter = await f.user({ createdAt: old, emailVerifiedAt: old, trustLevel: 1 });
    await db.db.insert(compatReport).values({
      userId: reporter.id,
      modVersionId: version.id,
      gameBuildId: build.id,
      mode: 'host',
      result: 'broken',
      weight: 1,
    });
    const ctx = systemCtx(worker.deps, 'test');
    await aggregateCompat(ctx, { modVersionId: version.id });
    expect(await staleCompatVersions(ctx)).not.toContain(version.id);

    await db.db.update(user).set({ verifiedCreator: true }).where(eq(user.id, reporter.id));
    expect(await staleCompatVersions(ctx)).toContain(version.id);
    await aggregateCompat(ctx, { modVersionId: version.id });
    const [stored] = await db.db.select().from(compatReport).where(eq(compatReport.userId, reporter.id));
    expect(stored?.weight).toBe(1.5);
    expect(await staleCompatVersions(ctx)).not.toContain(version.id);
  }, 60_000);
});
