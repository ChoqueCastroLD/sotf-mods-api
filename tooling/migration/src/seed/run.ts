/**
 * `db:seed:dev` (PLAN §6.12): builds a production-like development database from scratch, in the
 * same order production goes through at the cut-over:
 *
 *   1. baseline only (`0000`: the legacy schema, as `prisma db push` left it);
 *   2. legacy rows: snapshot + synthetic data (COPY of ~2 M downloads);
 *   3. `db:migrate` (the additive expand; indexes that need a backfill are deferred);
 *   4. verify-snapshot "before";
 *   5. backfills B1–B14;
 *   6. `db:migrate` again (the deferred indexes whose precondition now holds);
 *   7. verify-snapshot "after" + diff (only the expected, audited fixes) and invariants;
 *   8. `dev-seed.dump` (pg_dump -Fc, git-ignored).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { BASELINE_NAME, type Logger, migrateUp } from '@sotf/db';
import { BACKFILLS, runBackfills } from '../backfills/index.ts';
import { EXPECTED, OUT_DIR } from '../constants.ts';
import { connect, tableExists } from '../db.ts';
import { type InvariantResult, runInvariants } from '../invariants.ts';
import { compareSnapshots, type SnapshotDiff, takeSnapshot } from '../verify-snapshot.ts';
import { buildDataset } from './dataset.ts';
import { loadDataset } from './load.ts';
import { loadSnapshot } from './snapshot.ts';

export interface SeedOptions {
  url: string;
  small?: boolean;
  outDir?: string;
  /** Write `dev-seed.dump` (default true). Needs Docker. */
  dump?: (url: string, file: string) => Promise<void>;
  /** Install the pg-boss schema like `db:migrate` does (default true). */
  pgBoss?: boolean;
  log: Logger;
}

export interface SeedReport {
  mode: 'full' | 'small';
  counts: Record<string, number>;
  diff: SnapshotDiff;
  invariants: InvariantResult[];
  deferred: string[];
  dumpFile: string | null;
  ms: Record<string, number>;
}

async function count(client: import('pg').Client, sql: string): Promise<number> {
  const { rows } = await client.query<{ n: string }>(sql);
  return Number(rows[0]?.n ?? 0);
}

export async function seedDev(options: SeedOptions): Promise<SeedReport> {
  const { log } = options;
  const outDir = options.outDir ?? OUT_DIR;
  const ms: Record<string, number> = {};
  const timed = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
    const start = performance.now();
    const result = await fn();
    ms[name] = Math.round(performance.now() - start);
    return result;
  };
  const client = await connect(options.url, 'sotf-seed-dev');
  try {
    if (await tableExists(client, 'User')) {
      throw new Error('the database is not empty: run `pnpm db:reset:dev` first (or pass --reset)');
    }
    const migrateLog: Logger = { info: () => {}, warn: (m) => log.warn(m), error: (m) => log.error(m) };
    await timed('baseline', () => migrateUp(client, { target: BASELINE_NAME, pgBoss: false, logger: migrateLog }));
    log.info('baseline applied (legacy schema)');

    const snapshot = loadSnapshot();
    const data = buildDataset(snapshot, { small: options.small });
    await timed('load', () => loadDataset(client, data, (m) => log.info(`  ${m}`)));

    const pgBoss = options.pgBoss === false ? false : { connectionString: options.url };
    await timed('migrate', () => migrateUp(client, { pgBoss, logger: migrateLog }));
    log.info('migrations applied (expand)');

    const before = await timed('snapshotBefore', () => takeSnapshot(client));
    await timed('backfills', () => runBackfills(client, BACKFILLS, { log, outDir }));
    const second = await timed('migrateDeferred', () => migrateUp(client, { pgBoss: false, logger: migrateLog }));
    if (second.applied.length > 0) log.info(`deferred migrations applied: ${second.applied.join(', ')}`);
    const after = await timed('snapshotAfter', () => takeSnapshot(client));
    const diff = compareSnapshots(before, after);

    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'snapshot-before.json'), `${JSON.stringify(before, null, 2)}\n`);
    writeFileSync(join(outDir, 'snapshot-after.json'), `${JSON.stringify(after, null, 2)}\n`);

    const counts = {
      users: await count(client, 'SELECT count(*) AS n FROM "User"'),
      mods: await count(client, 'SELECT count(*) AS n FROM "Mod"'),
      versions: await count(client, 'SELECT count(*) AS n FROM "ModVersion"'),
      comments: await count(client, 'SELECT count(*) AS n FROM "Comment"'),
      favoritesLoaded: data.favorites.length,
      favorites: await count(client, 'SELECT count(*) AS n FROM "ModFavorite"'),
      favoritesArchived: await count(client, 'SELECT count(*) AS n FROM "ModFavoriteArchive"'),
      downloads: await count(client, 'SELECT count(*) AS n FROM "ModDownload"'),
    };
    await client.query(
      `INSERT INTO "MigrationRun" ("name", "finishedAt", "rowsAffected", "notes") VALUES ('seed:dev', now(), $1, $2::jsonb)`,
      [
        counts.downloads,
        JSON.stringify({ mode: data.mode, downloads: data.totalDownloads, counts, rareCases: data.rareCases, ms }),
      ],
    );
    const invariants = await timed('invariants', () =>
      runInvariants(client, data.mode === 'small' ? { minSiteDownloads: data.totalDownloads } : {}),
    );

    const problems: string[] = [];
    const expected: Record<string, number> = {
      users: EXPECTED.users,
      mods: EXPECTED.mods,
      versions: EXPECTED.versions,
      comments: EXPECTED.comments,
      favoritesLoaded: EXPECTED.favorites + (data.rareCases.duplicateFavorites as number),
      favorites: EXPECTED.favorites,
      downloads: data.totalDownloads,
    };
    for (const [key, value] of Object.entries(expected)) {
      if (counts[key as keyof typeof counts] !== value)
        problems.push(`${key}: ${counts[key as keyof typeof counts]} ≠ ${value}`);
    }
    if (data.mode === 'full' && counts.downloads !== EXPECTED.downloads) problems.push('downloads ≠ 1 977 059');
    if (!diff.ok) problems.push('verify-snapshot found unexpected differences');
    for (const inv of invariants) if (!inv.ok) problems.push(`invariant ${inv.id} failed`);
    if (problems.length > 0) {
      for (const d of diff.differences) log.warn(`${d.kind} difference in ${d.where}: ${d.detail}`);
      for (const inv of invariants.filter((i) => !i.ok)) log.warn(`${inv.id}: ${JSON.stringify(inv.detail)}`);
      throw new Error(`the seed is not consistent:\n  - ${problems.join('\n  - ')}`);
    }

    let dumpFile: string | null = null;
    if (options.dump) {
      dumpFile = join(outDir, data.mode === 'small' ? 'dev-seed-small.dump' : 'dev-seed.dump');
      await timed('dump', () => options.dump?.(options.url, dumpFile as string) ?? Promise.resolve());
    }
    return { mode: data.mode, counts, diff, invariants, deferred: second.deferred, dumpFile, ms };
  } finally {
    await client.end();
  }
}
