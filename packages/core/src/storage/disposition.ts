/**
 * `Content-Disposition: attachment` for final objects (PLAN §2.8 step 4):
 * `attachment; filename="<Name> <version>.zip"; filename*=UTF-8''<RFC 5987>`.
 *
 * The quoted `filename` is an ASCII fallback (non-ASCII transliterated or replaced by `_`; `"`
 * and `\` removed); `filename*` carries the exact UTF-8 name for every modern client.
 */

/** RFC 5987 `attr-char` encoding (stricter than encodeURIComponent: also `'()*`). */
export function encodeRfc5987(value: string): string {
  return encodeURIComponent(value).replace(
    /['()*]/g,
    (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')}`,
  );
}

/** ASCII fallback of a file name for the quoted `filename` parameter. */
export function asciiFilename(value: string): string {
  const ascii = value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/ß/g, 'ss')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[œŒ]/g, 'oe')
    .replace(/[øØ]/g, 'o')
    .replace(/[^\x20-\x7e]/g, '_')
    .replace(/["\\]/g, '')
    .replace(/[/:*?<>|]/g, '_')
    .trim();
  return ascii || 'download';
}

/** Header value that forces a download named `filename`. */
export function attachmentDisposition(filename: string): string {
  const clean =
    filename
      .normalize('NFC')
      .replace(/[\r\n]/g, ' ')
      .trim() || 'download';
  return `attachment; filename="${asciiFilename(clean)}"; filename*=UTF-8''${encodeRfc5987(clean)}`;
}

/** Download name of a version: `<Mod name> <version>.<ext>` (the legacy convention). */
export function versionDownloadName(modName: string, version: string, extension: string): string {
  const ext = extension.replace(/^\./, '').toLowerCase() || 'zip';
  const base = `${modName.trim()} ${version.trim()}`.replace(/[/\\]/g, '-');
  return `${base}.${ext}`;
}

/** Cache-Control of immutable public objects (keys never change content). */
export const IMMUTABLE_CACHE_CONTROL = 'public, max-age=31536000, immutable';
