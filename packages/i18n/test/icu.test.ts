import { describe, expect, it } from 'vitest';
import { collectArguments, IcuSyntaxError, parseIcu, textContent } from '../tools/icu.ts';

describe('parseIcu', () => {
  it('parses text and simple arguments', () => {
    expect(parseIcu('Hello {name}!')).toEqual([
      { type: 'text', value: 'Hello ' },
      { type: 'argument', name: 'name', format: null },
      { type: 'text', value: '!' },
    ]);
    expect(parseIcu('')).toEqual([]);
  });

  it('handles apostrophes like ICU (DOUBLE_OPTIONAL)', () => {
    expect(textContent(parseIcu("Don't panic"))).toBe("Don't panic");
    expect(textContent(parseIcu("It''s")).valueOf()).toBe("It's");
    expect(textContent(parseIcu("Use '{braces}' and '}'"))).toBe('Use {braces} and }');
    expect(textContent(parseIcu("'{'it''s'}'"))).toBe("{it's}");
    expect(() => parseIcu("'{ unterminated")).toThrow(IcuSyntaxError);
  });

  it('parses formatted arguments', () => {
    expect(parseIcu('{n, number}')).toEqual([
      { type: 'argument', name: 'n', format: { kind: 'number', style: 'decimal' } },
    ]);
    expect(parseIcu('{n, number, compact}')[0]).toMatchObject({ format: { kind: 'number', style: 'compact' } });
    expect(parseIcu('{d, date, long}')[0]).toMatchObject({ format: { kind: 'date', style: 'long' } });
    expect(parseIcu('{d, date}')[0]).toMatchObject({ format: { kind: 'date', style: 'medium' } });
    expect(parseIcu('{t, time}')[0]).toMatchObject({ format: { kind: 'time', style: 'short' } });
  });

  it('parses plurals with exact matches, # and nesting', () => {
    const [node] = parseIcu(
      '{count, plural, =0 {none} one {# mod} other {{kind, select, build {# builds} other {# mods}}}}',
    );
    expect(node).toMatchObject({ type: 'plural', name: 'count', ordinal: false });
    if (node?.type !== 'plural') throw new Error('expected a plural');
    expect(node.options.map((o) => o.key)).toEqual(['=0', 'one', 'other']);
    expect(node.options[1]?.value).toEqual([
      { type: 'pound', name: 'count' },
      { type: 'text', value: ' mod' },
    ]);
    // `#` inside a select nested in a plural still refers to the plural.
    expect(JSON.stringify(node.options[2]?.value)).toContain('"type":"pound","name":"count"');
    expect(parseIcu('{n, selectordinal, one {#st} other {#th}}')[0]).toMatchObject({ type: 'plural', ordinal: true });
    // Outside plurals, # is text.
    expect(textContent(parseIcu('Issue #12'))).toBe('Issue #12');
  });

  it('reports what it does not support', () => {
    const cases: Array<[string, RegExp]> = [
      ['{count, plural, one {x}}', /must have an "other"/],
      ['{count, plural, some {x} other {y}}', /Unknown plural category/],
      ['{count, plural, =1000 {x} other {y}}', /integer between 0 and 999/],
      ['{count, plural, one {a} one {b} other {c}}', /Duplicate/],
      ['{count, plural, offset:1 other {x}}', /offset/],
      ['{n, number, ::currency/EUR}', /skeletons/],
      ['{n, number, currency}', /Unsupported number style/],
      ['{n, spellout}', /Unsupported argument type/],
      ['{d, time, full}', /Unsupported time style/],
      ['{my__arg}', /Invalid argument name/],
      ['{_x}', /Expected an argument name|Invalid argument name/],
      ['{1abc}', /Invalid argument name/],
      ['Hello {name', /Expected ","/],
      ['Hello }', /Unexpected "}"/],
      ['{x, select, a b {1} other {2}}', /Expected "\{"/],
      ['{<b>}', /Tags and markup/],
      [
        '{a, select, x {{b, select, y {{c, select, z {{d, select, w {{e, select, v {deep} other {e}}} other {d}}} other {c}}} other {b}}} other {a}}',
        /nested more than/,
      ],
    ];
    for (const [source, message] of cases) {
      expect(() => parseIcu(source), source).toThrow(message);
    }
  });

  it('collects arguments with how they are used', () => {
    const args = collectArguments(
      parseIcu('{count, plural, one {{user} has # mod} other {{user} has {count, number} mods}}'),
    );
    expect([...args.keys()].sort()).toEqual(['count', 'user']);
    expect([...(args.get('count') ?? [])].sort()).toEqual(['number', 'plural']);
    expect([...(args.get('user') ?? [])]).toEqual(['plain']);
  });
});
