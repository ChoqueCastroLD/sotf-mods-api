/**
 * Job producer (PLAN §2.6 "Eventos de dominio", §2.9): `emit(tx, event)` publishes a domain event
 * **inside** the caller's transaction (pg-boss `send` with the transaction executor), so an event
 * exists if and only if the transaction commits. `enqueue(queue, payload)` sends a validated job,
 * optionally in a transaction too. Coalescing queues (`JOB_DEBOUNCE_SECONDS`) are debounced with a
 * `singletonKey` derived from the payload.
 *
 * Domain events use a single fan-out queue (`domain.event`, WP-11 backlog): the worker dispatches
 * each event to every subscriber registered with `defineJob` (see apps/worker).
 */
import { createHash } from 'node:crypto';
import {
  type DomainEvent,
  type DomainEventOf,
  type DomainEventPayload,
  type DomainEventType,
  makeDomainEvent,
} from '@sotf/contracts/domain-events';
import { JOB_DEBOUNCE_SECONDS, JOB_PAYLOADS, type JobData, type JobPayload, type JobQueue } from '@sotf/contracts/jobs';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { fromDrizzle, type PgBoss, type SendOptions } from 'pg-boss';
import { type Clock, systemClock } from './clock.ts';
import { newId } from './ids.ts';

export const DOMAIN_EVENT_QUEUE = 'domain.event' satisfies JobQueue;

export interface EnqueueOptions {
  /** Send inside this transaction (the job exists only if it commits). */
  tx?: Executor;
  /** Delay: seconds, a Date or an ISO string. */
  startAfter?: number | Date | string;
  priority?: number;
  /** Overrides the derived singleton key of debounced queues, or sets one on other queues. */
  singletonKey?: string;
  /** Explicit job id (uuid): a duplicate id is ignored, which makes sends idempotent. */
  id?: string;
}

/** The subset of pg-boss the producer needs (a real `PgBoss`, or a fake in unit tests). */
export type JobSender = Pick<PgBoss, 'send' | 'sendDebounced'>;

/** Stable JSON (sorted keys) for hashing payloads. */
export function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, v]) => v !== undefined)
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
    return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stableStringify(v)}`).join(',')}}`;
  }
  return JSON.stringify(value) ?? 'null';
}

/** Singleton key of a debounced payload: identical payloads coalesce, different ones do not. */
export function debounceKey(queue: JobQueue, payload: unknown): string {
  const normalized =
    queue === 'cdn.purge' && payload && typeof payload === 'object'
      ? { tags: [...new Set(((payload as { tags?: string[] }).tags ?? []).slice())].sort() }
      : payload;
  return createHash('sha256').update(stableStringify(normalized)).digest('hex').slice(0, 24);
}

export class Jobs {
  readonly #boss: JobSender;
  readonly #clock: Clock;

  constructor(boss: JobSender, options: { clock?: Clock } = {}) {
    this.#boss = boss;
    this.#clock = options.clock ?? systemClock;
  }

  /** Builds (and validates) a domain event with a uuid v7 id and the current time. */
  event<T extends DomainEventType>(
    type: T,
    payload: DomainEventPayload<T>,
    meta: { actorId: number | null },
  ): DomainEventOf<T> {
    return makeDomainEvent(type, payload, {
      id: newId(),
      occurredAt: this.#clock.now().toISOString(),
      actorId: meta.actorId,
    });
  }

  /**
   * Publishes a domain event inside the transaction `tx`. Never call it with the root database
   * handle for writes that must be atomic with the event: pass the transaction.
   */
  async emit(tx: Executor, event: DomainEvent): Promise<void> {
    const data = JOB_PAYLOADS[DOMAIN_EVENT_QUEUE].parse(event);
    await this.#boss.send(DOMAIN_EVENT_QUEUE, data as object, { id: event.id, db: fromDrizzle(tx, sql) });
  }

  /** Builds and publishes an event in one call. Returns the event. */
  async emitNew<T extends DomainEventType>(
    tx: Executor,
    type: T,
    payload: DomainEventPayload<T>,
    meta: { actorId: number | null },
  ): Promise<DomainEventOf<T>> {
    const event = this.event(type, payload, meta);
    await this.emit(tx, event as DomainEvent);
    return event;
  }

  /**
   * Sends a job. The payload is validated with the queue's schema. Returns the job id, or `null`
   * when pg-boss dropped it (duplicate id or a debounce slot already taken).
   */
  async enqueue<Q extends Exclude<JobQueue, 'domain.event'>>(
    queue: Q,
    payload: JobPayload<Q>,
    options: EnqueueOptions = {},
  ): Promise<string | null> {
    const data = JOB_PAYLOADS[queue].parse(payload) as JobData<Q>;
    const send: SendOptions = {};
    if (options.tx) send.db = fromDrizzle(options.tx, sql);
    if (options.startAfter !== undefined) send.startAfter = options.startAfter;
    if (options.priority !== undefined) send.priority = options.priority;
    if (options.id) send.id = options.id;
    const debounce = JOB_DEBOUNCE_SECONDS[queue];
    if (debounce) {
      const key = options.singletonKey ?? debounceKey(queue, data);
      return this.#boss.sendDebounced(queue, data as object, send, debounce, key);
    }
    if (options.singletonKey) send.singletonKey = options.singletonKey;
    return this.#boss.send(queue, data as object, send);
  }
}
