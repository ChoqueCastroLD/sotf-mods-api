/**
 * Discovery tables (T1-07 Scout, T1-15 recommendations; migrations 2160 and 2161). Derived or
 * cache-like data: every table can be emptied without losing user content.
 */
import {
  bigint,
  date,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  smallint,
  text,
} from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';

export const MOD_RECOMMENDATION_KINDS = ['also_downloaded', 'similar'] as const;
export type ModRecommendationKind = (typeof MOD_RECOMMENDATION_KINDS)[number];

/** Nightly output of `recommendations.compute`: the top recommendations of every mod, by kind. */
export const modRecommendation = pgTable(
  'ModRecommendation',
  {
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    recommendedModId: integer('recommendedModId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    kind: text('kind').$type<ModRecommendationKind>().notNull(),
    /** 1 = best. */
    rank: smallint('rank').notNull(),
    score: doublePrecision('score').notNull(),
    /** Distinct downloaders of both mods (`also_downloaded`). */
    supportCount: integer('supportCount').notNull().default(0),
    computedAt: tstz('computedAt').notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.modId, t.kind, t.recommendedModId], name: 'ModRecommendation_pkey' }),
    index('ModRecommendation_mod_kind_rank_idx').on(t.modId, t.kind, t.rank),
  ],
);

export type ModRecommendation = typeof modRecommendation.$inferSelect;

/** What the model picked: a mod id and a one-line reason. */
export interface ScoutPick {
  modId: number;
  reason: string;
}

/** Cached Scout answers (key = HMAC of locale + normalised question). */
export const scoutCache = pgTable(
  'ScoutCache',
  {
    cacheKey: text('cacheKey').primaryKey(),
    locale: text('locale').notNull(),
    question: text('question').notNull(),
    answer: text('answer').notNull(),
    picks: jsonb('picks').$type<ScoutPick[]>().notNull().default([]),
    hits: integer('hits').notNull().default(0),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    lastHitAt: tstz('lastHitAt'),
  },
  (t) => [index('ScoutCache_createdAt_idx').on(t.createdAt)],
);

export type ScoutCache = typeof scoutCache.$inferSelect;

/** Daily Scout usage: the spend cap is charged against `costMicroUsd`. */
export const scoutUsageDaily = pgTable('ScoutUsageDaily', {
  day: date('day', { mode: 'string' }).primaryKey(),
  requests: integer('requests').notNull().default(0),
  cacheHits: integer('cacheHits').notNull().default(0),
  refusals: integer('refusals').notNull().default(0),
  errors: integer('errors').notNull().default(0),
  tokensIn: bigint('tokensIn', { mode: 'number' }).notNull().default(0),
  tokensOut: bigint('tokensOut', { mode: 'number' }).notNull().default(0),
  costMicroUsd: bigint('costMicroUsd', { mode: 'number' }).notNull().default(0),
});

export type ScoutUsageDaily = typeof scoutUsageDaily.$inferSelect;
