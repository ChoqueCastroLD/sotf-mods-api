/**
 * `pnpm db:reset:dev`: drops and recreates the local development database (empty, no schema).
 * Starts the compose PostgreSQL when needed. Refuses any non-local database.
 *
 *   pnpm db:reset:dev
 */
import { describeTarget } from '../db.ts';
import { assertLocal, ensureServer, recreateDatabase, resolveDatabaseUrl } from '../local.ts';
import { cliLogger, color, helpRequested, parseArgs, runCli } from './_shared.ts';

const USAGE = `
pnpm db:reset:dev
  Drops and recreates the local development database (MIGRATIONS_DATABASE_URL, DATABASE_URL or
  postgres://sotf:sotf@127.0.0.1:47432/sotf). Local hosts only. Then run pnpm db:seed:dev.
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const url = resolveDatabaseUrl();
  assertLocal(url, 'db:reset:dev');
  await ensureServer(url, (m) => cliLogger.info(color.dim(m)));
  await recreateDatabase(url);
  const target = describeTarget(url);
  cliLogger.info(color.green(`recreated ${target.database} on ${target.host} (empty)`));
  return 0;
}

runCli(main);
