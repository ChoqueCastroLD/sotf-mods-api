/**
 * B22 · database side: finds every cell of the database that can hold an image reference and walks
 * the tables page by page (keyset on the primary key), so memory stays bounded whatever the size of
 * the table.
 *
 * - **Every** `text`/`varchar`/`jsonb` column of every table of the `public` schema is a candidate (the
 *   catalogue is read from `pg_catalog`, so a column added tomorrow is covered without touching this
 *   file), except the tables listed in {@link EXCLUDED_TABLES}.
 * - Rows are pre-filtered in SQL (`col::text ~* '\.(png|jpe?g|…)'`), so only rows that mention an
 *   image extension reach the process; all columns of a table are read in one pass.
 * - A table is addressed by its primary key; the audit `rowId` is the key itself (`"id"`) or, for
 *   tables with another or composite key, a JSON object of the key columns, which `db:revert-fix` reads.
 */
import type { Ctx } from '@sotf/core';
import { IMAGE_EXTENSION_PATTERN } from '@sotf/core/media/index';
import { type SQL, sql } from 'drizzle-orm';

/**
 * Never scanned nor rewritten: the history of what B22 itself changed (`DataFixAudit`, `MigrationRun`), the
 * audit trail (`AuditLog`, which records what was true at the time) and the private upload sessions
 * (`Upload`, whose `key` and `filename` are not public references).
 */
export const EXCLUDED_TABLES: ReadonlySet<string> = new Set([
  'DataFixAudit',
  'MigrationRun',
  'AuditLog',
  'Upload',
  '_v2_migrations',
]);

export interface ColumnInfo {
  name: string;
  kind: 'text' | 'jsonb';
}

export interface TableInfo {
  name: string;
  /** Primary key columns in key order, with their SQL type for the cursor casts. */
  pk: Array<{ name: string; type: string }>;
  columns: ColumnInfo[];
}

export interface Catalogue {
  tables: TableInfo[];
  /** Tables with scannable columns but no primary key (reported, never rewritten). */
  withoutKey: string[];
}

interface CatalogueRow extends Record<string, unknown> {
  table: string;
  column: string;
  type: string;
}

export async function loadCatalogue(ctx: Ctx): Promise<Catalogue> {
  const columns = await ctx.db.execute<CatalogueRow>(sql`
    SELECT c.relname AS "table", a.attname AS "column", a.atttypid::regtype::text AS "type"
      FROM pg_attribute a
      JOIN pg_class c ON c.oid = a.attrelid
      JOIN pg_namespace n ON n.oid = c.relnamespace
     WHERE n.nspname = 'public' AND c.relkind IN ('r', 'p') AND a.attnum > 0 AND NOT a.attisdropped
       AND a.attgenerated = '' AND a.atttypid::regtype::text IN ('text', 'character varying', 'jsonb')
     ORDER BY c.relname, a.attnum`);
  const keys = await ctx.db.execute<CatalogueRow>(sql`
    SELECT c.relname AS "table", a.attname AS "column", a.atttypid::regtype::text AS "type"
      FROM pg_index i
      JOIN pg_class c ON c.oid = i.indrelid
      JOIN pg_namespace n ON n.oid = c.relnamespace
      CROSS JOIN LATERAL unnest(i.indkey) WITH ORDINALITY AS k(attnum, ord)
      JOIN pg_attribute a ON a.attrelid = c.oid AND a.attnum = k.attnum
     WHERE i.indisprimary AND n.nspname = 'public'
     ORDER BY c.relname, k.ord`);
  const pks = new Map<string, TableInfo['pk']>();
  for (const row of keys.rows) {
    const list = pks.get(row.table) ?? [];
    list.push({ name: row.column, type: row.type });
    pks.set(row.table, list);
  }
  const byTable = new Map<string, ColumnInfo[]>();
  for (const row of columns.rows) {
    if (EXCLUDED_TABLES.has(row.table)) continue;
    const list = byTable.get(row.table) ?? [];
    list.push({ name: row.column, kind: row.type === 'jsonb' ? 'jsonb' : 'text' });
    byTable.set(row.table, list);
  }
  const tables: TableInfo[] = [];
  const withoutKey: string[] = [];
  for (const [name, cols] of byTable) {
    const pk = pks.get(name);
    if (!pk || pk.length === 0) {
      withoutKey.push(name);
      continue;
    }
    tables.push({ name, pk, columns: cols });
  }
  return { tables, withoutKey };
}

