/**
 * Downloadable brand assets of `/brand` (PLAN §3.2, research/03 §6.15): the files `@sotf/brand`
 * generates into `public/brand/` (verified against its manifest by `pnpm gen`). Sizes are the
 * intrinsic ones, so previews reserve their space (no layout shift).
 */
import { palette } from '@sotf/brand/colors';

export type AssetSurface = 'night' | 'day';

export interface AssetFile {
  format: 'SVG' | 'PNG';
  href: string;
  /** Pixel size of PNGs. */
  size?: string;
}

export interface BrandAsset {
  id: 'horizontal' | 'stacked' | 'mark' | 'wordmark' | 'app-icon' | 'og';
  /** Preview per surface (the asset variant drawn for that background). */
  previews: Readonly<Record<AssetSurface, { src: string; width: number; height: number }>>;
  files: Readonly<Record<AssetSurface, readonly AssetFile[]>>;
}

export const BRAND_ASSETS: readonly BrandAsset[] = [
  {
    id: 'horizontal',
    previews: {
      night: { src: '/brand/logo-horizontal-night.svg', width: 314, height: 58 },
      day: { src: '/brand/logo-horizontal-day.svg', width: 314, height: 58 },
    },
    files: {
      night: [
        { format: 'SVG', href: '/brand/logo-horizontal-night.svg' },
        { format: 'PNG', href: '/brand/logo-horizontal-night.png', size: '619 × 160' },
      ],
      day: [
        { format: 'SVG', href: '/brand/logo-horizontal-day.svg' },
        { format: 'PNG', href: '/brand/logo-horizontal-day.png', size: '619 × 160' },
      ],
    },
  },
  {
    id: 'stacked',
    previews: {
      night: { src: '/brand/logo-stacked-night.svg', width: 86, height: 156 },
      day: { src: '/brand/logo-stacked-day.svg', width: 86, height: 156 },
    },
    files: {
      night: [
        { format: 'SVG', href: '/brand/logo-stacked-night.svg' },
        { format: 'PNG', href: '/brand/logo-stacked-night.png', size: '321 × 512' },
      ],
      day: [
        { format: 'SVG', href: '/brand/logo-stacked-day.svg' },
        { format: 'PNG', href: '/brand/logo-stacked-day.png', size: '321 × 512' },
      ],
    },
  },
  {
    id: 'mark',
    previews: {
      night: { src: '/brand/mark.svg', width: 64, height: 64 },
      day: { src: '/brand/mark-day.svg', width: 64, height: 64 },
    },
    files: {
      night: [
        { format: 'SVG', href: '/brand/mark.svg' },
        { format: 'SVG', href: '/brand/mark-simple.svg', size: '16–24 px' },
        { format: 'PNG', href: '/brand/logo-mark.png', size: '512 × 512' },
      ],
      day: [
        { format: 'SVG', href: '/brand/mark-day.svg' },
        { format: 'SVG', href: '/brand/mark-simple.svg', size: '16–24 px' },
      ],
    },
  },
  {
    id: 'wordmark',
    previews: {
      night: { src: '/brand/wordmark-night.svg', width: 255, height: 46 },
      day: { src: '/brand/wordmark-day.svg', width: 255, height: 46 },
    },
    files: {
      night: [{ format: 'SVG', href: '/brand/wordmark-night.svg' }],
      day: [{ format: 'SVG', href: '/brand/wordmark-day.svg' }],
    },
  },
  {
    id: 'app-icon',
    previews: {
      night: { src: '/brand/icon-192.png', width: 192, height: 192 },
      day: { src: '/brand/icon-192.png', width: 192, height: 192 },
    },
    files: {
      night: [
        { format: 'PNG', href: '/brand/icon-512.png', size: '512 × 512' },
        { format: 'PNG', href: '/brand/icon-maskable-512.png', size: '512 × 512 maskable' },
      ],
      day: [{ format: 'PNG', href: '/brand/icon-512.png', size: '512 × 512' }],
    },
  },
  {
    id: 'og',
    previews: {
      night: { src: '/brand/og-default.png', width: 1200, height: 630 },
      day: { src: '/brand/og-default.png', width: 1200, height: 630 },
    },
    files: {
      night: [
        { format: 'PNG', href: '/brand/og-default.png', size: '1200 × 630' },
        { format: 'SVG', href: '/brand/og-default.svg' },
      ],
      day: [{ format: 'PNG', href: '/brand/og-default.png', size: '1200 × 630' }],
    },
  },
];

export interface Swatch {
  /** Message suffix of the colour's name. */
  id: 'night' | 'bone' | 'flare-night' | 'flare-day' | 'signal' | 'lichen' | 'solafite' | 'blueprint';
  hex: string;
  /** Text colour that stays readable on the swatch. */
  on: string;
}

/** Core palette (PLAN §3.3), from the literal brand values of `@sotf/brand`. */
export const BRAND_SWATCHES: readonly Swatch[] = [
  { id: 'night', hex: palette.night[975], on: palette.night[50] },
  { id: 'bone', hex: palette.night[50], on: palette.night[975] },
  { id: 'flare-night', hex: palette.flare[400], on: palette.night[975] },
  { id: 'flare-day', hex: palette.flare[500], on: palette.night[975] },
  { id: 'signal', hex: palette.signal[300], on: palette.night[975] },
  { id: 'lichen', hex: palette.lichen[300], on: palette.night[975] },
  { id: 'solafite', hex: palette.solafite[200], on: palette.night[975] },
  { id: 'blueprint', hex: palette.blueprint[300], on: palette.night[975] },
];

/** Typefaces of the brand (PLAN §3.4), with their licence (all SIL OFL 1.1). */
export const BRAND_FONTS = [
  {
    id: 'display',
    name: 'Big Shoulders',
    className: 'font-display-caps',
    url: 'https://fonts.google.com/specimen/Big+Shoulders',
  },
  { id: 'ui', name: 'Onest', className: 'font-sans', url: 'https://fonts.google.com/specimen/Onest' },
  { id: 'mono', name: 'Martian Mono', className: 'font-mono', url: 'https://fonts.google.com/specimen/Martian+Mono' },
] as const;
