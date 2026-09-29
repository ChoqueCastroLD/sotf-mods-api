/**
 * Repairs for the raw HTML written for the legacy site (profile `legacyHtml`), applied to the
 * parsed tree before sanitising. The legacy site rendered descriptions with showdown and injected
 * them with `innerHTML`, so authors got away with markup that a strict allowlist would otherwise
 * flatten:
 *
 * - `<li>` without a list (`<li/> item`, `<dl><li>…</dl>`) → wrapped in (or renamed to) `<ul>`;
 * - `<br>` used as spacing between blocks (`<h1>…</h1><br/>`, `</li><br />`) or at the start or
 *   end of a block → dropped, prose margins do that job now;
 * - a paragraph broken by two or more `<br>` (a blank line on the legacy site) → two paragraphs;
 * - empty `<p></p>` spacers and empty headings → dropped;
 * - a YouTube `<iframe>` → a link to the video (rendered later as a click-to-load facade).
 *
 * - presentational flow containers (`div`, `center`, `section`…) → unwrapped, their inline content
 *   in paragraphs so that each stays on its own line;
 * - nestings the HTML parser would restructure once the sanitiser unwraps the elements around
 *   them (`<a href><h2>…</h2></a>`, `<b><p>…</p></b>`, a caption in a table…) → repaired by
 *   `normaliseContentModel` (content-model.ts), before and again after sanitising.
 *
 * Presentational inline wrappers (`font`, `big`, `span`…) need no code here: the sanitiser unwraps
 * every element that is not on the allowlist and keeps its text.
 */
import type { Element, ElementContent, Root } from 'hast';
import {
  FLOW_CONTAINERS,
  FLOW_ONLY,
  HEADINGS,
  isFlow,
  isMeaningful,
  normaliseContentModel,
  PHRASING_HOLDERS,
} from './content-model.ts';
import { collectParents, element, isElement, isWhitespaceText, type Parent, text } from './hast.ts';
import { youtubeFromUrl } from './youtube.ts';

const isBlock = isFlow;

/** Blocks whose leading and trailing `<br>` are spacing, not content. */
const TRIMMED = new Set(['blockquote', 'dd', 'details', 'dt', 'li', 'p', 'summary', 'td', 'th', ...HEADINGS]);

function isEmptyBlock(node: ElementContent): boolean {
  return (
    isElement(node, ['p', ...HEADINGS]) &&
    node.children.every((child) => isWhitespaceText(child) || isElement(child, 'br'))
  );
}

function isBreakOrSpace(node: ElementContent | undefined): boolean {
  return node !== undefined && (isWhitespaceText(node) || isElement(node, 'br'));
}

/** Removes `<br>` (and the whitespace around them) at the start and end of a block. */
function trimBreaks(node: Element): void {
  const children = node.children;
  let start = 0;
  while (start < children.length && isBreakOrSpace(children[start])) start += 1;
  let end = children.length;
  while (end > start && isBreakOrSpace(children[end - 1])) end -= 1;
  const hasBreak = (nodes: ElementContent[]) => nodes.some((child) => isElement(child, 'br'));
  if (hasBreak(children.slice(0, start)) || hasBreak(children.slice(end))) node.children = children.slice(start, end);
}

/** Wraps runs of loose inline content of a flow container (`</ul>Made by X`) in paragraphs. */
function wrapInlineRuns(parent: Parent): void {
  const children = parent.children as ElementContent[];
  const inline = (node: ElementContent) =>
    node.type === 'text' || (node.type === 'element' && !FLOW_ONLY.has(node.tagName) && node.tagName !== 'iframe');
  if (!children.some((node) => inline(node) && !isWhitespaceText(node) && !isElement(node, 'br'))) return;
  const out: ElementContent[] = [];
  let run: ElementContent[] = [];
  const flush = () => {
    if (run.some((node) => !isWhitespaceText(node) && !isElement(node, 'br'))) out.push(element('p', {}, run));
    else out.push(...run);
    run = [];
  };
  for (const child of children) {
    if (inline(child)) {
      run.push(child);
    } else {
      flush();
      out.push(child);
    }
  }
  flush();
  parent.children = out;
}

/** Splits a paragraph at every run of two or more `<br>`. */
function splitParagraph(node: Element): Element[] {
  const parts: ElementContent[][] = [[]];
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i] as ElementContent;
    if (isElement(child, 'br')) {
      let j = i + 1;
      let breaks = 1;
      while (j < children.length && isBreakOrSpace(children[j])) {
        if (isElement(children[j], 'br')) breaks += 1;
        j += 1;
      }
      if (breaks >= 2) {
        parts.push([]);
        i = j - 1;
        continue;
      }
    }
    (parts[parts.length - 1] as ElementContent[]).push(child);
  }
  if (parts.length === 1) return [node];
  return parts
    .map((part) => element('p', {}, part))
    .filter((paragraph) => {
      trimBreaks(paragraph);
      return !isEmptyBlock(paragraph);
    });
}

