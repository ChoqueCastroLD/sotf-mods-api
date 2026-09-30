/**
 * Response status counters of the API (PLAN §10.3: «tasa de 404, 410 y 5xx», alert «5xx > 1 % en
 * 5 min»). Every process counts its responses per UTC minute in memory and flushes them every
 * minute (and on shutdown) as one `"AnalyticsEvent"(kind='http_status')` row per minute:
 * `ts` = start of the minute, `props` = `{ total, s404, s410, s4xx, s5xx }`. Several processes
 * write several rows for the same minute; readers sum them. Nothing identifying is recorded.
 */
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { type Clock, systemClock } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';

export const HTTP_STATUS_KIND = 'http_status';

export interface StatusCounts {
  total: number;
  s404: number;
  s410: number;
  /** Every 4xx (404 and 410 included). */
  s4xx: number;
  s5xx: number;
}

const empty = (): StatusCounts => ({ total: 0, s404: 0, s410: 0, s4xx: 0, s5xx: 0 });

function minuteOf(date: Date): string {
  const ms = date.getTime();
  return new Date(ms - (ms % 60_000)).toISOString();
}

export class HttpStatusRecorder {
  readonly #clock: Clock;
  readonly #minutes = new Map<string, StatusCounts>();
  #flushing: Promise<number> | null = null;

  constructor(options: { clock?: Clock } = {}) {
    this.#clock = options.clock ?? systemClock;
  }

  record(status: number): void {
    const minute = minuteOf(this.#clock.now());
    let counts = this.#minutes.get(minute);
    if (!counts) {
      counts = empty();
      this.#minutes.set(minute, counts);
    }
    counts.total += 1;
    if (status >= 500) counts.s5xx += 1;
    else if (status >= 400) {
      counts.s4xx += 1;
      if (status === 404) counts.s404 += 1;
      if (status === 410) counts.s410 += 1;
    }
  }

  /** Takes the pending minutes (they are gone from the recorder). */
  drain(): Array<{ minute: string; counts: StatusCounts }> {
    const out = [...this.#minutes.entries()].map(([minute, counts]) => ({ minute, counts }));
    this.#minutes.clear();
    return out;
  }

  /** Writes the pending minutes; on a database error they are kept for the next flush. */
  flush(db: Executor, log?: Logger): Promise<number> {
    if (this.#flushing) return this.#flushing;
    const entries = this.drain();
    if (entries.length === 0) return Promise.resolve(0);
    this.#flushing = writeHttpStatus(db, entries)
      .then(() => entries.length)
      .catch((error: unknown) => {
        for (const { minute, counts } of entries) {
          const existing = this.#minutes.get(minute);
          if (!existing) this.#minutes.set(minute, counts);
          else for (const k of Object.keys(counts) as Array<keyof StatusCounts>) existing[k] += counts[k];
        }
        log?.warn({ err: error, minutes: entries.length }, 'http status flush failed; will retry');
        return 0;
      })
      .finally(() => {
        this.#flushing = null;
      });
    return this.#flushing;
  }
}

export async function writeHttpStatus(
  db: Executor,
  entries: ReadonlyArray<{ minute: string; counts: StatusCounts }>,
): Promise<void> {
  if (entries.length === 0) return;
  const payload = JSON.stringify(entries.map((e) => ({ minute: e.minute, ...e.counts })));
  await db.execute(sql`
    INSERT INTO "AnalyticsEvent" ("ts", "kind", "props")
    SELECT x."minute"::timestamptz, ${HTTP_STATUS_KIND},
           jsonb_build_object('total', x."total", 's404', x."s404", 's410', x."s410", 's4xx', x."s4xx", 's5xx', x."s5xx")
      FROM jsonb_to_recordset(${payload}::jsonb)
        AS x("minute" text, "total" int, "s404" int, "s410" int, "s4xx" int, "s5xx" int)`);
}

/** Summed counters of the minutes in `[since, until)`. */
export async function httpStatusSince(db: Executor, since: Date, until?: Date): Promise<StatusCounts> {
  const res = await db.execute<Record<keyof StatusCounts, number | string | null>>(sql`
    SELECT coalesce(sum(("props"->>'total')::int), 0) AS "total",
           coalesce(sum(("props"->>'s404')::int), 0) AS "s404",
           coalesce(sum(("props"->>'s410')::int), 0) AS "s410",
           coalesce(sum(("props"->>'s4xx')::int), 0) AS "s4xx",
           coalesce(sum(("props"->>'s5xx')::int), 0) AS "s5xx"
      FROM "AnalyticsEvent"
     WHERE "kind" = ${HTTP_STATUS_KIND} AND "ts" >= ${since.toISOString()}::timestamptz
       ${until ? sql`AND "ts" < ${until.toISOString()}::timestamptz` : sql``}`);
  const row = res.rows[0];
  const n = (v: unknown) => Number(v ?? 0) || 0;
  return { total: n(row?.total), s404: n(row?.s404), s410: n(row?.s410), s4xx: n(row?.s4xx), s5xx: n(row?.s5xx) };
}
