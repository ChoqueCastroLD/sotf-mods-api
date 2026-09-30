/** Kit follows and kit comments (Kits T1-24, migration 2140). */
import { type AnyPgColumn, boolean, index, integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { user } from '../legacy/user.ts';
import { kit } from '../v2/community.ts';

export const kitFollow = pgTable(
  'KitFollow',
  {
    kitId: integer('kitId')
      .notNull()
      .references(() => kit.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    /** Signals when the kit changes (new revision). */
    notify: boolean('notify').notNull().default(true),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'KitFollow_pkey', columns: [t.kitId, t.userId] })],
);

export type KitFollow = typeof kitFollow.$inferSelect;

export const KIT_COMMENT_STATUSES = ['visible', 'hidden', 'deleted'] as const;
export type KitCommentStatus = (typeof KIT_COMMENT_STATUSES)[number];

export const kitComment = pgTable(
  'KitComment',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    kitId: integer('kitId')
      .notNull()
      .references(() => kit.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    parentId: integer('parentId').references((): AnyPgColumn => kitComment.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    bodyMd: text('bodyMd').notNull(),
    bodyHtml: text('bodyHtml').notNull(),
    status: text('status').$type<KitCommentStatus>().notNull().default('visible'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    editedAt: tstz('editedAt'),
    deletedAt: tstz('deletedAt'),
    deletedById: integer('deletedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  },
  (t) => [index('KitComment_userId_idx').on(t.userId)],
);

export type KitComment = typeof kitComment.$inferSelect;
