/**
 * Generative covers for mods without an image (PLAN §3.6, §8.3): a 16:9 contour map seeded
 * by the slug, tinted with the category colour, with the mod's initials in the display face.
 */

import { type BrandTheme, mixHex, normalizeHex, palette } from './colors.ts';
import { graphemes, initialsElement, upperInitial } from './initials.ts';
import { fmt, svgRoot } from './svg.ts';
import { topoGroup, topoLines } from './topo.ts';

export interface CoverOptions {
  /** Surface the cover sits on. Default `night`. */
  readonly theme?: BrandTheme;
  /** Artboard width (height follows 16:9). Default 640. */
  readonly width?: number;
  /** Accessible name; omit when the card already shows the mod name (default). */
  readonly title?: string;
  readonly className?: string;
}

/** Fallback when a category colour is missing or invalid: Flare. */
export const DEFAULT_COVER_COLOR = palette.flare[400];

const MAX_INITIALS = 3;

/**
 * Cover SVG for a mod. `categoryColor` must be a hex colour (anything else falls back to
 * Flare, so untrusted input can never inject markup). `initials` is trimmed, NFC-normalised
 * and cut to 3 user-perceived characters.
 */
export function coverSvg(slug: string, categoryColor: string, initials: string, options: CoverOptions = {}): string {
  const theme = options.theme ?? 'night';
  const width = options.width ?? 640;
  const height = Math.round((width * 9) / 16);
  const accent = normalizeHex(categoryColor) ?? DEFAULT_COVER_COLOR;
  const background = theme === 'night' ? palette.night[950] : palette.night[25];
  const ink = theme === 'night' ? palette.night[50] : palette.night[950];
  const lines = topoLines(`cover:${slug}`, {
    width,
    height,
    levels: 9,
    peaks: 3,
    roughness: 0.35,
    step: height / 22,
    indexEvery: 4,
    // Keep the waypoint clear of the initials (bottom-left).
    summitRegion: [0.42, 0.14, 0.9, 0.62],
  });
  const regular = mixHex(background, accent, theme === 'night' ? 0.42 : 0.5);
  const text = graphemes(initials.trim()).slice(0, MAX_INITIALS).map(upperInitial).join('');
  const unit = width / 640;
  const body =
    `<rect width="${fmt(width)}" height="${fmt(height)}" fill="${background}"/>` +
    topoGroup(lines, { color: regular, strokeWidth: 1.25 * unit, indexStrokeWidth: 2.25 * unit }) +
    `<circle cx="${fmt(lines.summit.x, 1)}" cy="${fmt(lines.summit.y, 1)}" r="${fmt(5 * unit, 2)}" fill="${accent}"/>` +
    `<circle cx="${fmt(lines.summit.x, 1)}" cy="${fmt(lines.summit.y, 1)}" r="${fmt(11 * unit, 2)}" fill="none" stroke="${accent}" stroke-width="${fmt(2 * unit, 2)}" opacity=".6"/>` +
    (text.length > 0
      ? initialsElement(text, { x: 36 * unit, y: height - 34 * unit, capHeight: 92 * unit, fill: ink, anchor: 'start' })
      : '');
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
