/**
 * B22 · every stored image becomes WebP quality 75 (owner request of 2026-10-09: "optimize all
 * images: convert them to WebP at 75% and delete the originals").
 *
 * Three phases, each a separate command (`node dist/backfill.js B22 …`):
 *
 * 1. **Report** (default, writes nothing): lists every image the database references and every
 *    image-like object of the bucket (by extension and by content type), objects that are referenced but
 *    missing, unreferenced images, and measures the saving on a sample of ~20 images.
 * 2. **`--apply`**: for each referenced image (or every image with `--include-unreferenced`) that is not
 *    WebP yet: download, convert (WebP q75, animation kept, metadata stripped, same dimensions), upload
 *    next to it with the `.webp` extension (`Content-Type: image/webp`, immutable cache), verify by
 *    downloading it again and decoding it, record old key → new key in the ledger
 *    (`ops/b22/ledger/…`), then rewrite **every** database reference (all text and JSON columns of all
 *    tables, `Media` source and variants included) by exact replacement of the full URL or key, inside
 *    transactions, each change recorded in `"DataFixAudit"` (`fixId = 'B22'`, `pnpm db:revert-fix B22`
 *    restores the database). AVIF variants with a WebP twin leave `Media.variants`. Touched pages are
 *    invalidated. The old objects are NOT deleted.
 * 3. **`--delete-originals`** (lists unless `--apply` is given too): deletes an old object only if its
 *    WebP exists in the bucket and decodes, and nothing in the database references the old key any more
 *    (the text columns are scanned again); AVIF variants only if their WebP twin exists and no `Media`
 *    lists them. Unreferenced images that were not converted are never deleted.
 *
 * Open Graph cards (`og/…png`) are rendered PNG on purpose (social networks) and are left alone, as is
 * every object that is not an image.
 *
 * Idempotent and resumable: the ledger records what was converted, so a second run converts nothing
 * and continues where a stopped one left off; the rewrite is exact replacement, so it finds nothing the
 * second time. Memory is bounded (one batch of images, one page of rows), concurrency is 3.
 */
import { createHash } from 'node:crypto';
import type { Ctx } from '@sotf/core';
import { purge } from '@sotf/core/kernel/cache-tags';
import { publishCacheInvalidation } from '@sotf/core/kernel/notify';
import {
  convertToWebp,
  extensionOfKey,
  extractImageUrlKeys,
  ImageRefIndex,
  ImageRejectedError,
  isConvertibleImageKey,
  webpKeyOf,
} from '@sotf/core/media/index';
import { IMMUTABLE_CACHE_CONTROL, type ObjectStorage } from '@sotf/core/storage/index';
import { sql } from 'drizzle-orm';
import sharp from 'sharp';
import {
  AVIF_VARIANT_KEY,
  buildInventory,
  excludedPrefixOf,
  type ImageObject,
  type Inventory,
  MAX_IMAGE_BYTES,
} from './b22-inventory.ts';
import {
  type AvifEntry,
  type Ledger,
  type LedgerEntry,
  readLedger,
  writeLedgerFile,
  writeReport,
} from './b22-ledger.ts';
import { eachMediaPage, planMediaRow } from './b22-media.ts';
import {
  type Catalogue,
  type CellChange,
  loadCatalogue,
  prefilterPattern,
  scanTable,
  updateRowAudited,
} from './b22-scan.ts';
import { mapLimit, pushSample, startRun } from './run-record.ts';

export const B22_FIX_ID = 'B22';
const CONCURRENCY = 3;
const SAMPLE_SIZE = 20;
const SAMPLE_MAX_BYTES = 20 * 1024 * 1024;
const PAGE_SIZE = 200;
/** Hosts whose objects live in the bucket: the configured one, and the production one the data was written with. */
const KNOWN_PUBLIC_BASES = ['https://r2.sotf-mods.com'];
/** Columns whose whole value can be a bare storage key. */
const KEY_COLUMN = /(?:key|url|src|path|image|thumbnail|banner|avatar|icon)$/i;

export type B22Mode = 'report' | 'convert' | 'delete';

export interface B22Options {
  mode: B22Mode;
  dryRun: boolean;
  includeUnreferenced: boolean;
  batchSize: number;
  signal: AbortSignal;
  /** Images measured by the report (default 20). */
  sample?: number;
}

interface Totals {
  count: number;
  bytes: number;
}

