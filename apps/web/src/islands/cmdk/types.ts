/**
 * Items shown by the palette. Paths are the unprefixed site paths of the API (the palette adds
 * the locale prefix when it navigates).
 */
import type { CompatStatus, ModKind } from '@sotf/contracts/common';

export type EntryType = 'mod' | 'build' | 'kit' | 'user' | 'category' | 'page';

export interface EntryItem {
  /** Unique key (`mod:20`, `kit:5`, `page:install`…); also the cmdk item value. */
  key: string;
  type: EntryType;
  /** Entity id (number) or slug/key (categories, pages). */
  id: number | string;
  title: string;
  /** `@handle` of the author/owner, the display name of a creator, … */
  subtitle: string | null;
  path: string;
  thumb: string | null;
  kind?: ModKind;
  compat?: CompatStatus;
  downloads?: number;
  /** Items of a kit, mods of a creator. */
  count?: number;
  categorySlug?: string | null;
  tags?: readonly string[];
  manifestId?: string;
  /** Author / owner / creator handle (without `@`). */
  handle?: string;
  /** Days since the Unix epoch of the last release and of the creation (sorting). */
  updatedDay?: number;
  createdDay?: number;
  /** Average rating 0–5 (one decimal), null without ratings. */
  rating?: number | null;
  /** Index in `MULTIPLAYER_ROLES` (0 solo only … 3 all players, 4 unknown). */
  mp?: number;
  /** Scout's one-line reason for citing the mod (shown instead of the usual meta line). */
  note?: string;
}

/** Icon of an action (resolved to a glyph by `present.tsx`). */
export type ActionIcon =
  | 'explore'
  | 'builds'
  | 'kits'
  | 'requests'
  | 'install'
  | 'radar'
  | 'creators'
  | 'compare'
  | 'jams'
  | 'developers'
  | 'settings'
  | 'basecamp'
  | 'upload'
  | 'signals'
  | 'backpack'
  | 'history'
  | 'ranger'
  | 'night'
  | 'day'
  | 'system'
  | 'language';

export interface ActionItem {
  key: `action:${string}`;
  type: 'action';
  /** `go-explore`, `theme-dark`, `language-es`… */
  id: string;
  title: string;
  /** Extra words that find the action (English + localised). */
  keywords: string;
  icon: ActionIcon;
  /** `go` = navigation («Go to»), `settings` = theme and language. */
  section: 'go' | 'settings';
  /** Marks the current theme / language. */
  current: boolean;
  /** Where it goes, for `⌘Enter` (null for in-place actions like the theme). */
  path: string | null;
  run: () => void;
}

/** A recent search (empty query): choosing it puts the text back in the field. */
export interface SearchItem {
  key: string;
  type: 'search';
  title: string;
}

/** An operator value the user can complete (`cat:` → Quality of Life). */
export interface SuggestionItem {
  key: string;
  type: 'suggestion';
  operator: string;
  value: string;
  title: string;
  detail: string | null;
  thumb: string | null;
  /** `user` shows `thumb` as an avatar. */
  avatar: boolean;
}

export type PaletteItem = EntryItem | ActionItem | SearchItem | SuggestionItem;

/** Items that are a real site entity (vs. commands, searches and suggestions). */
export function isEntry(item: PaletteItem): item is EntryItem {
  return item.type !== 'action' && item.type !== 'search' && item.type !== 'suggestion';
}

export type GroupId =
  | 'searches'
  | 'recent'
  | 'suggest'
  | 'trending'
  | 'mods'
  | 'builds'
  | 'kits'
  | 'creators'
  | 'categories'
  | 'pages'
  | 'go'
  | 'actions'
  | 'server'
  | 'scout';

export interface ResultItem {
  item: PaletteItem;
  /** Folded query terms that matched (for the highlight). */
  terms: readonly string[];
  /** Pre-highlighted title of a server hit (`«Stack»Mod`). */
  serverHighlight?: string | null;
}

export interface ResultGroup {
  id: GroupId;
  items: ResultItem[];
}
