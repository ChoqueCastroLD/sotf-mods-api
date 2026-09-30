/**
 * RFC 4180 CSV writer for exports (creator analytics). Cells that a spreadsheet would evaluate as
 * a formula (`=`, `+`, `-`, `@`, tab, CR at the start: mod names are user data) are prefixed with
 * `'` (OWASP "CSV injection"); numbers are written as-is.
 */

/** UTF-8 byte order mark: Excel needs it to read non-ASCII names correctly. */
export const CSV_BOM = '﻿';

export type CsvCell = string | number | null | undefined;

export function csvCell(value: CsvCell): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : '';
  let text = value;
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/** Header + rows, CRLF line endings, BOM first. */
export function toCsv(header: readonly string[], lines: ReadonlyArray<readonly CsvCell[]>): string {
  const out = [header.map(csvCell).join(',')];
  for (const line of lines) out.push(line.map(csvCell).join(','));
  return `${CSV_BOM}${out.join('\r\n')}\r\n`;
}
