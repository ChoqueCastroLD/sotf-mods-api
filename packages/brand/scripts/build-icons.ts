/**
 * Raster brand assets with sharp: the optimized logos (WebP + PNG, 1x/2x), favicons, app icons,
 * `favicon.ico`, `favicon.svg` and the default OG image. Everything derives from the images
 * of the old site kept in `sources/` (red logo on a transparent background). Output is
 * reproducible for a given sharp/libvips version (no metadata, fixed encoder settings), which
 * `build:assets --check` verifies.
 *
 * Usually run through `pnpm build:assets`; `node scripts/build-icons.ts` rebuilds only these files.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { APP_ICONS, FAVICON_ICO_SIZES } from '../src/icons.ts';
import { LOGO_FILES } from '../src/logo.ts';
import { OG_HEIGHT, OG_WIDTH } from '../src/og.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCES = join(ROOT, 'sources');

/** Page background of the dark theme: the tile colour of Apple, maskable and OG images. */
export const DARK_BACKGROUND = '#15191E';

/** Progress output for the CLI (stdout; errors go to stderr). */
export function log(message: string): void {
  process.stdout.write(`${message}\n`);
}

export interface BuiltFile {
  /** Path relative to `assets/`. */
  readonly path: string;
  readonly bytes: Buffer;
}

const source = (name: string): Promise<Buffer> => readFile(join(SOURCES, name));

const PNG = {
  compressionLevel: 9,
  adaptiveFiltering: true,
  palette: true,
  quality: 95,
  effort: 10,
  dither: 0,
} as const;
/** Flat red art: lossless is usually smallest, near-lossless wins on resized copies. */
async function smallestWebp(image: ReturnType<typeof sharp>): Promise<Buffer> {
  const candidates = await Promise.all([
    image.clone().webp({ lossless: true, effort: 6 }).toBuffer(),
    image.clone().webp({ nearLossless: true, quality: 60, effort: 6 }).toBuffer(),
  ]);
  return candidates.reduce((best, next) => (next.length < best.length ? next : best));
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

/** The stacked logo cropped to its ink (the old file has empty margins). */
async function trimmed(name: string): Promise<Buffer> {
  return sharp(await source(name))
    .trim({ threshold: 8 })
    .png()
    .toBuffer();
}

/** `ink` scaled to `height` px tall and centred on a `size` x `size` canvas. */
async function tile(ink: Buffer, size: number, height: number, background?: string): Promise<Buffer> {
  const mark = await sharp(ink)
    .resize({ height: Math.round(height), fit: 'inside' })
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: mark, gravity: 'center' }])
    .png(PNG)
    .toBuffer();
}

async function logoFiles(): Promise<BuiltFile[]> {
  const files: BuiltFile[] = [];
  const sets = [
    { name: 'logo-sm.png', spec: LOGO_FILES.wordmark },
    { name: 'logo.png', spec: LOGO_FILES.stacked },
  ] as const;
  for (const { name, spec } of sets) {
    const input = await source(name);
    const sizes = [...spec.widths, spec.width];
    for (const width of sizes) {
      const suffix = width === spec.width ? '' : `-${width}`;
      const image = sharp(input).resize({ width, withoutEnlargement: true });
      files.push({
        path: `public${spec.base}${suffix}.png`,
        bytes: await image.clone().png(PNG).toBuffer(),
      });
      files.push({ path: `public${spec.base}${suffix}.webp`, bytes: await smallestWebp(image) });
    }
  }
  return files;
}

/** Builds every raster asset in memory. */
export async function buildRasterAssets(): Promise<BuiltFile[]> {
  const files = await logoFiles();
  const ink = await trimmed('android-chrome-512x512.png');
  const icoImages: Array<{ size: number; png: Buffer }> = [];

  for (const icon of APP_ICONS) {
    let png: Buffer;
    if (icon.size === 16 || icon.size === 32) {
      // The favicons of the old site, as they were.
      png = await sharp(await source(`favicon-${icon.size}x${icon.size}.png`))
        .png(PNG)
        .toBuffer();
    } else if (icon.shape === 'dark') {
      png = await tile(ink, icon.size, icon.size * 0.74, DARK_BACKGROUND);
    } else if (icon.shape === 'maskable') {
      // Ink inside the 80 % safe circle: its half-diagonal (0.59 x height) stays under 0.4 x size.
      png = await tile(ink, icon.size, icon.size * 0.6, DARK_BACKGROUND);
    } else if (icon.size >= 192) {
      png = await sharp(await source(`android-chrome-${icon.size}x${icon.size}.png`))
        .png(PNG)
        .toBuffer();
    } else {
      png = await tile(ink, icon.size, icon.size);
    }
    files.push({ path: `public/${icon.file}`, bytes: png });
    if ((FAVICON_ICO_SIZES as readonly number[]).includes(icon.size) && icon.shape === 'transparent') {
      icoImages.push({ size: icon.size, png });
    }
  }
  icoImages.sort((a, b) => a.size - b.size);
  files.push({ path: 'public/favicon.ico', bytes: encodeIco(icoImages) });

  // SVG favicon: the 64 px icon embedded as a data URI (the old logo is a raster image).
  const svgIcon = await tile(ink, 64, 64);
  files.push({
    path: 'public/favicon.svg',
    bytes: Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>SOTF Mods</title><image width="64" height="64" href="data:image/png;base64,${svgIcon.toString('base64')}"/></svg>\n`,
    ),
  });

  // Legacy names kept while old links and e-mails still point to them.
  const wordmark = files.find((file) => file.path === 'public/brand/logo-sm.png')?.bytes as Buffer;
  files.push({ path: 'public/brand/logo-horizontal-night.png', bytes: wordmark });
  files.push({ path: 'public/brand/logo-horizontal-day.png', bytes: wordmark });
  files.push({
    path: 'public/brand/logo-mark.png',
    bytes: files.find((file) => file.path === 'public/brand/icon-512.png')?.bytes as Buffer,
  });

  // Default OG image: the page background with the stacked logo centred.
  const logoHeight = 380;
  const logo = await sharp(ink).resize({ height: logoHeight }).toBuffer();
  files.push({
    path: 'public/brand/og-default.png',
    bytes: await sharp({
      create: { width: OG_WIDTH, height: OG_HEIGHT, channels: 3, background: DARK_BACKGROUND },
    })
      .composite([{ input: logo, gravity: 'center' }])
      .png({ ...PNG, colours: 32 })
      .toBuffer(),
  });
  return files;
}

async function main(): Promise<void> {
  for (const file of await buildRasterAssets()) {
    const target = join(ROOT, 'assets', file.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, file.bytes);
    log(`wrote assets/${file.path} (${file.bytes.length} B)`);
  }
}

if (import.meta.main) {
  await main();
}
