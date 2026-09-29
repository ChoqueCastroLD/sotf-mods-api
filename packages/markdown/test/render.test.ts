import { describe, expect, it } from 'vitest';
import {
  EXTERNAL_REL,
  extractMentions,
  hasRawHtml,
  localizeHtml,
  MAX_MARKDOWN_LENGTH,
  MarkdownInputError,
  PROFILES,
  RENDER_VERSION,
  renderMarkdown,
} from '../src/index.ts';
import { renderMarkdownTree } from '../src/render.ts';
import { toSafeHtml } from '../src/serialize.ts';
import { findViolations, parseHtml } from './helpers/safety.ts';

const REL = EXTERNAL_REL.join(' ');

describe('renderMarkdown: basics', () => {
  it('renders CommonMark + GFM in the full profile', () => {
    const { html } = renderMarkdown(
      '**bold** _it_ ~~gone~~ `code`\n\n1. one\n2. two\n\n| a | b |\n|:--|--:|\n| 1 | 2 |\n\n---\n\n```js\nlet x = 1;\n```',
    );
    const body = parseHtml(html);
    expect(body.querySelector('strong')?.textContent).toBe('bold');
    expect(body.querySelector('em')?.textContent).toBe('it');
    expect(body.querySelector('del')?.textContent).toBe('gone');
    expect(body.querySelector('p code')?.textContent).toBe('code');
    expect(body.querySelectorAll('ol li')).toHaveLength(2);
    expect(body.querySelector('th')?.getAttribute('align')).toBe('left');
    expect(body.querySelector('td:last-child')?.getAttribute('align')).toBe('right');
    expect(body.querySelector('hr')).not.toBeNull();
    expect(body.querySelector('pre code.language-js')?.textContent).toBe('let x = 1;\n');
  });

  it('keeps an ordered list start number', () => {
    expect(renderMarkdown('3. three\n4. four').html).toContain('<ol start="3">');
  });

  it('turns every newline into a line break (legacy showdown behaviour)', () => {
    const { html } = renderMarkdown('line one\nline two');
    expect(html).toBe('<p>line one<br>\nline two</p>\n');
  });

  it('does not use single tildes for strikethrough and does not link file names', () => {
    const { html } = renderMarkdown('~50 fps~ with readme.md and config.json');
    expect(html).not.toContain('<del>');
    expect(html).not.toContain('<a');
  });

  it('is deterministic', () => {
    const md = '# Title\n\nText with @someone and https://example.com and ||secret||';
    expect(renderMarkdown(md)).toEqual(renderMarkdown(md));
  });

  it('reports the render version', () => {
    expect(renderMarkdown('x').renderVersion).toBe(RENDER_VERSION);
    expect(Number.isInteger(RENDER_VERSION) && RENDER_VERSION > 0).toBe(true);
  });

  it('renders empty and whitespace-only input as nothing', () => {
    for (const profile of PROFILES) {
      expect(renderMarkdown('', { profile })).toMatchObject({ html: '', text: '', links: [], headings: [] });
      expect(renderMarkdown('  \n\n \t', { profile }).html).toBe('');
    }
  });

  it('rejects invalid input and options', () => {
    expect(() => renderMarkdown(42 as unknown as string)).toThrow(MarkdownInputError);
    expect(() => renderMarkdown('x'.repeat(MAX_MARKDOWN_LENGTH + 1))).toThrow(/exceeds/);
    expect(() => renderMarkdown('x', { profile: 'nope' as 'full' })).toThrow(/profile/);
    expect(() => renderMarkdown('x', { idPrefix: '"><script>' })).toThrow(/idPrefix/);
    expect(() => renderMarkdown('x', { headingOffset: 9 })).toThrow(/headingOffset/);
    try {
      renderMarkdown('x'.repeat(MAX_MARKDOWN_LENGTH + 1));
    } catch (error) {
      expect((error as MarkdownInputError).code).toBe('markdown_too_long');
    }
  });

  it('accepts input at the size limit', () => {
    expect(renderMarkdown('a'.repeat(MAX_MARKDOWN_LENGTH)).text).toHaveLength(MAX_MARKDOWN_LENGTH);
  });
});

