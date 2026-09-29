/**
 * "Mod" (legacy table + v2 columns of PLAN §6.3). Holds mods, libraries and builds.
 *
 * Fixed `drizzle-kit pull` defects (research/04 §4.3): `isNSFW` keeps its exact column name, the
 * empty-string defaults are real `''`, the `(slug, userId)` unique index has no `int4_ops`
 * operator class, and the `timestamp(3)` columns are UTC `Date`s.
 */
import { sql } from 'drizzle-orm';
import {
  boolean,
  doublePrecision,
  index,
  integer,
  jsonb,
  pgTable,
  serial,
  smallint,
  text,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core';
import { ts3, tsvector } from '../_columns.ts';
import type { SupportLink } from '../_json.ts';
import { category } from './taxonomy.ts';
import { user } from './user.ts';

export const MOD_STATUSES = ['pending', 'published', 'unlisted', 'rejected', 'archived', 'removed'] as const;
export type ModStatus = (typeof MOD_STATUSES)[number];
/** Legacy "type" values (NULL on 19 legacy rows until backfill B4). */
export const MOD_TYPES = ['Mod', 'Library', 'Build'] as const;
export type ModType = (typeof MOD_TYPES)[number];
export const MOD_PLATFORMS = ['Client', 'Server', 'Universal'] as const;
export const MULTIPLAYER_ROLES = ['singleplayer_only', 'client_side', 'host_only', 'all_players', 'unknown'] as const;
export const DEDICATED_SERVER_SUPPORT = ['yes', 'no', 'partial', 'unknown'] as const;
export const SAFE_TO_REMOVE = ['yes', 'no', 'unknown'] as const;
export const COMPAT_STATUSES = ['works', 'mixed', 'broken', 'untested'] as const;
export type CompatStatus = (typeof COMPAT_STATUSES)[number];

/** Expression of the generated "searchVector" column (see 0004_mod_columns.sql). */
export const MOD_SEARCH_VECTOR_SQL = sql`setweight(to_tsvector('simple'::regconfig, public.sotf_unaccent(coalesce("name", ''))), 'A') || setweight(to_tsvector('simple'::regconfig, public.sotf_unaccent(coalesce("mod_id", ''))), 'A') || setweight(to_tsvector('english'::regconfig, public.sotf_unaccent(coalesce("shortDescription", ''))), 'B') || setweight(to_tsvector('english'::regconfig, public.sotf_unaccent(left(coalesce("description", ''), 20000))), 'C')`;

export const mod = pgTable(
  'Mod',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    /** Legacy `mod_id`: the RedLoader manifest id (or the BuildShare GUID of a build). */
    manifestId: text('mod_id').notNull(),
    shortDescription: text('shortDescription').notNull().default(''),
    /** Legacy description; v2 writes an HTML-escaped copy of the Markdown (PLAN §6.8). */
    description: text('description').notNull(),
    /** Legacy CSV of manifest ids; v2 reads "ModDependency". */
    dependencies: text('dependencies').notNull().default(''),
    type: text('type').$type<ModType>(),
    modSide: text('modSide'),
    isNSFW: boolean('isNSFW').notNull(),
    /** Kept in sync with "status" by trg_mod_status_sync. */
    isApproved: boolean('isApproved').notNull(),
    isFeatured: boolean('isFeatured').notNull(),
    isMultiplayerCompatible: boolean('isMultiplayerCompatible').notNull().default(false),
    requiresAllPlayers: boolean('requiresAllPlayers').notNull().default(false),
    lastWeekDownloads: integer('lastWeekDownloads').notNull().default(0),
    downloads: integer('downloads').notNull().default(0),
    latestVersion: text('latestVersion').default(''),
    latestVersionSize: text('latestVersionSize').default(''),
    averageRating: doublePrecision('averageRating').default(0),
    reviewsCount: integer('reviewsCount').default(0),
    favoritesCount: integer('favoritesCount').notNull().default(0),
    commentsCount: integer('commentsCount').notNull().default(0),
    sourceUrl: text('sourceUrl'),
    imageUrl: text('imageUrl'),
    buildGuid: text('buildGuid'),
    buildShareVersion: text('buildShareVersion'),
    numberOfElements: integer('numberOfElements'),
    lastReleasedAt: ts3('lastReleasedAt').notNull().defaultNow(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    userId: integer('userId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    categoryId: integer('categoryId').references(() => category.id, { onDelete: 'set null', onUpdate: 'cascade' }),

    // v2 columns.
    status: text('status').$type<ModStatus>().notNull().default('pending'),
    statusReason: text('statusReason'),
    statusChangedAt: ts3('statusChangedAt'),
    publishedAt: ts3('publishedAt'),
    approvedAt: ts3('approvedAt'),
    archivedAt: ts3('archivedAt'),
    removedAt: ts3('removedAt'),
    editedAt: ts3('editedAt'),
    compatUpdatedAt: ts3('compatUpdatedAt'),
    approvedById: integer('approvedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    successorModId: integer('successorModId'),
    canonicalSlug: text('canonicalSlug'),
    descriptionMd: text('descriptionMd'),
    descriptionHtml: text('descriptionHtml'),
    renderVersion: smallint('renderVersion').notNull().default(0),
    thumbnailMediaId: uuid('thumbnailMediaId'),
    license: text('license'),
    supportLinks: jsonb('supportLinks').$type<SupportLink[]>().notNull().default([]),
    videoUrl: text('videoUrl'),
    contentLang: text('contentLang'),
    platform: text('platform').$type<(typeof MOD_PLATFORMS)[number]>(),
    multiplayerRole: text('multiplayerRole').$type<(typeof MULTIPLAYER_ROLES)[number]>(),
    dedicatedServer: text('dedicatedServer').$type<(typeof DEDICATED_SERVER_SUPPORT)[number]>(),
    safeToRemove: text('safeToRemove').$type<(typeof SAFE_TO_REMOVE)[number]>(),
    logColor: text('logColor'),
    originalAuthorName: text('originalAuthorName'),
    originalAuthorUrl: text('originalAuthorUrl'),
    compatStatus: text('compatStatus').$type<CompatStatus>(),
    possiblyOutdated: boolean('possiblyOutdated').notNull().default(false),
    trendingScore: doublePrecision('trendingScore').notNull().default(0),
    ratingBayes: doublePrecision('ratingBayes').notNull().default(0),
    dependentsCount: integer('dependentsCount').notNull().default(0),
    qualityScore: smallint('qualityScore'),
    ogImageKey: text('ogImageKey'),
    /** Generated full-text document (read-only). */
    searchVector: tsvector('searchVector').generatedAlwaysAs(MOD_SEARCH_VECTOR_SQL),
  },
  (t) => [
    uniqueIndex('Mod_mod_id_key').on(t.manifestId),
    uniqueIndex('Mod_slug_userId_key').on(t.slug, t.userId),
    index('Mod_isNSFW_idx').on(t.isNSFW),
    index('Mod_isApproved_idx').on(t.isApproved),
    index('Mod_isFeatured_idx').on(t.isFeatured),
    index('Mod_lastReleasedAt_idx').on(t.lastReleasedAt),
    index('Mod_createdAt_idx').on(t.createdAt),
    index('Mod_userId_idx').on(t.userId),
    index('Mod_categoryId_idx').on(t.categoryId),
  ],
);

export type Mod = typeof mod.$inferSelect;
export type NewMod = typeof mod.$inferInsert;
