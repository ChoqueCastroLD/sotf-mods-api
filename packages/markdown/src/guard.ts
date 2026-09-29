/**
 * Nesting guard, applied before parsing.
 *
 * markdown-it stops parsing blocks at its nesting cap and silently drops the rest, and deep trees
 * are expensive for every later step. Real documents never nest more than a handful of quotes and
 * lists, so a line that opens more than {@link MAX_LINE_CONTAINERS} nested quotes/lists, or a list
 * marker or quote indented more than {@link MAX_INDENT} columns, gets its first marker escaped:
 * the line then renders as the literal text the author typed. Together these keep the block depth
 * far below the parser cap (see parse.ts).
 *
 * It also escapes GFM footnote definitions (`[^1]: text`): markdown-it has no footnotes and would
 * read them as invisible link definitions, while v2 shows footnotes as the literal text typed.
 *
 * Lines inside fenced code are never touched.
 */

export const MAX_LINE_CONTAINERS = 12;
export const MAX_INDENT = 48;

/** A GFM footnote definition (`[^1]: text`), which markdown-it would read as a link definition. */
const FOOTNOTE_DEFINITION = /^( {0,3})\[(?=\^[^\]\n]+\]:)/;
const FENCE = /^(?:[ \t]*>)*[ \t]*(`{3,}|~{3,})/;
const CONTAINER_MARKER = /^([ \t]*)(>|[-*+](?=[ \t]|$)|\d{1,9}[.)](?=[ \t]|$))/;

function indentWidth(whitespace: string): number {
  let width = 0;
  for (const char of whitespace) width += char === '\t' ? 4 - (width % 4) : 1;
  return width;
}

/** Inserts a backslash before the marker at `index` (before the `.`/`)` of an ordered marker). */
function escapeAt(line: string, index: number): string {
  const ordered = /^\d{1,9}(?=[.)])/.exec(line.slice(index));
  const at = ordered ? index + ordered[0].length : index;
  return `${line.slice(0, at)}\\${line.slice(at)}`;
}

/** Escapes the first container marker of a line that nests or indents too deep. */
function defuseLine(line: string): string {
  let offset = 0;
  let count = 0;
  let first = -1;
  for (;;) {
    const match = CONTAINER_MARKER.exec(line.slice(offset));
    if (!match) return line;
    const indent = match[1] as string;
    const marker = match[2] as string;
    const markerStart = offset + indent.length;
    if (first === -1) {
      first = markerStart;
      if (indentWidth(indent) > MAX_INDENT) return escapeAt(line, markerStart);
    }
    count += 1;
    if (count > MAX_LINE_CONTAINERS) return escapeAt(line, first);
    offset = markerStart + marker.length;
  }
}

export function defuse(source: string): string {
  if (!/[>\-*+.)[]/.test(source)) return source;
  const lines = source.split('\n');
  let fence: string | null = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] as string;
    const fenceMatch = FENCE.exec(line);
    if (fence !== null) {
      const marker = fenceMatch?.[1];
      if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null;
      continue;
    }
    if (fenceMatch) {
      fence = fenceMatch[1] as string;
      continue;
    }
    lines[i] = defuseLine(line).replace(FOOTNOTE_DEFINITION, '$1\\[');
  }
  return lines.join('\n');
}
