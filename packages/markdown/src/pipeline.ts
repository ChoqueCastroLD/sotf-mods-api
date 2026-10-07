/**
 * The Markdown → safe HTML pipeline behind `renderMarkdown` (entry points: `render.ts` for the
 * server and every profile, `lite.ts` for browsers without `legacyHtml`). `createPipeline(raw)`
 * receives the raw-HTML support (rehype-raw + legacy repairs, which pull parse5) so the lite entry
 * never imports it.
 *
 * `renderMarkdown`: the single Markdown → safe HTML pipeline of SOTF Mods v2 (PLAN §9.1,
 * research/04 §4.13), shared by the API (render on write), the worker (re-render jobs, backfill
 * B9) and the editor preview.
 *
 *   input normalisation (NFC, LF, no control characters) → nesting guard
 *   → markdown-it tokens → hast (parse.ts; profile rules, task lists)
 *   → [legacyHtml with raw HTML: rehype-raw + legacy repairs]
 *   → URL normalisation → rehype-sanitize (strict allowlist per profile)
 *   → [legacyHtml with raw HTML: content-model repair, empty paragraphs pruned]
 *   → trusted enhancers (heading anchors, alerts, spoilers, autolinks, mentions, YouTube facades,
 *     `rel`, image attributes)
 *   → verifyTree (closed allowlist) → serialisation (serialize.ts), plain-text projection
 *
 * Pathological input (nesting beyond the caps, stack exhaustion) degrades to escaped paragraphs
 * of the original text instead of failing or dropping content.
 */
import type { Element, Root as HastRoot } from 'hast';
import rehypeSanitize from 'rehype-sanitize';
import { type PluggableList, unified } from 'unified';
import { enhance } from './enhance.ts';
import { defuse } from './guard.ts';
import { maxDepth, visitElements } from './hast.ts';
import { containsRawHtml, parseMarkdown } from './parse.ts';
import { SANITIZE_SCHEMAS } from './schema.ts';
import { toSafeHtml } from './serialize.ts';
import { toPlainText } from './text.ts';
import type { MarkdownProfile, RenderOptions, RenderResult } from './types.ts';
import { DEFAULT_INTERNAL_HOSTS, LINK_PROTOCOLS, MEDIA_PROTOCOLS, safeUrl } from './url.ts';
import { verifyTree } from './verify.ts';
import { RENDER_VERSION } from './version.ts';

/**
 * Hard ceiling on the input size. Product limits are lower and enforced by the contracts
 * (20 000 characters for descriptions, 2 000 for comments); this only bounds the worst case.
 */
export const MAX_MARKDOWN_LENGTH = 50_000;
/** Deeper trees are rendered as plain paragraphs (no real document nests this much). */
export const MAX_NESTING_DEPTH = 64;

export const PROFILES: readonly MarkdownProfile[] = ['full', 'lite', 'legacyHtml'];

export class MarkdownInputError extends Error {
  override readonly name = 'MarkdownInputError';
  readonly code: 'markdown_not_string' | 'markdown_too_long' | 'markdown_invalid_option';

  constructor(code: MarkdownInputError['code'], message: string) {
    super(message);
    this.code = code;
  }
}

const ID_PREFIX = /^[a-z][a-z0-9-]{0,31}$/;

/** Browser-equivalent URL normalisation before sanitising; unsafe URLs are removed. */
function normaliseUrls() {
  return (tree: HastRoot) => {
    visitElements(tree, (node: Element) => {
      for (const [key, protocols] of [
        ['href', LINK_PROTOCOLS],
        ['src', MEDIA_PROTOCOLS],
      ] as const) {
        if (node.properties[key] === undefined) continue;
        const safe = safeUrl(node.properties[key], protocols);
        if (safe === null) delete node.properties[key];
        else node.properties[key] = safe;
      }
      return undefined;
    });
  };
}

/**
 * Raw-HTML support of the `legacyHtml` profile: plugins run before sanitising (rehype-raw and the
 * legacy repairs) and after it (content-model repair). Only used for `legacyHtml` documents that
 * actually contain raw HTML (parse5 is the costliest step).
 */
export interface RawHtmlSupport {
  before: PluggableList;
  after: PluggableList;
}

/** The rehype part of the pipeline. */
function createProcessor(profile: MarkdownProfile, raw: RawHtmlSupport | null) {
  return unified()
    .use(raw?.before ?? [])
    .use(normaliseUrls)
    .use(rehypeSanitize, SANITIZE_SCHEMAS[profile])
    .use(raw?.after ?? [])
    .freeze();
}

type Processor = ReturnType<typeof createProcessor>;

/**
 * Normalises author input: removes a BOM, unifies line endings, composes Unicode (NFC; fixes
 * decomposed umlauts), replaces lone surrogates and drops control characters other than tab and
 * newline, and the bidirectional overrides and isolates (text spoofing).
 */
export function normalizeInput(md: string): string {
  return (
    md
      .replace(/^\uFEFF/, '')
      .replace(/\r\n?/g, '\n')
      .toWellFormed()
      .normalize('NFC')
      // biome-ignore lint/suspicious/noControlCharactersInRegex: stripping control characters is the point.
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
      // Direction overrides, embeddings and isolates reorder the text around them: with one inside a
      // link text `[\u202Egnp.exe](…)` reads as `exe.png`. Plain RTL text does not need them.
      .replace(/[\u202a-\u202e\u2066-\u2069]/g, '')
  );
}

