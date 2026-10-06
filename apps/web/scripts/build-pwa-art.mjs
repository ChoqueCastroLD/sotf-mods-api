/**
 * Generates the optimized raster assets of the app shell (committed; run when art changes):
 *
 *   node apps/web/scripts/build-pwa-art.mjs            # art derivatives + iOS splash screens
 *   node apps/web/scripts/build-pwa-art.mjs --splash-only   # only the splash screens
 *   ART_SRC=/path/to/art-src node apps/web/scripts/build-pwa-art.mjs
 *
 * - `public/art/<name>-<width>.{avif,webp}`: responsive derivatives of the concept art in
 *   `ART_SRC` (default `/root/sotf-mods/art-src`, 1.5 MB originals stay out of the repo);
 * - `public/pwa/splash-<w>x<h>.jpg`: iOS launch screens (the dark page background and the stacked
 *   red logo of the old site), one per device class of `src/lib/pwa.ts`.
 *
 * `sharp` is resolved from `packages/brand` (it is a dev dependency there).
 */
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, '..');
const sharp = createRequire(join(web, '../../packages/brand/package.json'))('sharp');
const ART_SRC = process.env.ART_SRC ?? '/root/sotf-mods/art-src';

/** name → source file, output widths (px) and per-format quality. */
const ART = [{ name: 'offline', src: 'offline.png', widths: [640, 896], avif: 52, webp: 74 }];

async function buildArt() {
  await mkdir(join(web, 'public/art'), { recursive: true });
  for (const art of ART) {
    for (const width of art.widths) {
      const base = sharp(join(ART_SRC, art.src), { limitInputPixels: false }).resize({
        width,
        withoutEnlargement: true,
      });
      const out = join(web, 'public/art', `${art.name}-${width}`);
      const avif = await base.clone().avif({ quality: art.avif, effort: 6 }).toFile(`${out}.avif`);
      const webp = await base.clone().webp({ quality: art.webp, effort: 6 }).toFile(`${out}.webp`);
      process.stdout.write(
        `art ${art.name}-${width}: avif ${(avif.size / 1024).toFixed(0)} KB, webp ${(webp.size / 1024).toFixed(0)} KB`,
      );
    }
  }
}

const SPLASH = [
  [440, 956, 3],
  [402, 874, 3],
  [430, 932, 3],
  [393, 852, 3],
  [428, 926, 3],
  [390, 844, 3],
  [375, 812, 3],
  [414, 896, 2],
  [375, 667, 2],
  [1024, 1366, 2],
  [834, 1194, 2],
  [820, 1180, 2],
];

async function buildSplash() {
  await mkdir(join(web, 'public/pwa'), { recursive: true });
  // The stacked logo cropped to its ink (the source file has empty side margins).
  const logo = await sharp(join(web, '../../packages/brand/sources/logo.png')).trim({ threshold: 8 }).png().toBuffer();
  const { width: logoW, height: logoH } = await sharp(logo).metadata();
  for (const [cssW, cssH, ratio] of SPLASH) {
    const width = cssW * ratio;
    const height = cssH * ratio;
    const logoHeight = Math.round(Math.min(height * 0.2, (width * 0.5 * logoH) / logoW));
    const mark = await sharp(logo).resize({ height: logoHeight }).toBuffer();
    const file = join(web, 'public/pwa', `splash-${width}x${height}.jpg`);
    const info = await sharp({ create: { width, height, channels: 3, background: '#15191E' } })
      .composite([{ input: mark, gravity: 'center' }])
      .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:2:0' })
      .toFile(file);
    process.stdout.write(`splash ${width}x${height}: ${(info.size / 1024).toFixed(0)} KB\n`);
  }
}

if (!process.argv.includes('--splash-only')) await buildArt();
await buildSplash();
