/**
 * Logotype and lockups (PLAN §3.2): «SOTF MODS» in Big Shoulders Stencil 800 converted to
 * outlines, «SOTF» in the foreground colour and «MODS» in Flare, tracking +1 u.
 *
 * All lockups are cropped to their ink bounds; add the clear space (25 % of the mark
 * height) around them when placing them.
 */

import { type BrandTheme, logoColors } from './colors.ts';
import { CAP_UNITS, type OutlinedText, WORDMARK } from './generated/brand-data.gen.ts';
import { MARK_BOUNDS, markPath } from './mark.ts';
import { attrs, fmt, svgRoot } from './svg.ts';

export type LockupLayout = 'horizontal' | 'stacked' | 'wordmark';

/**
 * `night` / `day` bake the colours of PLAN §3.2. `adaptive` draws «SOTF» with
 * `currentColor` and the Flare parts with the Day flare `#E75803` plus the class
 * `brand-flare`. The Day flare keeps ≥ 3:1 on every surface of both themes, so the logo
 * degrades safely wherever no theme CSS is loaded; a page may brighten it in Night
 * (e.g. `[data-theme="dark"] .brand-flare { fill: #FF7335 }`).
 */
export type LockupTheme = BrandTheme | 'adaptive';

export interface LockupOptions {
  readonly layout?: LockupLayout;
  readonly theme?: LockupTheme;
  /** Fill the artboard with the theme background. Default false (transparent). */
  readonly background?: boolean;
  /** Extra padding around the ink, in mark units (64 u = mark height). Default 0. */
  readonly padding?: number;
  /** Accessible name. Default «SOTF Mods». Pass `''` for decorative use. */
  readonly title?: string;
  readonly className?: string;
  /** Rendered height attribute (width follows the aspect ratio). */
  readonly height?: number;
}

interface Placement {
  readonly x: number;
  readonly y: number;
  readonly scale: number;
}

export interface LockupGeometry {
  /** Ink bounds in mark units (the mark artboard is 64 × 64). */
  readonly bounds: { readonly x: number; readonly y: number; readonly width: number; readonly height: number };
  readonly mark: Placement | null;
  readonly sotf: Placement;
  readonly mods: Placement;
}

/** Horizontal lockup: caps span the pin head (y 3.5 → 49.5), i.e. a 46 u cap height. */
const HORIZONTAL = { capHeight: 46, baseline: 49.5, gap: 13 } as const;
/** Stacked lockup: mark on top, «SOTF» over «MODS», centred. */
const STACKED = { capHeight: 30, markScale: 1.3, markGap: 12, lineGap: 9 } as const;

function inkWidth(text: OutlinedText, scale: number): number {
  return (text.x2 - text.x1) * scale;
}

