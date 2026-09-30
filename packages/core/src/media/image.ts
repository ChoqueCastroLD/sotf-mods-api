/**
 * Image pipeline (PLAN §8.3 "Pipeline"): pure functions over bytes, no storage or database.
 *
 * - magic bytes decide the format (`file-type`): PNG, JPEG, WebP, AVIF and GIF only; SVG and
 *   anything else is refused, whatever the declared content type says;
 * - ≤ 8 000 px per side and ≤ 64 Mpx (decompression bombs);
 * - `rotate()` applies the EXIF orientation, and every output is written **without** metadata
 *   (EXIF, GPS, XMP, ICC comments): sharp drops it unless asked to keep it;
 * - widths [320, 640, 960, 1440, 1920], never enlarged (an image narrower than 320 px gets one
 *   variant at its own width);
 * - AVIF (quality 50, effort 4) + WebP (quality 75) per width;
 * - ThumbHash (≈ 25 bytes, base64) of a ≤ 100 px copy and the dominant colour.
 */
import { fileTypeFromBuffer } from 'file-type';
import sharp from 'sharp';
import { rgbaToThumbHash } from 'thumbhash';

type Sharp = ReturnType<typeof sharp>;
type SharpOptions = NonNullable<Parameters<typeof sharp>[1]>;
type Metadata = Awaited<ReturnType<Sharp['metadata']>>;

export const IMAGE_RULES = {
  maxSide: 8_000,
  maxPixels: 64_000_000,
  widths: [320, 640, 960, 1440, 1920] as const,
  avif: { quality: 50, effort: 4 },
  webp: { quality: 75 },
} as const;

export type ImageFormat = 'png' | 'jpeg' | 'webp' | 'avif' | 'gif';

const FORMATS: Readonly<Record<string, { format: ImageFormat; ext: string; contentType: string }>> = {
  'image/png': { format: 'png', ext: 'png', contentType: 'image/png' },
  'image/jpeg': { format: 'jpeg', ext: 'jpg', contentType: 'image/jpeg' },
  'image/webp': { format: 'webp', ext: 'webp', contentType: 'image/webp' },
  'image/avif': { format: 'avif', ext: 'avif', contentType: 'image/avif' },
  'image/gif': { format: 'gif', ext: 'gif', contentType: 'image/gif' },
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
  format: 'avif' | 'webp';
  body: Buffer;
}

export interface ProcessedImage {
  format: ImageFormat;
  extension: string;
  contentType: string;
  /** Oriented original, re-encoded without metadata. */
  original: Buffer;
  width: number;
  height: number;
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

function encodeOriginal(pipeline: Sharp, format: ImageFormat): Sharp {
  switch (format) {
    case 'jpeg':
      return pipeline.jpeg({ quality: 90, mozjpeg: true });
    case 'png':
      return pipeline.png({ compressionLevel: 9 });
    case 'webp':
      return pipeline.webp({ quality: 90 });
    case 'avif':
      return pipeline.avif({ quality: 60, effort: 4 });
    case 'gif':
      return pipeline.gif();
  }
}

/** Runs the pipeline. Throws `ImageRejectedError` for inputs that must be refused. */
export async function processImage(input: Buffer): Promise<ProcessedImage> {
  const detected = await detectImageFormat(input);
  if (!detected) throw new ImageRejectedError('unsupported_format', 'not a PNG, JPEG, WebP, AVIF or GIF image');
  const options: SharpOptions = { limitInputPixels: IMAGE_RULES.maxPixels, failOn: 'error' };
  let meta: Metadata;
  try {
    meta = await sharp(input, options).metadata();
  } catch (error) {
    throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable image');
  }
  const sourceWidth = meta.autoOrient?.width ?? meta.width ?? 0;
  const sourceHeight = meta.autoOrient?.height ?? meta.height ?? 0;
  if (sourceWidth <= 0 || sourceHeight <= 0) throw new ImageRejectedError('corrupt', 'image without dimensions');
  if (sourceWidth > IMAGE_RULES.maxSide || sourceHeight > IMAGE_RULES.maxSide) {
    throw new ImageRejectedError('too_large', `larger than ${IMAGE_RULES.maxSide} px per side`);
  }

  try {
    // Oriented, metadata-free raster (first frame for animations), shared by every output.
    const oriented = await sharp(input, options).rotate().toBuffer({ resolveWithObject: true });
    const width = oriented.info.width;
    const height = oriented.info.height;
    const base = () => sharp(oriented.data, options);

    const original = await encodeOriginal(
      detected.format === 'gif' ? sharp(input, { ...options, animated: true }).rotate() : base(),
      detected.format,
    ).toBuffer();

    const variants: ProcessedVariant[] = [];
    for (const w of variantWidths(width)) {
      const resized = () => base().resize({ width: w, withoutEnlargement: true });
      variants.push({ width: w, format: 'avif', body: await resized().avif(IMAGE_RULES.avif).toBuffer() });
      variants.push({ width: w, format: 'webp', body: await resized().webp(IMAGE_RULES.webp).toBuffer() });
    }

    const small = await base()
      .resize(100, 100, { fit: 'inside', withoutEnlargement: true })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const hash = rgbaToThumbHash(small.info.width, small.info.height, small.data);
    const stats = await base().stats();
    const dominant = stats.dominant;

    return {
      format: detected.format,
      extension: detected.ext,
      contentType: detected.contentType,
      original,
      width,
      height,
      variants,
      thumbhash: Buffer.from(hash).toString('base64').replace(/=+$/, ''),
      dominantColor: `#${hex(dominant.r)}${hex(dominant.g)}${hex(dominant.b)}`.toUpperCase(),
    };
  } catch (error) {
    if (error instanceof ImageRejectedError) throw error;
    throw new ImageRejectedError('corrupt', error instanceof Error ? error.message : 'unreadable image');
  }
}
