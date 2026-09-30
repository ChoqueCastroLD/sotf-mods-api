/**
 * `@sotf/markdown/preview`: the editor preview entry (console Markdown editor). Same pipeline and
 * output as `renderMarkdown` for the `full` and `lite` profiles, without rehype-raw/parse5 (about
 * half of the package's browser weight). Raw HTML only renders under `legacyHtml`, which this entry
 * rejects with `MarkdownInputError('markdown_invalid_option')`.
 */
import { renderMarkdownWith } from './render-core.ts';
import type { MarkdownProfile, RenderOptions, RenderResult } from './types.ts';

export type PreviewProfile = Exclude<MarkdownProfile, 'legacyHtml'>;

export interface PreviewOptions extends Omit<RenderOptions, 'profile'> {
  profile?: PreviewProfile;
}

export function renderPreview(md: string, options: PreviewOptions = {}): RenderResult {
  return renderMarkdownWith(null, md, options);
}
