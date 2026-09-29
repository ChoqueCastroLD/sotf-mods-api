/**
 * `pnpm db:baseline --mark-applied` (PLAN §6.2): on a database that already has the legacy schema
 * (production, a restored dump), records 0000_legacy_baseline as applied *without executing it*,
 * after the guard confirms the live catalog matches the frozen snapshot.
 *
 *   pnpm db:baseline --mark-applied [--dry-run]
 */
import { loadDbEnv, loadRootDotEnv } from '../env.ts';
import { markBaselineApplied } from '../migrate.ts';
import { cliLogger, color, connect, describeTarget, parseArgs, runCli } from './_shared.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (!args.flags.has('mark-applied')) {
    throw new Error('usage: pnpm db:baseline --mark-applied [--dry-run]   (records 0000 without executing it)');
  }
  loadRootDotEnv();
  const env = loadDbEnv();
  const target = describeTarget(env.migrationsUrl);
  cliLogger.info(color.dim(`database ${target.database} on ${target.host}`));
  const client = await connect(env.migrationsUrl, 'sotf-baseline');
  try {
    const outcome = await markBaselineApplied(client, {
      migrationsDir: env.migrationsDir,
      logger: cliLogger,
      dryRun: args.flags.has('dry-run'),
    });
    cliLogger.info(color.green(outcome === 'already-applied' ? 'baseline already recorded' : 'baseline recorded'));
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
