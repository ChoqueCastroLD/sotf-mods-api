/**
 * Pure model of the log viewer: level filter, search, collapsing of repeated lines, row heights and
 * the window of rows to render. No DOM, so it is unit tested and cheap to rerun on 100k lines.
 */
import { type LogLevel, type LogLine, repeatKey } from '@sotf/contracts/log-parser';

export type LevelFilter = 'all' | 'error' | 'warning' | 'info';

export const LEVEL_FILTERS: readonly LevelFilter[] = ['all', 'error', 'warning', 'info'];

const FILTER_LEVELS: Record<Exclude<LevelFilter, 'all'>, readonly LogLevel[]> = {
  error: ['fatal', 'error'],
  warning: ['warning'],
  info: ['info', 'debug'],
};

/** Runs of identical consecutive entries (a line and its stack frames) of at least this many are folded. */
export const FOLD_MIN = 3;

export type Row =
  | { kind: 'line'; line: LogLine }
  | { kind: 'fold'; line: LogLine; count: number; expanded: boolean; to: number };

export function passes(line: LogLine, level: LevelFilter, needle: string): boolean {
  if (level !== 'all' && !FILTER_LEVELS[level].includes(line.level)) return false;
  return needle === '' || line.text.toLowerCase().includes(needle);
}

interface Entry {
  start: number;
  end: number;
  key: string;
}

/** Groups the visible lines into entries: a header line plus the continuation lines that follow it. */
function entriesOf(visible: readonly LogLine[]): Entry[] {
  const entries: Entry[] = [];
  let i = 0;
  while (i < visible.length) {
    const head = visible[i] as LogLine;
    let j = i + 1;
    const parts = [repeatKey(head)];
    while (j < visible.length && (visible[j] as LogLine).cont) {
      parts.push((visible[j] as LogLine).text);
      j += 1;
    }
    entries.push({ start: i, end: j, key: head.cont ? `cont|${head.text}` : parts.join('\n') });
    i = j;
  }
  return entries;
}

/**
 * Lines that pass the filters, then runs of identical entries folded (unless `expanded`). A folded
 * run shows its first header line and a "repeated N times" button; the stack frames of the run stay
 * hidden until it is expanded.
 */
export function buildRows(
  lines: readonly LogLine[],
  level: LevelFilter,
  query: string,
  expanded: ReadonlySet<number>,
): Row[] {
  const needle = query.trim().toLowerCase();
  const visible = level === 'all' && needle === '' ? lines : lines.filter((line) => passes(line, level, needle));
  const entries = entriesOf(visible);
  const rows: Row[] = [];
  let e = 0;
  while (e < entries.length) {
    const first = entries[e] as Entry;
    let f = e + 1;
    while (f < entries.length && (entries[f] as Entry).key === first.key) f += 1;
    const run = f - e;
    const startLine = visible[first.start] as LogLine;
    if (run >= FOLD_MIN && !startLine.cont) {
      const last = entries[f - 1] as Entry;
      const isOpen = expanded.has(startLine.n);
      rows.push({
        kind: 'fold',
        line: startLine,
        count: run,
        expanded: isOpen,
        to: (visible[last.end - 1] as LogLine).n,
      });
      if (isOpen)
        for (let k = first.start; k < last.end; k += 1) rows.push({ kind: 'line', line: visible[k] as LogLine });
    } else {
      for (let k = first.start; k < (entries[f - 1] as Entry).end; k += 1) {
        rows.push({ kind: 'line', line: visible[k] as LogLine });
      }
    }
    e = f;
  }
  return rows;
}

export function displayText(text: string): string {
  return text.includes('\t') ? text.replace(/\t/g, '    ') : text;
}

/** Number of visual rows of a line wrapped at `charsPerRow` characters. */
export function wrappedRows(length: number, charsPerRow: number): number {
  if (charsPerRow < 1 || length <= charsPerRow) return 1;
  return Math.ceil(length / charsPerRow);
}

/** Prefix sums of the row heights (`offsets[i]` is the top of row `i`, the last entry the total). */
export function rowOffsets(rows: readonly Row[], lineHeight: number, charsPerRow: number | null): Float64Array {
  const offsets = new Float64Array(rows.length + 1);
  let top = 0;
  for (let i = 0; i < rows.length; i += 1) {
    offsets[i] = top;
    const row = rows[i];
    if (!row) continue;
    const lines =
      charsPerRow === null || row.kind === 'fold' ? 1 : wrappedRows(displayText(row.line.text).length, charsPerRow);
    top += lines * lineHeight;
  }
  offsets[rows.length] = top;
  return offsets;
}

/** Index of the row that contains the vertical position `y` (binary search). */
export function rowAt(offsets: Float64Array, y: number): number {
  let lo = 0;
  let hi = offsets.length - 2;
  if (hi < 0) return 0;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if ((offsets[mid] ?? 0) <= y) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/** Rows to render for a scroll window (with `overscan` pixels above and below). */
export function visibleRange(
  offsets: Float64Array,
  scrollTop: number,
  viewport: number,
  overscan: number,
): { start: number; end: number } {
  const count = offsets.length - 1;
  if (count <= 0) return { start: 0, end: 0 };
  const start = rowAt(offsets, Math.max(0, scrollTop - overscan));
  const end = Math.min(count, rowAt(offsets, scrollTop + viewport + overscan) + 1);
  return { start, end };
}

/** Index of the row that shows line `n` (a line or the fold that starts with it); -1 when hidden. */
export function rowOfLine(rows: readonly Row[], n: number): number {
  return rows.findIndex((row) => row.line.n === n);
}

/** The collapsed fold that hides line `n`, if any. */
export function foldHiding(rows: readonly Row[], n: number): number | null {
  for (const row of rows) {
    if (row.kind === 'fold' && !row.expanded && row.line.n < n && n <= row.to) return row.line.n;
  }
  return null;
}

export type SegmentKind = 'time' | 'level' | 'source' | 'body';
export interface Segment {
  kind: SegmentKind;
  text: string;
}

/**
 * Splits a parsed line into its columns for coloring (`[14:02:09.203]` `[Info   ` `:RedLoader] ` message).
 * The segments always concatenate to exactly `line.text`, so copy and wrap measures stay exact.
 */
export function segmentsOf(line: LogLine): Segment[] {
  const text = line.text;
  if (line.cont || line.body.length >= text.length) return [{ kind: 'body', text }];
  const head = text.slice(0, text.length - line.body.length);
  const out: Segment[] = [];
  let rest = head;
  if (line.time) {
    const at = rest.indexOf(line.time);
    if (at >= 0) {
      let end = at + line.time.length;
      if (rest[end] === ']') end += 1;
      out.push({ kind: 'time', text: rest.slice(0, end) });
      rest = rest.slice(end);
    }
  }
  const header = /^(\s*\[\s*[A-Za-z]+\s*)(:\s*[^\]]*\]\s*)$/.exec(rest);
  if (header?.[1] && header[2]) {
    out.push({ kind: 'level', text: header[1] }, { kind: 'source', text: header[2] });
  } else if (rest !== '') {
    out.push({ kind: line.source ? 'source' : 'level', text: rest });
  }
  out.push({ kind: 'body', text: line.body });
  return out;
}
