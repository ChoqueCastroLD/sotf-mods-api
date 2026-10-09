/**
 * Image pipeline (PLAN §8.3 "Pipeline"): pure functions over bytes, no storage or database.
 *
 * - magic bytes decide the format (`file-type`): PNG, JPEG, WebP, AVIF and GIF only; SVG and
 *   anything else is refused, whatever the declared content type says (those formats are still
 *   accepted as *input*; nothing but WebP is ever stored);
 * - ≤ 8 000 px per side and ≤ 64 Mpx (decompression bombs; for an animation the budget is shared by
 *   all its frames);
 * - `rotate()` applies the EXIF orientation, and every output is written **without** metadata
 *   (EXIF, GPS, XMP, ICC comments): sharp drops it unless asked to keep it;
 * - **WebP only, quality 75**: the full-size image (`media/{id}/original.webp`) and one variant per
 *   width [320, 640, 960, 1440, 1920], never enlarged (an image narrower than 320 px gets one
 *   variant at its own width). No AVIF, no PNG/JPEG copy;
 * - animated GIF, animated WebP and APNG stay animated (animated WebP, same frame delays and loop
 *   count); their variants are animated too;
 * - ThumbHash (≈ 25 bytes, base64) of a ≤ 100 px copy of the first frame and the dominant colour.
 *
 * Open Graph cards (`og/…png`) are the one exception: social networks need PNG/JPEG, so they are
 * rendered by `../og` and never pass through here.
 */
import { fileTypeFromBuffer } from 'file-type';
import sharp from 'sharp';
import { rgbaToThumbHash } from 'thumbhash';
import { type ApngFrames, decodeApng, probeApng } from './apng.ts';

type Sharp = ReturnType<typeof sharp>;
type SharpOptions = NonNullable<Parameters<typeof sharp>[1]>;
type Metadata = Awaited<ReturnType<Sharp['metadata']>>;

export const IMAGE_RULES = {
  maxSide: 8_000,
  maxPixels: 64_000_000,
  widths: [320, 640, 960, 1440, 1920] as const,
  /** The only output format of the site: lossy WebP, quality 75 (also used by the B22 backfill). */
  webp: { quality: 75, effort: 4 },
} as const;

/** libwebp cannot encode more than 16 383 px per side. */
export const WEBP_MAX_SIDE = 16_383;

export type ImageFormat = 'png' | 'jpeg' | 'webp' | 'avif' | 'gif' | 'tiff';

const FORMATS: Readonly<Record<string, { format: ImageFormat; ext: string; contentType: string }>> = {
  'image/png': { format: 'png', ext: 'png', contentType: 'image/png' },
  // An animated PNG is a PNG that file-type names apart: its frames are decoded by ./apng.ts.
  'image/apng': { format: 'png', ext: 'png', contentType: 'image/png' },
  'image/jpeg': { format: 'jpeg', ext: 'jpg', contentType: 'image/jpeg' },
  'image/webp': { format: 'webp', ext: 'webp', contentType: 'image/webp' },
  'image/avif': { format: 'avif', ext: 'avif', contentType: 'image/avif' },
  'image/gif': { format: 'gif', ext: 'gif', contentType: 'image/gif' },
  // TIFF is not an upload format; only the B22 backfill converts the odd legacy file (`legacyFormats`).
  'image/tiff': { format: 'tiff', ext: 'tiff', contentType: 'image/tiff' },
};

export class ImageRejectedError extends Error {
  override readonly name = 'ImageRejectedError';
  readonly reason: 'unsupported_format' | 'too_large' | 'corrupt';

  constructor(reason: ImageRejectedError['reason'], message: string) {
    super(message);
    this.reason = reason;
  }
}

export interface ProcessedVariant {
  width: number;
  format: 'webp';
  body: Buffer;
}

export interface ProcessedImage {
  /** Format of the uploaded file (never stored: everything is re-encoded as WebP). */
  sourceFormat: ImageFormat;
  /** Content type of the uploaded file (what a legacy original that is kept in place still is). */
  sourceContentType: string;
  /** Always `webp`. */
  extension: 'webp';
  contentType: 'image/webp';
  /** Oriented full-size image, WebP quality 75, without metadata (animated when the source was). */
  original: Buffer;
  width: number;
  height: number;
  animated: boolean;
  frames: number;
  variants: ProcessedVariant[];
  thumbhash: string;
  dominantColor: string;
}

