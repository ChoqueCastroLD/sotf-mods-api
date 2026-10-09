/**
 * Client-side image work of the media step (PLAN §7.5 step 4): decoding, the 16:9 cover crop and
 * small previews. The server still re-encodes every image (WebP only, quality 75, EXIF stripped); the
 * crop only decides which pixels are sent.
 */

/** Cover aspect ratio (16:9). */
export const COVER_ASPECT = 16 / 9;
/** Output size of the cropped cover (never enlarged beyond the source crop). */
export const COVER_MAX_WIDTH = 1920;
/** Previews kept for the wizard (grid and cover thumbnails). */
export const PREVIEW_WIDTH = 480;

export interface CropRect {
  /** Source pixels. */
  x: number;
  y: number;
  width: number;
  height: number;
}

export async function decodeImage(blob: Blob): Promise<ImageBitmap> {
  // `from-image` applies the EXIF orientation, so the crop matches what the creator sees.
  return createImageBitmap(blob, { imageOrientation: 'from-image' });
}

/** The largest centred rectangle of `aspect` inside `width × height`. */
export function centeredCrop(width: number, height: number, aspect = COVER_ASPECT): CropRect {
  if (width / height > aspect) {
    const w = Math.round(height * aspect);
    return { x: Math.round((width - w) / 2), y: 0, width: w, height };
  }
  const h = Math.round(width / aspect);
  return { x: 0, y: Math.round((height - h) / 2), width, height: h };
}

/** Keeps `rect` inside the image, with the aspect ratio and a minimum size. */
export function clampCrop(rect: CropRect, width: number, height: number, aspect = COVER_ASPECT): CropRect {
  const maxW = Math.min(width, height * aspect);
  const minW = Math.min(maxW, 160);
  const w = Math.max(minW, Math.min(maxW, rect.width));
  const h = w / aspect;
  const x = Math.max(0, Math.min(width - w, rect.x));
  const y = Math.max(0, Math.min(height - h, rect.y));
  return { x, y, width: w, height: h };
}

function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('the image could not be encoded'))),
      type,
      quality,
    );
  });
}

function draw(source: CanvasImageSource, crop: CropRect, outWidth: number, outHeight: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(outWidth));
  canvas.height = Math.max(1, Math.round(outHeight));
  const context = canvas.getContext('2d');
  if (!context) throw new Error('canvas 2D is unavailable');
  context.imageSmoothingQuality = 'high';
  context.drawImage(source, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
  return canvas;
}

/** Encodes the crop as WebP (JPEG where WebP encoding is unsupported). */
export async function cropToBlob(image: ImageBitmap, crop: CropRect, maxWidth = COVER_MAX_WIDTH): Promise<Blob> {
  const scale = Math.min(1, maxWidth / crop.width);
  const canvas = draw(image, crop, crop.width * scale, crop.height * scale);
  const webp = await canvasToBlob(canvas, 'image/webp', 0.9);
  if (webp.type === 'image/webp') return webp;
  return canvasToBlob(canvas, 'image/jpeg', 0.9);
}

/** A small JPEG data URL of `blob` (kept in IndexedDB so a resumed draft shows its images). */
export async function previewDataUrl(blob: Blob, width = PREVIEW_WIDTH): Promise<string | null> {
  try {
    const image = await decodeImage(blob);
    const scale = Math.min(1, width / image.width);
    const canvas = draw(
      image,
      { x: 0, y: 0, width: image.width, height: image.height },
      image.width * scale,
      image.height * scale,
    );
    image.close();
    return canvas.toDataURL('image/jpeg', 0.8);
  } catch {
    return null;
  }
}

/** File name of a generated image (`cover.webp`, `cover.jpg`). */
export function generatedName(base: string, blob: Blob): string {
  return `${base}.${blob.type === 'image/webp' ? 'webp' : 'jpg'}`;
}
