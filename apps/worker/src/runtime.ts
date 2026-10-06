/**
 * Worker runtime (PLAN §2.9): pg-boss 12 with `migrate: false` (the schema is installed by
 * `db:migrate`), maintenance and cron enabled, every queue ensured, one `work()` per registered job,
 * the `domain.event` dispatcher and the recurring schedules of `JOB_SCHEDULES` (UTC).
 *
 * Only queues with a handler are scheduled; schedules of queues without one (their WP has not
 * landed) or disabled by coexistence mode are removed so they do not pile up jobs.
 */

import { parseDomainEvent } from '@sotf/contracts/domain-events';
import { JOB_SCHEDULES, type JobQueue, parseJobPayload, RETIRED_JOB_SCHEDULES } from '@sotf/contracts/jobs';
import { DOMAIN_EVENT_QUEUE, ensureQueues, type Jobs, type KernelDeps, queueConfig, systemCtx } from '@sotf/core';
import type { Job, PgBoss } from 'pg-boss';
import { isQueueEnabled } from './coexist.ts';
import {
  type AnyJobDefinition,
  type EventSubscriber,
  type JobContext,
  type JobGroup,
  subscribes,
} from './define-job.ts';
import type { JobErrorInfo } from './sentry.ts';
import type { WorkerServices } from './services.ts';

export interface RuntimeOptions {
  boss: PgBoss;
  deps: KernelDeps & { jobs: Jobs };
  /** Environment and storage handed to every job (`JobContext.services`). */
  services: WorkerServices;
  groups: readonly JobGroup[];
  legacyCoexist: boolean;
  concurrency: number;
  /** Register the recurring schedules (default true). */
  schedules?: boolean;
  /** Poll interval of every worker in seconds (default 2; tests use 0.5). */
  pollingIntervalSeconds?: number;
  /** Called with every failed attempt (error reporting, `src/sentry.ts`); must not throw. */
  onJobError?: (error: unknown, info: JobErrorInfo) => void;
}

/** Whether pg-boss retries a failed attempt of `queue` again (`queueConfig` of `@sotf/core`). */
export function isFinalAttempt(queue: string, retryCount: number): boolean {
  const limit = queueConfig(queue as JobQueue).retryLimit ?? 0;
  return retryCount >= limit;
}

/** Runs one attempt and reports its failure before rethrowing it to pg-boss. */
async function reporting<T>(
  job: Job<unknown>,
  onJobError: RuntimeOptions['onJobError'],
  run: () => Promise<T>,
): Promise<T> {
  try {
    return await run();
  } catch (error) {
    try {
      onJobError?.(error, {
        queue: job.name,
        jobId: job.id,
        retryCount: job.retryCount,
        final: isFinalAttempt(job.name, job.retryCount),
      });
    } catch {
      // Reporting never changes the outcome of the job.
    }
    throw error;
  }
}

export interface RuntimeState {
  queues: string[];
  subscribers: string[];
  scheduled: string[];
  skipped: string[];
}

function contextFor(deps: KernelDeps, services: WorkerServices, job: Job<unknown>): JobContext {
  return {
    ctx: systemCtx(deps, job.id),
    job: { id: job.id, queue: job.name, retryCount: job.retryCount, signal: job.signal },
    services,
  };
}

/** Collects the handlers of every group; rejects two handlers for one queue. */
export function collect(groups: readonly JobGroup[]): {
  jobs: Map<JobQueue, AnyJobDefinition>;
  subscribers: EventSubscriber[];
} {
  const jobs = new Map<JobQueue, AnyJobDefinition>();
  const owners = new Map<string, string>();
  const subscribers: EventSubscriber[] = [];
  const names = new Set<string>();
  for (const group of groups) {
    for (const job of group.jobs) {
      const previous = owners.get(job.queue);
      if (previous) throw new Error(`queue ${job.queue} is handled by both "${previous}" and "${group.name}"`);
      owners.set(job.queue, group.name);
      jobs.set(job.queue, job);
    }
    for (const subscriber of group.subscribers) {
      if (names.has(subscriber.name)) throw new Error(`duplicate event subscriber "${subscriber.name}"`);
      names.add(subscriber.name);
      subscribers.push(subscriber);
    }
  }
  return { jobs, subscribers };
}

/** Runs the subscribers of one event in sequence (all of them; the first error is rethrown). */
export async function dispatchEvent(
  subscribers: readonly EventSubscriber[],
  raw: unknown,
  context: JobContext,
): Promise<{ handled: string[] }> {
  const event = parseDomainEvent(raw);
  const handled: string[] = [];
  let failure: unknown = null;
  for (const subscriber of subscribers) {
    if (!subscribes(subscriber, event.type)) continue;
    try {
      await subscriber.handler(event, context);
      handled.push(subscriber.name);
    } catch (error) {
      context.ctx.log.error({ err: error, subscriber: subscriber.name, eventId: event.id }, 'event subscriber failed');
      failure ??= error;
    }
  }
  if (failure) throw failure;
  return { handled };
}

export async function startRuntime(options: RuntimeOptions): Promise<RuntimeState> {
  const { boss, deps } = options;
  const log = deps.log;
  const { jobs, subscribers } = collect(options.groups);
  const state: RuntimeState = { queues: [], subscribers: subscribers.map((s) => s.name), scheduled: [], skipped: [] };
  const polling = options.pollingIntervalSeconds ?? 2;

  await ensureQueues(boss);

  for (const [queue, definition] of jobs) {
    if (!isQueueEnabled(queue, options.legacyCoexist)) {
      state.skipped.push(queue);
      log.info({ queue }, 'queue disabled while LEGACY_COEXIST=true');
      continue;
    }
    await boss.work(
      queue,
      {
        batchSize: 1,
        localConcurrency: definition.options?.localConcurrency ?? options.concurrency,
        pollingIntervalSeconds: definition.options?.pollingIntervalSeconds ?? polling,
      },
      async ([job]) => {
        if (!job) return;
        return reporting(job, options.onJobError, async () => {
          const context = contextFor(deps, options.services, job);
          const data = parseJobPayload(queue, job.data);
          const started = Date.now();
          const output = await (definition.handler as (d: unknown, c: JobContext) => Promise<unknown>)(data, context);
          context.ctx.log.info({ queue, jobId: job.id, ms: Date.now() - started }, 'job completed');
          return output;
        });
      },
    );
    state.queues.push(queue);
  }

  // The dispatcher always runs: events without subscribers are simply completed.
  await boss.work(
    DOMAIN_EVENT_QUEUE,
    { batchSize: 1, localConcurrency: options.concurrency, pollingIntervalSeconds: polling },
    async ([job]) => {
      if (!job) return;
      return reporting(job, options.onJobError, () =>
        dispatchEvent(subscribers, job.data, contextFor(deps, options.services, job)),
      );
    },
  );
  state.queues.push(DOMAIN_EVENT_QUEUE);

  if (options.schedules !== false) {
    for (const schedule of JOB_SCHEDULES) {
      const active = jobs.has(schedule.queue) && isQueueEnabled(schedule.queue, options.legacyCoexist);
      if (active) {
        await boss.schedule(schedule.queue, schedule.cron, schedule.data, { tz: 'UTC', key: schedule.key });
        state.scheduled.push(`${schedule.queue}#${schedule.key}`);
      } else {
        await boss.unschedule(schedule.queue, schedule.key);
      }
    }
    // Schedules of removed queues live in the database until deleted.
    for (const retired of RETIRED_JOB_SCHEDULES) await boss.unschedule(retired.queue, retired.key);
  }
  log.info(state, 'worker runtime started');
  return state;
}
