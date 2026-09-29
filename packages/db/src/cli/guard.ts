/**
 * `pnpm db:guard` (PLAN §6.2): read-only check that every legacy table, column, constraint, index
 * and trigger of the frozen snapshot is intact and that legacy tables carry no undeclared columns.
 * Exit code 1 on any violation. Safe against production (SELECT on the catalog only).
 *
 *   pnpm db:guard [--json]           against DATABASE_URL (or MIGRATIONS_DATABASE_URL)
 *   pnpm db:guard --ephemeral        against a disposable PostgreSQL 16 migrated from empty
 *
 * Without any database URL (CI) it runs in ephemeral mode: it proves that the migrations of this
 * build keep the legacy schema intact. Ephemeral mode needs Docker or SOTF_TEST_DATABASE_URL.
 */
import { databaseUrlMissing, loadDbEnv, loadRootDotEnv } from '../env.ts';
import { formatGuardReport, type GuardReport, runGuard } from '../guard.ts';
import { cliLogger, color, connect, describeTarget, parseArgs, runCli } from './_shared.ts';

async function guardUrl(url: string): Promise<GuardReport> {
  const client = await connect(url, 'sotf-guard');
  try {
    await client.query('SET default_transaction_read_only = on');
    return await runGuard(client);
  } finally {
    await client.end();
  }
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  loadRootDotEnv();
  let report: GuardReport;
  if (args.flags.has('ephemeral') || databaseUrlMissing()) {
    cliLogger.info(
      color.yellow(
        'no database given: checking the migrations of this build on a disposable PostgreSQL 16 (ephemeral mode)',
      ),
    );
    const { startTestDb, stopTestServer } = await import('../testing.ts');
    const db = await startTestDb();
    try {
      report = await guardUrl(db.url);
    } finally {
      await db.stop();
      await stopTestServer();
    }
  } else {
    const env = loadDbEnv();
    const target = describeTarget(env.readUrl);
    if (!args.flags.has('json')) cliLogger.info(color.dim(`database ${target.database} on ${target.host}`));
    report = await guardUrl(env.readUrl);
  }
  if (args.flags.has('json')) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  else cliLogger.info(report.ok ? color.green(formatGuardReport(report)) : color.red(formatGuardReport(report)));
  return report.ok ? 0 : 1;
}

runCli(main);