/** Nearest sibling that is neither whitespace nor `<br>`; `null` at the edge of the parent. */
function neighbour(children: readonly ElementContent[], index: number, step: 1 | -1): ElementContent | null {
  for (let i = index + step; i >= 0 && i < children.length; i += step) {
    const child = children[i] as ElementContent;
    if (!isWhitespaceText(child) && !isElement(child, 'br')) return child;
  }
  return null;
}

function isList(node: Parent): boolean {
  return node.type === 'element' && (node.tagName === 'ul' || node.tagName === 'ol');
}

/** Groups runs of orphan `<li>` (with only whitespace or `<br>` between them) into a `<ul>`. */
function wrapOrphanItems(parent: Parent): void {
  const out: ElementContent[] = [];
  let run: Element | null = null;
  let pending: ElementContent[] = [];
  for (const child of parent.children as ElementContent[]) {
    if (isElement(child, 'li')) {
      if (run === null) {
        run = element('ul');
        out.push(run);
      }
      run.children.push(child);
      pending = [];
      continue;
    }
    if (run !== null && (isWhitespaceText(child) || isElement(child, 'br'))) {
      pending.push(child);
      continue;
    }
    // Separators trailing a run are dropped only when a block follows; otherwise keep them.
    if (run !== null && !isBlock(child)) out.push(...pending.filter((node) => !isElement(node, 'br')));
    run = null;
    pending = [];
    out.push(child);
  }
  parent.children = out;
}

/** A YouTube `<iframe>` → a link to the video (in a paragraph when it stands at block level). */
function iframeToLink(node: Element, parent: Parent): ElementContent | null {
  const src = node.properties.src;
  const video = typeof src === 'string' ? youtubeFromUrl(src) : null;
  if (!video) return null;
  const link = element('a', { href: video.watchUrl }, [text(video.watchUrl)]);
  const phrasing =
    parent.type === 'element' &&
    (!FLOW_ONLY.has(parent.tagName) ||
      parent.tagName === 'p' ||
      (HEADINGS as readonly string[]).includes(parent.tagName));
  return phrasing ? link : element('p', {}, [link]);
}

/**
 * Unwraps the presentational flow containers (`<div>`, `<center>`, `<section>`…), bottom-up. A
 * container that is the only content of its parent is replaced by its content; otherwise its
 * inline runs become paragraphs, so that `<div>a</div><div>b</div>` stays two lines as it was
 * shown, instead of running together once the sanitiser drops the `<div>`s. The obsolete `<dir>`
 * and `<listing>` become `<ul>` and `<pre>`.
 */
function unwrapFlowContainers(tree: Root): void {
  const parents = collectParents(tree);
  for (let i = parents.length - 1; i >= 0; i--) {
    const parent = parents[i] as Parent;
    const children = parent.children as ElementContent[];
    const out: ElementContent[] = [];
    let changed = false;
    for (const child of children) {
      if (isElement(child, 'dir')) child.tagName = 'ul';
      if (isElement(child, 'listing')) child.tagName = 'pre';
      // A `<summary>` outside `<details>` is only a line of text (the sanitiser would unwrap it).
      const container =
        child.type === 'element' &&
        (FLOW_CONTAINERS.has(child.tagName) ||
          (child.tagName === 'summary' && !isElement(parent as Element, 'details')));
      if (!container) {
        out.push(child);
        continue;
      }
      changed = true;
      if (child.type !== 'element') continue;
      const alone = children.every((other) => other === child || !isMeaningful(other));
      if (alone && !child.children.some(isFlow)) out.push(...child.children);
      else out.push(...paragraphs(child.children));
    }
    if (changed) parent.children = out as typeof parent.children;
  }
}

/** Blocks as they are, runs of inline content (other than whitespace) in paragraphs. */
function paragraphs(children: ElementContent[]): ElementContent[] {
  const out: ElementContent[] = [];
  let run: ElementContent[] = [];
  const flush = () => {
    if (run.some(isMeaningful)) out.push(element('p', {}, run));
    else out.push(...run);
    run = [];
  };
  for (const child of children) {
    if (isFlow(child)) {
      flush();
      out.push(child);
    } else {
      run.push(child);
    }
  }
  flush();
  return out;
}

