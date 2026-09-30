/**
 * Taxonomy administration (PLAN T0-06, §7.4 "Admin": categories and tags). 👑 admin with a
 * session younger than 12 h; every write appends an `AuditLog` row in its transaction, evicts the
 * catalog snapshot (`NOTIFY cache`) and purges the listings, hubs, sitemap and search index.
 *
 * Storage (legacy tables + v2 columns of 0009): `"Category"."name"`/`"Tag"."name"` keep the
 * English name (legacy clients read them), translations live in `"i18n"`
 * (`{ "<BCP-47>": { name, description } }`, descriptions preserved on edit), `"legacySlugs"` lets
 * retired slugs resolve, `"hubIntro"` holds the per-locale editorial intro (keyed by URL locale).
 *
 * - Renaming a category's slug keeps the old slug in `legacySlugs`, so old hub URLs still resolve.
 * - Categories are never deleted: `DELETE` retires them (`retiredAt`) once no live mod uses them
 *   (recategorise first, `POST /admin/recategorize`).
 * - Deleting a tag detaches it from every mod (the `_ModToTag` rows) in the same transaction.
 */
import type {
  AdminCategoryDTO,
  AdminCategoryListDTO,
  AdminTagDTO,
  AdminTagListDTO,
  CategoryInputBody,
  TagInputBody,
} from '@sotf/contracts/admin';
import { LOCALE_BCP47, LOCALES, type Locale } from '@sotf/contracts/common';
import type { Executor, Transaction } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { localizedNames, taxonomyKey } from '../catalog/snapshot.ts';
import { query, queryOne, sqlState, toDate } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { assertStaff } from '../moderation/guard.ts';
import { textArray } from './sql.ts';

type Category = z.infer<typeof AdminCategoryDTO>;
type Tag = z.infer<typeof AdminTagDTO>;
type CategoryInput = z.output<typeof CategoryInputBody>;
type TagInput = z.output<typeof TagInputBody>;

const UNIQUE_VIOLATION = '23505';

type I18nMap = Record<string, { name?: string; description?: string } | undefined>;

interface CategoryRow {
  id: number;
  slug: string;
  name: string;
  type: string | null;
  icon: string | null;
  sortOrder: number;
  i18n: I18nMap | null;
  legacySlugs: string[] | null;
  hubIntro: Record<string, string> | null;
  retiredAt: Date | string | null;
  count: string | number | null;
}

interface TagRow {
  id: number;
  slug: string;
  name: string;
  description: string;
  group: string | null;
  i18n: I18nMap | null;
  isCurated: boolean;
  sortOrder: number;
  count: string | number | null;
}

const CATEGORY_COLUMNS = sql.raw(
  `c."id", c."slug", c."name", c."type", c."icon", c."sortOrder", c."i18n", c."legacySlugs", c."hubIntro", c."retiredAt"`,
);
const TAG_COLUMNS = sql.raw(
  `t."id", t."slug", t."name", t."description", t."group", t."i18n", t."isCurated", t."sortOrder"`,
);

function iconName(icon: string | null): string | null {
  if (!icon) return null;
  return icon.startsWith('lucide:') ? icon.slice('lucide:'.length) : icon;
}

function storedIcon(icon: string | null): string | null {
  const value = icon?.trim() ?? '';
  if (value === '') return null;
  return value.includes(':') ? value : `lucide:${value}`;
}

function categoryDto(r: CategoryRow): Category {
  const names = localizedNames(r.i18n as never);
  return {
    id: r.id,
    slug: r.slug,
    kind: r.type === 'Build' ? 'build' : 'mod',
    nameKey: taxonomyKey('category', r.slug),
    name: names.en ?? r.name,
    names,
    icon: iconName(r.icon),
    sortOrder: r.sortOrder,
    legacySlugs: r.legacySlugs ?? [],
    count: Number(r.count ?? 0),
    retiredAt: toDate(r.retiredAt)?.toISOString() ?? null,
    hubIntro: hubIntroRead(r.hubIntro),
  };
}

/** Stored hub intro (keyed by URL locale) as `LocalizedNames`, unknown keys dropped. */
function hubIntroRead(value: Record<string, string> | null): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const locale of LOCALES) {
    const text = value?.[locale];
    if (typeof text === 'string' && text !== '') out[locale] = text;
  }
  return out;
}