/** Computes where each part of a lockup goes. Exposed for composition (OG images). */
export function lockupGeometry(layout: LockupLayout): LockupGeometry {
  const { sotf, mods, space } = WORDMARK;
  if (layout === 'stacked') {
    const scale = STACKED.capHeight / CAP_UNITS;
    const markScale = STACKED.markScale;
    const markWidth = (MARK_BOUNDS.x2 - MARK_BOUNDS.x1) * markScale;
    const markHeight = (MARK_BOUNDS.y2 - MARK_BOUNDS.y1) * markScale;
    const width = Math.max(markWidth, inkWidth(sotf, scale), inkWidth(mods, scale));
    const centre = width / 2;
    const firstBaseline = markHeight + STACKED.markGap + STACKED.capHeight;
    const secondBaseline = firstBaseline + STACKED.lineGap + STACKED.capHeight;
    return {
      bounds: { x: 0, y: 0, width, height: secondBaseline },
      mark: {
        x: centre - markWidth / 2 - MARK_BOUNDS.x1 * markScale,
        y: -MARK_BOUNDS.y1 * markScale,
        scale: markScale,
      },
      sotf: { x: centre - inkWidth(sotf, scale) / 2 - sotf.x1 * scale, y: firstBaseline, scale },
      mods: { x: centre - inkWidth(mods, scale) / 2 - mods.x1 * scale, y: secondBaseline, scale },
    };
  }
  const scale = HORIZONTAL.capHeight / CAP_UNITS;
  const wordGap = (space + 2 * WORDMARK.tracking) * scale;
  if (layout === 'wordmark') {
    const sotfX = -sotf.x1 * scale;
    const modsX = sotfX + sotf.advance * scale + wordGap;
    const right = modsX + mods.x2 * scale;
    return {
      bounds: { x: 0, y: 0, width: right, height: HORIZONTAL.capHeight },
      mark: null,
      sotf: { x: sotfX, y: HORIZONTAL.capHeight, scale },
      mods: { x: modsX, y: HORIZONTAL.capHeight, scale },
    };
  }
  const markWidth = MARK_BOUNDS.x2 - MARK_BOUNDS.x1;
  const textLeft = markWidth + HORIZONTAL.gap;
  const sotfX = textLeft - sotf.x1 * scale;
  const modsX = sotfX + sotf.advance * scale + wordGap;
  const right = modsX + mods.x2 * scale;
  const baseline = HORIZONTAL.baseline - MARK_BOUNDS.y1;
  return {
    bounds: { x: 0, y: 0, width: right, height: MARK_BOUNDS.y2 - MARK_BOUNDS.y1 },
    mark: { x: -MARK_BOUNDS.x1, y: -MARK_BOUNDS.y1, scale: 1 },
    sotf: { x: sotfX, y: baseline, scale },
    mods: { x: modsX, y: baseline, scale },
  };
}

function transform({ x, y, scale }: Placement): string {
  const translate = `translate(${fmt(x, 3)} ${fmt(y, 3)})`;
  return scale === 1 ? translate : `${translate} scale(${fmt(scale, 4)})`;
}

function colours(theme: LockupTheme): { fg: string; flare: string; flareClass: string | undefined } {
  if (theme === 'adaptive') {
    return { fg: 'currentColor', flare: logoColors.day.flare, flareClass: 'brand-flare' };
  }
  return { fg: logoColors[theme].foreground, flare: logoColors[theme].flare, flareClass: undefined };
}

/** The lockup's parts as SVG elements, positioned in lockup units (no `<svg>` wrapper). */
export function lockupBody(layout: LockupLayout, theme: LockupTheme = 'night'): string {
  const geometry = lockupGeometry(layout);
  const { fg, flare, flareClass } = colours(theme);
  let body = '';
  if (geometry.mark) {
    body += `<g${attrs({ transform: transform(geometry.mark) })}>${markPath('full', flare, { class: flareClass })}</g>`;
  }
  body += `<path${attrs({ transform: transform(geometry.sotf), fill: fg, d: WORDMARK.sotf.d })}/>`;
  body += `<path${attrs({ transform: transform(geometry.mods), fill: flare, class: flareClass, d: WORDMARK.mods.d })}/>`;
  return body;
}

/** Standalone lockup SVG. */
export function lockupSvg(options: LockupOptions = {}): string {
  const layout = options.layout ?? 'horizontal';
  const theme = options.theme ?? 'night';
  const geometry = lockupGeometry(layout);
  const padding = options.padding ?? 0;
  const width = geometry.bounds.width + padding * 2;
  const height = geometry.bounds.height + padding * 2;
  const backgroundColour = theme === 'adaptive' ? undefined : logoColors[theme].background;
  const background =
    options.background && backgroundColour
      ? `<rect x="${fmt(-padding)}" y="${fmt(-padding)}" width="${fmt(width)}" height="${fmt(height)}" fill="${backgroundColour}"/>`
      : '';
  const title = options.title ?? 'SOTF Mods';
  return svgRoot(
    {
      viewBox: [-padding, -padding, width, height],
      height: options.height,
      width: options.height === undefined ? undefined : fmt((options.height * width) / height),
      title: title.length > 0 ? title : undefined,
      className: options.className,
    },
    background + lockupBody(layout, theme),
  );
}
