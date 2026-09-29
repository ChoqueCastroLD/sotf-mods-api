/**
 * Database client (PLAN §2.6): one `pg` Pool per process (api 10, worker 5) wrapped by Drizzle.
 *
 * - Every connection runs with `TimeZone=UTC` (`options=-c TimeZone=UTC`).
 * - Raw `pg` queries parse `timestamp without time zone` (OID 1114) as UTC — the legacy columns
 *   hold UTC wall-clock values written by Prisma. The parser is set on this pool only, never
 *   globally. Drizzle maps its own columns (`mode: 'date'`) independently.
 */
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema/_index.gen.ts';

export type Schema = typeof schema;
export type Database = NodePgDatabase<Schema>;

const TIMESTAMP_OID = 1114;

/** Parses a `timestamp without time zone` text value as a UTC instant. */
export function parseUtcTimestamp(value: string): Date {
  if (value === 'infinity') return new Date(8.64e15);
  if (value === '-infinity') return new Date(-8.64e15);
  const iso = value.replace(' ', 'T');
  if (/[zZ]$/.test(iso)) return new Date(iso);
  const offset = /([+-]\d\d)(?::?(\d\d))?$/.exec(iso);
  if (offset && iso.length > 19) return new Date(`${iso.slice(0, offset.index)}${offset[1]}:${offset[2] ?? '00'}`);
  return new Date(`${iso}Z`);
}

/** Type parsers for a pool: 1114 as UTC, everything else as pg's defaults. */
export const utcTypes: pg.CustomTypesConfig = {
  getTypeParser: ((oid: number, format?: 'text' | 'binary') => {
    if (oid === TIMESTAMP_OID && format !== 'binary') return parseUtcTimestamp;
    return pg.types.getTypeParser(oid, format as 'text');
  }) as pg.CustomTypesConfig['getTypeParser'],
};

/** Appends `-c TimeZone=UTC` to the connection options. */
function withUtcOptions(options: string | undefined): string {
  const utc = '-c TimeZone=UTC';
  return options?.includes('TimeZone') ? options : [options, utc].filter(Boolean).join(' ');
}

export interface CreateDbOptions {
  connectionString: string;
  /** Pool size (api 10, worker 5, CLIs 1–2). */
  max?: number;
  /** Shown in pg_stat_activity. */
  applicationName?: string;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
  /** Server-side statement timeout for this pool's sessions (ms). */
  statementTimeoutMs?: number;
  /** Log every SQL statement through this callback (development only). */
  logQuery?: (query: string, params: unknown[]) => void;
}

export interface DbHandle {
  db: Database;
  pool: pg.Pool;
  /** Ends the pool (idempotent). */
  close(): Promise<void>;
}

export function createPool(options: CreateDbOptions): pg.Pool {
  const pool = new pg.Pool({
    connectionString: options.connectionString,
    max: options.max ?? 10,
    application_name: options.applicationName ?? 'sotf',
    idleTimeoutMillis: options.idleTimeoutMillis ?? 30_000,
    connectionTimeoutMillis: options.connectionTimeoutMillis ?? 10_000,
    statement_timeout: options.statementTimeoutMs,
    options: withUtcOptions(undefined),
    types: utcTypes,
  });
  // An idle client that errors (e.g. the server restarted) must not crash the process.
  pool.on('error', () => undefined);
  return pool;
}

/** Creates the pool and the Drizzle database. */
export function createDb(options: CreateDbOptions): DbHandle {
  const pool = createPool(options);
  const db = drizzle({
    client: pool,
    schema,
    logger: options.logQuery ? { logQuery: options.logQuery } : false,
  });
  let closed = false;
  return {
    db,
    pool,
    async close() {
      if (closed) return;
      closed = true;
      await pool.end();
    },
  };
}

export { schema };
