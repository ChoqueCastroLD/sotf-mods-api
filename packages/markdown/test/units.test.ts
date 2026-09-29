import type { Root } from 'hast';
import { describe, expect, it } from 'vitest';
import { findAutolinks } from '../src/autolink.ts';
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
    ['HTTPS://EXAMPLE.com', 'https://EXAMPLE.com'],
    ['mailto:a@b.co', 'mailto:a@b.co'],
    ['/install', '/install'],
    ['#section', '#section'],
    ['?q=1', '?q=1'],
    ['relative/path', 'relative/path'],
    ['//cdn.example/x', '//cdn.example/x'],
    ['\\\\evil.example', '//evil.example'],
    ['/\\evil.example', '//evil.example'],
    ['  https://x.com  ', 'https://x.com'],
    ['/a:b', '/a:b'],
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
  ])('rejects %j', (input) => {
    expect(safeUrl(input, links)).toBeNull();
  });

  it('rejects mailto for media and non-strings', () => {
    expect(safeUrl('mailto:a@b.co', ['http', 'https'])).toBeNull();
    expect(safeUrl(42, links)).toBeNull();
  });

  it('is idempotent', () => {
    for (const value of ['HTTPS://x.com', '\\\\evil', ' /a ', 'mailto:x@y.z']) {
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

  it('rejects elements outside the profile', () => {
    expect(() => verifyTree(tree(el('img', { src: '/a.png' })), 'lite')).toThrow(MarkdownSafetyError);
    expect(() => verifyTree(tree(el('details')), 'full')).toThrow(MarkdownSafetyError);
    expect(() => verifyTree(tree(el('details')), 'legacyHtml')).not.toThrow();
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
