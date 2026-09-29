import type { Root } from 'hast';
import { describe, expect, it } from 'vitest';
import { findAutolinks } from '../src/autolink.ts';
import { enhance } from '../src/enhance.ts';
import { defuse, MAX_INDENT, MAX_LINE_CONTAINERS } from '../src/guard.ts';
import {
  DEFAULT_LABELS,
  LABEL_KEYS,
  localizeHtml,
  renderMarkdown,
  safeUrl,
  slugify,
  youtubeFromUrl,
} from '../src/index.ts';
import { legacySource } from '../src/parse.ts';
import { isExternal, isTrustedTarget } from '../src/url.ts';
import { MarkdownSafetyError, verifyTree } from '../src/verify.ts';

describe('safeUrl', () => {
  const links = ['http', 'https', 'mailto'];
  it.each([
    ['https://example.com/a?b#c', 'https://example.com/a?b#c'],
    ['HTTPS://EXAMPLE.com', 'https://example.com/'],
    ['mailto:a@b.co', 'mailto:a@b.co'],
    ['MAILTO:a@b.co', 'mailto:a@b.co'],
    ['/install', '/install'],
    ['#section', '#section'],
    ['?q=1', '?q=1'],
    ['relative/path', 'relative/path'],
    ['/a:b', '/a:b'],
    ['  https://x.com  ', 'https://x.com/'],
    // Everything that names a host is resolved like a browser does and serialised back.
    ['//cdn.example/x', 'https://cdn.example/x'],
    ['\\\\evil.example', 'https://evil.example/'],
    ['/\\evil.example', 'https://evil.example/'],
    ['http:evil.com', 'http://evil.com/'],
    ['https:\\\\evil.com', 'https://evil.com/'],
    ['https:/\\evil.com', 'https://evil.com/'],
    ['https://evil.com\\@sotf-mods.com/x', 'https://evil.com/@sotf-mods.com/x'],
    ['https://user:pw@Sotf-Mods.com:443/x', 'https://user:pw@sotf-mods.com/x'],
    ['https://bücher.example/ä', 'https://xn--bcher-kva.example/%C3%A4'],
  ])('accepts %j', (input, expected) => {
    expect(safeUrl(input, links)).toBe(expected);
  });

  it.each([
    'javascript:alert(1)',
    'JaVaScRiPt:alert(1)',
    'java\nscript:alert(1)',
    'java\tscript:alert(1)',
    '\u0001javascript:alert(1)',
    ' \u0000javascript:alert(1)',
    'data:text/html,x',
    'vbscript:x',
    'file:///etc/passwd',
    'feed:javascript:x',
    '1:x',
    ':x',
    'https://',
    'http:',
    'https://[::1',
    '//',
  ])('rejects %j', (input) => {
    expect(safeUrl(input, links)).toBeNull();
  });

  it('rejects mailto for media and non-strings', () => {
    expect(safeUrl('mailto:a@b.co', ['http', 'https'])).toBeNull();
    expect(safeUrl(42, links)).toBeNull();
  });

  it('is idempotent', () => {
    for (const value of [
      'HTTPS://x.com',
      '\\\\evil',
      ' /a ',
      'mailto:x@y.z',
      'http:evil.com',
      'https://bücher.example/ä',
    ]) {
      const once = safeUrl(value, links);
      expect(safeUrl(once, links)).toBe(once);
    }
  });
});