/** Detects the real format from the magic bytes (null when not an accepted raster format). */
export async function detectImageFormat(
  input: Buffer,
): Promise<{ format: ImageFormat; ext: string; contentType: string } | null> {
  const type = await fileTypeFromBuffer(input);
  return type ? (FORMATS[type.mime] ?? null) : null;
}

/** Widths to generate for an image `width` px wide. */
export function variantWidths(width: number): number[] {
  const widths = IMAGE_RULES.widths.filter((w) => w <= width);
  return widths.length > 0 ? widths : [width];
}

function hex(n: number): string {
  return Math.max(0, Math.min(255, Math.round(n)))
    .toString(16)
    .padStart(2, '0');
}

export interface OpenLimits {
  /** Max px per side (null: no limit besides WebP's own). */
  maxSide: number | null;
  /** Max pixels of the image, or of all the frames of an animation. */
  maxPixels: number;
  /** Also accept formats that are not upload formats (TIFF): the B22 backfill only. */
  legacyFormats?: boolean;
  /** Animation over budget: keep its first frame (uploads) or refuse (the backfill must not lose animation). */
  animationOverBudget: 'still' | 'reject';
}

const UPLOAD_LIMITS: OpenLimits = {
  maxSide: IMAGE_RULES.maxSide,
  maxPixels: IMAGE_RULES.maxPixels,
  animationOverBudget: 'still',
};

/** A decoded source: the oriented first frame and, for animations, all the frames. */
export interface ImageSource {
  sourceFormat: ImageFormat;
  sourceContentType: string;
  width: number;
  height: number;
  animated: boolean;
  frames: number;
  /** Fresh pipeline over the whole image (every frame of an animation), orientation applied. */
  full(): Sharp;
  /** Fresh pipeline over the first frame only. */
  still(): Sharp;
  /** Sets the WebP output options (animation delays and loop count included). */
  encode(pipeline: Sharp): Sharp;
}

function webpOptions(extra: { delay?: number[]; loop?: number } = {}) {
  return { quality: IMAGE_RULES.webp.quality, effort: IMAGE_RULES.webp.effort, ...extra };
}

/** Decodes the headers and prepares the pipelines. Throws `ImageRejectedError`. */
export async function openImage(input: Buffer, limits: OpenLimits = UPLOAD_LIMITS): Promise<ImageSource> {
  const detected = await detectImageFormat(input);
  if (!detected || (detected.format === 'tiff' && !limits.legacyFormats)) {
    throw new ImageRejectedError('unsupported_format', 'not a PNG, JPEG, WebP, AVIF or GIF image');
  }
  const options: SharpOptions = { limitInputPixels: limits.maxPixels, failOn: 'error' };
  let meta: Metadata;
  try {
    meta = await sharp(input, options).metadata();
  } catch (error) {
    throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable image');
  }
  const width = meta.autoOrient?.width ?? meta.width ?? 0;
  const height = meta.autoOrient?.height ?? meta.height ?? 0;
  if (width <= 0 || height <= 0) throw new ImageRejectedError('corrupt', 'image without dimensions');
  const side = Math.min(limits.maxSide ?? WEBP_MAX_SIDE, WEBP_MAX_SIDE);
  if (width > side || height > side) {
    throw new ImageRejectedError('too_large', `larger than ${side} px per side`);
  }

  const still = () => sharp(input, options).rotate();
  const encodeStill = (pipeline: Sharp) => pipeline.webp(webpOptions());
  const budget = (frames: number): boolean => width * height * frames <= limits.maxPixels;
  const overBudget = (frames: number): ImageSource => {
    if (limits.animationOverBudget === 'reject') {
      throw new ImageRejectedError('too_large', `animation of ${frames} frames over the pixel budget`);
    }
    return {
      sourceFormat: detected.format,
      sourceContentType: detected.contentType,
      width,
      height,
      animated: false,
      frames: 1,
      full: still,
      still,
      encode: encodeStill,
    };
  };

  // Animated PNG: sharp only reads its default image, the frames are composited by ./apng.ts.
  if (detected.format === 'png') {
    const info = probeApng(input);
    if (info) {
      if (info.width * info.height * info.frames > limits.maxPixels) return overBudget(info.frames);
      let decoded: ApngFrames | null;
      try {
        decoded = await decodeApng(input);
      } catch (error) {
        throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable animated PNG');
      }
      if (decoded) {
        const frames = decoded;
        const strip = Buffer.concat(frames.rgba);
        const raw = (count: number) =>
          sharp(count === 1 ? (frames.rgba[0] as Buffer) : strip, {
            raw: { width: frames.width, height: frames.height * count, channels: 4, pageHeight: frames.height },
          });
        return {
          sourceFormat: 'png',
          sourceContentType: 'image/png',
          width: frames.width,
          height: frames.height,
          animated: true,
          frames: frames.rgba.length,
          full: () => raw(frames.rgba.length),
          still: () => raw(1),
          encode: (pipeline) => pipeline.webp(webpOptions({ delay: frames.delays, loop: frames.loops })),
        };
      }
    }
  }

  const pages = detected.format === 'gif' || detected.format === 'webp' ? (meta.pages ?? 1) : 1;
  if (pages > 1) {
    if (!budget(pages)) return overBudget(pages);
    return {
      sourceFormat: detected.format,
      sourceContentType: detected.contentType,
      width,
      height,
      animated: true,
      frames: pages,
      full: () => sharp(input, { ...options, animated: true }),
      still,
      encode: encodeStill,
    };
  }
  return {
    sourceFormat: detected.format,
    sourceContentType: detected.contentType,
    width,
    height,
    animated: false,
    frames: 1,
    full: still,
    still,
    encode: encodeStill,
  };
}

