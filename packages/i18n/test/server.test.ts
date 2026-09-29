/**
 * Per-request locale with AsyncLocalStorage (WP-13 acceptance).
 */
import { setTimeout as sleep } from 'node:timers/promises';
import { describe, expect, it } from 'vitest';
import { m } from '../src/messages.ts';
import { getLocale, setLocale } from '../src/runtime.ts';
import { requestLocale, withLocale } from '../src/server.ts';

describe('withLocale', () => {
  it('isolates concurrent requests across awaits', async () => {
    const render = (locale: 'es' | 'de' | 'ja' | 'en', delay: number) =>
      withLocale(locale, async () => {
        const before = m.common_action_save();
        await sleep(delay);
        const after = m.common_action_save();
        await Promise.resolve();
        return { before, after, locale: getLocale(), request: requestLocale() };
      });
    const results = await Promise.all([render('es', 30), render('de', 5), render('ja', 15), render('en', 1)]);
    expect(results).toEqual([
      { before: 'Guardar', after: 'Guardar', locale: 'es', request: 'es' },
      { before: 'Speichern', after: 'Speichern', locale: 'de', request: 'de' },
      { before: '保存', after: '保存', locale: 'ja', request: 'ja' },
      { before: 'Save', after: 'Save', locale: 'en', request: 'en' },
    ]);
  });

  it('keeps the locale in timers and callbacks scheduled inside the request', async () => {
    const text = await withLocale(
      'fr',
      () => new Promise<string>((resolve) => setTimeout(() => resolve(m.errors_not_found_home()), 1)),
    );
    expect(text).toBe('Retour au sentier');
  });

  it('supports nesting and synchronous callbacks', () => {
    const result = withLocale('ru', () => {
      const outer = m.common_action_close();
      const inner = withLocale('pl', () => m.common_action_close());
      return [outer, inner, m.common_action_close()];
    });
    expect(result).toEqual(['Закрыть', 'Zamknij', 'Закрыть']);
  });

  it('falls back to English outside a request and never uses a process-wide locale', () => {
    expect(requestLocale()).toBeUndefined();
    expect(getLocale()).toBe('en');
    expect(m.common_action_save()).toBe('Save');
    expect(() => setLocale('es')).toThrow(/withLocale/);
    expect(getLocale()).toBe('en');
  });

  it('lets an explicit locale win over the request locale', () => {
    expect(withLocale('es', () => m.common_action_save({}, { locale: 'it' }))).toBe('Salva');
  });

  it('validates the locale', () => {
    // @ts-expect-error: not a locale
    expect(() => withLocale('xx', () => 1)).toThrow(RangeError);
  });

  it('formats plurals with the request locale', () => {
    const texts = withLocale('pl', () => [1, 2, 5, 22].map((count) => m.common_mods_count({ count })));
    expect(texts).toEqual(['1 mod', '2 mody', '5 modów', '22 mody']);
  });
});
