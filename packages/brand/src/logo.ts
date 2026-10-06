/**
 * The logo of SOTF Mods: the red raster logos of the old site, optimized.
 *
 * - `wordmark` (`logo-sm`, 419 x 110): the one-line «SOTF-MODS» of the header.
 * - `stacked` (`logo`, 640 x 360): «Sons of the Forest Mods» stacked, for the footer, OG images,
 *   e-mails and the PWA splash screens.
 *
 * Files live in `/brand` (built by `scripts/build-assets.ts` from `sources/`): `.webp` plus a
 * `.png` fallback, each in a 1x/2x pair of widths and the full size. The logo is red on a
 * transparent background, so it works on every surface of both themes.
 */

export type LockupLayout = 'horizontal' | 'stacked' | 'wordmark';

/** Kept so existing callers that pass a theme keep compiling: the logo does not change. */
export type LockupTheme = 'night' | 'day' | 'adaptive';

export interface LogoFile {
  /** Public path without extension, e.g. `/brand/logo-sm`. */
  readonly base: string;
  /** Intrinsic size of the full file. */
  readonly width: number;
  readonly height: number;
  /** Widths of the smaller derivatives (`<base>-<width>.webp|png`); the full file is the largest. */
  readonly widths: readonly number[];
}

export const LOGO_FILES = {
  wordmark: { base: '/brand/logo-sm', width: 419, height: 110, widths: [140, 280] },
  stacked: { base: '/brand/logo', width: 640, height: 360, widths: [320] },
} as const satisfies Record<string, LogoFile>;

/**
 * Stable public URLs (paths on the site origin). E-mails and other external consumers use the
 * PNGs: `https://sotf-mods.com/brand/logo.png`.
 */
export const LOGO_PATHS = {
  wordmarkPng: '/brand/logo-sm.png',
  wordmarkWebp: '/brand/logo-sm.webp',
  stackedPng: '/brand/logo.png',
  stackedWebp: '/brand/logo.webp',
} as const;

export interface LockupOptions {
  readonly layout?: LockupLayout;
  /** Ignored (the logo is the same on every theme). */
  readonly theme?: LockupTheme;
  /** Accessible name. Default «SOTF Mods». Pass `''` for decorative use. */
  readonly title?: string;
  readonly className?: string;
  /** Rendered height in CSS px (width follows the aspect ratio). Default 34 (wordmark) / 96 (stacked). */
  readonly height?: number;
  /** `eager` (default) for the wordmark, `lazy` (default) for the stacked logo. */
  readonly loading?: 'lazy' | 'eager';
}

function escapeAttribute(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function srcset(file: LogoFile, extension: 'webp' | 'png'): string {
  const parts = file.widths.map((width) => `${file.base}-${width}.${extension} ${width}w`);
  parts.push(`${file.base}.${extension} ${file.width}w`);
  return parts.join(', ');
}

/**
 * HTML of the logo (`<picture>`: WebP with PNG fallback, sized so the page never shifts). Render
 * with Astro's `set:html`. The name is historical (the first versions returned an SVG).
 */
export function lockupSvg(options: LockupOptions = {}): string {
  const layout = options.layout === 'stacked' ? 'stacked' : 'wordmark';
  const file: LogoFile = LOGO_FILES[layout];
  const height = Math.max(1, Math.round(options.height ?? (layout === 'stacked' ? 96 : 34)));
  const width = Math.round((file.width / file.height) * height);
  const title = options.title ?? 'SOTF Mods';
  const sizes = `${width}px`;
  const attributes = [
    `src="${file.base}.png"`,
    `srcset="${srcset(file, 'png')}"`,
    `sizes="${sizes}"`,
    `width="${width}"`,
    `height="${height}"`,
    `alt="${escapeAttribute(title)}"`,
    `loading="${options.loading ?? (layout === 'stacked' ? 'lazy' : 'eager')}"`,
    'decoding="async"',
    ...(options.className ? [`class="${escapeAttribute(options.className)}"`] : []),
  ];
  return (
    `<picture><source type="image/webp" srcset="${srcset(file, 'webp')}" sizes="${sizes}">` +
    `<img ${attributes.join(' ')}></picture>`
  );
}

/** Same as {@link lockupSvg}, under a name that says what it returns. */
export const logoPicture = lockupSvg;
