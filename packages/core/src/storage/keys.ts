/**
 * Object keys of the buckets (PLAN §2.8 "Esquema de claves nuevas") and their public URLs.
 *
 * New keys only use `[a-z0-9._/-]`, so they never need escaping. Legacy keys
 * (`<timestamp>_<name>`, with spaces, apostrophes, `+` or parentheses) are never renamed: URLs are
 * always built with {@link encodeStorageKey} (`encodeURIComponent` per `/` segment, never `+` for
 * a space).
 */
import { encodeStorageKey, publicObjectUrl } from '@sotf/contracts/downloads';

export { encodeStorageKey, publicObjectUrl };

/** Characters allowed in keys created by v2. */
export const SAFE_KEY_PATTERN = /^[a-z0-9._/-]+$/;

/** Max length of the `safe-name` part (keeps keys far below the 1 024-byte S3 limit). */
export const SAFE_NAME_MAX = 80;

/** True when `key` only uses `[a-z0-9._/-]`, has no empty/dot segments and no leading slash. */
export function isSafeKey(key: string): boolean {
  if (!SAFE_KEY_PATTERN.test(key) || key.length > 512) return false;
  return key.split('/').every((segment) => segment !== '' && segment !== '.' && segment !== '..');
}

/**
 * `safe-name` of a key: transliterated to ASCII, lower case, anything outside `[a-z0-9.]`
 * becomes `-`, runs collapsed, trimmed; never empty (`file`).
 */
export function safeName(value: string, fallback = 'file'): string {
  const ascii = value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/ß/g, 'ss')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[œŒ]/g, 'oe')
    .replace(/[øØ]/g, 'o')
    .toLowerCase()
    .replace(/['’`]/g, '');
  const cleaned = ascii
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/\.{2,}/g, '.')
    .replace(/-{2,}/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '')
    .slice(0, SAFE_NAME_MAX)
    .replace(/[-.]+$/g, '');
  return cleaned || fallback;
}

function id(value: number | string, what: string): string {
  const text = String(value);
  if (!/^[a-z0-9-]+$/.test(text)) throw new TypeError(`invalid ${what} "${text}" for a storage key`);
  return text;
}

/** `mods/{modId}/{versionId}/{safe-name}-{version}.zip` */
export function modFileKey(modId: number, versionId: number, name: string, version: string): string {
  return `mods/${id(modId, 'modId')}/${id(versionId, 'versionId')}/${safeName(`${name}-${version}`)}.zip`;
}

/** `builds/{modId}/{versionId}/{safe-name}.json` */
export function buildFileKey(modId: number, versionId: number, name: string): string {
  return `builds/${id(modId, 'modId')}/${id(versionId, 'versionId')}/${safeName(name)}.json`;
}

/**
 * Extensions an original can have: new media are always `webp`; the others only exist on objects
 * written before the WebP-only pipeline (until the B22 backfill converts them).
 */
export const MEDIA_ORIGINAL_EXTENSIONS = ['webp', 'png', 'jpg', 'jpeg', 'avif', 'gif'] as const;

/** `media/{mediaId}/original.{ext}` (`original.webp` for everything processed today) */
export function mediaOriginalKey(mediaId: string, extension: string): string {
  const ext = extension.toLowerCase().replace(/^\./, '');
  if (!(MEDIA_ORIGINAL_EXTENSIONS as readonly string[]).includes(ext)) {
    throw new TypeError(`unsupported image extension "${extension}"`);
  }
  return `media/${id(mediaId.toLowerCase(), 'mediaId')}/original.${ext}`;
}

/** `media/{mediaId}/{w}.webp` (the AVIF twins of older media are never written any more) */
export function mediaVariantKey(mediaId: string, width: number, format: 'webp' = 'webp'): string {
  if (!Number.isInteger(width) || width <= 0) throw new TypeError(`invalid width ${width}`);
  return `media/${id(mediaId.toLowerCase(), 'mediaId')}/${width}.${format}`;
}

/** `og/{type}/{id}-{contentHash}.png` */
export function ogImageKey(type: string, entityId: number | string, contentHash: string): string {
  return `og/${id(type, 'type')}/${safeName(String(entityId))}-${id(contentHash.toLowerCase(), 'contentHash')}.png`;
}

/** Private bucket: `incoming/{userId}/{uploadId}` (1-day lifecycle rule). */
export function incomingKey(userId: number, uploadId: string): string {
  return `incoming/${id(userId, 'userId')}/${id(uploadId.toLowerCase(), 'uploadId')}`;
}

/** Private bucket: `quarantine/{uploadId}` (flagged uploads kept for moderators). */
export function quarantineKey(uploadId: string): string {
  return `quarantine/${id(uploadId.toLowerCase(), 'uploadId')}`;
}

/** Private bucket: `exports/{userId}/{exportId}.zip` (GDPR, presigned GET of 15 min). */
export function exportKey(userId: number, exportId: string): string {
  return `exports/${id(userId, 'userId')}/${id(exportId.toLowerCase(), 'exportId')}.zip`;
}

/**
 * Key of an object from a legacy public URL (`https://r2.sotf-mods.com/<key>`), URL-decoded
 * (research/02 §3.2: some legacy URLs are raw, some percent-encoded; `+` is literal). Returns null
 * for URLs on any other host (the lost legacy file host) or without a path.
 */
export function storageKeyFromPublicUrl(
  url: string | null | undefined,
  publicOrigins: readonly string[],
): string | null {
  if (!url) return null;
  const origin = publicOrigins.map((o) => o.replace(/\/+$/, '')).find((o) => url.startsWith(`${o}/`));
  if (!origin) return null;
  const path = url.slice(origin.length + 1).split(/[?#]/, 1)[0] ?? '';
  if (path === '') return null;
  let key: string;
  try {
    key = decodeURIComponent(path);
  } catch {
    key = path; // a literal `%` that is not an escape
  }
  // biome-ignore lint/suspicious/noControlCharactersInRegex: control characters never appear in keys
  if (key.startsWith('/') || /[\u0000-\u001f\u007f]/.test(key)) return null;
  return key;
}
