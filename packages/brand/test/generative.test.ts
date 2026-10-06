import { describe, expect, it } from 'vitest';
import { avatarColor, avatarSvg } from '../src/avatar.ts';
import { bannerSeed, bannerSvg } from '../src/banner.ts';
import { chartSlots } from '../src/colors.ts';
import { coverSvg, DEFAULT_COVER_COLOR } from '../src/cover.ts';
import { gzipSize, rasterise, sha256 } from './helpers.ts';

describe('coverSvg', () => {
  it('is deterministic (snapshot)', () => {
    expect(coverSvg('auto-pickup', '#5EBB64', 'AP')).toMatchSnapshot();
    expect(sha256(coverSvg('stack-mod', '#498BEB', 'SM', { theme: 'day' }))).toMatchSnapshot();
  });

  it('is 16:9, valid and light (under 2.5 KB gzip)', async () => {
    const svg = coverSvg('auto-pickup', '#5EBB64', 'AP');
    expect(svg).toContain('viewBox="0 0 640 360"');
    expect(gzipSize(svg)).toBeLessThan(2.5 * 1024);
    expect(await rasterise(svg, 320)).toEqual({ width: 320, height: 180 });
  });

  it('changes with the category colour and the initials, and has no artwork', () => {
    expect(coverSvg('a', '#5EBB64', 'A')).not.toBe(coverSvg('a', '#498BEB', 'A'));
    expect(coverSvg('a', '#5EBB64', 'A')).not.toBe(coverSvg('a', '#5EBB64', 'B'));
    expect(coverSvg('a', '#5EBB64', 'A')).not.toMatch(/stroke|<circle/);
  });

  it('never injects untrusted input', () => {
    const svg = coverSvg('x', '"/><script>alert(1)</script>', '<b>');
    expect(svg).not.toContain('<script');
    expect(svg).not.toContain('<b>');
    expect(svg).toBe(coverSvg('x', DEFAULT_COVER_COLOR, '<b>'));
  });

  it('uses outlines for Latin initials and a font fallback otherwise', () => {
    expect(coverSvg('x', '#5EBB64', 'AP')).not.toContain('<text');
    expect(coverSvg('x', '#5EBB64', 'Кот')).toContain('<text');
    expect(coverSvg('x', '#5EBB64', 'ABCDE')).toBe(coverSvg('x', '#5EBB64', 'ABC'));
    expect(coverSvg('x', '#5EBB64', '')).not.toMatch(/<text|<g /);
  });

  it('normalises initials to NFC and counts user-perceived characters', () => {
    const decomposed = 'E\u0301XYZ';
    expect(coverSvg('x', '#5EBB64', decomposed)).toBe(coverSvg('x', '#5EBB64', '\u00C9XY'));
    expect(coverSvg('x', '#5EBB64', decomposed)).toContain('\u00C9XY</text>');
    expect(coverSvg('x', '#5EBB64', 'ae\u0301cd')).toContain('A\u00C9C</text>');
    expect(coverSvg('x', '#5EBB64', 'ab\u0301cd')).toContain('AB\u0301C</text>');
    // An upper case that expands («ß» → «SS») keeps the original character and one slot.
    expect(coverSvg('x', '#5EBB64', 'ßab')).toContain('ßAB</text>');
  });
});

describe('bannerSvg', () => {
  it('is deterministic per user and changes on reroll (snapshot)', () => {
    expect(sha256(bannerSvg(42))).toMatchSnapshot();
    expect(bannerSvg(42)).toBe(bannerSvg('42'));
    expect(bannerSvg(42, 'reroll-1')).not.toBe(bannerSvg(42));
    expect(bannerSeed(42, null)).toBe('banner:42');
    expect(bannerSeed(42, '')).toBe('banner:42');
    expect(bannerSeed(42, 7)).toBe('banner:42:7');
  });

  it('is valid, wide and around 2–3 KB gzip', async () => {
    const svg = bannerSvg(42);
    expect(svg).toContain('viewBox="0 0 1600 400"');
    expect(svg).toContain('preserveAspectRatio="xMidYMid slice"');
    expect(gzipSize(svg)).toBeLessThan(4 * 1024);
    expect(await rasterise(svg, 400)).toEqual({ width: 400, height: 100 });
    expect(await rasterise(bannerSvg(42, null, { theme: 'day' }), 400)).toEqual({ width: 400, height: 100 });
  });
});

describe('avatarSvg', () => {
  it('is deterministic (snapshot) and tiny', () => {
    const svg = avatarSvg('Toni M.', 1);
    expect(svg).toMatchSnapshot();
    expect(svg.length).toBeLessThan(1024);
  });

  it('derives the ring colour from the id, within the chart palette', () => {
    for (let id = 0; id < 50; id += 1) {
      expect(chartSlots.night).toContain(avatarColor(id));
      expect(chartSlots.day).toContain(avatarColor(id, 'day'));
    }
    const colours = new Set(Array.from({ length: 50 }, (_, id) => avatarColor(id)));
    expect(colours.size).toBeGreaterThan(5);
    expect(avatarSvg('Same Name', 1)).not.toBe(avatarSvg('Same Name', 2));
  });

  it('renders initials as outlines or with a font fallback for other scripts', async () => {
    expect(avatarSvg('shoko_cc', 2)).not.toContain('<text');
    const cyrillic = avatarSvg('Юрий Гагарин', 3);
    expect(cyrillic).toContain('>ЮГ</text>');
    const han = avatarSvg('李雷', 4);
    expect(han).toContain('>李</text>');
    expect(avatarSvg('<script>', 5)).not.toContain('<script');
    for (const svg of [cyrillic, han, avatarSvg('', 6)]) {
      expect(await rasterise(svg, 64)).toEqual({ width: 64, height: 64 });
    }
  });

  it('supports size, theme and accessible names', () => {
    const svg = avatarSvg('Anna', 7, { size: 40, theme: 'day', title: 'Anna' });
    expect(svg).toContain('width="40" height="40"');
    expect(svg).toContain('<title>Anna</title>');
    expect(svg).toContain('fill="#E5E7EB"');
  });
});
