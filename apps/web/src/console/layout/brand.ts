/**
 * Brand images of the console chrome: the static SVGs of `public/brand` (cached, outside the
 * shell bundle), one per theme; the `light:`/`dark:` variants follow `data-theme` (and «system»).
 */
export const BRAND = {
  lockupNight: '/brand/logo-horizontal-night.svg',
  lockupDay: '/brand/logo-horizontal-day.svg',
  markNight: '/brand/mark.svg',
  markDay: '/brand/mark-day.svg',
} as const;
