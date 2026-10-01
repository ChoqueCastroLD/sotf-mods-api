/**
 * App-shell constants shared by the layout and the asset generator
 * (`apps/web/scripts/build-pwa-art.mjs`): the iOS splash screens and the pages that get the
 * pull-to-refresh indicator.
 */

export interface SplashSize {
  /** CSS pixels of the device (portrait). */
  readonly width: number;
  readonly height: number;
  readonly ratio: number;
}

/** Portrait splash screens, one per iOS device class (landscape falls back to the system). */
export const SPLASH_SIZES: readonly SplashSize[] = [
  { width: 440, height: 956, ratio: 3 }, // iPhone 16/17 Pro Max
  { width: 402, height: 874, ratio: 3 }, // iPhone 16/17 Pro
  { width: 430, height: 932, ratio: 3 }, // 14/15 Pro Max, 15 Plus
  { width: 393, height: 852, ratio: 3 }, // 14 Pro, 15, 16
  { width: 428, height: 926, ratio: 3 }, // 12/13 Pro Max, 14 Plus
  { width: 390, height: 844, ratio: 3 }, // 12/13/14
  { width: 375, height: 812, ratio: 3 }, // X, XS, 11 Pro, 12/13 mini
  { width: 414, height: 896, ratio: 2 }, // XR, 11
  { width: 375, height: 667, ratio: 2 }, // 8, SE
  { width: 1024, height: 1366, ratio: 2 }, // iPad Pro 12.9
  { width: 834, height: 1194, ratio: 2 }, // iPad Pro 11
  { width: 820, height: 1180, ratio: 2 }, // iPad Air / 10.9
];

export function splashFile(size: SplashSize): string {
  return `splash-${size.width * size.ratio}x${size.height * size.ratio}.jpg`;
}

export const IOS_SPLASH_SCREENS: ReadonlyArray<{ href: string; media: string }> = SPLASH_SIZES.map((size) => ({
  href: `/pwa/${splashFile(size)}`,
  media: `(device-width: ${size.width}px) and (device-height: ${size.height}px) and (-webkit-device-pixel-ratio: ${size.ratio}) and (orientation: portrait)`,
}));

/** Feed-like templates where pulling down to refresh makes sense (installed app only). */
export const PULL_TO_REFRESH_TEMPLATES: ReadonlySet<string> = new Set([
  'home',
  'explore',
  'kits',
  'requests',
  'jams',
  'news',
  'creators',
  'search',
  'best',
  'patch-radar',
]);
