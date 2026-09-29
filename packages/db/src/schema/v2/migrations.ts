/** "_v2_migrations": the runner's ledger (created by the runner itself, see src/migrate/runner.ts). */
import { sql } from 'drizzle-orm';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';

export const v2Migrations = pgTable('_v2_migrations', {
  name: text('name').primaryKey(),
  /** sha256 of the file (CRLF normalized). */
  checksum: text('checksum').notNull(),
  appliedAt: tstz('appliedAt').notNull().defaultNow(),
  durationMs: integer('durationMs').notNull(),
  appliedBy: text('appliedBy').notNull().default(sql`current_user`),
});

export type V2Migration = typeof v2Migrations.$inferSelect;
