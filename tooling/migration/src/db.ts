/**
 * Connections and small SQL helpers shared by the migration tools.
 *
 * Every connection runs with `TimeZone=UTC` and parses legacy `timestamp(3)` columns as UTC (the
 * same rules as `@sotf/db`). Values are always written as ISO strings: PostgreSQL ignores the `Z`
 * of an ISO string cast to `timestamp without time zone`, so the stored wall-clock is UTC, like
 * Prisma's.
 */
import { utcTypes } from '@sotf/db/client';
import pg from 'pg';

export type Client = pg.Client;
export type Row = Record<string, unknown>;

/** Opens one dedicated connection (backfills hold a session advisory lock on it). */
export async function connect(connectionString: string, applicationName: string): Promise<pg.Client> {
  const client = new pg.Client({
    connectionString,
    application_name: applicationName,
    options: '-c TimeZone=UTC',
    types: utcTypes,
  });
  await client.connect();
  return client;
}

/** Runs `fn` inside one transaction; rolls back instead of committing when `rollback` is true. */
export async function inTransaction<T>(
  client: pg.ClientBase,
  fn: () => Promise<T>,
  options: { rollback?: boolean; lockTimeout?: string; statementTimeout?: string } = {},
): Promise<T> {
  await client.query('BEGIN');
  try {
    await client.query(`SET LOCAL lock_timeout = '${options.lockTimeout ?? '3s'}'`);
    await client.query(`SET LOCAL statement_timeout = '${options.statementTimeout ?? '120s'}'`);
    const result = await fn();
    await client.query(options.rollback ? 'ROLLBACK' : 'COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK').catch(() => undefined);
    throw error;
  }
}

/** Quotes an SQL identifier (`"Mod"`, `"mod_id"`). */
export function ident(name: string): string {
  return `"${name.replaceAll('"', '""')}"`;
}

/**
 * Builds a multi-row `INSERT` for `rows` (each an array of values in `columns` order) with
 * numbered parameters. Callers keep batches under PostgreSQL's 65 535-parameter limit.
 */
export function multiInsert(
  table: string,
  columns: readonly string[],
  rows: readonly (readonly unknown[])[],
  suffix = '',
): { text: string; values: unknown[] } {
  const values: unknown[] = [];
  const tuples = rows.map((row) => {
    const placeholders = row.map((value) => {
      values.push(value);
      return `$${values.length}`;
    });
    return `(${placeholders.join(', ')})`;
  });
  return {
    text: `INSERT INTO ${ident(table)} (${columns.map(ident).join(', ')}) VALUES ${tuples.join(', ')}${suffix ? ` ${suffix}` : ''}`,
    values,
  };
}

/** Inserts `rows` in chunks that respect the parameter limit. Returns the number of rows sent. */
export async function insertRows(
  client: pg.ClientBase,
  table: string,
  columns: readonly string[],
  rows: readonly (readonly unknown[])[],
  suffix = '',
): Promise<number> {
  const perChunk = Math.max(1, Math.floor(60_000 / Math.max(1, columns.length)));
  for (let i = 0; i < rows.length; i += perChunk) {
    const chunk = rows.slice(i, i + perChunk);
    const { text, values } = multiInsert(table, columns, chunk, suffix);
    await client.query(text, values);
  }
  return rows.length;
}

/** Host and database of a connection string, without credentials. */
export function describeTarget(connectionString: string): { host: string; database: string; local: boolean } {
  try {
    const url = new URL(connectionString);
    const host = url.hostname || 'localhost';
    return {
      host: url.port ? `${host}:${url.port}` : host,
      database: decodeURIComponent(url.pathname.replace(/^\//, '')) || '(default)',
      local: ['localhost', '127.0.0.1', '::1', '[::1]'].includes(host),
    };
  } catch {
    return { host: '(unparseable)', database: '(unknown)', local: false };
  }
}

/** The same server with another database (e.g. `postgres` for CREATE/DROP DATABASE). */
export function withDatabase(connectionString: string, database: string): string {
  const url = new URL(connectionString);
  url.pathname = `/${encodeURIComponent(database)}`;
  return url.toString();
}

/** `true` when the table exists in `public`. */
export async function tableExists(client: pg.ClientBase, table: string): Promise<boolean> {
  const { rows } = await client.query<{ ok: boolean }>('SELECT to_regclass($1) IS NOT NULL AS ok', [
    `public.${ident(table)}`,
  ]);
  return rows[0]?.ok === true;
}

/** Sets every serial sequence of `tables` to max(id) so later INSERTs never collide. */
export async function syncSequences(client: pg.ClientBase, tables: readonly string[]): Promise<void> {
  for (const table of tables) {
    await client.query(
      `SELECT setval(pg_get_serial_sequence($1, 'id'), coalesce((SELECT max(id) FROM ${ident(table)}), 0) + 1, false)`,
      [`public.${ident(table)}`],
    );
  }
}
