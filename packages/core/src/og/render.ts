/**
 * `renderOgPng(card)`: satori (text → SVG paths) + sharp (SVG → PNG) at 1200 × 630, under 100 KB
 * (PLAN §8.6; social scrapers and Discord refuse or downscale heavier images).
 *
 * The background (terrain) and the foreground (satori) are rasterized by sharp/librsvg and
 * composited; the PNG is palette-quantized, stepping down the palette until it fits the budget.
 */
import { createHash } from 'node:crypto';
import satori from 'satori';
import sharp from 'sharp';
import { ogFonts } from './fonts.ts';
import { backgroundSvg, foregroundTree, OG_HEIGHT, OG_TEMPLATE_VERSION, OG_WIDTH, type OgCard } from './template.ts';

/** Size budget of an OG image (PLAN §8.6 acceptance: < 100 KB). */
export const OG_MAX_BYTES = 100 * 1024;
/** Palette sizes tried in order until the PNG fits {@link OG_MAX_BYTES}. */
const PALETTE_STEPS = [256, 128, 64, 32] as const;

/** Content hash of a card (names the stored object: `og/{type}/{id}-{hash}.png`). */
export function ogCardHash(card: OgCard): string {
  return createHash('sha256')
    .update(JSON.stringify({ v: OG_TEMPLATE_VERSION, card }))
    .digest('hex')
    .slice(0, 16);
}

/** The foreground layer as SVG (text already converted to paths). */
export async function renderForegroundSvg(card: OgCard): Promise<string> {
  const tree = foregroundTree(card) as unknown as Parameters<typeof satori>[0];
  return satori(tree, { width: OG_WIDTH, height: OG_HEIGHT, fonts: await ogFonts() });
}

export interface RenderedOg {
  png: Buffer;
  width: number;
  height: number;
  bytes: number;
  colors: number;
}

export async function renderOgPng(card: OgCard): Promise<RenderedOg> {
  const foreground = await renderForegroundSvg(card);
  const flattened = await sharp(Buffer.from(backgroundSvg(card)), { density: 72 })
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'fill' })
    .composite([{ input: Buffer.from(foreground), top: 0, left: 0 }])
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let best: Buffer | null = null;
  let colors: number = PALETTE_STEPS[0];
  for (const step of PALETTE_STEPS) {
    const png = await sharp(flattened.data, {
      raw: { width: flattened.info.width, height: flattened.info.height, channels: flattened.info.channels },
    })
      .png({ palette: true, colours: step, quality: 90, effort: 10, compressionLevel: 9, dither: 0.6 })
      .toBuffer();
    best = png;
    colors = step;
    if (png.byteLength < OG_MAX_BYTES) break;
  }
  const png = best as Buffer;
  if (png.byteLength >= OG_MAX_BYTES) {
    throw new Error(`OG image of ${card.type} is ${png.byteLength} bytes (budget ${OG_MAX_BYTES})`);
  }
  return { png, width: OG_WIDTH, height: OG_HEIGHT, bytes: png.byteLength, colors };
}
