/**
 * `GET /mods` service: the Explore query over the cached snapshot, with the text relevance of
 * `q` from the search domain, cached per normalised query for 30 s (tags `list:mods`,
 * `list:builds`).
 */
import type { ModListDTO } from '@sotf/contracts/catalog';
import type { Ctx } from '../kernel/context.ts';
import { modRelevance } from '../search/search.ts';
import { normalizeQuery } from '../search/text.ts';
import { type ListQuery, runListQuery } from './listing.ts';
import type { CatalogConfig } from './media.ts';
import { getSnapshot } from './snapshot.ts';
import { cached } from './sql.ts';

export const LIST_TTL_MS = 30_000;

/** Stable cache key of a listing query (array filters sorted, `q` normalised). */
export function listCacheKey(query: ListQuery): string {
  const sorted = (list: readonly string[] | undefined) =>
    list && list.length > 0 ? [...list].map((s) => s.toLowerCase()).sort() : undefined;
  return JSON.stringify({
    ...query,
    category: sorted(query.category),
    excludeCategory: sorted(query.excludeCategory),
    tag: sorted(query.tag),
    excludeTag: sorted(query.excludeTag),
    author: query.author?.toLowerCase(),
    q: query.q ? normalizeQuery(query.q) : undefined,
  });
}

export async function listMods(ctx: Ctx, config: CatalogConfig, query: ListQuery): Promise<ModListDTO> {
  return cached<ModListDTO>(
    ctx,
    { name: 'catalog:lists', max: 500, ttlMs: LIST_TTL_MS },
    listCacheKey(query),
    async () => {
      const q = query.q?.trim();
      const [snapshot, relevance] = await Promise.all([
        getSnapshot(ctx, config),
        q ? modRelevance(ctx, config, q) : Promise.resolve(undefined),
      ]);
      const result = runListQuery(snapshot, query, ctx.clock.now(), relevance);
      return {
        value: {
          items: result.items.map((e) => e.card),
          page: result.page,
          pageSize: result.pageSize,
          total: result.total,
          totalPages: result.totalPages,
          facets: result.facets,
        },
        tags: ['list:mods', 'list:builds'],
      };
    },
  );
}
