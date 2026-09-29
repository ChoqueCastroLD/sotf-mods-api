/** "Comment" (legacy table + v2 columns of PLAN §6.3, §7.6) and the legacy "PendingMention" queue. */
import { type AnyPgColumn, boolean, index, integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import { mod } from './mod.ts';
import { modVersion } from './mod-version.ts';
import { user } from './user.ts';

export const COMMENT_STATUSES = ['visible', 'hidden', 'pending', 'deleted'] as const;
export type CommentStatus = (typeof COMMENT_STATUSES)[number];

export const comment = pgTable('Comment', {
  // Legacy columns.
  id: serial('id').primaryKey(),
  createdAt: ts3('createdAt').notNull().defaultNow(),
  updatedAt: ts3('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  /** Legacy text; v2 writes an HTML-escaped copy of the Markdown (the legacy renders innerHTML). */
  message: text('message').notNull(),
  imageUrl: text('imageUrl'),
  /** Kept in sync with "status" by trg_comment_status_sync. */
  isHidden: boolean('isHidden').notNull(),
  /** The string "undefined" in legacy rows; v2 keeps the hashed address in "ipHash". */
  ip: text('ip').notNull(),
  userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  modId: integer('modId')
    .notNull()
    .references(() => mod.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
  replyId: integer('replyId').references((): AnyPgColumn => comment.id, { onDelete: 'set null', onUpdate: 'cascade' }),

  // v2 columns.
  bodyMd: text('bodyMd'),
  bodyHtml: text('bodyHtml'),
  status: text('status').$type<CommentStatus>().notNull().default('visible'),
  hiddenReason: text('hiddenReason'),
  editedAt: ts3('editedAt'),
  deletedAt: ts3('deletedAt'),
  pinnedAt: ts3('pinnedAt'),
  deletedById: integer('deletedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  pinnedById: integer('pinnedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  isBugReport: boolean('isBugReport').notNull().default(false),
  isSolution: boolean('isSolution').notNull().default(false),
  modVersionId: integer('modVersionId').references(() => modVersion.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  bugResolvedInVersionId: integer('bugResolvedInVersionId').references(() => modVersion.id, {
    onDelete: 'set null',
    onUpdate: 'cascade',
  }),
  reactionsCount: integer('reactionsCount').notNull().default(0),
  repliesCount: integer('repliesCount').notNull().default(0),
  ipHash: text('ipHash'),
});

export type Comment = typeof comment.$inferSelect;
export type NewComment = typeof comment.$inferInsert;

/**
 * Legacy mention queue, consumed by the legacy cron (and by v2 once, at the cutover: B18). v2
 * itself writes "Notification" and never inserts here.
 */
export const pendingMention = pgTable(
  'PendingMention',
  {
    id: serial('id').primaryKey(),
    targetUserId: integer('targetUserId')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    fromUserId: integer('fromUserId')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    commentMessage: text('commentMessage').notNull(),
    /** "mention" | "comment" | "reply". */
    type: text('type').notNull(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
  },
  (t) => [index('PendingMention_createdAt_idx').on(t.createdAt)],
);

export type PendingMention = typeof pendingMention.$inferSelect;
