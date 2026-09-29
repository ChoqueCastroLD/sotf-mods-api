/**
 * Validation rules of `pnpm i18n:check` (PLAN §7.11: "sin fallback visible en inglés").
 *
 * Errors (fail the check)
 * - Structure: namespace naming, one file per locale, flat string JSON, no duplicate keys
 *   (see catalog.ts).
 * - Keys: `snake_case`, namespace prefix, ≤ 80 characters, unique across namespaces.
 * - Completeness: every locale has exactly the English key set (no missing, no stale keys).
 * - Syntax: every message is valid ICU (see icu.ts) and converts to the inlang format.
 * - Parity: every translation takes the same arguments, used the same way, as English, and
 *   `select` branches match English.
 * - Plurals: each plural provides every CLDR category the locale selects for integers 0–1000
 *   (e.g. `few` and `many` in ru/pl) and no category the locale never selects (e.g. `one` in ja).
 * - Hygiene: no empty messages, no leading/trailing whitespace, no control characters, no HTML.
 *
 * Warnings (reported, never fail)
 * - Three dots instead of the ellipsis character.
 * - A non-English message identical to English (often a forgotten translation; brand names and
 *   symbols are legitimately identical, so this is informational).
 */
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../src/locales.ts';
import type { Catalog, Diagnostic } from './catalog.ts';
import { keyPattern, MAX_KEY_LENGTH } from './catalog.ts';
import {
  type ArgumentKind,
  collectArguments,
  type IcuNode,
  IcuSyntaxError,
  PLURAL_CATEGORIES,
  type PluralCategory,
  parseIcu,
  textContent,
  walkIcu,
} from './icu.ts';
import { toInlangMessage } from './inlang.ts';

export interface ValidatedCatalog {
  diagnostics: Diagnostic[];
  /** Parsed messages per locale, keyed by message key, in namespace then file order. */
  messages: Map<Locale, Map<string, IcuNode[]>>;
  /** Non-English messages whose text equals English (`locale:key`). */
  identical: string[];
}

const pluralCache = new Map<string, { required: Set<string>; possible: Set<string> }>();

/**
 * Categories a locale can select (`possible`) and those it selects for at least one integer in
 * 0–1000 (`required`). Categories only reachable with huge or fractional numbers — `many` in
 * es/fr/it/pt (1 000 000) — are optional: `other` reads correctly for them in UI copy.
 */
export function pluralCategoriesFor(
  locale: Locale,
  ordinal: boolean,
): { required: Set<string>; possible: Set<string> } {
  const cacheKey = `${locale}|${ordinal}`;
  const hit = pluralCache.get(cacheKey);
  if (hit) return hit;
  const rules = new Intl.PluralRules(locale, { type: ordinal ? 'ordinal' : 'cardinal' });
  const possible = new Set<string>(rules.resolvedOptions().pluralCategories);
  const required = new Set<string>(['other']);
  for (let n = 0; n <= 1000; n += 1) required.add(rules.select(n));
  const result = { required, possible };
  pluralCache.set(cacheKey, result);
  return result;
}

function describeKinds(kinds: ReadonlySet<ArgumentKind> | undefined): string {
  return kinds ? [...kinds].sort().join('+') : 'unused';
}

function selectShapes(nodes: readonly IcuNode[]): Map<string, string> {
  const shapes = new Map<string, string>();
  walkIcu(nodes, (node) => {
    if (node.type === 'select') {
      const keys = node.options.map((option) => option.key).sort();
      const previous = shapes.get(node.name);
      shapes.set(node.name, previous ? `${previous}|${keys.join(',')}` : keys.join(','));
    }
  });
  return shapes;
}

/** C0 controls except line feed, and DEL. */
function hasControlCharacter(value: string): boolean {
  for (let index = 0; index < value.length; index += 1) {
    const code = value.charCodeAt(index);
    if ((code < 0x20 && code !== 0x0a) || code === 0x7f) return true;
  }
  return false;
}

function hygiene(value: string): string[] {
  const problems: string[] = [];
  if (value.length === 0) problems.push('Empty message');
  else if (value !== value.trim()) problems.push('Leading or trailing whitespace');
  // Allow ordinary text whitespace only; tabs, CR and other control characters are mistakes.
  if (hasControlCharacter(value)) problems.push('Control character (tab, CR…) in message');
  if (/<\/?[A-Za-z!][^>]*>/.test(value)) {
    problems.push('HTML markup is not allowed in messages; compose markup in the component');
  }
  return problems;
}

