/** Media, uploads, drafts, dependencies and version inspection (PLAN §2.8, §6.4). */
import { bigint, integer, jsonb, pgTable, real, text, uuid } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';
import { tstz } from '../_columns.ts';
import type { JsonObject, MediaVariant, ZipEntry } from '../_json.ts';
import { mod } from '../legacy/mod.ts';
import { modVersion } from '../legacy/mod-version.ts';
import { user } from '../legacy/user.ts';

export const MEDIA_PURPOSES = [
  'mod_image',
  'thumbnail',
  'avatar',
  'banner',
  'comment_image',
  'kit_cover',
  'og',
  'legacy',
] as const;
export type MediaPurpose = (typeof MEDIA_PURPOSES)[number];
export const MEDIA_STATUSES = ['pending', 'ready', 'failed'] as const;
export type MediaStatus = (typeof MEDIA_STATUSES)[number];

export const media = pgTable('Media', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  ownerId: integer('ownerId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  purpose: text('purpose').$type<MediaPurpose>().notNull(),
  sourceBucket: text('sourceBucket').notNull(),
  sourceKey: text('sourceKey').notNull(),
  width: integer('width'),
  height: integer('height'),
  bytes: bigint('bytes', { mode: 'number' }),
  contentType: text('contentType'),
  thumbhash: text('thumbhash'),
  dominantColor: text('dominantColor'),
  variants: jsonb('variants').$type<MediaVariant[]>().notNull().default([]),
  status: text('status').$type<MediaStatus>().notNull().default('pending'),
  error: text('error'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  processedAt: tstz('processedAt'),
});

export type Media = typeof media.$inferSelect;
export type NewMedia = typeof media.$inferInsert;

export const UPLOAD_PURPOSES = ['mod_file', 'build_file', 'image', 'avatar', 'banner', 'comment_image'] as const;
export type UploadPurpose = (typeof UPLOAD_PURPOSES)[number];
export const UPLOAD_STATUSES = ['pending', 'uploaded', 'processing', 'ready', 'rejected', 'expired'] as const;
export type UploadStatus = (typeof UPLOAD_STATUSES)[number];

/** Direct-to-R2 upload sessions (presigned PUT into sotf-mods-private/incoming/). */
export const upload = pgTable('Upload', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  purpose: text('purpose').$type<UploadPurpose>().notNull(),
  bucket: text('bucket').notNull(),
  key: text('key').notNull(),
  filename: text('filename').notNull(),
  contentType: text('contentType').notNull(),
  declaredBytes: bigint('declaredBytes', { mode: 'number' }).notNull(),
  maxBytes: bigint('maxBytes', { mode: 'number' }).notNull(),
  sha256: text('sha256'),
  status: text('status').$type<UploadStatus>().notNull().default('pending'),
  resultRef: jsonb('resultRef').$type<JsonObject>(),
  error: text('error'),
  expiresAt: tstz('expiresAt').notNull(),
  completedAt: tstz('completedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Upload = typeof upload.$inferSelect;
export type NewUpload = typeof upload.$inferInsert;

export const DRAFT_KINDS = ['mod', 'build'] as const;
export type DraftKind = (typeof DRAFT_KINDS)[number];

/** Publication drafts: never stored in "Mod" (the legacy would list them). */
export const modDraft = pgTable('ModDraft', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  modId: integer('modId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  kind: text('kind').$type<DraftKind>().notNull(),
  data: jsonb('data').$type<JsonObject>().notNull().default({}),
  uploadIds: uuid('uploadIds').array().notNull().default([]),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  updatedAt: tstz('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type ModDraft = typeof modDraft.$inferSelect;
export type NewModDraft = typeof modDraft.$inferInsert;

export const DEPENDENCY_KINDS = ['required', 'optional', 'conflicts'] as const;
export type DependencyKind = (typeof DEPENDENCY_KINDS)[number];

export const modDependency = pgTable('ModDependency', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  modVersionId: integer('modVersionId')
    .notNull()
    .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  /** Manifest id of the dependency (resolves to depModId when the mod is on the site). */
  depManifestId: text('depManifestId').notNull(),
  depModId: integer('depModId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  versionRange: text('versionRange'),
  kind: text('kind').$type<DependencyKind>().notNull().default('required'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type ModDependency = typeof modDependency.$inferSelect;
export type NewModDependency = typeof modDependency.$inferInsert;

export const versionInspection = pgTable('VersionInspection', {
  modVersionId: integer('modVersionId')
    .primaryKey()
    .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  status: text('status').notNull(),
  manifest: jsonb('manifest').$type<JsonObject>(),
  entries: jsonb('entries').$type<ZipEntry[]>(),
  flags: jsonb('flags').$type<Array<string | JsonObject>>().notNull().default([]),
  uncompressedBytes: bigint('uncompressedBytes', { mode: 'number' }),
  ratio: real('ratio'),
  sha256: text('sha256'),
  error: text('error'),
  inspectedAt: tstz('inspectedAt'),
});

export type VersionInspection = typeof versionInspection.$inferSelect;
export type NewVersionInspection = typeof versionInspection.$inferInsert;

export const SCAN_VERDICTS = ['pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive'] as const;
export type ScanVerdict = (typeof SCAN_VERDICTS)[number];

export const securityScan = pgTable('SecurityScan', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  modVersionId: integer('modVersionId')
    .notNull()
    .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  sha256: text('sha256').notNull(),
  engine: text('engine').notNull().default('virustotal'),
  positives: integer('positives'),
  total: integer('total'),
  permalink: text('permalink'),
  verdict: text('verdict').$type<ScanVerdict>().notNull(),
  raw: jsonb('raw').$type<JsonObject>(),
  scannedAt: tstz('scannedAt'),
  overrideById: integer('overrideById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  overrideNote: text('overrideNote'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type SecurityScan = typeof securityScan.$inferSelect;
export type NewSecurityScan = typeof securityScan.$inferInsert;
