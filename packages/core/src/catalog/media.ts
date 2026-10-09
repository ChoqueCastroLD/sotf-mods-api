/**
 * Public image URLs (PLAN §2.8, §8.3). Processed media (`"Media".variants`) are served from the
 * public bucket as WebP variants (AVIF variants of media processed before the WebP-only change are
 * ignored: the B22 backfill deletes them); legacy images (`purpose='legacy'`, no variants yet) point
 * at their original object, and rows without a `Media` fall back to the legacy absolute URL.
 * Every URL is built with the per-segment encoding of `publicObjectUrl` (never form encoding).
 */
import type { ImageDTO } from '@sotf/contracts/common';
import { publicObjectUrl } from '@sotf/contracts/downloads';
import type { MediaVariant } from '@sotf/db';

/** What the catalog needs to know about the deployment. */
export interface CatalogConfig {
  /** `R2_PUBLIC_BASE_URL` (e.g. `https://r2.sotf-mods.com`). */
  mediaBaseUrl: string;
  /** `R2_BUCKET`: the public bucket served by `mediaBaseUrl`. */
  publicBucket: string;
}

export interface MediaRow {
  width: number | null;
  height: number | null;
  thumbhash: string | null;
  dominantColor: string | null;
  variants: MediaVariant[] | null;
  sourceBucket: string | null;
  sourceKey: string | null;
}

const HEX = /^#[0-9A-Fa-f]{6}$/;

/** Absolute http(s) URL (normalised, e.g. spaces percent-encoded) or null. */
export function safeHttpUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (trimmed === '') return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return url.href;
  } catch {
    return null;
  }
}

function positiveInt(value: number | null | undefined): number | null {
  return typeof value === 'number' && Number.isInteger(value) && value > 0 ? value : null;
}

function variantsOf(media: MediaRow | null): MediaVariant[] {
  if (!media?.variants || !Array.isArray(media.variants)) return [];
  return media.variants.filter(
    (v) => v && typeof v.key === 'string' && v.key !== '' && Number.isInteger(v.w) && v.w > 0,
  );
}

function originalUrl(config: CatalogConfig, media: MediaRow | null): string | null {
  if (!media?.sourceKey || media.sourceBucket !== config.publicBucket) return null;
  return safeHttpUrl(publicObjectUrl(config.mediaBaseUrl, media.sourceKey));
}

const FORMAT_RANK: Record<string, number> = { webp: 0, jpeg: 1, png: 2, avif: 3 };

/**
 * URL of the smallest web-friendly variant at least `width` wide (the largest one when none is),
 * else the original object, else `fallbackUrl`.
 */
export function mediaUrlForWidth(
  config: CatalogConfig,
  media: MediaRow | null,
  width: number,
  fallbackUrl: string | null = null,
): string | null {
  const variants = variantsOf(media).filter((v) => v.format !== 'avif');
  if (variants.length > 0) {
    const sorted = [...variants].sort(
      (a, b) => a.w - b.w || (FORMAT_RANK[a.format] ?? 9) - (FORMAT_RANK[b.format] ?? 9),
    );
    const pick = sorted.find((v) => v.w >= width) ?? sorted[sorted.length - 1];
    if (pick) return safeHttpUrl(publicObjectUrl(config.mediaBaseUrl, pick.key));
  }
  return originalUrl(config, media) ?? safeHttpUrl(fallbackUrl);
}

/**
 * Only processed variants: a 64 px thumbnail must never fall back to a multi-megabyte original
 * (the Cmd+K index ships one per mod).
 */
export function variantUrlOnly(config: CatalogConfig, media: MediaRow | null, width: number): string | null {
  const variants = variantsOf(media).filter((v) => v.format !== 'avif');
  if (variants.length === 0) return null;
  const sorted = [...variants].sort((a, b) => a.w - b.w || (FORMAT_RANK[a.format] ?? 9) - (FORMAT_RANK[b.format] ?? 9));
  const pick = sorted.find((v) => v.w >= width) ?? sorted[sorted.length - 1];
  return pick ? safeHttpUrl(publicObjectUrl(config.mediaBaseUrl, pick.key)) : null;
}

/** `ImageDTO` of a media row (or of a legacy absolute URL); null when there is nothing to show. */
export function imageDto(
  config: CatalogConfig,
  media: MediaRow | null,
  fallbackUrl: string | null,
  alt: string | null = null,
): ImageDTO | null {
  const variants = variantsOf(media);
  const cleanAlt = alt?.trim() ? alt.trim().slice(0, 300) : null;
  const common = {
    thumbhash: media?.thumbhash && media.thumbhash.length <= 64 ? media.thumbhash : null,
    dominantColor: media?.dominantColor && HEX.test(media.dominantColor) ? media.dominantColor : null,
    alt: cleanAlt,
  };
  if (variants.length > 0) {
    const pool = variants.filter((v) => v.format !== 'avif');
    const largest = [...pool].sort(
      (a, b) => b.w - a.w || (FORMAT_RANK[a.format] ?? 9) - (FORMAT_RANK[b.format] ?? 9),
    )[0];
    const url = largest ? safeHttpUrl(publicObjectUrl(config.mediaBaseUrl, largest.key)) : null;
    if (url) {
      // srcset of the WebP variants, one entry per width.
      const byWidth = new Map<number, MediaVariant>();
      for (const v of pool) if (!byWidth.has(v.w)) byWidth.set(v.w, v);
      const srcset = [...byWidth.values()]
        .sort((a, b) => a.w - b.w)
        .map((v) => `${publicObjectUrl(config.mediaBaseUrl, v.key)} ${v.w}w`)
        .join(', ');
      const width = positiveInt(media?.width) ?? positiveInt(largest?.w);
      const height = positiveInt(media?.width) ? positiveInt(media?.height) : null;
      return { url, width, height, srcset: srcset || null, ...common };
    }
  }
  const url = originalUrl(config, media) ?? safeHttpUrl(fallbackUrl);
  if (!url) return null;
  return {
    url,
    width: positiveInt(media?.width),
    height: positiveInt(media?.height),
    srcset: null,
    ...common,
  };
}
