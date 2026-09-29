/**
 * Last line of defence: every tree is checked against a closed allowlist right before it is
 * serialised. The sanitiser already enforces the author-facing allowlist; this check also covers
 * the trusted enhancers, so a bug there fails loudly instead of shipping unsafe HTML.
 *
 * It also checks the content model (content-model.ts): the nestings that an HTML parser would
 * restructure (a block in a paragraph or in inline content, a link in a link, a heading in a
 * heading, `<li>` directly in `<li>`, anything but table parts in a table) and interactive
 * content inside a link, a `<summary>` or a spoiler button. With those excluded, a browser parsing
 * the serialised HTML builds exactly the tree verified here.
 */
import type { Element, Nodes, Root } from 'hast';
import { FLOW_ONLY, PHRASING_HOLDERS, SELF_CLOSING_SIBLINGS, TABLE_CHILDREN } from './content-model.ts';
import { DEFAULT_LABELS } from './labels.ts';
import { SANITIZE_SCHEMAS } from './schema.ts';
import type { MarkdownProfile } from './types.ts';
import { LINK_PROTOCOLS, MEDIA_PROTOCOLS, safeUrl } from './url.ts';

export class MarkdownSafetyError extends Error {
  override readonly name = 'MarkdownSafetyError';
}

type Rule = true | readonly string[] | RegExp;