export interface B22Report {
  mode: B22Mode;
  dryRun: boolean;
  includeUnreferenced: boolean;
  bucket: string;
  runId: string;
  inventory?: {
    objects: number;
    bytes: number;
    images: Totals & { byExtension: Record<string, Totals>; viaContentType: number };
    alreadyWebp: Totals;
    excluded: Record<string, Totals>;
    other: Totals;
    sampleKeys: string[];
  };
  references?: {
    tablesScanned: number;
    tablesWithoutKey: string[];
    rowsWithReferences: number;
    referencedImages: Totals & { sampleKeys: string[] };
    unreferencedImages: Totals & { sampleKeys: string[] };
    byColumn: Record<string, number>;
    missing: { count: number; sampleKeys: string[] };
    mediaRows: number;
    avifVariantsRemovable: Totals;
  };
  estimate?: {
    sampled: number;
    sampledBytesBefore: number;
    sampledBytesAfter: number;
    ratio: number | null;
    convertibleImages: Totals;
    estimatedBytesAfter: number | null;
    estimatedSaving: number | null;
    byExtension: Record<string, { sampled: number; ratio: number }>;
    larger: string[];
    failed: Array<{ key: string; error: string }>;
  };
  convert?: {
    targets: number;
    alreadyConverted: number;
    converted: number;
    bytesBefore: number;
    bytesAfter: number;
    larger: string[];
    skipped: Array<{ key: string; reason: string }>;
    failed: Array<{ key: string; error: string }>;
    ledgerFiles: string[];
  };
  rewrite?: {
    mappings: number;
    rowsUpdated: number;
    cellsUpdated: number;
    referencesReplaced: number;
    conflicts: number;
    byTable: Record<string, number>;
    mediaRowsUpdated: number;
    avifVariantsRemoved: number;
    cacheTags: number;
  };
  delete?: {
    candidates: number;
    deleted: number;
    bytesFreed: number;
    avifDeleted: number;
    avifBytesFreed: number;
    kept: Array<{ key: string; reason: string }>;
    keptByReason: Record<string, number>;
    sampleKeys: string[];
    /** Dry run: what would be deleted (first 200). In a dry run the counts above are what would be deleted. */
    listing?: Array<{ key: string; bytes: number; kind: 'original' | 'avif-variant' }>;
  };
  reportKey?: string;
  ms: number;
}

// ------------------------------------------------------------------------------------------------
// helpers

async function readAll(stream: NodeJS.ReadableStream, maxBytes: number): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of stream as AsyncIterable<Buffer | string>) {
    const buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
    total += buffer.length;
    if (total > maxBytes) throw new Error(`larger than ${maxBytes} bytes`);
    chunks.push(buffer);
  }
  return Buffer.concat(chunks);
}

function publicBases(storage: ObjectStorage): string[] {
  return [...new Set([storage.config.publicBaseUrl, ...KNOWN_PUBLIC_BASES])];
}

function sha256(body: Buffer): string {
  return createHash('sha256').update(body).digest('hex');
}

function addTotals(map: Record<string, Totals>, name: string, bytes: number): void {
  const entry = map[name] ?? { count: 0, bytes: 0 };
  entry.count += 1;
  entry.bytes += bytes;
  map[name] = entry;
}

function errorMessage(error: unknown): string {
  return (error instanceof Error ? error.message : String(error)).slice(0, 300);
}

function cellKeys(
  index: ImageRefIndex,
  kind: 'text' | 'jsonb',
  column: string,
  text: string,
): { text: string; keys: Set<string>; count: number } {
  if (kind === 'jsonb') {
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      return { text, keys: new Set(), count: 0 };
    }
    const out = index.rewriteJson(parsed);
    return { text: out.count > 0 ? JSON.stringify(out.value) : text, keys: out.keys, count: out.count };
  }
  return index.rewriteCell(text, { wholeKey: KEY_COLUMN.test(column) });
}

/** `media/{id}/{w}.avif` whose `{w}.webp` twin is in the bucket: redundant, never converted. */
function twinOfAvifVariant(key: string, inventory: Inventory): string | null {
  if (!AVIF_VARIANT_KEY.test(key)) return null;
  const twin = key.replace(/\.avif$/, '.webp');
  return inventory.allKeys.has(twin) ? twin : null;
}

// ------------------------------------------------------------------------------------------------
// reference scan (report and delete phases)

interface RefScan {
  referenced: Map<string, number>;
  byColumn: Map<string, number>;
  rowsWithReferences: number;
  missing: Map<string, number>;
  mediaRows: number;
  avifRemovable: Map<string, AvifEntry>;
  /** Keys that `Media` lists (source and variants). */
  mediaKeys: Set<string>;
  mediaIds: Set<string>;
  tables: number;
}

/**
 * Reads the whole database for references to `watched` keys (identity mapping). `inventory` decides what
 * is missing; `skipMissing` leaves that analysis out (phase 3 only needs to know what is referenced).
 */
