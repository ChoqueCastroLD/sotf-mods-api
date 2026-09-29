/**
 * Markdown → hast with markdown-it.
 *
 * markdown-it tokenises CommonMark + GFM tables and strikethrough in linear time with a
 * nesting cap, about 20× faster than micromark on real descriptions (see README, "Why
 * markdown-it"). This module turns its token stream into a hast tree for the rest of the pipeline:
 * rehype-raw (legacyHtml only) / rehype-sanitize → trusted enhancers → verifyTree → closed-set
 * serialiser (serialize.ts).
 *
 * Profile rules applied here:
 * - raw HTML is only tokenised in `legacyHtml` (as hast `raw` nodes for rehype-raw); elsewhere
 *   markdown-it keeps it as literal text;
 * - GFM footnotes are not a markdown-it core feature: `[^1]` stays literal text (the legacy site
 *   never supported them either);
 * - `lite` turns headings into bold paragraphs and images into links, and has no tables;
 * - every newline inside a paragraph is a line break (legacy showdown `simpleLineBreaks`,
 *   Discord, GitHub comments).
 */
import type { Element, ElementContent, Properties, Root } from 'hast';
import MarkdownItConstructor, { type MarkdownIt, type Token } from 'markdown-it';
import type { MarkdownProfile } from './types.ts';
import { LINK_PROTOCOLS, safeUrl } from './url.ts';

type Parent = Root | Element;

/** Block nesting cap of markdown-it. Deeper content would be dropped, so the caller falls back. */
export const PARSER_MAX_NESTING = 100;

/**
 * Raw HTML is interpreted (`legacyHtml`) only up to this many tags: the HTML parser's cost grows
 * with nesting depth, and legacy descriptions use a few dozen tags at most.
 */
export const MAX_RAW_HTML_TAGS = 1000;

const parsers = new Map<string, MarkdownIt>();

export function markdownParser(profile: MarkdownProfile, html = profile === 'legacyHtml'): MarkdownIt {
  const key = `${profile}:${html}`;
  let md = parsers.get(key);
  if (md) return md;
  md = new MarkdownItConstructor('default', {
    html,
    breaks: true,
    // Bare URLs are linked later, on the sanitised tree (see autolink.ts).
    linkify: false,
    typographer: false,
  });
  // Present in every preset but missing from the published option types.
  (md.options as { maxNesting?: number }).maxNesting = PARSER_MAX_NESTING;
  // Only http(s), mailto and relative destinations become links; anything else stays literal
  // text, so `[x](javascript:…)` is shown instead of silently disappearing.
  md.validateLink = (url: string) => safeUrl(url, LINK_PROTOCOLS) !== null;
  if (profile === 'lite') md.disable(['table']);
  // Legacy content: HTML is always inline, so Markdown inside it is parsed, as showdown did.
  if (profile === 'legacyHtml') md.disable(['html_block']);
  parsers.set(key, md);
  return md;
}

function element(tagName: string, properties: Properties = {}, children: ElementContent[] = []): Element {
  return { type: 'element', tagName, properties, children };
}

function raw(value: string): ElementContent {
  // `raw` nodes are the hast convention for unparsed HTML; rehype-raw replaces them.
  return { type: 'raw', value } as unknown as ElementContent;
}

function alignOf(token: Token): string | undefined {
  const style = token.attrGet('style');
  const match = typeof style === 'string' ? /text-align:\s*(left|center|right)/.exec(style) : null;
  return match?.[1];
}

/** Plain text of inline tokens (image alt text, as markdown-it renders it). */
function inlineText(tokens: readonly Token[] | null): string {
  let out = '';
  for (const token of tokens ?? []) {
    if (token.type === 'image') out += inlineText(token.children);
    else if (token.type === 'softbreak' || token.type === 'hardbreak') out += '\n';
    else out += token.content;
  }
  return out;
}

/** Blocks whose children start on a new line in the output (readability only). */
const CONTAINERS = new Set(['blockquote', 'ol', 'table', 'tbody', 'thead', 'tr', 'ul']);

const TASK = /^\[([ xX])\](?=[ \t]|$)[ \t]*/;

export interface ParseResult {
  tree: Root;
  /** True when the input hit the parser nesting cap (content may be missing). */
  truncated: boolean;
  /** True when the tree holds raw HTML (`raw` nodes, `legacyHtml` only) that rehype-raw must parse. */
  hasRaw: boolean;
}

