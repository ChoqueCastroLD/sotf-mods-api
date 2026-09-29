/**
 * Community (PLAN §6.4, §7.6–§7.8): user follows, Kits, comment reactions/edits/images and review
 * votes/edits. Mod follows reuse the legacy "ModFavorite".
 */
import {
  type AnyPgColumn,
  bigint,
  boolean,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  smallint,
  text,
  uuid,
} from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { comment } from '../legacy/comment.ts';
import { modReview } from '../legacy/engagement.ts';
import { mod } from '../legacy/mod.ts';
import { modVersion } from '../legacy/mod-version.ts';
import { user } from '../legacy/user.ts';
import { media } from './content.ts';

export const userFollow = pgTable(
  'UserFollow',
  {
    followerId: integer('followerId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    followeeId: integer('followeeId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    notify: boolean('notify').notNull().default(true),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'UserFollow_pkey', columns: [t.followerId, t.followeeId] })],
);

export type UserFollow = typeof userFollow.$inferSelect;

export const KIT_VISIBILITIES = ['public', 'unlisted', 'private'] as const;
export type KitVisibility = (typeof KIT_VISIBILITIES)[number];

export const kit = pgTable('Kit', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  ownerId: integer('ownerId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  slug: text('slug').notNull(),
  name: text('name').notNull(),
  descriptionMd: text('descriptionMd'),
  descriptionHtml: text('descriptionHtml'),
  visibility: text('visibility').$type<KitVisibility>().notNull().default('public'),
  /** Shareable code `KIT-XXXX-XX` (Crockford base32). */
  code: text('code').notNull(),
  coverMediaId: uuid('coverMediaId').references(() => media.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  isStaffPick: boolean('isStaffPick').notNull().default(false),
  forkedFromId: integer('forkedFromId').references((): AnyPgColumn => kit.id, {
    onDelete: 'set null',
    onUpdate: 'cascade',
  }),
  revision: integer('revision').notNull().default(1),
  itemsCount: integer('itemsCount').notNull().default(0),
  followersCount: integer('followersCount').notNull().default(0),
  ogImageKey: text('ogImageKey'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  updatedAt: tstz('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  deletedAt: tstz('deletedAt'),
});

export type Kit = typeof kit.$inferSelect;
export type NewKit = typeof kit.$inferInsert;

export const kitItem = pgTable(
  'KitItem',
  {
    kitId: integer('kitId')
      .notNull()
      .references(() => kit.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    position: integer('position').notNull(),
    note: text('note'),
    /** NULL = always the latest version. */
    pinnedVersionId: integer('pinnedVersionId').references(() => modVersion.id, {
      onDelete: 'set null',
      onUpdate: 'cascade',
    }),
    isAutoDependency: boolean('isAutoDependency').notNull().default(false),
    addedAt: tstz('addedAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'KitItem_pkey', columns: [t.kitId, t.modId] })],
);

export type KitItem = typeof kitItem.$inferSelect;
export type NewKitItem = typeof kitItem.$inferInsert;

export const kitRevision = pgTable(
  'KitRevision',
  {
    kitId: integer('kitId')
      .notNull()
      .references(() => kit.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    revision: integer('revision').notNull(),
    changes: jsonb('changes').$type<JsonObject>().notNull(),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'KitRevision_pkey', columns: [t.kitId, t.revision] })],
);

export type KitRevision = typeof kitRevision.$inferSelect;

export const REACTION_KINDS = ['thumbs_up', 'heart', 'laugh', 'party', 'pray', 'fire'] as const;
export type ReactionKind = (typeof REACTION_KINDS)[number];

export const commentReaction = pgTable(
  'CommentReaction',
  {
    commentId: integer('commentId')
      .notNull()
      .references(() => comment.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    kind: text('kind').$type<ReactionKind>().notNull(),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'CommentReaction_pkey', columns: [t.commentId, t.userId, t.kind] })],
);

export type CommentReaction = typeof commentReaction.$inferSelect;

export const commentEdit = pgTable('CommentEdit', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  commentId: integer('commentId')
    .notNull()
    .references(() => comment.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  bodyMd: text('bodyMd').notNull(),
  editedAt: tstz('editedAt').notNull().defaultNow(),
});

export type CommentEdit = typeof commentEdit.$inferSelect;

export const commentImage = pgTable(
  'CommentImage',
  {
    commentId: integer('commentId')
      .notNull()
      .references(() => comment.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    mediaId: uuid('mediaId')
      .notNull()
      .references(() => media.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    position: smallint('position'),
  },
  (t) => [primaryKey({ name: 'CommentImage_pkey', columns: [t.commentId, t.mediaId] })],
);

export type CommentImage = typeof commentImage.$inferSelect;

export const reviewVote = pgTable(
  'ReviewVote',
  {
    reviewId: integer('reviewId')
      .notNull()
      .references(() => modReview.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    userId: integer('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    /** -1 or 1. */
    value: smallint('value').$type<-1 | 1>().notNull(),
    createdAt: tstz('createdAt').notNull().defaultNow(),
  },
  (t) => [primaryKey({ name: 'ReviewVote_pkey', columns: [t.reviewId, t.userId] })],
);

export type ReviewVote = typeof reviewVote.$inferSelect;

export const reviewEdit = pgTable('ReviewEdit', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  reviewId: integer('reviewId')
    .notNull()
    .references(() => modReview.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  rating: smallint('rating'),
  title: text('title'),
  bodyMd: text('bodyMd'),
  editedAt: tstz('editedAt').notNull().defaultNow(),
});

export type ReviewEdit = typeof reviewEdit.$inferSelect;