async function scanReferences(
  ctx: Ctx,
  storage: ObjectStorage,
  catalogue: Catalogue,
  inventory: Inventory,
  watched: ReadonlySet<string>,
  options: { signal: AbortSignal; pageSize: number; findMissing: boolean },
): Promise<RefScan> {
  const bases = publicBases(storage);
  const bucket = storage.config.publicBucket;
  const identity = new ImageRefIndex(new Map([...watched].map((key) => [key, key])), { bases });
  const scan: RefScan = {
    referenced: new Map(),
    byColumn: new Map(),
    rowsWithReferences: 0,
    missing: new Map(),
    mediaRows: 0,
    avifRemovable: new Map(),
    mediaKeys: new Set(),
    mediaIds: new Set(),
    tables: 0,
  };
  const noteMissing = (key: string) => {
    if (!options.findMissing || inventory.allKeys.has(key) || !isConvertibleImageKey(key)) return;
    if (excludedPrefixOf(key)) return;
    scan.missing.set(key, (scan.missing.get(key) ?? 0) + 1);
  };

  await eachMediaPage(ctx, { pageSize: options.pageSize, signal: options.signal }, async (rows) => {
    for (const row of rows) {
      scan.mediaRows += 1;
      scan.mediaIds.add(row.id);
      const keys: string[] = [];
      if (row.sourceBucket === bucket && !row.sourceKey.startsWith('incoming/')) keys.push(row.sourceKey);
      for (const variant of Array.isArray(row.variants) ? row.variants : []) keys.push(variant.key);
      for (const key of keys) {
        scan.mediaKeys.add(key);
        if (watched.has(key)) scan.referenced.set(key, (scan.referenced.get(key) ?? 0) + 1);
        else if (options.findMissing && !inventory.allKeys.has(key)) noteMissing(key);
      }
      if (watched.has(row.sourceKey) || keys.some((key) => watched.has(key))) {
        scan.byColumn.set('Media.sourceKey/variants', (scan.byColumn.get('Media.sourceKey/variants') ?? 0) + 1);
      }
      const plan = planMediaRow(row, {
        publicBucket: bucket,
        converted: new Map(),
        exists: (key) => inventory.allKeys.has(key),
        sizeOf: (key) => inventory.sizes.get(key) ?? 0,
        now: ctx.clock.now().toISOString(),
      });
      for (const entry of plan.avif) scan.avifRemovable.set(entry.key, entry);
    }
  });

  const pattern = prefilterPattern([...watched].filter((key) => !isConvertibleImageKey(key)));
  for (const table of catalogue.tables) {
    if (table.name === 'Media') continue;
    scan.tables += 1;
    await scanTable(
      ctx,
      table,
      { pattern, pageSize: options.pageSize, signal: options.signal, skip: () => false },
      async (rows, columns) => {
        for (const row of rows) {
          let hit = false;
          for (const [column, text] of row.cells) {
            const kind = columns.find((c) => c.name === column)?.kind ?? 'text';
            const found = cellKeys(identity, kind, column, text);
            for (const key of found.keys) {
              hit = true;
              scan.referenced.set(key, (scan.referenced.get(key) ?? 0) + 1);
              const where = `${table.name}.${column}`;
              scan.byColumn.set(where, (scan.byColumn.get(where) ?? 0) + 1);
            }
            if (options.findMissing) {
              for (const key of extractImageUrlKeys(text, bases)) noteMissing(key);
              if (kind === 'text' && KEY_COLUMN.test(column)) {
                const whole = text.trim();
                if (isConvertibleImageKey(whole) && !/\s{2,}|\n/.test(whole) && !whole.includes('://'))
                  noteMissing(whole);
              }
            }
          }
          if (hit) scan.rowsWithReferences += 1;
        }
      },
    );
  }
  return scan;
}

// ------------------------------------------------------------------------------------------------
// conversion

interface Converted {
  entry: LedgerEntry;
  reused: boolean;
}

async function verifyWebp(
  storage: ObjectStorage,
  bucket: string,
  key: string,
  expected: Buffer,
  size: { width: number; height: number; animated: boolean },
): Promise<void> {
  const { body } = await storage.get(bucket, key);
  const downloaded = await readAll(body, MAX_IMAGE_BYTES);
  if (!downloaded.equals(expected)) throw new Error('the uploaded object differs from what was sent');
  const pipeline = sharp(downloaded, { animated: size.animated, failOn: 'error', limitInputPixels: false });
  const meta = await pipeline.metadata();
  if (meta.format !== 'webp') throw new Error(`the new object is ${meta.format}, not webp`);
  if (meta.width !== size.width) throw new Error(`the new object is ${meta.width} px wide, expected ${size.width}`);
  await sharp(downloaded, { animated: size.animated, failOn: 'error', limitInputPixels: false }).stats();
}

/** Why an image is not converted (reported, never fatal). */
class SkipImage extends Error {}

async function convertOne(
  storage: ObjectStorage,
  bucket: string,
  inventory: Inventory,
  claimed: Set<string>,
  planned: ReadonlyMap<string, string>,
  object: ImageObject,
  referenced: boolean,
  now: string,
): Promise<Converted> {
  if (object.size > MAX_IMAGE_BYTES) throw new SkipImage(`larger than ${MAX_IMAGE_BYTES} bytes`);
  const { body: stream } = await storage.get(bucket, object.key);
  const input = await readAll(stream, MAX_IMAGE_BYTES);
  let converted: Awaited<ReturnType<typeof convertToWebp>>;
  try {
    converted = await convertToWebp(input);
  } catch (error) {
    if (error instanceof ImageRejectedError) throw new SkipImage(`${error.reason}: ${error.message}`.slice(0, 200));
    throw error;
  }

  // The target next to the original; the old extension joins the name when two sources share one.
  // Keys are reserved synchronously, so two images of one batch never pick the same name.
  let reused = false;
  const claim = async (key: string): Promise<boolean> => {
    if (claimed.has(key)) return false;
    claimed.add(key);
    if (!inventory.allKeys.has(key)) return true;
    // An object is already there: it is ours (an interrupted run) when it is byte for byte what we produce.
    try {
      const existing = await readAll((await storage.get(bucket, key)).body, MAX_IMAGE_BYTES);
      if (existing.equals(converted.body)) {
        reused = true;
        return true;
      }
    } catch {
      /* unreadable: treat it as taken */
    }
    return false;
  };
  let newKey = planned.get(object.key) ?? webpKeyOf(object.key);
  if (!(await claim(newKey))) {
    newKey = webpKeyOf(object.key, new Set([newKey]));
    if (!(await claim(newKey))) throw new SkipImage(`${newKey} is taken as well as the plain .webp name`);
  }

  if (!reused) {
    await storage.put({
      bucket,
      key: newKey,
      body: converted.body,
      contentLength: converted.body.length,
      contentType: 'image/webp',
      cacheControl: IMMUTABLE_CACHE_CONTROL,
    });
  }
  await verifyWebp(storage, bucket, newKey, converted.body, converted);
  return {
    reused,
    entry: {
      oldKey: object.key,
      newKey,
      oldBytes: input.length,
      newBytes: converted.body.length,
      oldContentType: object.contentType,
      sourceFormat: converted.sourceFormat,
      width: converted.width,
      height: converted.height,
      animated: converted.animated,
      frames: converted.frames,
      sha256: sha256(converted.body),
      via: object.via,
      referenced,
      larger: converted.body.length > input.length,
      at: now,
    },
  };
}

