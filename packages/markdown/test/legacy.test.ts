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

/**
 * Legacy markup that the HTML parser accepts but that breaks the content model once the sanitiser
 * unwraps the presentational elements around it. The browser must build exactly the verified tree
 * (no nested links, no block inside a paragraph) and no empty spacer may be left behind.
 */
describe('legacy content-model repairs', () => {
  const anchor = (id: string) => `<a class="md-anchor" href="#${id}" aria-hidden="true" tabindex="-1">#</a>`;
  const REL = 'ugc nofollow noopener';

  it.each([
    [
      'a link around a Markdown heading is pushed into the heading',
      '<a href="/x">\n\n## Title\n\n</a>',
      `<h3 id="md-title"><a href="/x">Title</a>${anchor('md-title')}</h3>`,
    ],
    [
      'an external link around a heading keeps its rel',
      '<a href="https://e.example"><h2>T</h2></a>',
      `<h3 id="md-t"><a href="https://e.example/" rel="${REL}">T</a>${anchor('md-t')}</h3>`,
    ],
    [
      'bold around a Markdown heading is pushed into the heading',
      '<b>\n\n## Title\n\n</b>',
      `<h3 id="md-title"><b>Title</b>${anchor('md-title')}</h3>`,
    ],
    [
      'a centred heading and paragraph stay blocks (never inside a paragraph)',
      '<center><h2>Title</h2><p>text</p></center>',
      `<h3 id="md-title">Title${anchor('md-title')}</h3><p>text</p>`,
    ],
    [
      'font around a heading leaves no spacer',
      '<font size=5><h2>T</h2></font>',
      `<h3 id="md-t">T${anchor('md-t')}</h3>`,
    ],
    ['bold around a paragraph', '<b><p>x</p></b>', '<p><b>x</b></p>'],
    [
      'a link around two paragraphs links both',
      '<a href="/x"><p>one</p><p>two</p></a>',
      '<p><a href="/x">one</a></p><p><a href="/x">two</a></p>',
    ],
    ['divs stay separate lines', '<div>a</div><div>b</div>', '<p>a</p><p>b</p>'],
    [
      'a heading inside a heading (via an unwrapped div) is split out',
      '<h2>Title<div><h3>x</h3></div></h2>',
      `<h3 id="md-title">Title${anchor('md-title')}</h3><h4 id="md-x">x${anchor('md-x')}</h4>`,
    ],
    [
      'a list item inside a list item (via center)',
      '<ul><li>a<center><li>b</li></center></li></ul>',
      '<ul><li>a</li><li>b</li></ul>',
    ],
    [
      'a definition inside a term (via center)',
      '<dl><dt>t<center><dd>d</dd></center></dt></dl>',
      '<dl><dt>t</dt><dd>d</dd></dl>',
    ],
    [
      'a link never wraps another link (via a table cell; the table closes the paragraph)',
      '<a href="/1"><table><tr><td><a href="/2">x</a></td></tr></table></a>',
      '<table><tbody><tr><td><a href="/2">x</a></td></tr></tbody></table>',
    ],
    [
      'links split by the parser stay split (via center)',
      '<a href="/x"><center>a <a href="/y">y</a></center></a>',
      '<p><a href="/x">a </a><a href="/y">y</a></p>',
    ],
    [
      'a link never wraps another link (inside a table cell the parser nests them: the outer wins)',
      '<div><a href="/1"><table><tr><td><a href="/2">x</a> y</td></tr></table></a></div>',
      '<table><tbody><tr><td><a href="/1">x y</a></td></tr></tbody></table>',
    ],
    [
      'a caption is shown above the table',
      '<table><caption>cap</caption><tr><td>x</td></tr></table>',
      '<p>cap</p><table><tbody><tr><td>x</td></tr></tbody></table>',
    ],
    [
      'a block inside a table is moved in front of it',
      '<table><tr><td>a</td></tr><center>bad</center></table>',
      '<p>bad</p><table><tbody><tr><td>a</td></tr></tbody></table>',
    ],
    ['a summary outside details is a line of text', '<summary>x</summary>tail', '<p>x</p><p>tail</p>'],
    [
      'empty wrappers leave no spacer',
      '<p><b><script>x</script></b></p><p><i><br></i></p><b><p>x</p></b>',
      '<p><b>x</b></p>',
    ],
  ])('%s', (_name, input, expected) => {
    const { tree } = renderMarkdownTree(input, { profile: 'legacyHtml' });
    const html = toSafeHtml(tree);
    expect(html.replace(/\n/g, '')).toBe(expected);
    expect(findViolations(html, tree)).toEqual([]);
  });

  it('never makes a spoiler inside a summary a button (the summary is the control)', () => {
    const { tree } = renderMarkdownTree('<details><summary>||x||</summary>body</details>', { profile: 'legacyHtml' });
    const html = toSafeHtml(tree);
    const spoiler = parseHtml(html).querySelector('summary .md-spoiler');
    expect(spoiler?.textContent).toBe('x');
    expect([...(spoiler?.attributes ?? [])].map((attr) => attr.name)).toEqual(['class']);
    expect(findViolations(html, tree)).toEqual([]);
  });

  it('drops a checkbox inside a link or a summary', () => {
    for (const input of [
      '<ul><li><details><summary><input type=checkbox disabled> s</summary>b</details></li></ul>',
      '<ul><li><a href="/x"><input type=checkbox disabled checked> done</a></li></ul>',
    ]) {
      const { tree } = renderMarkdownTree(input, { profile: 'legacyHtml' });
      const html = toSafeHtml(tree);
      expect(parseHtml(html).querySelector('input')).toBeNull();
      expect(findViolations(html, tree)).toEqual([]);
    }
  });
});
