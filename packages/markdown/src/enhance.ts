/**
 * Trusted enhancers, run on the tree **after** sanitising.
 *
 * Authors can never produce classes, ids, `rel`, ARIA or `data-*` attributes (the sanitiser
 * removes them); these passes add a fixed, known set of them. Every value derived from author
 * content is validated here (slugs, video ids, resolver URLs) and the final tree is checked again
 * by `verifyTree` before serialising.
 */
import type { Element, ElementContent, Root } from 'hast';
import { findAutolinks } from './autolink.ts';
import {
  classList,
  collectParents,
  element,
  hasClass,
  isElement,
  isText,
  isWhitespaceText,
  type Parent,
  text,
  textContent,
  visitElements,
} from './hast.ts';
import { DEFAULT_LABELS } from './labels.ts';
import type {
  ImageTarget,
  MarkdownLabelKey,
  MarkdownProfile,
  MentionTarget,
  RenderedHeading,
  RenderedImage,
  RenderedLink,
} from './types.ts';
import { isExternal, isTrustedTarget, LINK_PROTOCOLS, MEDIA_PROTOCOLS, safeUrl } from './url.ts';
import { YOUTUBE_THUMBNAIL_SIZE, youtubeFromUrl } from './youtube.ts';

export interface EnhanceContext {
  profile: MarkdownProfile;
  idPrefix: string;
  headingOffset: number;
  internalHosts: readonly string[];
  resolveMention?: ((handle: string) => MentionTarget | null | undefined) | undefined;
  resolveImage?: ((src: string) => ImageTarget | null | undefined) | undefined;
}

export interface EnhanceResult {
  headings: RenderedHeading[];
  links: RenderedLink[];
  images: RenderedImage[];
  mentions: string[];
}

/** `rel` of every link that leaves the site (PLAN §7.6). */
export const EXTERNAL_REL = ['ugc', 'nofollow', 'noopener'] as const;

/** Inline containers whose text is never rewritten (code keeps `||` and `@` literally). */
const LITERAL = ['code', 'pre', 'kbd', 'samp'] as const;

