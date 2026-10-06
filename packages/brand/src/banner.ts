/**
 * Profile banners: a quiet gradient in the page neutrals with a hint of the red, seeded by the
 * user id so every profile has its own slightly different one. No artwork.
 * The seed override (stored when a user picks another one) is passed here.
 */

import { type BrandTheme, mixHex, palette } from './colors.ts';
import { createRng, hashSeed, type Seed, seedKey } from './random.ts';
import { fmt, svgRoot } from './svg.ts';

export interface BannerOptions {
  readonly theme?: BrandTheme;
  /** Artboard width. Default 1600. */
  readonly width?: number;
  /** Artboard height. Default 400 (4:1; it is cropped to 3:1 on mobile with `slice`). */
  readonly height?: number;
  readonly title?: string;
  readonly className?: string;
}

/** Seed used for a user's banner; exposed so the settings UI can preview other seeds. */
export function bannerSeed(userId: Seed, seedOverride?: Seed | null): string {
  return seedOverride === undefined || seedOverride === null || seedOverride === ''
    ? `banner:${seedKey(userId)}`
    : `banner:${seedKey(userId)}:${seedKey(seedOverride)}`;
}

/** Banner SVG for a user profile. */
export function bannerSvg(userId: Seed, seedOverride?: Seed | null, options: BannerOptions = {}): string {
  const theme = options.theme ?? 'night';
  const width = options.width ?? 1600;
  const height = options.height ?? 400;
  const key = bannerSeed(userId, seedOverride);
  const rng = createRng(key);
  // Gradient ids are unique per banner: several banners can share one HTML document.
  const id = hashSeed(key).toString(36);
  const dark = theme === 'night';
  const from = dark ? palette.night[900] : palette.night[100];
  const to = dark ? palette.night[950] : palette.night[50];
  const tint = mixHex(from, palette.flare[500], dark ? 0.16 : 0.1);
  // Seeded: where the red hint sits (x 20 to 90 %) and how strong it is.
  const x = fmt(20 + rng.next() * 70, 1);
  const body =
    `<defs><linearGradient id="bn${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>` +
    `<radialGradient id="bt${id}" cx="${x}%" cy="${fmt(100 - rng.next() * 30, 1)}%" r="70%"><stop offset="0" stop-color="${tint}" stop-opacity=".9"/><stop offset="1" stop-color="${tint}" stop-opacity="0"/></radialGradient></defs>` +
    `<rect width="${fmt(width)}" height="${fmt(height)}" fill="url(#bn${id})"/>` +
    `<rect width="${fmt(width)}" height="${fmt(height)}" fill="url(#bt${id})"/>`;
  return svgRoot(
    {
      viewBox: [0, 0, width, height],
      preserveAspectRatio: 'xMidYMid slice',
      title: options.title,
      className: options.className,
    },
    body,
  );
}
