/**
 * tokens.css: the pieces every page relies on exist, the decoration utilities are harmless and the
 * fonts are Onest only.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { tokensCss } from './helpers/tokens.ts';

const read = (path: string): string => readFileSync(fileURLToPath(new URL(path, import.meta.url).href), 'utf8');

/** The body of `@utility <name> { ... }` (utilities here have no nested braces unless noted). */
function utilityBody(name: string): string {
  const start = tokensCss.indexOf(`@utility ${name} `);
  expect(start, `@utility ${name}`).toBeGreaterThan(-1);
  const open = tokensCss.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < tokensCss.length; i++) {
    if (tokensCss[i] === '{') depth++;
    if (tokensCss[i] === '}' && --depth === 0) return tokensCss.slice(open + 1, i);
  }
  throw new Error(`unterminated @utility ${name}`);
}

describe('tokens.css', () => {
  it('imports Tailwind, the typography plugin and fonts.css', () => {
    expect(tokensCss).toContain('@import "tailwindcss";');
    expect(tokensCss).toContain('@plugin "@tailwindcss/typography";');
    expect(tokensCss).toContain('@import "./fonts.css";');
  });

  it('loads one web font family (Onest) and no condensed or mono web font', () => {
    const fonts = read('../src/fonts.css');
    expect(fonts.match(/@import "@fontsource-variable\/[a-z-]+"/g)).toEqual(['@import "@fontsource-variable/onest"']);
    expect(fonts).toContain('@import "./font-fallbacks.gen.css"');
    expect(tokensCss).toContain('--font-display: var(--font-sans);');
    expect(tokensCss).not.toMatch(/Big Shoulders|Martian Mono|Sofia Sans/);
    const preloads = read('../src/font-preloads.ts');
    expect(preloads).toContain('onest-latin-wght-normal.woff2');
    expect(preloads).not.toMatch(/big-shoulders|martian/);
  });

  it('keeps the brand utilities as harmless, sentence-case sans decoration', () => {
    for (const utility of ['font-display-caps', 'readout', 'skeleton', 'prose-locator']) {
      expect(tokensCss).toContain(`@utility ${utility} `);
    }
    expect(utilityBody('font-display-caps')).toContain('text-transform: none');
    expect(utilityBody('font-display-caps')).toContain('var(--font-sans)');
    const readout = utilityBody('readout');
    expect(readout).toContain('var(--font-sans)');
    expect(readout).toContain('text-transform: none');
    expect(readout).not.toMatch(/mono|uppercase/);
    expect(tokensCss).not.toMatch(/@utility (texture-|tag-notch)/);
  });

  it('has no glow, no ping animation and no textures', () => {
    expect(tokensCss).toContain('--shadow-glow: none;');
    expect(tokensCss).toContain('--animate-ping-locator: none;');
    expect(tokensCss).not.toContain('/brand/topo.svg');
  });

  it('never defines bg-* utilities that shadow colours', () => {
    expect(tokensCss).not.toMatch(/@utility bg-/);
  });
});
