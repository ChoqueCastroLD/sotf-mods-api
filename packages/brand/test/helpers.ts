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
