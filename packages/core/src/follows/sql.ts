/**
 * SQL helpers shared by the follows and kits services. Both run their reads and writes through the
 * Drizzle executor (a database or a transaction), so a service can read inside the transaction
 * that writes. Timestamps are passed as ISO strings cast to `timestamptz` (never `Date` params: a
 * `Date` bound to a legacy `timestamp(3)` column would lose its offset outside UTC processes).
 */
import type { Executor } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';

/** Rows of a query run on a database or a transaction. */
export async function query<T>(db: Executor, statement: SQL): Promise<T[]> {
  const result = await db.execute(statement);
  return result.rows as T[];
}

/** First row of a query, or null. */
export async function queryOne<T>(db: Executor, statement: SQL): Promise<T | null> {
  const [first] = await query<T>(db, statement);
  return first ?? null;
}

/**
 * A Postgres `int[]` literal (`'{1,2,3}'`) for `= ANY(…::int[])`: one bound parameter whatever
 * the length (Drizzle would expand a JS array into a parameter list). Only safe integers pass.
 */
export function intArray(ids: Iterable<number>): SQL {
  const clean = [...ids].filter((id) => Number.isSafeInteger(id));
  return sql`${`{${clean.join(',')}}`}::int[]`;
}

/** An instant as a `timestamptz` parameter. */
export function at(date: Date): SQL {
  return sql`${date.toISOString()}::timestamptz`;
}

/** SQLSTATE of an error (walking `cause`), e.g. `23505` for unique violations. */
export function sqlState(error: unknown): string | undefined {
  let current: unknown = error;
  for (let depth = 0; depth < 5 && current; depth += 1) {
    const code = (current as { code?: unknown }).code;
    if (typeof code === 'string') return code;
    current = (current as { cause?: unknown }).cause;
  }
  return undefined;
}

/** `bigint`/`numeric` values arrive as strings. */
export function toInt(value: unknown): number {
  if (value === null || value === undefined) return 0;
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : 0;
}

/** `timestamp`/`timestamptz` values as Dates (drivers may return strings for computed columns). */
export function toDate(value: unknown): Date | null {
  if (value === null || value === undefined) return null;
  if (value instanceof Date) return value;
  const date = new Date(String(value));
  return Number.isNaN(date.getTime()) ? null : date;
}
