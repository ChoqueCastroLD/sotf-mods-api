/**
 * The «Contour Pin» isotype (PLAN §3.2): a map pin with contour lines that doubles as an
 * eye watching from the woods. Rendered as one evenodd path with real transparent holes.
 */

import { logoColors } from './colors.ts';
import { MARK_HOLES_FULL, MARK_HOLES_SIMPLE } from './generated/brand-data.gen.ts';
import { PIN_PATH } from './mark-geometry.ts';
import { attrs, escapeXml, fmt, svgRoot } from './svg.ts';

export { PIN_PATH } from './mark-geometry.ts';

/** `full` from 24 px up; `simple` (no outer contour, heavier knock-outs) for 16–24 px. */
export type MarkVariant = 'full' | 'simple';

/** Mark artboard (PLAN §3.2): `viewBox 0 0 64 64`. */
export const MARK_VIEWBOX = [0, 0, 64, 64] as const;

/** Ink bounds of the pin inside the 64 u artboard. */
export const MARK_BOUNDS = { x1: 9, y1: 3.5, x2: 55, y2: 61 } as const;

/** Minimum rendered size in CSS px per variant (PLAN §3.2). */
export const MARK_MIN_SIZE: Readonly<Record<MarkVariant, number>> = { full: 24, simple: 16 };

/** Clear space around the mark: 25 % of its height. */
export const CLEAR_SPACE_RATIO = 0.25;

/** Recommended variant for a rendered size in CSS px. */
export function markVariantForSize(px: number): MarkVariant {
  return px < MARK_MIN_SIZE.full ? 'simple' : 'full';
}

/** Path data of the mark (pin + knock-out holes); draw it with `fill-rule="evenodd"`. */
export function markPathData(variant: MarkVariant = 'full'): string {
  return PIN_PATH + (variant === 'full' ? MARK_HOLES_FULL : MARK_HOLES_SIMPLE);
}

/** A `<path>` element of the mark in the 64 u coordinate system. */
export function markPath(
  variant: MarkVariant = 'full',
  fill: string = logoColors.night.flare,
  extra: Readonly<Record<string, string | undefined>> = {},
): string {
  return `<path${attrs({ ...extra, fill, 'fill-rule': 'evenodd', d: markPathData(variant) })}/>`;
}

export interface MarkSvgOptions {
  readonly variant?: MarkVariant;
  /** Pin colour. Default Night Flare `#FF7335`. */
  readonly color?: string;
  /** Optional square tile behind the mark (e.g. `#090F0C`). */
  readonly background?: string;
  /** Tile corner radius as a fraction of the size (0.22 = app icon). Default 0. */
  readonly radius?: number;
  /** Rendered width/height attributes. */
  readonly size?: number | string;
  /** Accessible name; omit for decorative use. */
  readonly title?: string;
  readonly className?: string;
}

/** Standalone SVG of the isotype. */
export function markSvg(options: MarkSvgOptions = {}): string {
  const radius = Math.max(0, Math.min(0.5, options.radius ?? 0)) * 64;
  const tile =
    options.background === undefined
      ? ''
      : `<rect width="64" height="64"${radius > 0 ? ` rx="${fmt(radius)}"` : ''} fill="${escapeXml(options.background)}"/>`;
  return svgRoot(
    {
      viewBox: MARK_VIEWBOX,
      width: options.size,
      height: options.size,
      title: options.title,
      className: options.className,
    },
    tile + markPath(options.variant ?? 'full', options.color ?? logoColors.night.flare),
  );
}
