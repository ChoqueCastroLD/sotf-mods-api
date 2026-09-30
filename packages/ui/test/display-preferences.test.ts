/**
 * Account display preferences (WP-81): `<html data-motion="reduce">` forces the reduced-motion
 * rule and `<html data-density="compact">` shrinks `--spacing`. Verified in Chromium while
 * writing them (animation 1 ms under data-motion="reduce"; `p-4` = 14 px when compact).
 */
import { describe, expect, it } from 'vitest';
import { tokensCss } from './helpers/tokens.ts';

const sectionTwo = tokensCss.slice(
  tokensCss.indexOf('/* ===== Section 2'),
  tokensCss.indexOf('/* ===== End of section 2'),
);

describe('display preferences in tokens.css', () => {
  it('data-motion="reduce" repeats the reduced-motion rule for every element and pseudo-element', () => {
    expect(sectionTwo).toContain(
      ':root[data-motion="reduce"] *, :root[data-motion="reduce"] ::before, :root[data-motion="reduce"] ::after',
    );
    expect(sectionTwo).toMatch(/animation-duration: 1ms !important; animation-iteration-count: 1 !important;/);
    expect(sectionTwo).toMatch(/transition-duration: 1ms !important; scroll-behavior: auto !important;/);
  });

  it('data-density="compact" scales the Tailwind spacing unit by 7/8', () => {
    expect(sectionTwo).toContain(':root[data-density="compact"] { --spacing: 0.21875rem; }');
    expect(0.21875 / 0.25).toBe(0.875);
  });
});
