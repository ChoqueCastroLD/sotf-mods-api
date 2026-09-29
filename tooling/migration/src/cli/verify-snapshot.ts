/**
 * `pnpm db:verify-snapshot` (PLAN §6.11): before/after data snapshot and diff. Read-only.
 *
 *   pnpm db:verify-snapshot [--out <file>]                 take a snapshot (JSON)
 *   pnpm db:verify-snapshot --compare <before.json>        snapshot now and diff against a file
 *   pnpm db:verify-snapshot --diff <a.json> <b.json>       diff two files
 *   --strict   also require identical v2 checksums (two runs of the same backfills)
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { OUT_DIR } from '../constants.ts';
import { connect } from '../db.ts';
import { compareSnapshots, type Snapshot, takeSnapshot } from '../verify-snapshot.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli, userPath } from './_shared.ts';
import { operatorTarget } from './_target.ts';

const USAGE = `
pnpm db:verify-snapshot [--out <file>] [--compare <before.json>] [--strict]
pnpm db:verify-snapshot --diff <a.json> <b.json> [--strict]
  Legacy tables are checksummed over their legacy columns only; the diff accepts only audited,
  reversible fixes (B4, B5, admin:grant). Exit 1 on any unexpected difference.
`;

const read = (file: string) => JSON.parse(readFileSync(userPath(file), 'utf8')) as Snapshot;

function report(before: Snapshot, after: Snapshot, strict: boolean): number {
  const diff = compareSnapshots(before, after, { strict });
  for (const d of diff.differences) {
    const mark = d.kind === 'expected' ? color.green('expected  ') : color.red('UNEXPECTED');
    cliLogger.info(`${mark} ${d.where}: ${d.detail}`);
  }
  if (diff.ok) {
    cliLogger.info(color.green(diff.differences.length === 0 ? 'identical' : 'only the expected fixes differ'));
    return 0;
  }
  cliLogger.error('unexpected differences');
  return 1;
}

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const strict = args.flags.has('strict');
  const diffA = flagString(args, 'diff');
  if (diffA) {
    const diffB = args.positional[0];
    if (!diffB) throw new Error('--diff needs two files');
    return report(read(diffA), read(diffB), strict);
  }
  const { url, label } = operatorTarget(args, false);
  const client = await connect(url, 'sotf-verify-snapshot');
  let snapshot: Snapshot;
  try {
    await client.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
    snapshot = await takeSnapshot(client);
    await client.query('COMMIT');
  } finally {
    await client.end();
  }
  const outFlag = flagString(args, 'out');
  const out = outFlag
    ? userPath(outFlag)
    : join(OUT_DIR, `snapshot-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, `${JSON.stringify(snapshot, null, 2)}\n`);
  cliLogger.info(`snapshot of ${label} → ${out}`);
  const compare = flagString(args, 'compare');
  return compare ? report(read(compare), snapshot, strict) : 0;
}

runCli(main);
