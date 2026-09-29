import { describe, expect, it } from 'vitest';
import { normalizeInput, PROFILES, renderMarkdown } from '../src/index.ts';
import { parseHtml } from './helpers/safety.ts';

const SAMPLES = [
  'Größe und Überlebende — straße',
  'Выживание в лесу: мод для Kelvin',
  '森の中で生き残る 🌲🔥🪓',
  'Przetrwanie: źdźbło, łódź, żółw',
  'Hayatta kalma: ğüşiöç İ',
  '日本語のテキストとカタカナ',
  'Família 👨‍👩‍👧‍👦 e bandeiras 🇧🇷 🇪🇸 e pele 👋🏽',
  'Combining: é ñ → NFC',
  '¡Hola! ¿Qué tal? «guillemets» “quotes” ‘single’ – en — em …',
];

describe('Unicode and emoji', () => {
  it.each(PROFILES)('keeps every character in %s', (profile) => {
    for (const sample of SAMPLES) {
      const { html, text } = renderMarkdown(sample, { profile });
      const expected = sample.normalize('NFC');
      expect(text).toBe(expected);
      expect(parseHtml(html).textContent?.trim()).toBe(expected);
    }
  });

  it('normalises to NFC (decomposed umlauts become precomposed)', () => {
    const { text } = renderMarkdown('Überleben');
    expect(text).toBe('Überleben');
  });

  it('keeps Unicode in emphasis, links, headings, mentions and code', () => {
    const { html, headings } = renderMarkdown(
      '# Über 🌲\n\n**жирный** [リンク](https://example.com/ü) `código` @ana ||скрыто||',
    );
    const body = parseHtml(html);
    expect(headings[0]).toMatchObject({ id: 'md-über', text: 'Über 🌲' });
    expect(body.querySelector('strong')?.textContent).toBe('жирный');
    expect(body.querySelector('a[href^="https://example.com/"]')?.textContent).toBe('リンク');
    expect(body.querySelector('code')?.textContent).toBe('código');
    expect(body.querySelector('.md-spoiler')?.textContent).toBe('скрыто');
  });

  it('normalizeInput removes the BOM, CR and control characters but keeps tabs and newlines', () => {
    expect(normalizeInput('\uFEFFa\r\nb\rc\u0000d\u0007e\tf\u007fg')).toBe('a\nb\ncde\tfg');
  });

  it('replaces lone surrogates instead of emitting invalid UTF-16', () => {
    const { html } = renderMarkdown('broken \uD800 surrogate');
    expect(html).toContain('\uFFFD');
    expect(html.isWellFormed()).toBe(true);
  });
});
