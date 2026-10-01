import { type LogLine, parseLog } from '@sotf/contracts/log-parser';
import { describe, expect, it } from 'vitest';
import { buildRows, foldHiding, rowAt, rowOffsets, rowOfLine, segmentsOf, visibleRange, wrappedRows } from './model.ts';

const text = [
  '[Info   :RedLoader] Start',
  '[Warning:Mod] Retrying',
  '[Warning:Mod] Retrying',
  '[Warning:Mod] Retrying',
  '[Warning:Mod] Retrying',
  '[Error  :Unity Log] Boom',
  '  at Foo.Bar()',
  '[Info   :RedLoader] End',
].join('\n');

describe('log viewer model', () => {
  const lines = parseLog(text);

  it('folds a run of identical entries and expands it on demand', () => {
    const folded = buildRows(lines, 'all', '', new Set());
    expect(folded.filter((r) => r.kind === 'fold')).toHaveLength(1);
    expect(folded).toHaveLength(5);
    const open = buildRows(lines, 'all', '', new Set([2]));
    expect(open).toHaveLength(5 + 4);
    expect(foldHiding(folded, 4)).toBe(2);
    expect(foldHiding(open, 4)).toBeNull();
  });

  it('filters by level (stack frames follow their error) and by search', () => {
    const errors = buildRows(lines, 'error', '', new Set());
    expect(errors.map((r) => r.line.n)).toEqual([6, 7]);
    const found = buildRows(lines, 'all', 'boom', new Set());
    expect(found.map((r) => r.line.n)).toEqual([6]);
    expect(rowOfLine(errors, 7)).toBe(1);
  });

  it('computes wrapped heights and the visible window', () => {
    expect(wrappedRows(0, 10)).toBe(1);
    expect(wrappedRows(25, 10)).toBe(3);
    const rows = buildRows(lines, 'all', '', new Set());
    const flat = rowOffsets(rows, 20, null);
    expect(flat[rows.length]).toBe(rows.length * 20);
    expect(rowAt(flat, 45)).toBe(2);
    const { start, end } = visibleRange(flat, 40, 40, 0);
    expect(start).toBe(2);
    expect(end).toBe(5);
    const narrow = rowOffsets(rows, 20, 5);
    expect((narrow[rows.length] ?? 0) > (flat[rows.length] ?? 0)).toBe(true);
  });

  it('folds repeated errors that carry stack frames as whole entries', () => {
    const frame = ['[Error  :Unity Log] NullReference', '  at A.B()', '  at C.D()'];
    const repeated = parseLog([...frame, ...frame, ...frame, '[Info   :RedLoader] End'].join('\n'));
    const rows = buildRows(repeated, 'all', '', new Set());
    expect(rows.map((r) => r.kind)).toEqual(['fold', 'line']);
    const fold = rows[0];
    expect(fold?.kind === 'fold' && fold.count).toBe(3);
  });

  it('segments a line into columns that rebuild the original text', () => {
    for (const line of lines) {
      expect(
        segmentsOf(line)
          .map((s) => s.text)
          .join(''),
      ).toBe(line.text);
    }
    expect(segmentsOf(lines[1] as LogLine).map((s) => s.kind)).toContain('level');
    expect(segmentsOf(lines[6] as LogLine)).toEqual([{ kind: 'body', text: '  at Foo.Bar()' }]);
  });
});
