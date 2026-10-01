/**
 * Generates the optimized raster assets of the app shell (committed; run when art changes):
 *
 *   node apps/web/scripts/build-pwa-art.mjs            # art derivatives + iOS splash screens
 *   ART_SRC=/path/to/art-src node apps/web/scripts/build-pwa-art.mjs
 *
 * - `public/art/<name>-<width>.{avif,webp}`: responsive derivatives of the concept art in
 *   `ART_SRC` (default `/root/sotf-mods/art-src`, 1.5 MB originals stay out of the repo);
 * - `public/pwa/splash-<w>x<h>.jpg`: iOS launch screens (night background, topographic contours,
 *   the stacked logo), one per device class of `src/lib/pwa.ts`.
 *
 * `sharp` is resolved from `packages/brand` (it is a dev dependency there).
 */
import { mkdir, readFile } from 'node:fs/promises';
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

function innerSvg(svg) {
  return svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
}

async function buildSplash() {
  await mkdir(join(web, 'public/pwa'), { recursive: true });
  const topo = innerSvg(await readFile(join(web, 'public/brand/topo.svg'), 'utf8')).replaceAll(
    'currentColor',
    '#FF7335',
  );
  const logoSvg = await readFile(join(web, 'public/brand/logo-stacked-night.svg'), 'utf8');
  const logoOpen = /<svg[^>]*>/.exec(logoSvg)[0];
  const [, , logoW, logoH] = /viewBox="([\d.\s-]+)"/.exec(logoOpen)[1].trim().split(/\s+/).map(Number);
  for (const [cssW, cssH, ratio] of SPLASH) {
    const width = cssW * ratio;
    const height = cssH * ratio;
    const logoHeight = Math.round(Math.min(height * 0.2, width * 0.5));
    const logoWidth = Math.round((logoHeight * logoW) / logoH);
    const logoX = Math.round((width - logoWidth) / 2);
    const logoY = Math.round(height * 0.5 - logoHeight / 2);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<defs><radialGradient id="g" cx="50%" cy="50%" r="55%"><stop offset="0" stop-color="#FF7335" stop-opacity=".16"/><stop offset="1" stop-color="#FF7335" stop-opacity="0"/></radialGradient></defs>
<rect width="100%" height="100%" fill="#090F0C"/>
<svg x="0" y="0" width="${width}" height="${height}" viewBox="0 0 1440 720" preserveAspectRatio="xMidYMid slice" opacity=".13">${topo}</svg>
<ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.55}" ry="${height * 0.3}" fill="url(#g)"/>
<svg x="${logoX}" y="${logoY}" width="${logoWidth}" height="${logoHeight}" viewBox="0 0 ${logoW} ${logoH}">${innerSvg(logoSvg)}</svg>
</svg>`;
    const file = join(web, 'public/pwa', `splash-${width}x${height}.jpg`);
    const info = await sharp(Buffer.from(svg))
      .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:2:0' })
      .toFile(file);
    process.stdout.write(`splash ${width}x${height}: ${(info.size / 1024).toFixed(0)} KB\n`);
  }
}

await buildArt();
await buildSplash();