function countTags(source: string): number {
  let count = 0;
  for (const _ of source.matchAll(/<\/?[A-Za-z]/g)) {
    count += 1;
    if (count > MAX_RAW_HTML_TAGS) break;
  }
  return count;
}

/**
 * Reproduces how the legacy site fed descriptions to showdown (`markdownToHTML` in the legacy
 * `shared.js`): every blank line became a `<br>` appended to the previous line, so blank lines
 * never ended a block and raw HTML spanning "paragraphs" stayed in one piece. Blank lines inside
 * fenced code are kept. Two more showdown/browser leniencies are reproduced: ATX headings without a
 * space (`###Title`) and end tags with attributes (`</FONT COLOR>`).
 */
export function legacySource(source: string): string {
  const out: string[] = [];
  let fence: string | null = null;
  for (const line of source.split('\n')) {
    const marker = /^[ \t]*(`{3,}|~{3,})/.exec(line)?.[1];
    if (fence !== null) {
      if (marker && marker[0] === fence[0] && marker.length >= fence.length) fence = null;
      out.push(line);
      continue;
    }
    if (marker) fence = marker;
    if (line.trim() === '' && fence === null) {
      if (out.length > 0) out[out.length - 1] += '<br>';
      continue;
    }
    out.push(
      line
        // `###Title`: showdown accepted ATX headings without the space CommonMark requires.
        .replace(/^([ \t]{0,3}#{1,6})(?=[^#\s])/, '$1 ')
        .replace(/<\/([A-Za-z][A-Za-z0-9-]*)\s[^<>]*>/g, '</$1>'),
    );
  }
  return out.join('\n');
}

export function parseMarkdown(source: string, profile: MarkdownProfile): ParseResult {
  const html = profile === 'legacyHtml' && countTags(source) <= MAX_RAW_HTML_TAGS;
  const md = markdownParser(profile, html);
  const tokens = md.parse(html ? legacySource(source) : source, {});
  const root: Root = { type: 'root', children: [] };
  const stack: Parent[] = [root];
  let truncated = false;
  let hasRaw = false;
  const top = (): Parent => stack[stack.length - 1] as Parent;
  const append = (node: ElementContent) => (top().children as ElementContent[]).push(node);
  const open = (node: Element) => {
    append(node);
    stack.push(node);
    if (CONTAINERS.has(node.tagName)) append({ type: 'text', value: '\n' });
  };
  const close = () => {
    stack.pop();
    append({ type: 'text', value: '\n' });
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i] as Token;
    if (token.level >= PARSER_MAX_NESTING - 1) truncated = true;
    switch (token.type) {
      case 'paragraph_open':
        if (!token.hidden) open(element('p'));
        break;
      case 'heading_open':
        if (profile === 'lite') {
          open(element('p'));
          open(element('strong'));
        } else {
          open(element(token.tag));
        }
        break;
      case 'heading_close':
        if (profile === 'lite') stack.pop();
        close();
        break;
      case 'blockquote_open':
        open(element('blockquote'));
        break;
      case 'bullet_list_open':
        open(element('ul'));
        break;
      case 'ordered_list_open': {
        const start = Number(token.attrGet('start') ?? 1);
        open(element('ol', Number.isInteger(start) && start !== 1 && start >= 0 ? { start } : {}));
        break;
      }
      case 'list_item_open': {
        const item = element('li');
        open(item);
        if (profile !== 'lite') markTaskItem(tokens, i, item, stack[stack.length - 2] as Element);
        break;
      }
      case 'table_open':
        open(element('table'));
        break;
      case 'thead_open':
      case 'tbody_open':
      case 'tr_open':
        open(element(token.tag));
        break;
      case 'th_open':
      case 'td_open': {
        const align = alignOf(token);
        open(element(token.tag, align ? { align } : {}));
        break;
      }
      case 'paragraph_close':
        if (!token.hidden) close();
        break;
      case 'blockquote_close':
      case 'bullet_list_close':
      case 'ordered_list_close':
      case 'list_item_close':
      case 'table_close':
      case 'thead_close':
      case 'tbody_close':
      case 'tr_close':
      case 'th_close':
      case 'td_close':
        close();
        break;
      case 'hr':
        append(element('hr'));
        append({ type: 'text', value: '\n' });
        break;
      case 'fence':
      case 'code_block': {
        const language = token.type === 'fence' ? token.info.trim().split(/\s+/)[0] : '';
        const code = element('code', language ? { className: [`language-${language}`] } : {}, [
          { type: 'text', value: token.content },
        ]);
        append(element('pre', {}, [code]));
        append({ type: 'text', value: '\n' });
        break;
      }
      case 'html_block':
        hasRaw = true;
        append(raw(token.content));
        break;
      case 'inline':
        if (appendInline(top(), token.children ?? [], profile)) hasRaw = true;
        break;
      default:
        break;
    }
  }
  return { tree: root, truncated, hasRaw };
}

/** GFM task list item: `- [x] done` → checkbox + text; the list gets `contains-task-list`. */
function markTaskItem(tokens: readonly Token[], index: number, item: Element, list: Element): void {
  const paragraph = tokens[index + 1];
  const inline = tokens[index + 2];
  if (paragraph?.type !== 'paragraph_open' || inline?.type !== 'inline') return;
  const first = inline.children?.[0];
  if (first?.type !== 'text') return;
  const match = TASK.exec(first.content);
  if (!match) return;
  first.content = first.content.slice(match[0].length);
  item.properties.className = ['task-list-item'];
  list.properties.className = ['contains-task-list'];
  const checkbox = element('input', {
    type: 'checkbox',
    disabled: true,
    ...(match[1] === ' ' ? {} : { checked: true }),
  });
  first.meta = { ...first.meta, taskCheckbox: checkbox };
}

/** Appends inline tokens as hast; returns true when raw HTML was appended. */
function appendInline(parent: Parent, tokens: readonly Token[], profile: MarkdownProfile): boolean {
  let hasRaw = false;
  const stack: Parent[] = [parent];
  const top = (): Parent => stack[stack.length - 1] as Parent;
  const append = (...nodes: ElementContent[]) => (top().children as ElementContent[]).push(...nodes);
  const inLink = () => stack.some((node) => node.type === 'element' && node.tagName === 'a');
  const open = (node: Element) => {
    append(node);
    stack.push(node);
  };

  for (const token of tokens) {
    switch (token.type) {
      case 'text':
      case 'text_special': {
        const checkbox = token.meta?.taskCheckbox as Element | undefined;
        if (checkbox) append(checkbox, { type: 'text', value: ' ' });
        if (token.content) append({ type: 'text', value: token.content });
        break;
      }
      case 'softbreak':
      case 'hardbreak':
        append(element('br'));
        append({ type: 'text', value: '\n' });
        break;
      case 'code_inline':
        append(element('code', {}, [{ type: 'text', value: token.content }]));
        break;
      case 'em_open':
      case 'strong_open':
        open(element(token.tag));
        break;
      case 's_open':
        open(element('del'));
        break;
      case 'link_open': {
        const href = token.attrGet('href');
        const title = token.attrGet('title');
        open(element('a', { href: String(href ?? ''), ...(title ? { title: String(title) } : {}) }));
        break;
      }
      case 'em_close':
      case 'strong_close':
      case 's_close':
      case 'link_close':
        if (stack.length > 1) stack.pop();
        break;
      case 'image': {
        const src = String(token.attrGet('src') ?? '');
        const alt = inlineText(token.children);
        const title = token.attrGet('title');
        if (profile === 'lite') {
          if (inLink()) append({ type: 'text', value: alt });
          else
            append(
              element('a', { href: src, ...(title ? { title: String(title) } : {}) }, [
                { type: 'text', value: alt || src },
              ]),
            );
        } else {
          append(element('img', { src, alt, ...(title ? { title: String(title) } : {}) }));
        }
        break;
      }
      case 'html_inline':
        hasRaw = true;
        append(raw(token.content));
        break;
      default:
        if (token.content) append({ type: 'text', value: token.content });
        break;
    }
  }
  return hasRaw;
}

/** True when the text contains raw HTML (only `legacyHtml` renders it as markup). */
export function containsRawHtml(source: string): boolean {
  const tokens = markdownParser('legacyHtml').parse(source, {});
  return tokens.some(
    (token) => token.type === 'html_block' || (token.children ?? []).some((child) => child.type === 'html_inline'),
  );
}
