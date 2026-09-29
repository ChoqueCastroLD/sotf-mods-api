/**
 * `pnpm db:migrate` (PLAN §6.2).
 *
 *   pnpm db:migrate                       apply pending migrations + pg-boss schema + guard
 *   pnpm db:migrate --dry-run             print the plan, change nothing
 *   pnpm db:migrate --to <name>           apply up to and including <name>
 *   pnpm db:migrate --strict              exit 2 when a migration is deferred (precondition)
 *   pnpm db:migrate --no-pgboss           skip the pg-boss schema
 *   pnpm db:migrate status                list applied / pending migrations
 *   pnpm db:migrate down --to <name> --confirm <database>
 *                                         roll back every migration after <name>
 *
 * MIGRATIONS_DATABASE_URL (owner credentials of the migrate task) or, locally, DATABASE_URL.
 * MIGRATIONS_DIR overrides the directory.
 */
import { loadDbEnv } from '../env.ts';
import { migrateDown, migrateUp, migrationStatus } from '../migrate.ts';
import { cliLogger, color, connect, describeTarget, flagString, parseArgs, runCli } from './_shared.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  const env = loadDbEnv();
  const command = args.positional[0] ?? 'up';
  const target = describeTarget(env.migrationsUrl);
  const migrationsDir = env.migrationsDir;
  const dryRun = args.flags.has('dry-run');
  cliLogger.info(color.dim(`database ${target.database} on ${target.host}${dryRun ? ' (dry run)' : ''}`));

  const client = await connect(env.migrationsUrl, 'sotf-migrate');
  try {
    if (command === 'status') {
      const rows = await migrationStatus(client, { migrationsDir });
      for (const row of rows) {
        const state = row.state === 'applied' ? color.green('applied') : color.yellow('pending');
        const extra = row.precondition ? color.dim(' (precondition)') : '';
        cliLogger.info(`${state.padEnd(18)} ${row.name}${extra}${row.hasDown ? '' : color.red(' (no down file)')}`);
      }
      return 0;
    }

    if (command === 'down') {
      const to = flagString(args, 'to');
      if (!to)
        throw new Error('down needs --to <migration name> (it stays applied; everything after it is rolled back)');
      if (!dryRun && !target.local && flagString(args, 'confirm') !== target.database) {
        throw new Error(`rolling back a non-local database needs --confirm ${target.database}`);
      }
      const rolledBack = await migrateDown(client, { to, dryRun, migrationsDir, logger: cliLogger });
      cliLogger.info(color.green(`${dryRun ? 'would roll back' : 'rolled back'} ${rolledBack.length} migration(s)`));
      return 0;
    }

    if (command !== 'up') throw new Error(`unknown command "${command}" (up, status, down)`);
    const result = await migrateUp(client, {
      migrationsDir,
      dryRun,
      target: flagString(args, 'to'),
      pgBoss: args.flags.has('no-pgboss') ? false : { connectionString: env.migrationsUrl, schema: env.pgBossSchema },
      logger: cliLogger,
    });
    if (dryRun) {
      cliLogger.info(
        color.green(`${result.pending.length} migration(s) would be applied (${result.alreadyApplied} applied)`),
      );
    } else {
      cliLogger.info(
        color.green(
          result.applied.length === 0
            ? `database is up to date (${result.alreadyApplied} migrations applied)`
            : `applied ${result.applied.length} migration(s)`,
        ),
      );
    }
    if (result.deferred.length > 0) {
      cliLogger.warn(
        `${result.deferred.length} migration(s) deferred until their precondition holds: ${result.deferred.join(', ')}`,
      );
      if (args.flags.has('strict')) return 2;
    }
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
