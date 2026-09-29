/**
 * Regenerates src/guard/legacy-catalog.json (PLAN §6.2): applies 0000_legacy_baseline.sql to an
 * empty PostgreSQL 16 database and freezes the catalog of the legacy tables.
 *
 *   pnpm --filter @sotf/db db:catalog:snapshot           write the snapshot
 *   pnpm --filter @sotf/db db:catalog:snapshot --check   exit 1 if it differs
 *
 * Only needed when the baseline changes (e.g. regenerated from the real production dump). Uses
 * Testcontainers, or SOTF_TEST_DATABASE_URL when set.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import pg from 'pg';
import { introspectCatalog, type LegacyCatalogSnapshot } from '../src/guard/catalog.ts';
import { DEFAULT_MIGRATIONS_DIR, loadMigrations } from '../src/migrate/files.ts';
import { BASELINE_NAME } from '../src/migrate/runner.ts';
import { createTestDatabase, stopTestServer } from '../src/testing.ts';

export async function takeLegacySnapshot(): Promise<LegacyCatalogSnapshot> {
  const baseline = loadMigrations(DEFAULT_MIGRATIONS_DIR).find((m) => m.name === BASELINE_NAME);
  if (!baseline) throw new Error(`${BASELINE_NAME}.sql not found`);
  const url = await createTestDatabase({ migrate: false });
  const client = new pg.Client({ connectionString: url });
  await client.connect();
  try {
    await client.query(baseline.sql);
    const catalog = await introspectCatalog(client);
    const { rows } = await client.query<{ version: string }>("SELECT current_setting('server_version') AS version");
    return {
      $comment:
        'Frozen catalog of the 16 legacy tables, taken from migrations/0000_legacy_baseline.sql on an empty PostgreSQL 16. Regenerate with `pnpm --filter @sotf/db db:catalog:snapshot` only when the baseline changes. The guard (pnpm db:guard) requires every object here to exist unchanged.',
      source: `${BASELINE_NAME}.sql`,
      sourceChecksum: baseline.checksum,
      postgres: (rows[0]?.version ?? 'unknown').split(' ')[0] as string,
      ...catalog,
    };
  } finally {
    await client.end();
  }
}

async function main(): Promise<void> {
  const file = fileURLToPath(new URL('../src/guard/legacy-catalog.json', import.meta.url));
  const snapshot = await takeLegacySnapshot();
  const content = `${JSON.stringify(snapshot, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    const current = readFileSync(file, 'utf8');
    const strip = (text: string) => {
      const parsed = JSON.parse(text) as LegacyCatalogSnapshot;
      return JSON.stringify({ ...parsed, postgres: '' });
    };
    if (strip(current) !== strip(content)) {
      process.stderr.write('legacy-catalog.json is stale: run `pnpm --filter @sotf/db db:catalog:snapshot`\n');
      process.exitCode = 1;
    } else process.stdout.write('legacy-catalog.json is up to date\n');
  } else {
    writeFileSync(file, content);
    process.stdout.write(`written ${file} (${Object.keys(snapshot.tables).length} tables)\n`);
  }
  await stopTestServer();
}

if (import.meta.main) {
  main().catch((error: unknown) => {
    process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
    process.exit(1);
  });
}
