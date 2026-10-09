/**
 * B22 · the ledger: which object became which, with sizes before and after. Phase 3 (deleting the
 * originals) trusts nothing but the ledger and the live state of the bucket and the database.
 *
 * It lives in the bucket as small JSON objects `ops/b22/ledger/<run>-<n>.json`, one per batch of
 * conversions (written once the new objects are uploaded and verified, **before** any database
 * row is rewritten, so a crash never leaves a rewritten row without its mapping) and one per page of
 * Media rows that dropped AVIF variants. Reading it back is "list the prefix, read every object".
 * The reports of each run sit next to it: `ops/b22/report-<phase>-<run>.json`.
 *
 * The bucket is public (`r2.sotf-mods.com/ops/b22/…` can be fetched by anyone who guesses the name):
 * the ledger only contains keys of public images and sizes, nothing private.
 */
import type { ObjectStorage } from '@sotf/core/storage/index';

export const LEDGER_PREFIX = 'ops/b22/ledger/';
export const REPORT_PREFIX = 'ops/b22/';

export interface LedgerEntry {
  oldKey: string;
  newKey: string;
  oldBytes: number;
  newBytes: number;
  oldContentType: string | null;
  sourceFormat: string;
  width: number;
  height: number;
  animated: boolean;
  frames: number;
  /** SHA-256 of the new object. */
  sha256: string;
  via: 'extension' | 'content-type';
  /** True when a database row referenced the old key when it was converted. */
  referenced: boolean;
  /** The new file is larger than the original (kept anyway, as requested). */
  larger: boolean;
  at: string;
}

export interface AvifEntry {
  key: string;
  bytes: number;
  mediaId: string;
  /** The WebP variant of the same width that replaces it. */
  twin: string;
  at: string;
}

export interface LedgerFile {
  version: 1;
  run: string;
  createdAt: string;
  entries: LedgerEntry[];
  avif: AvifEntry[];
}

export interface Ledger {
  /** By old key; the latest entry of a key wins. */
  entries: Map<string, LedgerEntry>;
  avif: Map<string, AvifEntry>;
  files: number;
}

async function readText(storage: ObjectStorage, bucket: string, key: string): Promise<string> {
  const { body } = await storage.get(bucket, key);
  const chunks: Buffer[] = [];
  for await (const chunk of body as AsyncIterable<Buffer>) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

export async function readLedger(storage: ObjectStorage, bucket: string): Promise<Ledger> {
  const listed = await storage.list(bucket, LEDGER_PREFIX, { maxKeys: 1_000_000 });
  const ledger: Ledger = { entries: new Map(), avif: new Map(), files: 0 };
  for (const object of listed.sort((a, b) => a.key.localeCompare(b.key))) {
    if (!object.key.endsWith('.json')) continue;
    const file = JSON.parse(await readText(storage, bucket, object.key)) as Partial<LedgerFile>;
    if (file.version !== 1) continue;
    ledger.files += 1;
    for (const entry of file.entries ?? []) ledger.entries.set(entry.oldKey, entry);
    for (const entry of file.avif ?? []) ledger.avif.set(entry.key, entry);
  }
  return ledger;
}

export async function writeLedgerFile(
  storage: ObjectStorage,
  bucket: string,
  name: string,
  file: LedgerFile,
): Promise<string> {
  const key = `${LEDGER_PREFIX}${name}.json`;
  const body = Buffer.from(JSON.stringify(file));
  await storage.put({
    bucket,
    key,
    body,
    contentLength: body.length,
    contentType: 'application/json',
    cacheControl: 'no-store',
  });
  return key;
}

export async function writeReport(
  storage: ObjectStorage,
  bucket: string,
  name: string,
  report: unknown,
): Promise<string> {
  const key = `${REPORT_PREFIX}${name}.json`;
  const body = Buffer.from(JSON.stringify(report, null, 1));
  await storage.put({
    bucket,
    key,
    body,
    contentLength: body.length,
    contentType: 'application/json',
    cacheControl: 'no-store',
  });
  return key;
}
