import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { TOPO_TEXTURE_OPTIONS, TOPO_TEXTURE_SEED, topoLines, topoSvg } from '../src/topo.ts';
import { gzipSize, rasterise, sha256 } from './helpers.ts';

const small = { width: 320, height: 180, levels: 8 } as const;

describe('topoSvg', () => {
  it('is deterministic per seed (snapshot)', () => {
    expect(topoSvg('snapshot-a', small)).toMatchSnapshot();
    expect(topoSvg(1204, small)).toMatchSnapshot();
    for (const seed of ['user:1', 'user:2', 'mod:auto-pickup']) {
      expect(sha256(topoSvg(seed))).toMatchSnapshot(seed);
    }
  });

  it('returns identical output for repeated calls and different output per seed', () => {
    expect(topoSvg('same', small)).toBe(topoSvg('same', small));
    expect(topoSvg('one', small)).not.toBe(topoSvg('two', small));
  });

  it('produces valid SVG with finite coordinates and a summit inside the artboard', async () => {
    for (const seed of ['a', 'b', 'c', 'd']) {
      const lines = topoLines(seed, small);
      expect(lines.count).toBeGreaterThan(3);
      expect(`${lines.regular}${lines.index}`).not.toMatch(/NaN|Infinity/);
      expect(lines.summit.x).toBeGreaterThanOrEqual(0);
      expect(lines.summit.x).toBeLessThanOrEqual(small.width);
      expect(lines.summit.y).toBeGreaterThanOrEqual(0);
      expect(lines.summit.y).toBeLessThanOrEqual(small.height);
      expect(await rasterise(topoSvg(seed, small), 160)).toEqual({ width: 160, height: 90 });
    }
  });

  it('draws index contours heavier when enabled and none when disabled', () => {
    expect(topoLines('index', { ...small, levels: 10, indexEvery: 5 }).index.length).toBeGreaterThan(0);
    expect(topoLines('index', { ...small, levels: 10, indexEvery: 0 }).index).toBe('');
  });

  it('is decorative by default and accessible when titled', () => {
    expect(topoSvg('x', small)).toContain('aria-hidden="true"');
    expect(topoSvg('x', { ...small, title: 'Terrain' })).toContain('<title>Terrain</title>');
  });

  it('escapes colours passed to the stroke', () => {
    expect(topoSvg('x', { ...small, color: '"/><script>' })).not.toContain('<script>');
  });

  it('rejects an empty artboard', () => {
    expect(() => topoLines('x', { width: 0 })).toThrow(RangeError);
  });
});

describe('/brand/topo.svg texture', () => {
  const asset = readFileSync(new URL('../assets/public/brand/topo.svg', import.meta.url), 'utf8');

  it('is the committed output of the texture seed', () => {
    expect(asset).toBe(`${topoSvg(TOPO_TEXTURE_SEED, TOPO_TEXTURE_OPTIONS)}\n`);
  });

  it('stays within the 4.5 KB gzip budget (PLAN §12.3 WP-01)', () => {
    expect(gzipSize(asset)).toBeLessThanOrEqual(4.5 * 1024);
  });

  it('works as a CSS mask: intrinsic size, currentColor strokes, no fills', () => {
    expect(asset).toContain('width="1440" height="720"');
    expect(asset).toContain('preserveAspectRatio="xMidYMid slice"');
    expect(asset).toContain('stroke="currentColor"');
    expect(asset).not.toMatch(/<(rect|image|text)\b/);
  });
});
