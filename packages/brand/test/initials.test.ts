import { describe, expect, it } from 'vitest';
import { hasOutlines, initialsElement, initialsFrom } from '../src/initials.ts';

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
});

describe('initialsElement', () => {
  it('uses outlines for A–Z and 0–9', () => {
    expect(hasOutlines('AZ09')).toBe(true);
    expect(hasOutlines('É')).toBe(false);
    const element = initialsElement('AB', { x: 10, y: 20, capHeight: 10, fill: '#fff' });
    expect(element.startsWith('<g transform="translate(10 20) scale(.1)" fill="#fff">')).toBe(true);
    expect(element.match(/<path/g)).toHaveLength(2);
  });

  it('falls back to escaped text with the display font stack', () => {
    const element = initialsElement('É<', { x: 1, y: 2, capHeight: 8, fill: '#000', anchor: 'start' });
    expect(element).toContain('<text');
    expect(element).toContain('É&lt;</text>');
    expect(element).toContain('text-anchor="start"');
    expect(element).toContain('font-size="10"');
  });
});
