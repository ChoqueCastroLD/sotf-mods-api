/**
 * `pnpm db:anonymize --confirm <database>` (PLAN §6.12): anonymises a **local** restored copy of
 * production (`sql/anonymize.sql`) and optionally dumps it as `out/dev.dump`.
 *
 *   pnpm db:anonymize --database sotf_prod_copy --confirm sotf_prod_copy [--dump]
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { OUT_DIR, SQL_DIR } from '../constants.ts';
import { connect, describeTarget, withDatabase } from '../db.ts';
import { assertLocal, dumpDatabase, resolveDatabaseUrl } from '../local.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli } from './_shared.ts';

const USAGE = `
pnpm db:anonymize [--database <name>] --confirm <name> [--dump]
  DESTRUCTIVE: rewrites emails, passwords, IPs and empties tokens of a local restored copy
  (default database sotf_prod_copy). --dump writes out/dev.dump afterwards.
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const database = flagString(args, 'database') ?? 'sotf_prod_copy';
  const url = withDatabase(resolveDatabaseUrl(), database);
  assertLocal(url, 'db:anonymize');
  if (flagString(args, 'confirm') !== database)
    throw new Error(`db:anonymize is destructive: pass --confirm ${database}`);
  const client = await connect(url, 'sotf-anonymize');
  try {
    await client.query(readFileSync(join(SQL_DIR, 'anonymize.sql'), 'utf8'));
  } finally {
    await client.end();
  }
  const target = describeTarget(url);
  cliLogger.info(color.green(`anonymised ${target.database} on ${target.host}`));
  if (args.flags.has('dump')) {
    const file = join(OUT_DIR, 'dev.dump');
    await dumpDatabase(url, file);
    cliLogger.info(`dump: ${file}`);
  }
  return 0;
}

runCli(main);
