/** Mod request board (T2, migration 2171): requests, votes and comments. */
import { index, integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

export const MOD_REQUEST_STATUSES = ['open', 'adopted', 'fulfilled', 'closed'] as const;
export type ModRequestStatus = (typeof MOD_REQUEST_STATUSES)[number];

export const modRequest = pgTable(
  'ModRequest',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    authorId: integer('authorId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    title: text('title').notNull(),
    bodyMd: text('bodyMd').notNull().default(''),
    bodyHtml: text('bodyHtml'),
    status: text('status').$type<ModRequestStatus>().notNull().default('open'),
    hiddenAt: tstz('hiddenAt'),
    hiddenReason: text('hiddenReason'),
    deletedAt: tstz('deletedAt'),
    voteCount: integer('voteCount').notNull().default(0),
    commentCount: integer('commentCount').notNull().default(0),
    adoptedById: integer('adoptedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    adoptedAt: tstz('adoptedAt'),
    fulfilledModId: integer('fulfilledModId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    fulfilledById: integer('fulfilledById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    fulfilledAt: tstz('fulfilledAt'),
    closedAt: tstz('closedAt'),
    editedAt: tstz('editedAt'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    index('ModRequest_authorId_idx').on(t.authorId),
    index('ModRequest_adoptedById_idx').on(t.adoptedById),
    index('ModRequest_fulfilledModId_idx').on(t.fulfilledModId),
  ],
);

export type ModRequest = typeof modRequest.$inferSelect;
export type NewModRequest = typeof modRequest.$inferInsert;

export const modRequestVote = pgTable(
  'ModRequestVote',
  {
    requestId: integer('requestId')
      .notNull()
      .references(() => modRequest.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ name: 'ModRequestVote_pkey', columns: [t.requestId, t.userId] }),
    index('ModRequestVote_userId_idx').on(t.userId),
  ],
);

export type ModRequestVote = typeof modRequestVote.$inferSelect;

export const MOD_REQUEST_COMMENT_STATUSES = ['visible', 'hidden', 'deleted'] as const;
export type ModRequestCommentStatus = (typeof MOD_REQUEST_COMMENT_STATUSES)[number];

export const modRequestComment = pgTable(
  'ModRequestComment',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    requestId: integer('requestId')
      .notNull()
      .references(() => modRequest.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    authorId: integer('authorId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    bodyMd: text('bodyMd').notNull(),
    bodyHtml: text('bodyHtml').notNull(),
    status: text('status').$type<ModRequestCommentStatus>().notNull().default('visible'),
    editedAt: tstz('editedAt'),
    deletedAt: tstz('deletedAt'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [
    index('ModRequestComment_requestId_idx').on(t.requestId, t.id),
    index('ModRequestComment_authorId_idx').on(t.authorId),
  ],
);

export type ModRequestComment = typeof modRequestComment.$inferSelect;
