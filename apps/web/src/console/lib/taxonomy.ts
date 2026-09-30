/**
 * Localized category and tag names for `@sotf/ui/domain` components inside the console (the
 * `taxonomy(nameKey, fallback)` resolver of `DomainI18nBridge`). The source is the public catalogue
 * (`GET /categories?kind=all`, `GET /tags`: `names[locale]` per entry, edge-cached by the API), the
 * same data the public pages use (`components/explore/taxonomy.ts`); there is no `taxonomy`
 * message namespace. While it loads, or if it fails, cards keep the English names.
 */
import type { CategoryDTO, TagDTO } from '@sotf/contracts/catalog';
import type { Locale } from '@sotf/i18n';
import { queryOptions } from '@tanstack/react-query';
import type { z } from 'zod';
import { api } from './api.ts';

type Named = Pick<z.infer<typeof CategoryDTO> | z.infer<typeof TagDTO>, 'nameKey' | 'name' | 'names'>;

export interface TaxonomyNames {
  categories: readonly Named[];
  tags: readonly Named[];
}

/** Taxonomy changes rarely: an hour fresh, kept for the whole session. */
const TAXONOMY_STALE_MS = 60 * 60_000;

export const taxonomyNamesQuery = queryOptions({
  queryKey: ['catalog', 'taxonomy-names'] as const,
  queryFn: async ({ signal }): Promise<TaxonomyNames> => {
    const [categories, tags] = await Promise.all([
      api.catalog.categories({ query: { kind: 'all' } }, { signal }),
      api.catalog.tags({}, { signal }),
    ]);
    return { categories: categories.items, tags: tags.items };
  },
  staleTime: TAXONOMY_STALE_MS,
  gcTime: Number.POSITIVE_INFINITY,
  retry: 1,
});

/** `nameKey` → name in `locale` (English name when the locale has none). */
export function taxonomyResolver(
  data: TaxonomyNames | undefined,
  locale: Locale,
): ((nameKey: string, fallback: string) => string) | undefined {
  if (!data) return undefined;
  const names = new Map<string, string>();
  for (const entry of [...data.categories, ...data.tags]) {
    names.set(entry.nameKey, (entry.names as Partial<Record<string, string>>)[locale] ?? entry.name);
  }
  return (nameKey, fallback) => names.get(nameKey) ?? fallback;
}