const BLOCK = new Set([
  'blockquote',
  'details',
  'div',
  'dl',
  'dd',
  'dt',
  'figure',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'li',
  'ol',
  'p',
  'pre',
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

const HEADING = /^h([1-6])$/;
const ALERT = /^\[!(note|tip|important|warning|caution)\][\t ]*/i;
/**
 * `@handle`: not preceded by a word character, `@`, `.`, `/`, `+` or `-` (so e-mail addresses and
 * URLs do not match); letters, digits, `_`, `.` and `-`, not ending with `.` or `-`.
 */
export const MENTION_PATTERN = /(?<![\p{L}\p{N}_@./+-])@([A-Za-z0-9](?:[A-Za-z0-9_.-]{0,38}[A-Za-z0-9_])?)/gu;

export function enhance(tree: Root, ctx: EnhanceContext): EnhanceResult {
  const result: EnhanceResult = { headings: [], links: [], images: [], mentions: [] };
  if (ctx.profile !== 'lite') {
    headings(tree, ctx, result);
    alerts(tree);
  }
  inlineText(tree, ctx, result);
  if (ctx.profile !== 'lite') youtube(tree);
  finalize(tree, ctx, result);
  return result;
}

// ---------------------------------------------------------------------------------------------
// Headings: level offset, unique ids and a hover anchor.

/** GitHub-style slug that keeps Unicode letters (Cyrillic, CJK…) and drops punctuation. */
export function slugify(value: string): string {
  const slug = value
    .normalize('NFC')
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\s_-]/gu, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
  return Array.from(slug).slice(0, 64).join('').replace(/-$/, '');
}

function headings(tree: Root, ctx: EnhanceContext, result: EnhanceResult): void {
  const taken = new Set<string>();
  const counters = new Map<string, number>();
  visitElements(tree, (node) => {
    const match = HEADING.exec(node.tagName);
    if (!match) return undefined;
    const level = Math.min(6, Number(match[1]) + ctx.headingOffset);
    node.tagName = `h${level}`;
    const label = textContent(node).replace(/\s+/g, ' ').trim();
    const base = slugify(label) || 'section';
    let slug = base;
    if (taken.has(slug)) {
      let n = counters.get(base) ?? 0;
      do {
        n += 1;
        slug = `${base}-${n}`;
      } while (taken.has(slug));
      counters.set(base, n);
    }
    taken.add(slug);
    const id = `${ctx.idPrefix}${slug}`;
    node.properties = { id };
    node.children.push(
      element('a', { className: ['md-anchor'], href: `#${id}`, ariaHidden: 'true', tabIndex: -1 }, [text('#')]),
    );
    result.headings.push({ level, id, text: label });
    return 'skip';
  });
}

// ---------------------------------------------------------------------------------------------
// GitHub alerts: `> [!NOTE]` alone on the first line of a top-level quote.

function alerts(tree: Root): void {
  tree.children = tree.children.map((node) => (isElement(node, 'blockquote') ? (toAlert(node) ?? node) : node));
}

function toAlert(quote: Element): Element | null {
  const firstIndex = quote.children.findIndex((child) => !isWhitespaceText(child));
  const first = quote.children[firstIndex];
  if (!isElement(first, 'p')) return null;
  const lead = first.children[0];
  if (!isText(lead)) return null;
  const match = ALERT.exec(lead.value);
  if (!match) return null;
  const rest = lead.value.slice(match[0].length);
  const next = first.children[1];
  // The marker must be alone on its line.
  if (rest.trim() !== '' || (next !== undefined && !isElement(next, 'br'))) return null;
  const body = first.children.slice(next ? 2 : 1);
  while (body.length > 0 && isWhitespaceText(body[0])) body.shift();
  const lead2 = body[0];
  if (isText(lead2)) body[0] = text(lead2.value.replace(/^[\t\n ]+/, ''));
  const content: ElementContent[] = [...quote.children.slice(firstIndex + 1)];
  if (body.length > 0) content.unshift({ ...first, children: body });
  if (!content.some((child) => !isWhitespaceText(child))) return null;
  const type = (match[1] as string).toLowerCase();
  const key = `alert-${type}` as MarkdownLabelKey;
  const title = element('p', { className: ['md-alert-title'] }, [
    element('span', { dataMdLabel: key }, [text(DEFAULT_LABELS[key])]),
  ]);
  return element('div', { className: ['md-alert', `md-alert-${type}`], role: 'note' }, [title, ...content]);
}

// ---------------------------------------------------------------------------------------------
// YouTube facades: a paragraph that only holds a link to a video.

function youtube(tree: Root): void {
  for (const parent of collectParents(tree, (node) => isElement(node, LITERAL))) {
    parent.children = (parent.children as ElementContent[]).map((node) => {
      if (!isElement(node, 'p')) return node;
      const meaningful = node.children.filter((child) => !isWhitespaceText(child));
      const link = meaningful[0];
      if (meaningful.length !== 1 || !isElement(link, 'a')) return node;
      const href = link.properties.href;
      const video = typeof href === 'string' ? youtubeFromUrl(href) : null;
      if (!video) return node;
      const label = textContent(link).trim();
      const alt = label && label !== href && youtubeFromUrl(label) === null ? label : 'YouTube';
      const anchor: Record<string, string> = { dataYoutubeId: video.id };
      if (video.start) anchor.dataYoutubeStart = String(video.start);
      return element('figure', { className: ['md-youtube'] }, [
        element('a', { className: ['md-youtube-link'], href: video.watchUrl, ...anchor }, [
          element('img', {
            className: ['md-youtube-thumb'],
            src: video.thumbnailUrl,
            alt,
            width: YOUTUBE_THUMBNAIL_SIZE.width,
            height: YOUTUBE_THUMBNAIL_SIZE.height,
            loading: 'lazy',
            decoding: 'async',
            referrerPolicy: 'no-referrer',
          }),
        ]),
      ]);
    });
  }
}

// ---------------------------------------------------------------------------------------------
// Spoilers: `||hidden||` within one inline container (never inside a link).
//
// A spoiler is a toggle button: `<span class="md-spoiler" role="button" tabindex="0"
// aria-expanded="false" aria-label="Spoiler" data-md-label="spoiler">`. Buttons have presentational
// children, so assistive technology announces "Spoiler, button, collapsed" instead of the hidden
// text; the reveal script flips `aria-expanded` and drops the role and label. The label is the
// English default, localised per request by `localizeHtml`. A spoiler that contains a link cannot
// be a button (nested interactive content): it stays a plain `span.md-spoiler`, revealed by CSS on
// `:hover`/`:focus-within` when its link receives focus.

/** Wraps `||…||` runs of an inline container; returns the spoiler spans created. */
function spoilers(parent: Parent): Element[] {
  const children = parent.children as ElementContent[];
  if (!children.some((child) => isText(child) && child.value.includes('||'))) return [];
  if (children.some((child) => child.type === 'element' && BLOCK.has(child.tagName))) return [];
  parent.children = wrapSpoilers(children);
  return (parent.children as ElementContent[]).filter(
    (child): child is Element => isElement(child, 'span') && hasClass(child, 'md-spoiler'),
  );
}

function wrapSpoilers(children: ElementContent[]): ElementContent[] {
  const out: ElementContent[] = [];
  let open: Element | undefined;
  for (const child of children) {
    const parts = isText(child) ? child.value.split('||') : null;
    if (parts === null || parts.length === 1) {
      (open ? open.children : out).push(child);
      continue;
    }
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        if (open === undefined) {
          open = element('span', { className: ['md-spoiler'] });
          out.push(open);
        } else {
          if (open.children.every((node) => isWhitespaceText(node))) {
            // `||||` or `|| ||` is not a spoiler: keep it literally.
            out.pop();
            out.push(text(`||${textContent(open)}||`));
          }
          open = undefined;
        }
      }
      const part = parts[i] as string;
      if (part.length > 0) (open ? open.children : out).push(text(part));
    }
  }
  if (open !== undefined) {
    // Unbalanced: restore the literal marker and the content.
    out.splice(out.indexOf(open), 1, text('||'), ...open.children);
  }
  return mergeText(out);
}

