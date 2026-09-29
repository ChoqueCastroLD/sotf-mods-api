/**
 * «Field kit»: the brand's own icon set (PLAN §3.6), drawn on Lucide's 24 px grid with a
 * 1.75 px round stroke so it sits next to Lucide icons without looking foreign.
 *
 * Use the sprite (`/brand/field-kit.svg#fk-<name>`) in static pages, or `fieldKitIcon()`
 * to inline one icon (SSR, e-mails, the console).
 */

import { attrs, escapeXml, fmt, svgRoot } from './svg.ts';

/** Default stroke width (Lucide UI weight used across the site). */
export const FIELD_KIT_STROKE = 1.75;

/** Prefix of the sprite symbol ids: `fk-campfire`, … */
export const FIELD_KIT_ID_PREFIX = 'fk-';

const FILL = ' fill="currentColor" stroke="none"';

/** Moon disc drawn as outline + lit area (y down, lit side on the right while waxing). */
function moonBody(index: number): string {
  const cx = 12;
  const cy = 12;
  const r = 8;
  const outline = `<circle cx="${cx}" cy="${cy}" r="${r}"/>`;
  if (index === 0) {
    return outline;
  }
  if (index === 4) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}"${FILL}/>`;
  }
  const lit = r; // the fill tucks under the outline stroke: no hairline gap
  const waxing = index < 4;
  // Terminator: half-ellipse. The astronomical width (lit·|cos 45°|) makes crescents vanish
  // under the outline at icon sizes, so the width is exaggerated for legibility.
  const rx = lit * 0.45;
  const top = `${fmt(cx)} ${fmt(cy - lit)}`;
  const bottom = `${fmt(cx)} ${fmt(cy + lit)}`;
  // Outer limb: right half when waxing, left half when waning.
  const limbSweep = waxing ? 1 : 0;
  // Terminator bulges towards the lit limb for crescents, away from it for gibbous phases.
  const gibbous = index === 3 || index === 5;
  const terminatorSweep = gibbous === waxing ? 1 : 0;
  const d =
    index === 2 || index === 6
      ? `M${top}A${fmt(lit)} ${fmt(lit)} 0 0 ${limbSweep} ${bottom}Z`
      : `M${top}A${fmt(lit)} ${fmt(lit)} 0 0 ${limbSweep} ${bottom}A${fmt(rx)} ${fmt(lit)} 0 0 ${terminatorSweep} ${top}Z`;
  return `${outline}<path d="${d}"${FILL}/>`;
}

/**
 * Icon bodies (inner SVG, 24 × 24 grid, stroke inherited). Keys are the public names used
 * by components and by the sprite ids.
 */
