/**
 * Seeded tag-soup fuzzing of the content model: random, badly nested legacy HTML mixed with
 * Markdown and enhancer triggers (spoilers, mentions, autolinks, headings). For every input, the
 * browser (jsdom/parse5) must build exactly the tree the pipeline verified, with no unsafe or
 * nested interactive content (helpers/safety.ts). Deterministic: a failure reproduces with the
 * printed input.
 */
import { describe, expect, it } from 'vitest';
import { renderMarkdownTree } from '../src/render.ts';
import { toSafeHtml } from '../src/serialize.ts';
import type { MarkdownProfile } from '../src/types.ts';
import { findViolations } from './helpers/safety.ts';

const TAGS = [
  'a href="/x"',
  'a href="https://e.example"',
  'b',
  'i',
  'strong',
  'em',
  'sub',
  'code',
  'font color=red',
  'span',
  'u',
  'big',
  'center',
  'div',
  'section',
  'p',
  'h2',
  'h3',
  'ul',
  'ol',
  'li',
  'dl',
  'dt',
  'dd',
  'details',
  'summary',
  'blockquote',
  'pre',
  'table',
  'caption',
  'thead',
  'tbody',
  'tr',
  'td',
  'th',
  'hr',
  'br',
  'img src="https://e.example/a.png"',
  'input type=checkbox disabled',
];
const TEXTS = ['x', ' ', '||s||', '@bob', 'www.e.example', '\n', '\n\n', '## H\n', '- item\n', '> q\n', 'text '];

/** Small deterministic PRNG (LCG), so every run checks the same inputs. */
function generator(seed: number): (n: number) => number {
  let state = seed;
  return (n) => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state % n;
  };
}

function tagSoup(random: (n: number) => number): string {
  let out = '';
  const open: string[] = [];
  const length = 3 + random(14);
  for (let i = 0; i < length; i++) {
    const roll = random(10);
    if (roll < 4) {
      const tag = TAGS[random(TAGS.length)] as string;
      out += `<${tag}>`;
      open.push(tag.split(' ')[0] as string);
    } else if (roll < 6 && open.length > 0) {
      out += `</${open.pop()}>`;
    } else if (roll < 7) {
      out += `</${(TAGS[random(TAGS.length)] as string).split(' ')[0]}>`;
    } else {
      out += TEXTS[random(TEXTS.length)];
    }
  }
  return out;
}

const CASES: ReadonlyArray<[MarkdownProfile, number]> = [
  ['legacyHtml', 2000],
  ['full', 300],
  ['lite', 300],
];

describe('content-model fuzzing (browser tree = verified tree)', () => {
  it.each(CASES)(
    '%s: %i random tag soups',
    (profile, count) => {
      const random = generator(20260929);
      const failures: string[] = [];
      for (let i = 0; i < count; i++) {
        const input = tagSoup(random);
        const { tree } = renderMarkdownTree(input, { profile, resolveMention: (handle) => ({ href: `/u/${handle}` }) });
        const problems = findViolations(toSafeHtml(tree), tree);
        if (problems.length > 0) failures.push(`${JSON.stringify(input)}: ${problems.join(' | ')}`);
      }
      expect(failures).toEqual([]);
      // A correctness fuzz (jsdom parses every output), not a performance budget: ~5 s on a busy
      // shared host would trip the default 5 s timeout. bench.test.ts owns the time budgets.
    },
    60_000,
  );
});