describe('raw HTML', () => {
  it('shows raw HTML as literal text in full and lite (nothing typed is lost)', () => {
    for (const profile of ['full', 'lite'] as const) {
      const { html, text } = renderMarkdown('Press <Tab> then <b>bold</b>', { profile });
      expect(parseHtml(html).querySelector('b')).toBeNull();
      expect(text).toBe('Press <Tab> then <b>bold</b>');
    }
  });

  it('interprets allowlisted HTML in legacyHtml and drops the rest', () => {
    const { html } = renderMarkdown(
      '<b>bold</b> <font color="red">red</font> <center>mid</center> <span style="x">s</span>\n\n<details><summary>More</summary>\n\nHidden **text**\n\n</details>',
      { profile: 'legacyHtml' },
    );
    const body = parseHtml(html);
    expect(body.querySelector('b')?.textContent).toBe('bold');
    expect(body.querySelector('font, center, span[style]')).toBeNull();
    expect(body.textContent).toContain('red');
    expect(body.textContent).toContain('mid');
    expect(body.querySelector('details summary')?.textContent).toBe('More');
    expect(body.querySelector('details strong')?.textContent).toBe('text');
  });

  it('detects raw HTML', () => {
    expect(hasRawHtml('<b>x</b>')).toBe(true);
    expect(hasRawHtml('text <br> text')).toBe(true);
    expect(hasRawHtml('<!-- comment -->')).toBe(true);
    expect(hasRawHtml('a < b and <https://example.com>')).toBe(false);
    expect(hasRawHtml('`<b>` in code')).toBe(false);
    expect(hasRawHtml('plain')).toBe(false);
  });
});

