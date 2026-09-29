/**
 * Looks a term up in the legacy glossary and in the current v2 messages, across all locales, so a
 * translation reuses the words the community already knows (PLAN §7.11).
 *
 *   node tools/cli/glossary.ts <term> [--limit 10]
 *
 * Matches English texts and keys case-insensitively, then prints every locale's version.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { LOCALES, type Locale } from '../../src/locales.ts';
import { loadCatalog } from '../catalog.ts';
import { color, main, PACKAGE_ROOT } from './shared.ts';

function readLegacy(locale: Locale): Record<string, string> {
  const path = join(PACKAGE_ROOT, 'legacy', `${locale}.json`);
  return existsSync(path) ? (JSON.parse(readFileSync(path, 'utf8')) as Record<string, string>) : {};
}

main(async () => {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: { limit: { type: 'string', default: '10' } },
  });
  const term = positionals.join(' ').trim().toLowerCase();
  if (!term) throw new Error('usage: glossary.ts <term> [--limit 10]');
  const limit = Math.max(1, Number(values.limit) || 10);

  const legacy = new Map(LOCALES.map((locale) => [locale, readLegacy(locale)] as const));
  const sources: Array<{
    label: string;
    lookup: (locale: Locale) => string | undefined;
    english: string;
    key: string;
  }> = [];
  for (const [key, english] of Object.entries(legacy.get('en') ?? {})) {
    sources.push({ label: 'legacy', key, english, lookup: (locale) => legacy.get(locale)?.[key] });
  }
  for (const namespace of loadCatalog(PACKAGE_ROOT).namespaces) {
    for (const [key, english] of namespace.files.get('en')?.messages ?? []) {
      sources.push({ label: 'v2', key, english, lookup: (locale) => namespace.files.get(locale)?.messages.get(key) });
    }
  }
  const hits = sources.filter((s) => s.english.toLowerCase().includes(term) || s.key.toLowerCase().includes(term));
  for (const hit of hits.slice(0, limit)) {
    process.stdout.write(`\n${color.bold(`${hit.label} ${hit.key}`)}\n`);
    for (const locale of LOCALES) {
      const text = hit.lookup(locale);
      process.stdout.write(`  ${locale.padEnd(3)} ${text ?? color.dim('—')}\n`);
    }
  }
  process.stdout.write(`\n${hits.length} match(es)${hits.length > limit ? `, showing ${limit}` : ''}\n`);
  return 0;
});
