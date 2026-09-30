/**
 * Server loader shared by the listing pages (`/mods`, `/builds`, `/categories/:slug`,
 * `/tags/:slug`): legacy redirects, URL state, the `GET /mods?facets=1` read, taxonomy and the
 * view model. The page decides SEO, cache and copy.
 */
import type { ModListDTO } from '@sotf/contracts/catalog';
import type { Locale } from '@sotf/i18n';
import type { DomainI18n } from '@sotf/ui/domain';
import { serverApi } from '../../lib/api.ts';
import { href } from '../../lib/i18n.ts';
import { exploreDomainI18n } from './domain-i18n.ts';
import { legacyListingRedirect } from './legacy.ts';
import { buildExploreModel, type ExploreModel } from './model.ts';
import { apiQueryOf, type ExploreScope, type ExploreState, parseExploreState, sanitizeCategories } from './state.ts';
import { loadTaxonomy, type Taxonomy } from './taxonomy.ts';

/** Budget of the main listing read (the page shows the error state after it). */
const LIST_TIMEOUT_MS = 5000;

export interface ListingData {
  kind: 'ok';
  scope: ExploreScope;
  state: ExploreState;
  taxonomy: Taxonomy;
  /** `null` when the API failed (error state, 503, not cached). */
  list: ModListDTO | null;
  model: ExploreModel;
  i18n: DomainI18n;
}

export type ListingLoad = { kind: 'redirect'; location: string } | ListingData;

export async function loadListing(input: {
  url: URL;
  locale: Locale;
  scope: ExploreScope;
  /** Pre-loaded taxonomy (category/tag pages resolve their slug first). */
  taxonomy?: Taxonomy;
}): Promise<ListingLoad> {
  const { url, locale, scope } = input;
  const taxonomy = input.taxonomy ?? (await loadTaxonomy(locale));

  if (scope.kind === 'mods' || scope.kind === 'builds') {
    const target = legacyListingRedirect(url, scope, { resolveCategory: (slug) => taxonomy.resolveCategory(slug) });
    if (target !== null) return { kind: 'redirect', location: href(target, locale) };
  }

  let state = parseExploreState(url.searchParams, scope);
  if (taxonomy.available) {
    state = sanitizeCategories(state, (slug) =>
      slug === scope.fixedCategory ? slug : (taxonomy.resolveCategory(slug)?.slug ?? null),
    );
  }

  let list: ModListDTO | null = null;
  try {
    list = await serverApi().catalog.listMods(
      { query: apiQueryOf(state, { facets: true }) },
      { signal: AbortSignal.timeout(LIST_TIMEOUT_MS) },
    );
  } catch {
    list = null;
  }

  const i18n = exploreDomainI18n(locale, (nameKey, fallback) => taxonomy.byNameKey(nameKey, fallback));
  const model = buildExploreModel({ locale, scope, state, taxonomy, facets: list?.facets ?? null });
  return { kind: 'ok', scope, state, taxonomy, list, model, i18n };
}