function tagDto(r: TagRow): Tag {
  const names = localizedNames(r.i18n as never);
  return {
    id: r.id,
    slug: r.slug,
    nameKey: taxonomyKey('tag', r.slug),
    name: names.en ?? r.name,
    names,
    group: r.group,
    isCurated: r.isCurated,
    count: Number(r.count ?? 0),
    description: r.description ?? '',
    sortOrder: r.sortOrder,
  };
}

/**
 * Merges the edited names into the stored i18n map (keys are BCP-47: `pt-BR`, `zh-Hans`), keeping
 * the descriptions and any locale the input does not mention.
 */
function mergeNames(stored: I18nMap | null, englishName: string, names: Partial<Record<Locale, string>>): I18nMap {
  const out: I18nMap = { ...(stored ?? {}) };
  const all: Partial<Record<Locale, string>> = { ...names, en: names.en?.trim() || englishName };
  for (const locale of LOCALES) {
    const key = LOCALE_BCP47[locale];
    const name = all[locale]?.trim();
    const current = out[key] ?? {};
    if (name) out[key] = { ...current, name };
    else if (current.name !== undefined) {
      const { name: _drop, ...rest } = current;
      out[key] = rest;
    }
  }
  return out;
}

function hubIntroOf(value: Partial<Record<Locale, string>>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const locale of LOCALES) {
    const text = value[locale]?.trim();
    if (text) out[locale] = text.slice(0, 4000);
  }
  return out;
}

async function afterTaxonomyWrite(ctx: Ctx, tx: Executor, slugs: readonly string[], reason: string): Promise<void> {
  const tags = [...slugs.map((s) => `category:${s}`), 'list:mods', 'list:builds', 'home', 'sitemap', 'search-index'];
  await publishCacheInvalidation(tx, tags);
  await purge(ctx.jobs, tags, reason, { tx });
}

// -----------------------------------------------------------------------------------------------
// Categories
// -----------------------------------------------------------------------------------------------

async function loadCategories(exec: Executor, id?: number): Promise<CategoryRow[]> {
  const where = id === undefined ? sql`TRUE` : sql`c."id" = ${id}`;
  return query<CategoryRow>(
    exec,
    sql`SELECT ${CATEGORY_COLUMNS},
               (SELECT count(*) FROM "Mod" m WHERE m."categoryId" = c."id" AND m."status" = 'published') AS "count"
          FROM "Category" c
         WHERE ${where}
         ORDER BY (c."retiredAt" IS NOT NULL), c."type" = 'Build', c."sortOrder", c."id"`,
  );
}

/** `GET /admin/categories`: every category, retired ones last. */
export async function listAdminCategories(ctx: Ctx): Promise<z.infer<typeof AdminCategoryListDTO>> {
  await assertStaff(ctx, 'admin.taxonomy');
  return { items: (await loadCategories(ctx.db)).map(categoryDto) };
}

async function assertSlugsFree(tx: Executor, input: CategoryInput, exceptId: number | null): Promise<void> {
  // Legacy slugs are expected to name retired categories (that is how they resolve), so only the
  // primary slug must be globally unique; legacy slugs must not shadow another active category.
  const slugs = [input.slug, ...input.legacySlugs];
  const clash = await queryOne<{ slug: string }>(
    tx,
    sql`SELECT c."slug" FROM "Category" c
         WHERE (${exceptId}::int IS NULL OR c."id" <> ${exceptId}::int)
           AND (c."slug" = ${input.slug}
                OR (c."retiredAt" IS NULL AND c."slug" = ANY(${textArray(input.legacySlugs)}))
                OR (c."retiredAt" IS NULL AND c."legacySlugs" && ${textArray(slugs)}))
         LIMIT 1`,
  );
  if (clash) throw errors.conflict(`The slug or a legacy slug is already used by the category "${clash.slug}"`);
}

function cleanLegacySlugs(list: readonly string[], slug: string): string[] {
  return [...new Set(list.map((s) => s.trim().toLowerCase()).filter((s) => s !== '' && s !== slug))].sort();
}

function categoryAudit(r: CategoryRow): Record<string, unknown> {
  return {
    slug: r.slug,
    name: r.name,
    kind: r.type === 'Build' ? 'build' : 'mod',
    icon: r.icon,
    sortOrder: r.sortOrder,
    legacySlugs: r.legacySlugs ?? [],
    retiredAt: r.retiredAt,
  };
}

