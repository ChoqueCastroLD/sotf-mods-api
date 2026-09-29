/**
 * `pnpm gen` (package script `gen`): validates the catalog and regenerates `.generated/`.
 *
 *   node tools/cli/gen.ts           # write
 *   node tools/cli/gen.ts --check   # exit 1 if `.generated/` is stale (nothing is written)
 */
import { parseArgs } from 'node:util';
import { buildGenerated, diffGenerated, writeGenerated } from '../compile.ts';
import { color, errorCount, loadValidated, main, PACKAGE_ROOT, printDiagnostics } from './shared.ts';

main(async () => {
  const { values } = parseArgs({ options: { check: { type: 'boolean', default: false } } });
  const validated = loadValidated();
  const errors = errorCount(validated.diagnostics);
  if (errors > 0) {
    printDiagnostics(validated.diagnostics.filter((d) => d.level === 'error'));
    process.stderr.write(
      `${color.red('error')} i18n gen: ${errors} catalog error(s); fix them first (pnpm i18n:check)\n`,
    );
    return 1;
  }
  const files = await buildGenerated(PACKAGE_ROOT, validated.messages);
  if (values.check) {
    const stale = diffGenerated(PACKAGE_ROOT, files);
    if (stale.length > 0) {
      for (const path of stale.slice(0, 20)) process.stderr.write(`  ${path}\n`);
      if (stale.length > 20) process.stderr.write(`  … and ${stale.length - 20} more\n`);
      process.stderr.write(`${color.red('error')} i18n: .generated/ is stale; run pnpm gen\n`);
      return 1;
    }
    process.stdout.write(`${color.green('ok')} i18n: .generated/ is up to date (${files.size} files)\n`);
    return 0;
  }
  const changed = writeGenerated(PACKAGE_ROOT, files);
  process.stdout.write(
    `${color.green('ok')} i18n: ${validated.messages.get('en')?.size ?? 0} messages × 13 locales → .generated/ (${changed} file(s) changed)\n`,
  );
  return 0;
});
