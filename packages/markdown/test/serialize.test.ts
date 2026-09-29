/**
 * The closed-set serialiser (src/serialize.ts) against the reference serialiser of the unified
 * ecosystem (rehype-stringify / hast-util-to-html): for every tree the tests produce, a browser
 * must parse both outputs into the same DOM.
 */
import type { Root } from 'hast';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
import { describe, expect, it } from 'vitest';
import { PROFILES } from '../src/index.ts';
import { renderMarkdownTree } from '../src/render.ts';
import { toSafeHtml } from '../src/serialize.ts';
import { MarkdownSafetyError } from '../src/verify.ts';
import { BENCH_DOCUMENT } from './fixtures/bench-document.ts';
import rows from './fixtures/legacy-html-descriptions.json' with { type: 'json' };
import { XSS_VECTORS } from './fixtures/xss-vectors.ts';
import { canonicalHtml, parseHtml } from './helpers/safety.ts';

const reference = unified().use(rehypeStringify);

const inputs = [
  BENCH_DOCUMENT,
  ...(rows as Array<{ description: string }>).map((row) => row.description),
  ...XSS_VECTORS.map((vector) => vector.input),
  'Quotes " and \' and <tags> & ampersands &amp; in text\n\n[a](https://x.com/?a=1&b="2" "t\\"itle")',
  '<pre>\n\nleading newlines</pre>',
];

describe('toSafeHtml', () => {
  it('builds the same DOM as rehype-stringify for every fixture and vector', { timeout: 120_000 }, () => {
    let compared = 0;
    for (const profile of PROFILES) {
      for (const input of inputs) {
        const { tree } = renderMarkdownTree(input, { profile });
        const ours = canonicalHtml(toSafeHtml(tree));
        const theirs = canonicalHtml(reference.stringify(tree));
        expect(ours, input.slice(0, 80)).toBe(theirs);
        compared += 1;
      }
    }
    expect(compared).toBeGreaterThan(800);
  });

  it('escapes text and attribute values', () => {
    const tree: Root = {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'a',
          properties: { href: '/a?b=1&c="2"<>', title: 'x' },
          children: [{ type: 'text', value: '<script>&"\'' }],
        },
      ],
    };
    expect(toSafeHtml(tree)).toBe('<a href="/a?b=1&amp;c=&quot;2&quot;&lt;&gt;" title="x">&lt;script&gt;&amp;"\'</a>');
  });

  it('keeps a leading newline of <pre> content', () => {
    const tree: Root = {
      type: 'root',
      children: [{ type: 'element', tagName: 'pre', properties: {}, children: [{ type: 'text', value: '\nx' }] }],
    };
    expect(parseHtml(toSafeHtml(tree)).querySelector('pre')?.textContent).toBe('\nx');
  });

  it('refuses nodes and properties outside the verified set', () => {
    const bad = (node: unknown): Root => ({ type: 'root', children: [node as Root['children'][number]] });
    expect(() => toSafeHtml(bad({ type: 'raw', value: '<script>' }))).toThrow(MarkdownSafetyError);
    expect(() => toSafeHtml(bad({ type: 'comment', value: 'x' }))).toThrow(MarkdownSafetyError);
    expect(() =>
      toSafeHtml(bad({ type: 'element', tagName: 'p', properties: { onClick: 'x' }, children: [] })),
    ).toThrow(MarkdownSafetyError);
  });
});
