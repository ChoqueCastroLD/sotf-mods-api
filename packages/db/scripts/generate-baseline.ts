/**
 * Regenerates migrations/0000_legacy_baseline.sql from legacy/schema.prisma (PLAN §6.2 step 1):
 *
 *   prisma@6.19.0 migrate diff --from-empty --to-schema-datamodel legacy/schema.prisma --script
 *
 *   pnpm --filter @sotf/db db:baseline:generate           write the file
 *   pnpm --filter @sotf/db db:baseline:generate --check   exit 1 if it differs
 *
 * Needs network access for `npx prisma@6.19.0` (not a dependency of the workspace). After a
 * change, regenerate src/guard/legacy-catalog.json (db:catalog:snapshot). Once the real
 * production dump is available the baseline is regenerated from it instead (PLAN §6.2 step 2).
 */
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const PRISMA_VERSION = '6.19.0';

export const BASELINE_HEADER = `-- sotf:baseline
--
-- Legacy baseline (PLAN §6.2): the schema of the legacy API (sotf-mods-api@e0606b6), exactly as
-- Prisma 6.19 creates it. Generated, never edited by hand:
--
--   pnpm --filter @sotf/db db:baseline:generate
--   (= prisma@6.19.0 migrate diff --from-empty --to-schema-datamodel legacy/schema.prisma --script)
--
-- Production already has these tables: there the file is never executed, only recorded with
-- \`pnpm db:baseline --mark-applied\` after the guard has checked the live catalog against
-- src/guard/legacy-catalog.json. On an empty database (dev, CI, tests) it is applied as-is.
-- When the real production dump arrives, this file is regenerated from it (PLAN §6.2, step 2).

`;

function main(): void {
  const root = fileURLToPath(new URL('..', import.meta.url));
  const target = `${root}migrations/0000_legacy_baseline.sql`;
  const result = spawnSync(
    'npx',
    [
      '-y',
      `prisma@${PRISMA_VERSION}`,
      'migrate',
      'diff',
      '--from-empty',
      '--to-schema-datamodel',
      `${root}legacy/schema.prisma`,
      '--script',
    ],
    { encoding: 'utf8', env: { ...process.env, PRISMA_HIDE_UPDATE_MESSAGE: '1' } },
  );
  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.error?.message || 'prisma migrate diff failed\n');
    process.exit(1);
  }
  const content = `${BASELINE_HEADER}${result.stdout.trim()}\n`;
  if (process.argv.includes('--check')) {
    if (readFileSync(target, 'utf8') !== content) {
      process.stderr.write('0000_legacy_baseline.sql differs from the Prisma output\n');
      process.exit(1);
    }
    process.stdout.write('0000_legacy_baseline.sql is up to date\n');
    return;
  }
  writeFileSync(target, content);
  process.stdout.write(`written ${target}\n`);
}

if (import.meta.main) main();
