/**
 * R2 object keys from legacy URLs (backfill B2, PLAN §2.8).
 *
 * Legacy rows store full public URLs (`https://r2.sotf-mods.com/<key>`). The key is the path,
 * URL-decoded: 46 version URLs contain spaces, quotes or parentheses, some raw and some encoded
 * (research/02 §3.2). `+` is a literal character in a path and is kept. URLs on any other host
 * (the one `files.` URL of mod 168) have no key.
 */
import { PUBLIC_R2_ORIGIN } from './constants.ts';

export function storageKeyFromUrl(url: string | null | undefined): string | null {
  if (!url?.startsWith(PUBLIC_R2_ORIGIN)) return null;
  const path = url.slice(PUBLIC_R2_ORIGIN.length).split(/[?#]/, 1)[0] ?? '';
  if (path === '') return null;
  let key: string;
  try {
    key = decodeURIComponent(path);
  } catch {
    // A literal `%` that is not an escape: the key is the raw path.
    key = path;
  }
  // Keys never start with a slash or contain control characters.
  // biome-ignore lint/suspicious/noControlCharactersInRegex: rejecting control characters is the point
  if (key.startsWith('/') || /[\u0000-\u001f\u007f]/.test(key)) return null;
  return key;
}
