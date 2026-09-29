/**
 * The HTML content model the rendered tree must satisfy so that a browser, parsing the serialised
 * HTML, builds exactly the tree that `verifyTree` checked (no mutation XSS, no "surprise" DOM).
 *
 * The HTML parser silently restructures markup that breaks certain nesting rules: `<p>` closes
 * when a block starts, `<a>` inside `<a>` is split apart, a heading inside a heading is closed, an
 * `<li>` inside an `<li>` (and `<dd>`/`<dt>` alike) closes the first one, and anything that is not
 * a table part is foster-parented out of a table. parse5 (rehype-raw) applies those rules to the
 * author's raw HTML, but the sanitiser then unwraps elements that are not on the allowlist
 * (`<center>`, `<div>`, `<font>`…), and that can create exactly those forbidden nestings. This
 * module repairs them (`normaliseContentModel`, legacyHtml only: Markdown alone never produces
 * them) and describes them for the final check in `verify.ts`.
 */
import type { Element, ElementContent, Root } from 'hast';
import { element, isElement, isWhitespaceText, type Parent } from './hast.ts';

export const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

/**
 * Flow-only elements: never valid inside phrasing content (`<p>`, headings, `<a>`, `<b>`…).
 * Every one of them that can reach the output also implicitly closes an open `<p>` in the parser.
 */
export const FLOW_ONLY: ReadonlySet<string> = new Set([
  'address',
  'article',
  'aside',
  'blockquote',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  ...HEADINGS,
  'header',
  'hgroup',
  'hr',
  'legend',
  'li',
  'listing',
  'main',
  'nav',
  'ol',
  'p',
  'pre',
  'search',
  'section',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'tr',
  'ul',
]);

/** Elements whose content must be phrasing content only (they are split around blocks). */
export const PHRASING_HOLDERS: ReadonlySet<string> = new Set(['p', ...HEADINGS]);

/** Elements that may not directly contain one another (the parser closes the outer one). */
export const SELF_CLOSING_SIBLINGS: Readonly<Record<string, readonly string[]>> = {
  li: ['li'],
  dt: ['dt', 'dd'],
  dd: ['dt', 'dd'],
};

/** Allowed element children of the table structure; anything else is foster-parented. */
export const TABLE_CHILDREN: Readonly<Record<string, readonly string[]>> = {
  table: ['thead', 'tbody', 'tfoot'],
  thead: ['tr'],
  tbody: ['tr'],
  tfoot: ['tr'],
  tr: ['td', 'th'],
};

/**
 * Presentational flow containers of legacy HTML. They are not on any allowlist, so they are
 * unwrapped before the legacy repairs (`legacy.ts`) with their inline content turned into paragraphs, the
 * way a browser showed them: each on its own line.
 */
export const FLOW_CONTAINERS: ReadonlySet<string> = new Set([
  'address',
  'article',
  'aside',
  'center',
  'dialog',
  'div',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'legend',
  'main',
  'nav',
  'search',
  'section',
]);

/** Elements whose content is removed with them by the sanitiser: never restructured. */
const OPAQUE = new Set(['iframe', 'math', 'noscript', 'script', 'style', 'svg', 'template', 'textarea', 'xmp']);

export function isFlow(node: ElementContent | undefined): node is Element {
  return node?.type === 'element' && FLOW_ONLY.has(node.tagName);
}

/** Phrasing elements that may hold other elements (formatting, links, unknown inline tags). */
function isPhrasingWrapper(node: ElementContent): node is Element {
  return node.type === 'element' && !FLOW_ONLY.has(node.tagName) && !OPAQUE.has(node.tagName);
}

/** Text that is not whitespace, or any element. */
export function isMeaningful(node: ElementContent): boolean {
  if (node.type === 'text') return !isWhitespaceText(node);
  return node.type === 'element';
}

function clone(template: Element, children: ElementContent[]): Element {
  const properties = Object.fromEntries(
    Object.entries(template.properties).map(([key, value]) => [key, Array.isArray(value) ? [...value] : value]),
  );
  return { type: 'element', tagName: template.tagName, properties, children };
}

/**
 * A phrasing wrapper (`<b>`, `<a>`, `<font>`…) that holds blocks is pushed down into them:
 * `<a href=x><h2>T</h2><p>y</p></a>` → `<h2><a href=x>T</a></h2><p><a href=x>y</a></p>`. Runs of
 * inline content keep a copy of the wrapper; whitespace-only runs are left bare.
 */
function distribute(wrapper: Element, children: ElementContent[]): ElementContent[] {
  const out: ElementContent[] = [];
  let run: ElementContent[] = [];
  const flush = () => {
    if (run.some(isMeaningful)) out.push(clone(wrapper, run));
    else out.push(...run);
    run = [];
  };
  for (const child of children) {
    if (isFlow(child)) {
      flush();
      child.children = distribute(wrapper, child.children);
      out.push(child);
    } else {
      run.push(child);
    }
  }
  flush();
  return out;
}

/**
 * Splits a container around the children it may not hold: `<p>a<ul>…</ul>b</p>` →
 * `<p>a</p><ul>…</ul><p>b</p>`, `<li>a<li>b</li></li>` → `<li>a</li><li>b</li>`.
 */