async function sampleEstimate(
  storage: ObjectStorage,
  bucket: string,
  targets: ImageObject[],
  count: number,
  signal: AbortSignal,
): Promise<NonNullable<B22Report['estimate']>> {
  const candidates = targets.filter((o) => o.size <= SAMPLE_MAX_BYTES).sort((a, b) => a.key.localeCompare(b.key));
  const step = Math.max(1, Math.floor(candidates.length / Math.max(1, count)));
  const picked: ImageObject[] = [];
  for (let i = 0; i < candidates.length && picked.length < count; i += step) picked.push(candidates[i] as ImageObject);
  const estimate: NonNullable<B22Report['estimate']> = {
    sampled: 0,
    sampledBytesBefore: 0,
    sampledBytesAfter: 0,
    ratio: null,
    convertibleImages: { count: targets.length, bytes: targets.reduce((sum, o) => sum + o.size, 0) },
    estimatedBytesAfter: null,
    estimatedSaving: null,
    byExtension: {},
    larger: [],
    failed: [],
  };
  const perExt = new Map<string, { before: number; after: number; n: number }>();
  await mapLimit(picked, CONCURRENCY, signal, async (object) => {
    try {
      const input = await readAll((await storage.get(bucket, object.key)).body, SAMPLE_MAX_BYTES);
      const out = await convertToWebp(input);
      estimate.sampled += 1;
      estimate.sampledBytesBefore += input.length;
      estimate.sampledBytesAfter += out.body.length;
      if (out.body.length > input.length) pushSample(estimate.larger, object.key, 20);
      const ext = extensionOfKey(object.key) || 'none';
      const entry = perExt.get(ext) ?? { before: 0, after: 0, n: 0 };
      entry.before += input.length;
      entry.after += out.body.length;
      entry.n += 1;
      perExt.set(ext, entry);
    } catch (error) {
      pushSample(estimate.failed, { key: object.key, error: errorMessage(error) }, 20);
    }
  });
  if (estimate.sampledBytesBefore > 0) {
    estimate.ratio = Number((estimate.sampledBytesAfter / estimate.sampledBytesBefore).toFixed(4));
    estimate.estimatedBytesAfter = Math.round(estimate.convertibleImages.bytes * estimate.ratio);
    estimate.estimatedSaving = estimate.convertibleImages.bytes - estimate.estimatedBytesAfter;
  }
  for (const [ext, v] of perExt) {
    estimate.byExtension[ext] = { sampled: v.n, ratio: Number((v.after / Math.max(1, v.before)).toFixed(4)) };
  }
  return estimate;
}

// ------------------------------------------------------------------------------------------------
// database rewrite

interface Touched {
  /** table → single-column "id" values (as text) of rewritten rows. */
  rows: Map<string, Set<string>>;
}

async function rewriteDatabase(
  ctx: Ctx,
  storage: ObjectStorage,
  catalogue: Catalogue,
  inventory: Inventory,
  converted: ReadonlyMap<string, LedgerEntry>,
  options: { signal: AbortSignal; pageSize: number; runName: string },
  report: NonNullable<B22Report['rewrite']>,
): Promise<Touched> {
  const bucket = storage.config.publicBucket;
  const mapping = new Map([...converted.values()].map((e) => [e.oldKey, e.newKey]));
  const index = new ImageRefIndex(mapping, { bases: publicBases(storage) });
  const touched: Touched = { rows: new Map() };
  const touch = (table: string, key: Record<string, string>) => {
    const id = key.id;
    if (id === undefined) return;
    const set = touched.rows.get(table) ?? new Set<string>();
    set.add(id);
    touched.rows.set(table, set);
  };
  const count = (table: string) => {
    report.byTable[table] = (report.byTable[table] ?? 0) + 1;
  };
  const mediaTable = catalogue.tables.find((t) => t.name === 'Media');

  // 1. Media: source key, variants, content type, sizes; AVIF variants out.
  if (mediaTable) {
    await eachMediaPage(ctx, { pageSize: options.pageSize, signal: options.signal }, async (rows) => {
      const plans = rows
        .map((row) => ({
          row,
          plan: planMediaRow(row, {
            publicBucket: bucket,
            converted,
            exists: (key) => inventory.allKeys.has(key),
            sizeOf: (key) => inventory.sizes.get(key) ?? 0,
            now: ctx.clock.now().toISOString(),
          }),
        }))
        .filter(({ plan }) => plan.changes.length > 0);
      if (plans.length === 0) return;
      // Intent first: the AVIF objects to delete are in the ledger before the rows stop listing them.
      const avif = plans.flatMap(({ plan }) => plan.avif);
      if (avif.length > 0) {
        await writeLedgerFile(storage, bucket, `${options.runName}-avif-${plans[0]?.row.id}`, {
          version: 1,
          run: options.runName,
          createdAt: ctx.clock.now().toISOString(),
          entries: [],
          avif,
        });
      }
      await ctx.db.transaction(async (tx) => {
        for (const { row, plan } of plans) {
          const ok = await updateRowAudited(tx, B22_FIX_ID, mediaTable, { id: row.id }, plan.changes);
          if (!ok) {
            report.conflicts += 1;
            continue;
          }
          report.mediaRowsUpdated += 1;
          report.cellsUpdated += plan.changes.length;
          report.avifVariantsRemoved += plan.avif.length;
          touch('Media', { id: row.id });
          count('Media');
        }
      });
    });
  }

  // 2. Every other table, every text and JSON column.
  const pattern = prefilterPattern([...mapping.keys()].filter((key) => !isConvertibleImageKey(key)));
  for (const table of catalogue.tables) {
    if (table.name === 'Media') continue;
    await scanTable(
      ctx,
      table,
      { pattern, pageSize: options.pageSize, signal: options.signal },
      async (rows, columns) => {
        const pending: Array<{ row: (typeof rows)[number]; changes: CellChange[]; replaced: number }> = [];
        for (const row of rows) {
          const changes: CellChange[] = [];
          let replaced = 0;
          for (const [column, text] of row.cells) {
            const kind = columns.find((c) => c.name === column)?.kind ?? 'text';
            const out = cellKeys(index, kind, column, text);
            if (out.count === 0 || out.text === text) continue;
            changes.push({ column, kind, oldText: text, newText: out.text });
            replaced += out.count;
          }
          if (changes.length > 0) pending.push({ row, changes, replaced });
        }
        if (pending.length === 0) return;
        await ctx.db.transaction(async (tx) => {
          for (const { row, changes, replaced } of pending) {
            const ok = await updateRowAudited(tx, B22_FIX_ID, table, row.key, changes);
            if (!ok) {
              report.conflicts += 1;
              continue;
            }
            report.rowsUpdated += 1;
            report.cellsUpdated += changes.length;
            report.referencesReplaced += replaced;
            touch(table.name, row.key);
            count(table.name);
          }
        });
      },
    );
  }
  return touched;
}

