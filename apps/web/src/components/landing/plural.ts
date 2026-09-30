/**
 * Plural templates for text the browser completes (the personal block's «12 mods»): the server
 * renders the Paraglide message once per CLDR category of the page locale, with a sample count,
 * and turns the formatted sample into `#`. The script then picks the form with
 * `Intl.PluralRules(lang).select(n)` — correct agreement (ru/pl) without shipping the catalogue.
 */
import { formatNumber, type Locale, toIntlLocale } from '@sotf/i18n';

export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>>;

/** Sample integers covering every category used for 0–1000 in the 13 locales. */
const SAMPLES = [0, 1, 2, 3, 5, 11, 21, 22, 25, 100, 101, 102, 105, 111, 1000] as const;

export function pluralTemplates(locale: Locale, render: (count: number) => string): PluralForms {
  const rules = new Intl.PluralRules(toIntlLocale(locale));
  const forms: PluralForms = {};
  for (const sample of SAMPLES) {
    const category = rules.select(sample);
    if (forms[category] !== undefined) continue;
    forms[category] = render(sample).replace(formatNumber(locale, sample), '#');
  }
  return forms;
}
