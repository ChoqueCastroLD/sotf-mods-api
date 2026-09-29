/**
 * Compares the Drizzle schema with a catalog (PLAN §6.2): every declared table and column must
 * exist with the same type, nullability, default presence, identity and generated flag, and
 * (optionally) every catalog column must be declared.
 */
import { is } from 'drizzle-orm';
import { getTableConfig, type PgColumn, PgTable } from 'drizzle-orm/pg-core';
import type { Catalog, ColumnInfo } from './catalog.ts';

const SERIAL_TYPES: Record<string, string> = { serial: 'integer', bigserial: 'bigint', smallserial: 'smallint' };

/** Drizzle's SQL type rendered like PostgreSQL's `format_type()`. */
export function formatDrizzleType(sqlType: string): string {
  let type = sqlType.trim();
  let suffix = '';
  while (type.endsWith('[]')) {
    suffix += '[]';
    type = type.slice(0, -2);
  }
  const serial = SERIAL_TYPES[type];
  if (serial) type = serial;
  const ts = /^timestamp\s*(?:\((\d+)\))?(\s+with time zone)?$/i.exec(type);
  if (ts) {
    type = `timestamp${ts[1] ? `(${ts[1]})` : ''} ${ts[2] ? 'with time zone' : 'without time zone'}`;
  }
  const varchar = /^varchar(?:\((\d+)\))?$/i.exec(type);
  if (varchar) type = `character varying${varchar[1] ? `(${varchar[1]})` : ''}`;
  return `${type}${suffix}`;
}

export interface SchemaMismatch {
  table: string;
  column?: string;
  message: string;
}

export interface CompareSchemaOptions {
  /** Also require every catalog column (and table) to be declared in Drizzle. */
  bidirectional?: boolean;
  /** Compare default presence (off when comparing against the pre-0002 legacy snapshot). */
  defaults?: boolean;
  /** Tables of the catalog that Drizzle does not need to declare. */
  ignoreTables?: readonly string[];
}

function expectedDefault(column: PgColumn): boolean {
  const c = column as PgColumn & { default?: unknown; generatedIdentity?: unknown };
  return c.default !== undefined || Boolean(SERIAL_TYPES[column.getSQLType()]);
}

export function compareSchemaToCatalog(
  tables: readonly PgTable[],
  catalog: Catalog,
  options: CompareSchemaOptions = {},
): SchemaMismatch[] {
  const mismatches: SchemaMismatch[] = [];
  const declared = new Set<string>();
  for (const table of tables) {
    const config = getTableConfig(table);
    declared.add(config.name);
    const live = catalog.tables[config.name];
    if (!live) {
      mismatches.push({ table: config.name, message: 'declared in Drizzle but missing in the database' });
      continue;
    }
    const names = new Set<string>();
    for (const column of config.columns) {
      names.add(column.name);
      const info: ColumnInfo | undefined = live.columns[column.name];
      if (!info) {
        mismatches.push({
          table: config.name,
          column: column.name,
          message: 'declared in Drizzle but missing in the database',
        });
        continue;
      }
      const type = formatDrizzleType(column.getSQLType());
      if (type !== info.type) {
        mismatches.push({
          table: config.name,
          column: column.name,
          message: `type: drizzle ${type} vs database ${info.type}`,
        });
      }
      if (column.notNull === info.nullable) {
        mismatches.push({
          table: config.name,
          column: column.name,
          message: `nullability: drizzle ${column.notNull ? 'NOT NULL' : 'NULL'} vs database ${info.nullable ? 'NULL' : 'NOT NULL'}`,
        });
      }
      const identity = (column as PgColumn & { generatedIdentity?: { type?: string } }).generatedIdentity;
      const wantIdentity = identity ? (identity.type === 'byDefault' ? 'd' : 'a') : '';
      if (wantIdentity !== info.identity) {
        mismatches.push({
          table: config.name,
          column: column.name,
          message: `identity: drizzle '${wantIdentity}' vs database '${info.identity}'`,
        });
      }
      const generated = (column as PgColumn & { generated?: unknown }).generated ? 's' : '';
      if (generated !== info.generated) {
        mismatches.push({ table: config.name, column: column.name, message: 'generated column flag differs' });
      }
      if (options.defaults && !generated && !wantIdentity && expectedDefault(column) !== (info.default !== null)) {
        mismatches.push({
          table: config.name,
          column: column.name,
          message: `default: drizzle ${expectedDefault(column) ? 'has one' : 'none'} vs database ${info.default ?? 'none'}`,
        });
      }
    }
    if (options.bidirectional) {
      for (const name of Object.keys(live.columns)) {
        if (!names.has(name))
          mismatches.push({ table: config.name, column: name, message: 'in the database but not declared in Drizzle' });
      }
    }
  }
  if (options.bidirectional) {
    const ignore = new Set(options.ignoreTables ?? []);
    for (const name of Object.keys(catalog.tables)) {
      if (!declared.has(name) && !ignore.has(name))
        mismatches.push({ table: name, message: 'table not declared in Drizzle' });
    }
  }
  return mismatches;
}

/** Every PgTable exported by a module namespace (e.g. the generated schema barrel). */
export function tablesOf(module: Record<string, unknown>): PgTable[] {
  const tables: PgTable[] = [];
  for (const value of Object.values(module)) if (is(value, PgTable)) tables.push(value);
  return tables;
}
