import { describe, expect, it } from 'vitest';
import { coverMediaIdOf, galleryMediaIds } from './api.ts';
import { versionSeries } from './charts/figures.tsx';

const ID_A = '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d';
const ID_B = '0192f3a6-2c3d-7e4f-9a51-6b7c8d9e0f1a';
const url = (id: string) => `https://r2.sotf-mods.com/media/${id}/1280.webp`;

describe('owner media ids', () => {
  const studio = (media: unknown) =>
    ({
      mod: { thumbnail: { url: url(ID_A) }, gallery: [{ url: url(ID_B) }, { url: 'https://legacy.example/pic.png' }] },
      media,
    }) as never;

  it('uses the ids of the owner view (null for legacy images)', () => {
    const view = studio({
      thumbnailMediaId: ID_A,
      gallery: [
        { mediaId: ID_B, url: url(ID_B) },
        { mediaId: null, url: 'https://legacy.example/pic.png' },
      ],
    });
    expect(coverMediaIdOf(view)).toBe(ID_A);
    expect(galleryMediaIds(view)).toEqual([ID_B, null]);
  });

  it('falls back to the id in the variant URL when an entry does not line up', () => {
    const view = studio({ thumbnailMediaId: null, gallery: [] });
    expect(coverMediaIdOf(view)).toBe(ID_A);
    expect(galleryMediaIds(view)).toEqual([ID_B, null]);
  });
});

describe('versionSeries', () => {
  it('pivots the per-version series onto the buckets of the main series, «other» last', () => {
    const { data, series } = versionSeries(
      {
        series: [{ day: '2026-09-28' }, { day: '2026-09-29' }, { day: '2026-09-30' }] as never,
        seriesByVersion: [
          { day: '2026-09-28', version: 'other', downloads: 2 },
          { day: '2026-09-28', version: '1.3.8', downloads: 41 },
          { day: '2026-09-29', version: '1.3.8', downloads: 39 },
        ],
      },
      'Other',
    );
    expect(series).toEqual([
      { key: 'v0', label: 'v1.3.8' },
      { key: 'v1', label: 'Other' },
    ]);
    expect(data).toEqual([
      { day: '2026-09-28', v0: 41, v1: 2 },
      { day: '2026-09-29', v0: 39, v1: 0 },
      { day: '2026-09-30', v0: 0, v1: 0 },
    ]);
  });

  it('is empty without per-version data', () => {
    expect(versionSeries({ series: [], seriesByVersion: [] }, 'Other').series).toEqual([]);
  });
});
