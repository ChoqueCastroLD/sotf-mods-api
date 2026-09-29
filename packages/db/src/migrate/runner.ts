/**
 * Migration runner (PLAN §6.2): applies `migrations/NNNN_<slug>.sql` in order and records
 * (name, sha256 checksum, appliedAt, durationMs) in "_v2_migrations".
 *
 * - One run at a time: a session-level advisory lock.
 * - Each file in its own transaction with `lock_timeout = 3s` and `statement_timeout = 60s`
 *   (overridable per file), except `-- sotf:no-transaction` files (CREATE INDEX CONCURRENTLY).
 *   Lock timeouts are retried with backoff; an INVALID index left by a failed concurrent build is
 *   dropped and rebuilt.
 * - A changed checksum of an applied migration, or an applied migration unknown to this build,
 *   aborts the run.
 * - The legacy baseline (0000) is applied on an empty database; on a database that already holds
 *   the legacy schema it must be recorded first with `markBaselineApplied` (db:baseline).
 * - The superset guard runs before (drift → abort) and after the migrations.
 * - `-- sotf:precondition` files are deferred while their condition is false.
 * - Every migration has a tested down file; `migrateDown` rolls back to a target.
 */
import { performance } from 'node:perf_hooks';
import type pg from 'pg';
import type { Catalog } from '../guard/catalog.ts';
import { loadLegacyCatalog } from '../guard/snapshot.ts';
import { runGuard } from '../guard.ts';
import { type Logger, silentLogger } from '../types.ts';
import { DEFAULT_MIGRATIONS_DIR, loadMigrations, type Migration, type SqlFile } from './files.ts';
import { formatLintIssues, lintMigrations } from './lint.ts';
import { lineAtPosition } from './sql-text.ts';

export const MIGRATIONS_TABLE = '_v2_migrations';
/** Session advisory lock key reserved for migration runs (an arbitrary constant of this app). */
export const MIGRATION_LOCK_KEY = '4705206785634133330';
export const BASELINE_NAME = '0000_legacy_baseline';

export interface MigrateOptions {
  /** Directory of the .sql files (default: packages/db/migrations). */
  migrationsDir?: string;
  /** Print the plan (and evaluate preconditions read-only) without changing anything. */
  dryRun?: boolean;
  /** Skip the pre/post superset guard (tests of the runner itself only). */
  skipGuard?: boolean;
  /** Install/upgrade the pg-boss schema after the SQL migrations (default true). */
  pgBoss?: boolean | { schema?: string; connectionString: string };
  /** Apply migrations up to and including this name. */
  target?: string;
  /** How long to wait for another run's advisory lock (default 120 s). */
  lockWaitMs?: number;
  /** Retries of a migration that failed with lock_not_available (default 3). */
  lockRetries?: number;
  logger?: Logger;
  /** Frozen legacy catalog (default: src/guard/legacy-catalog.json). */
  legacyCatalog?: Catalog;
}

export interface AppliedRow {
  name: string;
  checksum: string;
  appliedAt: Date;
  durationMs: number;
}

export interface MigrateResult {
  applied: string[];
  deferred: string[];
  pending: string[];
  alreadyApplied: number;
  dryRun: boolean;
}

