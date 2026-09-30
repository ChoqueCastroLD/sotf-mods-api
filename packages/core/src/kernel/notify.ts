/**
 * Cross-process notifications over Postgres `NOTIFY` (PLAN §2.7 step 3, §2.9 "Tiempo real").
 *
 * - `events` channel: realtime messages for the SSE hub (`{channel, event, id, data}`), published by
 *   core services (e.g. notifications, WP-43) inside their transaction: `NOTIFY` is delivered on
 *   commit, so a rolled-back write never reaches a browser.
 * - `cache` channel: tags (or `*`) to evict from the in-process LRUs of the API.
 */
import {
  PG_CACHE_CHANNEL,
  PG_EVENTS_CHANNEL,
  SSE_EVENTS,
  type SseChannel,
  type SseEventName,
} from '@sotf/contracts/events';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';

/** Postgres rejects NOTIFY payloads of 8000 bytes or more. */
export const MAX_NOTIFY_BYTES = 7900;

export interface RealtimeMessage<E extends SseEventName = SseEventName> {
  channel: SseChannel;
  event: E;
  /** SSE `id:` (enables `Last-Event-ID`); e.g. the notification id. */
  id: string;
  data: z.input<(typeof SSE_EVENTS)[E]>;
}

const SSE_CHANNEL = /^(?:user:[1-9]\d{0,15}|moderation|mod:[1-9]\d{0,15}|kit:[1-9]\d{0,15})$/;

export function isSseChannel(value: string): value is SseChannel {
  return SSE_CHANNEL.test(value);
}

/** Validates and encodes a realtime message (throws when invalid or too large). */
export function encodeRealtimeMessage(message: RealtimeMessage): string {
  if (!isSseChannel(message.channel)) throw new TypeError(`invalid SSE channel "${message.channel}"`);
  const schema = SSE_EVENTS[message.event];
  if (!schema) throw new TypeError(`unknown SSE event "${message.event}"`);
  const data = schema.parse(message.data);
  const text = JSON.stringify({ channel: message.channel, event: message.event, id: String(message.id), data });
  if (Buffer.byteLength(text, 'utf8') > MAX_NOTIFY_BYTES) throw new RangeError('realtime message too large');
  return text;
}

/** Parses a payload received on the `events` channel; null when malformed. */
export function decodeRealtimeMessage(payload: string): RealtimeMessage | null {
  try {
    const value = JSON.parse(payload) as Partial<RealtimeMessage>;
    if (typeof value.channel !== 'string' || !isSseChannel(value.channel)) return null;
    if (typeof value.event !== 'string' || !(value.event in SSE_EVENTS)) return null;
    if (typeof value.id !== 'string') return null;
    const parsed = SSE_EVENTS[value.event as SseEventName].safeParse(value.data);
    if (!parsed.success) return null;
    return { channel: value.channel, event: value.event as SseEventName, id: value.id, data: parsed.data };
  } catch {
    return null;
  }
}

/** Publishes a realtime message (delivered when `exec`'s transaction commits). */
export async function publishRealtime(exec: Executor, message: RealtimeMessage): Promise<void> {
  await exec.execute(sql`SELECT pg_notify(${PG_EVENTS_CHANNEL}, ${encodeRealtimeMessage(message)})`);
}

/** Asks every API process to evict the tags (`'*'` clears everything) from its LRUs. */
export async function publishCacheInvalidation(exec: Executor, tags: readonly string[] | '*'): Promise<void> {
  const payload = tags === '*' ? '*' : JSON.stringify({ tags: [...tags] });
  if (Buffer.byteLength(payload, 'utf8') > MAX_NOTIFY_BYTES) {
    await exec.execute(sql`SELECT pg_notify(${PG_CACHE_CHANNEL}, '*')`);
    return;
  }
  await exec.execute(sql`SELECT pg_notify(${PG_CACHE_CHANNEL}, ${payload})`);
}

/** Parses a `cache` channel payload: a tag list, `'*'`, or null when malformed. */
export function decodeCacheInvalidation(payload: string): string[] | '*' | null {
  if (payload === '*') return '*';
  try {
    const value = JSON.parse(payload) as { tags?: unknown };
    if (!Array.isArray(value.tags) || !value.tags.every((t) => typeof t === 'string')) return null;
    return value.tags as string[];
  } catch {
    return null;
  }
}
