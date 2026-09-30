/** Gamification (PLAN §6.4, §7.2): badges, XP, mod milestones and awards. */
import { bigint, boolean, date, integer, jsonb, pgTable, primaryKey, smallint, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

/** Badge catalog, seeded from code; translations live in the i18n messages. */
export const badge = pgTable('Badge', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  key: text('key').notNull(),
  group: text('group').notNull(),
  tier: smallint('tier').notNull().default(1),
  icon: text('icon').notNull(),
  criteria: jsonb('criteria').$type<JsonObject>().notNull(),
  isSecret: boolean('isSecret').notNull().default(false),
  isRepeatable: boolean('isRepeatable').notNull().default(false),
  sortOrder: integer('sortOrder').notNull().default(0),
  retiredAt: tstz('retiredAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Badge = typeof badge.$inferSelect;
export type NewBadge = typeof badge.$inferInsert;

export const userBadge = pgTable('UserBadge', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  badgeId: integer('badgeId')
    .notNull()
    .references(() => badge.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  /** '' for one-off badges; the context (e.g. a mod id) for repeatable ones. */
  contextKey: text('contextKey').notNull().default(''),
  awardedAt: tstz('awardedAt').notNull().defaultNow(),
  isFeatured: boolean('isFeatured').notNull().default(false),
  notifiedAt: tstz('notifiedAt'),
});

export type UserBadge = typeof userBadge.$inferSelect;
export type NewUserBadge = typeof userBadge.$inferInsert;

export const xpEvent = pgTable('XpEvent', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  kind: text('kind').notNull(),
  points: integer('points').notNull(),
  refType: text('refType').notNull(),
  refId: text('refId').notNull(),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  revokedAt: tstz('revokedAt'),
});

export type XpEvent = typeof xpEvent.$inferSelect;
export type NewXpEvent = typeof xpEvent.$inferInsert;

export const modMilestone = pgTable(
  'ModMilestone',
  {
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    threshold: integer('threshold').notNull(),
    reachedAt: tstz('reachedAt').notNull(),
    notifiedAt: tstz('notifiedAt'),
    /** Share card rendered by `og.render` (`milestone` entity), null until rendered. */
    ogImageKey: text('ogImageKey'),
  },
  (t) => [primaryKey({ name: 'ModMilestone_pkey', columns: [t.modId, t.threshold] })],
);

export type ModMilestone = typeof modMilestone.$inferSelect;

export const AWARD_KINDS = ['mod_of_week', 'staff_pick', 'build_of_month', 'mod_of_month'] as const;
export type AwardKind = (typeof AWARD_KINDS)[number];

export const award = pgTable('Award', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  kind: text('kind').$type<AwardKind>().notNull(),
  modId: integer('modId')
    .notNull()
    .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  periodStart: date('periodStart', { mode: 'string' }).notNull(),
  periodEnd: date('periodEnd', { mode: 'string' }).notNull(),
  reason: text('reason'),
  createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Award = typeof award.$inferSelect;
export type NewAward = typeof award.$inferInsert;
