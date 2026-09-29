/**
 * `pnpm i18n:check`: every key present and valid in the 13 locales, and `.generated/` fresh
 * (rules in tools/validate.ts). Warnings never fail the check unless `--strict` is given.
 *
 *   node tools/cli/check.ts [--strict] [--verbose]
 */
import { parseArgs } from 'node:util';
import { LOCALES } from '../../src/locales.ts';
import { buildGenerated, diffGenerated } from '../compile.ts';
import { color, errorCount, loadValidated, main, PACKAGE_ROOT, printDiagnostics } from './shared.ts';

main(async () => {
  const { values } = parseArgs({
    options: { strict: { type: 'boolean', default: false }, verbose: { type: 'boolean', default: false } },
  });
  const validated = loadValidated();
  const { diagnostics, identical, messages } = validated;
  printDiagnostics(diagnostics);
  const errors = errorCount(diagnostics);
  const warnings = diagnostics.length - errors;

  let stale: string[] = [];
  if (errors === 0) {
    stale = diffGenerated(PACKAGE_ROOT, await buildGenerated(PACKAGE_ROOT, messages));
    if (stale.length > 0) {
      for (const path of stale.slice(0, 20)) process.stderr.write(`  ${path}\n`);
      process.stderr.write(
        `${color.red('error')} .generated/ is stale or in pseudo-locale mode (${stale.length} file(s)); run pnpm gen\n`,
      );
    }
  }

  if (identical.length > 0) {
    const detail = values.verbose ? `: ${identical.join(', ')}` : ' (--verbose lists them)';
    process.stdout.write(color.dim(`info  ${identical.length} translation(s) identical to English${detail}\n`));
  }
  const keys = messages.get('en')?.size ?? 0;
  const failed = errors > 0 || stale.length > 0 || (values.strict && warnings > 0);
  if (failed) {
    process.stderr.write(`${color.red('✘')} i18n:check failed: ${errors} error(s), ${warnings} warning(s)\n`);
    return 1;
  }
  process.stdout.write(
    `${color.green('✔')} i18n:check: ${keys} keys × ${LOCALES.length} locales complete${warnings ? `, ${warnings} warning(s)` : ''}\n`,
  );
  return 0;
});