describe('isExternal and isTrustedTarget', () => {
  const hosts = ['sotf-mods.com', 'www.sotf-mods.com'];
  it('classifies links', () => {
    expect(isExternal('https://sotf-mods.com/x', hosts)).toBe(false);
    expect(isExternal('https://SOTF-MODS.com:443/x', hosts)).toBe(false);
    expect(isExternal('https://user@sotf-mods.com/x', hosts)).toBe(false);
    expect(isExternal('https://sotf-mods.com.evil.example/x', hosts)).toBe(true);
    expect(isExternal('//evil.example/x', hosts)).toBe(true);
    expect(isExternal('/install', hosts)).toBe(false);
    expect(isExternal('mailto:a@b.co', hosts)).toBe(true);
    expect(isExternal('https://sotf-mods.com./x', hosts)).toBe(false);
    expect(isExternal('#top', hosts)).toBe(false);
    expect(isExternal('?page=2', hosts)).toBe(false);
  });

  it('resolves hosts with the WHATWG parser, not a pattern', () => {
    for (const href of [
      'http:evil.com',
      'https:\\\\evil.com',
      'https:/\\evil.com',
      'https://evil.com\\@sotf-mods.com',
      'https://evil.com\\@sotf-mods.com/x',
      '/\\evil.com',
      '\\\\evil.com',
      ' //evil.com',
      '/\t/evil.com',
      'https://sotf-mods.com@evil.com/',
    ]) {
      expect(isExternal(href, hosts), href).toBe(true);
    }
    expect(isExternal('https://evil.com', ['EVIL.com.'])).toBe(false);
  });

  it('compares the port too: another port is another origin', () => {
    for (const href of [
      'https://sotf-mods.com:8443/',
      'http://sotf-mods.com:443/x',
      '//www.sotf-mods.com:8080/x',
      'https://sotf-mods.com.:8443/',
    ]) {
      expect(isExternal(href, hosts), href).toBe(true);
    }
    // Default ports are dropped by the URL parser: still the same origin.
    expect(isExternal('https://sotf-mods.com:443/x', hosts)).toBe(false);
    expect(isExternal('http://sotf-mods.com:80/x', hosts)).toBe(false);
    expect(isExternal('http://localhost:3000/x', ['localhost:3000'])).toBe(false);
    expect(isExternal('http://localhost:3001/x', ['localhost:3000'])).toBe(true);
    expect(isExternal('http://localhost/x', ['localhost:3000'])).toBe(true);
    const { links } = renderMarkdown('[x](https://sotf-mods.com:8443/)');
    expect(links).toEqual([{ href: 'https://sotf-mods.com:8443/', text: 'x', external: true, kind: 'link' }]);
  });

  it('only trusts site paths and https URLs', () => {
    expect(isTrustedTarget('/profile/ana')).toBe(true);
    expect(isTrustedTarget('https://r2.sotf-mods.com/a.webp')).toBe(true);
    for (const value of ['//evil', 'http://x.com', 'javascript:x', '/a b', '/a"b', '', 'x'.repeat(3000), 42]) {
      expect(isTrustedTarget(value)).toBe(false);
    }
  });
});

describe('youtubeFromUrl', () => {
  it.each([
    ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'dQw4w9WgXcQ', null],
    ['https://youtube.com/watch?feature=share&v=dQw4w9WgXcQ&t=1h2m3s', 'dQw4w9WgXcQ', 3723],
    ['https://m.youtube.com/watch?v=dQw4w9WgXcQ#t=45', 'dQw4w9WgXcQ', 45],
    ['https://youtu.be/dQw4w9WgXcQ?si=abc&t=90', 'dQw4w9WgXcQ', 90],
    ['http://www.youtube.com/embed/dQw4w9WgXcQ?start=12', 'dQw4w9WgXcQ', 12],
    ['https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', 'dQw4w9WgXcQ', null],
    ['https://www.youtube.com/shorts/dQw4w9WgXcQ', 'dQw4w9WgXcQ', null],
    ['https://www.youtube.com/live/dQw4w9WgXcQ', 'dQw4w9WgXcQ', null],
  ])('recognises %s', (url, id, start) => {
    const video = youtubeFromUrl(url);
    expect(video?.id).toBe(id);
    expect(video?.start).toBe(start);
    expect(video?.thumbnailUrl).toBe(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
  });

  it.each([
    'https://www.youtube.com/playlist?list=PL1',
    'https://www.youtube.com/@channel',
    'https://www.youtube.com/watch?v=short',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ"x',
    'https://evil.example/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com.evil.example/watch?v=dQw4w9WgXcQ',
    'javascript:alert(1)//youtu.be/dQw4w9WgXcQ',
    'ftp://youtu.be/dQw4w9WgXcQ',
  ])('rejects %s', (url) => {
    expect(youtubeFromUrl(url)).toBeNull();
  });
});

describe('findAutolinks', () => {
  it('follows the GFM trailing-punctuation rules', () => {
    const texts = (value: string) => findAutolinks(value).map((link) => link.text);
    expect(texts('Visit https://a.com/x.')).toEqual(['https://a.com/x']);
    expect(texts('(see https://a.com/wiki/Foo_(bar))')).toEqual(['https://a.com/wiki/Foo_(bar)']);
    expect(texts('(https://a.com/x)')).toEqual(['https://a.com/x']);
    expect(texts('https://a.com/?q=1&amp;')).toEqual(['https://a.com/?q=1']);
    expect(texts('"https://a.com/x"')).toEqual([]);
    expect(texts('*https://a.com* _www.b.org_')).toEqual(['https://a.com', 'www.b.org']);
    expect(texts('foohttps://a.com')).toEqual([]);
    expect(texts('mail ana.b+c@ex-ample.co.uk.')).toEqual(['ana.b+c@ex-ample.co.uk']);
    expect(texts('ok a@b_c.com, bad a@b.c_ and user@host')).toEqual(['a@b_c.com']);
  });

  it('gives www links an https destination and e-mails a mailto', () => {
    expect(findAutolinks('www.example.com a@b.co').map((link) => link.href)).toEqual([
      'https://www.example.com',
      'mailto:a@b.co',
    ]);
  });
});

