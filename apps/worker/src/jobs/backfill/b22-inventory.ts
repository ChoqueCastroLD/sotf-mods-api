/**
 * B22 · what is in the bucket: every object, and among them the images the backfill is allowed to
 * touch. **Non-image objects (mod zips, DLLs, build JSON, data exports, the ledger itself) are never
 * read as images, never converted and never deleted**: an object is an image candidate only when
 *
 * - its key ends in `.png .jpg .jpeg .gif .bmp .tif .tiff .avif` (any case), or
 * - it has no known non-image extension and its content type is `image/*` (found with a HEAD), and
 * - it is outside the prefixes that hold other things: `og/` (Open Graph cards stay PNG, social networks
 *   need PNG/JPEG), `mods/`, `builds/`, `bundles/`, `exports/`, `incoming/`, `quarantine/`, `ops/`.
 *
 * Even then, nothing is replaced unless the bytes decode as a real image (`convertToWebp` checks the
 * magic bytes, not the name).
 */
import { extensionOfKey, isConvertibleImageKey } from '@sotf/core/media/index';
import type { ListedObject, ObjectStorage } from '@sotf/core/storage/index';
import { mapLimit } from './run-record.ts';

export const EXCLUDED_PREFIXES = [
  'og/',
  'mods/',
  'builds/',
  'bundles/',
  'exports/',
  'incoming/',
  'quarantine/',
  'ops/',
];

/** Extensions that are known not to be images: no HEAD needed. */
const NON_IMAGE_EXTENSIONS = new Set([
  'zip',
  'dll',
  'json',
  'txt',
  'md',
  'jar',
  '7z',
  'rar',
  'exe',
  'pdb',
  'xml',
  'log',
  'mp4',
  'webm',
  'mp3',
  'ogg',
  'wav',
  'svg',
  'ico',
  'css',
  'js',
  'html',
  'pdf',
  'csv',
  'gz',
  'tar',
  'yml',
  'yaml',
  'cfg',
  'ini',
  'webp',
]);

/** Content types that make an object with an unknown extension an image to convert. */
const CONVERTIBLE_CONTENT_TYPES = new Set([
  'image/png',
  'image/apng',
  'image/jpeg',
  'image/pjpeg',
  'image/jpg',
  'image/gif',
  'image/bmp',
  'image/x-ms-bmp',
  'image/tiff',
  'image/avif',
]);

/** `media/{uuid}/{width}.avif`: a variant that has a WebP twin. */
export const AVIF_VARIANT_KEY = /^media\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/\d+\.avif$/;

export const MAX_IMAGE_BYTES = 64 * 1024 * 1024;

export interface ImageObject {
  key: string;
  size: number;
  via: 'extension' | 'content-type';
  contentType: string | null;
}

export interface Inventory {
  /** Every key of the bucket. */
  allKeys: Set<string>;
  sizes: Map<string, number>;
  objects: number;
  bytes: number;
  /** Convertible images (not WebP, not excluded). */
  images: Map<string, ImageObject>;
  webp: { count: number; bytes: number };
  /** Objects under the excluded prefixes, by prefix. */
  excluded: Record<string, { count: number; bytes: number }>;
  /** Objects that are neither images nor excluded (zips, DLLs, …). */
  other: { count: number; bytes: number };
  /** Objects found to be images only through their content type. */
  byContentType: number;
  /** HEAD requests made for objects of unknown extension. */
  headed: number;
}

export function excludedPrefixOf(key: string): string | null {
  return EXCLUDED_PREFIXES.find((prefix) => key.startsWith(prefix)) ?? null;
}

export async function buildInventory(
  storage: ObjectStorage,
  bucket: string,
  options: { signal: AbortSignal; concurrency: number; sniffContentTypes: boolean },
): Promise<Inventory> {
  const listed: ListedObject[] = await storage.list(bucket, '', { maxKeys: 5_000_000 });
  const inventory: Inventory = {
    allKeys: new Set(),
    sizes: new Map(),
    objects: listed.length,
    bytes: 0,
    images: new Map(),
    webp: { count: 0, bytes: 0 },
    excluded: {},
    other: { count: 0, bytes: 0 },
    byContentType: 0,
    headed: 0,
  };
  const unknown: ListedObject[] = [];
  for (const object of listed) {
    inventory.allKeys.add(object.key);
    inventory.sizes.set(object.key, object.size);
    inventory.bytes += object.size;
    const prefix = excludedPrefixOf(object.key);
    if (prefix) {
      const entry = inventory.excluded[prefix] ?? { count: 0, bytes: 0 };
      entry.count += 1;
      entry.bytes += object.size;
      inventory.excluded[prefix] = entry;
      continue;
    }
    const ext = extensionOfKey(object.key);
    if (isConvertibleImageKey(object.key)) {
      inventory.images.set(object.key, { key: object.key, size: object.size, via: 'extension', contentType: null });
    } else if (ext === 'webp') {
      inventory.webp.count += 1;
      inventory.webp.bytes += object.size;
    } else if (!NON_IMAGE_EXTENSIONS.has(ext) && object.size > 0 && object.size <= MAX_IMAGE_BYTES) {
      unknown.push(object);
    } else {
      inventory.other.count += 1;
      inventory.other.bytes += object.size;
    }
  }

  const found = new Set<string>();
  if (options.sniffContentTypes && unknown.length > 0) {
    await mapLimit(unknown, options.concurrency, options.signal, async (object) => {
      const head = await storage.head(bucket, object.key);
      inventory.headed += 1;
      const type = head?.contentType?.split(';', 1)[0]?.trim().toLowerCase() ?? '';
      if (head && CONVERTIBLE_CONTENT_TYPES.has(type)) {
        found.add(object.key);
        inventory.images.set(object.key, {
          key: object.key,
          size: object.size,
          via: 'content-type',
          contentType: type,
        });
        inventory.byContentType += 1;
      }
    });
  }
  for (const object of unknown) {
    if (!found.has(object.key)) {
      inventory.other.count += 1;
      inventory.other.bytes += object.size;
    }
  }
  return inventory;
}
