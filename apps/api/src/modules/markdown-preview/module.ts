/**
 * `markdown-preview` module (WP-70, PLAN §5.2 "Comunidad", §7.6, WP-15 backlog): the editors'
 * «Preview» tab renders with the **same** pipeline as a save, so what the author sees is exactly
 * what gets stored.
 *
 * - `lite` (comments, reviews, author replies): `@mentions` resolve like on write (one query for
 *   the handles of the text; unknown, deleted and banned accounts stay plain text).
 * - `full` (descriptions, changelogs): no mention resolution, as `renderDescription` stores it.
 *   `legacyHtml` is never offered for user-chosen input (the contract only accepts lite/full).
 *
 * Verified members only, `markdownPreview` bucket (30/min per user), `no-store`. Nothing is
 * persisted and no event is emitted.
 */
import { commentsEndpoints } from '@sotf/contracts/comments';
import { errors } from '@sotf/core/kernel/errors';
import { renderUserText } from '@sotf/core/mentions/index';
import { renderDescription } from '@sotf/core/publishing/text';
import { type ApiModule, defineModule } from '../../lib/define-module.ts';

export interface MarkdownPreviewInput {
  md: string;
  profile: 'lite' | 'full';
}

/** `@sotf/markdown`'s input errors (too long, invalid option) carry this name and a `code`. */
function markdownInputError(error: unknown): { code: string; message: string } | null {
  if (!(error instanceof Error) || error.name !== 'MarkdownInputError') return null;
  const code = (error as Error & { code?: unknown }).code;
  return { code: typeof code === 'string' ? code : 'markdown_invalid', message: error.message };
}

export function createMarkdownPreviewModule(): ApiModule {
  return defineModule({
    name: 'markdown-preview',
    register(m) {
      m.implement(commentsEndpoints.previewMarkdown, async ({ body, ctx }) => {
        const input: MarkdownPreviewInput = body;
        // Stored sources are NFC (contracts of comments/reviews); the preview must agree.
        const source = input.md.normalize('NFC');
        if (source.trim() === '') return { html: '' };
        try {
          if (input.profile === 'lite') {
            // The write path of comments, reviews and replies (NFC + mentions + lite profile).
            const rendered = await renderUserText(ctx.db, source, ctx.actor?.userId ?? null);
            return { html: rendered.html };
          }
          // A new description: `full` (raw HTML shown as text), as `renderDescription` stores it.
          return { html: renderDescription(source).html };
        } catch (error) {
          const invalid = markdownInputError(error);
          if (invalid) throw errors.validation(invalid.message, [{ path: 'md', ...invalid }]);
          throw error;
        }
      });
    },
  });
}
