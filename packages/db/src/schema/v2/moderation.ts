/** Moderation (Ranger Station) and operations tables (PLAN §6.4, §7.4, §6.9, §9.3). */
import { bigint, boolean, date, integer, jsonb, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';
import { ts3, tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { mod } from '../legacy/mod.ts';
import { user } from '../legacy/user.ts';

export const REPORT_TARGET_TYPES = ['mod', 'version', 'comment', 'review', 'user', 'kit', 'compat_report'] as const;
export type ReportTargetType = (typeof REPORT_TARGET_TYPES)[number];
export const REPORT_STATUSES = ['open', 'resolved', 'dismissed'] as const;
export type ReportStatus = (typeof REPORT_STATUSES)[number];

export const report = pgTable('Report', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  reporterId: integer('reporterId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  targetType: text('targetType').$type<ReportTargetType>().notNull(),
  targetId: integer('targetId').notNull(),
  reason: text('reason').notNull(),
  details: text('details'),
  status: text('status').$type<ReportStatus>().notNull().default('open'),
  assignedToId: integer('assignedToId').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  resolution: text('resolution'),
  resolvedById: integer('resolvedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  resolvedAt: tstz('resolvedAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Report = typeof report.$inferSelect;
export type NewReport = typeof report.$inferInsert;

/** Insert-only audit trail: the application role cannot UPDATE or DELETE it (ops/sql/roles.sql). */
export const auditLog = pgTable('AuditLog', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  actorId: integer('actorId'),
  action: text('action').notNull(),
  targetType: text('targetType'),
  targetId: integer('targetId'),
  before: jsonb('before').$type<JsonObject>(),
  after: jsonb('after').$type<JsonObject>(),
  reason: text('reason'),
  ipHash: text('ipHash'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type AuditLog = typeof auditLog.$inferSelect;
export type NewAuditLog = typeof auditLog.$inferInsert;

export const SANCTION_KINDS = ['suspend', 'ban', 'comment_mute', 'upload_mute'] as const;
export type SanctionKind = (typeof SANCTION_KINDS)[number];

export const userSanction = pgTable('UserSanction', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  kind: text('kind').$type<SanctionKind>().notNull(),
  scopeModId: integer('scopeModId').references(() => mod.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  reason: text('reason').notNull(),
  startsAt: tstz('startsAt').notNull().defaultNow(),
  endsAt: tstz('endsAt'),
  /** No foreign key: the history outlives the moderator's account. */
  createdById: integer('createdById').notNull(),
  revokedAt: tstz('revokedAt'),
});

export type UserSanction = typeof userSanction.$inferSelect;
export type NewUserSanction = typeof userSanction.$inferInsert;

export const ANNOUNCEMENT_LEVELS = ['info', 'warning', 'patch'] as const;
export type AnnouncementLevel = (typeof ANNOUNCEMENT_LEVELS)[number];

export const announcement = pgTable('Announcement', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  level: text('level').$type<AnnouncementLevel>().notNull(),
  /** `{ "<locale>": "message" }`. */
  messageI18n: jsonb('messageI18n').$type<Partial<Record<string, string>>>().notNull(),
  href: text('href'),
  startsAt: tstz('startsAt').notNull(),
  endsAt: tstz('endsAt'),
  dismissible: boolean('dismissible').notNull().default(true),
  createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type Announcement = typeof announcement.$inferSelect;
export type NewAnnouncement = typeof announcement.$inferInsert;

export const SITE_SETTING_KEYS = [
  'ads',
  'discordWebhooks',
  'moderationTemplates',
  'limits',
  'kelvinseek',
  'featureFlags',
] as const;
export type SiteSettingKey = (typeof SITE_SETTING_KEYS)[number];

export const siteSetting = pgTable('SiteSetting', {
  key: text('key').primaryKey(),
  value: jsonb('value').$type<unknown>().notNull(),
  updatedById: integer('updatedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  updatedAt: tstz('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type SiteSetting = typeof siteSetting.$inferSelect;

export const kelvinUsageDaily = pgTable('KelvinUsageDaily', {
  day: date('day', { mode: 'string' }).primaryKey(),
  requests: integer('requests').notNull().default(0),
  fallbacks: integer('fallbacks').notNull().default(0),
  tokensIn: bigint('tokensIn', { mode: 'number' }).notNull().default(0),
  tokensOut: bigint('tokensOut', { mode: 'number' }).notNull().default(0),
  costMicroUsd: bigint('costMicroUsd', { mode: 'number' }).notNull().default(0),
});

export type KelvinUsageDaily = typeof kelvinUsageDaily.$inferSelect;

export const DATA_EXPORT_STATUSES = ['pending', 'ready', 'failed', 'expired'] as const;
export type DataExportStatus = (typeof DATA_EXPORT_STATUSES)[number];

export const dataExport = pgTable('DataExport', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  status: text('status').$type<DataExportStatus>().notNull().default('pending'),
  /** Object key in the private bucket (exports/). */
  key: text('key'),
  expiresAt: tstz('expiresAt'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type DataExport = typeof dataExport.$inferSelect;

export const ACCOUNT_DELETION_MODES = ['archive_mods', 'keep_mods_anonymous'] as const;
export type AccountDeletionMode = (typeof ACCOUNT_DELETION_MODES)[number];

export const accountDeletion = pgTable('AccountDeletion', {
  userId: integer('userId')
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  requestedAt: tstz('requestedAt').notNull(),
  executeAfter: tstz('executeAfter').notNull(),
  mode: text('mode').$type<AccountDeletionMode>().notNull(),
  cancelledAt: tstz('cancelledAt'),
  executedAt: tstz('executedAt'),
});

export type AccountDeletion = typeof accountDeletion.$inferSelect;

/** Previous values of every in-place change to a legacy column (PLAN §6.1 rule 3). */
export const dataFixAudit = pgTable('DataFixAudit', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  fixId: text('fixId').notNull(),
  tableName: text('tableName').notNull(),
  rowId: text('rowId').notNull(),
  columnName: text('columnName').notNull(),
  oldValue: jsonb('oldValue').$type<unknown>(),
  newValue: jsonb('newValue').$type<unknown>(),
  appliedAt: tstz('appliedAt').notNull().defaultNow(),
  revertedAt: tstz('revertedAt'),
});

export type DataFixAudit = typeof dataFixAudit.$inferSelect;
export type NewDataFixAudit = typeof dataFixAudit.$inferInsert;

/** Backfill and seed runs (PLAN §6.9). */
export const migrationRun = pgTable('MigrationRun', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  startedAt: tstz('startedAt').notNull().defaultNow(),
  finishedAt: tstz('finishedAt'),
  rowsAffected: bigint('rowsAffected', { mode: 'number' }),
  checksumBefore: text('checksumBefore'),
  checksumAfter: text('checksumAfter'),
  notes: jsonb('notes').$type<JsonObject>(),
});

export type MigrationRun = typeof migrationRun.$inferSelect;
export type NewMigrationRun = typeof migrationRun.$inferInsert;

/** Same shape as "ModFavorite" (ids preserved) + why/when it was archived (backfill B5). */
export const modFavoriteArchive = pgTable('ModFavoriteArchive', {
  id: integer('id').primaryKey(),
  createdAt: ts3('createdAt').notNull(),
  updatedAt: ts3('updatedAt').notNull(),
  userId: integer('userId'),
  modId: integer('modId'),
  notify: boolean('notify').notNull().default(true),
  archivedAt: tstz('archivedAt').notNull().defaultNow(),
  reason: text('reason').notNull(),
});

export type ModFavoriteArchive = typeof modFavoriteArchive.$inferSelect;
