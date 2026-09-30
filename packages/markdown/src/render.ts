/**
 * The full renderer (API, worker, public pages): the pipeline of `render-core.ts` with rehype-raw,
 * so `legacyHtml` documents with raw HTML render as authored. The console editor preview uses
 * `preview.ts` instead, which leaves rehype-raw/parse5 out of its bundle.
 */
import rehypeRaw from 'rehype-raw';
import { renderMarkdownTreeWith, renderMarkdownWith } from './render-core.ts';
import type { MarkdownProfile, RenderOptions, RenderResult } from './types.ts';

export {
  hasRawHtml,
  MAX_MARKDOWN_LENGTH,
  MAX_NESTING_DEPTH,
  MarkdownInputError,
  normalizeInput,
  PROFILES,
} from './render-core.ts';

/**
 * Renders Markdown to sanitised HTML plus the metadata the callers store or index.
 *
 * Deterministic: the same input, options and `RENDER_VERSION` always give the same output.
 * Throws `MarkdownInputError` for non-string input, input over `MAX_MARKDOWN_LENGTH` or invalid
 * options.
 */
export function renderMarkdown(md: string, options: RenderOptions = {}): RenderResult {
  return renderMarkdownWith(rehypeRaw, md, options);
}

/**
 * The verified hast tree behind {@link renderMarkdown}. Internal (not exported by the package
 * entry point): tests compare it with what a browser parses from the serialised HTML.
 */
export function renderMarkdownTree(md: string, options: RenderOptions = {}) {
  return renderMarkdownTreeWith(rehypeRaw, md, options);
}

/** Distinct lower-cased `@handles` of a text, to load the mentioned users in one query. */
export function extractMentions(md: string, profile: MarkdownProfile = 'lite'): string[] {
  return renderMarkdown(md, { profile }).mentions;
}
