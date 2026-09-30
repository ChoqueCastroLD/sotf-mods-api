/**
 * «Recent» group (PLAN §7.9: empty query → Recent + Trending): the last entries opened from the
 * palette, kept in `localStorage` on this device only (nothing is sent anywhere). Actions are not
 * remembered. Reading is defensive: anything malformed is dropped.
 */
import type { EntryItem, EntryType } from './types.ts';

export const RECENTS_KEY = 'sotf-cmdk-recent';
export const MAX_RECENTS = 8;

const TYPES: ReadonlySet<string> = new Set<EntryType>(['mod', 'build', 'kit', 'user', 'category', 'page']);

function storage(): Storage | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
}

function isEntry(value: unknown): value is EntryItem {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Record<string, unknown>;
  return (
    typeof entry.key === 'string' &&
    typeof entry.type === 'string' &&
    TYPES.has(entry.type) &&
    (typeof entry.id === 'number' || typeof entry.id === 'string') &&
    typeof entry.title === 'string' &&
    typeof entry.path === 'string' &&
    entry.path.startsWith('/') &&
    !entry.path.startsWith('//') &&
    (entry.subtitle === null || typeof entry.subtitle === 'string') &&
    (entry.thumb === null || (typeof entry.thumb === 'string' && /^https?:\/\//.test(entry.thumb)))
  );
}

export function readRecents(): EntryItem[] {
  const store = storage();
  if (!store) return [];
  try {
    const parsed: unknown = JSON.parse(store.getItem(RECENTS_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter(isEntry).slice(0, MAX_RECENTS) : [];
  } catch {
    return [];
  }
}

function write(entries: readonly EntryItem[]): void {
  try {
    storage()?.setItem(RECENTS_KEY, JSON.stringify(entries));
  } catch {
    // Quota or disabled storage: recents are a convenience only.
  }
}

/** Moves (or adds) an entry to the top. Returns the new list. */
export function rememberRecent(item: EntryItem): EntryItem[] {
  const { key, type, id, title, subtitle, path, thumb, kind, compat, downloads, count, categorySlug, manifestId } =
    item;
  const slim: EntryItem = { key, type, id, title, subtitle, path, thumb };
  if (kind) slim.kind = kind;
  if (compat) slim.compat = compat;
  if (downloads !== undefined) slim.downloads = downloads;
  if (count !== undefined) slim.count = count;
  if (categorySlug !== undefined) slim.categorySlug = categorySlug;
  if (manifestId !== undefined) slim.manifestId = manifestId;
  const next = [slim, ...readRecents().filter((entry) => entry.key !== key)].slice(0, MAX_RECENTS);
  write(next);
  return next;
}

export function clearRecents(): void {
  try {
    storage()?.removeItem(RECENTS_KEY);
  } catch {
    // Nothing to clear.
  }
}
