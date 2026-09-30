/**
 * Bulk recategorisation (PLAN T0-06, §7.4 "Admin": suggestions from keyword rules, always with
 * human confirmation). `POST /admin/recategorize`:
 *
 * - `{ dryRun: true }` (default) or no `changes`: returns suggestions only. For every live mod or
 *   library (builds keep their build categories) the text — name, manifest id, short description
 *   and the first 4 000 characters of the description — is scored against the keyword rules of
 *   each v2 category; the best category is suggested when it differs from the current one (or the
 *   current one is retired/missing) with a confidence in 0..1 and the matched keywords as the
 *   reason. Curated tags whose name or slug appear in the text are suggested alongside (≤ 5).
 * - `{ dryRun: false, changes: [...] }`: applies the confirmed changes (≤ 500) in one transaction:
 *   `Mod.categoryId` (and the tags when given), one `AuditLog` row and one `mod.updated` event per
 *   changed mod, then the listings and the mod pages are purged. Unknown or retired categories,
 *   build categories on mods (and the reverse) and unknown tags are refused (422) before anything
 *   is written.
 *
 * A one-off LLM pass (WP-84) can produce the same `changes` array; it is applied through here.
 */
import type { RecategorizeBody, RecategorizeResultDTO } from '@sotf/contracts/admin';
import type { ModRefDTO } from '@sotf/contracts/common';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import type { CatalogConfig } from '../catalog/media.ts';
import { getSnapshot } from '../catalog/snapshot.ts';
import { intArray, query } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { assertStaff } from '../moderation/guard.ts';
import { setModTags } from '../publishing/listing.ts';
import { activeCategoriesBySlug, afterRecategorize, tagIdsBySlug } from './taxonomy.ts';

type RecategorizeInput = z.output<typeof RecategorizeBody>;
type RecategorizeResult = z.infer<typeof RecategorizeResultDTO>;
type Suggestion = RecategorizeResult['suggestions'][number];

/** Keyword rules per v2 category slug (lowercase, accent-free words or short phrases). */
export const CATEGORY_RULES: Readonly<Record<string, readonly string[]>> = {
  'quality-of-life': [
    'quality of life',
    'qol',
    'auto',
    'automatic',
    'convenience',
    'stack',
    'storage',
    'inventory',
    'pickup',
    'fix',
    'tweak',
    'faster',
    'skip',
    'map',
    'minimap',
    'save',
  ],
  gameplay: [
    'difficulty',
    'hardcore',
    'balance',
    'survival',
    'hunger',
    'thirst',
    'stamina',
    'damage',
    'enemy',
    'enemies',
    'cannibal',
    'mutant',
    'spawn rate',
    'loot',
    'crafting',
    'realism',
    'weather',
    'season',
  ],
  building: [
    'build',
    'building',
    'construction',
    'base',
    'wall',
    'structure',
    'blueprint',
    'log',
    'furniture',
    'defense',
  ],
  companions: ['kelvin', 'virginia', 'companion', 'follower', 'npc', 'ally', 'pet', 'dog'],
  'weapons-gear': [
    'weapon',
    'weapons',
    'gun',
    'rifle',
    'shotgun',
    'pistol',
    'bow',
    'arrow',
    'ammo',
    'armor',
    'armour',
    'gear',
    'tool',
    'axe',
    'knife',
    'katana',
    'spear',
  ],
  'vehicles-movement': [
    'vehicle',
    'car',
    'golf cart',
    'knight v',
    'glider',
    'hang glider',
    'zipline',
    'fly',
    'flying',
    'movement',
    'sprint',
    'jump',
    'climb',
    'teleport',
    'swim',
  ],
  'model-swap': ['model', 'skin', 'texture', 'replace', 'replacer', 'outfit', 'cosmetic', 'reskin', 'swap'],
  'ui-hud': ['ui', 'hud', 'interface', 'overlay', 'indicator', 'crosshair', 'compass', 'health bar', 'menu ui', 'font'],
  'menus-sandbox': [
    'mod menu',
    'menu',
    'cheat',
    'cheats',
    'god mode',
    'noclip',
    'spawner',
    'spawn item',
    'sandbox',
    'creative',
    'trainer',
    'console',
    'commands',
  ],
  'multiplayer-servers': [
    'multiplayer',
    'coop',
    'co-op',
    'server',
    'dedicated',
    'host',
    'players',
    'admin tools',
    'lobby',
    'pvp',
  ],
  library: ['library', 'api', 'framework', 'dependency', 'loader', 'core', 'lib', 'sdk', 'utility library'],
};

export const MAX_SUGGESTIONS = 300;
const MAX_TAG_SUGGESTIONS = 5;

function normalise(text: string): string {
  return ` ${text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()} `;
}

function contains(haystack: string, keyword: string): boolean {
  return haystack.includes(` ${normalise(keyword).trim()} `);
}

export interface ScoredCategory {
  slug: string;
  matched: string[];
  score: number;
}