export const FIELD_KIT_ICONS = {
  // Brand & creator tiers (PLAN §7.2)
  'contour-pin':
    '<path d="M12 21.5c-1.9-2.6-7-6.6-7-11.4a7 7 0 1 1 14 0c0 4.8-5.1 8.8-7 11.4Z"/><path d="M15.6 10.4c0 2.1-1.7 3.4-3.6 3.4s-3.5-1.5-3.5-3.5 1.4-3.6 3.6-3.6 3.5 1.6 3.5 3.7Z"/>' +
    `<circle cx="12.3" cy="10.2" r="1.05"${FILL}/>`,
  'topo-rings':
    '<path d="M12.2 3.2c4.8-.1 8.7 3.3 8.6 8.2-.1 5-4.2 9.5-9 9.4-4.6-.1-8.1-3.8-8-8.4.1-4.9 3.6-9.1 8.4-9.2Z"/><path d="M12.6 7.3c2.7 0 4.6 2 4.5 4.6 0 2.7-2.2 4.8-4.8 4.8-2.5-.1-4.4-2-4.3-4.5 0-2.6 2-4.9 4.6-4.9Z"/>' +
    `<circle cx="12.7" cy="11.9" r="1.1"${FILL}/>`,
  'blueprint-sheet':
    '<path d="M5 3h10l4 4v14H5Z"/><path d="M15 3v4h4"/><path d="M8 17.5v-4.2l3.5-2.8 3.5 2.8v4.2Z"/><path d="M8 20h7"/><path d="M8 7h4"/>',
  campfire:
    '<path d="M4 20.5 20 16.5"/><path d="M4 16.5l16 4"/><path d="M12 3.5c.6 2.2 3.8 3.7 3.8 7a3.8 3.8 0 0 1-7.6 0c0-1.5.7-2.6 1.7-3.4.2 1.3.8 2.1 1.8 2.6-.3-2.1-.4-4.1.3-6.2Z"/>',
  'lean-to':
    '<path d="M3 20h18"/><path d="M4.5 20 17 6.5"/><path d="M17 6.5V20"/><path d="M9 15h8"/><path d="M12.5 11h4.5"/>',
  cabin:
    '<path d="M3.5 11 12 4.5l8.5 6.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/><path d="M5.5 13h4.5M14 13h4.5M5.5 16.5h4.5M14 16.5h4.5"/>',
  treehouse:
    '<path d="M12 21v-7.5"/><path d="M9 21h6"/><path d="M4.5 13.5h15"/><path d="M7 13.5V9.2L12 5.5l5 3.7v4.3"/><path d="M12 17.5 9 15.5M12 16.5l3-2"/><path d="M10.5 13.5v-3h3v3"/>',
  fortress:
    '<path d="M3 21h18"/><path d="M4 21V9.5l2-2.5 2 2.5V21"/><path d="M16 21V9.5l2-2.5 2 2.5V21"/><path d="M8 12h8"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/><path d="M9.5 12V9.5l1.25-1.5L12 9.5l1.25-1.5 1.25 1.5V12"/>',
  landmark:
    '<path d="M2.5 20.5 9 10.5l3.4 5.2 2.4-3.4 6.7 8.2Z"/><path d="M9 10.5V3.5"/><path d="M9 3.5l5 1.8-5 1.9"/>',
  // Objects
  'cave-mouth':
    '<path d="M2.5 20.5h19"/><path d="M4 20.5c0-6.2 3.5-12 8.2-12 4.6 0 7.8 5.8 7.8 12"/><path d="M8.5 20.5c0-3.3 1.6-6.3 3.6-6.3s3.4 3 3.4 6.3"/><path d="M4.8 14.5 7 15.5M18.8 13.8l-2 1"/>',
  'printer-3d-resin':
    '<path d="M4 21h16"/><path d="M5 21v-4h14v4"/><path d="M7 17V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12"/><path d="M9.5 7h5"/><path d="M12 7v3"/><path d="M10 14.5h4l-.6-4.5h-2.8Z"/>',
  'flare-gun':
    '<path d="M3 8.5h12.5a2 2 0 0 1 2 2V12H9.5l-1 2v4.5a1 1 0 0 1-1 1H5.3a1 1 0 0 1-1-1.2L5.5 12H3Z"/><path d="M9.5 12l1 2.5"/><path d="M20 7.5l1.5-1.5"/><path d="M20.5 10.5H22"/><path d="M18.5 5V3.5"/>',
  'gps-handheld':
    '<rect x="7" y="7" width="10" height="14.5" rx="2"/><path d="M9 7V2.5"/><rect x="9.25" y="9.25" width="5.5" height="5.5" rx=".75"/><path d="M12 11v.01"/><path d="M10 18.25h.01M14 18.25h.01"/>',
  zipline:
    '<path d="M2.5 4.5 21.5 11"/><path d="M3 4.5V21"/><path d="M21 11v10"/><circle cx="12" cy="7.75" r="1.5"/><path d="M12 9.25v3.25"/><path d="M9 12.5h6"/>',
  // Moon phases 0 (new) … 7 (waning crescent), PLAN §3.7
  'moon-phase-0': moonBody(0),
  'moon-phase-1': moonBody(1),
  'moon-phase-2': moonBody(2),
  'moon-phase-3': moonBody(3),
  'moon-phase-4': moonBody(4),
  'moon-phase-5': moonBody(5),
  'moon-phase-6': moonBody(6),
  'moon-phase-7': moonBody(7),
  // Stamps, 404, field reports
  'stamp-frame':
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6" stroke-dasharray="1.6 1.9"/><path d="M12 1.8v1.4M12 20.8v1.4M1.8 12h1.4M20.8 12h1.4"/>',
  'eyes-dark':
    `<path d="M2.5 12.6c1.6-2.3 3.9-3.6 6.1-3.6 1.6 0 2.6.9 2.6 2.1 0 1.5-1.8 2.6-4.2 2.6-1.8 0-3.3-.4-4.5-1.1Z"${FILL}/>` +
    `<path d="M21.5 12.6c-1.6-2.3-3.9-3.6-6.1-3.6-1.6 0-2.6.9-2.6 2.1 0 1.5 1.8 2.6 4.2 2.6 1.8 0 3.3-.4 4.5-1.1Z"${FILL}/>`,
  'works-check': '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16.2 9.3"/>',
  'works-broken':
    '<path d="M10.6 3.1A9 9 0 0 0 9 20.5"/><path d="M13.4 3.1A9 9 0 0 1 15 20.5"/><path d="m12.2 3-1.5 4.8 2.8 2.1-2.6 3.8 1.4 3.6-.8 3.7"/>',
} as const satisfies Record<string, string>;

