import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const TOKENS_PATH = fileURLToPath(new URL('../../src/tokens.css', import.meta.url).href);
export const RESEARCH_PATH = fileURLToPath(
  new URL('../../../../docs/plan/research/03-brand-design.md', import.meta.url).href,
);

export const tokensCss = readFileSync(TOKENS_PATH, 'utf8');
export const research = readFileSync(RESEARCH_PATH, 'utf8');

export interface ThemedColor {
  day: string;
  night: string;
}

/** `--color-<name>` values of tokens.css, resolved per theme (`light-dark(DAY, NIGHT)`). */
export function colorTokens(css: string = tokensCss): Map<string, ThemedColor> {
  const tokens = new Map<string, ThemedColor>();
  for (const [, name, raw] of css.matchAll(/--color-([a-z0-9-]+):\s*([^;]+);/g)) {
    if (!name || !raw || raw.trim() === 'initial') continue;
    const value = raw.trim();
    const themed = /^light-dark\(\s*(#[0-9A-Fa-f]{6})\s*,\s*(#[0-9A-Fa-f]{6})\s*\)$/.exec(value);
    if (themed?.[1] && themed[2]) tokens.set(name, { day: themed[1].toUpperCase(), night: themed[2].toUpperCase() });
    else if (/^#[0-9A-Fa-f]{6}$/.test(value))
      tokens.set(name, { day: value.toUpperCase(), night: value.toUpperCase() });
  }
  return tokens;
}

/** The fenced ```css block of research/03 §4.4. */
export function researchTokenBlock(): string {
  const section = research.slice(research.indexOf('### 4.4 Tokens'));
  const start = section.indexOf('```css\n') + '```css\n'.length;
  return section.slice(start, section.indexOf('```', start));
}
