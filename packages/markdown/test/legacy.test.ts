/**
 * The mod descriptions of the legacy site that contain raw HTML (public API snapshot of
 * 2026-09-29), rendered with the `legacyHtml` profile, compared with what the legacy renderer
 * (showdown + its preprocessing, see helpers/legacy-renderer.ts) showed to users.
 */
import { describe, expect, it } from 'vitest';
import { renderMarkdown, youtubeFromUrl } from '../src/index.ts';
import { renderMarkdownTree } from '../src/render.ts';
import { toSafeHtml } from '../src/serialize.ts';
import rows from './fixtures/legacy-html-descriptions.json' with { type: 'json' };
import { legacyMarkdownToHtml } from './helpers/legacy-renderer.ts';
import { findViolations, parseHtml } from './helpers/safety.ts';

interface LegacyRow {
  id: number;
  author: string;
  slug: string;
  description: string;
}

const descriptions = rows as LegacyRow[];

/** Structural elements and how to count them in a parsed document. */
const STRUCTURE: Readonly<Record<string, string>> = {
  'list items': 'li',
  headings: 'h1, h2, h3, h4, h5, h6',
  'details blocks': 'details',
  summaries: 'summary',
  'bold runs': 'b, strong',
  'italic runs': 'i, em',
  'code spans': 'code',
  links: 'a[href]:not(.md-anchor)',
  quotes: 'blockquote',
  rules: 'hr',
  tables: 'table',
};

function structure(body: HTMLElement): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [name, selector] of Object.entries(STRUCTURE)) {
    // Empty headings were only spacers on the legacy site.
    out[name] = [...body.querySelectorAll(selector)].filter(
      (element) => !/^H\d$/.test(element.tagName) || (element.textContent ?? '').replace('#', '').trim() !== '',
    ).length;
  }
  return out;
}

function words(body: HTMLElement): Set<string> {
  // Text nodes joined with spaces: `<b>Use</b><br>Press` holds two words, not "usepress".
  const walker = body.ownerDocument.createTreeWalker(body, 4);
  const parts: string[] = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) parts.push(node.nodeValue ?? '');
  const text = parts.join(' ').normalize('NFC').toLowerCase();
  return new Set(text.match(/[\p{L}\p{N}]{2,}/gu) ?? []);
}

describe('legacy descriptions with raw HTML', () => {
  it('covers every description of the snapshot with raw HTML (≥ 24)', () => {
    expect(descriptions.length).toBeGreaterThanOrEqual(24);
    expect(new Set(descriptions.map((row) => row.id)).size).toBe(descriptions.length);
  });

  describe.each(descriptions.map((row) => [`${row.id} ${row.author}/${row.slug}`, row] as const))(
    '%s',
    (_name, row) => {
      const { tree } = renderMarkdownTree(row.description, { profile: 'legacyHtml' });
      const html = toSafeHtml(tree);
      const v2 = parseHtml(html);
      const legacy = parseHtml(legacyMarkdownToHtml(row.description));

      it('is safe', () => {
        expect(findViolations(html, tree)).toEqual([]);
      });

      it('keeps every structural element the legacy site showed', () => {
        const before = structure(legacy);
        const after = structure(v2);
        for (const name of Object.keys(STRUCTURE)) {
          expect(after[name], `${name}: legacy ${before[name]}, v2 ${after[name]}`).toBeGreaterThanOrEqual(
            before[name] ?? 0,
          );
        }
      });

      it('keeps every word of the text', () => {
        // A bare video link becomes a click-to-load player: its URL is no longer shown as text.
        const facades = new Set(
          [...v2.querySelectorAll('.md-youtube-link')].map((a) => a.getAttribute('data-youtube-id')),
        );
        for (const link of legacy.querySelectorAll('a[href]')) {
          const video = youtubeFromUrl(link.getAttribute('href') ?? '');
          if (video && facades.has(video.id) && link.textContent === link.getAttribute('href')) link.remove();
        }
        const after = words(v2);
        const missing = [...words(legacy)].filter((word) => !after.has(word));
        expect(missing).toEqual([]);
      });

      it('drops presentational markup and never leaves raw tags as text', () => {
        expect(v2.querySelector('font, big, center, span:not(.md-spoiler), div:not(.md-alert)')).toBeNull();
        expect(v2.textContent).not.toMatch(/<\/?(?:b|i|li|p|br|font|strong|h\d|details|summary|dl|code)\b/i);
      });

      it('matches the reviewed snapshot', async () => {
        const file = `${row.id}-${row.slug.replace(/[^a-z0-9-]/gi, '_')}.html`;
        await expect(html).toMatchFileSnapshot(`./__snapshots__/legacy/${file}`);
      });
    },
  );

  it('renders the same descriptions without HTML interpretation in full (for comparison)', () => {
    for (const row of descriptions) {
      expect(findViolations(renderMarkdown(row.description, { profile: 'full' }).html)).toEqual([]);
    }
  });
});
