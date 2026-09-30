import { describe, expect, it } from 'vitest';
import { MarkdownInputError, renderMarkdown } from '../src/index.ts';
import { renderPreview } from '../src/preview.ts';

const SAMPLES = [
  '# Title\n\nSome **bold** text with a [link](https://example.com) and `code`.',
  '- [x] done\n- [ ] todo\n\n> [!WARNING]\n> Careful\n\n| a | b |\n|---|---|\n| 1 | 2 |',
  'Raw <b>html</b> and <script>alert(1)</script> is escaped outside legacyHtml.',
  '@someone mentioned https://www.youtube.com/watch?v=dQw4w9WgXcQ',
];

describe('renderPreview (editor entry without rehype-raw)', () => {
  it.each(SAMPLES)('matches renderMarkdown for full and lite: %s', (md) => {
    for (const profile of ['full', 'lite'] as const) {
      expect(renderPreview(md, { profile, idPrefix: 'md-desc-' })).toEqual(
        renderMarkdown(md, { profile, idPrefix: 'md-desc-' }),
      );
    }
  });

  it('rejects the legacyHtml profile instead of silently dropping raw HTML', () => {
    expect(() => renderPreview('<div>x</div>', { profile: 'legacyHtml' as never })).toThrow(MarkdownInputError);
  });

  it('still renders legacyHtml raw HTML through the full renderer', () => {
    expect(renderMarkdown('<p>hi <b>there</b></p>', { profile: 'legacyHtml' }).html).toContain('<b>there</b>');
  });
});