export class MigrationError extends Error {
  override name = 'MigrationError';
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const quoteLiteral = (value: string) => `'${value.replaceAll("'", "''")}'`;

async function withLock<T>(client: pg.ClientBase, waitMs: number, logger: Logger, fn: () => Promise<T>): Promise<T> {
  const deadline = Date.now() + waitMs;
  let announced = false;
  for (;;) {
    const { rows } = await client.query<{ locked: boolean }>('SELECT pg_try_advisory_lock($1::bigint) AS locked', [
      MIGRATION_LOCK_KEY,
    ]);
    if (rows[0]?.locked) break;
    if (Date.now() > deadline) throw new MigrationError('another migration run holds the advisory lock; giving up');
    if (!announced) {
      logger.warn('waiting for another migration run to finish (advisory lock)…');
      announced = true;
    }
    await sleep(1000);
  }
  try {
    return await fn();
  } finally {
    await client.query('SELECT pg_advisory_unlock($1::bigint)', [MIGRATION_LOCK_KEY]).catch(() => undefined);
  }
}

async function tableExists(client: pg.ClientBase, name: string): Promise<boolean> {
  const { rows } = await client.query<{ exists: boolean }>(
    `SELECT to_regclass(format('public.%I', $1::text)) IS NOT NULL AS "exists"`,
    [name],
  );
  return rows[0]?.exists ?? false;
}

export async function ensureMigrationsTable(client: pg.ClientBase): Promise<void> {
  await client.query(`CREATE TABLE IF NOT EXISTS "${MIGRATIONS_TABLE}" (
    "name" text NOT NULL,
    "checksum" text NOT NULL,
    "appliedAt" timestamptz(3) NOT NULL DEFAULT now(),
    "durationMs" integer NOT NULL,
    "appliedBy" text NOT NULL DEFAULT current_user,
    CONSTRAINT "${MIGRATIONS_TABLE}_pkey" PRIMARY KEY ("name")
  )`);
}

export async function readApplied(client: pg.ClientBase): Promise<Map<string, AppliedRow>> {
  if (!(await tableExists(client, MIGRATIONS_TABLE))) return new Map();
  const { rows } = await client.query<AppliedRow>(
    `SELECT "name", "checksum", "appliedAt", "durationMs" FROM "${MIGRATIONS_TABLE}" ORDER BY "name"`,
  );
  return new Map(rows.map((r) => [r.name, r]));
}

/** Verifies applied migrations against the files: unknown names and checksum changes abort. */
function verifyApplied(migrations: readonly Migration[], applied: ReadonlyMap<string, AppliedRow>): void {
  const known = new Map(migrations.map((m) => [m.name, m]));
  for (const row of applied.values()) {
    const file = known.get(row.name);
    if (!file) {
      throw new MigrationError(
        `migration "${row.name}" is applied in the database but unknown to this build (older code against a newer schema?)`,
      );
    }
    if (file.checksum !== row.checksum) {
      throw new MigrationError(
        `migration "${row.name}" changed after it was applied (checksum ${row.checksum.slice(0, 12)}… → ${file.checksum.slice(0, 12)}…). Never edit applied migrations: add a new one.`,
      );
    }
  }
}

function describeError(file: SqlFile, error: unknown): string {
  const e = error as { message?: string; code?: string; position?: string; detail?: string; hint?: string };
  const where = e.position ? `:${lineAtPosition(file.sql, Number(e.position))}` : '';
  const extra = [e.detail, e.hint].filter(Boolean).join(' · ');
  return `${file.file}${where}: ${e.message ?? String(error)}${e.code ? ` [${e.code}]` : ''}${extra ? ` (${extra})` : ''}`;
}

const isLockTimeout = (error: unknown) => (error as { code?: string }).code === '55P03';

async function setTimeouts(client: pg.ClientBase, file: SqlFile, local: boolean): Promise<void> {
  const scope = local ? 'SET LOCAL' : 'SET';
  await client.query(`${scope} lock_timeout = ${quoteLiteral(file.directives.lockTimeout)}`);
  await client.query(`${scope} statement_timeout = ${quoteLiteral(file.directives.statementTimeout)}`);
}

async function resetTimeouts(client: pg.ClientBase): Promise<void> {
  await client.query('RESET lock_timeout');
  await client.query('RESET statement_timeout');
}

/** Drops an INVALID index left behind by a failed CREATE INDEX CONCURRENTLY of this file. */
async function dropInvalidIndex(client: pg.ClientBase, file: SqlFile, logger: Logger): Promise<void> {
  const m =
    /CREATE\s+(?:UNIQUE\s+)?INDEX\s+CONCURRENTLY\s+(?:IF\s+NOT\s+EXISTS\s+)?("(?:[^"]|"")+"|[A-Za-z_][A-Za-z0-9_]*)/i.exec(
      file.sql,
    );
  if (!m) return;
  const raw = m[1] as string;
  const name = raw.startsWith('"') ? raw.slice(1, -1).replaceAll('""', '"') : raw.toLowerCase();
  const { rows } = await client.query<{ valid: boolean }>(
    `SELECT x.indisvalid AS "valid" FROM pg_index x JOIN pg_class i ON i.oid = x.indexrelid
       JOIN pg_namespace n ON n.oid = i.relnamespace WHERE n.nspname = 'public' AND i.relname = $1`,
    [name],
  );
  if (rows[0] && !rows[0].valid) {
    logger.warn(`${file.file}: dropping INVALID index "${name}" left by a failed concurrent build`);
    await client.query(`DROP INDEX CONCURRENTLY IF EXISTS "${name.replaceAll('"', '""')}"`);
  }
}

