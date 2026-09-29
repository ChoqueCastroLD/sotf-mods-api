/**
 * Column helpers shared by the Drizzle schema (not part of the generated barrel).
 *
 * - Legacy timestamps are `timestamp(3) without time zone` holding UTC wall-clock values (Prisma):
 *   `mode: 'date'` maps them to/from UTC `Date`s (defect 4 of `drizzle-kit pull`, research/04 §4.3).
 * - New tables use `timestamptz(3)` (PLAN §6.4).
 */
import { customType, timestamp } from 'drizzle-orm/pg-core';

/** Legacy-style `timestamp(3)` (UTC wall clock) as a `Date`. */
export const ts3 = (name: string) => timestamp(name, { precision: 3, mode: 'date' });

/** `timestamptz(3)` as a `Date`. */
export const tstz = (name: string) => timestamp(name, { precision: 3, withTimezone: true, mode: 'date' });

/** PostgreSQL `tsvector` (read-only in v2: only generated columns use it). */
export const tsvector = customType<{ data: string; driverData: string }>({
  dataType() {
    return 'tsvector';
  },
});
