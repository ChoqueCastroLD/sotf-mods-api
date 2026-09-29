/**
 * `pnpm db:invariants` (PLAN §6.11): the data invariants. Read-only. Exit 1 when one is red.
 *
 *   pnpm db:invariants [--json] [--min-site-downloads <n>] [--expected-file-missing <n>]
 */
import { connect } from '../db.ts';
import { runInvariants, seedExpectations } from '../invariants.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli } from './_shared.ts';
import { operatorTarget } from './_target.ts';

const USAGE = `
pnpm db:invariants [--json] [--min-site-downloads <n>] [--expected-file-missing <n>]
  Checks the invariants of PLAN §6.11 (read-only). On a --small dev seed the download threshold
  is taken from the seed record automatically. --expected-file-missing -1 accepts any number.
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const { url, label } = operatorTarget(args, false);
  const client = await connect(url, 'sotf-invariants');
  try {
    const defaults = await seedExpectations(client);
    const min = flagString(args, 'min-site-downloads');
    const missing = flagString(args, 'expected-file-missing');
    const results = await runInvariants(client, {
      minSiteDownloads: min !== undefined ? Number(min) : defaults.minSiteDownloads,
      expectedFileMissing: missing !== undefined ? Number(missing) : undefined,
    });
    if (args.flags.has('json')) process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
    else {
      cliLogger.info(color.dim(`database ${label}`));
      for (const r of results) {
        cliLogger.info(`${r.ok ? color.green('✔') : color.red('✘')} ${r.id} ${color.dim(JSON.stringify(r.detail))}`);
      }
    }
    const failed = results.filter((r) => !r.ok);
    if (failed.length > 0) {
      cliLogger.error(`${failed.length} invariant(s) failed: ${failed.map((r) => r.id).join(', ')}`);
      return 1;
    }
    if (!args.flags.has('json')) cliLogger.info(color.green(`all ${results.length} invariants are green`));
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
