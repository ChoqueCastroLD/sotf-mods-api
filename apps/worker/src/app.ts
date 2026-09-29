/**
 * `createWorker()`: wires pg-boss, the database, the kernel and the job groups of one worker process.
 * `src/worker.ts` is the entry point; tests build workers with `createWorker()` directly.
 */
import { type Clock, createLogger, Jobs, type KernelDeps, type Logger, systemClock } from '@sotf/core';
import { createDb, type DbHandle } from '@sotf/db';
import { PgBoss } from 'pg-boss';
import type { JobGroup } from './define-job.ts';
import type { WorkerEnv } from './env.ts';
import { jobGroups as registeredGroups } from './jobs/_registry.gen.ts';
import { type RuntimeState, startRuntime } from './runtime.ts';

export interface CreateWorkerOptions {
  env: WorkerEnv;
  /** Job groups (default: the generated registry). */
  groups?: readonly JobGroup[];
  db?: DbHandle;
  logger?: Logger;
  clock?: Clock;
  /** Register recurring schedules (default true). */
  schedules?: boolean;
  /** Worker poll interval in seconds (default 2). */
  pollingIntervalSeconds?: number;
  /** pg-boss maintenance (supervise) and cron processing (default true). */
  maintenance?: boolean;
}

export interface Worker {
  boss: PgBoss;
  jobs: Jobs;
  db: DbHandle;
  log: Logger;
  deps: KernelDeps & { jobs: Jobs };
  readonly started: boolean;
  start(): Promise<RuntimeState>;
  /** Graceful stop: waits for active jobs (up to `timeoutMs`), then closes pg-boss and the pool. */
  stop(timeoutMs?: number): Promise<void>;
}

export function createWorker(options: CreateWorkerOptions): Worker {
  const { env } = options;
  const log = options.logger ?? createLogger({ service: 'worker', level: env.LOG_LEVEL, version: env.GIT_SHA });
  const ownedDb = options.db
    ? null
    : createDb({ connectionString: env.DATABASE_URL, max: env.DB_POOL_MAX, applicationName: 'sotf-worker' });
  const db = (options.db ?? ownedDb) as DbHandle;
  const maintenance = options.maintenance ?? true;
  const boss = new PgBoss({
    connectionString: env.DATABASE_URL,
    schema: env.PGBOSS_SCHEMA,
    application_name: 'sotf-worker-boss',
    max: env.DB_POOL_MAX,
    migrate: false,
    createSchema: false,
    supervise: maintenance,
    schedule: maintenance,
    options: '-c TimeZone=UTC',
  });
  boss.on('error', (error) => log.error({ err: error }, 'pg-boss error'));
  const clock = options.clock ?? systemClock;
  const jobs = new Jobs(boss, { clock });
  const deps = { db: db.db, jobs, clock, log, appSecret: env.APP_SECRET };
  let started = false;

  return {
    boss,
    jobs,
    db,
    log,
    deps,
    get started() {
      return started;
    },
    async start() {
      await boss.start();
      const state = await startRuntime({
        boss,
        deps,
        groups: options.groups ?? registeredGroups,
        legacyCoexist: env.LEGACY_COEXIST,
        concurrency: env.WORKER_CONCURRENCY,
        schedules: options.schedules,
        pollingIntervalSeconds: options.pollingIntervalSeconds,
      });
      started = true;
      return state;
    },
    async stop(timeoutMs = 30_000) {
      started = false;
      await boss.stop({ graceful: true, timeout: timeoutMs }).catch((error: unknown) => {
        log.warn({ err: error }, 'pg-boss stop failed');
      });
      if (ownedDb) await ownedDb.close();
    },
  };
}
