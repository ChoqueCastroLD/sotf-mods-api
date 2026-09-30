/**
 * Worker integration tests (WP-20 acceptance): a job is registered and executed; an `emit` inside a
 * rolled-back transaction enqueues nothing while a committed one is dispatched to its subscribers;
 * coexistence mode, schedules and the health server — against PostgreSQL 16 with pg-boss.
 */

import { randomBytes } from 'node:crypto';
import type { AddressInfo } from 'node:net';
import { DOMAIN_EVENT_EXAMPLES, type DomainEvent } from '@sotf/contracts/domain-events';
import { silentLogger } from '@sotf/core';
import { withTx } from '@sotf/db';
import { startTestDb, type TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createWorker, type Worker } from '../src/app.ts';
import { defineJob, defineJobGroup, onEvent } from '../src/define-job.ts';
import { parseWorkerEnv, type WorkerEnv } from '../src/env.ts';
import { createHealthServer } from '../src/health.ts';
import platformJobs from '../src/jobs/platform/index.ts';
import type { ErrorReporter, JobErrorInfo } from '../src/sentry.ts';

let db: TestDb;
let env: WorkerEnv;
let worker: Worker;
const trendingRuns: string[] = [];
const seenEvents: DomainEvent[] = [];
const reported: JobErrorInfo[] = [];
const reporter: ErrorReporter = {
  enabled: true,
  captureJobError: (_error, info) => {
    reported.push(info);
  },
  captureFatal: () => undefined,
  flush: async () => undefined,
};

async function waitFor<T>(probe: () => Promise<T | undefined | null | false>, timeoutMs = 15_000): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const value = await probe();
    if (value) return value;
    if (Date.now() > deadline) throw new Error('timed out');
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

const testGroup = defineJobGroup({
  name: 'test',
  jobs: [
    defineJob({
      queue: 'stats.trending',
      handler: async (_data, { job, ctx, services }) => {
        trendingRuns.push(job.id);
        expect(ctx.requestId).toBe(job.id);
        expect(ctx.actor).toBeNull();
        // The job sees the environment the worker was created with, not process.env.
        expect(services.env).toBe(env);
        expect(services.storage()).toBeNull();
        return { ok: true };
      },
    }),
    defineJob({
      queue: 'cleanup.kelvinseek',
      handler: async () => {
        throw new Error('cleanup failed on purpose');
      },
    }),
    defineJob({ queue: 'legacy.counters', handler: async () => undefined }),
  ],
  subscribers: [
    onEvent({
      name: 'test-recorder',
      types: ['mod.updated'],
      handler: async (event) => {
        seenEvents.push(event);
      },
    }),
  ],
});

beforeAll(async () => {
  db = await startTestDb({ pgBoss: true });
  env = parseWorkerEnv({
    NODE_ENV: 'test',
    LOG_LEVEL: 'silent',
    PUBLIC_SITE_URL: 'https://sotf-mods.test',
    INTERNAL_SECRET: randomBytes(32).toString('base64url'),
    APP_SECRET: randomBytes(32).toString('base64url'),
    DATABASE_URL: db.url,
    LEGACY_COEXIST: 'true',
    GIT_SHA: 'test',
  });
  worker = createWorker({
    env,
    db,
    groups: [platformJobs, testGroup],
    logger: silentLogger(),
    pollingIntervalSeconds: 0.5,
    maintenance: false,
    reporter,
  });
  const state = await worker.start();
  expect(state.queues).toContain('stats.trending');
  expect(state.queues).toContain('domain.event');
  expect(state.skipped).toEqual(['legacy.counters']);
  expect(state.subscribers).toEqual(['cdn-purge-on-event', 'test-recorder']);
  expect(state.scheduled).toContain('stats.trending#hourly');
  expect(state.scheduled).not.toContain('legacy.counters#every-30m');
});

afterAll(async () => {
  await worker?.stop(5000);
  await db?.stop();
});

