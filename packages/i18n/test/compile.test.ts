/**
 * End-to-end semantics of ICU messages once compiled by Paraglide: every construct the parser
 * accepts must behave like ICU at runtime, in every locale.
 */
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { LOCALES, type Locale } from '../src/locales.ts';
import { buildGenerated, mergeMessages } from '../tools/compile.ts';
import { parseIcu } from '../tools/icu.ts';
import { toInlangMessage } from '../tools/inlang.ts';

const SOURCES: Record<string, string> = {
  test_plain: "Don't '{'panic'}' \\o/",
  test_arg: 'Hello {name}',
  test_number: 'Day {day, number} on the island',
  test_compact: '{n, number, compact} downloads',
  test_percent: '{ratio, number, percent} say it works',
  test_integer: '{value, number, integer} MB',
  test_date: 'Updated {when, date, long} at {when, time, short}',
  test_exact: '{count, plural, =0 {No mods yet} one {# mod} other {# mods}}',
  test_nested:
    '{kind, select, build {{count, plural, one {# build} other {# builds}}} other {{count, plural, one {# mod} other {# mods}}}}',
  test_ordinal: '{place, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}',
  test_sequence: '{a, select, x {X} other {O}}-{n, plural, one {1} other {N}}',
};

const RU_MODS = '{count, plural, one {# мод} few {# мода} many {# модов} other {# мода}}';

type MessageModule = Record<string, (inputs?: Record<string, unknown>, options?: { locale?: Locale }) => string>;
let dir = '';
let m: MessageModule = {};

beforeAll(async () => {
  const parsed = new Map(Object.entries(SOURCES).map(([key, source]) => [key, parseIcu(source)]));
  const messages = new Map(LOCALES.map((locale) => [locale, new Map(parsed)]));
  messages.get('ru')?.set('test_exact', parseIcu(RU_MODS));
  const files = await buildGenerated(process.cwd(), messages, { emitTsDeclarations: false });
  dir = mkdtempSync(join(tmpdir(), 'sotf-i18n-compile-'));
  for (const [path, content] of files) {
    mkdirSync(dirname(join(dir, path)), { recursive: true });
    writeFileSync(join(dir, path), content);
  }
  m = (await import(pathToFileURL(join(dir, 'paraglide', 'messages.js')).href)) as MessageModule;
});

afterAll(() => {
  if (dir) rmSync(dir, { recursive: true, force: true });
});

describe('compiled ICU semantics', () => {
  it('renders text, escapes and arguments', () => {
    expect(m.test_plain?.()).toBe("Don't {panic} \\o/");
    expect(m.test_arg?.({ name: 'Kelvin' })).toBe('Hello Kelvin');
  });

  it('formats numbers, dates and times with the message locale (dates in UTC)', () => {
    expect(m.test_number?.({ day: 1204 })).toBe('Day 1,204 on the island');
    expect(m.test_number?.({ day: 1204 }, { locale: 'es' })).toBe('Day 1204 on the island');
    expect(m.test_number?.({ day: 12040 }, { locale: 'de' })).toBe('Day 12.040 on the island');
    expect(m.test_compact?.({ n: 1_980_000 })).toBe('1.98M downloads');
    expect(m.test_compact?.({ n: 1_980_000 }, { locale: 'ja' })).toBe('198万 downloads');
    expect(m.test_percent?.({ ratio: 0.87 })).toBe('87% say it works');
    expect(m.test_integer?.({ value: 3.7 })).toBe('4 MB');
    expect(m.test_date?.({ when: '2026-09-29T23:30:00Z' })).toBe('Updated September 29, 2026 at 11:30 PM');
  });

  it('gives exact matches precedence over plural categories', () => {
    expect(m.test_exact?.({ count: 0 })).toBe('No mods yet');
    expect(m.test_exact?.({ count: 1 })).toBe('1 mod');
    expect(m.test_exact?.({ count: 2 })).toBe('2 mods');
    expect(m.test_exact?.({ count: 1234 })).toBe('1,234 mods');
  });

  it('uses the CLDR plural rules of each locale', () => {
    const ru = (count: number) => m.test_exact?.({ count }, { locale: 'ru' });
    expect([1, 2, 5, 21, 22, 25, 111].map(ru)).toEqual([
      '1 мод',
      '2 мода',
      '5 модов',
      '21 мод',
      '22 мода',
      '25 модов',
      '111 модов',
    ]);
    expect(ru(1.5)).toBe('1,5 мода');
  });

  it('flattens nested and sequential selectors in ICU order', () => {
    expect(m.test_nested?.({ kind: 'build', count: 1 })).toBe('1 build');
    expect(m.test_nested?.({ kind: 'build', count: 3 })).toBe('3 builds');
    expect(m.test_nested?.({ kind: 'mod', count: 1 })).toBe('1 mod');
    expect(m.test_nested?.({ kind: 'anything', count: 7 })).toBe('7 mods');
    expect(m.test_sequence?.({ a: 'x', n: 1 })).toBe('X-1');
    expect(m.test_sequence?.({ a: 'y', n: 1 })).toBe('O-1');
    expect(m.test_sequence?.({ a: 'x', n: 2 })).toBe('X-N');
    expect(m.test_sequence?.({ a: 'y', n: 2 })).toBe('O-N');
  });

  it('supports ordinals', () => {
    expect([1, 2, 3, 4, 11, 12, 13, 21, 22, 23, 101].map((place) => m.test_ordinal?.({ place }))).toEqual([
      '1st',
      '2nd',
      '3rd',
      '4th',
      '11th',
      '12th',
      '13th',
      '21st',
      '22nd',
      '23rd',
      '101st',
    ]);
  });
});

describe('merge', () => {
  it('produces sorted inlang JSON with the schema', () => {
    const messages = new Map(
      LOCALES.map((locale) => [
        locale,
        new Map([
          ['b_key', parseIcu('B')],
          ['a_key', parseIcu('A {x}')],
        ]),
      ]),
    );
    const json = JSON.parse(mergeMessages(messages).get('en') ?? '{}') as Record<string, unknown>;
    expect(Object.keys(json)).toEqual(['$schema', 'a_key', 'b_key']);
    expect(json.a_key).toBe('A {x}');
  });

  it('rejects messages that expand into too many variants', () => {
    const big = Array.from({ length: 7 }, (_, index) => `{s${index}, select, a {A} other {O}}`).join('');
    expect(() => toInlangMessage(parseIcu(big))).toThrow(/more than 64 variants/);
    expect(() => toInlangMessage(parseIcu('{n, plural, one {{n, plural, one {x} other {y}}} other {z}}'))).toThrow(
      /used by two selectors/,
    );
  });
});