/** Cache tags of the pages that show the rows B22 rewrote. */
async function tagsFor(ctx: Ctx, touched: Touched): Promise<string[]> {
  const tags = new Set<string>();
  const ids = (table: string) => [...(touched.rows.get(table) ?? [])];
  const num = (values: string[]) => values.map(Number).filter((n) => Number.isInteger(n) && n > 0);
  const list = (values: number[]) =>
    sql`ARRAY[${sql.join(
      values.map((v) => sql`${v}`),
      sql`, `,
    )}]::int[]`;
  const addMods = (modIds: number[]) => {
    for (const id of modIds) tags.add(`mod:${id}`);
  };
  const addUsers = (userIds: Array<number | null>) => {
    for (const id of userIds) if (id) tags.add(`user:${id}`);
  };
  const withModIds = async (table: string, rowIds: number[]) => {
    if (rowIds.length === 0) return;
    const res = await ctx.db.execute<{ modId: number | null }>(
      sql`SELECT DISTINCT "modId" FROM ${sql.identifier(table)} WHERE "id" = ANY(${list(rowIds)})`,
    );
    addMods(res.rows.map((r) => r.modId).filter((v): v is number => v !== null));
  };

  const modIds = num(ids('Mod'));
  addMods(modIds);
  if (modIds.length > 0) {
    const owners = await ctx.db.execute<{ userId: number | null }>(
      sql`SELECT DISTINCT "userId" FROM "Mod" WHERE "id" = ANY(${list(modIds)})`,
    );
    addUsers(owners.rows.map((r) => r.userId));
  }
  addUsers(num(ids('User')));
  for (const table of ['ModImage', 'ModVersion', 'Comment', 'ModReview', 'ModKnownIssue', 'ModFaqEntry']) {
    try {
      await withModIds(table, num(ids(table)));
    } catch {
      tags.add('html'); // no modId to follow: purge the pages
    }
  }
  const mediaIds = ids('Media');
  if (mediaIds.length > 0) {
    const arr = sql`ARRAY[${sql.join(
      mediaIds.map((v) => sql`${v}`),
      sql`, `,
    )}]::uuid[]`;
    const mods = await ctx.db.execute<{ id: number; userId: number | null }>(sql`
      SELECT m."id", m."userId" FROM "Mod" m
       WHERE m."thumbnailMediaId" = ANY(${arr})
          OR EXISTS (SELECT 1 FROM "ModImage" i WHERE i."modId" = m."id" AND i."mediaId" = ANY(${arr}))`);
    for (const m of mods.rows) {
      tags.add(`mod:${m.id}`);
      if (m.userId) tags.add(`user:${m.userId}`);
    }
    const users = await ctx.db.execute<{ id: number }>(
      sql`SELECT "id" FROM "User" WHERE "avatarMediaId" = ANY(${arr}) OR "bannerMediaId" = ANY(${arr})`,
    );
    addUsers(users.rows.map((r) => r.id));
  }
  for (const id of num(ids('Kit'))) tags.add(`kit:${id}`);
  if ([...touched.rows.keys()].some((t) => t.startsWith('Jam'))) tags.add('list:jams');
  if ([...touched.rows.keys()].some((t) => t.startsWith('ModRequest'))) tags.add('list:requests');
  if (touched.rows.size > 0) {
    for (const tag of ['home', 'list:mods', 'list:builds', 'feed', 'sitemap', 'search-index', 'legacy']) tags.add(tag);
  }
  return [...tags];
}

