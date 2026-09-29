import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import en from '../messages/en.json' with { type: 'json' };
import {
  configureUiTranslate,
  createUiTranslate,
  englishUiTranslate,
  interpolate,
  UI_MESSAGE_KEYS,
} from '../src/labels.ts';

const MESSAGES_DIR = fileURLToPath(new URL('../messages', import.meta.url));
/** PLAN §4.1: the 13 locales (BCP-47 file names). */
const LOCALES = ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl', 'pl', 'pt-BR', 'ru', 'sv', 'tr', 'zh-Hans'];

function load(locale: string): Record<string, string> {
  return JSON.parse(readFileSync(`${MESSAGES_DIR}/${locale}.json`, 'utf8')) as Record<string, string>;
}

function placeholders(message: string): string[] {
  return [...message.matchAll(/\{(\w+)\}/g)].map((match) => match[1] ?? '').sort();
}

describe('ui messages', () => {
  it('ships the 13 locales', () => {
    expect(
      readdirSync(MESSAGES_DIR)
        .filter((file) => file.endsWith('.json'))
        .map((file) => file.replace(/\.json$/, ''))
        .sort(),
    ).toEqual(LOCALES);
  });

  it.each(LOCALES)('%s has every key, no extras, non-empty values and the same placeholders', (locale) => {
    const messages = load(locale);
    const keys = Object.keys(messages).filter((key) => key !== '$schema');
    expect(keys.sort()).toEqual([...UI_MESSAGE_KEYS].sort());
    for (const key of UI_MESSAGE_KEYS) {
      const message = messages[key] ?? '';
      expect(message.trim().length, `${locale}.${key}`).toBeGreaterThan(0);
      expect(placeholders(message), `${locale}.${key}`).toEqual(placeholders(en[key]));
    }
  });

  it('keys use the ui_ prefix in snake_case (PLAN §7.11)', () => {
    for (const key of UI_MESSAGE_KEYS) expect(key).toMatch(/^ui_[a-z0-9_]+$/);
  });
});

describe('translators', () => {
  it('interpolates named placeholders and leaves unknown ones', () => {
    expect(interpolate('Step {current} of {total}', { current: 2, total: 4 })).toBe('Step 2 of 4');
    expect(interpolate('Hi {name}', {})).toBe('Hi {name}');
  });

  it('builds a translator from any catalogue, falling back to English per key', () => {
    const t = createUiTranslate({ ui_close: 'Cerrar' });
    expect(t('ui_close')).toBe('Cerrar');
    expect(t('ui_cancel')).toBe('Cancel');
    expect(createUiTranslate(load('ja'))('ui_page_number', { page: 3 })).toBe('3 ページ');
  });

  it('can be configured application-wide', () => {
    configureUiTranslate((key) => key.toUpperCase());
    configureUiTranslate(null);
    expect(englishUiTranslate('ui_close')).toBe('Close');
  });
});
