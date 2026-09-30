/** Build geometry (T1-06) and official bundles (T1-04). Migrations 2190 and 2191. */
import { bigint, customType, index, integer, jsonb, pgTable, text, unique } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import type { JsonObject } from '../_json.ts';
import { mod } from '../legacy/mod.ts';
import { modVersion } from '../legacy/mod-version.ts';
import { user } from '../legacy/user.ts';
import { kit } from '../v2/community.ts';

const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType() {
    return 'bytea';
  },
});

export const BUILD_GEOMETRY_STATUSES = ['ready', 'empty', 'failed'] as const;
export type BuildGeometryStatus = (typeof BUILD_GEOMETRY_STATUSES)[number];

export const buildGeometry = pgTable('BuildGeometry', {
  modVersionId: integer('modVersionId')
    .primaryKey()
    .references(() => modVersion.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  status: text('status').$type<BuildGeometryStatus>().notNull().default('ready'),
  /** Pieces kept in `geometry` (sampled above the viewer cap). */
  pieces: integer('pieces').notNull().default(0),
  /** Pieces found in the blueprint. */
  totalPieces: integer('totalPieces').notNull().default(0),
  profiles: jsonb('profiles').$type<string[]>().notNull().default([]),
  bounds: jsonb('bounds').$type<JsonObject>(),
  /** Float32 little-endian, 9 values per piece (see `@sotf/contracts/builds`). */
  geometry: bytea('geometry'),
  previewSvg: text('previewSvg'),
  createdAt: tstz('createdAt').notNull().defaultNow(),
});

export type BuildGeometryRow = typeof buildGeometry.$inferSelect;

export const MOD_BUNDLE_STATUSES = ['pending', 'ready', 'failed'] as const;
export type ModBundleStatus = (typeof MOD_BUNDLE_STATUSES)[number];

export const modBundle = pgTable(
  'ModBundle',
  {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    kitId: integer('kitId')
      .notNull()
      .references(() => kit.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    createdById: integer('createdById').references(() => user.id, { onDelete: 'set null', onUpdate: 'cascade' }),
    status: text('status').$type<ModBundleStatus>().notNull().default('pending'),
    statusReason: text('statusReason'),
    storageKey: text('storageKey'),
    bytes: bigint('bytes', { mode: 'number' }),
    sha256: text('sha256'),
    filesCount: integer('filesCount').notNull().default(0),
    contents: jsonb('contents').$type<JsonObject[]>().notNull().default([]),
    fingerprint: text('fingerprint'),
    downloadsCount: integer('downloadsCount').notNull().default(0),
    builtAt: tstz('builtAt'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [
    unique('ModBundle_mod_kit_key').on(t.modId, t.kitId),
    index('ModBundle_modId_idx').on(t.modId),
    index('ModBundle_kitId_idx').on(t.kitId),
  ],
);

export type ModBundleRow = typeof modBundle.$inferSelect;