describe('headings', () => {
  it('shifts levels, adds unique prefixed ids and a hidden anchor', () => {
    const result = renderMarkdown('# Install\n## Install\n### Über uns 🌲\n###### Deep');
    expect(result.headings).toEqual([
      { level: 2, id: 'md-install', text: 'Install' },
      { level: 3, id: 'md-install-1', text: 'Install' },
      { level: 4, id: 'md-über-uns', text: 'Über uns 🌲' },
      { level: 6, id: 'md-deep', text: 'Deep' },
    ]);
    const body = parseHtml(result.html);
    const anchor = body.querySelector('h2 a.md-anchor');
    expect(anchor?.getAttribute('href')).toBe('#md-install');
    expect(anchor?.getAttribute('aria-hidden')).toBe('true');
    expect(anchor?.getAttribute('tabindex')).toBe('-1');
    expect(result.text.split('\n')[0]).toBe('Install');
  });

  it('honours idPrefix and headingOffset', () => {
    const { headings } = renderMarkdown('# A', { idPrefix: 'cl-12-', headingOffset: 0 });
    expect(headings).toEqual([{ level: 1, id: 'cl-12-a', text: 'A' }]);
  });

  it('never collides when a heading text looks like a generated suffix', () => {
    const ids = renderMarkdown('# a\n# a\n# a-1\n# a').headings.map((heading) => heading.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses a fallback slug for headings without letters', () => {
    expect(renderMarkdown('# !!!').headings[0]?.id).toBe('md-section');
  });

  it('turns headings into bold paragraphs in lite', () => {
    const { html, headings } = renderMarkdown('# Title', { profile: 'lite' });
    expect(html).toBe('<p><strong>Title</strong></p>\n');
    expect(headings).toEqual([]);
  });
});

describe('links', () => {
  it('marks external links with rel and leaves internal links alone', () => {
    const { html, links } = renderMarkdown(
      '[ext](https://github.com/x) [int](https://sotf-mods.com/mods/a/b) [www](https://www.sotf-mods.com/x) [rel](/install) [mail](mailto:a@b.co)',
    );
    const anchors = [...parseHtml(html).querySelectorAll('a')];
    expect(anchors.map((a) => a.getAttribute('rel'))).toEqual([REL, null, null, null, REL]);
    expect(links.map((link) => [link.href, link.external, link.kind])).toEqual([
      ['https://github.com/x', true, 'link'],
      ['https://sotf-mods.com/mods/a/b', false, 'link'],
      ['https://www.sotf-mods.com/x', false, 'link'],
      ['/install', false, 'link'],
      ['mailto:a@b.co', true, 'link'],
    ]);
  });

  it('respects custom internal hosts', () => {
    const { links } = renderMarkdown('[a](https://beta.sotf-mods.com/x)', { internalHosts: ['beta.sotf-mods.com'] });
    expect(links[0]?.external).toBe(false);
  });

  it('autolinks bare URLs, www and e-mail addresses like GFM', () => {
    const { links } = renderMarkdown(
      'See https://example.com/path?x=1. Or www.example.org/a_(b), (https://x.io/y) and mail ana@example.com.',
    );
    expect(links.map((link) => [link.href, link.text])).toEqual([
      ['https://example.com/path?x=1', 'https://example.com/path?x=1'],
      ['https://www.example.org/a_(b)', 'www.example.org/a_(b)'],
      ['https://x.io/y', 'https://x.io/y'],
      ['mailto:ana@example.com', 'ana@example.com'],
    ]);
  });

  it('does not autolink inside code or existing links, nor invalid domains', () => {
    const { links } = renderMarkdown('`https://a.com` [https://b.com](https://c.com) https://localhost www.x_y.com');
    expect(links.map((link) => link.href)).toEqual(['https://c.com/']);
  });

  it.each(PROFILES)('never nests links: text anywhere inside a link is left alone (%s)', (profile) => {
    const resolveMention = (handle: string) => ({ href: `/profile/${handle}` });
    const inputs =
      profile === 'legacyHtml'
        ? [
            '[**https://x.com**](https://y.com)',
            '[*@bob*](https://y.com)',
            '<a href="https://y.com"><b>@bob www.x.com</b></a>',
            '<a href="https://y.com"><i><b>ana@example.com</b></i></a>',
          ]
        : ['[**https://x.com**](https://y.com)', '[*@bob*](https://y.com)', '[_x ||www.x.com||_](https://y.com)'];
    for (const input of inputs) {
      const { tree } = renderMarkdownTree(input, { profile, resolveMention });
      const html = toSafeHtml(tree);
      expect(findViolations(html, tree)).toEqual([]);
      const result = renderMarkdown(input, { profile, resolveMention });
      expect(parseHtml(result.html).querySelectorAll('a')).toHaveLength(1);
      expect(result.links.map((link) => link.href)).toEqual(['https://y.com/']);
      expect(result.mentions).toEqual([]);
    }
  });

  it.each(PROFILES)('classifies links the way a browser resolves them (%s)', (profile) => {
    const cases: Array<[string, string]> = [
      ['http:evil.com', 'http://evil.com/'],
      ['HTTPS://EVIL.com', 'https://evil.com/'],
      ['https://sotf-mods.com./x', 'https://sotf-mods.com./x'],
    ];
    if (profile === 'legacyHtml') {
      cases.push(
        ['https:\\\\evil.com', 'https://evil.com/'],
        ['https:/\\evil.com', 'https://evil.com/'],
        ['https://evil.com\\@sotf-mods.com/x', 'https://evil.com/@sotf-mods.com/x'],
        ['/\\evil.com/x', 'https://evil.com/x'],
      );
    }
    for (const [href, expected] of cases) {
      const input = profile === 'legacyHtml' ? `<a href="${href}">x</a>` : `[x](${href})`;
      const { html, links } = renderMarkdown(input, { profile });
      const anchor = parseHtml(html).querySelector('a');
      expect(anchor?.getAttribute('href')).toBe(expected);
      const leaves = !expected.startsWith('https://sotf-mods.com');
      expect(anchor?.getAttribute('rel')).toBe(leaves ? REL : null);
      expect(links).toEqual([{ href: expected, text: 'x', external: leaves, kind: 'link' }]);
    }
  });

  it('keeps unsafe link syntax as visible text', () => {
    const { html, text, links } = renderMarkdown('[click](javascript:alert(1))');
    expect(links).toEqual([]);
    expect(html).not.toContain('<a');
    expect(text).toBe('[click](javascript:alert(1))');
  });

  it('drops links that end up without content', () => {
    const { html } = renderMarkdown('<a href="https://x.com"></a>after', { profile: 'legacyHtml' });
    expect(html).toBe('<p>after</p>\n');
  });
});

describe('images', () => {
  it('adds lazy loading and no-referrer, and lists the images', () => {
    const { html, images } = renderMarkdown('![Alt text](https://example.com/a.png "Title")');
    const img = parseHtml(html).querySelector('img');
    expect(img?.getAttribute('loading')).toBe('lazy');
    expect(img?.getAttribute('decoding')).toBe('async');
    expect(img?.getAttribute('referrerpolicy')).toBe('no-referrer');
    expect(img?.getAttribute('title')).toBe('Title');
    expect(images).toEqual([
      { src: 'https://example.com/a.png', renderedSrc: 'https://example.com/a.png', alt: 'Alt text' },
    ]);
  });

  it('swaps sources through resolveImage and reserves space', () => {
    const { html, images } = renderMarkdown('![a](https://imgur.com/a.png)', {
      resolveImage: (src) => ({
        src: `https://r2.sotf-mods.com/media/x/640.webp?from=${encodeURIComponent(src)}`,
        width: 640,
        height: 360,
      }),
    });
    const img = parseHtml(html).querySelector('img');
    expect(img?.getAttribute('src')).toMatch(/^https:\/\/r2\.sotf-mods\.com\/media\/x\/640\.webp/);
    expect(img?.getAttribute('width')).toBe('640');
    expect(img?.getAttribute('height')).toBe('360');
    expect(images[0]?.src).toBe('https://imgur.com/a.png');
  });

  it('ignores resolver results that are not trusted targets or have bad sizes', () => {
    for (const target of [
      { src: 'javascript:alert(1)' },
      { src: '//evil.example/x.png' },
      { src: 'http://insecure.example/x.png' },
    ]) {
      const { html } = renderMarkdown('![a](https://example.com/a.png)', { resolveImage: () => target });
      expect(html).toContain('src="https://example.com/a.png"');
    }
    const { html } = renderMarkdown('![a](https://example.com/a.png)', {
      resolveImage: () => ({ src: '/media/a.webp', width: -1, height: 1e9 }),
    });
    expect(html).toContain('src="/media/a.webp"');
    expect(html).not.toContain('width');
  });

  it('turns images into links in lite (and into text inside links)', () => {
    expect(renderMarkdown('![shot](https://example.com/a.png)', { profile: 'lite' }).html).toBe(
      `<p><a href="https://example.com/a.png" rel="${REL}">shot</a></p>\n`,
    );
    expect(renderMarkdown('[![shot](https://example.com/a.png)](https://example.com)', { profile: 'lite' }).html).toBe(
      `<p><a href="https://example.com/" rel="${REL}">shot</a></p>\n`,
    );
  });

  it('drops data: images but keeps their alt text', () => {
    const { html } = renderMarkdown('![fallback](data:image/png;base64,AAAA)');
    expect(html).not.toContain('<img');
  });
});

describe('alerts', () => {
  it.each(['NOTE', 'TIP', 'IMPORTANT', 'WARNING', 'CAUTION'])('renders > [!%s]', (type) => {
    const { html, text } = renderMarkdown(`> [!${type}]\n> Back up your **save**.`);
    const alert = parseHtml(html).querySelector('div.md-alert');
    expect(alert?.classList.contains(`md-alert-${type.toLowerCase()}`)).toBe(true);
    expect(alert?.getAttribute('role')).toBe('note');
    expect(alert?.querySelector(`.md-alert-title [data-md-label="alert-${type.toLowerCase()}"]`)).not.toBeNull();
    expect(alert?.querySelector('p:not(.md-alert-title) strong')?.textContent).toBe('save');
    expect(text).toBe('Back up your save.');
  });

  it('accepts lower case markers and multi-paragraph bodies', () => {
    const { html } = renderMarkdown('> [!warning]\n> one\n>\n> two');
    const alert = parseHtml(html).querySelector('div.md-alert-warning');
    expect(alert?.querySelectorAll('p')).toHaveLength(3);
  });

  it('leaves ordinary quotes, inline markers, empty alerts and nested quotes alone', () => {
    for (const md of ['> quote', '> [!NOTE] same line', '> [!NOTE]', '- > [!NOTE]\n  > nested', '> [!OTHER]\n> x']) {
      expect(renderMarkdown(md).html).not.toContain('md-alert');
    }
  });

  it('keeps alerts as plain quotes in lite', () => {
    expect(renderMarkdown('> [!NOTE]\n> x', { profile: 'lite' }).html).toContain('<blockquote>');
  });
});

describe('YouTube facades', () => {
  it('replaces a paragraph holding only a video link', () => {
    const { html, links } = renderMarkdown('https://youtu.be/dQw4w9WgXcQ?t=90');
    const body = parseHtml(html);
    const link = body.querySelector('figure.md-youtube > a.md-youtube-link');
    expect(link?.getAttribute('href')).toBe('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=90s');
    expect(link?.getAttribute('data-youtube-id')).toBe('dQw4w9WgXcQ');
    expect(link?.getAttribute('data-youtube-start')).toBe('90');
    expect(link?.getAttribute('rel')).toBe(REL);
    const img = link?.querySelector('img');
    expect(img?.getAttribute('src')).toBe('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg');
    expect(img?.getAttribute('alt')).toBe('YouTube');
    expect(img?.getAttribute('width')).toBe('480');
    expect(body.querySelector('iframe')).toBeNull();
    expect(links).toEqual([
      { href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=90s', text: 'YouTube', external: true, kind: 'youtube' },
    ]);
  });

  it('uses the link label as alt text', () => {
    const { html } = renderMarkdown('[Trailer](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
    expect(parseHtml(html).querySelector('.md-youtube img')?.getAttribute('alt')).toBe('Trailer');
  });

  it('keeps inline video links and non-video YouTube links as links', () => {
    for (const md of [
      'Watch https://youtu.be/dQw4w9WgXcQ now',
      'https://www.youtube.com/@channel',
      'https://www.youtube.com/playlist?list=PL123',
    ]) {
      expect(renderMarkdown(md).html).not.toContain('md-youtube');
    }
  });

  it('keeps plain links in lite', () => {
    expect(renderMarkdown('https://youtu.be/dQw4w9WgXcQ', { profile: 'lite' }).html).not.toContain('md-youtube');
  });

  it('turns a legacy YouTube iframe into a facade', () => {
    const { html } = renderMarkdown('<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>', {
      profile: 'legacyHtml',
    });
    expect(parseHtml(html).querySelector('.md-youtube-link')?.getAttribute('data-youtube-id')).toBe('dQw4w9WgXcQ');
  });
});

describe('spoilers', () => {
  it('wraps ||text|| in a collapsed toggle button, in every profile', () => {
    for (const profile of PROFILES) {
      const { html, text } = renderMarkdown('The end: ||Kelvin **survives**|| ok', { profile });
      const spoiler = parseHtml(html).querySelector('span.md-spoiler');
      expect(spoiler?.getAttribute('role')).toBe('button');
      expect(spoiler?.getAttribute('tabindex')).toBe('0');
      expect(spoiler?.getAttribute('aria-expanded')).toBe('false');
      expect(spoiler?.getAttribute('aria-label')).toBe('Spoiler');
      expect(spoiler?.getAttribute('data-md-label')).toBe('spoiler');
      expect(spoiler?.querySelector('strong')?.textContent).toBe('survives');
      expect(text).toBe('The end: ok');
    }
  });

  it('leaves unbalanced, empty and code markers literal', () => {
    expect(renderMarkdown('a || b').html).toBe('<p>a || b</p>\n');
    expect(renderMarkdown('a |||| b').html).toBe('<p>a |||| b</p>\n');
    expect(renderMarkdown('`a || b || c`').html).toBe('<p><code>a || b || c</code></p>\n');
  });

  it('keeps spoilers that hold a link out of the button role (no nested interactive content)', () => {
    for (const input of ['||see [docs](/docs)||', '||see https://x.com/y||', '||**www.x.com**||']) {
      const spoiler = parseHtml(renderMarkdown(input).html).querySelector('span.md-spoiler');
      expect(spoiler?.querySelector('a')).not.toBeNull();
      expect([...(spoiler?.attributes ?? [])].map((attr) => attr.name)).toEqual(['class']);
    }
  });

  it('does not create spoilers inside links', () => {
    expect(renderMarkdown('[||x||](https://y.com)').html).toBe(
      `<p><a href="https://y.com/" rel="${REL}">||x||</a></p>\n`,
    );
  });

  it('localises the accessible name', () => {
    const html = localizeHtml(renderMarkdown('||x||').html, { spoiler: 'Спойлер "<>"' });
    expect(parseHtml(html).querySelector('.md-spoiler')?.getAttribute('aria-label')).toBe('Спойлер "<>"');
  });

  it('supports several spoilers per paragraph', () => {
    const { html } = renderMarkdown('||a|| and ||b||');
    expect(parseHtml(html).querySelectorAll('.md-spoiler')).toHaveLength(2);
  });
});

describe('mentions', () => {
  const resolveMention = (handle: string) => (handle === 'ghost' ? null : { href: `/profile/${handle}` });

  it('links resolved mentions and lists every handle', () => {
    const result = renderMarkdown('Thanks @ShokoCC and @ghost, cc @shokocc. Mail me@example.com', {
      profile: 'lite',
      resolveMention,
    });
    expect(result.mentions).toEqual(['shokocc', 'ghost']);
    const anchors = [...parseHtml(result.html).querySelectorAll('a.md-mention')];
    expect(anchors.map((a) => [a.getAttribute('href'), a.textContent])).toEqual([
      ['/profile/shokocc', '@ShokoCC'],
      ['/profile/shokocc', '@shokocc'],
    ]);
    expect(result.html).toContain('mailto:me@example.com');
  });

  it('calls the resolver once per handle', () => {
    let calls = 0;
    renderMarkdown('@a @a @A @b', {
      resolveMention: () => {
        calls += 1;
        return null;
      },
    });
    expect(calls).toBe(2);
  });

  it('ignores mentions in code and links and in URLs', () => {
    expect(extractMentions('`@code` [@link](https://x.com) https://x.com/@path a@b.com')).toEqual([]);
  });

  it('uses the resolver label', () => {
    const { html } = renderMarkdown('@ana', { resolveMention: () => ({ href: '/profile/ana', label: 'Ana 🌲' }) });
    expect(parseHtml(html).querySelector('a.md-mention')?.textContent).toBe('Ana 🌲');
  });
});

describe('task lists', () => {
  it('renders disabled checkboxes in full, text in lite', () => {
    const full = parseHtml(renderMarkdown('- [x] done\n- [ ] todo').html);
    expect(full.querySelector('ul.contains-task-list')).not.toBeNull();
    const boxes = [...full.querySelectorAll('li.task-list-item input')] as HTMLInputElement[];
    expect(boxes.map((box) => [box.type, box.checked, box.disabled])).toEqual([
      ['checkbox', true, true],
      ['checkbox', false, true],
    ]);
    expect(renderMarkdown('- [x] done', { profile: 'lite' }).text).toBe('[x] done');
  });

  it('supports loose task lists', () => {
    const body = parseHtml(renderMarkdown('- [x] one\n\n- [ ] two').html);
    expect(body.querySelectorAll('li p input')).toHaveLength(2);
  });
});

describe('lite profile', () => {
  it('has no tables, headings or images but keeps inline formatting, lists and quotes', () => {
    const { html } = renderMarkdown('| a |\n|---|\n| b |\n\n- **x**\n\n> quote', { profile: 'lite' });
    const body = parseHtml(html);
    expect(body.querySelector('table, h1, h2, img')).toBeNull();
    expect(body.querySelector('li strong')?.textContent).toBe('x');
    expect(body.querySelector('blockquote')).not.toBeNull();
    expect(body.textContent).toContain('| a |');
  });
});

describe('plain text projection', () => {
  it('separates blocks, keeps code, and skips images and chrome', () => {
    const { text } = renderMarkdown(
      '# Title\n\nPara **one**\nline two\n\n- a\n- b\n\n![img](https://x.com/a.png)\n\n```\ncode  kept\n```\n\n| h |\n|---|\n| c |',
    );
    expect(text).toBe('Title\n\nPara one\nline two\n\na\nb\n\ncode kept\n\nh\nc');
  });
});

describe('footnotes', () => {
  it('render as the literal text typed', () => {
    const { text, html } = renderMarkdown('Claim[^1]\n\n[^1]: Source');
    expect(text).toBe('Claim[^1]\n\n[^1]: Source');
    expect(html).not.toContain('<section');
  });
});

describe('pathological input', () => {
  it.each([
    ['deep quotes', '> '.repeat(5000)],
    ['deep lists', '- '.repeat(5000)],
    ['deep indentation', Array.from({ length: 150 }, (_, i) => `${'  '.repeat(i)}- x`).join('\n')],
    ['deep raw html', '<div><blockquote>'.repeat(400)],
    ['emphasis bomb', `${'*_'.repeat(10_000)}`],
    ['bracket bomb', `${'['.repeat(10_000)}x${']'.repeat(10_000)}`],
  ])('%s renders quickly and safely in every profile', { timeout: 60_000 }, (_name, md) => {
    for (const profile of PROFILES) {
      const start = performance.now();
      const { html } = renderMarkdown(md, { profile });
      expect(performance.now() - start).toBeLessThan(2000);
      expect(findViolations(html)).toEqual([]);
    }
  });

  it('keeps the text of over-nested documents instead of dropping it', () => {
    const { text } = renderMarkdown(`${'> '.repeat(200)}deep text`);
    expect(text).toContain('deep text');
  });
});
