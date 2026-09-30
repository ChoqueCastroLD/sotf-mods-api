import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { LOCALES, type Locale } from '../src/locales.ts';
import { loadCatalog } from '../tools/catalog.ts';
import { frenchTypographyProblems, glossaryDiagnostics, termStem } from '../tools/style.ts';
import { validateCatalog } from '../tools/validate.ts';

const roots: string[] = [];
afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

type Files = Partial<Record<Locale, Record<string, string>>>;

function catalog(namespaces: Record<string, Files>): string {
  const root = mkdtempSync(join(tmpdir(), 'sotf-i18n-style-'));
  roots.push(root);
  for (const [namespace, files] of Object.entries(namespaces)) {
    const dir = join(root, 'messages', namespace);
    mkdirSync(dir, { recursive: true });
    for (const locale of LOCALES) {
      const content = files[locale] ?? files.en;
      if (content) writeFileSync(join(dir, `${locale}.json`), JSON.stringify(content));
    }
  }
  return root;
}

describe('French typography', () => {
  it('accepts non-breaking spaces before : ; ? ! and inside « »', () => {
    expect(frenchTypographyProblems('Erreur : réessayez !')).toEqual([]);
    expect(frenchTypographyProblems('Voir « Mods » ?')).toEqual([]);
    expect(frenchTypographyProblems('Ouvrir https://sotf-mods.com à 10:30')).toEqual([]);
  });

  it('reports plain or missing spaces', () => {
    expect(frenchTypographyProblems('Erreur : réessayez')).toEqual([
      'French: use a non-breaking space (U+00A0) before : ; ? !',
    ]);
    expect(frenchTypographyProblems('Erreur: réessayez')).toEqual([
      'French: missing non-breaking space before : ; ? !',
    ]);
    expect(frenchTypographyProblems('« Mods »')).toEqual(['French: use non-breaking spaces inside « »']);
    expect(frenchTypographyProblems('«Mods»')).toEqual(['French: missing non-breaking space inside « »']);
  });

  it('is a warning of i18n:check on fr files only', () => {
    const root = catalog({
      demo: {
        en: { demo_title: 'Error: try again' },
        fr: { demo_title: 'Erreur : réessayez' },
        es: { demo_title: 'Error: inténtalo de nuevo' },
      },
    });
    const diagnostics = validateCatalog(loadCatalog(root)).diagnostics;
    expect(diagnostics.filter((d) => d.level === 'error')).toEqual([]);
    expect(diagnostics.filter((d) => d.message.startsWith('French'))).toEqual([
      {
        level: 'warning',
        file: 'messages/demo/fr.json',
        key: 'demo_title',
        message: 'French: use a non-breaking space (U+00A0) before : ; ? !',
      },
    ]);
  });

  it('the real catalogue follows the rule', () => {
    const real = validateCatalog(loadCatalog(join(import.meta.dirname, '..')));
    expect(real.diagnostics.filter((d) => d.message.startsWith('French'))).toEqual([]);
  });
});

describe('glossary hints', () => {
  it('stems inflecting locales and keeps CJK terms whole', () => {
    expect(termStem('Моды', 'ru')).toBe('мод');
    expect(termStem('Modlar', 'tr')).toBe('mod');
    expect(termStem('Rucksack', 'de')).toBe('rucksa');
    expect(termStem('模组', 'zh')).toBe('模组');
    expect(termStem('キット', 'ja')).toBe('キット');
  });

  it('warns when a translation of a term-bearing message lacks the locale term', () => {
    const terms = (backpack: string) => ({ common_term_backpack: backpack, common_term_builds: 'Builds' });
    const root = catalog({
      common: { en: terms('Backpack'), ru: terms('Рюкзак'), de: terms('Rucksack') },
      demo: {
        en: { demo_saved: 'Saved to your Backpack', demo_brand: 'Welcome to SOTF Mods', demo_game: 'Game builds' },
        ru: { demo_saved: 'Сохранено в рюкзаке', demo_brand: 'Добро пожаловать', demo_game: 'Сборки игры' },
        de: { demo_saved: 'In deiner Tasche gespeichert', demo_brand: 'Willkommen', demo_game: 'Spiel-Builds' },
      },
    });
    const warnings = glossaryDiagnostics(loadCatalog(root)).map((d) => `${d.file} ${d.key}`);
    // ru inflects the term (рюкзаке) and passes; de uses another word; «builds» is ambiguous
    // (game builds) and «SOTF Mods» is the brand: neither is checked.
    expect(warnings).toEqual(['messages/demo/de.json demo_saved']);
  });
});
