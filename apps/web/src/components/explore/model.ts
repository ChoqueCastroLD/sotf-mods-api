/**
 * View model of an Explore listing: every label, option and link the page renders, computed once
 * from the URL state, the facets and the taxonomy. Links are real (localized) URLs, so the page
 * works without JavaScript and the client script only has to follow them.
 */
import type { ModListDTO } from '@sotf/contracts/catalog';
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { FilterChipOption, SortOption } from '@sotf/ui/domain';
import { href } from '../../lib/i18n.ts';
import {
  activeFilterCount,
  DOWNLOADS_VALUES,
  defaultOrderOf,
  type ExploreScope,
  type ExploreState,
  type ExploreView,
  exploreHref,
  type ListType,
  MULTIPLAYER_VALUES,
  PAGE_SIZES,
  PLATFORM_VALUES,
  patchState,
  RATING_VALUES,
  scopeFor,
  UPDATED_VALUES,
  VIEW_VALUES,
} from './state.ts';
import type { Taxonomy } from './taxonomy.ts';

type Facets = NonNullable<ModListDTO['facets']>;

export interface TabModel {
  key: ListType;
  label: string;
  href: string;
  current: boolean;
  count: number | null;
}

export interface ChoiceOption {
  value: string;
  label: string;
  checked: boolean;
  count: number | null;
}

export interface ChoiceGroup {
  name: string;
  legend: string;
  options: ChoiceOption[];
}

export interface ToggleModel {
  name: string;
  value: string;
  label: string;
  checked: boolean;
}

export interface ActiveFilter {
  key: string;
  label: string;
  removeHref: string;
  excluded: boolean;
}

export interface ExploreModel {
  locale: Locale;
  scope: ExploreScope;
  state: ExploreState;
  /** Localized URL of a patched state (page reset unless the patch sets it). */
  hrefOf(patch: Partial<ExploreState>): string;
  /** Localized URL of a page of the current state. */
  pageHref(page: number): string;
  /** Localized action of the GET form (the listing of the current scope). */
  formAction: string;
  /** Hidden inputs that carry the state the form has no control for. */
  hidden: [string, string][];
  tabs: TabModel[];
  sortOptions: SortOption[];
  sortValue: string;
  /** Page size choices (`pageSize` select of the toolbar). */
  pageSizes: { value: number; label: string; selected: boolean }[];
  reverseOrderHref: string;
  viewHrefs: Record<ExploreView, string>;
  categoryChips: FilterChipOption[];
  tagChips: FilterChipOption[];
  moreTagChips: FilterChipOption[];
  choices: ChoiceGroup[];
  toggles: ToggleModel[];
  active: ActiveFilter[];
  activeCount: number;
  clearHref: string;
}

/** Number of tag chips shown before «More tags». */
const VISIBLE_TAGS = 12;

function sortLabel(sort: string, scope: ExploreScope['kind'] = 'builds'): string {
  switch (sort) {
    case 'trending':
      return scope === 'mods' ? m.explore_catalog_sort_trending() : m.explore_sort_trending();
    case 'name':
      return m.explore_sort_name();
    case 'downloads':
      return m.explore_sort_downloads();
    case 'updated':
      return m.explore_sort_updated();
    case 'new':
      return m.explore_sort_new();
    case 'rating':
      return m.explore_sort_rating();
    case 'follows':
      return m.explore_sort_follows();
    case 'comments':
      return m.explore_sort_comments();
    default:
      return m.explore_sort_relevance();
  }
}

export function multiplayerLabel(value: string): string {
  switch (value) {
    case 'client_side':
      return m.explore_multiplayer_client_side();
    case 'host_only':
      return m.explore_multiplayer_host_only();
    case 'all_players':
      return m.explore_multiplayer_all_players();
    case 'singleplayer_only':
      return m.explore_multiplayer_singleplayer_only();
    default:
      return m.explore_any();
  }
}

export function platformLabel(value: string): string {
  if (value === 'Client') return m.explore_platform_client();
  if (value === 'Server') return m.explore_platform_server();
  if (value === 'Universal') return m.explore_platform_universal();
  return m.explore_any();
}

