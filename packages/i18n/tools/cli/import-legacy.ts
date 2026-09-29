/**
 * Re-imports the legacy translation files into `legacy/<locale>.json` (glossary; PLAN §7.11).
 *
 *   node tools/cli/import-legacy.ts --from <sotf-mods-frontend checkout> [--check]
 *
 * The legacy repository is only read. `--check` compares instead of writing.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { LEGACY_FILE_CODES, readLegacyFile, serializeLegacy } from '../legacy.ts';
import { color, main, PACKAGE_ROOT } from './shared.ts';

main(async () => {
  const { values } = parseArgs({
    options: { from: { type: 'string' }, check: { type: 'boolean', default: false } },
  });
  if (!values.from) throw new Error('usage: import-legacy.ts --from <path to sotf-mods-frontend> [--check]');
  const sourceDir = join(resolve(values.from), 'src', 'translations');
  if (!existsSync(sourceDir)) throw new Error(`${sourceDir} does not exist`);
  const outDir = join(PACKAGE_ROOT, 'legacy');
  mkdirSync(outDir, { recursive: true });
  let differences = 0;
  for (const code of LEGACY_FILE_CODES) {
    const file = readLegacyFile(join(sourceDir, `${code}.translations.ts`), code);
    const target = join(outDir, `${file.locale}.json`);
    const content = serializeLegacy(file.entries);
    const current = existsSync(target) ? readFileSync(target, 'utf8') : null;
    if (current === content) continue;
    differences += 1;
    if (values.check) process.stderr.write(`  legacy/${file.locale}.json differs from ${code}.translations.ts\n`);
    else writeFileSync(target, content);
  }
  if (values.check && differences > 0) {
    process.stderr.write(`${color.red('error')} legacy glossary is out of date (${differences} file(s))\n`);
    return 1;
  }
  process.stdout.write(
    `${color.green('ok')} legacy glossary: ${LEGACY_FILE_CODES.length} files${values.check ? ' match' : `, ${differences} updated`}\n`,
  );
  return 0;
});