async function evaluatePrecondition(client: pg.ClientBase, migration: Migration): Promise<boolean> {
  const expression = migration.directives.precondition;
  if (!expression) return true;
  await client.query('BEGIN READ ONLY');
  try {
    const { rows } = await client.query<{ ok: boolean | null }>(`SELECT (${expression}) AS "ok"`);
    return rows[0]?.ok === true;
  } catch (error) {
    throw new MigrationError(`${migration.file}: precondition failed to evaluate: ${(error as Error).message}`);
  } finally {
    await client.query('ROLLBACK');
  }
}

async function applyOne(client: pg.ClientBase, migration: Migration, logger: Logger, retries: number): Promise<number> {
  for (let attempt = 1; ; attempt += 1) {
    const start = performance.now();
    try {
      if (migration.directives.noTransaction) {
        await dropInvalidIndex(client, migration, logger);
        await setTimeouts(client, migration, false);
        try {
          await client.query(migration.sql);
        } finally {
          await resetTimeouts(client);
        }
        const durationMs = Math.round(performance.now() - start);
        await client.query(`INSERT INTO "${MIGRATIONS_TABLE}" ("name", "checksum", "durationMs") VALUES ($1, $2, $3)`, [
          migration.name,
          migration.checksum,
          durationMs,
        ]);
        return durationMs;
      }
      await client.query('BEGIN');
      try {
        await setTimeouts(client, migration, true);
        await client.query(migration.sql);
        const durationMs = Math.round(performance.now() - start);
        await client.query(`INSERT INTO "${MIGRATIONS_TABLE}" ("name", "checksum", "durationMs") VALUES ($1, $2, $3)`, [
          migration.name,
          migration.checksum,
          durationMs,
        ]);
        await client.query('COMMIT');
        return durationMs;
      } catch (error) {
        await client.query('ROLLBACK').catch(() => undefined);
        throw error;
      }
    } catch (error) {
      if (isLockTimeout(error) && attempt <= retries) {
        const backoff = 2000 * attempt;
        logger.warn(`${migration.file}: lock timeout, retrying in ${backoff / 1000}s (attempt ${attempt}/${retries})`);
        await sleep(backoff);
        continue;
      }
      throw new MigrationError(describeError(migration, error));
    }
  }
}

async function guardOrThrow(
  client: pg.ClientBase,
  phase: 'pre' | 'post',
  catalog: Catalog,
  logger: Logger,
): Promise<void> {
  const report = await runGuard(client, { legacyCatalog: catalog });
  for (const issue of report.issues.filter((i) => i.severity === 'warning')) {
    logger.warn(`guard: "${issue.table}" ${issue.kind} "${issue.name}": ${issue.message}`);
  }
  if (!report.ok) {
    const errors = report.issues
      .filter((i) => i.severity === 'error')
      .map((i) => `  ✘ "${i.table}" ${i.kind} "${i.name}": ${i.message}`)
      .join('\n');
    throw new MigrationError(
      phase === 'pre'
        ? `legacy schema drift detected before migrating; nothing was applied:\n${errors}`
        : `legacy ⊆ v2 guard failed after migrating:\n${errors}`,
    );
  }
  logger.info(`guard (${phase}): legacy schema intact (${report.tables} tables, ${report.additions} v2 additions)`);
}

async function installPgBoss(connectionString: string, schema: string, logger: Logger): Promise<void> {
  const { PgBoss } = await import('pg-boss');
  const boss = new PgBoss({ connectionString, schema, migrate: true, supervise: false, schedule: false });
  boss.on('error', (error: Error) => logger.error(`pg-boss: ${error.message}`));
  await boss.start();
  await boss.stop({ graceful: false, close: true });
  logger.info(`pg-boss schema "${schema}" is installed and up to date`);
}

