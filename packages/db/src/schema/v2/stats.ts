/**
 * Statistics and first-party analytics (PLAN §6.4). The download aggregates have no foreign keys:
 * together with "SiteDownloadDaily" they must always add up to count("ModDownload").
 */
import { bigint, date, integer, jsonb, pgTable, primaryKey, real, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import type { DownloadSource } from '../legacy/engagement.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

/** Same values as "ModDownload"."source" (`client` = legacy rows with ip 'undefined'). */
export type DownloadChannel = DownloadSource;

export const modVersionDownloadDaily = pgTable(
  'ModVersionDownloadDaily',
  {
    modVersionId: integer('modVersionId').notNull(),
    day: date('day', { mode: 'string' }).notNull(),
    channel: text('channel').$type<DownloadChannel>().notNull(),
    downloads: integer('downloads').notNull().default(0),
    uniqueDownloads: integer('uniqueDownloads').notNull().default(0),
  },
  (t) => [primaryKey({ name: 'ModVersionDownloadDaily_pkey', columns: [t.modVersionId, t.day, t.channel] })],
);

export type ModVersionDownloadDaily = typeof modVersionDownloadDaily.$inferSelect;

/** Orphan downloads (NULL version, or a version without mod). */
export const siteDownloadDaily = pgTable(
  'SiteDownloadDaily',
  {
    day: date('day', { mode: 'string' }).notNull(),
    channel: text('channel').$type<DownloadChannel>().notNull(),
    downloads: integer('downloads').notNull(),
  },
  (t) => [primaryKey({ name: 'SiteDownloadDaily_pkey', columns: [t.day, t.channel] })],
);

export type SiteDownloadDaily = typeof siteDownloadDaily.$inferSelect;

/** Uniqueness window (version + ipHash + day), 2-day retention. */
export const downloadUnique = pgTable(
  'DownloadUnique',
  {
    modVersionId: integer('modVersionId').notNull(),
    day: date('day', { mode: 'string' }).notNull(),
    ipHash: text('ipHash').notNull(),
  },
  (t) => [primaryKey({ name: 'DownloadUnique_pkey', columns: [t.modVersionId, t.day, t.ipHash] })],
);

export type DownloadUnique = typeof downloadUnique.$inferSelect;

export const modStatsDaily = pgTable(
  'ModStatsDaily',
  {
    modId: integer('modId').notNull(),
    day: date('day', { mode: 'string' }).notNull(),
    views: integer('views').notNull().default(0),
    uniqueViews: integer('uniqueViews').notNull().default(0),
    downloads: integer('downloads').notNull().default(0),
    uniqueDownloads: integer('uniqueDownloads').notNull().default(0),
    follows: integer('follows').notNull().default(0),
    unfollows: integer('unfollows').notNull().default(0),
    comments: integer('comments').notNull().default(0),
    reviews: integer('reviews').notNull().default(0),
    compatReports: integer('compatReports').notNull().default(0),
    bySource: jsonb('bySource').$type<Record<string, number>>().notNull().default({}),
    byReferrer: jsonb('byReferrer').$type<Record<string, number>>().notNull().default({}),
    byCountry: jsonb('byCountry').$type<Record<string, number>>().notNull().default({}),
    byLocale: jsonb('byLocale').$type<Record<string, number>>().notNull().default({}),
  },
  (t) => [primaryKey({ name: 'ModStatsDaily_pkey', columns: [t.modId, t.day] })],
);

export type ModStatsDaily = typeof modStatsDaily.$inferSelect;

export const modStats = pgTable('ModStats', {
  modId: integer('modId')
    .primaryKey()
    .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  downloadsTotal: bigint('downloadsTotal', { mode: 'number' }).notNull().default(0),
  downloads7d: integer('downloads7d').notNull().default(0),
  downloads30d: integer('downloads30d').notNull().default(0),
  uniqueDownloadsTotal: bigint('uniqueDownloadsTotal', { mode: 'number' }).notNull().default(0),
  views7d: integer('views7d').notNull().default(0),
  views30d: integer('views30d').notNull().default(0),
  followers: integer('followers').notNull().default(0),
  commentsVisible: integer('commentsVisible').notNull().default(0),
  reviewsVisible: integer('reviewsVisible').notNull().default(0),
  ratingAvg: real('ratingAvg'),
  updatedAt: tstz('updatedAt'),
});

export type ModStats = typeof modStats.$inferSelect;
export type NewModStats = typeof modStats.$inferInsert;

export const SITE_STAT_KEYS = [
  'users',
  'mods',
  'downloads',
  'developers',
  'builds',
  'buildDownloads',
  'buildDevelopers',
  'orphanDownloads',
] as const;
export type SiteStatKey = (typeof SITE_STAT_KEYS)[number];

export const siteStat = pgTable('SiteStat', {
  key: text('key').primaryKey(),
  value: bigint('value', { mode: 'number' }).notNull(),
  updatedAt: tstz('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type SiteStat = typeof siteStat.$inferSelect;

export const userStats = pgTable('UserStats', {
  userId: integer('userId')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  modsCount: integer('modsCount').notNull().default(0),
  buildsCount: integer('buildsCount').notNull().default(0),
  downloadsTotal: bigint('downloadsTotal', { mode: 'number' }).notNull().default(0),
  followersCount: integer('followersCount').notNull().default(0),
  followingCount: integer('followingCount').notNull().default(0),
  ratingAvg: real('ratingAvg'),
  reviewsCount: integer('reviewsCount').notNull().default(0),
  helpfulVotes: integer('helpfulVotes').notNull().default(0),
  compatReportsCount: integer('compatReportsCount').notNull().default(0),
  creatorTier: text('creatorTier'),
  survivorRank: text('survivorRank'),
  updatedAt: tstz('updatedAt'),
});

export type UserStats = typeof userStats.$inferSelect;
export type NewUserStats = typeof userStats.$inferInsert;

export const userActivityDaily = pgTable(
  'UserActivityDaily',
  {
    userId: integer('userId').notNull(),
    day: date('day', { mode: 'string' }).notNull(),
    releases: integer('releases').notNull().default(0),
    comments: integer('comments').notNull().default(0),
    reviews: integer('reviews').notNull().default(0),
    reports: integer('reports').notNull().default(0),
  },
  (t) => [primaryKey({ name: 'UserActivityDaily_pkey', columns: [t.userId, t.day] })],
);

export type UserActivityDaily = typeof userActivityDaily.$inferSelect;

/** First-party product analytics (90-day retention). */
export const analyticsEvent = pgTable('AnalyticsEvent', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  ts: tstz('ts').notNull().defaultNow(),
  kind: text('kind').notNull(),
  path: text('path'),
  entityType: text('entityType'),
  entityId: integer('entityId'),
  locale: text('locale'),
  referrerDomain: text('referrerDomain'),
  country: text('country'),
  device: text('device'),
  visitorHash: text('visitorHash'),
  props: jsonb('props').$type<JsonObject>(),
});

export type AnalyticsEvent = typeof analyticsEvent.$inferSelect;
export type NewAnalyticsEvent = typeof analyticsEvent.$inferInsert;

export const searchQueryDaily = pgTable(
  'SearchQueryDaily',
  {
    day: date('day', { mode: 'string' }).notNull(),
    qNorm: text('qNorm').notNull(),
    results: integer('results'),
    count: integer('count').notNull().default(1),
  },
  (t) => [primaryKey({ name: 'SearchQueryDaily_pkey', columns: [t.day, t.qNorm] })],
);

export type SearchQueryDaily = typeof searchQueryDaily.$inferSelect;
