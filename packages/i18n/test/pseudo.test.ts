import { describe, expect, it } from 'vitest';
import { collectArguments, parseIcu, textContent } from '../tools/icu.ts';
import { toInlangMessage } from '../tools/inlang.ts';
import { accent, PSEUDO_CLOSE, PSEUDO_OPEN, pseudoLocalize } from '../tools/pseudo.ts';

describe('pseudo-localization', () => {
  it('brackets, accents and expands text by ~35 %', () => {
    const source = parseIcu('Search mods, builds, creators…');
    const pseudo = pseudoLocalize(source);
    const text = textContent(pseudo);
    expect(text.startsWith(PSEUDO_OPEN)).toBe(true);
    expect(text.endsWith(PSEUDO_CLOSE)).toBe(true);
    expect(text).toContain('Šéàŕçĥ ṁöðš');
    expect([...text].length).toBeGreaterThanOrEqual(Math.round([...textContent(source)].length * 1.35));
  });

  it('keeps arguments, plurals and selects working', () => {
    const source = parseIcu('{count, plural, one {# mod by {user}} other {# mods by {user}}}');
    const pseudo = pseudoLocalize(source);
    expect(collectArguments(pseudo)).toEqual(collectArguments(source));
    expect(() => toInlangMessage(pseudo)).not.toThrow();
  });

  it('only changes Latin letters', () => {
    expect(accent('Día 1 · 模组 ♥')).toBe('Ðíà 1 · 模组 ♥');
  });
});
