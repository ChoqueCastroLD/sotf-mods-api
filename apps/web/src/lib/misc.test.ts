import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BANNER_INIT_SCRIPT } from '@sotf/ui/dismissals';
import { THEME_INIT_SCRIPT } from '@sotf/ui/theme';
import { describe, expect, it } from 'vitest';
import { LEGACY_CLEANUP_SCRIPT } from '../scripts/legacy-cleanup.ts';
import { pictureSources, safeHexColor, thumbhashDataUrl } from './images.ts';
import { cspConfig, INLINE_SCRIPTS, sha256Source } from './security/csp.ts';
import { ADS_TXT } from './site.ts';
import { SPECULATION_RULES, SPECULATION_RULES_JSON } from './speculation.ts';
import { webManifest } from './tooling/gen.ts';

describe('/ads.txt', () => {
  it('is byte-for-byte the legacy file (58 bytes, no trailing newline)', () => {
    expect(ADS_TXT).toBe('google.com, pub-2799839819522052, DIRECT, f08c47fec0942fa0');
    expect(Buffer.byteLength(ADS_TXT)).toBe(58);
  });
});

describe('CSP placeholder', () => {
  it('hashes every inline script the layouts render', () => {
    const config = cspConfig();
    expect(INLINE_SCRIPTS).toEqual([
      THEME_INIT_SCRIPT,
      BANNER_INIT_SCRIPT,
      LEGACY_CLEANUP_SCRIPT,
      SPECULATION_RULES_JSON,
    ]);
    for (const script of INLINE_SCRIPTS) {
      const expected = `sha256-${createHash('sha256').update(script).digest('base64')}`;
      expect(config.scriptDirective.hashes).toContain(expected);
      expect(sha256Source(script)).toBe(expected);
    }
    expect(config.directives).toContain("object-src 'none'");
    expect(config.directives.some((directive) => directive.startsWith('frame-ancestors'))).toBe(false);
  });

  it('keeps the inline scripts in sync with the layouts', () => {
    const layouts = join(import.meta.dirname, '../layouts');
    for (const file of readdirSync(layouts).filter((name) => name.endsWith('.astro'))) {
      const source = readFileSync(join(layouts, file), 'utf8');
      const inline = [...source.matchAll(/<script is:inline[^>]*set:html=\{(\w+)\}/g)].map((match) => match[1]);
      for (const name of inline) {
        expect(
          ['THEME_INIT_SCRIPT', 'BANNER_INIT_SCRIPT', 'LEGACY_CLEANUP_SCRIPT', 'SPECULATION_RULES_JSON'],
          `${file}: ${name}`,
        ).toContain(name);
      }
    }
  });
});

describe('legacy token cleanup (PLAN §6.10)', () => {
  it('stays tiny and removes both the localStorage token and the cookie', () => {
    expect(Buffer.byteLength(LEGACY_CLEANUP_SCRIPT)).toBeLessThanOrEqual(170);
    expect(LEGACY_CLEANUP_SCRIPT).toContain('delete l.token');
    expect(LEGACY_CLEANUP_SCRIPT).toContain('token=;Max-Age=0;Path=/');
    expect(LEGACY_CLEANUP_SCRIPT).toContain('dataset.relogin');
  });
});

describe('speculation rules (PLAN §8.8)', () => {
  it('prerenders detail pages in every locale and never downloads, console or API', () => {
    const rule = SPECULATION_RULES.prerender[0];
    expect(rule.eagerness).toBe('moderate');
    const json = SPECULATION_RULES_JSON;
    expect(json).toContain('"/mods/*"');
    expect(json).toContain('"/es/mods/*"');
    expect(json).toContain('"/ja/profile/*"');
    expect(json).toContain('download');
    expect(json).toContain('/dashboard/*');
    expect(json).toContain('/api/*');
  });
});

describe('responsive images (PLAN §8.3)', () => {
  it('splits AVIF and derives WebP twins', () => {
    const sources = pictureSources('https://r2/x/640.avif 640w, https://r2/x/1280.avif 1280w');
    expect(sources.avif).toBe('https://r2/x/640.avif 640w, https://r2/x/1280.avif 1280w');
    expect(sources.webp).toBe('https://r2/x/640.webp 640w, https://r2/x/1280.webp 1280w');
    expect(pictureSources(null)).toEqual({ avif: null, webp: null });
    expect(pictureSources('https://r2/a.webp 320w').webp).toBe('https://r2/a.webp 320w');
  });

  it('only lets safe colours into inline styles and decodes thumbhashes', () => {
    expect(safeHexColor('#2F3B2A')).toBe('#2F3B2A');
    expect(safeHexColor('red;background:url(x)')).toBeNull();
    expect(thumbhashDataUrl('1QcSHQRnh493V4dIh4eXh1h4kJUI')).toMatch(/^data:image\/png;base64,/);
    expect(thumbhashDataUrl('!!')).toBeNull();
    expect(thumbhashDataUrl(null)).toBeNull();
  });
});

describe('web app manifest', () => {
  it('is generated from the brand icons and theme colour', () => {
    const manifest = JSON.parse(webManifest());
    expect(manifest).toMatchObject({
      name: 'SOTF Mods',
      start_url: '/',
      display: 'standalone',
      theme_color: '#15191E',
    });
    expect(manifest.icons.map((icon: { purpose: string }) => icon.purpose)).toEqual([
      'any',
      'any',
      'maskable',
      'maskable',
    ]);
    const committed = readFileSync(join(import.meta.dirname, '../../public/manifest.webmanifest'), 'utf8');
    expect(committed).toBe(webManifest());
  });
});
