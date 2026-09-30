/**
 * Who still calls the legacy API (PLAN §5.5 Tier 2, §10.3 "Logs"): User-Agent and Origin per route,
 * aggregated per UTC day in `"AnalyticsEvent"(kind='legacy_call')` and kept 90 days by the analytics
 * retention. The API records every legacy request in memory and flushes the counters periodically
 * (and on shutdown); each flush adds to the day's row of `(route, ua, origin)` or creates it.
 *
 * Row shape: `path` = route pattern (`/api/mods/:mod_id`), `ts` = start of the UTC day,
 * `props` = `{ day, method, status, ua, origin, count }` where `status` is the status class
 * (`2xx`, `3xx`, `4xx`, `5xx`). No IP, no query string, no identifiers.
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { type Clock, systemClock, utcDay } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';

export const LEGACY_CALL_KIND = 'legacy_call';

/** Values longer than this are cut (User-Agents can be arbitrarily long). */
export const LEGACY_USAGE_MAX_VALUE = 200;
/** Distinct keys kept between flushes; the rest are folded into `(other)`. */
export const LEGACY_USAGE_MAX_KEYS = 5_000;

export interface LegacyCall {
  /** Route pattern, never the raw URL. */
  route: string;
  method: string;
  status: number;
  userAgent: string | undefined;
  origin: string | undefined;
}

export interface LegacyUsageEntry {
  day: string;
  route: string;
  method: string;
  status: string;
  ua: string;
  origin: string;
  count: number;
}

/** Control characters (C0 and DEL) become spaces. */
function withoutControls(value: string): string {
  let out = '';
  for (const char of value) {
    const code = char.charCodeAt(0);
    out += code < 0x20 || code === 0x7f ? ' ' : char;
  }
  return out;
}

function clean(value: string | undefined): string {
  const trimmed = withoutControls(value ?? '').trim();
  return trimmed.length > LEGACY_USAGE_MAX_VALUE ? trimmed.slice(0, LEGACY_USAGE_MAX_VALUE) : trimmed;
}

function statusClass(status: number): string {
  return `${Math.min(5, Math.max(1, Math.floor(status / 100)))}xx`;
}

export class LegacyUsageRecorder {
  readonly #clock: Clock;
  readonly #entries = new Map<string, LegacyUsageEntry>();
  #flushing: Promise<number> | null = null;

  constructor(options: { clock?: Clock } = {}) {
    this.#clock = options.clock ?? systemClock;
  }

  /** Distinct keys waiting for the next flush. */
  get size(): number {
    return this.#entries.size;
  }

  record(call: LegacyCall): void {
    const day = utcDay(this.#clock.now());
    let entry: LegacyUsageEntry = {
      day,
      route: clean(call.route) || '(unknown)',
      method: call.method.toUpperCase(),
      status: statusClass(call.status),
      ua: clean(call.userAgent),
      origin: clean(call.origin),
      count: 0,
    };
    let key = JSON.stringify([entry.day, entry.route, entry.method, entry.status, entry.ua, entry.origin]);
    if (!this.#entries.has(key) && this.#entries.size >= LEGACY_USAGE_MAX_KEYS) {
      entry = { ...entry, ua: '(other)', origin: '(other)' };
      key = JSON.stringify([entry.day, entry.route, entry.method, entry.status, entry.ua, entry.origin]);
    }
    const existing = this.#entries.get(key);
    if (existing) existing.count += 1;
    else this.#entries.set(key, { ...entry, count: 1 });
  }

  /** Takes the pending counters (they are gone from the recorder). */
  drain(): LegacyUsageEntry[] {
    const entries = [...this.#entries.values()];
    this.#entries.clear();
    return entries;
  }

  /**
   * Writes the pending counters. On a database error the counters are put back so the next flush
   * retries them. Returns the number of entries written. Concurrent calls share one flush.
   */
  flush(db: Executor, log?: Logger): Promise<number> {
    if (this.#flushing) return this.#flushing;
    const entries = this.drain();
    if (entries.length === 0) return Promise.resolve(0);
    this.#flushing = writeLegacyUsage(db, entries)
      .then(() => entries.length)
      .catch((error: unknown) => {
        for (const entry of entries) {
          const key = JSON.stringify([entry.day, entry.route, entry.method, entry.status, entry.ua, entry.origin]);
          const existing = this.#entries.get(key);
          if (existing) existing.count += entry.count;
          else this.#entries.set(key, entry);
        }
        log?.warn({ err: error, entries: entries.length }, 'legacy usage flush failed; will retry');
        return 0;
      })
      .finally(() => {
        this.#flushing = null;
      });
    return this.#flushing;
  }
}

/**
 * Adds the counters to the day's `legacy_call` rows (one per route/method/status/ua/origin),
 * creating the missing ones. Two API processes flushing the same new key at the same time may
 * create two rows for it; later flushes add to the oldest one only and readers sum `props.count`,
 * so the totals stay right.
 */
export async function writeLegacyUsage(db: Executor, entries: readonly LegacyUsageEntry[]): Promise<void> {
  if (entries.length === 0) return;
  const payload = JSON.stringify(entries);
  await db.execute(sql`
    WITH input AS (
      SELECT x."day"::date AS "day", x."route", x."method", x."status", x."ua", x."origin", x."count"
        FROM jsonb_to_recordset(${payload}::jsonb)
          AS x("day" text, "route" text, "method" text, "status" text, "ua" text, "origin" text, "count" int)
    ), target AS (
      SELECT DISTINCT ON (i."day", i."route", i."method", i."status", i."ua", i."origin")
             e."id", i."day", i."route", i."method", i."status", i."ua", i."origin", i."count"
        FROM input i
        JOIN "AnalyticsEvent" e
          ON e."kind" = ${LEGACY_CALL_KIND}
         AND e."ts" = (i."day"::timestamp AT TIME ZONE 'UTC')
         AND e."path" = i."route"
         AND e."props"->>'method' = i."method"
         AND e."props"->>'status' = i."status"
         AND e."props"->>'ua' = i."ua"
         AND e."props"->>'origin' = i."origin"
       ORDER BY i."day", i."route", i."method", i."status", i."ua", i."origin", e."id"
    ), updated AS (
      UPDATE "AnalyticsEvent" e
         SET "props" = jsonb_set(e."props", '{count}', to_jsonb(coalesce((e."props"->>'count')::int, 0) + t."count"))
        FROM target t
       WHERE e."id" = t."id"
      RETURNING t."day", t."route", t."method", t."status", t."ua", t."origin"
    )
    INSERT INTO "AnalyticsEvent" ("ts", "kind", "path", "props")
    SELECT (i."day"::timestamp AT TIME ZONE 'UTC'), ${LEGACY_CALL_KIND}, i."route",
           jsonb_build_object('day', to_char(i."day", 'YYYY-MM-DD'), 'method', i."method", 'status', i."status",
                              'ua', i."ua", 'origin', i."origin", 'count', i."count")
      FROM input i
     WHERE NOT EXISTS (
       SELECT 1 FROM updated u
        WHERE u."day" = i."day" AND u."route" = i."route" AND u."method" = i."method"
          AND u."status" = i."status" AND u."ua" = i."ua" AND u."origin" = i."origin")`);
}
