import { describe, expect, it } from 'vitest';
import { CSV_BOM, csvCell, toCsv } from './csv.ts';

describe('CSV export cells (RFC 4180 + CSV injection)', () => {
  it('quotes separators, quotes and line breaks, doubling inner quotes', () => {
    expect(csvCell('plain')).toBe('plain');
    expect(csvCell('a,b')).toBe('"a,b"');
    expect(csvCell('say "hi"')).toBe('"say ""hi"""');
    expect(csvCell('line\nbreak')).toBe('"line\nbreak"');
  });

  it('prefixes cells a spreadsheet would evaluate', () => {
    for (const lead of ['=', '+', '-', '@', '\t']) expect(csvCell(`${lead}1+1`)).toBe(`'${lead}1+1`);
    expect(csvCell('\rcmd')).toBe(`"'\rcmd"`);
    expect(csvCell('=A1,B1')).toBe(`"'=A1,B1"`);
  });

  it('writes numbers as-is, and empty cells for null, undefined and non-finite numbers', () => {
    expect(csvCell(-3)).toBe('-3');
    expect(csvCell(0.5)).toBe('0.5');
    expect(csvCell(null)).toBe('');
    expect(csvCell(undefined)).toBe('');
    expect(csvCell(Number.NaN)).toBe('');
  });

  it('joins rows with CRLF after a BOM and ends with CRLF', () => {
    expect(
      toCsv(
        ['a', 'b'],
        [
          [1, 'x'],
          [null, 'y,z'],
        ],
      ),
    ).toBe(`${CSV_BOM}a,b\r\n1,x\r\n,"y,z"\r\n`);
  });
});
