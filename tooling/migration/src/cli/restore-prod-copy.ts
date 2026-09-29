/**
 * `pnpm db:restore:prod-copy <file.dump>` (PLAN §6.12): restores a production backup into the
 * **local** database `sotf_prod_copy` (dropped and recreated), for rehearsals only. The file stays
 * outside the repository; run `pnpm db:anonymize` before sharing anything derived from it.
 *
 *   pnpm db:restore:prod-copy ~/sotf-mods-private/prod.dump [--database sotf_prod_copy]
 */
import { existsSync } from 'node:fs';
import { describeTarget, withDatabase } from '../db.ts';
import {
  assertLocal,
  ensureServer,
  REPO_ROOT,
  recreateDatabase,
  resolveDatabaseUrl,
  restoreDatabase,
} from '../local.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli, userPath } from './_shared.ts';

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, 'pnpm db:restore:prod-copy <file.dump> [--database sotf_prod_copy]')) return 0;
  const file = args.positional[0];
  if (!file || !existsSync(userPath(file))) throw new Error('usage: pnpm db:restore:prod-copy <existing file.dump>');
  const absolute = userPath(file);
  if (absolute.startsWith(`${REPO_ROOT}/`)) throw new Error('production dumps never live inside the repository');
  const database = flagString(args, 'database') ?? 'sotf_prod_copy';
  const url = withDatabase(resolveDatabaseUrl(), database);
  assertLocal(url, 'db:restore:prod-copy');
  await ensureServer(url, (m) => cliLogger.info(color.dim(m)));
  await recreateDatabase(url);
  await restoreDatabase(url, absolute);
  const target = describeTarget(url);
  cliLogger.info(
    color.green(`restored into ${target.database} on ${target.host}; next: pnpm db:profile, pnpm db:anonymize`),
  );
  return 0;
}

runCli(main);
