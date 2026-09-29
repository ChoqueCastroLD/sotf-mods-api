/**
 * Plain-text projection of a rendered tree: search indexing, meta descriptions, `llms-full.txt`,
 * notification previews. Spoilers, images, heading anchors and UI labels are left out so a
 * snippet never reveals a spoiler or shows chrome. Whitespace follows HTML rules (newlines in text
 * are spaces, except inside `<pre>`); `<br>` is a newline, list items and table rows are lines and
 * other blocks are separated by a blank line.
 */
import type { Element, Nodes, Root } from 'hast';
import { hasClass } from './hast.ts';

/** Blocks separated from their surroundings by a blank line. */
const PARAGRAPH = new Set([
  'blockquote',
  'details',
  'div',
  'dl',
  'figure',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ol',
  'p',
  'pre',
  'table',
  'ul',
]);
/** Blocks on a line of their own. */
const LINE = new Set(['dd', 'dt', 'hr', 'li', 'summary', 'tr']);
const CELL = new Set(['td', 'th']);

function omitted(node: Element): boolean {
  return (
    node.tagName === 'img' ||
    node.tagName === 'input' ||
    hasClass(node, 'md-spoiler') ||
    hasClass(node, 'md-anchor') ||
    node.properties.dataMdLabel !== undefined
  );
}

/**
 * Recursive on purpose: rendered trees are at most `MAX_NESTING_DEPTH` (64) levels deep (deeper
 * input falls back to plain paragraphs before this runs), and recursion is much cheaper here.
 */
export function toPlainText(tree: Root): string {
  const lines: string[] = [];
  let line = '';
  /** Newlines owed before the next piece of text (blocks never emit leading or double gaps). */
  let owed = 0;

  const emit = (value: string) => {
    if (owed > 0) {
      if (lines.length > 0 || line.trim() !== '') {
        lines.push(line);
        if (owed > 1) lines.push('');
      }
      line = '';
      owed = 0;
    }
    line += value;
  };

  const walk = (node: Nodes, pre: boolean): void => {
    if (node.type === 'text') {
      if (pre) {
        const [first = '', ...rest] = node.value.replace(/\n$/, '').split('\n');
        emit(first);
        for (const next of rest) {
          owed = Math.max(owed, 1);
          emit(next === '' ? ' ' : next);
        }
        return;
      }
      const value =
        node.value.includes('\n') || node.value.includes('\t') ? node.value.replace(/[\t\n\f\r ]+/g, ' ') : node.value;
      if (value.trim() !== '' || (line !== '' && owed === 0)) emit(value);
      return;
    }
    if (node.type !== 'element' && node.type !== 'root') return;
    let breaks = 0;
    let childPre = pre;
    if (node.type === 'element') {
      if (omitted(node)) return;
      if (node.tagName === 'br') {
        owed = Math.max(owed, 1);
        return;
      }
      breaks = PARAGRAPH.has(node.tagName) ? 2 : LINE.has(node.tagName) ? 1 : 0;
      if (breaks > 0) owed = Math.max(owed, breaks);
      else if (CELL.has(node.tagName) && line.trim() !== '') emit(' ');
      childPre = pre || node.tagName === 'pre';
    }
    for (const child of node.children) walk(child, childPre);
    if (breaks > 0) owed = Math.max(owed, breaks);
  };

  walk(tree, false);
  lines.push(line);
  return lines
    .map((value) =>
      value
        .replace(/\u00a0/g, ' ')
        .replace(/[\t ]+/g, ' ')
        .trim(),
    )
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
