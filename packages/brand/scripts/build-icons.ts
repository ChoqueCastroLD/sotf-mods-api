/**
 * Raster brand assets with sharp (librsvg): favicons, app icons, `favicon.ico`, logo PNGs
 * and the default OG image. Output is byte-for-byte reproducible for a given sharp/libvips
 * version (no metadata, fixed encoder settings), which `build:assets --check` verifies.
 *
 * Usually run through `pnpm build:assets`; `node scripts/build-icons.ts` rebuilds only the
 * raster files.
 */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

export interface BrandModule {
  readonly APP_ICONS: typeof import('../src/icons.ts').APP_ICONS;
  readonly FAVICON_ICO_SIZES: typeof import('../src/icons.ts').FAVICON_ICO_SIZES;
  readonly appIconSvg: typeof import('../src/icons.ts').appIconSvg;
  readonly lockupSvg: typeof import('../src/logo.ts').lockupSvg;
  readonly markSvg: typeof import('../src/mark.ts').markSvg;
  readonly ogDefaultSvg: typeof import('../src/og.ts').ogDefaultSvg;
}

/** Progress output for the CLI (stdout; errors go to stderr). */
export function log(message: string): void {
  process.stdout.write(`${message}\n`);
}

export interface BuiltFile {
  /** Path relative to `assets/`. */
  readonly path: string;
  readonly bytes: Buffer;
}

/** Sets the intrinsic size of an SVG so librsvg rasterises it at exactly that size. */
function sized(svg: string, width: number, height: number): Buffer {
  const open = /^<svg\b[^>]*>/.exec(svg)?.[0];
  if (open === undefined) {
    throw new Error('Expected an SVG document starting with <svg>');
  }
  const resized = open
    .replace(/\s(?:width|height)="[^"]*"/g, '')
    .replace(/^<svg/, `<svg width="${width}" height="${height}"`);
  return Buffer.from(resized + svg.slice(open.length));
}

/** Rasterises an SVG to PNG at an exact pixel size with fixed encoder settings. */
export async function renderPng(
  svg: string,
  width: number,
  height: number = width,
  options: { readonly palette?: boolean } = {},
): Promise<Buffer> {
  const image = sharp(sized(svg, width, height), { density: 72 });
  const { width: actualWidth, height: actualHeight } = await image.metadata();
  const pipeline =
    actualWidth === width && actualHeight === height ? image : image.resize(width, height, { fit: 'fill' });
  return pipeline
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: options.palette ?? false,
      // Palette mode (libimagequant, no dithering) keeps the OG image well under 100 KB.
      ...(options.palette ? { quality: 90, colours: 128, dither: 0, effort: 10 } : {}),
    })
    .toBuffer();
}

/** Packs PNG images into an ICO container (PNG-compressed entries, Vista+). */
export function encodeIco(images: ReadonlyArray<{ readonly size: number; readonly png: Buffer }>): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries: Buffer[] = [];
  let offset = 6 + images.length * 16;
  for (const { size, png } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }
  return Buffer.concat([header, ...entries, ...images.map((image) => image.png)]);
}

/** Logo PNGs kept for legacy URLs (`/static/images/logo*.png` → `/brand/logo-*.png`). */
const LOGO_PNGS = [
  { file: 'public/brand/logo-horizontal-night.png', layout: 'horizontal', theme: 'night', height: 160 },
  { file: 'public/brand/logo-horizontal-day.png', layout: 'horizontal', theme: 'day', height: 160 },
  { file: 'public/brand/logo-stacked-night.png', layout: 'stacked', theme: 'night', height: 512 },
  { file: 'public/brand/logo-stacked-day.png', layout: 'stacked', theme: 'day', height: 512 },
] as const;

/** Builds every raster asset in memory. */
export async function buildRasterAssets(brand: BrandModule): Promise<BuiltFile[]> {
  const files: BuiltFile[] = [];
  const icoImages: Array<{ size: number; png: Buffer }> = [];
  for (const icon of brand.APP_ICONS) {
    const png = await renderPng(brand.appIconSvg(icon.shape, icon.variant), icon.size);
    files.push({ path: `public/${icon.file}`, bytes: png });
    if ((brand.FAVICON_ICO_SIZES as readonly number[]).includes(icon.size) && icon.shape === 'tile') {
      icoImages.push({ size: icon.size, png });
    }
  }
  icoImages.sort((a, b) => a.size - b.size);
  files.push({ path: 'public/favicon.ico', bytes: encodeIco(icoImages) });

  for (const logo of LOGO_PNGS) {
    // Clear space: 25 % of the mark height (64 u) on every side.
    const svg = brand.lockupSvg({ layout: logo.layout, theme: logo.theme, padding: 16 });
    const viewBox = /viewBox="([^"]+)"/.exec(svg)?.[1]?.split(' ').map(Number) ?? [];
    const aspect = (viewBox[2] ?? 1) / (viewBox[3] ?? 1);
    files.push({ path: logo.file, bytes: await renderPng(svg, Math.round(logo.height * aspect), logo.height) });
  }
  files.push({
    path: 'public/brand/logo-mark.png',
    bytes: await renderPng(brand.markSvg({ title: 'SOTF Mods' }), 512),
  });
  files.push({
    path: 'public/brand/og-default.png',
    bytes: await renderPng(brand.ogDefaultSvg(), 1200, 630, { palette: true }),
  });
  return files;
}

async function main(): Promise<void> {
  const root = join(dirname(fileURLToPath(import.meta.url)), '..');
  const brand = (await import('../src/index.ts')) as BrandModule;
  for (const file of await buildRasterAssets(brand)) {
    const target = join(root, 'assets', file.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, file.bytes);
    log(`wrote assets/${file.path} (${file.bytes.length} B)`);
  }
}

if (import.meta.main) {
  await main();
}
