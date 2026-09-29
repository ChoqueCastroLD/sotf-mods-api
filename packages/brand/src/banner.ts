/**
 * Profile banners (PLAN §3.6): every survivor gets their own terrain, seeded by the user id.
 * «Reroll terrain» stores a `seedOverride` and passes it here.
 */

import { type BrandTheme, mixHex, palette } from './colors.ts';
import { type Seed, seedKey } from './random.ts';
import { fmt, svgRoot } from './svg.ts';
import { topoGroup, topoLines } from './topo.ts';

export interface BannerOptions {
  readonly theme?: BrandTheme;
  /** Artboard width. Default 1600. */
  readonly width?: number;
  /** Artboard height. Default 400 (4:1; it is cropped to 3:1 on mobile with `slice`). */
  readonly height?: number;
  readonly title?: string;
  readonly className?: string;
}

/** Seed used for a user's banner; exposed so the settings UI can preview rerolls. */
export function bannerSeed(userId: Seed, seedOverride?: Seed | null): string {
  return seedOverride === undefined || seedOverride === null || seedOverride === ''
    ? `banner:${seedKey(userId)}`
    : `banner:${seedKey(userId)}:${seedKey(seedOverride)}`;
}

/** Banner SVG for a user profile or creator card. */
export function bannerSvg(userId: Seed, seedOverride?: Seed | null, options: BannerOptions = {}): string {
  const theme = options.theme ?? 'night';
  const width = options.width ?? 1600;
  const height = options.height ?? 400;
  const lines = topoLines(bannerSeed(userId, seedOverride), {
    width,
    height,
    levels: 13,
    peaks: 3,
    roughness: 0.45,
    step: height / 26,
    // The avatar overlaps the bottom-left corner: keep the camp marker to the right.
    summitRegion: [0.35, 0.2, 0.92, 0.75],
  });
  const background = theme === 'night' ? palette.night[950] : palette.night[25];
  // Night: faint paper-white lines; Day: the field guide's blueprint-blue contours.
  const regular = theme === 'night' ? palette.night[700] : mixHex(palette.night[25], palette.blueprint[600], 0.32);
  const flare = theme === 'night' ? palette.flare[400] : palette.flare[500];
  const unit = height / 400;
  const { x, y } = lines.summit;
  const body =
    `<rect width="${fmt(width)}" height="${fmt(height)}" fill="${background}"/>` +
    topoGroup(lines, { color: regular, strokeWidth: 1.25 * unit, indexStrokeWidth: 2.25 * unit }) +
    `<circle cx="${fmt(x, 1)}" cy="${fmt(y, 1)}" r="${fmt(16 * unit, 1)}" fill="none" stroke="${flare}" stroke-width="${fmt(2 * unit, 1)}" opacity=".45"/>` +
    `<circle cx="${fmt(x, 1)}" cy="${fmt(y, 1)}" r="${fmt(6 * unit, 1)}" fill="${flare}"/>`;
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
