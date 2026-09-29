/**
 * @sotf/contracts is the source of truth for API error codes and the locale list (PLAN §5.1, §4.1);
 * @sotf/i18n must translate every code and use the same URL locales and BCP-47 tags.
 */
import { LOCALES as CONTRACT_LOCALES, LOCALE_BCP47 } from '@sotf/contracts/common';
import { ERROR_CODES } from '@sotf/contracts/error-codes';
import { describe, expect, it } from 'vitest';
import { describeProblem, isProblemCode, PROBLEM_CODES } from '../src/errors.ts';
import { LOCALES, toHreflang } from '../src/locales.ts';

describe('@sotf/contracts ↔ @sotf/i18n', () => {
  it('translates exactly the error codes of the contracts', () => {
    for (const code of ERROR_CODES) expect(isProblemCode(code), code).toBe(true);
    expect([...PROBLEM_CODES].sort()).toEqual([...ERROR_CODES].sort());
  });

  it('gives every contract code its own text (never the generic fallback)', () => {
    const generic = describeProblem('SOMETHING_NEW', { locale: 'en' }).title;
    for (const code of ERROR_CODES) expect(describeProblem(code, { locale: 'en' }).title, code).not.toBe(generic);
  });

  it('uses the same locales and BCP-47 tags', () => {
    expect([...LOCALES].sort()).toEqual([...CONTRACT_LOCALES].sort());
    for (const locale of LOCALES) expect(toHreflang(locale), locale).toBe(LOCALE_BCP47[locale]);
  });
});