/** Makes a finished spoiler a toggle button, unless it holds interactive content (a link). */
function spoilerSemantics(spoiler: Element): void {
  let interactive = false;
  visitElements({ type: 'root', children: spoiler.children }, (node) => {
    if (node.tagName === 'a') interactive = true;
    return interactive ? 'skip' : undefined;
  });
  if (interactive) return;
  Object.assign(spoiler.properties, {
    role: 'button',
    tabIndex: 0,
    ariaExpanded: 'false',
    ariaLabel: DEFAULT_LABELS.spoiler,
    dataMdLabel: 'spoiler',
  });
}

function mergeText(nodes: ElementContent[]): ElementContent[] {
  const out: ElementContent[] = [];
  for (const node of nodes) {
    const last = out[out.length - 1];
    if (isText(node) && isText(last)) last.value += node.value;
    else out.push(node);
  }
  return out;
}

// ---------------------------------------------------------------------------------------------
// Text-level passes, in one walk: spoilers, autolinks, mentions; anchors without a (safe) href and
// images without a (safe) source are unwrapped.
//
// Text anywhere inside a link (also under `<strong>`, `<b>`… within it) is left alone: an autolink
// or mention there would nest `<a>` in `<a>`, which HTML parsers split apart, so the browser would
// build a different tree from the verified one. Mentions inside link text are not collected either.

