/**
 * `tooling/migration/replay-delta.ts` (PLAN §6.14 R4): re-injects the rows created after the
 * pre-cut-over dump into a freshly restored database. Dry run unless `--apply`.
 *
 *   node tooling/migration/replay-delta.ts --from <damaged db url> --to <restored db url> \
 *        (--since-watermarks | --watermarks <d1-watermarks.json>) [--apply] [--confirm <target db>]
 *        [--tables User,Mod,…] [--batch-size 5000]
 *
 * Connection strings may also come from REPLAY_SOURCE_URL / REPLAY_TARGET_URL (keeps credentials
 * out of the shell history).
 */
import { readFileSync } from 'node:fs';
import {
  cliLogger,
  color,
  flagInt,
  flagString,
  helpRequested,
  parseArgs,
  runCli,
  userPath,
} from './src/cli/_shared.ts';
import { connect, describeTarget } from './src/db.ts';
import { REPLAY_TABLES, replayDelta, targetWatermarks } from './src/replay.ts';

const USAGE = `
node tooling/migration/replay-delta.ts --from <url> --to <url> (--since-watermarks | --watermarks <file>)
                                       [--apply] [--confirm <target db>] [--tables A,B] [--batch-size <n>]
  Copies rows with id above each table's watermark from --from (damaged) to --to (restored),
  in foreign-key order, never updating existing rows. Without --apply only counts are printed.
  Watermarks: --since-watermarks = max(id) per table in the target; --watermarks = JSON
  {"ModDownload": 2012345, …} noted at the cut-over (PLAN §6.13 D1).
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const from = flagString(args, 'from') ?? process.env.REPLAY_SOURCE_URL;
  const to = flagString(args, 'to') ?? process.env.REPLAY_TARGET_URL;
  if (!from || !to) throw new Error(`--from and --to are required\n${USAGE}`);
  if (from === to) throw new Error('--from and --to are the same database');
  const apply = args.flags.has('apply');
  const target = describeTarget(to);
  if (apply && !target.local && flagString(args, 'confirm') !== target.database) {
    throw new Error(`writing to ${target.database} on ${target.host} needs --confirm ${target.database}`);
  }
  const tables = flagString(args, 'tables')
    ?.split(',')
    .map((t) => t.trim())
    .filter(Boolean);
  const unknown = (tables ?? []).filter((t) => !(REPLAY_TABLES as readonly string[]).includes(t));
  if (unknown.length > 0) throw new Error(`unknown table(s): ${unknown.join(', ')}`);

  const source = await connect(from, 'sotf-replay-source');
  const dest = await connect(to, 'sotf-replay-target');
  try {
    await source.query('BEGIN ISOLATION LEVEL REPEATABLE READ READ ONLY');
    const file = flagString(args, 'watermarks');
    let watermarks: Record<string, number>;
    if (file) watermarks = JSON.parse(readFileSync(userPath(file), 'utf8')) as Record<string, number>;
    else if (args.flags.has('since-watermarks')) watermarks = await targetWatermarks(dest, tables ?? REPLAY_TABLES);
    else throw new Error('pass --since-watermarks or --watermarks <file>');
    const reports = await replayDelta(source, dest, {
      watermarks,
      apply,
      batchSize: flagInt(args, 'batch-size', 5000),
      tables,
    });
    await source.query('COMMIT');
    cliLogger.info(color.dim(`${describeTarget(from).database} → ${target.database}${apply ? '' : ' (dry run)'}`));
    for (const r of reports) {
      const what = r.skipped
        ? color.dim(`skipped: ${r.skipped}`)
        : apply
          ? `${r.inserted}/${r.pending} inserted`
          : `${r.pending} to copy`;
      cliLogger.info(`${r.table.padEnd(20)} after id ${String(r.watermark).padStart(9)}  ${what}`);
    }
    if (!apply) cliLogger.info(color.yellow('dry run: nothing was written (pass --apply)'));
    return 0;
  } finally {
    await source.end();
    await dest.end();
  }
}

runCli(main);
