/** URL history, tombstones and redirects (PLAN §4.6, §6.4). */
import { bigint, integer, pgTable, smallint, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

export const SLUG_HISTORY_REASONS = ['legacy', 'canonicalized', 'renamed', 'owner_changed'] as const;
export type SlugHistoryReason = (typeof SLUG_HISTORY_REASONS)[number];

export const modSlugHistory = pgTable('ModSlugHistory', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  modId: integer('modId')
    .notNull()
    .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  userSlug: text('userSlug').notNull(),
  slug: text('slug').notNull(),
  reason: text('reason').$type<SlugHistoryReason>().notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type ModSlugHistory = typeof modSlugHistory.$inferSelect;
export type NewModSlugHistory = typeof modSlugHistory.$inferInsert;

export const userSlugHistory = pgTable('UserSlugHistory', {
  slug: text('slug').primaryKey(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type UserSlugHistory = typeof userSlugHistory.$inferSelect;

export const tombstone = pgTable('Tombstone', {
  path: text('path').primaryKey(),
  /** 404 or 410. */
  status: smallint('status').notNull().default(410),
  reason: text('reason'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Tombstone = typeof tombstone.$inferSelect;

export const redirect = pgTable('Redirect', {
  fromPath: text('fromPath').primaryKey(),
  toPath: text('toPath').notNull(),
  /** 301, 302, 307 or 308. */
  status: smallint('status').notNull().default(301),
  hits: bigint('hits', { mode: 'number' }).notNull().default(0),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Redirect = typeof redirect.$inferSelect;
