/** Known issues, author FAQ and co-authors of a mod (PLAN §7.13 T1-14, T1-12; migrations 2150-2152). */
import { index, integer, pgTable, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

export const KNOWN_ISSUE_STATUSES = ['open', 'investigating', 'fixed'] as const;
export type KnownIssueStatus = (typeof KNOWN_ISSUE_STATUSES)[number];

export const modKnownIssue = pgTable(
  'ModKnownIssue',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    title: text('title').notNull(),
    body: text('body').notNull().default(''),
    status: text('status').$type<KnownIssueStatus>().notNull().default('open'),
    affectedVersions: text('affectedVersions'),
    fixedInVersion: text('fixedInVersion'),
    position: integer('position').notNull().default(0),
    createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    resolvedAt: tstz('resolvedAt'),
  },
  (t) => [index('ModKnownIssue_modId_position_idx').on(t.modId, t.position)],
);

export type ModKnownIssue = typeof modKnownIssue.$inferSelect;
export type NewModKnownIssue = typeof modKnownIssue.$inferInsert;

export const modFaqEntry = pgTable(
  'ModFaqEntry',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
    position: integer('position').notNull().default(0),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [index('ModFaqEntry_modId_position_idx').on(t.modId, t.position)],
);

export type ModFaqEntry = typeof modFaqEntry.$inferSelect;
export type NewModFaqEntry = typeof modFaqEntry.$inferInsert;

export const COAUTHOR_STATUSES = ['pending', 'accepted'] as const;
export type CoAuthorStatus = (typeof COAUTHOR_STATUSES)[number];

export const modCoAuthor = pgTable(
  'ModCoAuthor',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    invitedById: integer('invitedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    status: text('status').$type<CoAuthorStatus>().notNull().default('pending'),
    invitedAt: tstz('invitedAt').notNull().defaultNow(),
    respondedAt: tstz('respondedAt'),
  },
  (t) => [
    uniqueIndex('ModCoAuthor_modId_userId_key').on(t.modId, t.userId),
    index('ModCoAuthor_userId_status_idx').on(t.userId, t.status),
  ],
);

export type ModCoAuthor = typeof modCoAuthor.$inferSelect;
export type NewModCoAuthor = typeof modCoAuthor.$inferInsert;