export function updatedLabel(value: string): string {
  if (value === '30d') return m.explore_updated_30d();
  if (value === '90d') return m.explore_updated_90d();
  if (value === '1y') return m.explore_updated_1y();
  return m.explore_updated_any();
}

export function typeLabel(type: ListType): string {
  if (type === 'mod') return m.common_term_mods();
  if (type === 'library') return m.common_term_libraries();
  if (type === 'build') return m.common_term_builds();
  return m.explore_tab_all();
}

function bucketCount(buckets: readonly { value: string; count: number }[] | undefined, value: string): number | null {
  if (!buckets) return null;
  return buckets.find((bucket) => bucket.value === value)?.count ?? 0;
}

export function buildExploreModel(input: {
  locale: Locale;
  scope: ExploreScope;
  state: ExploreState;
  taxonomy: Taxonomy;
  facets: Facets | null;
}): ExploreModel {
  const { locale, scope, state, taxonomy, facets } = input;
  const kindOf = (slug: string) => taxonomy.resolveCategory(slug)?.kind ?? null;
  const url = (next: ExploreState) => href(exploreHref(next, scope, kindOf), locale);
  const hrefOf = (patch: Partial<ExploreState>) => url(patchState(state, patch));

  // Tabs: Mods · Libraries · Builds · All (PLAN T0-06). Builds live on /builds.
  const kindBuckets = facets?.kind;
  const tabTypes: ListType[] = ['mod', 'library', 'build', 'all'];
  const tabs: TabModel[] = tabTypes.map((type) => {
    let tabHref: string;
    if (type === 'build' && (scope.kind === 'mods' || scope.kind === 'builds')) {
      tabHref = href('/builds', locale);
    } else if (scope.kind === 'mods') {
      // The search page keeps its query and filters when the type changes.
      tabHref = hrefOf({ type });
    } else if (scope.kind === 'builds') {
      tabHref = href(type === 'mod' ? '/mods' : `/mods?type=${type}`, locale);
    } else {
      tabHref = hrefOf({ type });
    }
    const count =
      kindBuckets === undefined
        ? null
        : type === 'all'
          ? kindBuckets.reduce((sum, bucket) => sum + bucket.count, 0)
          : (bucketCount(kindBuckets, type) ?? 0);
    return { key: type, label: typeLabel(type), href: tabHref, current: state.type === type, count };
  });

  // Sort.
  const sorts: ExploreState['sort'][] = ['new', 'updated', 'downloads', 'trending', 'rating', 'name'];
  if (state.q) sorts.unshift('relevance');
  // A shared link may use a sort the menu does not list (followers, comments): keep it visible.
  if (!sorts.includes(state.sort)) sorts.push(state.sort);
  const sortOptions: SortOption[] = sorts.map((sort) => ({
    value: sort,
    label:
      state.order !== defaultOrderOf(sort) && sort === state.sort
        ? m.explore_sort_reversed({ sort: sortLabel(sort, scope.kind) })
        : sortLabel(sort, scope.kind),
    href: hrefOf({ sort, order: defaultOrderOf(sort) }),
  }));
  const pageSizes = PAGE_SIZES.map((value) => ({
    value,
    label: String(value),
    selected: state.pageSize === value,
  }));
  const viewHrefs = Object.fromEntries(VIEW_VALUES.map((view) => [view, hrefOf({ view, page: state.page })])) as Record<
    ExploreView,
    string
  >;

  // Category chips: every category of the listing's kind (counts from the facets).
  const categoryKind = state.type === 'build' ? 'build' : 'mod';
  const categoryBuckets = facets?.category;
  const categoryChips: FilterChipOption[] = taxonomy.categories
    .filter((category) => category.kind === categoryKind || state.category.includes(category.slug))
    // A category with no results is noise: hidden unless it is selected or excluded right now.
    .filter(
      (category) =>
        bucketCount(categoryBuckets, category.slug) !== 0 ||
        state.category.includes(category.slug) ||
        state.excludeCategory.includes(category.slug),
    )
    .map((category) => {
      const included = state.category.includes(category.slug);
      const excluded = state.excludeCategory.includes(category.slug);
      const without = state.category.filter((slug) => slug !== category.slug);
      const withoutExcluded = state.excludeCategory.filter((slug) => slug !== category.slug);
      const count = bucketCount(categoryBuckets, category.slug);
      return {
        value: category.slug,
        label: taxonomy.categoryName(category.slug),
        ...(count !== null ? { count } : {}),
        state: included ? 'include' : excluded ? 'exclude' : 'off',
        href: included
          ? hrefOf({ category: without })
          : hrefOf({ category: [...without, category.slug], excludeCategory: withoutExcluded }),
        excludeHref: excluded
          ? hrefOf({ excludeCategory: withoutExcluded })
          : hrefOf({ category: without, excludeCategory: [...withoutExcluded, category.slug] }),
      } satisfies FilterChipOption;
    });

  // Tag chips: selected tags first, then the facet's most common ones.
  const tagBuckets = facets?.tag ?? [];
  const tagSlugs: string[] = [...state.tag, ...state.excludeTag];
  for (const bucket of [...tagBuckets].sort((a, b) => b.count - a.count)) {
    if (!tagSlugs.includes(bucket.value)) tagSlugs.push(bucket.value);
  }
  if (tagBuckets.length === 0) {
    for (const tag of [...taxonomy.tags].sort((a, b) => b.count - a.count)) {
      if (tag.count > 0 && !tagSlugs.includes(tag.slug)) tagSlugs.push(tag.slug);
    }
  }
  const tagChipList: FilterChipOption[] = tagSlugs.map((slug) => {
    const included = state.tag.includes(slug);
    const excluded = state.excludeTag.includes(slug);
    const without = state.tag.filter((value) => value !== slug);
    const withoutExcluded = state.excludeTag.filter((value) => value !== slug);
    const count = facets ? (bucketCount(tagBuckets, slug) ?? 0) : null;
    return {
      value: slug,
      label: taxonomy.tagName(slug),
      ...(count !== null ? { count } : {}),
      state: included ? 'include' : excluded ? 'exclude' : 'off',
      href: included ? hrefOf({ tag: without }) : hrefOf({ tag: [...without, slug], excludeTag: withoutExcluded }),
      excludeHref: excluded
        ? hrefOf({ excludeTag: withoutExcluded })
        : hrefOf({ tag: without, excludeTag: [...withoutExcluded, slug] }),
    } satisfies FilterChipOption;
  });
  const pinned = state.tag.length + state.excludeTag.length;
  const visible = Math.max(VISIBLE_TAGS, pinned);

  // Select groups (GET form controls). Builds have no side or server support to filter on.
  const forBuilds = state.type === 'build';
  const allChoices: ChoiceGroup[] = [
    {
      name: 'multiplayer',
      legend: m.explore_facet_multiplayer(),
      options: [
        { value: '', label: m.explore_any(), checked: state.multiplayer === null, count: null },
        ...MULTIPLAYER_VALUES.map((value) => ({
          value,
          label: multiplayerLabel(value),
          checked: state.multiplayer === value,
          count: bucketCount(facets?.multiplayer, value),
        })),
      ],
    },
    {
      name: 'platform',
      legend: m.explore_facet_platform(),
      options: [
        { value: '', label: m.explore_any(), checked: state.platform === null, count: null },
        ...PLATFORM_VALUES.map((value) => ({
          value,
          label: platformLabel(value),
          checked: state.platform === value,
          count: bucketCount(facets?.platform, value),
        })),
      ],
    },
    {
      name: 'updatedWithin',
      legend: m.explore_facet_updated(),
      options: [
        { value: '', label: m.explore_updated_any(), checked: state.updatedWithin === null, count: null },
        ...UPDATED_VALUES.map((value) => ({
          value,
          label: updatedLabel(value),
          checked: state.updatedWithin === value,
          count: null,
        })),
      ],
    },
    {
      name: 'minRating',
      legend: m.explore_facet_rating(),
      options: [
        { value: '', label: m.explore_rating_any(), checked: state.minRating === null, count: null },
        ...RATING_VALUES.map((value) => ({
          value: String(value),
          label: m.explore_rating_min({ rating: value }),
          checked: state.minRating === value,
          count: null,
        })),
      ],
    },
    {
      name: 'minDownloads',
      legend: m.explore_facet_downloads(),
      options: [
        { value: '', label: m.explore_any(), checked: state.minDownloads === null, count: null },
        ...DOWNLOADS_VALUES.map((value) => ({
          value: String(value),
          label: m.explore_downloads_min({ count: value }),
          checked: state.minDownloads === value,
          count: null,
        })),
      ],
    },
  ];
  const choices = allChoices.filter((group) => !(forBuilds && group.name === 'platform'));
  if (state.minDownloads !== null && !(DOWNLOADS_VALUES as readonly number[]).includes(state.minDownloads)) {
    choices
      .find((group) => group.name === 'minDownloads')
      ?.options.push({
        value: String(state.minDownloads),
        label: m.explore_downloads_min({ count: state.minDownloads }),
        checked: true,
        count: null,
      });
  }
  // A legacy/hand-written `minRating` outside the offered values stays selectable.
  if (state.minRating !== null && !(RATING_VALUES as readonly number[]).includes(state.minRating)) {
    choices
      .find((group) => group.name === 'minRating')
      ?.options.push({
        value: String(state.minRating),
        label: m.explore_rating_min({ rating: state.minRating }),
        checked: true,
        count: null,
      });
  }

  const toggles: ToggleModel[] = [
    ...(forBuilds
      ? []
      : [
          { name: 'dedicated', value: 'yes', label: m.explore_dedicated(), checked: state.dedicated },
          { name: 'hasSource', value: '1', label: m.explore_has_source(), checked: state.hasSource },
        ]),
    { name: 'verified', value: '1', label: m.explore_verified(), checked: state.verified },
    { name: 'nsfw', value: '1', label: m.explore_catalog_nsfw(), checked: state.nsfw },
    ...(scope.kind === 'mods' || scope.kind === 'builds'
      ? [{ name: 'unapproved', value: '1', label: m.explore_catalog_unapproved(), checked: state.unapproved }]
      : []),
  ];
  const hasToggle = (name: string) => toggles.some((toggle) => toggle.name === name);

  // State without a form control travels as hidden inputs.
  const target = scopeFor(state, scope, kindOf);
  const hidden: [string, string][] = [];
  if (state.type !== target.defaultType && target.kind !== 'builds') hidden.push(['type', state.type]);
  for (const slug of state.category) if (slug !== target.fixedCategory) hidden.push(['category', slug]);
  for (const slug of state.excludeCategory) hidden.push(['excludeCategory', slug]);
  for (const slug of state.tag) if (slug !== target.fixedTag) hidden.push(['tag', slug]);
  for (const slug of state.excludeTag) hidden.push(['excludeTag', slug]);
  if (state.author) hidden.push(['author', state.author]);
  // Hand-written filters the build listing has no control for survive a submit.
  if (forBuilds && state.platform) hidden.push(['platform', state.platform]);
  if (forBuilds && state.dedicated) hidden.push(['dedicated', 'yes']);
  if (forBuilds && state.hasSource) hidden.push(['hasSource', '1']);
  if (state.nsfw && !hasToggle('nsfw')) hidden.push(['nsfw', '1']);
  if (state.unapproved && !hasToggle('unapproved')) hidden.push(['unapproved', '1']);
  if (state.sort !== 'new' && state.sort !== 'relevance') hidden.push(['sort', state.sort]);
  if (state.order !== defaultOrderOf(state.sort)) hidden.push(['order', state.order]);
  if (state.view !== 'grid') hidden.push(['view', state.view]);

  // Active filters (removable chips above the results).
  const active: ActiveFilter[] = [];
  if (state.q)
    active.push({
      key: 'q',
      label: m.explore_active_query({ query: state.q }),
      removeHref: hrefOf({ q: '' }),
      excluded: false,
    });
  for (const slug of state.category) {
    if (slug === scope.fixedCategory) continue;
    active.push({
      key: `category:${slug}`,
      label: taxonomy.categoryName(slug),
      removeHref: hrefOf({ category: state.category.filter((value) => value !== slug) }),
      excluded: false,
    });
  }
  for (const slug of state.excludeCategory) {
    active.push({
      key: `excludeCategory:${slug}`,
      label: m.explore_active_not({ label: taxonomy.categoryName(slug) }),
      removeHref: hrefOf({ excludeCategory: state.excludeCategory.filter((value) => value !== slug) }),
      excluded: true,
    });
  }
  for (const slug of state.tag) {
    if (slug === scope.fixedTag) continue;
    active.push({
      key: `tag:${slug}`,
      label: taxonomy.tagName(slug),
      removeHref: hrefOf({ tag: state.tag.filter((value) => value !== slug) }),
      excluded: false,
    });
  }
  for (const slug of state.excludeTag) {
    active.push({
      key: `excludeTag:${slug}`,
      label: m.explore_active_not({ label: taxonomy.tagName(slug) }),
      removeHref: hrefOf({ excludeTag: state.excludeTag.filter((value) => value !== slug) }),
      excluded: true,
    });
  }
  if (state.multiplayer)
    active.push({
      key: 'multiplayer',
      label: multiplayerLabel(state.multiplayer),
      removeHref: hrefOf({ multiplayer: null }),
      excluded: false,
    });
  if (state.dedicated)
    active.push({
      key: 'dedicated',
      label: m.explore_dedicated(),
      removeHref: hrefOf({ dedicated: false }),
      excluded: false,
    });
  if (state.platform)
    active.push({
      key: 'platform',
      label: platformLabel(state.platform),
      removeHref: hrefOf({ platform: null }),
      excluded: false,
    });
  if (state.updatedWithin)
    active.push({
      key: 'updatedWithin',
      label: updatedLabel(state.updatedWithin),
      removeHref: hrefOf({ updatedWithin: null }),
      excluded: false,
    });
  if (state.minRating)
    active.push({
      key: 'minRating',
      label: m.explore_rating_min({ rating: state.minRating }),
      removeHref: hrefOf({ minRating: null }),
      excluded: false,
    });
  if (state.minDownloads)
    active.push({
      key: 'minDownloads',
      label: m.explore_downloads_min({ count: state.minDownloads }),
      removeHref: hrefOf({ minDownloads: null }),
      excluded: false,
    });
  if (state.hasSource)
    active.push({
      key: 'hasSource',
      label: m.explore_has_source(),
      removeHref: hrefOf({ hasSource: false }),
      excluded: false,
    });
  if (state.verified)
    active.push({
      key: 'verified',
      label: m.explore_verified(),
      removeHref: hrefOf({ verified: false }),
      excluded: false,
    });
  if (state.author)
    active.push({
      key: 'author',
      label: m.explore_active_author({ handle: state.author }),
      removeHref: hrefOf({ author: null }),
      excluded: false,
    });
  if (state.nsfw)
    active.push({ key: 'nsfw', label: m.explore_catalog_nsfw(), removeHref: hrefOf({ nsfw: false }), excluded: false });
  if (state.unapproved)
    active.push({
      key: 'unapproved',
      label: m.explore_catalog_unapproved(),
      removeHref: hrefOf({ unapproved: false }),
      excluded: false,
    });

  const cleared = patchState(state, {
    category: scope.fixedCategory ? [scope.fixedCategory] : [],
    excludeCategory: [],
    tag: scope.fixedTag ? [scope.fixedTag] : [],
    excludeTag: [],
    multiplayer: null,
    dedicated: false,
    platform: null,
    updatedWithin: null,
    minRating: null,
    minDownloads: null,
    hasSource: false,
    verified: false,
    author: null,
    nsfw: false,
    unapproved: false,
    q: '',
    sort: 'new',
    order: 'desc',
  });

  return {
    locale,
    scope,
    state,
    hrefOf,
    pageHref: (page) => url({ ...state, page }),
    formAction: href(target.basePath, locale),
    hidden,
    tabs,
    sortOptions,
    sortValue: state.sort,
    pageSizes,
    reverseOrderHref: hrefOf({ order: state.order === 'asc' ? 'desc' : 'asc' }),
    viewHrefs,
    categoryChips,
    tagChips: tagChipList.slice(0, visible),
    moreTagChips: tagChipList.slice(visible),
    choices,
    toggles,
    active,
    activeCount: activeFilterCount(state, scope),
    clearHref: url(cleared),
  };
}