/** Paragraphs of escaped literal text: the fallback for pathological input. */
function plainTextTree(source: string): HastRoot {
  const children: HastRoot['children'] = [];
  for (const block of source.split(/\n{2,}/)) {
    if (block.trim() === '') continue;
    const lines = block.split('\n');
    const paragraph: Element = { type: 'element', tagName: 'p', properties: {}, children: [] };
    lines.forEach((line, index) => {
      if (index > 0) paragraph.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] });
      paragraph.children.push({ type: 'text', value: index > 0 ? `\n${line}` : line });
    });
    children.push(paragraph, { type: 'text', value: '\n' });
  }
  return { type: 'root', children };
}

function resolveOptions(options: RenderOptions, profiles: readonly MarkdownProfile[]) {
  const profile = options.profile ?? 'full';
  if (!PROFILES.includes(profile)) {
    throw new MarkdownInputError('markdown_invalid_option', `Unknown markdown profile: ${String(profile)}`);
  }
  if (!profiles.includes(profile)) {
    throw new MarkdownInputError(
      'markdown_invalid_option',
      `The ${profile} profile is not available in this entry point; import "@sotf/markdown"`,
    );
  }
  const idPrefix = options.idPrefix ?? 'md-';
  if (!ID_PREFIX.test(idPrefix)) {
    throw new MarkdownInputError('markdown_invalid_option', `Invalid idPrefix: ${JSON.stringify(idPrefix)}`);
  }
  const headingOffset = options.headingOffset ?? 1;
  if (!Number.isInteger(headingOffset) || headingOffset < 0 || headingOffset > 5) {
    throw new MarkdownInputError('markdown_invalid_option', `Invalid headingOffset: ${String(headingOffset)}`);
  }
  const internalHosts = (options.internalHosts ?? DEFAULT_INTERNAL_HOSTS).map((host) => host.toLowerCase());
  return {
    profile,
    idPrefix,
    headingOffset,
    internalHosts,
    resolveMention: options.resolveMention,
    resolveImage: options.resolveImage,
  };
}

export interface Pipeline {
  /**
   * Renders Markdown to sanitised HTML plus the metadata the callers store or index.
   *
   * Deterministic: the same input, options and {@link RENDER_VERSION} always give the same output.
   * Throws {@link MarkdownInputError} for non-string input, input over {@link MAX_MARKDOWN_LENGTH}
   * or invalid options.
   */
  renderMarkdown(md: string, options?: RenderOptions): RenderResult;
  /**
   * The verified hast tree behind `renderMarkdown`. Internal (not exported by the package entry
   * points): tests compare it with what a browser parses from the serialised HTML.
   */
  renderMarkdownTree(md: string, options?: RenderOptions): { tree: HastRoot; collected: ReturnType<typeof enhance> };
  /** Distinct lower-cased `@handles` of a text, to load the mentioned users in one query. */
  extractMentions(md: string, profile?: MarkdownProfile): string[];
}

/**
 * Builds the pipeline. Without raw-HTML support the `legacyHtml` profile is refused (lite entry);
 * with it, every profile renders.
 */
export function createPipeline(raw: RawHtmlSupport | null): Pipeline {
  const profiles: readonly MarkdownProfile[] = raw ? PROFILES : ['full', 'lite'];
  const processors = new Map<string, Processor>();

  function processorFor(profile: MarkdownProfile, withRaw = false): Processor {
    const key = `${profile}:${withRaw}`;
    let processor = processors.get(key);
    if (!processor) {
      processor = createProcessor(profile, withRaw ? raw : null);
      processors.set(key, processor);
    }
    return processor;
  }

  /** Parses and sanitises; `null` when the input is too deeply nested to render faithfully. */
  function sanitisedTree(source: string, profile: MarkdownProfile): HastRoot | null {
    try {
      const { tree, truncated, hasRaw } = parseMarkdown(source, profile);
      if (truncated) return null;
      const sanitised = processorFor(profile, hasRaw && profile === 'legacyHtml').runSync(tree) as HastRoot;
      return maxDepth(sanitised) > MAX_NESTING_DEPTH ? null : sanitised;
    } catch (error) {
      // Stack exhaustion on adversarial nesting (thousands of raw `<div>`s…): degrade to text.
      if (error instanceof RangeError) return null;
      throw error;
    }
  }

  function renderMarkdownTree(md: string, options: RenderOptions = {}) {
    if (typeof md !== 'string') throw new MarkdownInputError('markdown_not_string', 'Markdown input must be a string');
    if (md.length > MAX_MARKDOWN_LENGTH) {
      throw new MarkdownInputError('markdown_too_long', `Markdown input exceeds ${MAX_MARKDOWN_LENGTH} characters`);
    }
    const ctx = resolveOptions(options, profiles);
    const normalized = normalizeInput(md);

    const tree =
      sanitisedTree(defuse(normalized), ctx.profile) ??
      (processorFor('lite').runSync(plainTextTree(normalized)) as HastRoot);

    const collected = enhance(tree, ctx);
    verifyTree(tree, ctx.profile);
    return { tree, collected };
  }

  function renderMarkdown(md: string, options: RenderOptions = {}): RenderResult {
    const { tree, collected } = renderMarkdownTree(md, options);
    return {
      html: toSafeHtml(tree),
      text: toPlainText(tree),
      ...collected,
      renderVersion: RENDER_VERSION,
    };
  }

  function extractMentions(md: string, profile: MarkdownProfile = 'lite'): string[] {
    return renderMarkdown(md, { profile }).mentions;
  }

  return { renderMarkdown, renderMarkdownTree, extractMentions };
}

/** True when the text contains raw HTML, i.e. it only renders as authored with `legacyHtml`. */
export function hasRawHtml(md: string): boolean {
  if (typeof md !== 'string' || !md.includes('<')) return false;
  return containsRawHtml(normalizeInput(md));
}
