import { describe, expect, it } from 'vitest';
import { parseCsv, readRecategorizeCsv, sniffDelimiter, toCsv } from './csv.ts';

/** Header written by `pnpm r2:suggest-categories` (docs/backlog/WP-84.md). */
const WP84_HEADER =
  'modId,categorySlug,tagSlugs,slug,name,currentCategory,source,confidence,ruleCategory,ruleConfidence,ruleKeywords,llmCategory,llmConfidence,llmReason';

describe('parseCsv / toCsv', () => {
  it('round-trips quotes, commas, CRLF and new lines inside cells', () => {
    const rows = [
      ['id', 'name', 'note'],
      ['1', 'Stack, "the" mod', 'line one\nline two'],
    ];
    const text = toCsv(rows);
    expect(text).toContain('\r\n');
    expect(parseCsv(text)).toEqual(rows);
  });

  it('strips a UTF-8 BOM and sniffs the delimiter', () => {
    expect(sniffDelimiter('a;b;c\n1;2;3')).toBe(';');
    expect(sniffDelimiter('a\tb\n1\t2')).toBe('\t');
    expect(parseCsv('﻿a;b\r\n1;2')).toEqual([
      ['a', 'b'],
      ['1', '2'],
    ]);
  });
});

describe('readRecategorizeCsv', () => {
  it('reads the WP-84 suggestion format (only mod, category and tags are applied)', () => {
    const text = [
      WP84_HEADER,
      '12,quality-of-life,inventory;ui,stack-mod,Stack Mod,qol,llm,0.91,misc,0.2,stack,quality-of-life,0.91,"Stacks items, better UI"',
      '13,building,,big-house,Big House,misc,rules,85%,building,0.85,house,,,',
    ].join('\r\n');
    const { rows, problems } = readRecategorizeCsv(text);
    expect(problems).toEqual([]);
    expect(rows).toEqual([
      {
        line: 2,
        modId: 12,
        manifestId: null,
        name: 'Stack Mod',
        currentCategory: 'qol',
        categorySlug: 'quality-of-life',
        tagSlugs: ['inventory', 'ui'],
        confidence: 0.91,
        reason: 'Stacks items, better UI',
      },
      {
        line: 3,
        modId: 13,
        manifestId: null,
        name: 'Big House',
        currentCategory: 'misc',
        categorySlug: 'building',
        tagSlugs: [],
        confidence: 0.85,
        reason: null,
      },
    ]);
  });

  it('accepts manifest ids in the mod column and reports incomplete rows', () => {
    const { rows, problems } = readRecategorizeCsv('mod,category\nAxelModMenu,utility\n,utility\n14,\n');
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ modId: null, manifestId: 'AxelModMenu', categorySlug: 'utility' });
    expect(problems).toEqual([
      { kind: 'row', line: 3, reason: 'no-mod' },
      { kind: 'row', line: 4, reason: 'no-category' },
    ]);
  });

  it('refuses files without the required columns', () => {
    expect(readRecategorizeCsv('').problems).toEqual([{ kind: 'no-header' }]);
    expect(readRecategorizeCsv('name,notes\nx,y').problems).toEqual([
      { kind: 'missing-column', column: 'mod' },
      { kind: 'missing-column', column: 'category' },
    ]);
  });
});
