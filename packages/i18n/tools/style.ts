/**
 * House-style checks of `pnpm i18n:check` (warnings, never errors; `--strict` turns them into a
 * failure). The rules are the ones of `messages/README.md` («Glossary and house style»).
 *
 * - French typography (always on): a non-breaking space (U+00A0 or U+202F) before `: ; ? !` and
 *   inside `« »`; a plain space there is reported.
 * - Glossary (`--glossary`): a translation of an English message that uses a brand term of
 *   PLAN §3.8 (`common_term_*`) should use that locale's term. Terms are matched by stem so that
 *   inflected forms (ru «рюкзаке», pl «Plecaku») count; the check is a hint for reviewers.
 */
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../src/locales.ts';
import type { Catalog, Diagnostic } from './catalog.ts';
import { parseIcu, textContent } from './icu.ts';

const NBSP = '[\\u00A0\\u202F]';
const BRAND = 'SOTF Mods';

/** Problems of French typography in the literal text of a message. */
export function frenchTypographyProblems(text: string): string[] {
  const problems: string[] = [];
  if (/ [:;?!]/.test(text)) problems.push('French: use a non-breaking space (U+00A0) before : ; ? !');
  if (/[^\s\u00A0\u202F][:;?!](?:\s|$)/.test(text) && !/https?:|\d:\d/.test(text)) {
    problems.push('French: missing non-breaking space before : ; ? !');
  }
  if (/« /.test(text) || / »/.test(text)) problems.push('French: use non-breaking spaces inside « »');
  else if (new RegExp(`«(?!${NBSP})|(?<!${NBSP})»`).test(text))
    problems.push('French: missing non-breaking space inside « »');
  return problems;
}

function literal(value: string): string | undefined {
  try {
    return textContent(parseIcu(value));
  } catch {
    return undefined;
  }
}

/** Warnings of the French typography rule for the `fr` files of the catalog. */
export function frenchTypographyDiagnostics(catalog: Catalog): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const namespace of catalog.namespaces) {
    const file = namespace.files.get('fr');
    if (!file) continue;
    for (const [key, value] of file.messages) {
      const text = literal(value);
      if (text === undefined) continue;
      for (const message of frenchTypographyProblems(text))
        diagnostics.push({ level: 'warning', file: file.file, key, message });
    }
  }
  return diagnostics;
}

/** Locales whose words inflect: their terms are matched by stem. */
const INFLECTING: ReadonlySet<Locale> = new Set(['de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr']);

/**
 * Lower-cased stem of a term word. Inflecting locales drop the ending (plural and case suffixes:
 * ru «моды» → «мод», tr «Modlar» → «mod», pl «Plecak» → «plec»): short words keep 3 letters,
 * longer ones lose 2–3.
 */
export function termStem(word: string, locale: Locale): string {
  const lower = word.toLocaleLowerCase(locale);
  if (!INFLECTING.has(locale) || lower.length <= 3) return lower;
  const keep = lower.length <= 6 ? Math.max(3, lower.length - 3) : lower.length - 2;
  return lower.slice(0, keep);
}

/**
 * English words with two senses in the catalog: «builds» are player builds (BuildShare) and also
 * game builds (the Sons of the Forest patch, «сборка игры»), so English alone cannot tell which
 * term a translation needs.
 */
const AMBIGUOUS_TERMS: ReadonlySet<string> = new Set(['common_term_builds']);

/**
 * Terms that are names of places of the site (matched case-sensitively in English: «Signals» the
 * inbox, not «signals» in prose). The others are common nouns matched in any case.
 */
const PROPER_TERMS: ReadonlySet<string> = new Set([
  'common_term_basecamp',
  'common_term_ranger_station',
  'common_term_signals',
  'common_term_backpack',
  'common_term_field_notes',
  'common_term_field_reports',
  'common_term_patch_radar',
]);

export interface GlossaryTerm {
  key: string;
  english: RegExp;
  /** Stem that a translation must contain, per locale. */
  stems: Map<Locale, string>;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** The brand terms of `common_term_*` (hints excluded). */
export function glossaryTerms(catalog: Catalog): GlossaryTerm[] {
  const common = catalog.namespaces.find((namespace) => namespace.name === 'common');
  const english = common?.files.get(DEFAULT_LOCALE);
  if (!common || !english) return [];
  const terms: GlossaryTerm[] = [];
  for (const [key, value] of english.messages) {
    if (!key.startsWith('common_term_') || key.endsWith('_hint') || AMBIGUOUS_TERMS.has(key)) continue;
    const stems = new Map<Locale, string>();
    for (const locale of LOCALES) {
      if (locale === DEFAULT_LOCALE) continue;
      const translated = common.files.get(locale)?.messages.get(key);
      const first = translated?.split(/\s+/)[0];
      if (first) stems.set(locale, termStem(first, locale));
    }
    const flags = PROPER_TERMS.has(key) ? '' : 'i';
    terms.push({ key, english: new RegExp(`\\b${escapeRegExp(value)}\\b`, flags), stems });
  }
  return terms;
}

/** Glossary warnings: translations of term-bearing English messages without the locale's term. */
export function glossaryDiagnostics(catalog: Catalog): Diagnostic[] {
  const terms = glossaryTerms(catalog);
  const diagnostics: Diagnostic[] = [];
  for (const namespace of catalog.namespaces) {
    const source = namespace.files.get(DEFAULT_LOCALE);
    if (!source) continue;
    for (const [key, value] of source.messages) {
      if (key.startsWith('common_term_')) continue;
      // The brand name «SOTF Mods» is never translated: it does not use the term.
      const englishText = literal(value)?.replaceAll(BRAND, '');
      if (englishText === undefined) continue;
      const used = terms.filter((term) => term.english.test(englishText));
      if (used.length === 0) continue;
      for (const locale of LOCALES) {
        if (locale === DEFAULT_LOCALE) continue;
        const file = namespace.files.get(locale);
        const translated = file?.messages.get(key);
        if (!file || translated === undefined) continue;
        const text = literal(translated)?.replaceAll(BRAND, '').toLocaleLowerCase(locale);
        if (text === undefined) continue;
        for (const term of used) {
          const stem = term.stems.get(locale);
          if (stem && !text.includes(stem)) {
            diagnostics.push({
              level: 'warning',
              file: file.file,
              key,
              message: `Glossary: English uses "${englishText.match(term.english)?.[0]}", expected the ${locale} term "${stem}…" (${term.key})`,
            });
          }
        }
      }
    }
  }
  return diagnostics;
}