describe('jobs', () => {
  it('registers a job and executes it', async () => {
    const id = await worker.jobs.enqueue('stats.trending', {});
    expect(id).toBeTruthy();
    await waitFor(async () => trendingRuns.includes(id as string));
    const job = await waitFor(async () => {
      const [found] = await worker.boss.findJobs('stats.trending', { id: id as string });
      return found?.state === 'completed' ? found : null;
    });
    expect(job.output).toEqual({ ok: true });
  });

  it('reports a failed attempt with its queue, job id and retry state', async () => {
    const id = await worker.jobs.enqueue('cleanup.kelvinseek', {});
    const info = await waitFor(async () => reported.find((r) => r.jobId === id));
    expect(info).toEqual({ queue: 'cleanup.kelvinseek', jobId: id, retryCount: 0, final: false });
  });

  it('validates payloads when enqueuing', async () => {
    await expect(worker.jobs.enqueue('cdn.purge', { tags: [], reason: 'x' })).rejects.toThrow();
  });

  it('schedules only queues that have a handler (UTC)', async () => {
    const schedules = await worker.boss.getSchedules();
    const names = schedules.map((s) => `${s.name}#${s.key}`);
    expect(names).toContain('stats.trending#hourly');
    expect(names).not.toContain('stats.rollup#hourly');
    expect(schedules.find((s) => s.name === 'stats.trending')?.options).toMatchObject({ tz: 'UTC' });
  });

  it('debounces coalescing queues by payload', async () => {
    const payload = { tags: ['home' as const, 'mod:99' as const], reason: 'test:debounce' };
    const first = await worker.jobs.enqueue('cdn.purge', payload);
    const second = await worker.jobs.enqueue('cdn.purge', { ...payload, tags: ['mod:99', 'home'] });
    const third = await worker.jobs.enqueue('cdn.purge', payload);
    expect(first).toBeTruthy();
    expect(second).toBeTruthy();
    expect(third).toBeNull();
  });
});

describe('domain events', () => {
  const makeEvent = () =>
    worker.jobs.event('mod.updated', DOMAIN_EVENT_EXAMPLES['mod.updated'], { actorId: 12 }) as DomainEvent;

  it('an emit inside a rolled-back transaction enqueues nothing', async () => {
    const event = makeEvent();
    await expect(
      withTx(db.db, async (tx) => {
        await worker.jobs.emit(tx, event);
        throw new Error('rollback');
      }),
    ).rejects.toThrow('rollback');
    const found = await worker.boss.findJobs('domain.event', { id: event.id });
    expect(found).toEqual([]);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    expect(seenEvents.some((e) => e.id === event.id)).toBe(false);
  });

  it('a committed emit is dispatched to its subscribers and purges the CDN tags', async () => {
    const event = makeEvent();
    await withTx(db.db, async (tx) => {
      await worker.jobs.emit(tx, event);
    });
    await waitFor(async () => seenEvents.some((e) => e.id === event.id));
    const done = await waitFor(async () => {
      const [job] = await worker.boss.findJobs('domain.event', { id: event.id });
      return job?.state === 'completed' ? job : null;
    });
    expect(done.output).toEqual({ handled: ['cdn-purge-on-event', 'test-recorder'] });
    const purges = await worker.boss.findJobs('cdn.purge');
    const purge = purges.find((j) => (j.data as { reason: string }).reason === 'event:mod.updated');
    expect(purge?.data).toMatchObject({ tags: expect.arrayContaining(['mod:20', 'user:12', 'list:mods', 'home']) });
  });

  it('emitting the same event twice is idempotent (the id is the job id)', async () => {
    const event = makeEvent();
    await worker.jobs.emit(db.db, event);
    await worker.jobs.emit(db.db, event);
    const found = await worker.boss.findJobs('domain.event', { id: event.id });
    expect(found).toHaveLength(1);
  });
});

describe('health server', () => {
  it('answers /healthz and /readyz', async () => {
    const server = createHealthServer({
      version: 'test',
      startedAt: new Date(),
      db: async () => {
        await db.pool.query('SELECT 1');
        return true;
      },
      pgboss: () => worker.started,
    });
    await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
    try {
      const { port } = server.address() as AddressInfo;
      const health = await fetch(`http://127.0.0.1:${port}/healthz`);
      expect(health.status).toBe(200);
      expect(await health.json()).toMatchObject({ status: 'ok', service: 'worker', version: 'test' });
      const ready = await fetch(`http://127.0.0.1:${port}/readyz`);
      expect(ready.status).toBe(200);
      expect(await ready.json()).toMatchObject({ status: 'ok', checks: { db: true, pgboss: true } });
      expect((await fetch(`http://127.0.0.1:${port}/nope`)).status).toBe(404);
    } finally {
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  });
});