export interface WebpConversion {
  body: Buffer;
  sourceFormat: ImageFormat;
  width: number;
  height: number;
  animated: boolean;
  frames: number;
}

/**
 * Converts any accepted image to one WebP of the same dimensions (quality 75, metadata stripped,
 * orientation applied, animation kept). Used by the B22 backfill; throws `ImageRejectedError`.
 */
export async function convertToWebp(input: Buffer, limits: Partial<OpenLimits> = {}): Promise<WebpConversion> {
  const source = await openImage(input, {
    maxSide: null,
    maxPixels: 268_000_000,
    legacyFormats: true,
    animationOverBudget: 'reject',
    ...limits,
  });
  try {
    const body = await source.encode(source.full()).toBuffer();
    return {
      body,
      sourceFormat: source.sourceFormat,
      width: source.width,
      height: source.height,
      animated: source.animated,
      frames: source.frames,
    };
  } catch (error) {
    if (error instanceof ImageRejectedError) throw error;
    throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable image');
  }
}

/** Runs the pipeline. Throws `ImageRejectedError` for inputs that must be refused. */
export async function processImage(input: Buffer): Promise<ProcessedImage> {
  const source = await openImage(input, UPLOAD_LIMITS);
  try {
    const original = await source.encode(source.full()).toBuffer();

    const variants: ProcessedVariant[] = [];
    for (const w of variantWidths(source.width)) {
      const body = await source.encode(source.full().resize({ width: w, withoutEnlargement: true })).toBuffer();
      variants.push({ width: w, format: 'webp', body });
    }

    const small = await source
      .still()
      .resize(100, 100, { fit: 'inside', withoutEnlargement: true })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const hash = rgbaToThumbHash(small.info.width, small.info.height, small.data);
    const stats = await source.still().stats();
    const dominant = stats.dominant;

    return {
      sourceFormat: source.sourceFormat,
      sourceContentType: source.sourceContentType,
      extension: 'webp',
      contentType: 'image/webp',
      original,
      width: source.width,
      height: source.height,
      animated: source.animated,
      frames: source.frames,
      variants,
      thumbhash: Buffer.from(hash).toString('base64').replace(/=+$/, ''),
      dominantColor: `#${hex(dominant.r)}${hex(dominant.g)}${hex(dominant.b)}`.toUpperCase(),
    };
  } catch (error) {
    if (error instanceof ImageRejectedError) throw error;
    throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable image');
  }
}
