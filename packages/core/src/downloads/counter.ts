/**
 * Download counting buffer (PLAN §2.8 "Conteo"): the redirect never waits for the database.
 *
 * Each counted download is pushed to an in-memory buffer that is flushed every 2 s (and on
 * shutdown) in **one transaction**:
 *
 *   1. `DownloadUnique(modVersionId, day, ipHash)` `ON CONFLICT DO NOTHING` decides which events are
 *      the first of their IP for that version and UTC day (`isUnique`);
 *   2. one multi-row `INSERT` into `"ModDownload"` (legacy-compatible rows: `ip` = ipHash, `userAgent`
 *      = the UA or `''`), with `ipHash`, `country`, `source`, `userId` and `isUnique`;
 *   3. upsert of `ModVersionDownloadDaily` (downloads and unique downloads per version, day, channel);
 *   4. `ModVersion.downloadsCount/uniqueDownloadsCount += n` and `Mod.downloads += n`, with raw SQL
 *      so the legacy `updatedAt` never moves (PLAN §6.8).
 *
 * A failed flush keeps the events and retries on the next tick (bounded by `maxRetained`; beyond
 * it the oldest events are dropped and logged). Users who turned their download history off are
 * stored without `userId`.
 */
import type { Database, DownloadSource } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { utcDay } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';

export interface DownloadEvent {
  modVersionId: number;
  modId: number;
  at: Date;
  ipHash: string;
  userAgent: string;
  country: string | null;
  source: DownloadSource;
  userId: number | null;
}

export interface DownloadCounterOptions {
  log: Logger;
  /** Flush period (default 2 000 ms). */
  flushIntervalMs?: number;
  /** Flush right away when this many events are buffered (default 2 000). */
  maxBatch?: number;
  /** Events kept while the database is failing (default 100 000). */
  maxRetained?: number;
  /** Called after each committed flush (errors are logged and ignored). */
  onFlushed?: (report: FlushReport) => Promise<void> | void;
}

export interface FlushResult {
  inserted: number;
  unique: number;
}

/** What a committed flush changed: drives live notices and follow-up signals (never throws into the flush). */
export interface FlushReport {
  /** Mod id → new lifetime download total after this flush. */
  mods: ReadonlyMap<number, number>;
  /** Signed-in users (history on) that downloaded something in this flush. */
  userIds: readonly number[];
}

type Row = Record<string, unknown>;

export class DownloadCounter {
  readonly #db: Database;
  readonly #log: Logger;
  readonly #intervalMs: number;
  readonly #maxBatch: number;
  readonly #maxRetained: number;
  readonly #onFlushed: DownloadCounterOptions['onFlushed'];
  #buffer: DownloadEvent[] = [];
  #timer: NodeJS.Timeout | null = null;
  #flushing: Promise<FlushResult & { report: FlushReport }> | null = null;
  #closed = false;
  /** Shutdown started: every new event is flushed right away (the periodic timer is gone). */
  #closing = false;
  /** Totals since start (metrics and tests). */
  readonly stats = { recorded: 0, flushed: 0, dropped: 0, failedFlushes: 0 };

  constructor(db: Database, options: DownloadCounterOptions) {
    this.#db = db;
    this.#log = options.log;
    this.#intervalMs = options.flushIntervalMs ?? 2_000;
    this.#maxBatch = options.maxBatch ?? 2_000;
    this.#maxRetained = options.maxRetained ?? 100_000;
    this.#onFlushed = options.onFlushed;
  }

  get pending(): number {
    return this.#buffer.length;
  }

  /** Starts the periodic flush (unref'd: it never keeps the process alive). */
  start(): void {
    if (this.#timer || this.#closed) return;
    this.#timer = setInterval(() => {
      void this.flush().catch(() => {});
    }, this.#intervalMs);
    this.#timer.unref();
  }

  /** Buffers one counted download. Never throws, never waits. */
  record(event: DownloadEvent): void {
    this.#buffer.push(event);
    this.stats.recorded += 1;
    if (this.#buffer.length > this.#maxRetained) {
      const excess = this.#buffer.length - this.#maxRetained;
      this.#buffer.splice(0, excess);
      this.stats.dropped += excess;
      this.#log.error({ dropped: excess }, 'download buffer full: oldest events dropped');
    }
    if (this.#closing || (this.#buffer.length >= this.#maxBatch && !this.#flushing)) {
      void this.flush().catch(() => {});
    }
  }

