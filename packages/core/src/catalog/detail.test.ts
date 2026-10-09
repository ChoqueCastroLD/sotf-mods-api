import { describe, expect, it } from 'vitest';
import { alternatesOf, linksOf, reviewsSummaryOf, youtubeId } from './detail.ts';
import { imageDto, mediaUrlForWidth, safeHttpUrl, variantUrlOnly } from './media.ts';
import { localizedNames, ratingOf, taxonomyKey } from './snapshot.ts';
import { textToHtml } from './versions.ts';

const config = { mediaBaseUrl: 'https://r2.sotf-mods.com', publicBucket: 'sotf-mods' };

describe('detail helpers', () => {
  it('builds hreflang alternates for the 13 locales + x-default', () => {
    const alts = alternatesOf("/mods/imaxel/axel's-mod-menu");
    expect(alts).toHaveLength(14);
    expect(alts[0]).toEqual({ hreflang: 'en', path: "/mods/imaxel/axel's-mod-menu" });
    expect(alts).toContainEqual({ hreflang: 'pt-BR', path: "/pt/mods/imaxel/axel's-mod-menu" });
    expect(alts).toContainEqual({ hreflang: 'zh-Hans', path: "/zh/mods/imaxel/axel's-mod-menu" });
    expect(alts.at(-1)).toEqual({ hreflang: 'x-default', path: "/mods/imaxel/axel's-mod-menu" });
  });

  it('extracts YouTube ids from the usual URL shapes', () => {
    expect(youtubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1')).toBe('dQw4w9WgXcQ');
    expect(youtubeId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    expect(youtubeId('https://www.youtube.com/shorts/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');
    expect(youtubeId('https://vimeo.com/123')).toBeNull();
    expect(youtubeId('javascript:alert(1)')).toBeNull();
  });

  it('validates links and infers their kind', () => {
    expect(
      linksOf([
        { url: 'https://ko-fi.com/imaxel' },
        { url: 'https://github.com/ImAxel0', label: '  Code  ' },
        { url: 'ftp://nope' },
        { url: 'not a url' },
      ]),
    ).toEqual([
      { kind: 'kofi', url: 'https://ko-fi.com/imaxel', label: null },
      { kind: 'github', url: 'https://github.com/ImAxel0', label: 'Code' },
    ]);
  });

  it('summarises reviews with a Bayesian mean and the ≥ 3 stars rule', () => {
    expect(reviewsSummaryOf([])).toEqual({
      count: 0,
      average: null,
      bayes: 4,
      showStars: false,
      histogram: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 },
    });
    const s = reviewsSummaryOf([
      { rating: 5, n: '2' },
      { rating: 2, n: 1 },
    ]);
    expect(s).toMatchObject({ count: 3, average: 4, showStars: true, histogram: { '5': 2, '2': 1 } });
    expect(s.bayes).toBeCloseTo((5 * 4 + 12) / 8, 2);
  });

  it('escapes legacy text into paragraphs', () => {
    expect(textToHtml('a <b>\nnext\n\nsecond & "q"')).toBe(
      '<p>a &lt;b&gt;<br>next</p><p>second &amp; &quot;q&quot;</p>',
    );
  });

  it('maps stored i18n names (BCP-47) to URL locales and builds taxonomy keys', () => {
    expect(
      localizedNames({ en: { name: 'Quality of Life' }, 'pt-BR': { name: 'Qualidade' }, 'zh-Hans': { name: '生活' } }),
    ).toEqual({
      en: 'Quality of Life',
      pt: 'Qualidade',
      zh: '生活',
    });
    expect(taxonomyKey('category', 'quality-of-life')).toBe('taxonomy_category_quality_of_life');
    expect(ratingOf(4.456, 3)).toBe(4.46);
    expect(ratingOf(4, 0)).toBeNull();
    expect(ratingOf(0.5, 2)).toBe(1);
  });
});

describe('media URLs', () => {
  const processed = {
    width: 1920,
    height: 1080,
    thumbhash: 'abc',
    dominantColor: '#112233',
    sourceBucket: 'sotf-mods-private',
    sourceKey: 'incoming/x',
    variants: [
      { w: 64, format: 'webp' as const, key: 'media/u1/64.webp', bytes: 1 },
      { w: 320, format: 'webp' as const, key: 'media/u1/320.webp', bytes: 1 },
      { w: 1280, format: 'webp' as const, key: 'media/u1/1280.webp', bytes: 1 },
      { w: 320, format: 'avif' as const, key: 'media/u1/320.avif', bytes: 1 },
      { w: 1280, format: 'avif' as const, key: 'media/u1/1280.avif', bytes: 1 },
    ],
  };
  const legacy = {
    width: null,
    height: null,
    thumbhash: null,
    dominantColor: 'not-a-colour',
    sourceBucket: 'sotf-mods',
    sourceKey: "1790458408372_arctic fox savage's.png",
    variants: [],
  };

  it('uses processed variants with a WebP srcset (AVIF variants of old media are ignored)', () => {
    expect(imageDto(config, processed, null, 'Alt')).toEqual({
      url: 'https://r2.sotf-mods.com/media/u1/1280.webp',
      width: 1920,
      height: 1080,
      thumbhash: 'abc',
      dominantColor: '#112233',
      srcset:
        'https://r2.sotf-mods.com/media/u1/64.webp 64w, https://r2.sotf-mods.com/media/u1/320.webp 320w, https://r2.sotf-mods.com/media/u1/1280.webp 1280w',
      alt: 'Alt',
    });
    expect(mediaUrlForWidth(config, processed, 96)).toBe('https://r2.sotf-mods.com/media/u1/320.webp');
    expect(variantUrlOnly(config, processed, 64)).toBe('https://r2.sotf-mods.com/media/u1/64.webp');
  });

  it('falls back to the legacy object (encoded per segment) and never ships it as a 64 px thumb', () => {
    expect(imageDto(config, legacy, null)?.url).toBe(
      "https://r2.sotf-mods.com/1790458408372_arctic%20fox%20savage's.png",
    );
    expect(imageDto(config, legacy, null)?.dominantColor).toBeNull();
    expect(variantUrlOnly(config, legacy, 64)).toBeNull();
    expect(imageDto(config, null, 'https://r2.sotf-mods.com/a b.png')?.url).toBe('https://r2.sotf-mods.com/a%20b.png');
    expect(imageDto(config, null, null)).toBeNull();
    expect(safeHttpUrl('javascript:alert(1)')).toBeNull();
  });
});
