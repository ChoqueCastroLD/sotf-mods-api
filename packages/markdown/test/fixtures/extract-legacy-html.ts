/**
 * Regenerates `legacy-html-descriptions.json`: every mod description of the public API snapshot
 * of 2026-09-29 that contains raw HTML (`<tag`), i.e. what backfill B9 renders with the
 * `legacyHtml` profile. Public data only (no secrets); reads a local copy of the snapshot, never
 * production.
 *
 *   node test/fixtures/extract-legacy-html.ts [snapshotDir]
 *
 * Default snapshot dir: `tooling/migration/snapshot/public-api-2026-09-29` (WP-14), falling back
 * to the research cache `/root/sotf-mods/.research-cache/public-api-2026-09-29`.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const candidates = [
  process.argv[2],
  resolve(here, '../../../../tooling/migration/snapshot/public-api-2026-09-29'),
  '/root/sotf-mods/.research-cache/public-api-2026-09-29',
].filter((dir): dir is string => typeof dir === 'string');
const snapshot = candidates.find((dir) => existsSync(join(dir, 'mod')));
if (!snapshot) {
  process.stderr.write(`No snapshot found (tried: ${candidates.join(', ')})\n`);
  process.exit(1);
}

interface LegacyMod {
  id: number;
  slug: string;
  type: string | null;
  description: string | null;
  user: { slug: string };
}

const RAW_HTML = /<\s*\/?\s*[a-zA-Z]/;
const rows = readdirSync(join(snapshot, 'mod'))
  .filter((file) => file.endsWith('.json'))
  .map((file) => (JSON.parse(readFileSync(join(snapshot, 'mod', file), 'utf8')) as { data: LegacyMod }).data)
  .filter((mod) => typeof mod.description === 'string' && RAW_HTML.test(mod.description))
  .sort((a, b) => a.id - b.id)
  .map((mod) => ({ id: mod.id, author: mod.user.slug, slug: mod.slug, description: mod.description }));

const target = join(here, 'legacy-html-descriptions.json');
writeFileSync(target, `${JSON.stringify(rows, null, 2)}\n`);
process.stdout.write(`${rows.length} descriptions with raw HTML → ${target}\n`);
