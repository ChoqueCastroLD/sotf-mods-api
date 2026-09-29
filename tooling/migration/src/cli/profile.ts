/**
 * `pnpm db:profile` (PLAN §6.11, research/02 §14.1): profiling queries Q-P0…Q-P10 of
 * `sql/profile.sql`, in one read-only transaction.
 *
 *   pnpm db:profile [--json]
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SQL_DIR } from '../constants.ts';
import { connect } from '../db.ts';
import { sqlSections } from '../verify-snapshot.ts';
import { cliLogger, color, helpRequested, parseArgs, runCli } from './_shared.ts';
import { operatorTarget } from './_target.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, 'pnpm db:profile [--json]   read-only profiling of a legacy database (Q-P0…Q-P10)')) return 0;
  const { url, label } = operatorTarget(args, false);
  const sections = sqlSections(readFileSync(join(SQL_DIR, 'profile.sql'), 'utf8'));
  const client = await connect(url, 'sotf-profile');
  const out: Record<string, unknown[]> = {};
  try {
    await client.query('BEGIN READ ONLY');
    for (const [name, sql] of sections) out[name] = (await client.query(sql)).rows;
    await client.query('ROLLBACK');
  } finally {
    await client.end();
  }
  if (args.flags.has('json')) {
    process.stdout.write(`${JSON.stringify(out, null, 2)}\n`);
    return 0;
  }
  cliLogger.info(color.dim(`database ${label}`));
  for (const [name, rows] of Object.entries(out)) {
    cliLogger.info(color.bold(`\n${name} (${rows.length} row${rows.length === 1 ? '' : 's'})`));
    const shown = name.startsWith('Q-P9') ? rows.slice(0, 0) : rows.slice(0, 50);
    // biome-ignore lint/suspicious/noConsole: a table on stdout is this command's output
    if (shown.length > 0) console.table(shown);
    if (rows.length > shown.length) cliLogger.info(color.dim(`… ${rows.length - shown.length} more (use --json)`));
  }
  return 0;
}

runCli(main);
