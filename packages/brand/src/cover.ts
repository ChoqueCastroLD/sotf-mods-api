/**
 * Generated covers for mods without an image: a flat 16:9 panel in the page neutrals, lightly
 * tinted with the category colour, with the mod's initials. No artwork.
 */

import { type BrandTheme, mixHex, normalizeHex, palette } from './colors.ts';
import { graphemes, initialsElement, upperInitial } from './initials.ts';
import { fmt, svgRoot } from './svg.ts';

export interface CoverOptions {
  /** Surface the cover sits on. Default `night`. */
  readonly theme?: BrandTheme;
  /** Artboard width (height follows 16:9). Default 640. */
  readonly width?: number;
  /** Accessible name; omit when the card already shows the mod name (default). */
  readonly title?: string;
  readonly className?: string;
}

/** Fallback when a category colour is missing or invalid: the logo red. */
export const DEFAULT_COVER_COLOR = palette.flare[500];

const MAX_INITIALS = 3;

/**
 * Cover SVG for a mod. `categoryColor` must be a hex colour (anything else falls back to the
 * red, so untrusted input can never inject markup). `initials` is trimmed, NFC-normalised and
 * cut to 3 user-perceived characters. `slug` is kept for API stability: covers are not seeded.
 */
export function coverSvg(_slug: string, categoryColor: string, initials: string, options: CoverOptions = {}): string {
  const theme = options.theme ?? 'night';
  const width = options.width ?? 640;
  const height = Math.round((width * 9) / 16);
  const accent = normalizeHex(categoryColor) ?? DEFAULT_COVER_COLOR;
  const base = theme === 'night' ? palette.night[900] : palette.night[100];
  const background = mixHex(base, accent, theme === 'night' ? 0.1 : 0.12);
  const ink = mixHex(theme === 'night' ? palette.night[100] : palette.night[950], accent, 0.35);
  const text = graphemes(initials.trim()).slice(0, MAX_INITIALS).map(upperInitial).join('');
  const unit = width / 640;
  const body =
    `<rect width="${fmt(width)}" height="${fmt(height)}" fill="${background}"/>` +
    (text.length > 0
      ? initialsElement(text, {
          x: width / 2,
          y: height / 2 + 40 * unit,
          capHeight: 80 * unit,
          fill: ink,
          anchor: 'middle',
          opacity: 0.9,
        })
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