describe('slugify', () => {
  it('keeps letters of every script and drops punctuation', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
    expect(slugify('Über uns — Größe')).toBe('über-uns-größe');
    expect(slugify('Выживание в лесу')).toBe('выживание-в-лесу');
    expect(slugify('日本語 テスト')).toBe('日本語-テスト');
    expect(slugify('  --a__b--  ')).toBe('a-b');
    expect(slugify('🌲🔥')).toBe('');
    expect(Array.from(slugify('ab '.repeat(100))).length).toBeLessThanOrEqual(64);
  });
});

describe('localizeHtml', () => {
  it('swaps alert labels with escaped translations', () => {
    const { html } = renderMarkdown('> [!WARNING]\n> Careful');
    const localized = localizeHtml(html, { 'alert-warning': 'Achtung <&>' });
    expect(localized).toContain('<span data-md-label="alert-warning">Achtung &lt;&amp;&gt;</span>');
    expect(localizeHtml(html, {})).toBe(html);
    expect(localizeHtml('<p>no labels</p>', { 'alert-note': 'x' })).toBe('<p>no labels</p>');
  });

  it('swaps the spoiler accessible name, escaped, without touching author text', () => {
    const source = 'aria-label="x" data-md-label="spoiler"> ||hidden||';
    const { html } = renderMarkdown(source, { profile: 'lite' });
    const localized = localizeHtml(html, { spoiler: 'Spoiler "<&>"' });
    expect(localized).toContain('aria-label="Spoiler &quot;&lt;&amp;&gt;&quot;" data-md-label="spoiler">hidden</span>');
    expect(localized.startsWith('<p>aria-label="x" data-md-label="spoiler"&gt; ')).toBe(true);
    expect(localizeHtml(html, {})).toBe(html);
  });

  it('has a default for every key', () => {
    expect(LABEL_KEYS.sort()).toEqual(Object.keys(DEFAULT_LABELS).sort());
    for (const key of LABEL_KEYS) expect(DEFAULT_LABELS[key]).toMatch(/^\p{Lu}/u);
  });
});

describe('verifyTree (last line of defence)', () => {
  const tree = (node: Root['children'][number]): Root => ({ type: 'root', children: [node] });
  const el = (tagName: string, properties: Record<string, unknown> = {}) =>
    ({ type: 'element', tagName, properties, children: [] }) as unknown as Root['children'][number];

  it.each([
    ['a script element', el('script')],
    ['an event handler', el('p', { onClick: 'alert(1)' })],
    ['a style attribute', el('p', { style: 'x' })],
    ['a javascript: link', el('a', { href: 'javascript:alert(1)' })],
    ['a data: image', el('img', { src: 'data:image/png;base64,AAAA' })],
    ['an unknown class', el('span', { className: ['evil'] })],
    ['a non-heading id', el('p', { id: 'x' })],
    ['a bad heading id', el('h2', { id: 'x" onmouseover="y' })],
    ['a raw node', { type: 'raw', value: '<script>' } as unknown as Root['children'][number]],
    ['a comment', { type: 'comment', value: 'x' } as unknown as Root['children'][number]],
  ])('rejects %s', (_name, node) => {
    expect(() => verifyTree(tree(node), 'full')).toThrow(MarkdownSafetyError);
  });

  // `el` with children, for the content-model checks.
  const node = (tagName: string, children: unknown[] = [], properties: Record<string, unknown> = {}) =>
    ({ type: 'element', tagName, properties, children }) as unknown as Root['children'][number];
  const txt = (value: string) => ({ type: 'text', value });
  const spoiler = (children: unknown[] = [txt('x')]) =>
    node('span', children, { className: ['md-spoiler'], role: 'button', tabIndex: 0 });

  it.each([
    ['a link inside a link', node('p', [node('a', [node('a', [txt('x')], { href: '/y' })], { href: '/x' })])],
    ['a link inside formatting inside a link', node('a', [node('b', [node('a', [], { href: '/y' })])], { href: '/x' })],
    ['a heading inside a paragraph', node('p', [node('h3', [txt('x')])])],
    ['a paragraph inside a heading', node('h3', [node('p', [txt('x')])])],
    ['a heading inside a heading', node('h2', [node('h3', [txt('x')])])],
    ['a heading inside a link', node('a', [node('h3', [txt('x')])], { href: '/x' })],
    ['a list inside bold', node('b', [node('ul', [node('li')])])],
    ['a table inside a paragraph', node('p', [node('table', [node('tbody')])])],
    ['a list item directly inside a list item', node('ul', [node('li', [node('li')])])],
    ['a definition directly inside a term', node('dl', [node('dt', [node('dd')])])],
    ['a row directly inside a table', node('table', [node('tr', [node('td')])])],
    ['text directly inside a table', node('table', [txt('x'), node('tbody')])],
    ['a paragraph directly inside a row', node('table', [node('tbody', [node('tr', [node('p')])])])],
    ['a cell outside a table', node('td')],
    ['a spoiler button inside a summary', node('details', [node('summary', [spoiler()])])],
    ['a spoiler button inside a link', node('a', [spoiler()], { href: '/x' })],
    ['a link inside a spoiler button', node('p', [spoiler([node('a', [txt('x')], { href: '/x' })])])],
    [
      'a checkbox inside a summary',
      node('details', [node('summary', [node('input', [], { type: 'checkbox', disabled: true })])]),
    ],
  ])('rejects %s (the parser would restructure it, or nest interactive content)', (_name, bad) => {
    expect(() => verifyTree(tree(bad), 'legacyHtml')).toThrow(MarkdownSafetyError);
  });

  it('accepts valid nestings', () => {
    for (const good of [
      node('h3', [node('a', [txt('x')], { href: '/x' }), node('a', [txt('#')], { href: '#x' })], { id: 'md-x' }),
      node('details', [
        node('summary', [
          node('a', [txt('x')], { href: '/x' }),
          node('span', [txt('s')], { className: ['md-spoiler'] }),
        ]),
      ]),
      node('p', [node('span', [node('a', [txt('x')], { href: '/x' })], { className: ['md-spoiler'] })]),
      node('table', [txt('\n'), node('tbody', [node('tr', [node('td', [node('p', [txt('x')])])])])]),
      node('ul', [node('li', [node('p', [txt('x')]), node('ul', [node('li')])])]),
      node('blockquote', [node('h3', [txt('x')], { id: 'md-x' }), node('pre', [node('code', [txt('x')])])]),
    ]) {
      expect(() => verifyTree(tree(good), 'legacyHtml')).not.toThrow();
    }
  });

  it('rejects elements outside the profile', () => {
    expect(() => verifyTree(tree(el('img', { src: '/a.png' })), 'lite')).toThrow(MarkdownSafetyError);
    expect(() => verifyTree(tree(el('details')), 'full')).toThrow(MarkdownSafetyError);
    expect(() => verifyTree(tree(el('details')), 'legacyHtml')).not.toThrow();
  });
});