/** `POST /admin/categories`. */
export async function createCategory(ctx: Ctx, input: CategoryInput): Promise<Category> {
  await assertStaff(ctx, 'admin.taxonomy');
  const slug = input.slug.trim().toLowerCase();
  const legacySlugs = cleanLegacySlugs(input.legacySlugs, slug);
  const now = ctx.clock.now().toISOString();
  try {
    return await ctx.db.transaction(async (tx) => {
      await assertSlugsFree(tx, { ...input, slug, legacySlugs }, null);
      const i18n = mergeNames(null, input.name, input.names);
      const created = await queryOne<{ id: number }>(
        tx,
        sql`INSERT INTO "Category" ("name", "slug", "description", "type", "icon", "sortOrder", "i18n", "legacySlugs",
                                    "hubIntro", "createdAt", "updatedAt")
            VALUES (${input.name}, ${slug}, '', ${input.kind === 'build' ? 'Build' : 'Mod'}, ${storedIcon(input.icon)},
                    ${input.sortOrder}, ${JSON.stringify(i18n)}::jsonb,
                    ${textArray(legacySlugs)},
                    ${JSON.stringify(hubIntroOf(input.hubIntro))}::jsonb,
                    ${now}::timestamptz AT TIME ZONE 'UTC', ${now}::timestamptz AT TIME ZONE 'UTC')
            RETURNING "id"`,
      );
      if (!created) throw new Error('Category insert returned no row');
      const [row] = await loadCategories(tx, created.id);
      if (!row) throw new Error('Category vanished after insert');
      await recordAudit(tx, ctx, {
        action: 'category.create',
        targetType: 'category',
        targetId: row.id,
        after: categoryAudit(row),
      });
      await afterTaxonomyWrite(ctx, tx, [slug], 'category created');
      return categoryDto(row);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A category with this slug already exists');
    throw error;
  }
}

/** `PUT /admin/categories/:id` (a new slug keeps the old one as a legacy slug). */
export async function updateCategory(ctx: Ctx, id: number, input: CategoryInput): Promise<Category> {
  await assertStaff(ctx, 'admin.taxonomy');
  const slug = input.slug.trim().toLowerCase();
  const now = ctx.clock.now().toISOString();
  try {
    return await ctx.db.transaction(async (tx) => {
      const [before] = await query<CategoryRow>(
        tx,
        sql`SELECT ${CATEGORY_COLUMNS}, 0 AS "count" FROM "Category" c WHERE c."id" = ${id} FOR UPDATE`,
      );
      if (!before) throw errors.notFound('Category');
      const legacySlugs = cleanLegacySlugs(
        before.slug !== slug ? [...input.legacySlugs, before.slug] : input.legacySlugs,
        slug,
      );
      await assertSlugsFree(tx, { ...input, slug, legacySlugs }, id);
      const i18n = mergeNames(before.i18n, input.name, input.names);
      await tx.execute(
        sql`UPDATE "Category" SET "name" = ${input.name}, "slug" = ${slug},
                   "type" = ${input.kind === 'build' ? 'Build' : 'Mod'}, "icon" = ${storedIcon(input.icon)},
                   "sortOrder" = ${input.sortOrder}, "i18n" = ${JSON.stringify(i18n)}::jsonb,
                   "legacySlugs" = ${textArray(legacySlugs)},
                   "hubIntro" = ${JSON.stringify(hubIntroOf(input.hubIntro))}::jsonb,
                   "updatedAt" = ${now}::timestamptz AT TIME ZONE 'UTC'
             WHERE "id" = ${id}`,
      );
      const [after] = await loadCategories(tx, id);
      if (!after) throw errors.notFound('Category');
      await recordAudit(tx, ctx, {
        action: 'category.update',
        targetType: 'category',
        targetId: id,
        before: categoryAudit(before),
        after: categoryAudit(after),
      });
      await afterTaxonomyWrite(ctx, tx, [...new Set([before.slug, slug])], 'category updated');
      return categoryDto(after);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A category with this slug already exists');
    throw error;
  }
}

/** `DELETE /admin/categories/:id`: retires it (soft) once no live mod uses it. */
export async function retireCategory(ctx: Ctx, id: number): Promise<void> {
  await assertStaff(ctx, 'admin.taxonomy');
  const now = ctx.clock.now().toISOString();
  await ctx.db.transaction(async (tx) => {
    const [before] = await query<CategoryRow>(
      tx,
      sql`SELECT ${CATEGORY_COLUMNS}, 0 AS "count" FROM "Category" c WHERE c."id" = ${id} FOR UPDATE`,
    );
    if (!before) throw errors.notFound('Category');
    if (before.retiredAt !== null) return;
    const used = await queryOne<{ n: number }>(
      tx,
      sql`SELECT count(*)::int AS "n" FROM "Mod" WHERE "categoryId" = ${id} AND "status" <> 'removed'`,
    );
    if ((used?.n ?? 0) > 0) {
      throw errors.conflict(`${used?.n} mods still use this category: recategorise them first`);
    }
    await tx.execute(
      sql`UPDATE "Category" SET "retiredAt" = ${now}::timestamptz AT TIME ZONE 'UTC',
                 "updatedAt" = ${now}::timestamptz AT TIME ZONE 'UTC'
           WHERE "id" = ${id}`,
    );
    await recordAudit(tx, ctx, {
      action: 'category.retire',
      targetType: 'category',
      targetId: id,
      before: categoryAudit(before),
      after: { retiredAt: now },
    });
    await afterTaxonomyWrite(ctx, tx, [before.slug], 'category retired');
  });
}

// -----------------------------------------------------------------------------------------------
// Tags
// -----------------------------------------------------------------------------------------------

async function loadTags(exec: Executor, id?: number): Promise<TagRow[]> {
  const where = id === undefined ? sql`TRUE` : sql`t."id" = ${id}`;
  return query<TagRow>(
    exec,
    sql`SELECT ${TAG_COLUMNS},
               (SELECT count(*) FROM "_ModToTag" mt JOIN "Mod" m ON m."id" = mt."A"
                 WHERE mt."B" = t."id" AND m."status" = 'published') AS "count"
          FROM "Tag" t
         WHERE ${where}
         ORDER BY t."group" NULLS LAST, t."sortOrder", t."slug"`,
  );
}

function tagAudit(r: TagRow): Record<string, unknown> {
  return { slug: r.slug, name: r.name, group: r.group, isCurated: r.isCurated, sortOrder: r.sortOrder };
}

/** `GET /admin/tags`: every tag (curated and free). */
export async function listAdminTags(ctx: Ctx): Promise<z.infer<typeof AdminTagListDTO>> {
  await assertStaff(ctx, 'admin.taxonomy');
  return { items: (await loadTags(ctx.db)).map(tagDto) };
}

/** `POST /admin/tags` (admin-created tags are curated). */
export async function createTag(ctx: Ctx, input: TagInput): Promise<Tag> {
  await assertStaff(ctx, 'admin.taxonomy');
  const now = ctx.clock.now().toISOString();
  try {
    return await ctx.db.transaction(async (tx) => {
      const i18n = mergeNames(null, input.name, input.names);
      const created = await queryOne<{ id: number }>(
        tx,
        sql`INSERT INTO "Tag" ("name", "slug", "description", "group", "i18n", "isCurated", "sortOrder", "createdAt", "updatedAt")
            VALUES (${input.name}, ${input.slug}, ${input.description}, ${input.group?.trim() || null},
                    ${JSON.stringify(i18n)}::jsonb, true, ${input.sortOrder},
                    ${now}::timestamptz AT TIME ZONE 'UTC', ${now}::timestamptz AT TIME ZONE 'UTC')
            RETURNING "id"`,
      );
      if (!created) throw new Error('Tag insert returned no row');
      const [row] = await loadTags(tx, created.id);
      if (!row) throw new Error('Tag vanished after insert');
      await recordAudit(tx, ctx, { action: 'tag.create', targetType: 'tag', targetId: row.id, after: tagAudit(row) });
      await afterTaxonomyWrite(ctx, tx, [], 'tag created');
      return tagDto(row);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A tag with this slug already exists');
    throw error;
  }
}

/** `PUT /admin/tags/:id`. */
export async function updateTag(ctx: Ctx, id: number, input: TagInput): Promise<Tag> {
  await assertStaff(ctx, 'admin.taxonomy');
  const now = ctx.clock.now().toISOString();
  try {
    return await ctx.db.transaction(async (tx) => {
      const [before] = await query<TagRow>(
        tx,
        sql`SELECT ${TAG_COLUMNS}, 0 AS "count" FROM "Tag" t WHERE t."id" = ${id} FOR UPDATE`,
      );
      if (!before) throw errors.notFound('Tag');
      const i18n = mergeNames(before.i18n, input.name, input.names);
      await tx.execute(
        sql`UPDATE "Tag" SET "name" = ${input.name}, "slug" = ${input.slug}, "description" = ${input.description},
                   "group" = ${input.group?.trim() || null}, "i18n" = ${JSON.stringify(i18n)}::jsonb, "isCurated" = true,
                   "sortOrder" = ${input.sortOrder}, "updatedAt" = ${now}::timestamptz AT TIME ZONE 'UTC'
             WHERE "id" = ${id}`,
      );
      const [after] = await loadTags(tx, id);
      if (!after) throw errors.notFound('Tag');
      await recordAudit(tx, ctx, {
        action: 'tag.update',
        targetType: 'tag',
        targetId: id,
        before: tagAudit(before),
        after: tagAudit(after),
      });
      await afterTaxonomyWrite(ctx, tx, [], 'tag updated');
      return tagDto(after);
    });
  } catch (error) {
    if (sqlState(error) === UNIQUE_VIOLATION) throw errors.conflict('A tag with this slug already exists');
    throw error;
  }
}

/** `DELETE /admin/tags/:id`: detaches it from every mod, then deletes it. */
export async function deleteTag(ctx: Ctx, id: number): Promise<void> {
  await assertStaff(ctx, 'admin.taxonomy');
  await ctx.db.transaction(async (tx) => {
    const [before] = await query<TagRow>(
      tx,
      sql`SELECT ${TAG_COLUMNS}, 0 AS "count" FROM "Tag" t WHERE t."id" = ${id} FOR UPDATE`,
    );
    if (!before) throw errors.notFound('Tag');
    const detached = await query<{ modId: number }>(
      tx,
      sql`DELETE FROM "_ModToTag" WHERE "B" = ${id} RETURNING "A" AS "modId"`,
    );
    await tx.execute(sql`DELETE FROM "Tag" WHERE "id" = ${id}`);
    await recordAudit(tx, ctx, {
      action: 'tag.delete',
      targetType: 'tag',
      targetId: id,
      before: { ...tagAudit(before), modIds: detached.map((d) => d.modId).slice(0, 500) },
    });
    const modTags = detached.map((d) => `mod:${d.modId}`);
    await publishCacheInvalidation(tx, [`tag:${before.slug}`, ...modTags]);
    await purge(ctx.jobs, [`tag:${before.slug}`, ...modTags], 'tag deleted', { tx });
    await afterTaxonomyWrite(ctx, tx, [], 'tag deleted');
  });
}

// -----------------------------------------------------------------------------------------------
// Shared with recategorisation
// -----------------------------------------------------------------------------------------------

export interface ActiveCategory {
  id: number;
  slug: string;
  kind: 'mod' | 'build';
}

/** Active (not retired) categories by slug, legacy slugs resolving to their active category. */
export async function activeCategoriesBySlug(exec: Executor): Promise<Map<string, ActiveCategory>> {
  const list = await query<{ id: number; slug: string; type: string | null; legacySlugs: string[] | null }>(
    exec,
    sql`SELECT "id", "slug", "type", "legacySlugs" FROM "Category" WHERE "retiredAt" IS NULL`,
  );
  const out = new Map<string, ActiveCategory>();
  for (const c of list) {
    const entry: ActiveCategory = { id: c.id, slug: c.slug, kind: c.type === 'Build' ? 'build' : 'mod' };
    for (const legacy of c.legacySlugs ?? []) if (!out.has(legacy)) out.set(legacy, entry);
  }
  for (const c of list) out.set(c.slug, { id: c.id, slug: c.slug, kind: c.type === 'Build' ? 'build' : 'mod' });
  return out;
}

/** Tag ids by slug (only existing tags). */
export async function tagIdsBySlug(exec: Executor, slugs: readonly string[]): Promise<Map<string, number>> {
  if (slugs.length === 0) return new Map();
  const list = await query<{ id: number; slug: string }>(
    exec,
    sql`SELECT "id", "slug" FROM "Tag" WHERE "slug" = ANY(${textArray(slugs)})`,
  );
  return new Map(list.map((t) => [t.slug, t.id]));
}

/** Purges the pages of recategorised mods (used by `recategorize`). */
export async function afterRecategorize(
  ctx: Ctx,
  tx: Transaction,
  modIds: readonly number[],
  slugs: readonly string[],
) {
  const tags = [
    ...modIds.map((id) => `mod:${id}`),
    ...slugs.map((s) => `category:${s}`),
    'list:mods',
    'list:builds',
    'home',
    'search-index',
  ];
  await publishCacheInvalidation(tx, tags);
  await purge(ctx.jobs, tags, 'mods recategorised', { tx });
}
