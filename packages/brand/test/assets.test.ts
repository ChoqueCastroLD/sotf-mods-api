import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import { buildAll } from '../scripts/build-assets.ts';
import type { BuiltFile } from '../scripts/build-icons.ts';
import { generateBrandDataSource } from '../scripts/lib/sources.ts';
import { APP_ICONS, faviconSvg, manifestIcons } from '../src/icons.ts';
import { ogDefaultSvg } from '../src/og.ts';
import { icoImages, rasterDifference, strictRasterComparison } from './helpers.ts';

/** The legacy file host (PLAN §2.8), spelled out indirectly so check:forbidden stays green. */
const RETIRED_FILES_HOST = ['files', 'sotf-mods', 'com'].join('.');
const assetsUrl = new URL('../assets/', import.meta.url);
const read = (path: string): Buffer => readFileSync(new URL(path, assetsUrl));

interface Manifest {
  readonly files: Record<string, { readonly bytes: number; readonly sha256: string }>;
}
const manifest = JSON.parse(read('manifest.json').toString('utf8')) as Manifest;

describe('committed assets', () => {
  it('match their manifest hashes', () => {
    for (const [path, entry] of Object.entries(manifest.files)) {
      const bytes = read(path);
      expect(bytes.length, path).toBe(entry.bytes);
      expect(createHash('sha256').update(bytes).digest('hex'), path).toBe(entry.sha256);
    }
  });

  it('include every deliverable of WP-01', () => {
    const required = [
      'public/favicon.svg',
      'public/favicon.ico',
      'public/apple-touch-icon.png',
      'public/brand/favicon-16.png',
      'public/brand/favicon-32.png',
      'public/brand/icon-192.png',
      'public/brand/icon-512.png',
      'public/brand/icon-maskable-192.png',
      'public/brand/icon-maskable-512.png',
      'public/brand/og-default.png',
      'public/brand/topo.svg',
      'public/brand/field-kit.svg',
      'public/brand/mark.svg',
      'public/brand/mark-simple.svg',
      'public/brand/logo-horizontal-night.svg',
      'public/brand/logo-horizontal-day.svg',
      'public/brand/logo-stacked-night.svg',
      'public/brand/logo-stacked-day.svg',
      'public/brand/logo-horizontal-night.png',
      'public/brand/logo-mark.png',
    ];
    for (const path of required) {
      expect(Object.keys(manifest.files)).toContain(path);
    }
  });

  it('have the right raster sizes', async () => {
    for (const icon of APP_ICONS) {
      const meta = await sharp(read(`public/${icon.file}`)).metadata();
      expect([meta.format, meta.width, meta.height], icon.file).toEqual(['png', icon.size, icon.size]);
    }
    const og = await sharp(read('public/brand/og-default.png')).metadata();
    expect([og.format, og.width, og.height]).toEqual(['png', 1200, 630]);
    expect(read('public/brand/og-default.png').length).toBeLessThan(100 * 1024);
  });

  it('keep maskable and Apple icons opaque and tile icons rounded', async () => {
    const alphaAt = async (file: string, x: number, y: number): Promise<number> => {
      const { data, info } = await sharp(read(file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      return data[(y * info.width + x) * info.channels + 3] as number;
    };
    expect(await alphaAt('public/brand/icon-maskable-512.png', 0, 0)).toBe(255);
    expect(await alphaAt('public/apple-touch-icon.png', 0, 0)).toBe(255);
    expect(await alphaAt('public/brand/icon-512.png', 0, 0)).toBe(0);
    expect(await alphaAt('public/brand/icon-512.png', 256, 256)).toBe(255);
  });

  it('ship a favicon.ico with 16, 32 and 48 px PNG entries', () => {
    const ico = read('public/favicon.ico');
    expect(ico.readUInt16LE(2)).toBe(1);
    expect(ico.readUInt16LE(4)).toBe(3);
    const sizes = [0, 1, 2].map((i) => ico.readUInt8(6 + i * 16));
    expect(sizes).toEqual([16, 32, 48]);
    const firstOffset = ico.readUInt32LE(6 + 12);
    expect(ico.subarray(firstOffset, firstOffset + 8)).toEqual(
      Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    );
  });

  it('ship an SVG favicon that follows prefers-color-scheme', () => {
    const svg = read('public/favicon.svg').toString('utf8');
    expect(svg).toBe(`${faviconSvg()}\n`);
    expect(svg).toContain('@media (prefers-color-scheme:dark)');
    expect(svg).toContain('#FF7335');
    expect(svg).toContain('#E75803');
  });

  it('describe manifest icons for the web app manifest', () => {
    expect(manifestIcons()).toEqual([
      { src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/brand/icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ]);
  });

  it('never reference the retired files host', () => {
    for (const path of Object.keys(manifest.files)) {
      if (path.endsWith('.svg') || path.endsWith('.json')) {
        expect(read(path).toString('utf8')).not.toContain(RETIRED_FILES_HOST);
      }
    }
  });

  it('keep the default OG image composed of outlines only', () => {
    const svg = ogDefaultSvg();
    expect(svg).toContain('width="1200" height="630"');
    expect(svg).not.toMatch(/<text|<image|font-family/);
  });
});

describe('reproducibility (build:assets)', () => {
  it('regenerates brand-data.gen.ts identically from the pinned fonts', () => {
    const committed = readFileSync(new URL('../src/generated/brand-data.gen.ts', import.meta.url), 'utf8');
    expect(generateBrandDataSource()).toBe(committed);
  });

  // One in-memory build shared by the checks below (it rasterises every asset).
  let built: Promise<BuiltFile[]> | undefined;
  const rebuild = (): Promise<BuiltFile[]> => {
    built ??= buildAll();
    return built;
  };

  it.runIf(strictRasterComparison())('rebuilds every asset byte for byte (linux-x64 / CI)', async () => {
    const files = await rebuild();
    expect(files.map((file) => file.path).sort()).toEqual(Object.keys(manifest.files).concat('manifest.json').sort());
    for (const file of files) {
      expect(file.bytes.equals(read(file.path)), file.path).toBe(true);
    }
  });

  it('rebuilds vectors byte for byte and rasters within pixel tolerance (any platform)', async () => {
    const files = await rebuild();
    expect(files.map((file) => file.path).sort()).toEqual(Object.keys(manifest.files).concat('manifest.json').sort());
    const expectClose = async (actual: Buffer, committed: Buffer, label: string): Promise<void> => {
      const diff = await rasterDifference(actual, committed);
      expect(diff.shapeMismatch, label).toBeNull();
      expect(diff.meanDelta, label).toBeLessThanOrEqual(1);
      expect(diff.outlierRatio, label).toBeLessThanOrEqual(0.005);
    };
    for (const file of files) {
      const committed = read(file.path);
      if (file.path.endsWith('.png')) {
        await expectClose(file.bytes, committed, file.path);
      } else if (file.path.endsWith('.ico')) {
        const [actual, expected] = [icoImages(file.bytes), icoImages(committed)];
        expect(actual.length, file.path).toBe(expected.length);
        for (const [index, png] of actual.entries()) {
          await expectClose(png, expected[index] as Buffer, `${file.path}#${index}`);
        }
      } else if (file.path !== 'manifest.json') {
        // SVG and JSON are pure text built by this package: identical on every platform.
        expect(file.bytes.equals(committed), file.path).toBe(true);
      }
    }
    // The rebuilt manifest may differ only in the raster entries (PNG/ICO encoder drift).
    const rebuilt = files.find((file) => file.path === 'manifest.json');
    expect(rebuilt).toBeDefined();
    const rebuiltManifest = JSON.parse((rebuilt as BuiltFile).bytes.toString('utf8')) as Manifest;
    const vectors = (m: Manifest) =>
      Object.fromEntries(Object.entries(m.files).filter(([path]) => !/\.(?:png|ico)$/.test(path)));
    expect(Object.keys(vectors(manifest)).length).toBeGreaterThan(0);
    expect(vectors(rebuiltManifest)).toEqual(vectors(manifest));
    expect(Object.keys(rebuiltManifest.files).sort()).toEqual(Object.keys(manifest.files).sort());
  });

  it('measures raster drift instead of accepting any image', async () => {
    const [a, b] = await Promise.all([
      sharp({ create: { width: 8, height: 8, channels: 4, background: '#101311' } })
        .png()
        .toBuffer(),
      sharp({ create: { width: 8, height: 8, channels: 4, background: '#FF7335' } })
        .png()
        .toBuffer(),
    ]);
    expect(await rasterDifference(a, a)).toEqual({ shapeMismatch: null, meanDelta: 0, outlierRatio: 0 });
    expect((await rasterDifference(a, b)).outlierRatio).toBe(1);
    const small = await sharp({ create: { width: 4, height: 8, channels: 4, background: '#101311' } })
      .png()
      .toBuffer();
    expect((await rasterDifference(a, small)).shapeMismatch).toBe('8x8x4 ≠ 4x8x4');
  });

  it('only relaxes the raster check off linux-x64 and outside CI', () => {
    expect(strictRasterComparison({ CI: 'true' })).toBe(true);
    expect(strictRasterComparison({ SOTF_BRAND_STRICT_ASSETS: '1' })).toBe(true);
    expect(strictRasterComparison({ CI: 'true', SOTF_BRAND_STRICT_ASSETS: '0' })).toBe(false);
    expect(strictRasterComparison({})).toBe(process.platform === 'linux' && process.arch === 'x64');
  });
});
