/**
 * `pnpm db:revert-fix <fixId>` (PLAN §6.14 R2): reverts an audited data fix row by row from
 * "DataFixAudit". Rows changed since the fix are reported as conflicts and left alone.
 *
 *   pnpm db:revert-fix B4 [--row 12,57] [--dry-run] [--confirm <db>]
 */
import { connect } from '../db.ts';
import { revertFix } from '../fixes.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli } from './_shared.ts';
import { operatorTarget } from './_target.ts';

const USAGE = `
pnpm db:revert-fix <fixId> [--row <id,id…>] [--dry-run] [--confirm <db>]
  fixId: B4 (type NULL → Mod), B5 (archived follows), admin-grant (isTrusted), B8 (WP-84)…
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const fixId = args.positional[0];
  if (!fixId) throw new Error('usage: pnpm db:revert-fix <fixId> (see --help)');
  const dryRun = args.flags.has('dry-run');
  const { url, label } = operatorTarget(args, !dryRun);
  const rowIds = flagString(args, 'row')
    ?.split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const client = await connect(url, 'sotf-revert-fix');
  try {
    const result = await revertFix(client, fixId, { dryRun, rowIds });
    cliLogger.info(color.dim(`database ${label}${dryRun ? ' (dry run)' : ''}`));
    for (const c of result.conflicts) {
      cliLogger.warn(`conflict: ${c.table}#${c.rowId}.${c.column} (audit ${c.auditId}): ${c.reason}`);
    }
    cliLogger.info(color.green(`${dryRun ? 'would revert' : 'reverted'} ${result.reverted} row(s) of ${fixId}`));
    return result.conflicts.length > 0 ? 1 : 0;
  } finally {
    await client.end();
  }
}

runCli(main);
