/**
 * Job groups (PLAN §2.9): each `src/jobs/<name>/index.ts` default-exports `defineJobGroup({...})`;
 * `pnpm gen` lists them in `src/jobs/_registry.gen.ts`.
 *
 * - `defineJob({ queue, handler })` consumes one pg-boss queue of `JOB_PAYLOADS`. The payload is
 *   validated with the queue's schema before the handler runs; a thrown error retries the job with
 *   backoff and, after the last retry, moves it to the dead-letter queue.
 * - `onEvent({ name, types, handler })` subscribes to domain events (the single `domain.event`
 *   fan-out queue). Subscribers of one event run in sequence and the event is retried as a whole
 *   when one fails, so **subscribers must be idempotent**.
 */
import type { DomainEvent, DomainEventType } from '@sotf/contracts/domain-events';
import type { JobData, JobQueue } from '@sotf/contracts/jobs';
import type { Ctx } from '@sotf/core';

export interface JobRun {
  id: string;
  queue: string;
  retryCount: number;
  signal: AbortSignal;
}

export interface JobContext {
  ctx: Ctx;
  job: JobRun;
}

export interface JobWorkOptions {
  /** Parallel jobs of this queue per process (default WORKER_CONCURRENCY). */
  localConcurrency?: number;
  /** Poll interval in seconds (default 2). */
  pollingIntervalSeconds?: number;
}

export interface JobDefinition<Q extends JobQueue = JobQueue> {
  kind: 'job';
  queue: Q;
  handler: (data: JobData<Q>, context: JobContext) => Promise<unknown>;
  options?: JobWorkOptions;
}

export interface EventSubscriber {
  kind: 'subscriber';
  /** Unique name, for logs (`cdn.purge-on-event`). */
  name: string;
  /** Event types handled, or `'*'` for all. */
  types: readonly DomainEventType[] | '*';
  handler: (event: DomainEvent, context: JobContext) => Promise<void>;
}

/** A job definition of any queue (a union, so handlers keep their precise payload type). */
export type AnyJobDefinition = { [Q in Exclude<JobQueue, 'domain.event'>]: JobDefinition<Q> }[Exclude<
  JobQueue,
  'domain.event'
>];

export interface JobGroup {
  name: string;
  jobs: readonly AnyJobDefinition[];
  subscribers: readonly EventSubscriber[];
}

export function defineJob<Q extends Exclude<JobQueue, 'domain.event'>>(
  definition: Omit<JobDefinition<Q>, 'kind'>,
): JobDefinition<Q> {
  return { kind: 'job', ...definition };
}

export function onEvent<T extends DomainEventType>(definition: {
  name: string;
  types: readonly T[] | '*';
  handler: (event: Extract<DomainEvent, { type: T }>, context: JobContext) => Promise<void>;
}): EventSubscriber {
  return { kind: 'subscriber', ...definition } as EventSubscriber;
}

export function defineJobGroup(group: {
  name: string;
  jobs?: readonly AnyJobDefinition[];
  subscribers?: readonly EventSubscriber[];
}): JobGroup {
  if (!/^[a-z][a-z0-9-]*$/.test(group.name)) throw new Error(`invalid job group name "${group.name}"`);
  return { name: group.name, jobs: group.jobs ?? [], subscribers: group.subscribers ?? [] };
}

/** True when the subscriber handles the event type. */
export function subscribes(subscriber: EventSubscriber, type: DomainEventType): boolean {
  return subscriber.types === '*' || subscriber.types.includes(type);
}
