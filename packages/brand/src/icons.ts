/**
 * Favicons and app icons (PLAN §3.2). The SVG favicon follows the browser colour scheme;
 * raster icons put the isotype on a Night tile (22 % corner radius) or full-bleed for
 * maskable / Apple touch icons.
 */

import { logoColors } from './colors.ts';
import { type MarkVariant, markPathData } from './mark.ts';
import { fmt } from './svg.ts';

/** `/favicon.svg`: simplified mark, Day Flare by default and Night Flare in dark UIs. */
export function faviconSvg(): string {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>SOTF Mods</title>' +
    `<style>path{fill:${logoColors.day.flare}}@media (prefers-color-scheme:dark){path{fill:${logoColors.night.flare}}}</style>` +
    `<path fill-rule="evenodd" d="${markPathData('simple')}"/>` +
    '</svg>'
  );
}

export type AppIconShape = 'tile' | 'full-bleed' | 'maskable';

export interface AppIconSpec {
  /** File name inside the public directory (relative to `/`). */
  readonly file: string;
  readonly size: number;
  readonly shape: AppIconShape;
  readonly variant: MarkVariant;
  /** Web app manifest purpose, when the icon belongs in the manifest. */
  readonly purpose?: 'any' | 'maskable';
}

/** Raster icons produced by `scripts/build-icons.ts`. */
export const APP_ICONS: readonly AppIconSpec[] = [
  { file: 'brand/favicon-16.png', size: 16, shape: 'tile', variant: 'simple' },
  { file: 'brand/favicon-32.png', size: 32, shape: 'tile', variant: 'full' },
  { file: 'brand/favicon-48.png', size: 48, shape: 'tile', variant: 'full' },
  { file: 'apple-touch-icon.png', size: 180, shape: 'full-bleed', variant: 'full' },
  { file: 'brand/icon-192.png', size: 192, shape: 'tile', variant: 'full', purpose: 'any' },
  { file: 'brand/icon-512.png', size: 512, shape: 'tile', variant: 'full', purpose: 'any' },
  { file: 'brand/icon-maskable-192.png', size: 192, shape: 'maskable', variant: 'full', purpose: 'maskable' },
  { file: 'brand/icon-maskable-512.png', size: 512, shape: 'maskable', variant: 'full', purpose: 'maskable' },
];

/** Sizes bundled in `/favicon.ico`. */
export const FAVICON_ICO_SIZES = [16, 32, 48] as const;

/**
 * Relative scale of the mark per shape: `tile` fills most of the rounded square, Apple
 * icons leave room for the system mask, maskable icons keep the pin inside the 80 % safe
 * circle (the pin's half-diagonal is 36.8 u of 64).
 */
const MARK_SCALE: Readonly<Record<AppIconShape, number>> = { tile: 0.8, 'full-bleed': 0.74, maskable: 0.62 };

/** SVG source of one app icon (rasterised by the build). */
export function appIconSvg(shape: AppIconShape, variant: MarkVariant = 'full'): string {
  const background = logoColors.night.background;
  const tile =
    shape === 'tile'
      ? `<rect width="64" height="64" rx="${fmt(64 * 0.22)}" fill="${background}"/>`
      : `<rect width="64" height="64" fill="${background}"/>`;
  const scale = MARK_SCALE[shape];
  // Centre the pin's ink box (x 9–55, y 3.5–61 → centre 32, 32.25) on the artboard.
  const offset = 32 - 32 * scale;
  const offsetY = 32 - 32.25 * scale;
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
    tile +
    `<path transform="translate(${fmt(offset, 3)} ${fmt(offsetY, 3)}) scale(${fmt(scale, 3)})" fill="${logoColors.night.flare}" fill-rule="evenodd" d="${markPathData(variant)}"/>` +
    '</svg>'
  );
}

/** Icons for a web app manifest (`/manifest.webmanifest`). */
export function manifestIcons(base = '/'): Array<{ src: string; sizes: string; type: string; purpose: string }> {
  return APP_ICONS.filter((icon) => icon.purpose !== undefined).map((icon) => ({
    src: `${base}${icon.file}`,
    sizes: `${icon.size}x${icon.size}`,
    type: 'image/png',
    purpose: icon.purpose as string,
  }));
}
