/**
 * Read-only introspection of the PostgreSQL catalog (PLAN §6.2): tables, columns, constraints,
 * indexes and triggers of the `public` schema, in a deterministic JSON shape that can be frozen
 * (src/guard/legacy-catalog.json) and compared.
 */
import type { Queryable } from '../types.ts';

export interface ColumnInfo {
  /** `format_type()` output, e.g. `timestamp(3) without time zone`, `integer[]`. */
  type: string;
  nullable: boolean;
  /** `pg_get_expr()` of the default, or null. */
  default: string | null;
  /** `''` or `s` (stored generated column). */
  generated: string;
  /** `''`, `a` (ALWAYS) or `d` (BY DEFAULT). */
  identity: string;
}

export interface ConstraintInfo {
  /** p (primary key), u (unique), f (foreign key), c (check), x (exclusion). */
  type: string;
  definition: string;
  validated: boolean;
}

export interface IndexInfo {
  definition: string;
  valid: boolean;
}

export interface TableCatalog {
  columns: Record<string, ColumnInfo>;
  constraints: Record<string, ConstraintInfo>;
  indexes: Record<string, IndexInfo>;
  /** Trigger name -> `pg_get_triggerdef()`. */
  triggers: Record<string, string>;
}

export interface Catalog {
  tables: Record<string, TableCatalog>;
}

export interface LegacyCatalogSnapshot extends Catalog {
  $comment: string;
  /** Migration the snapshot was taken from. */
  source: string;
  /** checksum of the source migration when the snapshot was taken. */
  sourceChecksum: string;
  /** `server_version` of the PostgreSQL used to take the snapshot. */
  postgres: string;
}

const sortRecord = <T>(record: Record<string, T>): Record<string, T> =>
  Object.fromEntries(Object.entries(record).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));

/**
 * Introspects the given tables of `schema` (every ordinary or partitioned table when `tables`
 * is omitted).
 */
export async function introspectCatalog(
  db: Queryable,
  options: { schema?: string; tables?: readonly string[] } = {},
): Promise<Catalog> {
  const schema = options.schema ?? 'public';
  const tableFilter = options.tables ? [...options.tables] : null;

  const tablesResult = await db.query<{ table: string }>(
    `SELECT c.relname AS "table"
       FROM pg_class c
       JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = $1 AND c.relkind IN ('r', 'p')
        AND ($2::text[] IS NULL OR c.relname = ANY ($2::text[]))
      ORDER BY c.relname`,
    [schema, tableFilter],
  );
  const tables: Record<string, TableCatalog> = {};
  for (const { table } of tablesResult.rows)
    tables[table] = { columns: {}, constraints: {}, indexes: {}, triggers: {} };
  const names = Object.keys(tables);
  if (names.length === 0) return { tables };

  const columns = await db.query<{
    table: string;
    column: string;
    type: string;
    notnull: boolean;
    default: string | null;
    generated: string;
    identity: string;
  }>(
    `SELECT c.relname AS "table", a.attname AS "column", format_type(a.atttypid, a.atttypmod) AS "type",
            a.attnotnull AS "notnull", pg_get_expr(d.adbin, d.adrelid) AS "default",
            a.attgenerated::text AS "generated", a.attidentity::text AS "identity"
       FROM pg_attribute a
       JOIN pg_class c ON c.oid = a.attrelid
       JOIN pg_namespace n ON n.oid = c.relnamespace
       LEFT JOIN pg_attrdef d ON d.adrelid = a.attrelid AND d.adnum = a.attnum
      WHERE n.nspname = $1 AND c.relname = ANY ($2::text[]) AND a.attnum > 0 AND NOT a.attisdropped
      ORDER BY c.relname, a.attnum`,
    [schema, names],
  );
  for (const row of columns.rows) {
    const table = tables[row.table] as TableCatalog;
    table.columns[row.column] = {
      type: row.type,
      nullable: !row.notnull,
      // Generated columns expose their expression through pg_attrdef: it is not a default.
      default: row.generated ? null : row.default,
      generated: row.generated,
      identity: row.identity,
    };
  }

  const constraints = await db.query<{
    table: string;
    name: string;
    type: string;
    definition: string;
    validated: boolean;
  }>(
    `SELECT c.relname AS "table", k.conname AS "name", k.contype::text AS "type",
            pg_get_constraintdef(k.oid) AS "definition", k.convalidated AS "validated"
       FROM pg_constraint k
       JOIN pg_class c ON c.oid = k.conrelid
       JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = $1 AND c.relname = ANY ($2::text[]) AND k.contype <> 'n'
      ORDER BY c.relname, k.conname`,
    [schema, names],
  );
  for (const row of constraints.rows) {
    (tables[row.table] as TableCatalog).constraints[row.name] = {
      type: row.type,
      definition: row.definition,
      validated: row.validated,
    };
  }

  const indexes = await db.query<{ table: string; name: string; definition: string; valid: boolean }>(
    `SELECT t.relname AS "table", i.relname AS "name", pg_get_indexdef(x.indexrelid) AS "definition",
            x.indisvalid AS "valid"
       FROM pg_index x
       JOIN pg_class i ON i.oid = x.indexrelid
       JOIN pg_class t ON t.oid = x.indrelid
       JOIN pg_namespace n ON n.oid = t.relnamespace
      WHERE n.nspname = $1 AND t.relname = ANY ($2::text[])
      ORDER BY t.relname, i.relname`,
    [schema, names],
  );
  for (const row of indexes.rows) {
    (tables[row.table] as TableCatalog).indexes[row.name] = { definition: row.definition, valid: row.valid };
  }

  const triggers = await db.query<{ table: string; name: string; definition: string }>(
    `SELECT c.relname AS "table", g.tgname AS "name", pg_get_triggerdef(g.oid) AS "definition"
       FROM pg_trigger g
       JOIN pg_class c ON c.oid = g.tgrelid
       JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = $1 AND c.relname = ANY ($2::text[]) AND NOT g.tgisinternal
      ORDER BY c.relname, g.tgname`,
    [schema, names],
  );
  for (const row of triggers.rows) (tables[row.table] as TableCatalog).triggers[row.name] = row.definition;

  for (const table of Object.values(tables)) {
    table.constraints = sortRecord(table.constraints);
    table.indexes = sortRecord(table.indexes);
    table.triggers = sortRecord(table.triggers);
  }
  return { tables };
}