/** Postgres regular expression that rows must match to be read at all. */
export function prefilterPattern(extraKeys: readonly string[] = []): string {
  // Many keys without an image extension: reading every row is cheaper than a huge expression.
  if (extraKeys.length > 200) return '.';
  const escaped = extraKeys.map((key) => key.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'));
  return [`\\.${IMAGE_EXTENSION_PATTERN}`, ...escaped].join('|');
}

/** Row `id` as recorded in `DataFixAudit` (and read by `db:revert-fix`). */
export function auditRowId(table: TableInfo, key: Record<string, string>): string {
  const only = table.pk[0];
  if (table.pk.length === 1 && only?.name === 'id') return key.id as string;
  return JSON.stringify(Object.fromEntries(table.pk.map((p) => [p.name, key[p.name] as string])));
}

export interface ScanRow {
  /** Primary key values as text. */
  key: Record<string, string>;
  /** Only the columns that matched the pre-filter. */
  cells: Map<string, string>;
}

export interface ScanOptions {
  pattern: string;
  pageSize: number;
  signal: AbortSignal;
  /** Columns to leave out (`Media.sourceKey` is handled apart). */
  skip?: (table: string, column: string) => boolean;
}

/**
 * Walks one table. `onPage` receives each page of matching rows and may rewrite them (the cursor is
 * the primary key, so rows that stop matching do not shift the next page).
 */
export async function scanTable(
  ctx: Ctx,
  table: TableInfo,
  options: ScanOptions,
  onPage: (rows: ScanRow[], columns: ColumnInfo[]) => Promise<void>,
): Promise<void> {
  const columns = table.columns.filter((c) => !options.skip?.(table.name, c.name));
  if (columns.length === 0) return;
  const id = (name: string) => sql.identifier(name);
  const match = (c: ColumnInfo) => sql`${id(c.name)}::text ~* ${options.pattern}`;
  const selected: SQL[] = [
    ...table.pk.map((p, i) => sql`${id(p.name)}::text AS ${sql.identifier(`k${i}`)}`),
    ...columns.map((c, i) => sql`CASE WHEN ${match(c)} THEN ${id(c.name)}::text END AS ${sql.identifier(`c${i}`)}`),
  ];
  const anyMatch = sql.join(columns.map(match), sql` OR `);
  const order = sql.join(
    table.pk.map((p) => id(p.name)),
    sql`, `,
  );
  let after: string[] | null = null;
  for (;;) {
    if (options.signal.aborted) throw new Error('B22 aborted (job cancelled or expired); run it again to resume');
    const cursor: SQL = after
      ? sql` AND (${order}) > (${sql.join(
          table.pk.map((p, i) => sql`${after?.[i] as string}::${sql.raw(p.type)}`),
          sql`, `,
        )})`
      : sql``;
    const res: { rows: Array<Record<string, string | null>> } = await ctx.db.execute<Record<string, string | null>>(sql`
      SELECT ${sql.join(selected, sql`, `)} FROM ${id(table.name)}
       WHERE (${anyMatch})${cursor}
       ORDER BY ${order} LIMIT ${options.pageSize}`);
    if (res.rows.length === 0) return;
    const rows: ScanRow[] = res.rows.map((row) => {
      const key: Record<string, string> = {};
      table.pk.forEach((p, i) => {
        key[p.name] = row[`k${i}`] as string;
      });
      const cells = new Map<string, string>();
      columns.forEach((c, i) => {
        const value = row[`c${i}`];
        if (typeof value === 'string') cells.set(c.name, value);
      });
      return { key, cells };
    });
    await onPage(rows, columns);
    const last = res.rows[res.rows.length - 1] as Record<string, string | null>;
    after = table.pk.map((_, i) => last[`k${i}`] as string);
    if (res.rows.length < options.pageSize) return;
  }
}

export interface CellChange {
  column: string;
  /** `number`: an integer column (the audit keeps a JSON number). */
  kind: 'text' | 'jsonb' | 'number';
  /** null when the cell was NULL. */
  oldText: string | null;
  newText: string;
}

/**
 * Applies the changes of one row if its cells still hold what was read (`WHERE col::text = old`), and
 * records every changed cell in `DataFixAudit`. Must run inside a transaction. Returns false when the
 * row changed meanwhile or is gone (a later run picks it up).
 */
export async function updateRowAudited(
  tx: Pick<Ctx['db'], 'execute'>,
  fixId: string,
  table: TableInfo,
  key: Record<string, string>,
  changes: readonly CellChange[],
): Promise<boolean> {
  const id = (name: string) => sql.identifier(name);
  const sets = changes.map((c) =>
    c.kind === 'jsonb' ? sql`${id(c.column)} = ${c.newText}::jsonb` : sql`${id(c.column)} = ${c.newText}`,
  );
  const where = [
    ...table.pk.map((p) => sql`${id(p.name)}::text = ${key[p.name] as string}`),
    ...changes.map((c) => sql`${id(c.column)}::text IS NOT DISTINCT FROM ${c.oldText}::text`),
  ];
  const res = await tx.execute(sql`
    UPDATE ${id(table.name)} SET ${sql.join(sets, sql`, `)} WHERE ${sql.join(where, sql` AND `)}`);
  if ((res.rowCount ?? 0) !== 1) return false;
  const rowId = auditRowId(table, key);
  for (const c of changes) {
    const asJson = (text: string | null) => (text === null ? 'null' : c.kind === 'text' ? JSON.stringify(text) : text);
    await tx.execute(sql`
      INSERT INTO "DataFixAudit" ("fixId", "tableName", "rowId", "columnName", "oldValue", "newValue")
      VALUES (${fixId}, ${table.name}, ${rowId}, ${c.column}, ${asJson(c.oldText)}::jsonb, ${asJson(c.newText)}::jsonb)`);
  }
  return true;
}
