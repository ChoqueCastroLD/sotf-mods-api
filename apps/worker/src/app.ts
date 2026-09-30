/**
 * `createWorker()`: wires pg-boss, the database, the kernel and the job groups of one worker process.
 * `src/worker.ts` is the entry point; tests build workers with `createWorker()` directly.
 */
import { type Clock, createLogger, Jobs, type KernelDeps, type Logger, systemClock } from '@sotf/core';
import { createTransport } from '@sotf/core/email/index';
import { createDb, type DbHandle } from '@sotf/db';
import { PgBoss } from 'pg-boss';
import { type AlertMonitor, createAlertMonitor } from './alerts.ts';
import type { JobGroup } from './define-job.ts';
import type { WorkerEnv } from './env.ts';
import { jobGroups as registeredGroups } from './jobs/_registry.gen.ts';
import { type RuntimeState, startRuntime } from './runtime.ts';
import { type ErrorReporter, noopReporter } from './sentry.ts';
import { createWorkerServices, type WorkerServices } from './services.ts';
import { createSweepRunner, type SweepRunner, workerSweeps } from './sweeps.ts';

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
  /** Error reporting of failed jobs (default: none; `src/worker.ts` passes Sentry). */
  reporter?: ErrorReporter;
  /** Services handed to the jobs (default: built from `env`). */
  services?: WorkerServices;
  /**
   * Operational alerts to the admins every `ALERT_INTERVAL_SECONDS` (`src/alerts.ts`). Default
   * false; `src/worker.ts` turns them on.
   */
  alerts?: boolean;
  /** Periodic sweeps (`src/sweeps.ts`: lost security scans). Default false; `src/worker.ts` turns them on. */
  sweeps?: boolean;
}

export interface Worker {
  boss: PgBoss;
  jobs: Jobs;
  db: DbHandle;
  log: Logger;
  deps: KernelDeps & { jobs: Jobs };
  services: WorkerServices;
  /** The operational alert monitor (null when alerts are off). */
  alerts: AlertMonitor | null;
  /** The periodic sweeps (always available for `runNow`; timers only with `sweeps: true`). */
  sweeps: SweepRunner;
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
  const reporter = options.reporter ?? noopReporter;
  const services = options.services ?? createWorkerServices(env);
  let started = false;
  const alerts =
    options.alerts && env.ALERT_INTERVAL_SECONDS > 0
      ? createAlertMonitor({
          db: db.db,
          bossSchema: env.PGBOSS_SCHEMA,
          kelvinDailyBudgetUsd: env.KELVINSEEK_DAILY_BUDGET_USD,
          kelvinModel: env.KELVINSEEK_MODEL,
          transport: () => createTransport(env),
          from: env.EMAIL_FROM,
          clock,
          log,
          intervalMs: env.ALERT_INTERVAL_SECONDS * 1000,
        })
      : null;

  const sweeps = createSweepRunner({ deps, sweeps: workerSweeps(deps, env.PGBOSS_SCHEMA) });

  return {
    boss,
    jobs,
    db,
    log,
    deps,
    services,
    alerts,
    sweeps,
    get started() {
      return started;
    },
    async start() {
      await boss.start();
      const state = await startRuntime({
        boss,
        deps,
        services,
        groups: options.groups ?? registeredGroups,
        legacyCoexist: env.LEGACY_COEXIST,
        concurrency: env.WORKER_CONCURRENCY,
        schedules: options.schedules,
        pollingIntervalSeconds: options.pollingIntervalSeconds,
        onJobError: reporter.enabled ? (error, info) => reporter.captureJobError(error, info) : undefined,
      });
      started = true;
      alerts?.start();
      if (options.sweeps) sweeps.start();
      return state;
    },
    async stop(timeoutMs = 30_000) {
      started = false;
      await alerts?.stop();
      await sweeps.stop();
      await boss.stop({ graceful: true, timeout: timeoutMs }).catch((error: unknown) => {
        log.warn({ err: error }, 'pg-boss stop failed');
      });
      if (ownedDb) await ownedDb.close();
    },
  };
}
