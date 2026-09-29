/**
 * Generates migrations/0025_seed_taxonomy{,.down}.sql from src/seed/taxonomy.ts.
 *
 *   node scripts/gen-seed-sql.ts           write the files
 *   node scripts/gen-seed-sql.ts --check   exit 1 when they are stale
 *
 * Run through `pnpm gen` (the package `gen` script).
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { renderTaxonomyDown, renderTaxonomyUp, TAXONOMY_MIGRATION } from '../src/seed/sql.ts';

const dir = fileURLToPath(new URL('../migrations/', import.meta.url));
const files = [
  { path: `${dir}${TAXONOMY_MIGRATION}.sql`, content: renderTaxonomyUp() },
  { path: `${dir}${TAXONOMY_MIGRATION}.down.sql`, content: renderTaxonomyDown() },
];

const check = process.argv.includes('--check');
let stale = 0;
for (const file of files) {
  const current = existsSync(file.path) ? readFileSync(file.path, 'utf8') : null;
  if (current === file.content) continue;
  if (check) {
    stale += 1;
    process.stderr.write(`stale: ${file.path}\n`);
  } else {
    writeFileSync(file.path, file.content);
    process.stdout.write(`written ${file.path}\n`);
  }
}
if (stale > 0) {
  process.stderr.write(
    'run `pnpm --filter @sotf/db gen` (and never regenerate a migration already applied in production)\n',
  );
  process.exit(1);
}
