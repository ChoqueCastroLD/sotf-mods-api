/**
 * Migration files (PLAN §6.2, §12.1): `migrations/NNNN_<slug>.sql` applied in order, each with an
 * optional `NNNN_<slug>.down.sql`. Header directives (comment lines before the first statement):
 *
 *   -- sotf:baseline                      the legacy baseline (0000 only): recorded, never linted
 *   -- sotf:no-transaction                run outside a transaction (exactly one statement,
 *                                         e.g. CREATE INDEX CONCURRENTLY)
 *   -- sotf:precondition: <SQL boolean>   deferred (not applied, not recorded) while false;
 *                                         re-evaluated on every run
 *   -- sotf:statement-timeout: <interval> overrides the default 60s (e.g. `10min`)
 *   -- sotf:lock-timeout: <interval>      overrides the default 3s
 *   -- sotf:allow-legacy-delete: <reason> (down files) allows DELETE on legacy tables
 */
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** `packages/db/migrations`, resolved from this module. */
export const DEFAULT_MIGRATIONS_DIR = fileURLToPath(new URL('../../migrations/', import.meta.url));

export const MIGRATION_FILE = /^(\d{4})_([a-z0-9]+(?:_[a-z0-9]+)*)\.sql$/;
export const DOWN_FILE = /^(\d{4})_([a-z0-9]+(?:_[a-z0-9]+)*)\.down\.sql$/;

/** Default per-migration timeouts (PLAN §6.1 rule 8). */
export const DEFAULT_LOCK_TIMEOUT = '3s';
export const DEFAULT_STATEMENT_TIMEOUT = '60s';

const INTERVAL = /^\d+\s*(?:ms|s|min|h)$/;

export interface Directives {
  baseline: boolean;
  noTransaction: boolean;
  precondition: string | null;
  statementTimeout: string;
  lockTimeout: string;
  allowLegacyDelete: string | null;
}

export interface SqlFile {
  /** File name, e.g. `0003_user_columns.sql`. */
  file: string;
  path: string;
  sql: string;
  /** sha256 (hex) of the content with CRLF normalized to LF. */
  checksum: string;
  directives: Directives;
}

export interface Migration extends SqlFile {
  /** Migration name recorded in "_v2_migrations": the file name without `.sql`. */
  name: string;
  number: number;
  down: SqlFile | null;
}

export class MigrationFileError extends Error {
  override name = 'MigrationFileError';
}

export function checksumOf(sql: string): string {
  return createHash('sha256').update(sql.replaceAll('\r\n', '\n'), 'utf8').digest('hex');
}

/** Parses the header directives of a migration file. */
export function parseDirectives(sql: string, file: string): Directives {
  const directives: Directives = {
    baseline: false,
    noTransaction: false,
    precondition: null,
    statementTimeout: DEFAULT_STATEMENT_TIMEOUT,
    lockTimeout: DEFAULT_LOCK_TIMEOUT,
    allowLegacyDelete: null,
  };
  for (const raw of sql.replaceAll('\r\n', '\n').split('\n')) {
    const line = raw.trim();
    if (line === '') continue;
    if (!line.startsWith('--')) break; // header ends at the first statement
    const match = /^--\s*sotf:([a-z-]+)(?::\s*(.*))?$/.exec(line);
    if (!match) continue;
    const key = match[1] as string;
    const value = (match[2] ?? '').trim();
    switch (key) {
      case 'baseline':
        directives.baseline = true;
        break;
      case 'no-transaction':
        directives.noTransaction = true;
        break;
      case 'precondition':
        if (!value) throw new MigrationFileError(`${file}: sotf:precondition needs a SQL boolean expression`);
        directives.precondition = value;
        break;
      case 'statement-timeout':
      case 'lock-timeout':
        if (!INTERVAL.test(value)) {
          throw new MigrationFileError(`${file}: sotf:${key} must look like 60s, 500ms, 10min or 1h (got "${value}")`);
        }
        if (key === 'statement-timeout') directives.statementTimeout = value.replace(/\s+/g, '');
        else directives.lockTimeout = value.replace(/\s+/g, '');
        break;
      case 'allow-legacy-delete':
        if (!value) throw new MigrationFileError(`${file}: sotf:allow-legacy-delete needs a reason`);
        directives.allowLegacyDelete = value;
        break;
      default:
        throw new MigrationFileError(`${file}: unknown directive sotf:${key}`);
    }
  }
  return directives;
}

function readSqlFile(dir: string, file: string): SqlFile {
  const path = join(dir, file);
  const sql = readFileSync(path, 'utf8');
  return { file, path, sql, checksum: checksumOf(sql), directives: parseDirectives(sql, file) };
}

/** Loads and validates every migration of a directory, sorted by number. */
export function loadMigrations(dir: string = DEFAULT_MIGRATIONS_DIR): Migration[] {
  if (!existsSync(dir)) throw new MigrationFileError(`migrations directory not found: ${dir}`);
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.sql'))
    .map((e) => e.name)
    .sort();

  const downs = new Map<string, string>();
  const ups: string[] = [];
  for (const file of entries) {
    if (DOWN_FILE.test(file)) downs.set(file.replace(/\.down\.sql$/, ''), file);
    else if (MIGRATION_FILE.test(file)) ups.push(file);
    else throw new MigrationFileError(`${file}: migration files must be named NNNN_<slug>.sql (lower-case slug)`);
  }

  const byNumber = new Map<number, string>();
  const migrations: Migration[] = ups.map((file) => {
    const match = MIGRATION_FILE.exec(file) as RegExpExecArray;
    const number = Number(match[1]);
    const clash = byNumber.get(number);
    if (clash) throw new MigrationFileError(`${file}: number ${match[1]} is already used by ${clash}`);
    byNumber.set(number, file);
    const name = file.replace(/\.sql$/, '');
    const up = readSqlFile(dir, file);
    const downFile = downs.get(name);
    downs.delete(name);
    const down = downFile ? readSqlFile(dir, downFile) : null;
    if (up.directives.allowLegacyDelete) {
      throw new MigrationFileError(`${file}: sotf:allow-legacy-delete is only valid in down files`);
    }
    if (up.directives.baseline && number !== 0) {
      throw new MigrationFileError(`${file}: only migration 0000 can be the baseline`);
    }
    if (number === 0 && !up.directives.baseline) {
      throw new MigrationFileError(`${file}: migration 0000 must be the legacy baseline (-- sotf:baseline)`);
    }
    if (down?.directives.baseline || down?.directives.precondition) {
      throw new MigrationFileError(`${down.file}: down files cannot be a baseline or have a precondition`);
    }
    return { ...up, name, number, down };
  });
  for (const orphan of downs.values()) {
    throw new MigrationFileError(`${orphan}: down file without a matching migration`);
  }
  return migrations;
}