/** Applies every pending migration. `client` must be a dedicated connection (not a pool). */
export async function migrateUp(client: pg.ClientBase, options: MigrateOptions = {}): Promise<MigrateResult> {
  const logger = options.logger ?? silentLogger;
  const migrations = loadMigrations(options.migrationsDir ?? DEFAULT_MIGRATIONS_DIR);
  const catalog = options.legacyCatalog ?? loadLegacyCatalog();
  const lintIssues = lintMigrations(migrations, catalog);
  if (lintIssues.length > 0) {
    throw new MigrationError(`migration lint failed; nothing was applied:\n${formatLintIssues(lintIssues)}`);
  }
  if (options.target && !migrations.some((m) => m.name === options.target)) {
    throw new MigrationError(`unknown target migration "${options.target}"`);
  }

  return withLock(client, options.lockWaitMs ?? 120_000, logger, async () => {
    if (!options.dryRun) await ensureMigrationsTable(client);
    const applied = await readApplied(client);
    verifyApplied(migrations, applied);

    const baseline = migrations.find((m) => m.name === BASELINE_NAME);
    if (baseline && !applied.has(BASELINE_NAME) && (await tableExists(client, 'User'))) {
      throw new MigrationError(
        'the legacy schema already exists but the baseline is not recorded: run `pnpm db:baseline --mark-applied` first (it checks the live catalog against the frozen snapshot)',
      );
    }
    const legacyPresent = applied.has(BASELINE_NAME);
    if (legacyPresent && !options.skipGuard) await guardOrThrow(client, 'pre', catalog, logger);

    const result: MigrateResult = {
      applied: [],
      deferred: [],
      pending: [],
      alreadyApplied: applied.size,
      dryRun: Boolean(options.dryRun),
    };
    for (const migration of migrations) {
      if (applied.has(migration.name)) continue;
      if (options.target && migration.name > options.target) break;
      const ready = await evaluatePreconditionSafe(client, migration, options.dryRun);
      if (!ready) {
        logger.warn(`${migration.name}: deferred (precondition not met: ${migration.directives.precondition})`);
        result.deferred.push(migration.name);
        continue;
      }
      if (options.dryRun) {
        logger.info(`would apply ${migration.name}${migration.directives.noTransaction ? ' (no transaction)' : ''}`);
        result.pending.push(migration.name);
        continue;
      }
      const durationMs = await applyOne(client, migration, logger, options.lockRetries ?? 3);
      logger.info(`applied ${migration.name} (${durationMs} ms)`);
      result.applied.push(migration.name);
    }

    if (!options.dryRun) {
      if (options.pgBoss) {
        const cfg = typeof options.pgBoss === 'object' ? options.pgBoss : null;
        if (!cfg) throw new MigrationError('pgBoss needs a connectionString');
        await installPgBoss(cfg.connectionString, cfg.schema ?? 'pgboss', logger);
      }
      if (!options.skipGuard) await guardOrThrow(client, 'post', catalog, logger);
    }
    return result;
  });
}

/** Preconditions reference tables that only exist once earlier migrations ran: in a dry run they
 * can only be evaluated when those tables exist. */
async function evaluatePreconditionSafe(
  client: pg.ClientBase,
  migration: Migration,
  dryRun?: boolean,
): Promise<boolean> {
  if (!migration.directives.precondition) return true;
  try {
    return await evaluatePrecondition(client, migration);
  } catch (error) {
    if (dryRun) return true;
    throw error;
  }
}

export interface DownOptions {
  migrationsDir?: string;
  /** Roll back every migration applied after this one (it stays applied). */
  to: string;
  dryRun?: boolean;
  lockWaitMs?: number;
  logger?: Logger;
  legacyCatalog?: Catalog;
  skipGuard?: boolean;
}

