/**
 * Random access to an object without downloading it (PLAN §7.4 "en streaming, sin cargar el zip en
 * memoria"): yauzl reads the end-of-central-directory record, the central directory and, for the
 * few entries we open (the manifest), their local header and data — each one an HTTP `Range`
 * request against a presigned GET of the private object. A 2 GB zip costs a handful of small
 * requests, never its size in memory.
 *
 * - `presignedRangeSource(storage, bucket, key, size)`: R2/SeaweedFS through a presigned GET
 *   (`Range` is not part of the signature). Reads are cached in fixed blocks so yauzl's many small
 *   reads of the central directory become a few requests; a `206` of the exact length is required.
 * - `bufferSource(buffer)`: in-memory source for unit tests and small files.
 * - `openZip(source)`: yauzl `fromRandomAccessReader` with `lazyEntries`, `decodeStrings: false`
 *   (names are decoded here so that `..` and absolute paths are *reported* instead of aborting the
 *   whole archive) and entry size validation.
 */
import { Readable } from 'node:stream';
import yauzl from 'yauzl';
import type { ObjectStorage } from '../storage/client.ts';

/** Anything we can read byte ranges from. */
export interface RandomAccessSource {
  readonly size: number;
  /** Bytes `[start, end)`. */
  read(start: number, end: number): Promise<Buffer>;
  /** Number of backend requests made (observability, tests). */
  readonly requests: number;
}

export function bufferSource(buffer: Buffer): RandomAccessSource {
  let requests = 0;
  return {
    size: buffer.length,
    get requests() {
      return requests;
    },
    async read(start, end) {
      requests += 1;
      return buffer.subarray(Math.max(0, start), Math.min(buffer.length, end));
    },
  };
}

export interface RangeSourceOptions {
  /** Block size of the read cache (default 64 KiB). */
  blockBytes?: number;
  /** Max cached blocks (default 64 → 4 MiB). */
  maxBlocks?: number;
  /** Per-request timeout (default 30 s). */
  timeoutMs?: number;
  /** Injected fetch (tests). */
  fetch?: typeof fetch;
}

/** Validity of the presigned URL (the inspection of a 500 MB zip takes seconds; 15 min is ample). */
const PRESIGN_SECONDS = 15 * 60;

/**
 * A `RandomAccessSource` over HTTP Range requests to a presigned GET of `bucket/key`.
 * `size` must be the object's size (from HEAD or the upload row).
 */
export async function presignedRangeSource(
  storage: ObjectStorage,
  bucket: string,
  key: string,
  size: number,
  options: RangeSourceOptions = {},
): Promise<RandomAccessSource> {
  const url = await storage.presignGet(bucket, key, PRESIGN_SECONDS);
  return httpRangeSource(url, size, options);
}

