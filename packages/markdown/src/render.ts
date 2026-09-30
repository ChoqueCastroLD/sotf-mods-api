/**
 * `renderMarkdown` with every profile (PLAN §9.1): the pipeline of `pipeline.ts` plus the
 * raw-HTML support of `legacyHtml` (rehype-raw and the legacy repairs). Server code (API, worker,
 * backfills) uses this through the package entry point; browsers that never render legacy HTML
 * import `@sotf/markdown/lite` instead (no parse5).
 */
import type { Root as HastRoot } from 'hast';
import rehypeRaw from 'rehype-raw';
import { cleanUpLegacyHtml, repairLegacyHtml } from './legacy.ts';
import { createPipeline } from './pipeline.ts';

function legacyRepairs() {
  return (tree: HastRoot) => {
    repairLegacyHtml(tree);
  };
}

function legacyCleanUp() {
  return (tree: HastRoot) => {
    cleanUpLegacyHtml(tree);
  };
}

const pipeline = createPipeline({ before: [rehypeRaw, legacyRepairs], after: [legacyCleanUp] });

export const { renderMarkdown, renderMarkdownTree, extractMentions } = pipeline;
export {
  hasRawHtml,
  MAX_MARKDOWN_LENGTH,
  MAX_NESTING_DEPTH,
  MarkdownInputError,
  normalizeInput,
  PROFILES,
} from './pipeline.ts';
