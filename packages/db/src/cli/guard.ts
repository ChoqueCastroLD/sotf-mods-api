/**
 * `pnpm db:guard` (PLAN §6.2): read-only check that every legacy table, column, constraint, index
 * and trigger of the frozen snapshot is intact and that legacy tables carry no undeclared columns.
 * Exit code 1 on any violation. Safe against production (SELECT on the catalog only).
 *
 *   pnpm db:guard [--json]
 */
import { loadDbEnv, loadRootDotEnv } from '../env.ts';
import { formatGuardReport, runGuard } from '../guard.ts';
import { cliLogger, color, connect, describeTarget, parseArgs, runCli } from './_shared.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  loadRootDotEnv();
  const env = loadDbEnv();
  const target = describeTarget(env.readUrl);
  const client = await connect(env.readUrl, 'sotf-guard');
  try {
    await client.query('SET default_transaction_read_only = on');
    const report = await runGuard(client);
    if (args.flags.has('json')) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    else {
      cliLogger.info(color.dim(`database ${target.database} on ${target.host}`));
      cliLogger.info(report.ok ? color.green(formatGuardReport(report)) : color.red(formatGuardReport(report)));
    }
    return report.ok ? 0 : 1;
  } finally {
    await client.end();
  }
}

runCli(main);