export function validateCatalog(catalog: Catalog): ValidatedCatalog {
  const diagnostics: Diagnostic[] = [...catalog.diagnostics];
  const messages = new Map<Locale, Map<string, IcuNode[]>>(LOCALES.map((locale) => [locale, new Map()]));
  const identical: string[] = [];
  const keyOwner = new Map<string, string>();

  for (const namespace of catalog.namespaces) {
    const source = namespace.files.get(DEFAULT_LOCALE);
    if (!source) continue;
    const pattern = keyPattern(namespace.name);

    for (const key of source.messages.keys()) {
      if (!pattern.test(key)) {
        diagnostics.push({
          level: 'error',
          file: source.file,
          key,
          message: `Keys are snake_case and start with "${namespace.prefix}_"`,
        });
      }
      if (key.length > MAX_KEY_LENGTH) {
        diagnostics.push({
          level: 'error',
          file: source.file,
          key,
          message: `Key longer than ${MAX_KEY_LENGTH} characters`,
        });
      }
      const owner = keyOwner.get(key);
      if (owner) {
        diagnostics.push({ level: 'error', file: source.file, key, message: `Key already defined in ${owner}` });
      } else keyOwner.set(key, source.file);
    }

    // Parse English first: it is the reference for every translation.
    const sourceParsed = new Map<string, IcuNode[]>();
    for (const locale of LOCALES) {
      const file = namespace.files.get(locale);
      if (!file) continue;
      const parsedForLocale = messages.get(locale) as Map<string, IcuNode[]>;

      for (const key of source.messages.keys()) {
        if (!file.messages.has(key)) {
          diagnostics.push({ level: 'error', file: file.file, key, message: 'Missing translation' });
        }
      }
      for (const [key, value] of file.messages) {
        if (!source.messages.has(key)) {
          if (locale !== DEFAULT_LOCALE) {
            diagnostics.push({
              level: 'error',
              file: file.file,
              key,
              message: 'Key does not exist in English (stale or misspelled)',
            });
          }
          continue;
        }
        for (const problem of hygiene(value))
          diagnostics.push({ level: 'error', file: file.file, key, message: problem });
        if (value.includes('...')) {
          diagnostics.push({ level: 'warning', file: file.file, key, message: 'Use the ellipsis character "…"' });
        }

        let nodes: IcuNode[];
        try {
          nodes = parseIcu(value);
          toInlangMessage(nodes);
        } catch (error) {
          const message = error instanceof IcuSyntaxError || error instanceof Error ? error.message : String(error);
          diagnostics.push({ level: 'error', file: file.file, key, message: `Invalid ICU message: ${message}` });
          continue;
        }
        parsedForLocale.set(key, nodes);

        // Plural categories for this locale.
        walkIcu(nodes, (node) => {
          if (node.type !== 'plural') return;
          const { required, possible } = pluralCategoriesFor(locale, node.ordinal);
          const present = new Set(node.options.map((option) => option.key).filter((k) => !k.startsWith('=')));
          const missing = PLURAL_CATEGORIES.filter((category) => required.has(category) && !present.has(category));
          const unreachable = [...present].filter((category) => !possible.has(category as PluralCategory));
          const kind = node.ordinal ? 'selectordinal' : 'plural';
          if (missing.length > 0) {
            diagnostics.push({
              level: 'error',
              file: file.file,
              key,
              message: `${kind} "${node.name}" is missing the ${locale} categories: ${missing.join(', ')}`,
            });
          }
          if (unreachable.length > 0) {
            diagnostics.push({
              level: 'error',
              file: file.file,
              key,
              message: `${kind} "${node.name}" has categories ${locale} never selects: ${unreachable.join(', ')}`,
            });
          }
        });

        if (locale === DEFAULT_LOCALE) {
          sourceParsed.set(key, nodes);
          continue;
        }
        const reference = sourceParsed.get(key);
        if (!reference) continue;
        const expected = collectArguments(reference);
        const actual = collectArguments(nodes);
        for (const name of new Set([...expected.keys(), ...actual.keys()])) {
          const want = describeKinds(expected.get(name));
          const got = describeKinds(actual.get(name));
          if (want !== got) {
            diagnostics.push({
              level: 'error',
              file: file.file,
              key,
              message: `Argument "${name}" is ${got} here but ${want} in English`,
            });
          }
        }
        const expectedSelects = selectShapes(reference);
        const actualSelects = selectShapes(nodes);
        for (const [name, shape] of expectedSelects) {
          const got = actualSelects.get(name);
          if (got !== undefined && got !== shape) {
            diagnostics.push({
              level: 'error',
              file: file.file,
              key,
              message: `select "${name}" must have the same options as English (${shape.replaceAll('|', ' / ')})`,
            });
          }
        }
        if (textContent(nodes) === textContent(reference) && /\p{L}/u.test(textContent(reference))) {
          identical.push(`${locale}:${key}`);
        }
      }
    }
  }

  const order = { error: 0, warning: 1 } as const;
  diagnostics.sort(
    (a, b) =>
      order[a.level] - order[b.level] || a.file.localeCompare(b.file) || (a.key ?? '').localeCompare(b.key ?? ''),
  );
  return { diagnostics, messages, identical };
}

/** Formats diagnostics for the terminal, one per line. */
export function formatDiagnostic(diagnostic: Diagnostic): string {
  const where = diagnostic.key ? `${diagnostic.file} › ${diagnostic.key}` : diagnostic.file;
  return `${diagnostic.level === 'error' ? 'error' : 'warn '} ${where}: ${diagnostic.message}`;
}