export type FieldKitIconName = keyof typeof FIELD_KIT_ICONS;

export const FIELD_KIT_NAMES = Object.keys(FIELD_KIT_ICONS) as FieldKitIconName[];

/** Creator tier → icon (PLAN §7.2). */
export const CREATOR_TIER_ICONS = {
  campfire: 'campfire',
  'lean-to': 'lean-to',
  cabin: 'cabin',
  treehouse: 'treehouse',
  fortress: 'fortress',
  landmark: 'landmark',
} as const satisfies Record<string, FieldKitIconName>;

const STROKE_ATTRS = {
  fill: 'none',
  stroke: 'currentColor',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
} as const;

export function isFieldKitIcon(name: string): name is FieldKitIconName {
  return Object.hasOwn(FIELD_KIT_ICONS, name);
}

export interface FieldKitIconOptions {
  /** Rendered size in px (width = height). Default 24. */
  readonly size?: number;
  /** Stroke width. Default 1.75 (2 is recommended at ≤ 16 px). */
  readonly strokeWidth?: number;
  /** Accessible name. Omit for decorative icons (`aria-hidden`). */
  readonly title?: string;
  readonly className?: string;
}

/** Inline SVG for one icon, coloured with `currentColor`. */
export function fieldKitIcon(name: FieldKitIconName, options: FieldKitIconOptions = {}): string {
  if (!isFieldKitIcon(name)) {
    throw new RangeError(`Unknown Field kit icon "${String(name)}"`);
  }
  const size = options.size ?? 24;
  return svgRoot(
    {
      viewBox: [0, 0, 24, 24],
      width: size,
      height: size,
      title: options.title,
      className: options.className,
      extra: { ...STROKE_ATTRS, 'stroke-width': fmt(options.strokeWidth ?? FIELD_KIT_STROKE) },
    },
    FIELD_KIT_ICONS[name],
  );
}

/** The `/brand/field-kit.svg` sprite: one `<symbol id="fk-…">` per icon. */
export function fieldKitSprite(): string {
  const symbols = FIELD_KIT_NAMES.map(
    (name) =>
      `<symbol${attrs({
        id: `${FIELD_KIT_ID_PREFIX}${name}`,
        viewBox: '0 0 24 24',
        ...STROKE_ATTRS,
        'stroke-width': fmt(FIELD_KIT_STROKE),
      })}>${FIELD_KIT_ICONS[name]}</symbol>`,
  ).join('');
  // The root is never rendered on its own; the title documents the file (and keeps a11y lint quiet).
  return `<svg xmlns="http://www.w3.org/2000/svg"><title>SOTF Mods · Field kit</title>${symbols}</svg>`;
}

/** `<svg><use/></svg>` referencing the sprite (0 bytes of icon markup per use). */
export function fieldKitUse(
  name: FieldKitIconName,
  options: FieldKitIconOptions & { readonly href?: string } = {},
): string {
  const size = options.size ?? 24;
  const href = `${options.href ?? '/brand/field-kit.svg'}#${FIELD_KIT_ID_PREFIX}${name}`;
  const titled = options.title !== undefined && options.title.length > 0;
  return `<svg${attrs({
    width: size,
    height: size,
    class: options.className,
    role: titled ? 'img' : undefined,
    'aria-hidden': titled ? undefined : 'true',
  })}>${titled ? `<title>${escapeXml(options.title ?? '')}</title>` : ''}<use href="${escapeXml(href)}"/></svg>`;
}
