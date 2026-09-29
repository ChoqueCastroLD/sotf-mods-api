/**
 * `pnpm db:backfill` (PLAN §6.9): idempotent, resumable, batched backfills recorded in
 * "MigrationRun".
 *
 *   pnpm db:backfill --all [--dry-run] [--batch-size 5000]
 *   pnpm db:backfill B1,B11 [--dry-run]
 *   pnpm db:backfill --delta [--since-watermarks]          cut-over delta (B12, B14, B1, B11)
 *   pnpm db:backfill --list
 */
import { migrateUp } from '@sotf/db';
import { BACKFILLS, DELTA_BACKFILLS, runBackfills, selectBackfills } from '../backfills/index.ts';
import { OUT_DIR } from '../constants.ts';
import { connect } from '../db.ts';
import { cliLogger, color, flagInt, helpRequested, parseArgs, runCli } from './_shared.ts';
import { operatorTarget } from './_target.ts';

const USAGE = `
pnpm db:backfill (--all | --delta | <B1,B2,…>) [--dry-run] [--batch-size <n>] [--no-migrate] [--confirm <db>]
  --all               every WP-14 backfill in dependency order: ${BACKFILLS.map((b) => b.id).join(' ')}
  --delta             the cut-over delta (PLAN §6.13 D4): ${DELTA_BACKFILLS.map((b) => b.id).join(' ')}
  --since-watermarks  (with --delta) continue from the watermarks recorded in "MigrationRun" (default)
  --dry-run           run every batch and roll it back: real counts, nothing kept
  --batch-size <n>    rows per batch (1000–5000 recommended; default 5000)
  --no-migrate        do not apply the migrations deferred until the backfills (0038, 0045…)
  --confirm <db>      required to write to a non-local database
  --list              list the backfills
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  if (args.flags.has('list')) {
    for (const b of BACKFILLS) {
      cliLogger.info(
        `${b.id.padEnd(4)} ${b.title}${b.touchesLegacy ? color.yellow(' (audited legacy change)') : ''}${b.delta ? color.dim(' [delta]') : ''}`,
      );
    }
    return 0;
  }
  const dryRun = args.flags.has('dry-run');
  const selected = args.flags.has('all')
    ? [...BACKFILLS]
    : args.flags.has('delta')
      ? [...DELTA_BACKFILLS]
      : selectBackfills(args.positional);
  if (selected.length === 0)
    throw new Error('nothing to run: pass --all, --delta or a list such as B1,B11 (see --help)');
  const { url, label } = operatorTarget(args, !dryRun);
  cliLogger.info(color.dim(`database ${label}${dryRun ? ' (dry run)' : ''}`));
  const client = await connect(url, 'sotf-backfill');
  try {
    const results = await runBackfills(client, selected, {
      dryRun,
      batchSize: flagInt(args, 'batch-size', 5000),
      log: cliLogger,
      outDir: OUT_DIR,
    });
    const total = results.reduce((sum, r) => sum + r.rows, 0);
    cliLogger.info(
      color.green(`${dryRun ? 'would change' : 'changed'} ${total} row(s) in ${results.length} backfill(s)`),
    );
    if (!dryRun && !args.flags.has('no-migrate')) {
      // Indexes deferred until a backfill (B5 → 0038, B6 → 0045) are created now if possible.
      const logger = {
        info: () => {},
        warn: (m: string) => cliLogger.warn(m),
        error: (m: string) => cliLogger.error(m),
      };
      const result = await migrateUp(client, { pgBoss: false, logger });
      if (result.applied.length > 0)
        cliLogger.info(color.green(`applied deferred migrations: ${result.applied.join(', ')}`));
    }
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