/** Repairs applied to the raw tree before sanitising (see the module comment). */
export function repairLegacyHtml(tree: Root): void {
  unwrapFlowContainers(tree);
  normaliseContentModel(tree);
  for (const parent of collectParents(tree, (node) => isElement(node, ['pre', 'code']))) {
    // `<dl>` used as a bullet list.
    if (isElement(parent as Element, 'dl')) {
      const items = (parent as Element).children.filter((child) => child.type === 'element' && !isElement(child, 'br'));
      if (items.length > 0 && items.every((child) => isElement(child, 'li'))) (parent as Element).tagName = 'ul';
    }

    const list = isList(parent);
    if (!list) wrapOrphanItems(parent);

    if (parent.type === 'element' && TRIMMED.has(parent.tagName)) trimBreaks(parent);
    if (parent.type === 'root' || isElement(parent as Element, ['blockquote', 'details'])) wrapInlineRuns(parent);
    const children = (parent.children as ElementContent[]).flatMap((child): ElementContent[] =>
      isElement(child, 'p') ? splitParagraph(child) : [child],
    );
    const kept: ElementContent[] = [];
    children.forEach((child, index) => {
      if (child.type === 'element' && child.tagName === 'iframe') {
        const link = iframeToLink(child, parent);
        if (link) kept.push(link);
        return;
      }
      if (child.type === 'element' && TRIMMED.has(child.tagName)) trimBreaks(child);
      if (isEmptyBlock(child)) return;
      if (list && (isWhitespaceText(child) || isElement(child, 'br'))) return;
      if (isElement(child, 'br')) {
        // Spacing between blocks, or at the edge of a flow container: prose margins do that now.
        const before = neighbour(children, index, -1);
        const after = neighbour(children, index, 1);
        const flow = parent.type === 'root' || TRIMMED.has(parent.tagName);
        if (
          isBlock(before ?? undefined) ||
          isBlock(after ?? undefined) ||
          (flow && (before === null || after === null))
        ) {
          return;
        }
      }
      kept.push(child);
    });
    parent.children = collapseWhitespace(kept);
  }
}

/** Whitespace-only text between blocks (left over by the HTML parser or removed nodes) → one newline. */
function collapseWhitespace(children: ElementContent[]): ElementContent[] {
  const out: ElementContent[] = [];
  for (const child of children) {
    const last = out[out.length - 1];
    if (child.type === 'text' && isWhitespaceText(child)) {
      const value = child.value.includes('\n') ? '\n' : child.value;
      if (last?.type === 'text' && isWhitespaceText(last)) {
        last.value = last.value.includes('\n') || value === '\n' ? '\n' : last.value + value;
      } else {
        out.push({ type: 'text', value });
      }
      continue;
    }
    out.push(child);
  }
  return out;
}

/**
 * Clean-up after sanitising: unwrapping the elements that are not on the allowlist can recreate
 * nestings the HTML parser would restructure (a heading in a heading, a block in a paragraph…),
 * and removed content can leave empty paragraphs or wrappers behind.
 */
export function cleanUpLegacyHtml(tree: Root): void {
  normaliseContentModel(tree);
  pruneEmpty(tree);
}

/** Formatting wrappers that mean nothing without content. */
const EMPTYABLE = new Set(['a', 'b', 'code', 'del', 'em', 'i', 'ins', 'kbd', 's', 'samp', 'strong', 'sub', 'sup']);

/**
 * Removes what the repairs and the sanitiser leave empty, bottom-up: formatting wrappers holding
 * only whitespace and `<br>` are replaced by that content (`<b><br></b>` → `<br>`), `<br>` at the
 * edges of a block is dropped also when it sits inside such wrappers (`<h2><a>T<br></a></h2>`),
 * and paragraphs and headings left with only whitespace and `<br>` are removed (they were spacers
 * on the legacy site; prose margins do that now).
 */
function pruneEmpty(tree: Root): void {
  const parents = collectParents(tree, (node) => node.tagName === 'pre');
  for (let i = parents.length - 1; i >= 0; i--) {
    const node = parents[i] as Parent;
    const out: ElementContent[] = [];
    for (const child of node.children as ElementContent[]) {
      if (child.type !== 'element') {
        out.push(child);
        continue;
      }
      if (EMPTYABLE.has(child.tagName) && child.children.every(isBreakOrSpace)) {
        out.push(...child.children);
        continue;
      }
      if (TRIMMED.has(child.tagName)) {
        trimEdge(child, 1);
        trimEdge(child, -1);
      }
      if (PHRASING_HOLDERS.has(child.tagName) && child.children.every(isBreakOrSpace)) continue;
      out.push(child);
    }
    node.children = out as typeof node.children;
  }
}

/** Drops `<br>` at one edge of a block, looking into the formatting wrappers at that edge. */
function trimEdge(node: Element, step: 1 | -1): void {
  let container = node;
  for (;;) {
    const children = container.children;
    let index = step === 1 ? 0 : children.length - 1;
    while (index >= 0 && index < children.length && isWhitespaceText(children[index])) index += step;
    const edge = children[index];
    if (edge?.type !== 'element') return;
    if (edge.tagName === 'br') {
      children.splice(index, 1);
      continue;
    }
    if (!EMPTYABLE.has(edge.tagName)) return;
    container = edge;
  }
}
