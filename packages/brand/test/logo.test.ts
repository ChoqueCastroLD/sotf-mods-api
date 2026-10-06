import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { LOGO_FILES, LOGO_PATHS, lockupSvg, logoPicture } from '../src/logo.ts';

const publicFile = (path: string): boolean => existsSync(new URL(`../assets/public${path}`, import.meta.url));

describe('logo (the old red SOTF-MODS logo)', () => {
  it('renders a sized picture: WebP with a PNG fallback', () => {
    const html = lockupSvg({ height: 34 });
    expect(html).toContain('<picture><source type="image/webp"');
    expect(html).toContain('src="/brand/logo-sm.png"');
    expect(html).toContain('height="34"');
    // 419 x 110 at 34 px tall.
    expect(html).toContain('width="130"');
    expect(html).toContain('/brand/logo-sm-140.webp 140w, /brand/logo-sm-280.webp 280w, /brand/logo-sm.webp 419w');
    expect(logoPicture).toBe(lockupSvg);
  });

  it('uses the stacked logo for the stacked layout', () => {
    const html = lockupSvg({ layout: 'stacked', height: 90 });
    expect(html).toContain('src="/brand/logo.png"');
    expect(html).toContain('width="160"');
    expect(html).toContain('loading="lazy"');
  });

  it('serves the same logo for every layout name and theme', () => {
    expect(lockupSvg({ layout: 'horizontal', theme: 'night' })).toBe(lockupSvg({ layout: 'wordmark', theme: 'day' }));
  });

  it('is eager for the header wordmark and can be decorative', () => {
    expect(lockupSvg()).toContain('loading="eager"');
    expect(lockupSvg()).toContain('alt="SOTF Mods"');
    expect(lockupSvg({ title: '' })).toContain('alt=""');
  });

  it('escapes the name and the class', () => {
    const html = lockupSvg({ title: '"><script>', className: '"x' });
    expect(html).not.toContain('<script>');
    expect(html).toContain('class="&quot;x"');
  });

  it('points to files that exist in assets/public', () => {
    for (const file of Object.values(LOGO_FILES)) {
      for (const extension of ['png', 'webp']) {
        expect(publicFile(`${file.base}.${extension}`), `${file.base}.${extension}`).toBe(true);
        for (const width of file.widths) {
          expect(publicFile(`${file.base}-${width}.${extension}`), `${file.base}-${width}.${extension}`).toBe(true);
        }
      }
    }
    for (const path of Object.values(LOGO_PATHS)) {
      expect(publicFile(path), path).toBe(true);
    }
  });
});
