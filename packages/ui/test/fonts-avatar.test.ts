import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { avatarColor } from '@sotf/brand/avatar';
import { describe, expect, it } from 'vitest';
import { renderFallbacks } from '../scripts/gen-font-fallbacks.ts';
import { avatarSlot } from '../src/avatar.tsx';
import { colorTokens } from './helpers/tokens.ts';

describe('font fallbacks', () => {
  it('src/font-fallbacks.gen.css is fresh (run `pnpm --filter @sotf/ui gen`)', async () => {
    const committed = readFileSync(
      fileURLToPath(new URL('../src/font-fallbacks.gen.css', import.meta.url).href),
      'utf8',
    );
    expect(committed).toBe(await renderFallbacks());
  });

  it('defines the fallback families referenced by the font stacks', async () => {
    const css = await renderFallbacks();
    const tokens = readFileSync(fileURLToPath(new URL('../src/tokens.css', import.meta.url).href), 'utf8');
    for (const family of ['Onest Fallback', 'Big Shoulders Fallback']) {
      expect(css).toContain(`font-family: "${family}"`);
      expect(tokens).toContain(`"${family}"`);
    }
    expect(css).toMatch(/size-adjust: \d+(\.\d+)?%/);
  });
});

describe('avatar', () => {
  it('picks the same chart slot as avatarSvg() of @sotf/brand', () => {
    const tokens = colorTokens();
    for (const id of [1, 42, 3900, 'user-7', 'ñandú']) {
      const slot = tokens.get(`chart-${avatarSlot(id)}`);
      expect(slot?.night).toBe(avatarColor(id, 'night').toUpperCase());
      expect(slot?.day).toBe(avatarColor(id, 'day').toUpperCase());
    }
  });
});
