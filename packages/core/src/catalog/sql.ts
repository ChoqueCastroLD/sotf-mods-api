/**
 * Raw read queries of the catalog. The public reads are a handful of hand-tuned SQL statements
 * (joins, lateral subqueries, `pg_trgm`); they run on the node-postgres pool behind the Drizzle
 * handle so `$1` parameters (arrays included) bind natively. Timestamps come back as UTC `Date`s
 * (the pool's type parser); cast `date` columns to `text` in SQL to keep them as `YYYY-MM-DD`.
 */
import type { Database } from '@sotf/db';
import type { Ctx } from '../kernel/context.ts';
import type { TaggedCache } from '../kernel/lru.ts';

interface Queryable {
  query(text: string, values?: unknown[]): Promise<{ rows: unknown[] }>;
}

function clientOf(db: Database): Queryable {
  const client = (db as unknown as { $client?: Queryable }).$client;
  if (!client || typeof client.query !== 'function') {
    throw new TypeError('catalog queries need a node-postgres Drizzle handle');
  }
  return client;
}

/** Runs a read query and returns its rows. */
export async function rows<T>(db: Database, text: string, values: readonly unknown[] = []): Promise<T[]> {
  const result = await clientOf(db).query(text, [...values]);
  return result.rows as T[];
}

/** First row or null. */
export async function row<T>(db: Database, text: string, values: readonly unknown[] = []): Promise<T | null> {
  const [first] = await rows<T>(db, text, values);
  return first ?? null;
}

/** `bigint`/`numeric` columns arrive as strings: converts them (null stays null). */
export function num(value: unknown): number {
  if (value === null || value === undefined) return 0;
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}

export function numOrNull(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

export interface CacheSpec {
  /** Cache name in the process registry. */
  name: string;
  max?: number;
  ttlMs: number;
}

/**
 * Returns a value through the process LRU (PLAN §2.7 layer 4) when the context has a cache
 * registry; loads directly otherwise (CLIs, unit tests). Concurrent loads of a key are shared.
 */
export function cached<V extends NonNullable<unknown>>(
  ctx: Ctx,
  spec: CacheSpec,
  key: string,
  load: () => Promise<{ value: V; tags: readonly string[] }>,
): Promise<V> {
  const cache: TaggedCache<V> | undefined = ctx.caches?.create<V>({
    name: spec.name,
    max: spec.max ?? 500,
    ttlMs: spec.ttlMs,
  });
  if (!cache) return load().then((r) => r.value);
  return cache.getOrLoad(key, load, spec.ttlMs);
}
