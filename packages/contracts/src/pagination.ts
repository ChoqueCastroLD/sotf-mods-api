/**
 * Pagination (PLAN §5.1 "Paginación").
 *
 * - Page-based in the catalog, so SEO URLs match: `?page=1&pageSize=24` (max 100) →
 *   `{ items, page, pageSize, total, totalPages }`.
 * - Cursor-based in feeds (comments, notifications, audit, reviews): `?cursor=&limit=20` (max 100)
 *   → `{ items, nextCursor }`. The cursor is opaque: base64url of `createdAt|id`.
 */
import { z } from 'zod';
import { dto, exampleOf, wireIntDefault } from './dto.ts';

export const DEFAULT_PAGE_SIZE = 24;
export const MAX_PAGE_SIZE = 100;
export const DEFAULT_CURSOR_LIMIT = 20;
export const MAX_CURSOR_LIMIT = 100;

/** Query of page-based lists. */
export const PageQuery = z.object({
  page: wireIntDefault(1, { min: 1, max: 10_000, description: '1-based page number' }),
  pageSize: wireIntDefault(DEFAULT_PAGE_SIZE, { min: 1, max: MAX_PAGE_SIZE, description: 'Items per page' }),
});
export type PageQuery = z.output<typeof PageQuery>;

/** Opaque cursor string. */
export const Cursor = z
  .string()
  .max(200)
  .regex(/^[A-Za-z0-9_-]+$/, 'invalid cursor');

/** Query of cursor-based feeds. */
export const CursorQuery = z.object({
  cursor: Cursor.optional(),
  limit: wireIntDefault(DEFAULT_CURSOR_LIMIT, { min: 1, max: MAX_CURSOR_LIMIT, description: 'Items per page' }),
});
export type CursorQuery = z.output<typeof CursorQuery>;

/** Page envelope for `item`, registered as DTO `id` with an example built from the item example. */
export function pageOf<T extends z.ZodType>(id: string, item: T, description: string) {
  const schema = z.object({
    items: z.array(item),
    page: z.number().int().min(1),
    pageSize: z.number().int().min(1).max(MAX_PAGE_SIZE),
    total: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative(),
  });
  return dto(id, schema, {
    description,
    examples: [{ items: [exampleOf(item)], page: 1, pageSize: DEFAULT_PAGE_SIZE, total: 1, totalPages: 1 }] as [
      z.input<typeof schema>,
    ],
  });
}

/** Cursor envelope for `item`. `nextCursor` is null on the last page. */
export function cursorPageOf<T extends z.ZodType>(id: string, item: T, description: string) {
  const schema = z.object({ items: z.array(item), nextCursor: Cursor.nullable() });
  return dto(id, schema, {
    description,
    examples: [
      { items: [exampleOf(item)], nextCursor: encodeCursor({ createdAt: '2026-09-28T18:04:11.000Z', id: 97 }) },
    ] as [z.input<typeof schema>],
  });
}

/** `totalPages` for a page envelope. */
export function totalPages(total: number, pageSize: number): number {
  return total === 0 ? 0 : Math.ceil(total / pageSize);
}

// -----------------------------------------------------------------------------------------------
// Cursor encoding: base64url("<ISO createdAt>|<id>"). Runtime-agnostic (no Buffer/btoa): the
// payload is ASCII, so a small base64 codec is enough.
// -----------------------------------------------------------------------------------------------

export interface CursorPosition {
  /** ISO-8601 timestamp of the last item. */
  createdAt: string;
  /** Tie-breaker: id of the last item (number or uuid). */
  id: number | string;
}

const IsoTimestamp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?Z$/;

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function toBase64Url(ascii: string): string {
  let out = '';
  for (let i = 0; i < ascii.length; i += 3) {
    const a = ascii.charCodeAt(i);
    const b = i + 1 < ascii.length ? ascii.charCodeAt(i + 1) : Number.NaN;
    const c = i + 2 < ascii.length ? ascii.charCodeAt(i + 2) : Number.NaN;
    const n = (a << 16) | ((Number.isNaN(b) ? 0 : b) << 8) | (Number.isNaN(c) ? 0 : c);
    out += B64.charAt((n >> 18) & 63) + B64.charAt((n >> 12) & 63);
    if (!Number.isNaN(b)) out += B64.charAt((n >> 6) & 63);
    if (!Number.isNaN(c)) out += B64.charAt(n & 63);
  }
  return out;
}

function fromBase64Url(encoded: string): string | null {
  if (encoded.length % 4 === 1) return null;
  let out = '';
  for (let i = 0; i < encoded.length; i += 4) {
    const chunk = encoded.slice(i, i + 4);
    const values = [...chunk].map((ch) => B64.indexOf(ch));
    if (values.some((v) => v < 0)) return null;
    const [v0 = 0, v1 = 0, v2 = 0, v3 = 0] = values;
    const n = (v0 << 18) | (v1 << 12) | (v2 << 6) | v3;
    out += String.fromCharCode((n >> 16) & 255);
    if (chunk.length > 2) out += String.fromCharCode((n >> 8) & 255);
    if (chunk.length > 3) out += String.fromCharCode(n & 255);
  }
  return out;
}

/** Encodes a feed position as an opaque cursor. */
export function encodeCursor(position: CursorPosition): string {
  const id = String(position.id);
  if (!/^[0-9A-Za-z-]+$/.test(id)) throw new Error('cursor id must be a number or a uuid');
  if (!IsoTimestamp.test(position.createdAt)) throw new Error('cursor createdAt must be an ISO timestamp');
  return toBase64Url(`${position.createdAt}|${id}`);
}

/** Decodes a cursor; `null` when it is malformed (the API answers 422 `VALIDATION_FAILED`). */
export function decodeCursor(cursor: string): { createdAt: string; id: string } | null {
  const raw = fromBase64Url(cursor);
  if (raw === null) return null;
  const sep = raw.lastIndexOf('|');
  if (sep <= 0) return null;
  const createdAt = raw.slice(0, sep);
  const id = raw.slice(sep + 1);
  if (!IsoTimestamp.test(createdAt) || !/^[0-9A-Za-z-]+$/.test(id)) return null;
  if (Number.isNaN(Date.parse(createdAt))) return null;
  return { createdAt, id };
}
