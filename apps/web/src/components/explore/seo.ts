/**
 * SEO of the listing pages (PLAN §4.2, §4.5): canonical/noindex rules and the
 * `CollectionPage` + `ItemList` graph (`BreadcrumbList` comes from `PageLayout`).
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { type Locale, localizePath, toHreflang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { CollectionPage, WithContext } from 'schema-dts';
import { type ExploreScope, type ExploreState, isFiltered } from './state.ts';

export interface ListingSeo {
  /** Locale-less canonical path (+ `?page=N`). */
  path: string;
  noindex: boolean;
}

/**
 * Only the bare listing and its `?page=N` pages are indexable; any filter, sort or view →
 * `noindex, follow` with the canonical on the base (PLAN §4.2). Pages past the end and
 * listings below `minItems` (tags: 3) are `noindex` too.
 */
export function listingSeo(
  state: ExploreState,
  scope: ExploreScope,
  result: { total: number; totalPages: number } | null,
  options: { minItems?: number } = {},
): ListingSeo {
  const filtered = isFiltered(state, scope);
  const paged = !filtered && state.page > 1;
  const path = paged ? `${scope.basePath}?page=${state.page}` : scope.basePath;
  const tooFew = result !== null && result.total < (options.minItems ?? 1);
  const pastEnd = result !== null && state.page > Math.max(1, result.totalPages);
  return { path, noindex: filtered || result === null || tooFew || pastEnd };
}

/** «{title} — page N» for paginated listings (PLAN §4.5). */
export function pagedTitle(title: string, page: number): string {
  return page > 1 ? m.meta_title_paged({ title, page }) : title;
}

export function collectionJsonLd(input: {
  siteUrl: string;
  locale: Locale;
  path: string;
  name: string;
  description: string;
  items: readonly ModCardDTO[];
  offset?: number;
  dateModified?: string | null;
}): WithContext<CollectionPage> {
  const { siteUrl, locale, path, name, description, items, offset = 0 } = input;
  const url = `${siteUrl}${localizePath(path, locale)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    inLanguage: toHreflang(locale),
    isPartOf: { '@id': `${siteUrl}/#website` },
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: offset + index + 1,
        url: `${siteUrl}${localizePath(item.canonicalPath, locale)}`,
        name: item.name,
      })),
    },
  };
}

/** Most recent release among the items (the listing's «updated» date). */
export function latestRelease(items: readonly ModCardDTO[]): string | null {
  let latest: string | null = null;
  for (const item of items) if (!latest || item.lastReleasedAt > latest) latest = item.lastReleasedAt;
  return latest;
}
