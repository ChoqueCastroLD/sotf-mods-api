/**
 * Brand colours used by the logo and the generative artwork, plus WCAG helpers.
 *
 * The full design-token set (semantic colours, `light-dark()` pairs, chart slots) lives
 * in `@sotf/ui/tokens.css` (PLAN §3.3). This module only holds the literal values the
 * brand assets are drawn with, so assets never depend on CSS being present.
 */

export const palette = {
  night: {
    25: '#FCFAF4',
    50: '#F5F4EC',
    100: '#E7E7DE',
    200: '#D2D4CA',
    300: '#B4B7AE',
    400: '#90968D',
    500: '#656D65',
    600: '#4D554E',
    700: '#38413B',
    800: '#252C27',
    900: '#171E1A',
    950: '#0F1612',
    975: '#090F0C',
  },
  flare: {
    50: '#FEF4F1',
    100: '#FEE7DF',
    200: '#FECDBA',
    300: '#FFA37F',
    400: '#FF7335',
    500: '#E75803',
    600: '#BD4600',
    700: '#963601',
    800: '#712701',
    900: '#4D1700',
    950: '#2F0B00',
  },
  signal: { 300: '#6BCFE0', 700: '#026572' },
  lichen: { 300: '#87D48A', 700: '#136C21' },
  solafite: { 200: '#F5D49A', 300: '#E4B65C', 700: '#745301' },
  blood: { 400: '#FF6E68', 600: '#C92F33' },
  blueprint: { 300: '#96C0FE', 600: '#3270C8', 700: '#2257A4' },
} as const;

export type BrandTheme = 'night' | 'day';

/** Logo colours per theme (PLAN §3.2). The pin is exempt from text contrast rules but kept ≥ 3:1. */
export const logoColors: Readonly<
  Record<BrandTheme, { readonly background: string; readonly foreground: string; readonly flare: string }>
> = {
  night: { background: palette.night[975], foreground: palette.night[50], flare: palette.flare[400] },
  day: { background: palette.night[50], foreground: palette.night[950], flare: palette.flare[500] },
};

/** Page surfaces the logo may sit on, per theme (research/03 §4.1). */
export const themeSurfaces: Readonly<Record<BrandTheme, readonly string[]>> = {
  night: [palette.night[975], palette.night[950], palette.night[900]],
  day: [palette.night[50], palette.night[25], '#FFFFFF'],
};

/** `<meta name="theme-color">` values. */
export const themeColor: Readonly<Record<BrandTheme, string>> = {
  night: palette.night[975],
  day: palette.night[50],
};

/**
 * Chart slots in their validated, fixed order (PLAN §3.3). Also used to colour default
 * avatars so they stay inside the brand palette.
 */
export const chartSlots: Readonly<Record<BrandTheme, readonly string[]>> = {
  night: ['#E75803', '#498BEB', '#05A388', '#B38309', '#D15D9A', '#40A449', '#9575E2', '#ED4A49'],
  day: ['#E75803', '#3270C8', '#05A388', '#B38309', '#D15D9A', '#136C21', '#7A5BC0', '#C92F33'],
};

export interface Rgb {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

const HEX_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

/** Returns `#RRGGBB` for `#rgb`, `#rrggbb`, `rgb` or `rrggbb` input, otherwise `null`. */
export function normalizeHex(input: string | null | undefined): string | null {
  if (typeof input !== 'string') {
    return null;
  }
  const match = HEX_PATTERN.exec(input.trim());
  if (!match) {
    return null;
  }
  let hex = (match[1] as string).toUpperCase();
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  return `#${hex}`;
}

export function hexToRgb(hex: string): Rgb {
  const normalized = normalizeHex(hex);
  if (normalized === null) {
    throw new TypeError(`Invalid hex colour: ${hex}`);
  }
  const value = Number.parseInt(normalized.slice(1), 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

export function rgbToHex({ r, g, b }: Rgb): string {
  const channel = (value: number): string =>
    Math.round(Math.min(255, Math.max(0, value)))
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  return `#${channel(r)}${channel(g)}${channel(b)}`;
}

/** Linear interpolation in sRGB space: `t = 0` → `a`, `t = 1` → `b`. */
export function mixHex(a: string, b: string, t: number): string {
  const ca = hexToRgb(a);
  const cb = hexToRgb(b);
  return rgbToHex({
    r: ca.r + (cb.r - ca.r) * t,
    g: ca.g + (cb.g - ca.g) * t,
    b: ca.b + (cb.b - ca.b) * t,
  });
}

function channelLuminance(value: number): number {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

/** WCAG 2.x relative luminance. */
export function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * channelLuminance(r) + 0.7152 * channelLuminance(g) + 0.0722 * channelLuminance(b);
}

/** WCAG 2.x contrast ratio between two colours (1 … 21). */
export function contrastRatio(a: string, b: string): number {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  const [light, dark] = la >= lb ? [la, lb] : [lb, la];
  return (light + 0.05) / (dark + 0.05);
}
