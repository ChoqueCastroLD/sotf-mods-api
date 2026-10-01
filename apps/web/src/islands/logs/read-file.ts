/**
 * Reads a dropped or chosen log file in the browser: plain text, `.gz` (native
 * `DecompressionStream`, stopped as soon as it exceeds the limit: a zip bomb cannot fill the tab's
 * memory) and `.zip` (fflate, the first text entry that fits). UTF-8 and UTF-16 (BOM) are decoded.
 */
import { unzipSync } from 'fflate';
import { MAX_LOG_BYTES } from './labels.ts';

export type ReadFileError = 'too_large' | 'file_type' | 'archive' | 'binary';

export class ReadFileFailure extends Error {
  readonly kind: ReadFileError;
  constructor(kind: ReadFileError) {
    super(kind);
    this.kind = kind;
  }
}

/** Compressed files up to this size are accepted (the decompressed text is limited separately). */
const MAX_COMPRESSED_BYTES = 12 * 1024 * 1024;

export function decodeText(bytes: Uint8Array): string {
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder('utf-16le').decode(bytes.subarray(2));
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder('utf-16be').decode(bytes.subarray(2));
  const text = new TextDecoder('utf-8').decode(bytes);
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function assertText(text: string): string {
  if (text.includes('\u0000')) throw new ReadFileFailure('binary');
  return text;
}

async function gunzipLimited(file: Blob): Promise<Uint8Array> {
  if (typeof DecompressionStream === 'undefined') throw new ReadFileFailure('archive');
  const reader = file.stream().pipeThrough(new DecompressionStream('gzip')).getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > MAX_LOG_BYTES) {
        await reader.cancel();
        throw new ReadFileFailure('too_large');
      }
      chunks.push(value);
    }
  } catch (error) {
    if (error instanceof ReadFileFailure) throw error;
    throw new ReadFileFailure('archive');
  }
  const out = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.length;
  }
  return out;
}

const TEXT_ENTRY = /\.(?:log|txt)$/i;

function firstZipText(bytes: Uint8Array): Uint8Array {
  let files: Record<string, Uint8Array>;
  try {
    files = unzipSync(bytes, {
      filter: (entry) =>
        TEXT_ENTRY.test(entry.name) && !entry.name.includes('__MACOSX') && entry.originalSize <= MAX_LOG_BYTES,
    });
  } catch {
    throw new ReadFileFailure('archive');
  }
  const names = Object.keys(files);
  if (names.length === 0) throw new ReadFileFailure('archive');
  // Prefer the log the loaders name (LogOutput.log, Player.log), then the biggest.
  names.sort((a, b) => {
    const rank = (name: string): number => (/(?:logoutput|player|latest|server)/i.test(name) ? 0 : 1);
    return rank(a) - rank(b) || (files[b]?.length ?? 0) - (files[a]?.length ?? 0);
  });
  const chosen = files[names[0] ?? ''];
  if (!chosen) throw new ReadFileFailure('archive');
  return chosen;
}

export async function readLogFile(file: File): Promise<string> {
  const name = file.name.toLowerCase();
  if (/\.(?:gz|gzip)$/.test(name)) {
    if (file.size > MAX_COMPRESSED_BYTES) throw new ReadFileFailure('too_large');
    return assertText(decodeText(await gunzipLimited(file)));
  }
  if (name.endsWith('.zip')) {
    if (file.size > MAX_COMPRESSED_BYTES) throw new ReadFileFailure('too_large');
    return assertText(decodeText(firstZipText(new Uint8Array(await file.arrayBuffer()))));
  }
  if (!/\.(?:log|txt|text|out)$/.test(name) && file.type !== '' && !file.type.startsWith('text/')) {
    throw new ReadFileFailure('file_type');
  }
  if (file.size > MAX_LOG_BYTES) throw new ReadFileFailure('too_large');
  return assertText(decodeText(new Uint8Array(await file.arrayBuffer())));
}
