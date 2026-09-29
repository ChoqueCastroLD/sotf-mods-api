/**
 * `pnpm --filter @sotf/db db:lint-sql [dir]`: lints every migration (and down file) against the
 * frozen legacy catalog without a database. Exit code 1 on any issue.
 */
import { loadLegacyCatalog } from '../guard/snapshot.ts';
import { DEFAULT_MIGRATIONS_DIR, formatLintIssues, lintMigrations, loadMigrations } from '../migrate.ts';
import { cliLogger, color, parseArgs, runCli } from './_shared.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  const dir = args.positional[0] ?? DEFAULT_MIGRATIONS_DIR;
  const migrations = loadMigrations(dir);
  const issues = lintMigrations(migrations, loadLegacyCatalog());
  if (issues.length > 0) {
    cliLogger.error(`${issues.length} migration lint issue(s):\n${formatLintIssues(issues)}`);
    return 1;
  }
  cliLogger.info(color.green(`${migrations.length} migrations lint clean`));
  return 0;
}

runCli(main);