describe('enhance: heading anchors', () => {
  it('adds no hover anchor to a heading inside a link (a link inside a link is split by parsers)', () => {
    const heading = { type: 'element', tagName: 'h2', properties: {}, children: [{ type: 'text', value: 'T' }] };
    const root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'a', properties: { href: '/x' }, children: [heading] }],
    } as unknown as Root;
    const result = enhance(root, { profile: 'legacyHtml', idPrefix: 'md-', headingOffset: 1, internalHosts: [] });
    expect(heading).toEqual({
      type: 'element',
      tagName: 'h3',
      properties: { id: 'md-t' },
      children: [{ type: 'text', value: 'T' }],
    });
    expect(result.headings).toEqual([{ level: 3, id: 'md-t', text: 'T' }]);
  });
});

describe('defuse (nesting guard)', () => {
  it('leaves ordinary documents untouched', () => {
    const md =
      '# Title\n\n> quote\n> > nested\n\n- a\n  - b\n    1. c\n\n```\n> > > > > > > > > > > > > > code\n```\n[x]: https://x.com';
    expect(defuse(md)).toBe(md);
  });

  it('escapes the first marker of an over-nested line', () => {
    const line = `${'> '.repeat(MAX_LINE_CONTAINERS + 1)}deep`;
    expect(defuse(line)).toBe(`\\${line}`);
    expect(defuse(`${'- '.repeat(MAX_LINE_CONTAINERS + 1)}x`).startsWith('\\- ')).toBe(true);
    expect(defuse(`${'1. '.repeat(MAX_LINE_CONTAINERS + 1)}x`).startsWith('1\\. ')).toBe(true);
  });

  it('escapes over-indented markers', () => {
    const line = `${' '.repeat(MAX_INDENT + 2)}- x`;
    expect(defuse(line)).toBe(`${' '.repeat(MAX_INDENT + 2)}\\- x`);
  });

  it('escapes footnote definitions only', () => {
    expect(defuse('[^1]: note')).toBe('\\[^1]: note');
    expect(defuse('[^top](#top) and [^1] text')).toBe('[^top](#top) and [^1] text');
  });
});

describe('legacySource', () => {
  it('joins blank lines into breaks, outside fenced code', () => {
    expect(legacySource('a\n\n\nb\n```\nx\n\ny\n```\n\nc')).toBe('a<br><br>\nb\n```\nx\n\ny\n```<br>\nc');
  });

  it('repairs headings without a space and end tags with attributes', () => {
    expect(legacySource('###Title\n#hashtag\n</FONT COLOR>')).toBe('### Title\n# hashtag\n</FONT>');
  });
});