type MentionResolver = (handle: string) => MentionTarget | null;

function inlineText(tree: Root, ctx: EnhanceContext, result: EnhanceResult): void {
  const resolve = mentionResolver(ctx);
  const seen = new Set<string>();
  // Iterative pre-order walk (depth is author-controlled) carrying "inside a link".
  const stack: Array<{ parent: Parent; inLink: boolean }> = [{ parent: tree, inLink: false }];
  const allSpoilers: Element[] = [];
  while (stack.length > 0) {
    const { parent, inLink } = stack.pop() as { parent: Parent; inLink: boolean };
    unwrapDeadEnds(parent);
    // The elements to visit next are the parent's own (after unwrapping, before new spoilers and
    // links are added), so every original element is visited exactly once.
    const children = parent.children as ElementContent[];
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i] as ElementContent;
      if (child.type === 'element' && !(LITERAL as readonly string[]).includes(child.tagName)) {
        stack.push({ parent: child, inLink: inLink || child.tagName === 'a' });
      }
    }
    if (inLink) continue;
    const created = parent.type === 'root' ? [] : spoilers(parent);
    for (const container of [parent, ...created]) {
      if (!(container.children as ElementContent[]).some((child) => isText(child))) continue;
      container.children = linkText(container.children as ElementContent[], resolve, seen, result);
    }
    allSpoilers.push(...created);
  }
  // Only now are all autolinks and mentions inside the spoilers known.
  for (const spoiler of allSpoilers) spoilerSemantics(spoiler);
}

function mentionResolver(ctx: EnhanceContext): MentionResolver {
  const cache = new Map<string, MentionTarget | null>();
  return (handle) => {
    if (!ctx.resolveMention) return null;
    if (!cache.has(handle)) {
      const target = ctx.resolveMention(handle);
      const href = target && isTrustedTarget(target.href) ? safeUrl(target.href, LINK_PROTOCOLS) : null;
      cache.set(handle, target && href !== null ? { ...target, href } : null);
    }
    return cache.get(handle) ?? null;
  };
}

/**
 * `<a>` whose href was removed by the sanitiser, or with no content → its content; `<img>` without
 * src → its alt text.
 */
function unwrapDeadEnds(parent: Parent): void {
  const children = parent.children as ElementContent[];
  const dead = (node: ElementContent) =>
    (isElement(node, 'a') && (!isNonEmptyString(node.properties.href) || isEmpty(node))) ||
    (isElement(node, 'img') && !isNonEmptyString(node.properties.src));
  if (!children.some(dead)) return;
  parent.children = children.flatMap((node): ElementContent[] => {
    if (!dead(node) || node.type !== 'element') return [node];
    if (node.tagName === 'a') return node.children;
    const alt = node.properties.alt;
    return typeof alt === 'string' && alt !== '' ? [text(alt)] : [];
  });
}

/** An element with no text and no image: an invisible, unnamed link. */
function isEmpty(node: Element): boolean {
  if (textContent(node).trim() !== '') return false;
  let hasImage = false;
  visitElements({ type: 'root', children: [node] }, (child) => {
    if (child.tagName === 'img') hasImage = true;
    return hasImage ? 'skip' : undefined;
  });
  return !hasImage;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value !== '';
}

/** Autolinks and mentions in the text children of one container. */
function linkText(
  children: ElementContent[],
  resolve: MentionResolver,
  seen: Set<string>,
  result: EnhanceResult,
): ElementContent[] {
  const out: ElementContent[] = [];
  for (const child of children) {
    if (!isText(child)) {
      out.push(child);
      continue;
    }
    let last = 0;
    for (const link of findAutolinks(child.value)) {
      // Normalised like author links; a candidate a browser could not parse stays text.
      const href = safeUrl(link.href, LINK_PROTOCOLS);
      if (href === null) continue;
      if (link.index > last) out.push(...mentionize(child.value.slice(last, link.index), resolve, seen, result));
      out.push(element('a', { href }, [text(link.text)]));
      last = link.index + link.text.length;
    }
    out.push(...mentionize(last === 0 ? child.value : child.value.slice(last), resolve, seen, result));
  }
  return out;
}