function split(holder: Element, forbidden: (node: ElementContent) => boolean): ElementContent[] {
  const out: ElementContent[] = [];
  let run: ElementContent[] = [];
  const flush = () => {
    if (run.some(isMeaningful)) out.push(clone(holder, run));
    run = [];
  };
  for (const child of holder.children) {
    if (forbidden(child)) {
      flush();
      out.push(child);
    } else {
      run.push(child);
    }
  }
  flush();
  return out;
}

/**
 * Moves what the parser would foster-parent out of a table (text, stray elements, a `<caption>`
 * turned into a paragraph) in front of it, and wraps loose rows and cells in the implied
 * `<tbody>`/`<tr>`. Returns the nodes to put in place of the table.
 */
function fosterTable(table: Element): ElementContent[] {
  const fostered: ElementContent[] = [];
  const keep = (parent: Element): void => {
    const allowed = TABLE_CHILDREN[parent.tagName] ?? [];
    const out: ElementContent[] = [];
    const created: Element[] = [];
    let implied: Element | null = null;
    for (const child of parent.children) {
      if (child.type === 'text' && isWhitespaceText(child)) {
        (implied === null ? out : implied.children).push(child);
        continue;
      }
      if (child.type === 'element' && allowed.includes(child.tagName)) {
        implied = null;
        if (child.tagName in TABLE_CHILDREN) keep(child);
        out.push(child);
        continue;
      }
      // Rows directly in a table and cells directly in a table or a section get their implied parent.
      const impliedTag =
        parent.tagName === 'table' && isElement(child, ['tr', 'td', 'th'])
          ? 'tbody'
          : parent.tagName !== 'tr' && isElement(child, ['td', 'th'])
            ? 'tr'
            : null;
      if (impliedTag !== null) {
        if (implied === null || implied.tagName !== impliedTag) {
          implied = element(impliedTag);
          created.push(implied);
          out.push(implied);
        }
        implied.children.push(child);
        continue;
      }
      implied = null;
      fostered.push(...fosteredContent(child));
    }
    parent.children = out;
    // The implied parents created above: their content has not been checked yet.
    for (const node of created) keep(node);
  };
  keep(table);
  return [...fostered, table];
}

/**
 * What a browser shows for a node moved out of a table: a caption's content (as a paragraph when
 * it is inline), nothing for column groups and comments, anything else as it is.
 */
function fosteredContent(node: ElementContent): ElementContent[] {
  if (node.type === 'comment') return [];
  if (node.type !== 'element') return [node];
  if (node.tagName === 'col' || node.tagName === 'colgroup') return [];
  if (node.tagName !== 'caption') return [node];
  return node.children.some(isFlow) ? node.children : [element('p', {}, node.children)];
}

interface Frame {
  node: Parent;
  /** Inside an `<a>` (the node itself or an ancestor). */
  inLink: boolean;
  /** Inside a `<summary>` (the node itself or an ancestor). */
  inSummary: boolean;
}

/**
 * Repairs every nesting the HTML parser would restructure, bottom-up, so that phrasing content
 * never holds blocks, links never nest, `<input>` never sits inside a link or a `<summary>`, list
 * items and description terms never nest directly, and tables hold only table parts. Iterative
 * over the tree (depth is author-controlled); the push-down of wrappers only recurses into the
 * blocks inside one wrapper.
 */
export function normaliseContentModel(tree: Root): void {
  const frames: Frame[] = [];
  const stack: Frame[] = [{ node: tree, inLink: false, inSummary: false }];
  while (stack.length > 0) {
    const frame = stack.pop() as Frame;
    frames.push(frame);
    for (const child of frame.node.children) {
      if (child.type !== 'element' || OPAQUE.has(child.tagName)) continue;
      stack.push({
        node: child,
        inLink: frame.inLink || child.tagName === 'a',
        inSummary: frame.inSummary || child.tagName === 'summary',
      });
    }
  }
  // Reverse pre-order: every node is repaired after all of its descendants.
  for (let i = frames.length - 1; i >= 0; i--) {
    const { node, inLink, inSummary } = frames[i] as Frame;
    const out: ElementContent[] = [];
    for (const child of node.children as ElementContent[]) {
      if (child.type !== 'element') {
        out.push(child);
        continue;
      }
      if (child.tagName === 'a' && inLink) {
        out.push(...child.children);
        continue;
      }
      if (child.tagName === 'input' && (inLink || inSummary)) continue;
      if (child.tagName === 'table') {
        out.push(...fosterTable(child));
        continue;
      }
      const siblings = SELF_CLOSING_SIBLINGS[child.tagName];
      if (siblings && child.children.some((grandchild) => isElement(grandchild, siblings))) {
        out.push(...split(child, (grandchild) => isElement(grandchild, siblings)));
        continue;
      }
      if (PHRASING_HOLDERS.has(child.tagName) && child.children.some(isFlow)) {
        out.push(...split(child, isFlow));
        continue;
      }
      if (isPhrasingWrapper(child) && child.children.some(isFlow)) {
        out.push(...distribute(child, child.children));
        continue;
      }
      out.push(child);
    }
    node.children = out as typeof node.children;
  }
}
