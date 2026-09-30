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
  /** Scout's one-line reason for citing the mod (shown instead of the usual meta line). */
  note?: string;
}

export type ActionId =
  | 'theme-dark'
  | 'theme-light'
  | 'theme-system'
  | `language-${string}`
  | 'upload'
  | 'upload-build'
  | 'basecamp'
  | 'signals'
  | 'backpack';

export interface ActionItem {
  key: `action:${ActionId}`;
  type: 'action';
  id: ActionId;
  title: string;
  /** Extra words that find the action (English + localised). */
  keywords: string;
  /** Marks the current theme / language. */
  current: boolean;
  /** Where it goes, for `⌘Enter` (null for in-place actions like the theme). */
  path: string | null;
  run: () => void;
}

export type PaletteItem = EntryItem | ActionItem;

export type GroupId =
  | 'recent'
  | 'trending'
  | 'mods'
  | 'builds'
  | 'kits'
  | 'creators'
  | 'categories'
  | 'pages'
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
