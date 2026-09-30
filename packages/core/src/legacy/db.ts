/**
 * Small helpers shared by the legacy read services: raw SQL through Drizzle (`sql` templates, so
 * every value is a bound parameter) and the v2 visibility rules of the legacy surface
 * (PLAN §5.5 "Desviaciones intencionales", §6.8).
 */
import { type Executor, parseUtcTimestamp } from '@sotf/db';
import { type SQL, sql } from 'drizzle-orm';

/** Runs a query and returns its rows. */
export async function rows<T>(db: Executor, query: SQL): Promise<T[]> {
  const result = await db.execute(query);
  return result.rows as T[];
}

/**
 * A `timestamp(3)` value as a UTC `Date`. Drizzle's raw `execute` hands timestamps over as text
 * (`2026-04-05 18:33:04.942`), which are UTC wall-clock values (Prisma).
 */
export function asDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === 'string') return parseUtcTimestamp(value);
  throw new TypeError(`expected a timestamp, got ${typeof value}`);
}

/** Converts the named columns of every row to `Date`s (see {@link asDate}). */
export function withDates<T>(found: T[], keys: readonly (keyof T)[]): T[] {
  for (const row of found) {
    for (const key of keys) (row as Record<keyof T, unknown>)[key] = asDate(row[key]);
  }
  return found;
}

/** First row or null. */
export async function firstRow<T>(db: Executor, query: SQL): Promise<T | null> {
  const [row] = await rows<T>(db, query);
  return row ?? null;
}

/**
 * The latest version of mod `m` passed the automatic checks: the condition under which a `pending`
 * mod is public by URL and listed by the legacy `approved=false` (PLAN §6.8).
 */
export const CHECKS_PASSED = sql`EXISTS (
  SELECT 1 FROM "ModVersion" lv
   WHERE lv."modId" = m."id" AND lv."isLatest" AND lv."checksStatus" = 'passed'
)`;

/** Detail, slug, find and check: everything except `rejected` and `removed` (deviation 4). */
export const DETAIL_VISIBLE = sql`m."status" NOT IN ('rejected', 'removed')`;

/** Versions the legacy surface exposes: never the ones under review or rejected. */
export const VERSION_VISIBLE = sql`v."status" NOT IN ('pending', 'rejected')`;

/**
 * `approved` of `GET /api/mods` (deviations 1–3): `true` → published; `false` → pending with
 * checks passed; absent → published, archived, unlisted and pending with checks passed.
 */
export function approvedCondition(approved: boolean | null): SQL {
  if (approved === true) return sql`m."status" = 'published'`;
  if (approved === false) return sql`(m."status" = 'pending' AND ${CHECKS_PASSED})`;
  return sql`(m."status" IN ('published', 'archived', 'unlisted') OR (m."status" = 'pending' AND ${CHECKS_PASSED}))`;
}

/** A JS array bound as **one** parameter (Drizzle expands bare arrays into `($1, $2, …)`). */
export function arrayParam(values: readonly (string | number)[]): SQL {
  return sql`${sql.param(values)}`;
}

/** Escapes `%`, `_` and `\` for a `LIKE` pattern (Prisma's `contains` matches literally). */
export function likeContains(value: string): string {
  return `%${value.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
}