/** A `RandomAccessSource` over HTTP Range requests to `url`. */
export function httpRangeSource(url: string, size: number, options: RangeSourceOptions = {}): RandomAccessSource {
  const blockBytes = options.blockBytes ?? 64 * 1024;
  const maxBlocks = options.maxBlocks ?? 64;
  const timeoutMs = options.timeoutMs ?? 30_000;
  const doFetch = options.fetch ?? fetch;
  const blocks = new Map<number, Promise<Buffer>>();
  let requests = 0;

  async function fetchRange(start: number, endExclusive: number): Promise<Buffer> {
    requests += 1;
    const res = await doFetch(url, {
      headers: { range: `bytes=${start}-${endExclusive - 1}` },
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (res.status !== 206 && !(res.status === 200 && start === 0 && endExclusive >= size)) {
      await res.body?.cancel().catch(() => undefined);
      throw new Error(`range read failed: HTTP ${res.status}`);
    }
    const body = Buffer.from(await res.arrayBuffer());
    if (body.length !== endExclusive - start) {
      throw new Error(`range read returned ${body.length} bytes, expected ${endExclusive - start}`);
    }
    return body;
  }

  function block(index: number): Promise<Buffer> {
    const cached = blocks.get(index);
    if (cached) {
      // LRU: move to the end.
      blocks.delete(index);
      blocks.set(index, cached);
      return cached;
    }
    const start = index * blockBytes;
    const end = Math.min(size, start + blockBytes);
    const promise = fetchRange(start, end);
    promise.catch(() => blocks.delete(index));
    blocks.set(index, promise);
    while (blocks.size > maxBlocks) {
      const oldest = blocks.keys().next().value;
      if (oldest === undefined) break;
      blocks.delete(oldest);
    }
    return promise;
  }

  return {
    size,
    get requests() {
      return requests;
    },
    async read(start, end) {
      const from = Math.max(0, start);
      const to = Math.min(size, end);
      if (to <= from) return Buffer.alloc(0);
      // Large reads (entry data) bypass the block cache.
      if (to - from > blockBytes * 4) return fetchRange(from, to);
      const first = Math.floor(from / blockBytes);
      const last = Math.floor((to - 1) / blockBytes);
      const parts: Buffer[] = [];
      for (let i = first; i <= last; i += 1) parts.push(await block(i));
      const joined = parts.length === 1 ? (parts[0] as Buffer) : Buffer.concat(parts);
      const offset = from - first * blockBytes;
      return joined.subarray(offset, offset + (to - from));
    },
  };
}

/** Adapter from a `RandomAccessSource` to yauzl's reader. */
class SourceReader extends yauzl.RandomAccessReader {
  readonly #source: RandomAccessSource;

  constructor(source: RandomAccessSource) {
    super();
    this.#source = source;
  }

  override _readStreamForRange(start: number, end: number): Readable {
    const source = this.#source;
    // Stream in chunks of ≤ 1 MiB so a large entry never sits whole in memory.
    const chunk = 1024 * 1024;
    let position = start;
    return new Readable({
      read() {
        if (position >= end) {
          this.push(null);
          return;
        }
        const to = Math.min(end, position + chunk);
        source.read(position, to).then(
          (buffer) => {
            position = to;
            this.push(buffer);
          },
          (error: unknown) => this.destroy(error instanceof Error ? error : new Error(String(error))),
        );
      },
    });
  }
}

export function openZip(source: RandomAccessSource): Promise<yauzl.ZipFile> {
  return new Promise((resolve, reject) => {
    yauzl.fromRandomAccessReader(
      new SourceReader(source),
      source.size,
      { lazyEntries: true, autoClose: false, decodeStrings: false, validateEntrySizes: true, strictFileNames: false },
      (error, zip) => (error || !zip ? reject(error ?? new Error('invalid zip')) : resolve(zip)),
    );
  });
}

/**
 * Name of an entry read with `decodeStrings: false`: UTF-8 when flagged (bit 11) or carried by an
 * Info-ZIP Unicode Path extra field, else CP437 (yauzl's own decoder). Never throws: unsafe names
 * are returned as-is so the caller can report them.
 */
export function entryName(entry: yauzl.Entry): string {
  const raw = entry.fileNameRaw ?? (Buffer.isBuffer(entry.fileName) ? (entry.fileName as unknown as Buffer) : null);
  if (!raw) return String(entry.fileName);
  return yauzl.getFileNameLowLevel(entry.generalPurposeBitFlag, raw, entry.extraFields ?? [], false);
}

/** Reads the next entry of a lazy zip (null at the end). */
export function nextEntry(zip: yauzl.ZipFile): Promise<yauzl.Entry | null> {
  return new Promise((resolve, reject) => {
    const onEntry = (entry: yauzl.Entry) => {
      cleanup();
      resolve(entry);
    };
    const onEnd = () => {
      cleanup();
      resolve(null);
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      zip.off('entry', onEntry);
      zip.off('end', onEnd);
      zip.off('error', onError);
    };
    zip.on('entry', onEntry);
    zip.on('end', onEnd);
    zip.on('error', onError);
    zip.readEntry();
  });
}

/**
 * Reads an entry's decompressed bytes, refusing more than `maxBytes` (the declared size is checked
 * by yauzl too, so a lying header cannot inflate beyond it).
 */
export function readEntry(zip: yauzl.ZipFile, entry: yauzl.Entry, maxBytes: number): Promise<Buffer> {
  if (entry.uncompressedSize > maxBytes) {
    return Promise.reject(new Error(`entry larger than ${maxBytes} bytes`));
  }
  return new Promise((resolve, reject) => {
    zip.openReadStream(entry, (error, stream) => {
      if (error || !stream) {
        reject(error ?? new Error('cannot open entry'));
        return;
      }
      const chunks: Buffer[] = [];
      let total = 0;
      stream.on('data', (chunk: Buffer) => {
        total += chunk.length;
        if (total > maxBytes) {
          stream.destroy(new Error(`entry larger than ${maxBytes} bytes`));
          return;
        }
        chunks.push(chunk);
      });
      stream.on('error', reject);
      stream.on('end', () => resolve(Buffer.concat(chunks)));
    });
  });
}
