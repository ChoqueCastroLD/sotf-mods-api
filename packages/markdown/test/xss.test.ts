import { describe, expect, it } from 'vitest';
import { PROFILES, renderMarkdown } from '../src/index.ts';
import { renderMarkdownTree } from '../src/render.ts';
import { toSafeHtml } from '../src/serialize.ts';
import { XSS_VECTORS } from './fixtures/xss-vectors.ts';
import { findViolations } from './helpers/safety.ts';

const hostileResolvers = {
  resolveMention: (handle: string) => ({
    href: `javascript:alert('${handle}')`,
    label: '<img src=x onerror=alert(1)>',
  }),
  resolveImage: () => ({ src: 'javascript:alert(1)', width: 10, height: 10 }),
};

describe('safety checker (self-test)', () => {
  it.each([
    ['<img src=x onerror=alert(1)>', 'event handler'],
    ['<a href="javascript:alert(1)">x</a>', 'javascript:'],
    ['<a href="jav&#x09;ascript:alert(1)">x</a>', 'javascript:'],
    ['<p style="color:red">x</p>', 'attribute style'],
    ['<svg><circle></circle></svg>', 'element <svg>'],
    ['<math></math>', 'element <math>'],
    ['<!-- x -->', 'comment node'],
    ['<script>alert(1)</script>', 'element <script>'],
    ['<img src="data:image/png;base64,AAAA">', 'data:'],
    ['<input type="text">', 'interactive input'],
    ['<p id="x">x</p>', 'unprefixed id'],
  ])('flags %s', (html, problem) => {
    expect(findViolations(html).join('\n')).toContain(problem);
  });

  it('flags a tree that the browser would mutate', () => {
    const { tree } = renderMarkdownTree('[a](https://a.example)');
    const link = tree.children.find((node) => node.type === 'element');
    if (link?.type !== 'element') throw new Error('expected a paragraph');
    // Nest a second anchor inside the first one: parsers split nested anchors.
    const anchor = link.children.find((node) => node.type === 'element');
    if (anchor?.type !== 'element') throw new Error('expected an anchor');
    anchor.children.push({ type: 'element', tagName: 'a', properties: { href: 'https://b.example' }, children: [] });
    expect(findViolations(toSafeHtml(tree), tree).join('\n')).toContain('browser tree differs');
  });
});

describe('XSS and mXSS corpus', () => {
  it('has at least 150 distinct vectors', () => {
    expect(XSS_VECTORS.length).toBeGreaterThanOrEqual(150);
    expect(new Set(XSS_VECTORS.map((vector) => vector.name)).size).toBe(XSS_VECTORS.length);
  });

  for (const profile of PROFILES) {
    describe(`profile ${profile}`, () => {
      it.each(XSS_VECTORS.map((vector) => [vector.name, vector.input] as const))('%s', (_name, input) => {
        const { tree } = renderMarkdownTree(input, { profile });
        const html = toSafeHtml(tree);
        expect(findViolations(html, tree)).toEqual([]);
        // The plain-text projection never carries markup that could be injected elsewhere unescaped
        // by mistake: it is text, so only its escaping by the caller matters; check it is a string.
        expect(typeof renderMarkdown(input, { profile }).text).toBe('string');
      });
    });
  }

  it('ignores hostile resolver output', () => {
    for (const profile of PROFILES) {
      const { html } = renderMarkdown('@admin ![x](https://example.com/a.png)', { profile, ...hostileResolvers });
      expect(findViolations(html)).toEqual([]);
      expect(html).not.toContain('javascript');
      expect(html).not.toContain('onerror');
    }
  });

  it('keeps an escaped copy of the payload visible instead of dropping it (full and lite)', () => {
    for (const profile of ['full', 'lite'] as const) {
      const { html, text } = renderMarkdown('before <img src=x onerror=alert(1)> after', { profile });
      expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;');
      expect(text).toBe('before <img src=x onerror=alert(1)> after');
    }
  });
});
