/** Compatibility by game build: Field reports and Patch Radar (PLAN §6.4, §7.10). */
import { bigint, boolean, date, integer, pgTable, primaryKey, real, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { CompatStatus } from '../legacy/mod.ts';
import { modVersion } from '../legacy/mod-version.ts';
import { user } from '../legacy/user.ts';

export const gameBuild = pgTable('GameBuild', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  label: text('label').notNull(),
  steamBuildId: text('steamBuildId'),
  releasedAt: date('releasedAt', { mode: 'string' }).notNull(),
  isBreaking: boolean('isBreaking').notNull().default(false),
  /** Exactly one current build (partial unique index). */
  isCurrent: boolean('isCurrent').notNull().default(false),
  notesMd: text('notesMd'),
  createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type GameBuild = typeof gameBuild.$inferSelect;
export type NewGameBuild = typeof gameBuild.$inferInsert;

export const loaderRelease = pgTable('LoaderRelease', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull().default('RedLoader'),
  version: text('version').notNull(),
  releasedAt: date('releasedAt', { mode: 'string' }),
  url: text('url'),
});

export type LoaderRelease = typeof loaderRelease.$inferSelect;
export type NewLoaderRelease = typeof loaderRelease.$inferInsert;

export const ECOSYSTEM_STATUSES = ['works', 'partial', 'broken', 'unknown'] as const;
export type EcosystemStatusValue = (typeof ECOSYSTEM_STATUSES)[number];

export const ecosystemStatus = pgTable(
  'EcosystemStatus',
  {
    gameBuildId: integer('gameBuildId')
      .notNull()
      .references(() => gameBuild.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    loaderReleaseId: integer('loaderReleaseId')
      .notNull()
      .references(() => loaderRelease.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    status: text('status').$type<EcosystemStatusValue>().notNull(),
    noteMd: text('noteMd'),
    updatedById: integer('updatedById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [primaryKey({ name: 'EcosystemStatus_pkey', columns: [t.gameBuildId, t.loaderReleaseId] })],
);

export type EcosystemStatus = typeof ecosystemStatus.$inferSelect;
export type NewEcosystemStatus = typeof ecosystemStatus.$inferInsert;

export const COMPAT_MODES = ['singleplayer', 'host', 'client', 'dedicated'] as const;
export type CompatMode = (typeof COMPAT_MODES)[number];
export const COMPAT_RESULTS = ['works', 'partial', 'broken'] as const;
export type CompatResult = (typeof COMPAT_RESULTS)[number];

/** A Field report: "does version X work on build Y in mode Z?". One per user/version/build/mode. */
export const compatReport = pgTable('CompatReport', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  userId: integer('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  modVersionId: integer('modVersionId')
    .notNull()
    .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  gameBuildId: integer('gameBuildId')
    .notNull()
    .references(() => gameBuild.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  mode: text('mode').$type<CompatMode>().notNull(),
  result: text('result').$type<CompatResult>().notNull(),
  /** At most 500 characters. */
  note: text('note'),
  otherMods: text('otherMods'),
  weight: real('weight').notNull().default(1),
  status: text('status').notNull().default('visible'),
  acknowledgedAt: tstz('acknowledgedAt'),
  fixedInVersionId: integer('fixedInVersionId').references(() => modVersion.id, {
    onDelete: 'set null',
    onUpdate: 'cascade',
  }),
  createdAt: tstz('createdAt').notNull().defaultNow(),
  updatedAt: tstz('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type CompatReport = typeof compatReport.$inferSelect;
export type NewCompatReport = typeof compatReport.$inferInsert;

export const modVersionCompat = pgTable(
  'ModVersionCompat',
  {
    modVersionId: integer('modVersionId')
      .notNull()
      .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    gameBuildId: integer('gameBuildId')
      .notNull()
      .references(() => gameBuild.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    works: integer('works').notNull().default(0),
    partial: integer('partial').notNull().default(0),
    broken: integer('broken').notNull().default(0),
    weightedScore: real('weightedScore'),
    authorTested: boolean('authorTested').notNull().default(false),
    computedStatus: text('computedStatus').$type<CompatStatus>().notNull().default('untested'),
    updatedAt: tstz('updatedAt'),
  },
  (t) => [primaryKey({ name: 'ModVersionCompat_pkey', columns: [t.modVersionId, t.gameBuildId] })],
);

export type ModVersionCompat = typeof modVersionCompat.$inferSelect;
export type NewModVersionCompat = typeof modVersionCompat.$inferInsert;
