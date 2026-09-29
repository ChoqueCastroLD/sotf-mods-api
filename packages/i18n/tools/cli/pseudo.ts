/**
 * `pnpm i18n:pseudo`: regenerates `.generated/` with one locale pseudo-localized (see
 * tools/pseudo.ts), to run the UI and spot hard-coded text and overflow (PLAN §7.11, WP-94).
 *
 *   node tools/cli/pseudo.ts [--locale en] [--expansion 0.35]
 *
 * This is a temporary working-tree state: `pnpm i18n:check` and CI fail while it is active.
 * Run `pnpm gen` to go back to the real messages.
 */
import { parseArgs } from 'node:util';
import { isLocale, type Locale } from '../../src/locales.ts';
import { buildGenerated, writeGenerated } from '../compile.ts';
import type { IcuNode } from '../icu.ts';
import { DEFAULT_EXPANSION, pseudoLocalize } from '../pseudo.ts';
import { color, errorCount, loadValidated, main, PACKAGE_ROOT, printDiagnostics } from './shared.ts';

main(async () => {
  const { values } = parseArgs({
    options: {
      locale: { type: 'string', default: 'en' },
      expansion: { type: 'string', default: String(DEFAULT_EXPANSION) },
    },
  });
  const locale = values.locale;
  const expansion = Number(values.expansion);
  if (!isLocale(locale)) throw new Error(`--locale must be one of the supported locales, got "${locale}"`);
  if (!Number.isFinite(expansion) || expansion < 0 || expansion > 2)
    throw new Error('--expansion must be between 0 and 2');

  const validated = loadValidated();
  if (errorCount(validated.diagnostics) > 0) {
    printDiagnostics(validated.diagnostics.filter((d) => d.level === 'error'));
    return 1;
  }
  const messages = new Map<Locale, ReadonlyMap<string, readonly IcuNode[]>>(validated.messages);
  const target = validated.messages.get(locale) ?? new Map<string, IcuNode[]>();
  messages.set(locale, new Map([...target].map(([key, nodes]) => [key, pseudoLocalize(nodes, expansion)])));
  const changed = writeGenerated(PACKAGE_ROOT, await buildGenerated(PACKAGE_ROOT, messages));
  process.stdout.write(
    `${color.yellow('pseudo')} ${target.size} "${locale}" messages pseudo-localized (+${Math.round(expansion * 100)} %), ${changed} file(s) changed.\n` +
      `       Text without ⟦…⟧ in the UI is hard-coded. Run ${color.bold('pnpm gen')} to restore.\n`,
  );
  return 0;
});