/**
 * Scores the text against every rule. Name and manifest-id matches weigh 3, short description 2,
 * description 1. Returns the categories with at least one match, best first.
 */
export function scoreCategories(parts: { title: string; short: string; body: string }): ScoredCategory[] {
  const title = normalise(parts.title);
  const short = normalise(parts.short);
  const body = normalise(parts.body);
  const out: ScoredCategory[] = [];
  for (const [slug, keywords] of Object.entries(CATEGORY_RULES)) {
    let score = 0;
    const matched: string[] = [];
    for (const keyword of keywords) {
      const weight = contains(title, keyword) ? 3 : contains(short, keyword) ? 2 : contains(body, keyword) ? 1 : 0;
      if (weight > 0) {
        score += weight;
        matched.push(keyword);
      }
    }
    if (score > 0) out.push({ slug, matched, score });
  }
  return out.sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug));
}

/** Confidence of the best category: its share of the total score, damped for weak evidence. */
export function confidenceOf(scored: readonly ScoredCategory[]): number {
  const [best, second] = scored;
  if (!best) return 0;
  const total = scored.reduce((sum, s) => sum + s.score, 0);
  const share = best.score / total;
  const strength = Math.min(1, best.score / 6);
  const margin = second ? Math.min(1, (best.score - second.score) / best.score + 0.5) : 1;
  return Math.round(share * strength * margin * 100) / 100;
}

interface ModTextRow {
  id: number;
  manifestId: string;
  name: string;
  shortDescription: string | null;
  body: string | null;
  type: string | null;
  categorySlug: string | null;
  categoryRetired: boolean | null;
  tagSlugs: string[] | null;
}

async function suggest(ctx: Ctx, config: CatalogConfig): Promise<Suggestion[]> {
  const [mods, tags, snapshot] = await Promise.all([
    query<ModTextRow>(
      ctx.db,
      sql`SELECT m."id", m."mod_id" AS "manifestId", m."name", m."shortDescription",
                 left(coalesce(m."descriptionMd", m."description", ''), 4000) AS "body", m."type",
                 c."slug" AS "categorySlug", (c."retiredAt" IS NOT NULL) AS "categoryRetired",
                 ARRAY(SELECT t."slug" FROM "_ModToTag" mt JOIN "Tag" t ON t."id" = mt."B" WHERE mt."A" = m."id") AS "tagSlugs"
            FROM "Mod" m
            LEFT JOIN "Category" c ON c."id" = m."categoryId"
           WHERE m."status" IN ('published', 'pending', 'unlisted', 'archived')
             AND coalesce(m."type", 'Mod') <> 'Build' AND m."userId" IS NOT NULL
           ORDER BY m."id"`,
    ),
    query<{ slug: string; name: string }>(ctx.db, sql`SELECT "slug", "name" FROM "Tag" WHERE "isCurated"`),
    getSnapshot(ctx, config),
  ]);
  const categories = await activeCategoriesBySlug(ctx.db);
  const out: Suggestion[] = [];
  for (const m of mods) {
    const ref: ModRefDTO | undefined = snapshot.byId.get(m.id)?.ref;
    if (!ref) continue;
    const parts = { title: `${m.name} ${m.manifestId}`, short: m.shortDescription ?? '', body: m.body ?? '' };
    const scored = scoreCategories(parts).filter((s) => categories.get(s.slug)?.kind === 'mod');
    const current = m.categorySlug;
    const currentActive = current !== null && m.categoryRetired !== true;
    // Libraries are libraries whatever their text says.
    const best = m.type === 'Library' ? { slug: 'library', matched: ['type: library'], score: 6 } : scored[0];
    if (!best || !categories.has(best.slug)) continue;
    const resolvedCurrent = current === null ? null : (categories.get(current)?.slug ?? null);
    if (currentActive && resolvedCurrent === best.slug) continue;
    const text = normalise(`${parts.title} ${parts.short} ${parts.body}`);
    const existing = new Set(m.tagSlugs ?? []);
    const suggestedTags = tags
      .filter((t) => !existing.has(t.slug) && (contains(text, t.slug.replaceAll('-', ' ')) || contains(text, t.name)))
      .map((t) => t.slug)
      .slice(0, MAX_TAG_SUGGESTIONS);
    const confidence = m.type === 'Library' ? 0.95 : confidenceOf(scored);
    out.push({
      mod: ref,
      currentCategory: current,
      currentTags: [...existing].sort(),
      suggestedCategory: best.slug,
      suggestedTags,
      // A mod without an active category gets a suggestion even with weak evidence.
      confidence: currentActive ? confidence : Math.max(confidence, 0.1),
      reason: `keywords: ${best.matched.slice(0, 6).join(', ')}${currentActive ? '' : ' (current category retired or missing)'}`,
    });
  }
  return out.sort((a, b) => b.confidence - a.confidence || a.mod.id - b.mod.id).slice(0, MAX_SUGGESTIONS);
}

