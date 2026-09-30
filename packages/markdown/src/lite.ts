/**
 * `@sotf/markdown/lite`: the same pipeline without the `legacyHtml` profile, for browsers (editor
 * previews, comment composer). It never imports rehype-raw / parse5 nor the legacy repairs, which
 * are most of the full entry's weight (WP-74 backlog). Output is byte-identical to
 * `@sotf/markdown` for the `full` and `lite` profiles; `legacyHtml` throws `MarkdownInputError`
 * (`markdown_invalid_option`): render legacy content on the server or import the full entry.
 */
import { createPipeline } from './pipeline.ts';

const pipeline = createPipeline(null);

export const { renderMarkdown, extractMentions } = pipeline;

/** Profiles this entry renders. */
export const LITE_PROFILES = ['full', 'lite'] as const;

export { EXTERNAL_REL, MENTION_PATTERN, slugify } from './enhance.ts';
export { decodeEntities, escapeForLegacy } from './entities.ts';
export { DEFAULT_LABELS, LABEL_KEYS, localizeHtml } from './labels.ts';
export { hasRawHtml, MAX_MARKDOWN_LENGTH, MAX_NESTING_DEPTH, MarkdownInputError, normalizeInput } from './pipeline.ts';
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
