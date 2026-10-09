/**
 * Responsive image helpers for `Picture.astro` (PLAN §8.3): the API delivers `ImageDTO` with a
 * WebP `srcset` of immutable variants (`media/{id}/{w}.webp`); WebP is the only format the site
 * stores. Legacy images without variants fall back to their original URL.
 */
import type { ImageDTO } from '@sotf/contracts/common';
import { thumbHashToDataURL } from 'thumbhash';

export interface PictureSources {
  webp: string | null;
}

/**
 * The WebP candidates of the DTO srcset. Candidates of any other format (an old cached DTO with the
 * AVIF list) are rewritten to their WebP twin, which always sits next to them.
 */
export function pictureSources(srcset: string | null): PictureSources {
  if (!srcset) return { webp: null };
  const candidates = srcset
    .split(',')
    .map((candidate) => candidate.trim().replace(/\.avif(\s|$)/i, '.webp$1'))
    .filter((candidate) => candidate.length > 0);
  const webp = [...new Set(candidates.filter((candidate) => /\.webp(?:\s|$)/i.test(candidate)))];
  return { webp: webp.length > 0 ? webp.join(', ') : null };
}

/** Decodes a base64 ThumbHash into a tiny PNG data URL (hero placeholders only). */
export function thumbhashDataUrl(thumbhash: string | null): string | null {
  if (!thumbhash) return null;
  try {
    const bytes = Uint8Array.from(Buffer.from(thumbhash, 'base64'));
    if (bytes.length < 5) return null;
    return thumbHashToDataURL(bytes);
  } catch {
    return null;
  }
}

/** Only `#RRGGBB` colours reach an inline style. */
export function safeHexColor(color: string | null): string | null {
  return color && /^#[0-9a-f]{6}$/i.test(color) ? color : null;
}

export type { ImageDTO };
