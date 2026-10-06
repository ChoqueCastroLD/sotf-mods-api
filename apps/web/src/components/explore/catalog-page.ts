/**
 * Loader shared by `/` and `/mods`: the same catalogue view (listing + side blocks), one SEO rule.
 *
 * - `/` is the default listing (newest mods, page 1). Any listing parameter on `/` (page 2, a
 *   search, a filter, a legacy `?category=qol`) is a 301 to the canonical `/mods…` URL, so the home
 *   page never duplicates a filtered view.
 * - `/mods` renders the same view. Its canonical is `/` for the default listing and itself for
 *   `?page=N`; every filtered view (search, category, sort, NSFW, Unapproved…) is `noindex, follow`.
 *   The Unapproved view is always `noindex`.
 * - Legacy parameters (`category`, `search`, `orderby`, `showunapproved`…) keep redirecting.
 */
import type { Locale } from '@sotf/i18n';
import { formatNumber } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { loadEnv } from '../../lib/env.ts';
import { href } from '../../lib/i18n.ts';
import type { JsonLd } from '../../lib/seo/jsonld.ts';
import { organizationJsonLd, websiteJsonLd } from '../../lib/seo/jsonld.ts';
import { type CatalogAside, loadAside } from './aside.ts';
import { hasListingParams, legacyListingRedirect } from './legacy.ts';
import { type ListingData, loadListing } from './load.ts';
import { collectionJsonLd, latestRelease, listingSeo, pagedTitle } from './seo.ts';
import { isFiltered, MODS_SCOPE } from './state.ts';
import { loadTaxonomy } from './taxonomy.ts';

export type CatalogMode = 'home' | 'mods';

export interface CatalogPageData {
  mode: CatalogMode;
  listing: ListingData;
  aside: CatalogAside;
  heading: string;
  title: string;
  description: string;
  rawTitle: boolean;
  /** Locale-less canonical path (+ `?page=N`). */
  path: string;
  noindex: boolean;
  jsonLd: JsonLd[];
  /** The featured carousel belongs to the unfiltered first page only. */
  showFeatured: boolean;
}

export type CatalogLoad = { kind: 'redirect'; location: string } | ({ kind: 'ok' } & CatalogPageData);

export async function loadCatalogPage(input: { url: URL; locale: Locale; mode: CatalogMode }): Promise<CatalogLoad> {
  const { url, locale, mode } = input;

  if (mode === 'home' && hasListingParams(url.searchParams)) {
    // The category slug of a legacy link needs the catalogue to resolve (`qol` → `quality-of-life`).
    const taxonomy = await loadTaxonomy(locale);
    const target = legacyListingRedirect(url, MODS_SCOPE, {
      resolveCategory: (slug) => taxonomy.resolveCategory(slug),
    });
    return { kind: 'redirect', location: target ? href(target, locale) : `${href('/mods', locale)}${url.search}` };
  }

  const [loaded, aside] = await Promise.all([loadListing({ url, locale, scope: MODS_SCOPE }), loadAside()]);
  if (loaded.kind === 'redirect') return loaded;

  const { state, list } = loaded;
  const count = list?.total ?? 0;
  const seo = listingSeo(state, MODS_SCOPE, list);
  const unfilteredMods = !isFiltered(state, MODS_SCOPE);
  const defaultView = unfilteredMods && state.page === 1;
  const siteUrl = loadEnv().siteUrl.replace(/\/+$/, '');

  let heading = m.landing_h1();
  let title: string;
  let description: string;
  let rawTitle = false;
  if (state.unapproved) {
    heading = m.explore_catalog_unapproved_heading();
    title = m.explore_catalog_unapproved_title();
    description = m.explore_catalog_unapproved_description();
  } else if (state.type === 'library') {
    heading = m.explore_heading_libraries();
    title = m.explore_meta_libraries_title({ count });
    description = m.explore_meta_libraries_description({ count });
  } else if (state.type === 'all') {
    heading = m.explore_heading_all();
    title = m.explore_meta_all_title({ count });
    description = m.explore_meta_all_description({ count });
  } else {
    title = m.landing_meta_title();
    rawTitle = true;
    description = m.landing_meta_description({ count, mods: formatNumber(locale, count) });
  }
  title = pagedTitle(title, state.page);

  // `/` is the canonical of the default listing; every other indexable view keeps its own path.
  const path = defaultView ? '/' : seo.path;
  const jsonLd: JsonLd[] = [];
  if (mode === 'home') {
    jsonLd.push(websiteJsonLd(siteUrl, locale, href('/search', locale)), organizationJsonLd(siteUrl));
  }
  if (list) {
    jsonLd.push(
      collectionJsonLd({
        siteUrl,
        locale,
        path,
        name: heading,
        description,
        items: list.items,
        offset: (state.page - 1) * list.pageSize,
        dateModified: latestRelease(list.items),
      }),
    );
  }
  return {
    kind: 'ok',
    mode,
    listing: loaded,
    aside,
    heading,
    title,
    description,
    rawTitle,
    path,
    noindex: seo.noindex,
    jsonLd,
    showFeatured: defaultView,
  };
}