/** Properties (hast names) allowed per element, including what the enhancers add. */
const PROPERTIES: Readonly<Record<string, Readonly<Record<string, Rule>>>> = {
  a: {
    href: true,
    title: true,
    rel: ['ugc', 'nofollow', 'noopener'],
    className: ['md-anchor', 'md-mention', 'md-youtube-link'],
    ariaHidden: ['true'],
    tabIndex: ['-1'],
    dataYoutubeId: /^[A-Za-z0-9_-]{11}$/,
    dataYoutubeStart: /^\d{1,7}$/,
  },
  code: { className: /^language-[a-z0-9][a-z0-9_+#.-]{0,31}$/i },
  details: { open: true },
  div: { className: /^md-alert(?:-(?:note|tip|important|warning|caution))?$/, role: ['note'] },
  figure: { className: ['md-youtube'] },
  img: {
    src: true,
    alt: true,
    title: true,
    width: /^\d{1,6}$/,
    height: /^\d{1,6}$/,
    loading: ['lazy'],
    decoding: ['async'],
    referrerPolicy: ['no-referrer'],
    className: ['md-youtube-thumb'],
  },
  input: { type: ['checkbox'], checked: true, disabled: true },
  li: { className: ['task-list-item'] },
  ol: { start: /^\d{1,6}$/, className: ['contains-task-list'] },
  p: { className: ['md-alert-title'] },
  span: {
    className: ['md-spoiler'],
    role: ['button'],
    tabIndex: ['0'],
    ariaExpanded: ['false'],
    ariaLabel: [DEFAULT_LABELS.spoiler],
    dataMdLabel: /^(?:alert-(?:note|tip|important|warning|caution)|spoiler)$/,
  },
  td: { align: ['left', 'center', 'right'] },
  th: { align: ['left', 'center', 'right'] },
  ul: { className: ['contains-task-list'] },
};

const HEADING_ID = /^[a-z][a-z0-9-]*[\p{L}\p{M}\p{N}-]*$/u;
const ENHANCER_TAGS = ['div', 'figure', 'span'];

const ALLOWED_TAGS: Readonly<Record<MarkdownProfile, ReadonlySet<string>>> = {
  lite: new Set([...(SANITIZE_SCHEMAS.lite.tagNames ?? []), 'span']),
  full: new Set([...(SANITIZE_SCHEMAS.full.tagNames ?? []), ...ENHANCER_TAGS]),
  legacyHtml: new Set([...(SANITIZE_SCHEMAS.legacyHtml.tagNames ?? []), ...ENHANCER_TAGS]),
};

function matches(rule: Rule, value: unknown): boolean {
  if (rule === true) return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
  const values = Array.isArray(value) ? value : [value];
  return values.every((item) => {
    if (typeof item !== 'string' && typeof item !== 'number' && typeof item !== 'boolean') return false;
    const text = String(item);
    return rule instanceof RegExp ? rule.test(text) : rule.includes(text);
  });
}

function fail(message: string): never {
  throw new MarkdownSafetyError(`Unsafe markdown output: ${message}`);
}

/** Where a node sits, for the content-model checks. */
interface Context {
  /** Inside phrasing content: `<p>`, a heading or an inline element. */
  phrasing: boolean;
  inLink: boolean;
  inSummary: boolean;
  inButton: boolean;
}

const ROOT_CONTEXT: Context = { phrasing: false, inLink: false, inSummary: false, inButton: false };

/** Required parent of each table part (the parser inserts the missing ones). */
const TABLE_PARENT: Readonly<Record<string, readonly string[]>> = {
  thead: ['table'],
  tbody: ['table'],
  tfoot: ['table'],
  tr: ['thead', 'tbody', 'tfoot'],
  td: ['tr'],
  th: ['tr'],
};

function isButton(node: Element): boolean {
  return node.properties.role !== undefined || node.properties.tabIndex !== undefined;
}

function checkContentModel(node: Element, parent: Nodes, ctx: Context): Context {
  const { tagName } = node;
  const parentTag = parent.type === 'element' ? parent.tagName : null;
  if (ctx.phrasing && FLOW_ONLY.has(tagName)) fail(`<${tagName}> inside phrasing content`);
  if (tagName === 'a' && (ctx.inLink || ctx.inButton)) fail('<a> inside a link or a button');
  if (tagName === 'input' && (ctx.inLink || ctx.inSummary || ctx.inButton)) fail('<input> inside interactive content');
  const button = tagName === 'span' && isButton(node);
  if (button && (ctx.inLink || ctx.inSummary || ctx.inButton)) fail('spoiler button inside interactive content');
  const requiredParent = TABLE_PARENT[tagName];
  if (requiredParent && (parentTag === null || !requiredParent.includes(parentTag))) {
    fail(`<${tagName}> outside ${requiredParent.map((tag) => `<${tag}>`).join('/')}`);
  }
  const tableChildren = TABLE_CHILDREN[tagName];
  const siblings = SELF_CLOSING_SIBLINGS[tagName];
  for (const child of node.children) {
    if (tableChildren) {
      const whitespace = child.type === 'text' && /^[\t\n\f\r ]*$/.test(child.value);
      if (!whitespace && !(child.type === 'element' && tableChildren.includes(child.tagName))) {
        fail(`${child.type === 'element' ? `<${child.tagName}>` : 'text'} directly inside <${tagName}>`);
      }
    }
    if (siblings && child.type === 'element' && siblings.includes(child.tagName)) {
      fail(`<${child.tagName}> directly inside <${tagName}>`);
    }
  }
  return {
    phrasing: ctx.phrasing || PHRASING_HOLDERS.has(tagName) || !FLOW_ONLY.has(tagName),
    inLink: ctx.inLink || tagName === 'a',
    inSummary: ctx.inSummary || tagName === 'summary',
    inButton: ctx.inButton || button,
  };
}

export function verifyTree(tree: Root, profile: MarkdownProfile): void {
  const tags = ALLOWED_TAGS[profile];
  const stack: Array<{ node: Nodes; parent: Nodes; ctx: Context }> = [{ node: tree, parent: tree, ctx: ROOT_CONTEXT }];
  while (stack.length > 0) {
    const { node, parent, ctx } = stack.pop() as { node: Nodes; parent: Nodes; ctx: Context };
    let childCtx = ctx;
    switch (node.type) {
      case 'root':
        break;
      case 'text':
        continue;
      case 'element': {
        const { tagName, properties } = node;
        if (!tags.has(tagName)) fail(`element <${tagName}>`);
        const rules = PROPERTIES[tagName] ?? {};
        for (const [key, value] of Object.entries(properties)) {
          if (value === undefined || value === null || value === false) continue;
          if (/^h[1-6]$/.test(tagName) && key === 'id') {
            if (typeof value !== 'string' || !HEADING_ID.test(value)) fail(`heading id ${JSON.stringify(value)}`);
            continue;
          }
          const rule = rules[key];
          if (rule === undefined) fail(`property ${key} on <${tagName}>`);
          if (!matches(rule, value)) fail(`value of ${key} on <${tagName}>`);
          if (key === 'href' && safeUrl(value, LINK_PROTOCOLS) !== value) fail(`href ${JSON.stringify(value)}`);
          if (key === 'src' && safeUrl(value, MEDIA_PROTOCOLS) !== value) fail(`src ${JSON.stringify(value)}`);
        }
        childCtx = checkContentModel(node, parent, ctx);
        break;
      }
      default:
        fail(`node of type ${node.type}`);
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push({ node: node.children[i] as Nodes, parent: node, ctx: childCtx });
    }
  }
}
