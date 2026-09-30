/**
 * Categories and tags (PLAN §5.2 `GET /categories`, `GET /tags`; T0-06 taxonomy).
 *
 * Only active categories are listed (retired ones, e.g. the legacy `qol`, resolve through
 * `legacySlugs` and add their mods to the active category's count). Counts are published,
 * non-NSFW items, as in the listings.
 */
import type { CategoryDTO, TagDTO } from '@sotf/contracts/catalog';
import type { z } from 'zod';
import type { Ctx } from '../kernel/context.ts';
import type { CatalogConfig } from './media.ts';
import { compareCategories, getSnapshot, isListable, taxonomyKey } from './snapshot.ts';

type Category = z.infer<typeof CategoryDTO>;
type Tag = z.infer<typeof TagDTO>;

export async function listCategories(
  ctx: Ctx,
  config: CatalogConfig,
  kind: 'mod' | 'build' | 'all',
): Promise<Category[]> {
  const snapshot = await getSnapshot(ctx, config);
  const counts = new Map<number, number>();
  for (const e of snapshot.entries) {
    if (e.categoryId === null || !isListable(snapshot, e)) continue;
    counts.set(e.categoryId, (counts.get(e.categoryId) ?? 0) + 1);
  }
  return [...snapshot.categories.values()]
    .filter((c) => !c.retired && (kind === 'all' || c.kind === kind))
    .sort(compareCategories)
    .map((c) => ({
      id: c.id,
      slug: c.slug,
      kind: c.kind,
      nameKey: taxonomyKey('category', c.slug),
      name: c.name,
      names: c.names,
      icon: c.icon,
      sortOrder: c.sortOrder,
      legacySlugs: c.legacySlugs,
      count: counts.get(c.id) ?? 0,
    }));
}

export async function listTags(ctx: Ctx, config: CatalogConfig): Promise<Tag[]> {
  const snapshot = await getSnapshot(ctx, config);
  const counts = new Map<number, number>();
  for (const e of snapshot.entries) {
    if (!isListable(snapshot, e)) continue;
    for (const id of e.tagIds) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return [...snapshot.tags.values()]
    .filter((t) => t.isCurated)
    .map((t) => ({
      id: t.id,
      slug: t.slug,
      nameKey: taxonomyKey('tag', t.slug),
      name: t.name,
      names: t.names,
      group: t.group,
      isCurated: t.isCurated,
      count: counts.get(t.id) ?? 0,
    }));
}
