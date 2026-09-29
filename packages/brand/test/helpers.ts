import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import sharp from 'sharp';

export function sha256(input: string | Buffer): string {
  return createHash('sha256').update(input).digest('hex');
}

/** Gzip size at the level CDNs use for static text assets. */
export function gzipSize(input: string | Buffer): number {
  return gzipSync(input, { level: 9 }).length;
}

/** Parses and rasterises an SVG with librsvg; throws on malformed markup. */
export async function rasterise(svg: string, width = 64): Promise<{ width: number; height: number }> {
  const { info } = await sharp(Buffer.from(svg), { density: 72 })
    .resize({ width })
    .png()
    .toBuffer({ resolveWithObject: true });
  return { width: info.width, height: info.height };
}

/**
 * Whether raster assets must match byte for byte. PNG bytes are only stable for the pinned
 * sharp/libvips build on linux-x64 (CI and Docker); other platforms get a pixel-tolerance check.
 * `CI=true` or `SOTF_BRAND_STRICT_ASSETS=1` force the strict check anywhere.
 */
export function strictRasterComparison(env: NodeJS.ProcessEnv = process.env): boolean {
  if (env.SOTF_BRAND_STRICT_ASSETS === '0') {
    return false;
  }
  return (
    (process.platform === 'linux' && process.arch === 'x64') ||
    env.CI === 'true' ||
    env.SOTF_BRAND_STRICT_ASSETS === '1'
  );
}

/** Splits a PNG-compressed ICO container into its embedded PNG images. */
export function icoImages(ico: Buffer): Buffer[] {
  const count = ico.readUInt16LE(4);
  const images: Buffer[] = [];
  for (let i = 0; i < count; i += 1) {
    const entry = 6 + i * 16;
    const length = ico.readUInt32LE(entry + 8);
    const offset = ico.readUInt32LE(entry + 12);
    images.push(ico.subarray(offset, offset + length));
  }
  return images;
}

export interface RasterDifference {
  /** `null` when both images decode to the same size and channel count. */
  readonly shapeMismatch: string | null;
  /** Mean absolute difference per channel sample, 0–255. */
  readonly meanDelta: number;
  /** Share of pixels whose largest channel difference exceeds `outlierThreshold`. */
  readonly outlierRatio: number;
}

/** Decodes two PNGs to RGBA and measures how far apart they are. */
export async function rasterDifference(a: Buffer, b: Buffer, outlierThreshold = 32): Promise<RasterDifference> {
  const decode = (png: Buffer) => sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const [left, right] = await Promise.all([decode(a), decode(b)]);
  const shape = (info: { width: number; height: number; channels: number }) =>
    `${info.width}x${info.height}x${info.channels}`;
  if (shape(left.info) !== shape(right.info)) {
    return {
      shapeMismatch: `${shape(left.info)} ≠ ${shape(right.info)}`,
      meanDelta: Number.POSITIVE_INFINITY,
      outlierRatio: 1,
    };
  }
  const { channels } = left.info;
  let total = 0;
  let outliers = 0;
  for (let pixel = 0; pixel < left.data.length; pixel += channels) {
    let worst = 0;
    for (let channel = 0; channel < channels; channel += 1) {
      const delta = Math.abs((left.data[pixel + channel] as number) - (right.data[pixel + channel] as number));
      total += delta;
      if (delta > worst) {
        worst = delta;
      }
    }
    if (worst > outlierThreshold) {
      outliers += 1;
    }
  }
  const pixels = left.data.length / channels;
  return { shapeMismatch: null, meanDelta: total / left.data.length, outlierRatio: outliers / pixels };
}
