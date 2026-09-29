/**
 * Migrations API (PLAN §6.2): runner, file loader and SQL linter. The CLI lives in
 * src/cli/migrate.ts (`pnpm db:migrate`).
 */
export {
  checksumOf,
  DEFAULT_MIGRATIONS_DIR,
  type Directives,
  loadMigrations,
  type Migration,
  MigrationFileError,
  type SqlFile,
} from './migrate/files.ts';
export { formatLintIssues, type LintIssue, legacyObjectsFrom, lintFile, lintMigrations } from './migrate/lint.ts';
export {
  BASELINE_NAME,
  type DownOptions,
  MIGRATIONS_TABLE,
  type MigrateOptions,
  type MigrateResult,
  MigrationError,
  type MigrationStatus,
  markBaselineApplied,
  migrateDown,
  migrateUp,
  migrationStatus,
} from './migrate/runner.ts';
