/**
 * Responsive image helpers for `Picture.astro` (PLAN §8.3): the API delivers `ImageDTO` with an
 * AVIF `srcset` of immutable variants (`media/{id}/{w}.avif`); the WebP twin of every variant
 * lives next to it. Legacy images without variants fall back to their original URL.
 */
import type { ImageDTO } from '@sotf/contracts/common';
import { thumbHashToDataURL } from 'thumbhash';

export interface PictureSources {
  avif: string | null;
  webp: string | null;
}

/** Splits the DTO srcset into AVIF and WebP candidate lists. */
export function pictureSources(srcset: string | null): PictureSources {
  if (!srcset) return { avif: null, webp: null };
  const candidates = srcset
    .split(',')
    .map((candidate) => candidate.trim())
    .filter((candidate) => candidate.length > 0);
  const avif = candidates.filter((candidate) => /\.avif(?:\s|$)/i.test(candidate));
  const webp = candidates.filter((candidate) => /\.webp(?:\s|$)/i.test(candidate));
  const derivedWebp = webp.length > 0 ? webp : avif.map((candidate) => candidate.replace(/\.avif(\s|$)/i, '.webp$1'));
  return {
    avif: avif.length > 0 ? avif.join(', ') : null,
    webp: derivedWebp.length > 0 ? derivedWebp.join(', ') : null,
  };
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
