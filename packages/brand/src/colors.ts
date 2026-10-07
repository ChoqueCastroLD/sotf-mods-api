/**
 * Brand colours used by the logo and the generative artwork, plus WCAG helpers.
 *
 * The full design-token set (semantic colours, `light-dark()` pairs, chart slots) lives
 * in `@sotf/ui/tokens.css`. This module only holds the literal values the
 * brand assets are drawn with, so assets never depend on CSS being present.
 */

export const palette = {
  /** Neutral scale: DaisyUI dark neutrals (page `950`, surface `900`, border `800`) and light grays. */
  night: {
    25: '#FFFFFF',
    50: '#F6F7F8',
    100: '#E5E7EB',
    200: '#D1D5DB',
    300: '#B4BAC3',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#3D4651',
    800: '#2B343E',
    900: '#151A1F',
    950: '#0E1114',
    975: '#0A0C0F',
  },
  /** The one accent: the red of the SOTF-MODS logo. `500` is the primary, `600` its hover. */
  flare: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#E11D1D',
    600: '#C81414',
    700: '#A31010',
    800: '#7F0D0D',
    900: '#5A0A0A',
    950: '#330505',
  },
  /** Former cyan "signal": now neutral. */
  signal: { 300: '#B4BAC3', 700: '#4B5563' },
  lichen: { 300: '#87D48A', 700: '#136C21' },
  solafite: { 200: '#F5D49A', 300: '#E4B65C', 700: '#745301' },
  blood: { 400: '#FF6E68', 600: '#C92F33' },
  /** Former blue "blueprint": now neutral. */
  blueprint: { 300: '#B4BAC3', 600: '#6B7280', 700: '#4B5563' },
} as const;

export type BrandTheme = 'night' | 'day';

/** Logo colours per theme: the logo is always the old red. */
export const logoColors: Readonly<
  Record<BrandTheme, { readonly background: string; readonly foreground: string; readonly flare: string }>
> = {
  night: { background: palette.night[950], foreground: palette.night[100], flare: '#FE0E0F' },
  day: { background: palette.night[50], foreground: palette.night[950], flare: '#FE0E0F' },
};

/** Page surfaces the logo may sit on, per theme. */
export const themeSurfaces: Readonly<Record<BrandTheme, readonly string[]>> = {
  night: [palette.night[975], palette.night[950], palette.night[900]],
  day: [palette.night[50], palette.night[25], '#FFFFFF'],
};

/** `<meta name="theme-color">` values: the page background of each theme. */
export const themeColor: Readonly<Record<BrandTheme, string>> = {
  night: palette.night[950],
  day: palette.night[50],
};

/**
 * Chart slots in their fixed order. Slot 1 is the red accent; the others are muted so a chart
 * stays calm. Also used to tint default avatars.
 */
export const chartSlots: Readonly<Record<BrandTheme, readonly string[]>> = {
  night: ['#E11D1D', '#7C8DA6', '#5E9C86', '#B8935A', '#A77A99', '#6FA06B', '#8A82B8', '#C46A6A'],
  day: ['#C81414', '#5B6B85', '#3F7D68', '#8F6B2E', '#8A5A7C', '#4C7F48', '#6A62A0', '#A84848'],
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
