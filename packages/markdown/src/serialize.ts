/**
 * HTML serialiser for verified trees.
 *
 * `verifyTree` guarantees a closed set of HTML elements and properties, so serialising is simple:
 * no foreign content, no raw-text elements, no comments. This is ~4× faster than
 * `hast-util-to-html` (rehype-stringify), which was a quarter of the render budget; the tests
 * check that browsers parse both outputs into the same DOM for every fixture and XSS vector.
 *
 * Escaping: text escapes `&`, `<` and `>`; attribute values (always double-quoted) escape `&`,
 * `"`, `<` and `>`. A newline at the start of `<pre>` is doubled, because the HTML parser drops
 * the first one.
 */
import type { Element, Nodes, Root } from 'hast';
import { MarkdownSafetyError } from './verify.ts';

const VOID = new Set(['br', 'hr', 'img', 'input']);

/** hast property name → HTML attribute name, for every property `verifyTree` allows. */
const ATTRIBUTES: Readonly<Record<string, string>> = {
  align: 'align',
  alt: 'alt',
  ariaHidden: 'aria-hidden',
  checked: 'checked',
  className: 'class',
  dataMdLabel: 'data-md-label',
  dataYoutubeId: 'data-youtube-id',
  dataYoutubeStart: 'data-youtube-start',
  decoding: 'decoding',
  disabled: 'disabled',
  height: 'height',
  href: 'href',
  id: 'id',
  loading: 'loading',
  open: 'open',
  referrerPolicy: 'referrerpolicy',
  rel: 'rel',
  role: 'role',
  src: 'src',
  start: 'start',
  tabIndex: 'tabindex',
  title: 'title',
  type: 'type',
  width: 'width',
};

// Separate non-global patterns for the fast-path checks: `test` on a /g regex is stateful.
const HAS_TEXT_SPECIAL = /[&<>]/;
const HAS_ATTRIBUTE_SPECIAL = /[&"<>]/;
const TEXT_SPECIAL = /[&<>]/g;
const ATTRIBUTE_SPECIAL = /[&"<>]/g;
const REPLACEMENTS: Readonly<Record<string, string>> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const replace = (char: string) => REPLACEMENTS[char] as string;

function escapeText(value: string): string {
  return HAS_TEXT_SPECIAL.test(value) ? value.replace(TEXT_SPECIAL, replace) : value;
}

function escapeAttribute(value: string): string {
  return HAS_ATTRIBUTE_SPECIAL.test(value) ? value.replace(ATTRIBUTE_SPECIAL, replace) : value;
}

function attributes(node: Element): string {
  let out = '';
  for (const key in node.properties) {
    const value = node.properties[key];
    if (value === undefined || value === null || value === false) continue;
    const name = ATTRIBUTES[key];
    if (name === undefined) throw new MarkdownSafetyError(`Unsafe markdown output: property ${key}`);
    if (value === true) out += ` ${name}`;
    else out += ` ${name}="${escapeAttribute(Array.isArray(value) ? value.join(' ') : String(value))}"`;
  }
  return out;
}

function serialize(node: Nodes, parts: string[]): void {
  switch (node.type) {
    case 'text':
      parts.push(escapeText(node.value));
      return;
    case 'root':
      for (const child of node.children) serialize(child, parts);
      return;
    case 'element': {
      parts.push(`<${node.tagName}${attributes(node)}>`);
      if (VOID.has(node.tagName)) return;
      const first = node.children[0];
      if (node.tagName === 'pre' && first?.type === 'text' && first.value.startsWith('\n')) parts.push('\n');
      for (const child of node.children) serialize(child, parts);
      parts.push(`</${node.tagName}>`);
      return;
    }
    default:
      throw new MarkdownSafetyError(`Unsafe markdown output: node of type ${node.type}`);
  }
}

/** Serialises a tree that passed `verifyTree`. Recursion depth is bounded by `MAX_NESTING_DEPTH`. */
export function toSafeHtml(tree: Root): string {
  const parts: string[] = [];
  serialize(tree, parts);
  return parts.join('');
}
