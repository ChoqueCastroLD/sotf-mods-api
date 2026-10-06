import { describe, expect, it } from 'vitest';
import { graphemes, hasOutlines, initialsElement, initialsFrom, upperInitial } from '../src/initials.ts';

describe('initialsFrom', () => {
  it.each([
    ['Toni M.', 'TM'],
    ['shoko_cc', 'SC'],
    ['RedLoader', 'RL'],
    ['kelvin', 'KE'],
    ['a', 'A'],
    ['  Mary   Jane  Watson ', 'MJ'],
    ['x-rider.v2', 'XR'],
    ['🙂🙂', '?'],
    ['', '?'],
    ['élodie dupont', 'ÉD'],
    ['Юрий Гагарин', 'ЮГ'],
    ['123abc', '12'],
  ])('%s → %s', (name, expected) => {
    expect(initialsFrom(name)).toBe(expected);
  });

  it('honours the maximum', () => {
    expect(initialsFrom('Alpha Beta Gamma', 3)).toBe('ABG');
    expect(initialsFrom('Alpha Beta', 1)).toBe('A');
  });

  it('never returns more characters than requested', () => {
    expect(initialsFrom('ßa b')).toBe('ßB');
    expect(initialsFrom('ßa')).toBe('ßA');
    expect(initialsFrom('ﬁsh tank')).toBe('ﬁT');
    for (const name of ['ßa b', 'ﬁsh', 'ŉa', 'ǆ z', 'E\u0301lodie Dupont']) {
      for (const max of [1, 2, 3]) {
        expect(graphemes(initialsFrom(name, max)).length, `${name} / ${max}`).toBeLessThanOrEqual(max);
      }
    }
  });

  it('treats decomposed and composed input alike', () => {
    expect(initialsFrom('e\u0301lodie dupont')).toBe('\u00C9D');
    expect(initialsFrom('q\u0303uux')).toBe('Q\u0303U');
  });
});

describe('graphemes and upperInitial', () => {
  it('segments user-perceived characters after NFC', () => {
    expect(graphemes('E\u0301X')).toEqual(['\u00C9', 'X']);
    expect(graphemes('q\u0303a')).toEqual(['q\u0303', 'a']);
    expect(graphemes('')).toEqual([]);
  });

  it('upper-cases without expanding', () => {
    expect(upperInitial('a')).toBe('A');
    expect(upperInitial('é')).toBe('É');
    expect(upperInitial('ß')).toBe('ß');
    expect(upperInitial('ﬁ')).toBe('ﬁ');
    expect(upperInitial('ǆ')).toBe('Ǆ');
  });
});

describe('initialsElement', () => {
  it('uses outlines for A–Z and 0–9', () => {
    expect(hasOutlines('AZ09')).toBe(true);
    expect(hasOutlines('É')).toBe(false);
    const element = initialsElement('AB', { x: 10, y: 20, capHeight: 10, fill: '#fff' });
    expect(element.startsWith('<g transform="translate(10 20) scale(.1)" fill="#fff">')).toBe(true);
    expect(element.match(/<path/g)).toHaveLength(2);
  });

  it('falls back to escaped text with the UI font stack', () => {
    const element = initialsElement('É<', { x: 1, y: 2, capHeight: 8, fill: '#000', anchor: 'start' });
    expect(element).toContain('<text');
    expect(element).toContain('É&lt;</text>');
    expect(element).toContain('text-anchor="start"');
    expect(element).toContain('font-size="11.27"');
  });
});
