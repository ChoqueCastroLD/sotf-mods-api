import { describe, expect, it } from 'vitest';
import { attrs, escapeXml, fmt, joinNumbers, PathWriter, smoothCurve, svgRoot } from '../src/svg.ts';

describe('fmt', () => {
  it('trims zeros, leading zeros and negative zero', () => {
    expect(fmt(1.5)).toBe('1.5');
    expect(fmt(2)).toBe('2');
    expect(fmt(0.25)).toBe('.25');
    expect(fmt(-0.25)).toBe('-.25');
    expect(fmt(-0.0001)).toBe('0');
    expect(fmt(1.23456, 3)).toBe('1.235');
    expect(fmt(10.1, 0)).toBe('10');
  });

  it('rejects non-finite numbers', () => {
    expect(() => fmt(Number.NaN)).toThrow(RangeError);
    expect(() => fmt(Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});

describe('joinNumbers', () => {
  it('uses the shortest valid separators', () => {
    expect(joinNumbers(['1', '-2', '.5', '3'])).toBe('1-2 .5 3');
    expect(joinNumbers(['1.5', '.5', '-.25'])).toBe('1.5.5-.25');
  });
});

describe('escapeXml / attrs', () => {
  it('escapes markup-significant characters', () => {
    expect(escapeXml(`<a href="x">'&'</a>`)).toBe('&lt;a href=&quot;x&quot;&gt;&apos;&amp;&apos;&lt;/a&gt;');
  });

  it('skips nullish/false and escapes values', () => {
    expect(attrs({ a: 'x"y', b: undefined, c: null, d: false, e: true, f: 1.23456 })).toBe(' a="x&quot;y" e f="1.235"');
  });
});

describe('svgRoot', () => {
  it('marks untitled SVG as decorative and titled SVG as an image', () => {
    expect(svgRoot({ viewBox: [0, 0, 10, 10] }, '')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" aria-hidden="true"></svg>',
    );
    expect(svgRoot({ viewBox: [0, 0, 10, 10], title: 'A & B' }, '')).toContain('role="img"><title>A &amp; B</title>');
  });
});

describe('PathWriter', () => {
  it('writes relative commands from rounded absolute points without drift', () => {
    const writer = new PathWriter(0);
    for (let i = 0; i < 100; i += 1) {
      if (i === 0) writer.moveTo(0.4, 0.4);
      else writer.lineTo(i * 1.4, 0);
    }
    const d = writer.toString();
    // Sum of the rounded relative steps equals the rounded final absolute coordinate.
    const steps = [...d.matchAll(/l(-?\d+)/g)].map((match) => Number(match[1]));
    expect(steps.reduce((sum, step) => sum + step, 0)).toBe(Math.round(99 * 1.4));
  });

  it('rejects invalid precision', () => {
    expect(() => new PathWriter(5)).toThrow(RangeError);
    expect(() => new PathWriter(1.5)).toThrow(RangeError);
  });

  it('smooths closed and open curves', () => {
    const square = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];
    const closed = new PathWriter(1);
    smoothCurve(closed, square, true);
    expect(closed.toString()).toMatch(/^M0 0(c[^c]+){4}z$/);
    const open = new PathWriter(1);
    smoothCurve(open, square, false);
    expect(open.toString()).toMatch(/^M0 0(c[^c]+){3}$/);
  });
});