async function invalidate(ctx: Ctx, touched: Touched, reason: string): Promise<number> {
  const tags = await tagsFor(ctx, touched);
  if (tags.length === 0) return 0;
  if (tags.length > 400) {
    // So many pages changed that listing them is pointless: empty every cache and the pages of the CDN.
    await publishCacheInvalidation(ctx.db, '*');
    await purge(
      ctx.jobs,
      ['html', 'home', 'list:mods', 'list:builds', 'list:kits', 'list:requests', 'list:jams'],
      reason,
    );
    return tags.length;
  }
  for (let i = 0; i < tags.length; i += 100) await publishCacheInvalidation(ctx.db, tags.slice(i, i + 100));
  await purge(ctx.jobs, tags, reason);
  return tags.length;
}

// ------------------------------------------------------------------------------------------------
// phases

function emptyReport(mode: B22Mode, options: B22Options, bucket: string, runId: string): B22Report {
  return { mode, dryRun: options.dryRun, includeUnreferenced: options.includeUnreferenced, bucket, runId, ms: 0 };
}

function describeInventory(inventory: Inventory): NonNullable<B22Report['inventory']> {
  const byExtension: Record<string, Totals> = {};
  let bytes = 0;
  for (const object of inventory.images.values()) {
    addTotals(byExtension, extensionOfKey(object.key) || 'none', object.size);
    bytes += object.size;
  }
  return {
    objects: inventory.objects,
    bytes: inventory.bytes,
    images: { count: inventory.images.size, bytes, byExtension, viaContentType: inventory.byContentType },
    alreadyWebp: inventory.webp,
    excluded: inventory.excluded,
    other: inventory.other,
    sampleKeys: [...inventory.images.keys()].sort().slice(0, 10),
  };
}

function validLedger(ledger: Ledger, inventory: Inventory): Map<string, LedgerEntry> {
  const out = new Map<string, LedgerEntry>();
  for (const [key, entry] of ledger.entries) {
    if (entry.oldKey !== entry.newKey && inventory.allKeys.has(entry.newKey)) out.set(key, entry);
  }
  return out;
}

export async function runB22(ctx: Ctx, storage: ObjectStorage, options: B22Options): Promise<B22Report> {
  const started = Date.now();
  const bucket = storage.config.publicBucket;
  const mode = options.mode;
  const writes = !options.dryRun;
  const run = await startRun(ctx, 'B22', !writes);
  const runName = `${new Date(started)
    .toISOString()
    .replace(/[-:.TZ]/g, '')
    .slice(0, 14)}-${run.id ?? 'dry'}`;
  const report = emptyReport(mode, options, bucket, runName);
  ctx.log.info({ mode, dryRun: options.dryRun, includeUnreferenced: options.includeUnreferenced }, 'B22 started');
  try {
    const catalogue = await loadCatalogue(ctx);
    const inventory = await buildInventory(storage, bucket, {
      signal: options.signal,
      concurrency: CONCURRENCY,
      sniffContentTypes: mode !== 'delete',
    });
    const ledger = await readLedger(storage, bucket);
    const done = validLedger(ledger, inventory);
    report.inventory = describeInventory(inventory);
    const pageSize = Math.min(PAGE_SIZE, Math.max(50, options.batchSize));

    if (mode === 'delete') {
      await runDelete(ctx, storage, catalogue, inventory, ledger, options, report, pageSize);
    } else {
      // Which images does the database reference, and which AVIF variants can go?
      const watched = new Set(inventory.images.keys());
      const refs = await scanReferences(ctx, storage, catalogue, inventory, watched, {
        signal: options.signal,
        pageSize,
        findMissing: true,
      });
      const converted = new Set(done.keys());
      const pending = [...inventory.images.values()].filter(
        (o) => !refs.avifRemovable.has(o.key) && !converted.has(o.key) && !twinOfAvifVariant(o.key, inventory),
      );
      const referenced = pending.filter((o) => refs.referenced.has(o.key));
      const unreferenced = pending.filter((o) => !refs.referenced.has(o.key));
      const sum = (list: ImageObject[]) => list.reduce((s, o) => s + o.size, 0);
      report.references = {
        tablesScanned: refs.tables,
        tablesWithoutKey: catalogue.withoutKey,
        rowsWithReferences: refs.rowsWithReferences,
        referencedImages: {
          count: referenced.length,
          bytes: sum(referenced),
          sampleKeys: referenced
            .map((o) => o.key)
            .sort()
            .slice(0, 10),
        },
        unreferencedImages: {
          count: unreferenced.length,
          bytes: sum(unreferenced),
          sampleKeys: unreferenced
            .map((o) => o.key)
            .sort()
            .slice(0, 10),
        },
        byColumn: Object.fromEntries([...refs.byColumn].sort((a, b) => b[1] - a[1]).slice(0, 30)),
        missing: { count: refs.missing.size, sampleKeys: [...refs.missing.keys()].sort().slice(0, 10) },
        mediaRows: refs.mediaRows,
        avifVariantsRemovable: {
          count: refs.avifRemovable.size,
          bytes: [...refs.avifRemovable.values()].reduce((s, e) => s + e.bytes, 0),
        },
      };
      const targets = options.includeUnreferenced ? pending : referenced;

      if (mode === 'report') {
        report.estimate = await sampleEstimate(storage, bucket, targets, options.sample ?? SAMPLE_SIZE, options.signal);
      } else {
        await runConvert(
          ctx,
          storage,
          catalogue,
          inventory,
          done,
          targets,
          refs,
          options,
          report,
          run,
          runName,
          pageSize,
        );
      }
    }

    report.ms = Date.now() - started;
    if (writes) {
      report.reportKey = await writeReport(storage, bucket, `report-${mode}-${runName}`, report);
      const rows = report.convert?.converted ?? report.delete?.deleted ?? 0;
      await run.finish(rows, { ...report });
    }
    ctx.log.info({ mode, ms: report.ms }, 'B22 finished');
    return report;
  } catch (error) {
    await run.fail(error, { mode, partial: report }).catch(() => undefined);
    throw error;
  }
}

