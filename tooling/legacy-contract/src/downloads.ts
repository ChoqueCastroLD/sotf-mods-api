/**
 * Download URL contract (research/01 §6.2): the download routes answer **302** (never 301) to
 * `R2_PUBLIC_BASE + "/" + key.split("/").map(encodeURIComponent).join("/")`; never form encoding
 * (`+` as space is a 404 on R2). The legacy `downloadUrl` is the raw, unencoded URL.
 */

/** Segment-wise `encodeURIComponent` (keeps `'`, `(` and `)` raw, encodes space and `+`). */
export function encodeStorageKey(key: string): string {
  return key.split('/').map(encodeURIComponent).join('/');
}

/** Raw storage key of a legacy `downloadUrl` (`https://r2.sotf-mods.com/<raw key>`). */
export function keyFromDownloadUrl(downloadUrl: string): string | null {
  const match = /^https?:\/\/[^/]+\/(.+)$/.exec(downloadUrl);
  return match?.[1] ?? null;
}

/** Character classes of real keys that the encoding must survive (research/01 §6.2 table). */
export const KEY_CHARACTER_CLASSES = {
  space: / /,
  apostrophe: /'/,
  plus: /\+/,
  parentheses: /[()]/,
} as const;
export type KeyCharacterClass = keyof typeof KEY_CHARACTER_CLASSES;

export function keyClasses(key: string): KeyCharacterClass[] {
  return (Object.keys(KEY_CHARACTER_CLASSES) as KeyCharacterClass[]).filter((name) =>
    KEY_CHARACTER_CLASSES[name].test(key),
  );
}

/** Slug normalisation of the tolerant resolver (research/01 §4.3 step 3). */
export function normaliseSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/['().+_]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

/** Download route of the web host used by RedManager (`/mods/{user.slug}/{slug}/download/{latestVersion}`). */
export function webDownloadPath(userSlug: string, slug: string, version: string): string {
  return `/mods/${userSlug}/${slug}/download/${version}`;
}
