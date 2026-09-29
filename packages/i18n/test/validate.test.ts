import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { LOCALES, type Locale } from '../src/locales.ts';
import { keyPattern, loadCatalog, namespacePrefix, parseFlatJson } from '../tools/catalog.ts';
import { pluralCategoriesFor, validateCatalog } from '../tools/validate.ts';

const roots: string[] = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

type Files = Partial<Record<Locale, string | Record<string, string>>>;

/** Writes a temporary catalog; locales not listed get a copy of English. */
function catalog(namespaces: Record<string, Files>): string {
  const root = mkdtempSync(join(tmpdir(), 'sotf-i18n-catalog-'));
  roots.push(root);
  for (const [namespace, files] of Object.entries(namespaces)) {
    const dir = join(root, 'messages', namespace);
    mkdirSync(dir, { recursive: true });
    for (const locale of LOCALES) {
      const content = files[locale] ?? files.en;
      if (content === undefined) continue;
      writeFileSync(join(dir, `${locale}.json`), typeof content === 'string' ? content : JSON.stringify(content));
    }
  }
  return root;
}

function errors(root: string): string[] {
  return validateCatalog(loadCatalog(root))
    .diagnostics.filter((d) => d.level === 'error')
    .map((d) => `${d.file}${d.key ? ` ${d.key}` : ''}: ${d.message}`);
}

describe('catalog structure', () => {
  it('accepts a complete catalog', () => {
    const root = catalog({ common: { en: { common_hello: 'Hello {name}' }, es: { common_hello: 'Hola {name}' } } });
    const result = validateCatalog(loadCatalog(root));
    expect(result.diagnostics).toEqual([]);
    expect(result.messages.get('es')?.get('common_hello')).toHaveLength(2);
    expect(result.identical).toHaveLength(LOCALES.length - 2);
  });

  it('reports missing locale files, stray files and bad namespace names', () => {
    const root = catalog({ common: { en: { common_a: 'A' } }, Bad_Name: { en: {} } });
    rmSync(join(root, 'messages', 'common', 'ja.json'));
    writeFileSync(join(root, 'messages', 'common', 'jp.json'), '{}');
    writeFileSync(join(root, 'messages', 'stray.json'), '{}');
    const found = errors(root);
    expect(found).toContain('messages/common/ja.json: Missing locale file');
    expect(found.some((e) => e.startsWith('messages/common/jp.json: Unexpected file'))).toBe(true);
    expect(found.some((e) => e.startsWith('messages/Bad_Name: Namespace names'))).toBe(true);
    expect(found.some((e) => e.startsWith('messages/stray.json: Only namespace directories'))).toBe(true);
  });

  it('reports invalid JSON, non-string values and duplicate keys', () => {
    const root = catalog({
      common: {
        en: '{ "common_a": "A", "common_a": "again" }',
        es: '{ "common_a": 1 }',
        de: '{ "common_a": "A", }',
      },
    });
    const found = errors(root);
    expect(found).toContain('messages/common/en.json common_a: Duplicate key');
    expect(found.some((e) => e.startsWith('messages/common/es.json: Invalid JSON: Every value must be a string'))).toBe(
      true,
    );
    expect(found.some((e) => e.startsWith('messages/common/de.json: Invalid JSON'))).toBe(true);
  });
});

describe('keys and completeness', () => {
  it('enforces the namespace prefix and snake_case', () => {
    const root = catalog({
      'emails-auth': { en: { emails_auth_ok: 'x', emailsAuthBad: 'x', common_wrong: 'x', emails_auth__x: 'x' } },
    });
    const found = errors(root);
    expect(found.filter((e) => e.includes('start with "emails_auth_"'))).toHaveLength(3);
    expect(keyPattern('emails-auth').test('emails_auth_reset_link')).toBe(true);
    expect(namespacePrefix('emails-notify')).toBe('emails_notify');
  });

  it('reports missing and stale translations', () => {
    const root = catalog({
      common: { en: { common_a: 'A', common_b: 'B' }, fr: { common_a: 'A', common_c: 'C' } },
    });
    const found = errors(root);
    expect(found).toContain('messages/common/fr.json common_b: Missing translation');
    expect(found).toContain('messages/common/fr.json common_c: Key does not exist in English (stale or misspelled)');
  });

  it('reports a key defined in two namespaces', () => {
    // Only reachable when a namespace name is a prefix of another's key space.
    const root = catalog({ a: { en: { a_b_c: 'x' } }, 'a-b': { en: { a_b_c: 'y' } } });
    expect(errors(root).some((e) => e.includes('Key already defined in'))).toBe(true);
  });
});

