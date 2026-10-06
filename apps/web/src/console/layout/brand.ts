/**
 * Brand images of the console chrome: the old red logo, optimized files of `public/brand`
 * (WebP with a PNG fallback; the logo is red on a transparent background, so one file serves
 * both themes).
 */
export const BRAND = {
  lockupWebp: '/brand/logo-sm-280.webp',
  lockupPng: '/brand/logo-sm-280.png',
  /** Square icon (the stacked logo, centred): the collapsed sidebar and the phone top bar. */
  mark: '/brand/icon-192.png',
} as const;
