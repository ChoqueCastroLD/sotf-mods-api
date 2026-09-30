/** Automatic translation of the mod short description (PLAN §7.13 T1-25, migrations 2180 and 2230: name, short description and description). */
import { bigint, date, integer, pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { tstz } from '../_columns.ts';
import { mod } from '../legacy/mod.ts';

export const MOD_TRANSLATION_LOCALES = [
  'es',
  'de',
  'fr',
  'it',
  'nl',
  'pl',
  'pt',
  'ru',
  'sv',
  'tr',
  'zh',
  'ja',
] as const;
export type ModTranslationLocale = (typeof MOD_TRANSLATION_LOCALES)[number];
export type ModTranslationSource = 'machine' | 'author';

export const modTranslation = pgTable(
  'ModTranslation',
  {
    modId: integer('modId')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    locale: text('locale').$type<ModTranslationLocale>().notNull(),
    /** Translated short description (null: not translated yet or empty original). */
    shortDescription: text('shortDescription'),
    /** Provenance of `shortDescription`. */
    source: text('source').$type<ModTranslationSource>().notNull().default('machine'),
    /** Hash of the original short description the row was made from (staleness check). */
    sourceHash: text('sourceHash'),
    /** Translated mod name (migration 2230) and its provenance / original hash. */
    name: text('name'),
    nameSource: text('nameSource').$type<ModTranslationSource>(),
    nameHash: text('nameHash'),
    /** Translated full description, Markdown (migration 2230) and its provenance / original hash. */
    description: text('description'),
    descriptionSource: text('descriptionSource').$type<ModTranslationSource>(),
    descriptionHash: text('descriptionHash'),
    model: text('model'),
    createdAt: tstz('createdAt').notNull().defaultNow(),
    updatedAt: tstz('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (t) => [primaryKey({ name: 'ModTranslation_pkey', columns: [t.modId, t.locale] })],
);

export type ModTranslation = typeof modTranslation.$inferSelect;
export type NewModTranslation = typeof modTranslation.$inferInsert;

/** Daily spend of the `translation.mod` job (micro-USD), its budget ledger. */
export const translationUsageDaily = pgTable('TranslationUsageDaily', {
  day: date('day', { mode: 'string' }).primaryKey(),
  requests: integer('requests').notNull().default(0),
  failures: integer('failures').notNull().default(0),
  tokensIn: bigint('tokensIn', { mode: 'number' }).notNull().default(0),
  tokensOut: bigint('tokensOut', { mode: 'number' }).notNull().default(0),
  costMicroUsd: bigint('costMicroUsd', { mode: 'number' }).notNull().default(0),
});

export type TranslationUsageDaily = typeof translationUsageDaily.$inferSelect;