function mentionize(
  value: string,
  resolve: MentionResolver,
  seen: Set<string>,
  result: EnhanceResult,
): ElementContent[] {
  if (value === '') return [];
  if (!value.includes('@')) return [text(value)];
  const out: ElementContent[] = [];
  let last = 0;
  for (const match of value.matchAll(MENTION_PATTERN)) {
    const written = match[0];
    const handle = (match[1] as string).toLowerCase();
    if (!seen.has(handle)) {
      seen.add(handle);
      result.mentions.push(handle);
    }
    const target = resolve(handle);
    if (!target) continue;
    if (match.index > last) out.push(text(value.slice(last, match.index)));
    const label = typeof target.label === 'string' && target.label.trim() !== '' ? target.label : written;
    out.push(element('a', { className: ['md-mention'], href: target.href }, [text(label)]));
    last = match.index + written.length;
  }
  if (last < value.length) out.push(text(value.slice(last)));
  return out;
}

// ---------------------------------------------------------------------------------------------
// Links and images, in one walk (document order): `rel` on external links, lazy images without
// referrer, optional replacement of image sources; both collected for the caller.

function finalize(tree: Root, ctx: EnhanceContext, result: EnhanceResult): void {
  visitElements(tree, (node) => {
    if (node.tagName === 'a') link(node, ctx, result);
    else if (node.tagName === 'img' && !hasClass(node, 'md-youtube-thumb')) image(node, ctx, result);
    return undefined;
  });
}

function link(node: Element, ctx: EnhanceContext, result: EnhanceResult): void {
  const href = node.properties.href;
  if (!isNonEmptyString(href)) return;
  const classes = classList(node);
  if (classes.includes('md-anchor')) return;
  const external = isExternal(href, ctx.internalHosts);
  const kind = classes.includes('md-mention') ? 'mention' : classes.includes('md-youtube-link') ? 'youtube' : 'link';
  if (external) node.properties.rel = [...EXTERNAL_REL];
  const label = kind === 'youtube' ? (findImageAlt(node) ?? '') : textContent(node).trim();
  result.links.push({ href, text: label, external, kind });
}

function findImageAlt(node: Element): string | undefined {
  const image = node.children.find((child): child is Element => isElement(child, 'img'));
  const alt = image?.properties.alt;
  return typeof alt === 'string' ? alt : undefined;
}

// ---------------------------------------------------------------------------------------------
// Images: lazy loading, no referrer, optional replacement with a known-size copy.

const MAX_DIMENSION = 16_384;

function dimension(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isInteger(value) && value > 0 && value <= MAX_DIMENSION
    ? value
    : undefined;
}

function image(node: Element, ctx: EnhanceContext, result: EnhanceResult): void {
  const src = node.properties.src;
  if (!isNonEmptyString(src)) return;
  const alt = typeof node.properties.alt === 'string' ? node.properties.alt : '';
  let rendered = src;
  const target = ctx.resolveImage?.(src);
  const replacement = target && isTrustedTarget(target.src) ? safeUrl(target.src, MEDIA_PROTOCOLS) : null;
  if (target && replacement !== null) {
    rendered = replacement;
    node.properties.src = rendered;
    const width = dimension(target.width);
    const height = dimension(target.height);
    if (width && height) {
      node.properties.width = width;
      node.properties.height = height;
    }
  }
  node.properties.alt = alt;
  node.properties.loading = 'lazy';
  node.properties.decoding = 'async';
  node.properties.referrerPolicy = 'no-referrer';
  result.images.push({ src, renderedSrc: rendered, alt });
}