async function runConvert(
  ctx: Ctx,
  storage: ObjectStorage,
  catalogue: Catalogue,
  inventory: Inventory,
  done: Map<string, LedgerEntry>,
  targets: ImageObject[],
  refs: RefScan,
  options: B22Options,
  report: B22Report,
  run: Awaited<ReturnType<typeof startRun>>,
  runName: string,
  pageSize: number,
): Promise<void> {
  const bucket = storage.config.publicBucket;
  const convert: NonNullable<B22Report['convert']> = {
    targets: targets.length,
    alreadyConverted: done.size,
    converted: 0,
    bytesBefore: 0,
    bytesAfter: 0,
    larger: [],
    skipped: [],
    failed: [],
    ledgerFiles: [],
  };
  report.convert = convert;
  const claimed = new Set<string>();
  const ordered = [...targets].sort((a, b) => a.key.localeCompare(b.key));
  // Names are decided up front, in key order, so two sources of one name (a.jpg and a.png) always resolve the same way.
  const planned = new Map<string, string>();
  const plannedNames = new Set<string>();
  for (const object of ordered) {
    const plain = webpKeyOf(object.key);
    const name = plannedNames.has(plain) ? webpKeyOf(object.key, new Set([plain])) : plain;
    plannedNames.add(name);
    planned.set(object.key, name);
  }
  const batchSize = Math.max(1, options.batchSize);
  let batchNumber = 0;
  for (let i = 0; i < ordered.length; i += batchSize) {
    if (options.signal.aborted) throw new Error('B22 aborted (job cancelled or expired); run it again to resume');
    const slice = ordered.slice(i, i + batchSize);
    const entries: LedgerEntry[] = [];
    await mapLimit(slice, CONCURRENCY, options.signal, async (object) => {
      try {
        const out = await convertOne(
          storage,
          bucket,
          inventory,
          claimed,
          planned,
          object,
          refs.referenced.has(object.key),
          ctx.clock.now().toISOString(),
        );
        entries.push(out.entry);
        convert.converted += 1;
        convert.bytesBefore += out.entry.oldBytes;
        convert.bytesAfter += out.entry.newBytes;
        if (out.entry.larger) {
          pushSample(convert.larger, `${object.key} (${out.entry.oldBytes} -> ${out.entry.newBytes})`, 50);
          ctx.log.warn(
            { key: object.key, before: out.entry.oldBytes, after: out.entry.newBytes },
            'B22: WebP is larger',
          );
        }
      } catch (error) {
        if (error instanceof SkipImage) pushSample(convert.skipped, { key: object.key, reason: error.message }, 100);
        else {
          ctx.log.warn({ key: object.key, err: error }, 'B22: image left for the next run');
          pushSample(convert.failed, { key: object.key, error: errorMessage(error) }, 100);
        }
      }
    });
    if (options.signal.aborted) throw new Error('B22 aborted (job cancelled or expired); run it again to resume');
    if (entries.length > 0) {
      batchNumber += 1;
      const key = await writeLedgerFile(storage, bucket, `${runName}-${String(batchNumber).padStart(4, '0')}`, {
        version: 1,
        run: runName,
        createdAt: ctx.clock.now().toISOString(),
        entries,
        avif: [],
      });
      convert.ledgerFiles.push(key);
      for (const entry of entries) {
        done.set(entry.oldKey, entry);
        inventory.allKeys.add(entry.newKey);
        inventory.sizes.set(entry.newKey, entry.newBytes);
      }
    }
    await run.note({ progress: { converted: convert.converted, of: ordered.length } });
    ctx.log.info({ converted: convert.converted, of: ordered.length }, 'B22 conversion batch');
  }

  // Database: every reference of every ledger entry (this run and the earlier ones).
  const rewrite: NonNullable<B22Report['rewrite']> = {
    mappings: done.size,
    rowsUpdated: 0,
    cellsUpdated: 0,
    referencesReplaced: 0,
    conflicts: 0,
    byTable: {},
    mediaRowsUpdated: 0,
    avifVariantsRemoved: 0,
    cacheTags: 0,
  };
  report.rewrite = rewrite;
  const touched = await rewriteDatabase(
    ctx,
    storage,
    catalogue,
    inventory,
    done,
    { signal: options.signal, pageSize, runName },
    rewrite,
  );
  rewrite.cacheTags = await invalidate(ctx, touched, 'b22.webp');
  convert.failed = convert.failed.slice(0, 100);
}