/** Rolls back, newest first, every applied migration after `options.to`. */
export async function migrateDown(client: pg.ClientBase, options: DownOptions): Promise<string[]> {
  const logger = options.logger ?? silentLogger;
  const migrations = loadMigrations(options.migrationsDir ?? DEFAULT_MIGRATIONS_DIR);
  const catalog = options.legacyCatalog ?? loadLegacyCatalog();
  const lintIssues = lintMigrations(migrations, catalog);
  if (lintIssues.length > 0) throw new MigrationError(`migration lint failed:\n${formatLintIssues(lintIssues)}`);
  if (!migrations.some((m) => m.name === options.to))
    throw new MigrationError(`unknown target migration "${options.to}"`);

  return withLock(client, options.lockWaitMs ?? 120_000, logger, async () => {
    const applied = await readApplied(client);
    verifyApplied(migrations, applied);
    const toRollBack = migrations.filter((m) => applied.has(m.name) && m.name > options.to).reverse();
    for (const migration of toRollBack) {
      if (!migration.down) throw new MigrationError(`${migration.file} has no down file`);
    }
    const rolledBack: string[] = [];
    for (const migration of toRollBack) {
      const down = migration.down as SqlFile;
      if (options.dryRun) {
        logger.info(`would roll back ${migration.name}`);
        rolledBack.push(migration.name);
        continue;
      }
      const start = performance.now();
      try {
        if (down.directives.noTransaction) {
          await setTimeouts(client, down, false);
          try {
            await client.query(down.sql);
          } finally {
            await resetTimeouts(client);
          }
          await client.query(`DELETE FROM "${MIGRATIONS_TABLE}" WHERE "name" = $1`, [migration.name]);
        } else {
          await client.query('BEGIN');
          try {
            await setTimeouts(client, down, true);
            await client.query(down.sql);
            await client.query(`DELETE FROM "${MIGRATIONS_TABLE}" WHERE "name" = $1`, [migration.name]);
            await client.query('COMMIT');
          } catch (error) {
            await client.query('ROLLBACK').catch(() => undefined);
            throw error;
          }
        }
      } catch (error) {
        throw new MigrationError(describeError(down, error));
      }
      logger.info(`rolled back ${migration.name} (${Math.round(performance.now() - start)} ms)`);
      rolledBack.push(migration.name);
    }
    if (!options.dryRun && !options.skipGuard && applied.has(BASELINE_NAME)) {
      await guardOrThrow(client, 'post', catalog, logger);
    }
    return rolledBack;
  });
}

/**
 * Records the baseline as applied without executing it (production already has the legacy
 * schema). Refuses when the live catalog differs from the frozen snapshot.
 */
export async function markBaselineApplied(
  client: pg.ClientBase,
  options: { migrationsDir?: string; legacyCatalog?: Catalog; logger?: Logger; dryRun?: boolean } = {},
): Promise<'marked' | 'already-applied'> {
  const logger = options.logger ?? silentLogger;
  const migrations = loadMigrations(options.migrationsDir ?? DEFAULT_MIGRATIONS_DIR);
  const baseline = migrations.find((m) => m.name === BASELINE_NAME);
  if (!baseline) throw new MigrationError(`${BASELINE_NAME}.sql not found`);
  const catalog = options.legacyCatalog ?? loadLegacyCatalog();

  return withLock(client, 120_000, logger, async () => {
    const applied = await readApplied(client);
    if (applied.has(BASELINE_NAME)) return 'already-applied';
    if (!(await tableExists(client, 'User'))) {
      throw new MigrationError(
        'the legacy schema does not exist here: run `pnpm db:migrate` to create it from the baseline',
      );
    }
    await guardOrThrow(client, 'pre', catalog, logger);
    if (options.dryRun) {
      logger.info(`would record ${BASELINE_NAME} as applied`);
      return 'marked';
    }
    await ensureMigrationsTable(client);
    await client.query(`INSERT INTO "${MIGRATIONS_TABLE}" ("name", "checksum", "durationMs") VALUES ($1, $2, 0)`, [
      BASELINE_NAME,
      baseline.checksum,
    ]);
    logger.info(`recorded ${BASELINE_NAME} as applied (not executed)`);
    return 'marked';
  });
}

export interface MigrationStatus {
  name: string;
  state: 'applied' | 'pending';
  appliedAt: Date | null;
  hasDown: boolean;
  precondition: string | null;
}

export async function migrationStatus(
  client: pg.ClientBase,
  options: { migrationsDir?: string } = {},
): Promise<MigrationStatus[]> {
  const migrations = loadMigrations(options.migrationsDir ?? DEFAULT_MIGRATIONS_DIR);
  const applied = await readApplied(client);
  verifyApplied(migrations, applied);
  return migrations.map((m) => ({
    name: m.name,
    state: applied.has(m.name) ? 'applied' : 'pending',
    appliedAt: applied.get(m.name)?.appliedAt ?? null,
    hasDown: m.down !== null,
    precondition: m.directives.precondition,
  }));
}
