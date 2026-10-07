/**
 * View model of the catalogue (`/`, `/mods`, category and tag pages): the sticky toolbar's
 * controls and the texts of the list rows. The URL stays the only state; the toolbar is a plain
 * GET form that works without JavaScript, `scripts/explore/catalog.ts` only submits it on change.
 */
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { ModCardListLabels } from '@sotf/ui/domain';
import { href } from '../../lib/i18n.ts';
import type { ExploreModel } from './model.ts';
import type { ExploreState, ListType } from './state.ts';
import type { Taxonomy } from './taxonomy.ts';

export interface SelectChoice {
  value: string;
  label: string;
  selected: boolean;
}

export interface ToggleChoice {
  name: 'nsfw' | 'unapproved';
  label: string;
  checked: boolean;
}

export interface CatalogToolbarModel {
  /** Localized action of the GET form. */
  action: string;
  q: string;
  types: SelectChoice[];
  categories: SelectChoice[];
  sorts: SelectChoice[];
  toggles: ToggleChoice[];
  /** State that has no control in the toolbar and must survive a submit. */
  hidden: [string, string][];
  /** Number of controls away from their default (the badge of the phone's «Filters» button). */
  changed: number;
}

/** Value of the sort select for a state (`oldest` is `new` reversed, see `parseExploreState`). */
export function sortChoiceValue(state: Pick<ExploreState, 'sort' | 'order'>): string {
  return state.sort === 'new' && state.order === 'asc' ? 'oldest' : state.sort;
}

/** Sorts offered by the toolbar, in order. «Best match» only while a text query is active. */
export function sortChoices(state: ExploreState): SelectChoice[] {
  const current = sortChoiceValue(state);
  const entries: [string, string][] = [
    ['new', m.explore_sort_new()],
    ['oldest', m.explore_catalog_sort_oldest()],
    ['downloads', m.explore_catalog_sort_downloads()],
    ['trending', m.explore_catalog_sort_trending()],
    ['updated', m.explore_sort_updated()],
    ['rating', m.explore_sort_rating()],
  ];
  if (state.q) entries.unshift(['relevance', m.explore_sort_relevance()]);
  // A shared link may use a sort the toolbar does not list (followers, comments): keep it visible.
  if (!entries.some(([value]) => value === current)) {
    const extra =
      current === 'follows'
        ? m.explore_sort_follows()
        : current === 'name'
          ? m.explore_sort_name()
          : m.explore_sort_comments();
    entries.push([current, extra]);
  }
  return entries.map(([value, label]) => ({ value, label, selected: value === current }));
}

const TYPE_LABEL: Partial<Record<ListType, () => string>> = {
  mod: () => m.common_term_mods(),
  library: () => m.common_term_libraries(),
  all: () => m.explore_catalog_type_all(),
};

export function buildToolbarModel(input: {
  locale: Locale;
  state: ExploreState;
  taxonomy: Taxonomy;
  model: ExploreModel;
}): CatalogToolbarModel {
  const { locale, state, taxonomy, model } = input;
  const types = (['mod', 'library', 'all'] as const).map((value) => ({
    value,
    label: (TYPE_LABEL[value] ?? (() => value))(),
    selected: state.type === value,
  }));
  const single = state.category.length === 1 ? (state.category[0] ?? '') : '';
  const categories: SelectChoice[] = [
    { value: '', label: m.explore_catalog_all_categories(), selected: single === '' },
    ...taxonomy.categories
      .filter((category) => category.kind === 'mod')
      .map((category) => ({
        value: category.slug,
        label: taxonomy.categoryName(category.slug, category.name),
        selected: single === category.slug,
      })),
  ];
  const hidden: [string, string][] = [];
  // More than one category (a hand-written link) cannot be shown in the select: carry it as is.
  if (state.category.length > 1) for (const slug of state.category) hidden.push(['category', slug]);
  for (const slug of state.excludeCategory) hidden.push(['excludeCategory', slug]);
  for (const slug of state.tag) hidden.push(['tag', slug]);
  for (const slug of state.excludeTag) hidden.push(['excludeTag', slug]);
  if (state.multiplayer) hidden.push(['multiplayer', state.multiplayer]);
  if (state.dedicated) hidden.push(['dedicated', 'yes']);
  if (state.platform) hidden.push(['platform', state.platform]);
  if (state.updatedWithin) hidden.push(['updatedWithin', state.updatedWithin]);
  if (state.minRating) hidden.push(['minRating', String(state.minRating)]);
  if (state.minDownloads) hidden.push(['minDownloads', String(state.minDownloads)]);
  if (state.hasSource) hidden.push(['hasSource', '1']);
  if (state.verified) hidden.push(['verified', '1']);
  if (state.author) hidden.push(['author', state.author]);
  const changed =
    (state.type !== model.scope.defaultType ? 1 : 0) +
    (state.category.length > 0 ? 1 : 0) +
    (sortChoiceValue(state) !== (state.q ? 'relevance' : 'new') ? 1 : 0) +
    (state.nsfw ? 1 : 0) +
    (state.unapproved ? 1 : 0);
  return {
    action: href('/mods', locale),
    q: state.q,
    types,
    categories,
    sorts: sortChoices(state),
    toggles: [
      { name: 'nsfw', label: m.explore_catalog_nsfw(), checked: state.nsfw },
      { name: 'unapproved', label: m.explore_catalog_unapproved(), checked: state.unapproved },
    ],
    hidden,
    changed,
  };
}

/** The texts of the `list` rows of `ModCard`, in the page language. */
export function modCardLabels(): ModCardListLabels {
  return {
    trusted: m.explore_catalog_trusted(),
    pendingApproval: m.explore_catalog_pending_approval(),
    comments: (count) => m.explore_catalog_comments({ count }),
    followers: (count) => m.explore_catalog_followers({ count }),
    downloads: (count) => m.explore_catalog_downloads({ count }),
    updated: (when) => m.explore_catalog_updated({ when }),
    category: (name) => m.explore_catalog_category_link({ name }),
  };
}