  /**
   * First step of a graceful shutdown (Fastify `preClose`, while the pool is open): stops the
   * timer and flushes; events recorded by requests still draining are flushed immediately.
   */
  async beginShutdown(): Promise<number> {
    this.#closing = true;
    if (this.#timer) clearInterval(this.#timer);
    this.#timer = null;
    const { inserted } = await this.flush();
    this.#log.info({ events: inserted }, 'download buffer flushed at shutdown');
    return inserted;
  }

  /** Writes every buffered event. Concurrent calls share the running flush, then flush the rest. */
  async flush(): Promise<FlushResult> {
    const total: FlushResult = { inserted: 0, unique: 0 };
    // Loop so events recorded while a flush runs are written before returning.
    for (;;) {
      if (this.#flushing) {
        await this.#flushing.catch(() => undefined);
        continue;
      }
      if (this.#buffer.length === 0) return total;
      const batch = this.#buffer.splice(0, this.#maxBatch);
      this.#flushing = this.#write(batch);
      let done: FlushResult & { report: FlushReport };
      try {
        done = await this.#flushing;
      } catch (error) {
        // Put the batch back in front and give up for this round.
        this.#buffer.unshift(...batch);
        this.stats.failedFlushes += 1;
        this.#log.error({ err: error, events: batch.length }, 'download flush failed; will retry');
        throw error;
      } finally {
        // Released as soon as the write settled, before the follow-up below: a concurrent caller
        // (the periodic timer, the shutdown) waits in the branch above for this promise and
        // `continue`s while it is still set. Keeping it set during the follow-up's database work made
        // that caller spin on already-resolved promises, starving the event loop so the follow-up's
        // I/O could never finish (the process sat at 100 % CPU, serving nothing).
        this.#flushing = null;
      }
      if (this.#onFlushed) {
        try {
          await this.#onFlushed(done.report);
        } catch (error) {
          this.#log.warn({ err: error }, 'download flush follow-up failed');
        }
      }
      total.inserted += done.inserted;
      total.unique += done.unique;
      this.stats.flushed += done.inserted;
    }
  }

  /** Stops the timer and flushes what is left (last step of a graceful shutdown). */
  async close(): Promise<void> {
    this.#closed = true;
    this.#closing = true;
    if (this.#timer) clearInterval(this.#timer);
    this.#timer = null;
    let written = 0;
    for (let attempt = 0; attempt < 3 && (this.#buffer.length > 0 || this.#flushing); attempt += 1) {
      try {
        written += (await this.flush()).inserted;
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
      }
    }
    if (this.#buffer.length > 0) {
      this.#log.error({ lost: this.#buffer.length }, 'download events lost at shutdown');
    } else if (written > 0) {
      this.#log.info({ events: written }, 'download buffer flushed at close');
    }
  }

  async #write(batch: DownloadEvent[]): Promise<FlushResult & { report: FlushReport }> {
    return this.#db.transaction(async (tx) => {
      // Users who disabled their download history: store the row without userId.
      const userIds = [...new Set(batch.map((e) => e.userId).filter((id): id is number => id !== null))];
      let optedOut = new Set<number>();
      if (userIds.length > 0) {
        const res = await tx.execute<Row>(sql`
          SELECT "id" FROM "User"
           WHERE "id" = ANY(${sql.param(userIds)}::int[]) AND ("settings"->>'downloadHistory') = 'false'`);
        optedOut = new Set(res.rows.map((r) => Number(r.id)));
      }

      // 1. Uniqueness per (version, UTC day, ipHash).
      const days = batch.map((e) => utcDay(e.at));
      const keyOf = (versionId: number, day: string, hash: string) => `${versionId}|${day}|${hash}`;
      const candidates = new Map<string, { v: number; d: string; h: string }>();
      batch.forEach((e, i) => {
        const day = days[i] as string;
        candidates.set(keyOf(e.modVersionId, day, e.ipHash), { v: e.modVersionId, d: day, h: e.ipHash });
      });
      const keys = [...candidates.values()];
      const inserted = await tx.execute<Row>(sql`
        INSERT INTO "DownloadUnique" ("modVersionId", "day", "ipHash")
        SELECT * FROM unnest(${sql.param(keys.map((k) => k.v))}::int[],
                             ${sql.param(keys.map((k) => k.d))}::date[],
                             ${sql.param(keys.map((k) => k.h))}::text[])
        ON CONFLICT DO NOTHING
        RETURNING "modVersionId", "day"::text AS "day", "ipHash"`);
      const fresh = new Set(inserted.rows.map((r) => keyOf(Number(r.modVersionId), String(r.day), String(r.ipHash))));
      const isUnique = batch.map((e, i) => {
        const key = keyOf(e.modVersionId, days[i] as string, e.ipHash);
        if (!fresh.has(key)) return false;
        fresh.delete(key); // only the first event of the key is unique
        return true;
      });

      // 2. Legacy-compatible rows.
      await tx.execute(sql`
        INSERT INTO "ModDownload"
          ("ip", "userAgent", "createdAt", "updatedAt", "modVersionId", "ipHash", "country", "source", "userId", "isUnique")
        SELECT e.hash, e.ua, e.at, e.at, e.version, e.hash, e.country, e.source, e.user_id, e.is_unique
          FROM unnest(${sql.param(batch.map((e) => e.ipHash))}::text[],
                      ${sql.param(batch.map((e) => e.userAgent))}::text[],
                      ${sql.param(batch.map((e) => e.at.toISOString()))}::timestamptz[],
                      ${sql.param(batch.map((e) => e.modVersionId))}::int[],
                      ${sql.param(batch.map((e) => e.country))}::text[],
                      ${sql.param(batch.map((e) => e.source))}::text[],
                      ${sql.param(batch.map((e) => (e.userId !== null && !optedOut.has(e.userId) ? e.userId : null)))}::int[],
                      ${sql.param(isUnique)}::bool[])
            AS e(hash, ua, at, version, country, source, user_id, is_unique)`);

      // 3. Daily aggregates per version and channel.
      const daily = new Map<string, { v: number; d: string; c: string; n: number; u: number }>();
      const perVersion = new Map<number, { n: number; u: number }>();
      const perMod = new Map<number, number>();
      batch.forEach((e, i) => {
        const day = days[i] as string;
        const key = `${e.modVersionId}|${day}|${e.source}`;
        const agg = daily.get(key) ?? { v: e.modVersionId, d: day, c: e.source, n: 0, u: 0 };
        agg.n += 1;
        agg.u += isUnique[i] ? 1 : 0;
        daily.set(key, agg);
        const pv = perVersion.get(e.modVersionId) ?? { n: 0, u: 0 };
        pv.n += 1;
        pv.u += isUnique[i] ? 1 : 0;
        perVersion.set(e.modVersionId, pv);
        perMod.set(e.modId, (perMod.get(e.modId) ?? 0) + 1);
      });
      const aggs = [...daily.values()].sort((a, b) => a.v - b.v || (a.d < b.d ? -1 : 1));
      await tx.execute(sql`
        INSERT INTO "ModVersionDownloadDaily" AS d ("modVersionId", "day", "channel", "downloads", "uniqueDownloads")
        SELECT * FROM unnest(${sql.param(aggs.map((a) => a.v))}::int[],
                             ${sql.param(aggs.map((a) => a.d))}::date[],
                             ${sql.param(aggs.map((a) => a.c))}::text[],
                             ${sql.param(aggs.map((a) => a.n))}::int[],
                             ${sql.param(aggs.map((a) => a.u))}::int[])
        ON CONFLICT ("modVersionId", "day", "channel") DO UPDATE
          SET "downloads" = d."downloads" + EXCLUDED."downloads",
              "uniqueDownloads" = d."uniqueDownloads" + EXCLUDED."uniqueDownloads"`);

      // 4. Counters (ids in ascending order: concurrent flushes of several processes never deadlock).
      const versions = [...perVersion.entries()].sort(([a], [b]) => a - b);
      await tx.execute(sql`
        UPDATE "ModVersion" v
           SET "downloadsCount" = v."downloadsCount" + x.n,
               "uniqueDownloadsCount" = v."uniqueDownloadsCount" + x.u
          FROM unnest(${sql.param(versions.map(([id]) => id))}::int[],
                      ${sql.param(versions.map(([, c]) => c.n))}::int[],
                      ${sql.param(versions.map(([, c]) => c.u))}::int[]) AS x(id, n, u)
         WHERE v."id" = x.id`);
      const mods = [...perMod.entries()].sort(([a], [b]) => a - b);
      const totals = await tx.execute<Row>(sql`
        UPDATE "Mod" m
           SET "downloads" = m."downloads" + x.n
          FROM unnest(${sql.param(mods.map(([id]) => id))}::int[],
                      ${sql.param(mods.map(([, n]) => n))}::int[]) AS x(id, n)
         WHERE m."id" = x.id
        RETURNING m."id" AS "id", m."downloads" AS "downloads"`);
      const report: FlushReport = {
        mods: new Map(totals.rows.map((r) => [Number(r.id), Number(r.downloads)])),
        userIds: userIds.filter((id) => !optedOut.has(id)),
      };

      return { inserted: batch.length, unique: isUnique.filter(Boolean).length, report };
    });
  }
}
