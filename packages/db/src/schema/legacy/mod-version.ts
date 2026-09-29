/** "ModVersion" (legacy table + v2 columns of PLAN §6.3) and "ModImage". */
import { bigint, boolean, index, integer, jsonb, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import type { BuildMeta, JsonObject } from '../_json.ts';
import { mod } from './mod.ts';
import { user } from './user.ts';

export const MOD_VERSION_STATUSES = ['pending', 'active', 'rejected', 'yanked', 'file_missing'] as const;
export type ModVersionStatus = (typeof MOD_VERSION_STATUSES)[number];
export const RELEASE_CHANNELS = ['release', 'beta'] as const;
export type ReleaseChannel = (typeof RELEASE_CHANNELS)[number];
export const CHECKS_STATUSES = ['pending', 'passed', 'flagged', 'failed'] as const;
export type ChecksStatus = (typeof CHECKS_STATUSES)[number];

export const modVersion = pgTable(
  'ModVersion',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    /** Semver for mods; a UUIDv7 for builds. */
    version: text('version').notNull(),
    isLatest: boolean('isLatest').notNull(),
    /** Legacy changelog; v2 writes an HTML-escaped copy of the Markdown. */
    changelog: text('changelog').notNull(),
    /** Full public URL (legacy); the key lives in "storageKey". */
    downloadUrl: text('downloadUrl').notNull(),
    extension: text('extension'),
    filename: text('filename'),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    modId: integer('modId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),

    // v2 columns.
    storageKey: text('storageKey'),
    fileSize: bigint('fileSize', { mode: 'number' }),
    sha256: text('sha256'),
    contentType: text('contentType'),
    status: text('status').$type<ModVersionStatus>().notNull().default('active'),
    statusReason: text('statusReason'),
    channel: text('channel').$type<ReleaseChannel>().notNull().default('release'),
    changelogMd: text('changelogMd'),
    changelogHtml: text('changelogHtml'),
    /** Filled by trg_modversion_semver; NULL for builds and non-semver versions. */
    semverMajor: integer('semverMajor'),
    semverMinor: integer('semverMinor'),
    semverPatch: integer('semverPatch'),
    semverPre: text('semverPre'),
    /** Every field of the RedLoader manifest.json (T0-04). */
    manifest: jsonb('manifest').$type<JsonObject>(),
    gameVersionDeclared: text('gameVersionDeclared'),
    loaderVersionDeclared: text('loaderVersionDeclared'),
    platformDeclared: text('platformDeclared'),
    buildMeta: jsonb('buildMeta').$type<BuildMeta>(),
    checksStatus: text('checksStatus').$type<ChecksStatus>(),
    publishedById: integer('publishedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    publishedAt: ts3('publishedAt'),
    downloadsCount: integer('downloadsCount').notNull().default(0),
    uniqueDownloadsCount: integer('uniqueDownloadsCount').notNull().default(0),
  },
  (t) => [
    index('ModVersion_isLatest_idx').on(t.isLatest),
    index('ModVersion_createdAt_idx').on(t.createdAt),
    index('ModVersion_modId_idx').on(t.modId),
  ],
);

export type ModVersion = typeof modVersion.$inferSelect;
export type NewModVersion = typeof modVersion.$inferInsert;

export const modImage = pgTable(
  'ModImage',
  {
    // Legacy columns.
    id: serial('id').primaryKey(),
    /** Full public URL (legacy). */
    url: text('url').notNull(),
    isPrimary: boolean('isPrimary').notNull(),
    isThumbnail: boolean('isThumbnail').notNull(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    modId: integer('modId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),

    // v2 columns (recomputed when the legacy editor recreates gallery rows).
    mediaId: uuid('mediaId'),
    storageKey: text('storageKey'),
    position: integer('position'),
    alt: text('alt'),
  },
  (t) => [
    index('ModImage_isPrimary_idx').on(t.isPrimary),
    index('ModImage_isThumbnail_idx').on(t.isThumbnail),
    index('ModImage_createdAt_idx').on(t.createdAt),
    index('ModImage_modId_idx').on(t.modId),
  ],
);

export type ModImage = typeof modImage.$inferSelect;
export type NewModImage = typeof modImage.$inferInsert;
