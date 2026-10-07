/**
 * Generates the iOS launch screens of the app shell (committed; run when the logo or the page
 * colour changes):
 *
 *   node apps/web/scripts/build-pwa-art.mjs
 *
 * There is no picture art in the app (the decorative pattern is the programmatic `Motif`).
 *
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
    const info = await sharp({ create: { width, height, channels: 3, background: '#0E1114' } })
      .composite([{ input: mark, gravity: 'center' }])
      .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:2:0' })
      .toFile(file);
    process.stdout.write(`splash ${width}x${height}: ${(info.size / 1024).toFixed(0)} KB\n`);
  }
}

await buildSplash();