interface CurrentRow {
  id: number;
  userId: number | null;
  type: string | null;
  categoryId: number | null;
  categorySlug: string | null;
  isNSFW: boolean;
  tagSlugs: string[] | null;
}

/** `POST /admin/recategorize`. */
export async function recategorize(
  ctx: Ctx,
  config: CatalogConfig,
  input: RecategorizeInput,
): Promise<RecategorizeResult> {
  await assertStaff(ctx, 'admin.taxonomy');
  const changes = input.changes ?? [];
  if (input.dryRun || changes.length === 0) return { suggestions: await suggest(ctx, config), applied: 0 };

  const ids = changes.map((c) => c.modId);
  if (new Set(ids).size !== ids.length) {
    throw errors.validation('Each mod may appear only once', [
      { path: 'changes', code: 'duplicate', message: 'duplicate modId' },
    ]);
  }
  const applied = await ctx.db.transaction(async (tx) => {
    const categories = await activeCategoriesBySlug(tx);
    const tagIds = await tagIdsBySlug(tx, [...new Set(changes.flatMap((c) => c.tagSlugs ?? []))]);
    const current = await query<CurrentRow>(
      tx,
      sql`SELECT m."id", m."userId", m."type", m."categoryId", c."slug" AS "categorySlug", m."isNSFW",
                 ARRAY(SELECT t."slug" FROM "_ModToTag" mt JOIN "Tag" t ON t."id" = mt."B" WHERE mt."A" = m."id") AS "tagSlugs"
            FROM "Mod" m LEFT JOIN "Category" c ON c."id" = m."categoryId"
           WHERE m."id" = ANY(${intArray(ids)})
           FOR UPDATE OF m`,
    );
    const byId = new Map(current.map((r) => [r.id, r]));
    // Validate everything before writing anything.
    const plan = changes.map((change, index) => {
      const row = byId.get(change.modId);
      if (!row) {
        throw errors.validation('Unknown mod', [
          { path: `changes.${index}.modId`, code: 'not_found', message: 'no such mod' },
        ]);
      }
      const category = categories.get(change.categorySlug);
      if (!category) {
        throw errors.validation('Unknown or retired category', [
          { path: `changes.${index}.categorySlug`, code: 'invalid_category', message: change.categorySlug },
        ]);
      }
      const isBuild = row.type === 'Build';
      if ((category.kind === 'build') !== isBuild) {
        throw errors.validation('Builds take build categories and mods take mod categories', [
          { path: `changes.${index}.categorySlug`, code: 'kind_mismatch', message: change.categorySlug },
        ]);
      }
      const tags = change.tagSlugs?.map((slug, t) => {
        const id = tagIds.get(slug);
        if (id === undefined) {
          throw errors.validation('Unknown tag', [
            { path: `changes.${index}.tagSlugs.${t}`, code: 'invalid_tag', message: slug },
          ]);
        }
        return id;
      });
      return { row, category, tags, tagSlugs: change.tagSlugs };
    });

    const now = ctx.clock.now().toISOString();
    const touched: number[] = [];
    const slugs = new Set<string>();
    for (const { row, category, tags, tagSlugs } of plan) {
      const categoryChanged = row.categoryId !== category.id;
      const tagsChanged =
        tagSlugs !== undefined &&
        [...new Set(tagSlugs)].sort().join(',') !== [...new Set(row.tagSlugs ?? [])].sort().join(',');
      if (!categoryChanged && !tagsChanged) continue;
      if (categoryChanged) {
        await tx.execute(
          sql`UPDATE "Mod" SET "categoryId" = ${category.id}, "updatedAt" = ${now}::timestamptz AT TIME ZONE 'UTC'
               WHERE "id" = ${row.id}`,
        );
      }
      if (tagsChanged && tags) await setModTags(tx, row.id, tags);
      await recordAudit(tx, ctx, {
        action: 'mod.recategorize',
        targetType: 'mod',
        targetId: row.id,
        before: { category: row.categorySlug, tags: row.tagSlugs ?? [] },
        after: { category: category.slug, tags: tagsChanged ? tagSlugs : (row.tagSlugs ?? []) },
      });
      if (row.userId !== null) {
        await ctx.jobs.emitNew(
          tx,
          'mod.updated',
          {
            modId: row.id,
            authorId: row.userId,
            kind: row.type === 'Build' ? 'build' : row.type === 'Library' ? 'library' : 'mod',
            categorySlug: category.slug,
            fields: [...(categoryChanged ? ['category'] : []), ...(tagsChanged ? ['tags'] : [])],
          },
          { actorId: ctx.actor?.userId ?? null },
        );
      }
      touched.push(row.id);
      if (row.categorySlug) slugs.add(row.categorySlug);
      slugs.add(category.slug);
    }
    if (touched.length > 0) await afterRecategorize(ctx, tx, touched, [...slugs]);
    return touched.length;
  });
  ctx.caches?.invalidate(['list:mods', 'list:builds', ...ids.map((id) => `mod:${id}`)]);
  return { suggestions: [], applied };
}
