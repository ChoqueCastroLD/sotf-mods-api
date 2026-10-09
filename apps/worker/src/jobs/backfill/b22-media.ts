/**
 * B22 · the `Media` table: the structured side of the rewrite. A `Media` row keeps the key of its
 * original (`sourceKey`) and the list of its variants (`variants`, with their keys and byte sizes):
 *
 * - an original converted to WebP gets its new `sourceKey`, `contentType = image/webp`, `bytes` and, when
 *   the orientation of the pixels changed, `width`/`height`;
 * - a variant converted to WebP gets its new key, `format = webp` and size;
 * - every AVIF variant that has a WebP twin of the same width is **removed from the list** (the pages
 *   already ignore them); the objects are listed in the ledger so phase 3 deletes them.
 */
import type { Ctx } from '@sotf/core';
import type { MediaVariant } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { AvifEntry, LedgerEntry } from './b22-ledger.ts';
import type { CellChange } from './b22-scan.ts';

export interface MediaRowData {
  id: string;
  sourceBucket: string;
  sourceKey: string;
  status: string;
  purpose: string;
  contentType: string | null;
  bytes: string | null;
  width: number | null;
  height: number | null;
  variants: MediaVariant[] | null;
  /** The jsonb as Postgres prints it: what an update must compare against. */
  variantsText: string;
}

export interface MediaPlan {
  changes: CellChange[];
  avif: AvifEntry[];
}

/**
 * What B22 changes in one `Media` row (pure). `converted` maps old keys to their ledger entry;
 * `exists(key)` tells whether an object is in the bucket (a twin that is gone does not justify dropping an AVIF
 * variant); `sizeOf(key)` is the size of an object.
 */
export function planMediaRow(
  row: MediaRowData,
  options: {
    publicBucket: string;
    converted: ReadonlyMap<string, LedgerEntry>;
    exists: (key: string) => boolean;
    sizeOf: (key: string) => number;
    now: string;
  },
): MediaPlan {
  const changes: CellChange[] = [];
  const avif: AvifEntry[] = [];

  const source = row.sourceBucket === options.publicBucket ? options.converted.get(row.sourceKey) : undefined;
  if (source) {
    changes.push({ column: 'sourceKey', kind: 'text', oldText: row.sourceKey, newText: source.newKey });
    if (row.contentType !== 'image/webp') {
      changes.push({
        column: 'contentType',
        kind: 'text',
        oldText: row.contentType,
        newText: 'image/webp',
      });
    }
    if (row.bytes !== null && row.bytes !== String(source.newBytes)) {
      changes.push({ column: 'bytes', kind: 'number', oldText: row.bytes, newText: String(source.newBytes) });
    }
    if (row.width !== null && row.width !== source.width) {
      changes.push({ column: 'width', kind: 'number', oldText: String(row.width), newText: String(source.width) });
    }
    if (row.height !== null && row.height !== source.height) {
      changes.push({ column: 'height', kind: 'number', oldText: String(row.height), newText: String(source.height) });
    }
  }

  const variants = Array.isArray(row.variants) ? row.variants : [];
  if (variants.length > 0) {
    const webpWidths = new Set(variants.filter((v) => v.format === 'webp' && options.exists(v.key)).map((v) => v.w));
    const next: MediaVariant[] = [];
    for (const variant of variants) {
      if (variant.format === 'avif' && webpWidths.has(variant.w)) {
        const twin = variants.find((v) => v.format === 'webp' && v.w === variant.w);
        if (options.exists(variant.key) && twin) {
          avif.push({
            key: variant.key,
            bytes: options.sizeOf(variant.key),
            mediaId: row.id,
            twin: twin.key,
            at: options.now,
          });
        }
        continue;
      }
      const entry = options.converted.get(variant.key);
      next.push(entry ? { ...variant, key: entry.newKey, format: 'webp', bytes: entry.newBytes } : variant);
    }
    if (JSON.stringify(next) !== JSON.stringify(variants)) {
      changes.push({
        column: 'variants',
        kind: 'jsonb',
        oldText: row.variantsText,
        newText: JSON.stringify(next),
      });
    }
  }
  return { changes, avif };
}

/** Walks `Media` by id, `pageSize` rows at a time. */
export async function eachMediaPage(
  ctx: Ctx,
  options: { pageSize: number; signal: AbortSignal },
  onPage: (rows: MediaRowData[]) => Promise<void>,
): Promise<void> {
  let after: string | null = null;
  for (;;) {
    if (options.signal.aborted) throw new Error('B22 aborted (job cancelled or expired); run it again to resume');
    const cursor = after ? sql`WHERE "id" > ${after}::uuid` : sql``;
    const res: { rows: MediaRowData[] } = await ctx.db.execute<MediaRowData & Record<string, unknown>>(sql`
      SELECT "id"::text AS "id", "sourceBucket", "sourceKey", "status", "purpose", "contentType", "bytes"::text AS "bytes",
             "width", "height", "variants", "variants"::text AS "variantsText"
        FROM "Media" ${cursor} ORDER BY "id" LIMIT ${options.pageSize}`);
    if (res.rows.length === 0) return;
    await onPage(res.rows);
    after = (res.rows[res.rows.length - 1] as MediaRowData).id;
    if (res.rows.length < options.pageSize) return;
  }
}
