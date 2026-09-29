/**
 * PLAN §3.3: tokens.css is a literal copy of research/03 §4.4. Section 1 of the file must match
 * the research block byte for byte, except for the documented move of the Fontsource imports
 * to fonts.css.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { researchTokenBlock, tokensCss } from './helpers/tokens.ts';

const FONT_IMPORTS = /\/\* Fontsource variable fonts[^\n]*\n(?:@import "@fontsource-variable\/[^\n]+\n){4}/;

function sectionOne(css: string): string {
  const start = css.indexOf('/* ===== Section 1');
  const end = css.indexOf('/* ===== End of section 1 ===== */');
  return css.slice(css.indexOf('\n', start) + 1, end);
}

describe('tokens.css', () => {
  it('section 1 is the research/03 §4.4 block (fonts moved to fonts.css)', () => {
    const expected = researchTokenBlock().replace(
      FONT_IMPORTS,
      '/* Fontsource variable fonts (OFL-1.1) + fontaine metric fallbacks: see ./fonts.css (WP-12) */\n@import "./fonts.css";\n',
    );
    expect(expected).not.toBe(researchTokenBlock());
    expect(sectionOne(tokensCss)).toBe(expected);
  });

  it('fonts.css carries the four Fontsource imports of the research block and the fallbacks', () => {
    const fonts = readFileSync(fileURLToPath(new URL('../src/fonts.css', import.meta.url)), 'utf8');
    const imports = researchTokenBlock().match(/@import "@fontsource-variable\/[a-z-]+"/g) ?? [];
    expect(imports).toHaveLength(4);
    for (const line of imports) expect(fonts).toContain(line);
    expect(fonts).toContain('@import "./font-fallbacks.gen.css"');
  });

  it('keeps the brand utilities and never defines bg-* utilities that shadow colours', () => {
    for (const utility of [
      'font-display-caps',
      'readout',
      'tag-notch',
      'texture-topo',
      'texture-blueprint',
      'skeleton',
      'prose-locator',
    ]) {
      expect(tokensCss).toContain(`@utility ${utility} `);
    }
    expect(tokensCss).not.toMatch(/@utility bg-/);
  });
});