async function runDelete(
  ctx: Ctx,
  storage: ObjectStorage,
  catalogue: Catalogue,
  inventory: Inventory,
  ledger: Ledger,
  options: B22Options,
  report: B22Report,
  pageSize: number,
): Promise<void> {
  const bucket = storage.config.publicBucket;
  const del: NonNullable<B22Report['delete']> = {
    candidates: 0,
    deleted: 0,
    bytesFreed: 0,
    avifDeleted: 0,
    avifBytesFreed: 0,
    kept: [],
    keptByReason: {},
    sampleKeys: [],
  };
  report.delete = del;
  const keep = (key: string, reason: string) => {
    del.keptByReason[reason] = (del.keptByReason[reason] ?? 0) + 1;
    pushSample(del.kept, { key, reason }, 50);
  };

  // Objects that are no longer in the bucket need nothing.
  const entries = [...ledger.entries.values()].filter((e) => inventory.allKeys.has(e.oldKey));
  const avif = [...ledger.avif.values()].filter((e) => inventory.allKeys.has(e.key));
  del.candidates = entries.length + avif.length;

  // 1. Is the old key still referenced? One scan of the whole database for all candidates at once.
  const orphanAvif = [...inventory.allKeys].filter(
    (key) => AVIF_VARIANT_KEY.test(key) && !ledger.avif.has(key) && twinOfAvifVariant(key, inventory) !== null,
  );
  const watched = new Set<string>([...entries.map((e) => e.oldKey), ...avif.map((e) => e.key), ...orphanAvif]);
  const refs = await scanReferences(ctx, storage, catalogue, inventory, watched, {
    signal: options.signal,
    pageSize,
    findMissing: false,
  });
  // AVIF variants of a media the site knows, with their WebP twin in the bucket, that no Media lists any more
  // (the ledger may have been lost): redundant as well.
  for (const key of orphanAvif) {
    const id = key.split('/')[1] as string;
    if (!refs.mediaIds.has(id)) continue;
    avif.push({
      key,
      bytes: inventory.sizes.get(key) ?? 0,
      mediaId: id,
      twin: key.replace(/\.avif$/, '.webp'),
      at: '',
    });
  }
  del.candidates = entries.length + avif.length;

  // 2. Does the new object exist and decode?
  const decodes = new Map<string, string | null>();
  const toCheck = entries.filter((e) => !refs.referenced.has(e.oldKey));
  await mapLimit(toCheck, CONCURRENCY, options.signal, async (entry) => {
    try {
      if (inventory.sizes.get(entry.newKey) !== entry.newBytes) {
        decodes.set(entry.oldKey, 'the new object has another size than the ledger says');
        return;
      }
      const { body } = await storage.get(bucket, entry.newKey);
      const bytes = await readAll(body, MAX_IMAGE_BYTES);
      if (sha256(bytes) !== entry.sha256) {
        decodes.set(entry.oldKey, 'the new object differs from the ledger (sha256)');
        return;
      }
      const meta = await sharp(bytes, {
        animated: entry.animated,
        failOn: 'error',
        limitInputPixels: false,
      }).metadata();
      if (meta.format !== 'webp') {
        decodes.set(entry.oldKey, 'the new object is not a WebP');
        return;
      }
      await sharp(bytes, { animated: entry.animated, failOn: 'error', limitInputPixels: false }).stats();
      decodes.set(entry.oldKey, null);
    } catch (error) {
      decodes.set(entry.oldKey, `the new object does not decode: ${errorMessage(error)}`);
    }
  });

  const deletions: Array<{ key: string; bytes: number; avif: boolean }> = [];
  for (const entry of entries) {
    if (entry.oldKey === entry.newKey || !(isConvertibleImageKey(entry.oldKey) || entry.via === 'content-type')) {
      keep(entry.oldKey, 'not an image to delete');
    } else if (excludedPrefixOf(entry.oldKey)) {
      keep(entry.oldKey, 'protected prefix');
    } else if (refs.referenced.has(entry.oldKey)) {
      keep(entry.oldKey, 'still referenced in the database');
    } else if (decodes.get(entry.oldKey) !== null) {
      keep(entry.oldKey, decodes.get(entry.oldKey) ?? 'new object not verified');
    } else {
      deletions.push({ key: entry.oldKey, bytes: inventory.sizes.get(entry.oldKey) ?? entry.oldBytes, avif: false });
    }
  }
  for (const entry of avif) {
    if (!inventory.allKeys.has(entry.twin)) keep(entry.key, 'its WebP twin is not in the bucket');
    else if (refs.referenced.has(entry.key) || refs.mediaKeys.has(entry.key))
      keep(entry.key, 'still referenced in the database');
    else deletions.push({ key: entry.key, bytes: inventory.sizes.get(entry.key) ?? entry.bytes, avif: true });
  }

  del.sampleKeys = deletions
    .map((d) => d.key)
    .sort()
    .slice(0, 10);
  if (options.dryRun) {
    del.listing = deletions
      .slice(0, 200)
      .map((d) => ({ key: d.key, bytes: d.bytes, kind: d.avif ? ('avif-variant' as const) : ('original' as const) }));
    del.deleted = deletions.filter((d) => !d.avif).length;
    del.bytesFreed = deletions.filter((d) => !d.avif).reduce((s, d) => s + d.bytes, 0);
    del.avifDeleted = deletions.filter((d) => d.avif).length;
    del.avifBytesFreed = deletions.filter((d) => d.avif).reduce((s, d) => s + d.bytes, 0);
    return;
  }
  await mapLimit(deletions, CONCURRENCY, options.signal, async (d) => {
    try {
      await storage.delete(bucket, d.key);
      if (d.avif) {
        del.avifDeleted += 1;
        del.avifBytesFreed += d.bytes;
      } else {
        del.deleted += 1;
        del.bytesFreed += d.bytes;
      }
    } catch (error) {
      ctx.log.warn({ key: d.key, err: error }, 'B22: object not deleted');
      keep(d.key, `delete failed: ${errorMessage(error)}`);
    }
  });
  if (options.signal.aborted) throw new Error('B22 aborted (job cancelled or expired); run it again to resume');
}
