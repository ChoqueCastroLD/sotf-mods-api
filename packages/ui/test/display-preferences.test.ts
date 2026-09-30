/**
 * Account display preferences (WP-81, `console/features/settings/display.ts`): `<html
 * data-motion="reduce|full">` and `<html data-density="compact">` must be honoured by the tokens.
 */
import { describe, expect, it } from 'vitest';
import { tokensCss } from './helpers/tokens.ts';

function sectionTwo(css: string): string {
  return css.slice(css.indexOf('/* ===== Section 2'), css.indexOf('/* ===== End of section 2 ===== */'));
}

/** Declarations of the first rule whose selector list contains `selector`. */
function ruleFor(css: string, selector: string): string {
  const at = css.indexOf(selector);
  expect(at, `no rule for ${selector}`).toBeGreaterThan(-1);
  const open = css.indexOf('{', at);
  return css.slice(open + 1, css.indexOf('}', open));
}

describe('display preferences in tokens.css', () => {
  const css = sectionTwo(tokensCss);

  it('data-motion="reduce" reduces motion without the OS asking for it', () => {
    const rule = ruleFor(css, ':root[data-motion="reduce"] *::after');
    expect(css.indexOf(':root[data-motion="reduce"]')).toBeLessThan(css.indexOf('@media (prefers-reduced-motion'));
    for (const decl of [
      'animation-duration: 1ms !important',
      'animation-iteration-count: 1 !important',
      'transition-duration: 1ms !important',
      'scroll-behavior: auto !important',
    ])
      expect(rule).toContain(decl);
  });

  it('data-motion="full" undoes the OS reduction of section 1 only under that media query', () => {
    const media = css.slice(css.indexOf('@media (prefers-reduced-motion: reduce)'));
    const rule = ruleFor(media, ':root[data-motion="full"] *::before');
    for (const prop of ['animation-duration', 'animation-iteration-count', 'transition-duration', 'scroll-behavior'])
      expect(rule).toContain(`${prop}: revert-layer !important`);
    // The section 1 rule it reverts lives in the same layer (`@layer base`).
    expect(tokensCss.slice(0, tokensCss.indexOf('/* ===== End of section 1'))).toMatch(
      /@media \(prefers-reduced-motion: reduce\) \{\s*\*, ::before, ::after \{ animation-duration: 1ms !important;/,
    );
  });

  it('data-density="compact" tightens the spacing scale', () => {
    const match = /:root\[data-density="compact"\] \{ --spacing: ([\d.]+)rem; \}/.exec(css);
    expect(match).not.toBeNull();
    const base = Number(match?.[1]);
    expect(base).toBeLessThan(0.25);
    expect(base).toBeGreaterThanOrEqual(0.2);
  });

  it('the overrides are inside @layer base like the rule they adjust', () => {
    const layer = css.lastIndexOf('@layer base', css.indexOf(':root[data-motion="reduce"]'));
    expect(layer).toBeGreaterThan(-1);
    expect(css.slice(layer, css.indexOf(':root[data-motion="reduce"]'))).not.toMatch(/^\}/m);
  });
});