describe('messages', () => {
  it('reports ICU syntax errors and hygiene problems', () => {
    const root = catalog({
      common: {
        en: {
          common_syntax: 'Hello {name',
          common_space: ' padded ',
          common_empty: '',
          common_html: 'Click <b>here</b>',
          common_tab: 'a\tb',
        },
      },
    });
    const found = errors(root).filter((e) => e.startsWith('messages/common/en.json'));
    expect(found.some((e) => e.includes('common_syntax: Invalid ICU message'))).toBe(true);
    expect(found).toContain('messages/common/en.json common_space: Leading or trailing whitespace');
    expect(found).toContain('messages/common/en.json common_empty: Empty message');
    expect(found.some((e) => e.includes('common_html: HTML markup'))).toBe(true);
    expect(found.some((e) => e.includes('common_tab: Control character'))).toBe(true);
  });

  it('warns about three dots', () => {
    const root = catalog({ common: { en: { common_wait: 'Loading...' } } });
    const warnings = validateCatalog(loadCatalog(root)).diagnostics.filter((d) => d.level === 'warning');
    expect(warnings).toHaveLength(LOCALES.length);
  });

  it('requires the same arguments, used the same way, in every locale', () => {
    const root = catalog({
      common: {
        en: { common_a: 'Hi {name}', common_b: '{n, number} mods', common_c: '{kind, select, mod {M} other {O}}' },
        es: { common_a: 'Hola {nombre}', common_b: '{n} mods', common_c: '{kind, select, build {B} other {O}}' },
      },
    });
    const found = errors(root).filter((e) => e.startsWith('messages/common/es.json'));
    expect(found).toContain('messages/common/es.json common_a: Argument "name" is unused here but plain in English');
    expect(found).toContain('messages/common/es.json common_a: Argument "nombre" is plain here but unused in English');
    expect(found).toContain('messages/common/es.json common_b: Argument "n" is plain here but number in English');
    expect(found.some((e) => e.includes('common_c: select "kind" must have the same options'))).toBe(true);
  });

  it('checks plural categories per locale', () => {
    const root = catalog({
      common: {
        en: { common_mods: '{n, plural, one {# mod} other {# mods}}' },
        ru: { common_mods: '{n, plural, one {# мод} other {# модов}}' },
        ja: { common_mods: '{n, plural, one {# 件} other {# 件}}' },
        zh: { common_mods: '{n, plural, other {# 个}}' },
        pl: { common_mods: '{n, plural, one {# mod} few {# mody} many {# modów} other {# moda}}' },
        es: { common_mods: '{n, plural, one {# mod} other {# mods}}' },
      },
    });
    const found = errors(root);
    expect(found).toContain('messages/common/ru.json common_mods: plural "n" is missing the ru categories: few, many');
    expect(found).toContain('messages/common/ja.json common_mods: plural "n" has categories ja never selects: one');
    expect(found.filter((e) => /\/(zh|pl|es|en)\.json/.test(e))).toEqual([]);
  });

  it('derives required categories from CLDR, ignoring those only reachable by huge numbers', () => {
    expect([...pluralCategoriesFor('ru', false).required].sort()).toEqual(['few', 'many', 'one', 'other']);
    expect([...pluralCategoriesFor('es', false).required].sort()).toEqual(['one', 'other']);
    expect(pluralCategoriesFor('es', false).possible.has('many')).toBe(true);
    expect([...pluralCategoriesFor('ja', false).required]).toEqual(['other']);
    expect([...pluralCategoriesFor('en', true).required].sort()).toEqual(['few', 'one', 'other', 'two']);
  });
});

describe('parseFlatJson', () => {
  it('keeps order, reports duplicates and decodes escapes', () => {
    expect(parseFlatJson('﻿{ "b": "1", "a": "\\u00e9\\"", "b": "2" }')).toEqual({
      entries: [
        ['b', '1'],
        ['a', 'é"'],
      ],
      duplicates: ['b'],
    });
    expect(parseFlatJson('{}')).toEqual({ entries: [], duplicates: [] });
    expect(() => parseFlatJson('[]')).toThrow(SyntaxError);
    expect(() => parseFlatJson('{"a": {"b": "c"}}')).toThrow(/must be a string/);
  });
});
