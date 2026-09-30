/** "Category", "Tag" and the implicit Prisma join table "_ModToTag" (A = Mod, B = Tag). */
import { sql } from 'drizzle-orm';
import { boolean, index, integer, jsonb, pgTable, primaryKey, serial, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { ts3 } from '../_columns.ts';
import type { LocalizedNames } from '../_json.ts';
import { mod } from './mod.ts';

export const category = pgTable(
  'Category',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    description: text('description').notNull(),
    /** `Mod` or `Build` (the legacy /api/categories defaults to `Mod`). */
    type: text('type'),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),

    // v2 columns.
    /** `lucide:<name>` or `fk:<name>` (Field kit). */
    icon: text('icon'),
    sortOrder: integer('sortOrder').notNull().default(0),
    i18n: jsonb('i18n').$type<LocalizedNames>().notNull().default({}),
    /** Old slugs (e.g. `qol`) resolving to this category. */
    legacySlugs: text('legacySlugs').array().notNull().default(sql`'{}'::text[]`),
    /** Retired categories resolve to the active category listing their slug in legacySlugs. */
    retiredAt: ts3('retiredAt'),
    hubIntro: jsonb('hubIntro').$type<Partial<Record<string, string>>>().notNull().default({}),
    /** Generated OG card of the category hub in the public bucket (`og/category/…`); null = og-default. */
    ogImageKey: text('ogImageKey'),
  },
  (t) => [uniqueIndex('Category_slug_key').on(t.slug), index('Category_slug_idx').on(t.slug)],
);

export type Category = typeof category.$inferSelect;
export type NewCategory = typeof category.$inferInsert;

export const tag = pgTable(
  'Tag',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    description: text('description').notNull(),
    createdAt: ts3('createdAt').notNull().defaultNow(),
    updatedAt: ts3('updatedAt')
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),

    // v2 columns.
    group: text('group'),
    i18n: jsonb('i18n').$type<LocalizedNames>().notNull().default({}),
    isCurated: boolean('isCurated').notNull().default(true),
    sortOrder: integer('sortOrder').notNull().default(0),
  },
  (t) => [uniqueIndex('Tag_slug_key').on(t.slug)],
);

export type Tag = typeof tag.$inferSelect;
export type NewTag = typeof tag.$inferInsert;

/**
 * Implicit many-to-many of Prisma. Column names stay `A` (= "Mod"."id") and `B` (= "Tag"."id"):
 * TypeScript names equal the database names everywhere except "Mod"."mod_id" (PLAN §2.6).
 */
export const modToTag = pgTable(
  '_ModToTag',
  {
    /** "Mod"."id". */
    A: integer('A')
      .notNull()
      .references(() => mod.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    /** "Tag"."id". */
    B: integer('B')
      .notNull()
      .references(() => tag.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  },
  (t) => [primaryKey({ name: '_ModToTag_AB_pkey', columns: [t.A, t.B] }), index('_ModToTag_B_index').on(t.B)],
);

export type ModToTag = typeof modToTag.$inferSelect;
