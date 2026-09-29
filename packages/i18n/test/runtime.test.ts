// @vitest-environment jsdom
/**
 * Browser behaviour: islands follow `<html lang>`, the console can switch with `setLocale()`.
 */
import { describe, expect, it } from 'vitest';
import { m } from '../src/messages.ts';
import { getLocale, localeFromDocument, setLocale } from '../src/runtime.ts';

// The package compiles without DOM types (it must stay runtime-agnostic); jsdom provides them here.
const html = (globalThis as unknown as { document: { documentElement: { lang: string } } }).document.documentElement;

describe('client runtime', () => {
  it('reads the page locale from <html lang>', () => {
    html.lang = 'pt-BR';
    expect(localeFromDocument()).toBe('pt');
    expect(getLocale()).toBe('pt');
    expect(m.common_action_save()).toBe('Salvar');
    expect(m.common_downloads_count({ count: 1 })).toBe('1 download');
  });

  it('switches locale without reloading and keeps <html lang> in sync', () => {
    setLocale('zh', { reload: false });
    expect(getLocale()).toBe('zh');
    expect(html.lang).toBe('zh-Hans');
    expect(m.common_action_save()).toBe('保存');
    expect(m.common_mods_count({ count: 3 })).toBe('3 个模组');
  });

  it('ignores unsupported page languages', () => {
    html.lang = 'ko';
    expect(localeFromDocument()).toBeUndefined();
    html.lang = '';
    expect(localeFromDocument()).toBeUndefined();
  });
});
