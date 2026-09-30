/**
 * `pnpm --filter @sotf/migration-tools r2:manifest-fixes` — B4M and B8 (see ../manifest-fixes.ts),
 * run after B15 has stored the manifests. Same runner as `pnpm db:backfill` (advisory lock,
 * batches, "MigrationRun", `--dry-run` rolls back), audited in "DataFixAudit" (fix ids `B4M`, `B8`).
 */
import { runBackfills } from '../../src/backfills/framework.ts';
import { cliLogger, color, flagInt, helpRequested, parseArgs, runCli } from '../../src/cli/_shared.ts';
import { operatorTarget } from '../../src/cli/_target.ts';
import { OUT_DIR } from '../../src/constants.ts';
import { connect } from '../../src/db.ts';
import { b04m, b08, MANIFEST_FIXES } from '../manifest-fixes.ts';

const USAGE = `
pnpm --filter @sotf/migration-tools r2:manifest-fixes [B4M,B8] [--apply] [--batch-size <n>] [--confirm <db>] [--force]
  --dry-run (default) every batch runs and is rolled back (real counts, nothing kept)
  --apply            keep the changes (audited: pnpm db:revert-fix B8 / B4M)
  B4M,B8             run only these (default both, B4M first)
  --confirm <db>     required with --apply on a non-local database
  --force            run even when B15 has not stored any manifest yet
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  if (args.flags.has('apply') && args.flags.has('dry-run'))
    throw new Error('--apply and --dry-run are mutually exclusive');
  const dryRun = !args.flags.has('apply');
  const wanted = new Set(
    args.positional
      .flatMap((p) => p.split(','))
      .map((p) => p.trim().toUpperCase())
      .filter(Boolean),
  );
  const unknown = [...wanted].filter((id) => id !== 'B8' && id !== 'B4M');
  if (unknown.length > 0) throw new Error(`unknown fix ${unknown.join(', ')} (known: B4M, B8)`);
  const selected = wanted.size === 0 ? [...MANIFEST_FIXES] : [b04m, b08].filter((b) => wanted.has(b.id));

  const { url, label } = operatorTarget(args, !dryRun);
  cliLogger.info(color.dim(`database ${label}${dryRun ? ' (dry run)' : ''}`));
  const client = await connect(url, 'sotf-r2-manifest-fixes');
  try {
    const { rows } = await client.query<{ n: string }>(
      `SELECT count(*) AS n FROM "VersionInspection" WHERE "manifest" IS NOT NULL`,
    );
    const manifests = Number(rows[0]?.n ?? 0);
    if (manifests === 0 && !args.flags.has('force')) {
      throw new Error(
        'no manifest stored yet: run B15 first (node dist/backfill.js B15 --apply --wait) or pass --force',
      );
    }
    cliLogger.info(color.dim(`${manifests} version(s) with a stored manifest`));
    const results = await runBackfills(client, selected, {
      dryRun,
      batchSize: flagInt(args, 'batch-size', 2000),
      log: cliLogger,
      outDir: OUT_DIR,
    });
    const total = results.reduce((sum, r) => sum + r.rows, 0);
    cliLogger.info(color.green(`${dryRun ? 'would change' : 'changed'} ${total} row(s)`));
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
