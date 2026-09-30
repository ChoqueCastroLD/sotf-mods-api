/**
 * `@sotf/markdown/lite` (WP-74 backlog: the editor chunk carried parse5 through rehype-raw):
 * same output as the full entry for `full`/`lite`, `legacyHtml` refused, and its module graph never
 * reaches rehype-raw or the legacy repairs.
 */
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import * as full from '../src/index.ts';
import * as lite from '../src/lite.ts';

const SRC = fileURLToPath(new URL('../src/', import.meta.url));

/** Every import specifier reachable from a source file (relative imports followed, type-only skipped). */
function moduleGraph(entry: string): { files: Set<string>; packages: Set<string> } {
  const files = new Set<string>();
  const packages = new Set<string>();
  const visit = (file: string) => {
    if (files.has(file)) return;
    files.add(file);
    const source = readFileSync(file, 'utf8');
    for (const match of source.matchAll(/^(?:import|export)\s+(?!type\b)[^'";]*?from\s+'([^']+)'/gm)) {
      const specifier = match[1] as string;
      if (specifier.startsWith('.')) visit(resolve(dirname(file), specifier));
      else packages.add(specifier);
    }
  };
  visit(entry);
  return { files, packages };
}

const SAMPLES = [
  '# Title\n\nSome **bold** text with a [link](https://example.com) and `code`.',
  '> [!WARNING]\n> Back up your saves.\n\n||spoiler|| and @imaxel',
  '- [x] done\n- [ ] todo\n\n| a | b |\n|---|---|\n| 1 | 2 |',
  '<div align="center"><b>raw html</b></div>\n\nhttps://www.youtube.com/watch?v=dQw4w9WgXcQ',
  '![img](https://r2.sotf-mods.com/a.png "t")\n\n```js\nalert(1)\n```',
];

describe('@sotf/markdown/lite', () => {
  it.each(['full', 'lite'] as const)('renders the %s profile exactly like the full entry', (profile) => {
    for (const md of SAMPLES) {
      expect(lite.renderMarkdown(md, { profile })).toEqual(full.renderMarkdown(md, { profile }));
    }
    expect(lite.extractMentions(SAMPLES[1] as string)).toEqual(full.extractMentions(SAMPLES[1] as string));
  });

  it('refuses the legacyHtml profile with a clear error', () => {
    expect(() => lite.renderMarkdown('<b>x</b>', { profile: 'legacyHtml' })).toThrow(lite.MarkdownInputError);
    expect(() => lite.renderMarkdown('x', { profile: 'legacyHtml' })).toThrow(/import "@sotf\/markdown"/);
    expect(full.renderMarkdown('<b>x</b>', { profile: 'legacyHtml' }).html).toContain('<b>x</b>');
  });

  it('never imports rehype-raw (parse5) nor the legacy repairs', () => {
    const graph = moduleGraph(join(SRC, 'lite.ts'));
    expect([...graph.packages].sort()).not.toContain('rehype-raw');
    expect([...graph.files].map((f) => f.slice(SRC.length))).not.toContain('legacy.ts');
    expect(graph.packages.has('markdown-it')).toBe(true);

    const fullGraph = moduleGraph(join(SRC, 'index.ts'));
    expect(fullGraph.packages.has('rehype-raw')).toBe(true);
  });

  it('exports what the full entry exports except the legacy-only API', () => {
    const missing = Object.keys(full).filter((name) => !(name in lite));
    expect(missing.sort()).toEqual(['PROFILES']);
    expect(lite.LITE_PROFILES).toEqual(['full', 'lite']);
  });
});
