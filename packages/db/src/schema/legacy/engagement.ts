/** Legacy engagement tables: "ModDownload", "ModFavorite" (= Follow / Backpack) and "ModReview". */
import { boolean, index, integer, pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import { mod } from './mod.ts';
import { modVersion } from './mod-version.ts';
import { user } from './user.ts';

export const DOWNLOAD_SOURCES = ['web', 'redmanager', 'client', 'api', 'unknown'] as const;
export type DownloadSource = (typeof DOWNLOAD_SOURCES)[number];

/**
 * One row per counted download (~2M rows, append-only). Until the legacy is retired v2 keeps
 * inserting a legacy-compatible row per download (PLAN §6.1 rule 6), with `ip` = ipHash.
 */
export const modDownload = pgTable(
  'ModDownload',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    ip: text('ip').notNull(),
    userAgent: text('userAgent').notNull(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    modVersionId: integer('modVersionId').references(() => modVersion.id, {
      onDelete: 'set null',
      onUpdate: 'cascade',
    }),

    // v2 columns.
    ipHash: text('ipHash'),
    country: text('country'),
    source: text('source').$type<DownloadSource>(),
    userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    isUnique: boolean('isUnique'),
  },
  (t) => [
    index('ModDownload_ip_idx').on(t.ip),
    index('ModDownload_createdAt_idx').on(t.createdAt),
    index('ModDownload_modVersionId_idx').on(t.modVersionId),
  ],
);

export type ModDownload = typeof modDownload.$inferSelect;
export type NewModDownload = typeof modDownload.$inferInsert;

/** Follow ♥ = Backpack (PLAN §6.8). `notify` opts into new-version signals. */
export const modFavorite = pgTable('ModFavorite', {
  // Legacy columns.
  id: serial('id').primaryKey(),
  createdAt: ts3('createdAt').notNull().defaultNow(),
  updatedAt: ts3('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  modId: integer('modId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),

  // v2 columns.
  notify: boolean('notify').notNull().default(true),
});

export type ModFavorite = typeof modFavorite.$inferSelect;
export type NewModFavorite = typeof modFavorite.$inferInsert;

export const REVIEW_STATUSES = ['visible', 'hidden', 'deleted'] as const;
export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

/**
 * Reviews (PLAN §7.7) on the existing, unused legacy table. The legacy "isHidden" defaults to
 * true: always write "status" and "isHidden" together (trg_review_status_sync keeps them in sync).
 */
export const modReview = pgTable(
  'ModReview',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    title: text('title').notNull(),
    message: text('message').notNull(),
    rating: integer('rating').notNull(),
    isHidden: boolean('isHidden').notNull().default(true),
    modVersionString: text('modVersionString'),
    userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    modId: integer('modId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),

    // v2 columns.
    bodyMd: text('bodyMd'),
    bodyHtml: text('bodyHtml'),
    status: text('status').$type<ReviewStatus>().notNull().default('visible'),
    modVersionId: integer('modVersionId').references(() => modVersion.id, {
      onDelete: 'set null',
      onUpdate: 'cascade',
    }),
    isVerifiedDownload: boolean('isVerifiedDownload').notNull().default(false),
    helpfulCount: integer('helpfulCount').notNull().default(0),
    unhelpfulCount: integer('unhelpfulCount').notNull().default(0),
    authorReplyMd: text('authorReplyMd'),
    authorReplyHtml: text('authorReplyHtml'),
    authorRepliedAt: ts3('authorRepliedAt'),
    editedAt: ts3('editedAt'),
    deletedAt: ts3('deletedAt'),
  },
  (t) => [uniqueIndex('ModReview_userId_modId_key').on(t.userId, t.modId)],
);

export type ModReview = typeof modReview.$inferSelect;
export type NewModReview = typeof modReview.$inferInsert;
