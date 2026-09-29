/**
 * PLAN §12.3 WP-12: importing only `Button` from the barrel weighs ≤ 3 KB brotli. The package is
 * `sideEffects`-free, so Base UI, sonner, the icon set and the other primitives must be dropped.
 */
import { describe, expect, it } from 'vitest';
import { bundle, SRC_INDEX } from './helpers/bundle.ts';

const BUTTON_BUDGET_BR = 3 * 1024;

describe('tree-shaking', () => {
  it('a bundle that imports only Button from the barrel is ≤ 3 KB br', async () => {
    const result = await bundle(`export { Button } from ${JSON.stringify(SRC_INDEX)};`);
    expect(result.brotli).toBeLessThanOrEqual(BUTTON_BUDGET_BR);
    // Nothing else leaked in.
    expect(result.code).not.toMatch(/sonner|base-ui|data-sonner|lucide-/);
    expect(result.code).not.toContain('light-dark(var(--color-');
  });

  it('the vanilla theme module stays tiny (public pages)', async () => {
    const theme = SRC_INDEX.replace('index.ts', 'theme.ts');
    const result = await bundle(`export { setTheme, bindThemeToggles } from ${JSON.stringify(theme)};`);
    expect(result.brotli).toBeLessThanOrEqual(1024);
    expect(result.code).not.toContain('react');
  });
});
