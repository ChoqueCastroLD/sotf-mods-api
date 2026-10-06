/**
 * Favicons and app icons: derived from the favicons and Android icons of the old site (the
 * stacked red logo). The Apple touch icon and the maskable icons sit on the dark page
 * background; the `any` icons and favicons stay transparent like the old ones.
 */

export type AppIconShape = 'transparent' | 'dark' | 'maskable';

export interface AppIconSpec {
  /** File name inside the public directory (relative to `/`). */
  readonly file: string;
  readonly size: number;
  readonly shape: AppIconShape;
  /** Web app manifest purpose, when the icon belongs in the manifest. */
  readonly purpose?: 'any' | 'maskable';
}

/** Raster icons produced by `scripts/build-icons.ts`. */
export const APP_ICONS: readonly AppIconSpec[] = [
  { file: 'brand/favicon-16.png', size: 16, shape: 'transparent' },
  { file: 'brand/favicon-32.png', size: 32, shape: 'transparent' },
  { file: 'brand/favicon-48.png', size: 48, shape: 'transparent' },
  { file: 'apple-touch-icon.png', size: 180, shape: 'dark' },
  { file: 'brand/icon-192.png', size: 192, shape: 'transparent', purpose: 'any' },
  { file: 'brand/icon-512.png', size: 512, shape: 'transparent', purpose: 'any' },
  { file: 'brand/icon-maskable-192.png', size: 192, shape: 'maskable', purpose: 'maskable' },
  { file: 'brand/icon-maskable-512.png', size: 512, shape: 'maskable', purpose: 'maskable' },
];

/** Sizes bundled in `/favicon.ico`. */
export const FAVICON_ICO_SIZES = [16, 32, 48] as const;

/** Icons for a web app manifest (`/manifest.webmanifest`). */
export function manifestIcons(base = '/'): Array<{ src: string; sizes: string; type: string; purpose: string }> {
  return APP_ICONS.filter((icon) => icon.purpose !== undefined).map((icon) => ({
    src: `${base}${icon.file}`,
    sizes: `${icon.size}x${icon.size}`,
    type: 'image/png',
    purpose: icon.purpose as string,
  }));
}
