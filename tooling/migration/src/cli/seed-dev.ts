/**
 * `pnpm db:seed:dev` (PLAN §6.12): public snapshot + deterministic synthetic data → migrations →
 * backfills B1–B14 → verification → `out/dev-seed.dump`.
 *
 *   pnpm db:seed:dev [--small] [--reset] [--no-dump] [--no-pgboss]
 */
import { describeTarget } from '../db.ts';
import {
  assertLocal,
  dumpDatabase,
  ensureDatabase,
  ensureServer,
  recreateDatabase,
  resolveDatabaseUrl,
} from '../local.ts';
import { seedDev } from '../seed/run.ts';
import { cliLogger, color, helpRequested, parseArgs, runCli } from './_shared.ts';

const USAGE = `
pnpm db:seed:dev [--small] [--reset] [--no-dump] [--no-pgboss]
  Builds the development database from the public API snapshot plus deterministic synthetic
  data (3 883 users, 257 mods, 612 versions, 278 comments, 234 follows + 3 injected duplicates,
  1 977 059 downloads and the rare cases of research/02), applies every migration, runs the
  backfills B1–B14, checks verify-snapshot and the invariants, and writes out/dev-seed.dump.

  --small      10 000 downloads instead of ~2 M (fast tests, < 60 s)
  --reset      drop and recreate the database first (same as pnpm db:reset:dev)
  --no-dump    skip the pg_dump (needs Docker otherwise)
  --no-pgboss  do not install the pg-boss schema

  The database must be empty (pnpm db:reset:dev). Local hosts only. Every account's password is
  sotf-dev-2026! (emails <slug>@example.test).
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const url = resolveDatabaseUrl();
  assertLocal(url, 'db:seed:dev');
  const started = performance.now();
  await ensureServer(url, (m) => cliLogger.info(color.dim(m)));
  if (args.flags.has('reset')) await recreateDatabase(url);
  else await ensureDatabase(url);
  const target = describeTarget(url);
  const small = args.flags.has('small');
  cliLogger.info(color.dim(`seeding ${target.database} on ${target.host}${small ? ' (--small)' : ''}`));
  const report = await seedDev({
    url,
    small,
    pgBoss: !args.flags.has('no-pgboss'),
    dump: args.flags.has('no-dump') ? undefined : dumpDatabase,
    log: cliLogger,
  });
  const c = report.counts;
  cliLogger.info('');
  cliLogger.info(
    `users ${c.users} · mods ${c.mods} · versions ${c.versions} · comments ${c.comments} · ` +
      `follows ${c.favoritesLoaded} loaded → ${c.favorites} (+${c.favoritesArchived} archived) · downloads ${c.downloads}`,
  );
  for (const d of report.diff.differences) cliLogger.info(`${color.green('expected')} ${d.where}: ${d.detail}`);
  cliLogger.info(`invariants: ${report.invariants.filter((i) => i.ok).length}/${report.invariants.length} green`);
  if (report.deferred.length > 0) {
    cliLogger.warn(`still deferred (manual decision pending): ${report.deferred.join(', ')}`);
  }
  if (report.dumpFile) cliLogger.info(`dump: ${report.dumpFile}`);
  cliLogger.info(
    color.dim(
      Object.entries(report.ms)
        .map(([k, v]) => `${k} ${(v / 1000).toFixed(1)}s`)
        .join(' · '),
    ),
  );
  cliLogger.info(color.green(`seeded in ${((performance.now() - started) / 1000).toFixed(1)} s`));
  return 0;
}

runCli(main);
