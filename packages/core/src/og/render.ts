/**
 * `renderOgPng(card)`: satori (text → SVG paths) + sharp (SVG → PNG) at 1200 × 630, under 100 KB
 * (PLAN §8.6; social scrapers and Discord refuse or downscale heavier images).
 *
 * The background (terrain), the collage tiles (kits) and the foreground (satori) are rasterized by
 * sharp/librsvg and composited; the PNG is palette-quantized, stepping down the palette until it
 * fits the budget. A collage that cannot fit the budget is dropped (the plain card always fits).
 */
import { createHash } from 'node:crypto';
import satori from 'satori';
import sharp, { type OverlayOptions } from 'sharp';
import { ogFonts } from './fonts.ts';
import {
  backgroundSvg,
  collageSlots,
  foregroundTree,
  OG_HEIGHT,
  OG_TEMPLATE_VERSION,
  OG_TILE_BORDER,
  OG_WIDTH,
  type OgCard,
  type OgRect,
} from './template.ts';

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
export async function renderForegroundSvg(card: OgCard, tiles: readonly OgRect[] = []): Promise<string> {
  const tree = foregroundTree(card, tiles) as unknown as Parameters<typeof satori>[0];
  return satori(tree, { width: OG_WIDTH, height: OG_HEIGHT, fonts: await ogFonts() });
}

/** Rounded-corner mask of a tile (the frame drawn by the foreground has the same radius). */
function tileMask(width: number, height: number): Buffer {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="6" ry="6" fill="#fff"/></svg>`,
  );
}

/**
 * Collage tiles: each image cropped to its 16:9 slot (inside the frame) with rounded corners.
 * Unreadable images are skipped; the remaining ones take the grid for their count.
 */
async function collageTiles(images: readonly Buffer[]): Promise<{ slots: OgRect[]; layers: OverlayOptions[] }> {
  const decoded: Buffer[] = [];
  for (const image of images) {
    try {
      // Validates the image (and its size) before it gets a slot.
      await sharp(image, { limitInputPixels: 40_000_000 }).metadata();
      decoded.push(image);
    } catch {
      // Corrupt or unsupported thumbnail: the collage uses the others.
    }
  }
  const slots = collageSlots(decoded.length);
  const layers: OverlayOptions[] = [];
  for (const [index, slot] of slots.entries()) {
    const width = slot.width - OG_TILE_BORDER * 2;
    const height = slot.height - OG_TILE_BORDER * 2;
    const tile = await sharp(decoded[index] as Buffer, { limitInputPixels: 40_000_000 })
      .rotate()
      .resize(width, height, { fit: 'cover', position: 'attention' })
      .ensureAlpha()
      .composite([{ input: tileMask(width, height), blend: 'dest-in' }])
      .png()
      .toBuffer();
    layers.push({ input: tile, left: slot.left + OG_TILE_BORDER, top: slot.top + OG_TILE_BORDER });
  }
  return { slots, layers };
}

export interface RenderedOg {
  png: Buffer;
  width: number;
  height: number;
  bytes: number;
  colors: number;
}

/** Rendered PNG exceeds {@link OG_MAX_BYTES} even with the smallest palette. */
export class OgBudgetError extends Error {
  readonly type: string;
  readonly bytes: number;
  constructor(type: string, bytes: number) {
    super(`OG image of ${type} is ${bytes} bytes (budget ${OG_MAX_BYTES})`);
    this.name = 'OgBudgetError';
    this.type = type;
    this.bytes = bytes;
  }
}

/**
 * @param images collage sources for `card.images` (same order; already fetched by the caller).
 *   When the collage does not fit the size budget the card is rendered without it.
 */
export async function renderOgPng(card: OgCard, images: readonly Buffer[] = []): Promise<RenderedOg> {
  if (images.length > 0) {
    try {
      return await renderLayers(card, images);
    } catch (error) {
      if (!(error instanceof OgBudgetError)) throw error;
    }
  }
  return renderLayers(card, []);
}

async function renderLayers(card: OgCard, images: readonly Buffer[]): Promise<RenderedOg> {
  const collage = images.length > 0 ? await collageTiles(images) : { slots: [], layers: [] };
  const foreground = await renderForegroundSvg(card, collage.slots);
  const flattened = await sharp(Buffer.from(backgroundSvg(card, { collage: collage.slots.length > 0 })), {
    density: 72,
  })
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'fill' })
    .composite([...collage.layers, { input: Buffer.from(foreground), top: 0, left: 0 }])
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
  if (png.byteLength >= OG_MAX_BYTES) throw new OgBudgetError(card.type, png.byteLength);
  return { png, width: OG_WIDTH, height: OG_HEIGHT, bytes: png.byteLength, colors };
}
