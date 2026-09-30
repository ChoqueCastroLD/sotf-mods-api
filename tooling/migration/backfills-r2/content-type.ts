/**
 * Content types of the legacy objects (research/02 §3.2: 48 zips served as
 * `application/x-zip-compressed`, 15 images as `application/octet-stream`).
 *
 * - Version files: by kind — `application/zip` for mod archives, `application/json` for BuildShare
 *   blueprints (the same values v2 writes on new files, PLAN §2.8 step 4).
 * - Images: by **content sniffing** of the first bytes (magic numbers), never by extension (the
 *   legacy extension bug is exactly what produced the wrong types).
 */

export const ZIP_CONTENT_TYPE = 'application/zip';
export const JSON_CONTENT_TYPE = 'application/json';

/** Bytes needed by {@link sniffImageType}. */
export const SNIFF_BYTES = 32;

/** MIME type of an image from its first bytes, or null when it is not a known image format. */
export function sniffImageType(head: Uint8Array): string | null {
  const b = Buffer.from(head.buffer, head.byteOffset, head.byteLength);
  if (b.length >= 8 && b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return 'image/png';
  }
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg';
  if (b.length >= 6 && /^GIF8[79]a$/.test(b.subarray(0, 6).toString('latin1'))) return 'image/gif';
  if (
    b.length >= 12 &&
    b.subarray(0, 4).toString('latin1') === 'RIFF' &&
    b.subarray(8, 12).toString('latin1') === 'WEBP'
  ) {
    return 'image/webp';
  }
  if (b.length >= 12 && b.subarray(4, 8).toString('latin1') === 'ftyp') {
    const brand = b.subarray(8, 12).toString('latin1');
    if (brand === 'avif' || brand === 'avis') return 'image/avif';
    if (brand === 'heic' || brand === 'heix' || brand === 'mif1') return 'image/heic';
  }
  if (b.length >= 2 && b[0] === 0x42 && b[1] === 0x4d) return 'image/bmp';
  return null;
}

/** `Content-Type` without parameters, lower case (`Application/Zip; charset=…` → `application/zip`). */
export function bareType(value: string | null): string | null {
  if (!value) return null;
  return value.split(';', 1)[0]?.trim().toLowerCase() || null;
}
