/**
 * CSV import/export of the bulk recategorisation (the file `suggest-categories.ts` of WP-84
 * writes; see `README.md` for the columns). RFC 4180 parsing (quoted fields, doubled quotes,
 * CRLF, a UTF-8 BOM) with the delimiter sniffed from the header (`,`, `;` or tab), and header
 * names matched loosely (`categorySlug`, `category_slug`, `suggestedCategory`…).
 */

export type CsvDelimiter = ',' | ';' | '\t';

/** Guesses the delimiter from the first line (the one appearing most outside quotes). */
export function sniffDelimiter(text: string): CsvDelimiter {
  const counts: Record<CsvDelimiter, number> = { ',': 0, ';': 0, '\t': 0 };
  let quoted = false;
  for (const char of text) {
    if (char === '"') quoted = !quoted;
    else if (!quoted && (char === '\n' || char === '\r')) break;
    else if (!quoted && (char === ',' || char === ';' || char === '\t')) counts[char] += 1;
  }
  const best = (Object.entries(counts) as [CsvDelimiter, number][]).sort((a, b) => b[1] - a[1])[0];
  return best && best[1] > 0 ? best[0] : ',';
}

/** Parses CSV text into rows of fields (blank lines dropped). */
export function parseCsv(input: string, delimiter: CsvDelimiter = sniffDelimiter(input)): string[][] {
  const text = input.charCodeAt(0) === 0xfeff ? input.slice(1) : input;
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;
  let index = 0;
  const endRow = () => {
    row.push(field);
    field = '';
    if (row.some((value) => value.trim() !== '')) rows.push(row);
    row = [];
  };
  while (index < text.length) {
    const char = text[index] as string;
    if (quoted) {
      if (char === '"') {
        if (text[index + 1] === '"') {
          field += '"';
          index += 2;
          continue;
        }
        quoted = false;
      } else field += char;
      index += 1;
      continue;
    }
    if (char === '"' && field.trim() === '') {
      field = '';
      quoted = true;
    } else if (char === delimiter) {
      row.push(field);
      field = '';
    } else if (char === '\n') endRow();
    else if (char === '\r') {
      endRow();
      if (text[index + 1] === '\n') index += 1;
    } else field += char;
    index += 1;
  }
  if (field !== '' || row.length > 0) endRow();
  return rows;
}

/** One CSV field, quoted when needed; formula-leading values are neutralised for spreadsheets. */
function csvField(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return '';
  let text = String(value);
  if (/^[=+\-@\t\r]/.test(text) && typeof value === 'string') text = `'${text}`;
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

/** Serialises rows (the first one is the header) as CSV with CRLF line ends. */
export function toCsv(rows: ReadonlyArray<ReadonlyArray<string | number | null | undefined>>): string {
  return `${rows.map((row) => row.map(csvField).join(',')).join('\r\n')}\r\n`;
}

// -----------------------------------------------------------------------------------------------
// Recategorisation file
// -----------------------------------------------------------------------------------------------

/** A line of a recategorisation CSV, before it is checked against the taxonomy. */
export interface CsvSuggestion {
  /** 1-based line number in the file (for error messages). */
  line: number;
  modId: number | null;
  manifestId: string | null;
  name: string | null;
  currentCategory: string | null;
  categorySlug: string;
  tagSlugs: string[];
  confidence: number | null;
  reason: string | null;
}

export type CsvProblem =
  | { kind: 'no-header' }
  | { kind: 'missing-column'; column: 'mod' | 'category' }
  | { kind: 'row'; line: number; reason: 'no-mod' | 'no-category' };

const normalise = (header: string) => header.toLowerCase().replace(/[^a-z0-9]/g, '');

const COLUMNS = {
  mod: ['modid', 'id', 'mod'],
  manifest: ['manifestid', 'manifest'],
  name: ['name', 'modname', 'title'],
  current: ['currentcategory', 'current', 'currentcategoryslug', 'from'],
  category: ['categoryslug', 'category', 'suggestedcategory', 'suggestedcategoryslug', 'suggested', 'to'],
  tags: ['tagslugs', 'tags', 'suggestedtags', 'tag'],
  confidence: ['confidence', 'score'],
  reason: ['reason', 'llmreason', 'why', 'rationale', 'source'],
} as const;

function columnIndex(headers: readonly string[], names: readonly string[]): number {
  for (const name of names) {
    const index = headers.indexOf(name);
    if (index >= 0) return index;
  }
  return -1;
}

function splitTags(value: string): string[] {
  return [
    ...new Set(
      value
        .split(/[|;,\s]+/)
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean),
    ),
  ];
}

function parseConfidence(value: string): number | null {
  const text = value.trim().replace('%', '').replace(',', '.');
  if (!text) return null;
  const number = Number(text);
  if (!Number.isFinite(number) || number < 0) return null;
  const ratio = number > 1 ? number / 100 : number;
  return Math.min(1, Math.round(ratio * 100) / 100);
}

/**
 * Reads a recategorisation CSV. A numeric value in the mod column is the mod id; any other value
 * there (or a `manifestId` column) is a manifest id resolved by the caller.
 */
export function readRecategorizeCsv(text: string): { rows: CsvSuggestion[]; problems: CsvProblem[] } {
  const table = parseCsv(text);
  const [header, ...body] = table;
  if (!header) return { rows: [], problems: [{ kind: 'no-header' }] };
  const headers = header.map(normalise);
  const at = {
    mod: columnIndex(headers, COLUMNS.mod),
    manifest: columnIndex(headers, COLUMNS.manifest),
    name: columnIndex(headers, COLUMNS.name),
    current: columnIndex(headers, COLUMNS.current),
    category: columnIndex(headers, COLUMNS.category),
    tags: columnIndex(headers, COLUMNS.tags),
    confidence: columnIndex(headers, COLUMNS.confidence),
    reason: columnIndex(headers, COLUMNS.reason),
  };
  const problems: CsvProblem[] = [];
  if (at.mod < 0 && at.manifest < 0) problems.push({ kind: 'missing-column', column: 'mod' });
  if (at.category < 0) problems.push({ kind: 'missing-column', column: 'category' });
  if (problems.length > 0) return { rows: [], problems };

  const cell = (row: readonly string[], index: number) => (index >= 0 ? (row[index] ?? '').trim() : '');
  const rows: CsvSuggestion[] = [];
  body.forEach((row, offset) => {
    const line = offset + 2;
    const modCell = cell(row, at.mod);
    const numeric = /^\d{1,10}$/.test(modCell) ? Number(modCell) : null;
    const manifestId = cell(row, at.manifest) || (numeric === null && modCell ? modCell : '') || null;
    if (numeric === null && !manifestId) {
      problems.push({ kind: 'row', line, reason: 'no-mod' });
      return;
    }
    const categorySlug = cell(row, at.category).toLowerCase();
    if (!categorySlug) {
      problems.push({ kind: 'row', line, reason: 'no-category' });
      return;
    }
    rows.push({
      line,
      modId: numeric !== null && numeric > 0 ? numeric : null,
      manifestId,
      name: cell(row, at.name) || null,
      currentCategory: cell(row, at.current).toLowerCase() || null,
      categorySlug,
      tagSlugs: splitTags(cell(row, at.tags)),
      confidence: parseConfidence(cell(row, at.confidence)),
      reason: cell(row, at.reason) || null,
    });
  });
  return { rows, problems };
}

/** Starts a download of `content` as a file (CSV export). */
export function downloadText(filename: string, content: string, type = 'text/csv;charset=utf-8'): void {
  const url = URL.createObjectURL(new Blob([`﻿${content}`], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
