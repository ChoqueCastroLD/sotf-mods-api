/**
 * @sotf/markdown: safe Markdown (PLAN §9.1). One sanitised pipeline (markdown-it → hast →
 * rehype-raw (legacyHtml only) / rehype-sanitize → trusted enhancers → verifyTree → closed-set
 * serialiser) used by the API, the worker and the editor preview, so stored XSS cannot come back.
 * See README.md.
 */

export { EXTERNAL_REL, MENTION_PATTERN, slugify } from './enhance.ts';
export { decodeEntities, escapeForLegacy } from './entities.ts';
export { DEFAULT_LABELS, LABEL_KEYS, localizeHtml } from './labels.ts';
export {
  extractMentions,
  hasRawHtml,
  MAX_MARKDOWN_LENGTH,
  MAX_NESTING_DEPTH,
  MarkdownInputError,
  normalizeInput,
  PROFILES,
  renderMarkdown,
} from './render.ts';
export type {
  ImageTarget,
  MarkdownLabelKey,
  MarkdownLabels,
  MarkdownProfile,
  MentionTarget,
  RenderedHeading,
  RenderedImage,
  RenderedLink,
  RenderOptions,
  RenderResult,
} from './types.ts';
export { safeUrl } from './url.ts';
export { MarkdownSafetyError } from './verify.ts';
export { RENDER_VERSION } from './version.ts';
export { type YoutubeVideo, youtubeFromUrl } from './youtube.ts';
