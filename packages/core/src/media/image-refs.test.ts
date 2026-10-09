import { describe, expect, it } from 'vitest';
import { extractImageUrlKeys, ImageRefIndex, isConvertibleImageKey, webpKeyOf } from './image-refs.ts';

const BASE = 'https://r2.sotf-mods.com';
const LEGACY = "1773000092337_2026-02-26 14_53_33-Discord Overlay's (1).png";
const MEDIA = 'media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/original.jpg';
const PLAIN = '1789326155654_character-select-thumbnail.png';

const mapping = new Map([
  [LEGACY, LEGACY.replace(/\.png$/, '.webp')],
  [MEDIA, MEDIA.replace(/\.jpg$/, '.webp')],
  [PLAIN, PLAIN.replace(/\.png$/, '.webp')],
  ['1700000000000_a.png', '1700000000000_a.webp'],
]);
const index = new ImageRefIndex(mapping, { bases: [BASE] });
const rewrite = (text: string) => index.rewriteText(text).text;

describe('webpKeyOf', () => {
  it('swaps the extension and avoids collisions', () => {
    expect(webpKeyOf('a/b.c.PNG')).toBe('a/b.c.webp');
    expect(webpKeyOf('noext')).toBe('noext.webp');
    expect(webpKeyOf('x.png', new Set(['x.webp']))).toBe('x.png.webp');
    expect(isConvertibleImageKey('x.TIFF')).toBe(true);
    expect(isConvertibleImageKey('x.webp')).toBe(false);
    expect(isConvertibleImageKey('x.zip')).toBe(false);
  });
});

describe('ImageRefIndex', () => {
  it('rewrites a raw URL with spaces and an encoded one, keeping each style', () => {
    const raw = `${BASE}/${LEGACY}`;
    expect(rewrite(`see ${raw} here`)).toBe(`see ${BASE}/${LEGACY.replace(/\.png$/, '.webp')} here`);
    const encoded = `${BASE}/${encodeURIComponent(LEGACY).replace(/'/g, "'")}`;
    expect(rewrite(encoded)).toBe(`${BASE}/${encodeURIComponent(LEGACY.replace(/\.png$/, '.webp'))}`);
    expect(rewrite(`${BASE}/${LEGACY.replace(/ /g, '%20')}`)).toBe(
      `${BASE}/${LEGACY.replace(/\.png$/, '.webp').replace(/ /g, '%20')}`,
    );
  });

  it('handles Markdown images, links, angle brackets and titles', () => {
    const webp = `${BASE}/${PLAIN.replace(/\.png$/, '.webp')}`;
    expect(rewrite(`![shot](${BASE}/${PLAIN})`)).toBe(`![shot](${webp})`);
    expect(rewrite(`[![x](${BASE}/${PLAIN} "title")](${BASE}/${PLAIN})`)).toBe(`[![x](${webp} "title")](${webp})`);
    expect(rewrite(`![x](<${BASE}/${LEGACY}>)`)).toBe(`![x](<${BASE}/${LEGACY.replace(/\.png$/, '.webp')}>)`);
    expect(rewrite(`![x](${BASE}/${LEGACY})`)).toBe(`![x](${BASE}/${LEGACY.replace(/\.png$/, '.webp')})`);
    expect(rewrite(`${BASE}/${PLAIN}.`)).toBe(`${webp}.`);
    expect(rewrite(`${BASE}/${PLAIN}?v=2#top`)).toBe(`${webp}?v=2#top`);
  });

  it('handles rendered HTML, including escaped apostrophes', () => {
    const html = `<p><img src="${BASE}/${MEDIA}" width="800" height="450" loading="lazy"> <a href="${BASE}/${PLAIN}">x</a></p>`;
    expect(rewrite(html)).toBe(
      `<p><img src="${BASE}/${MEDIA.replace(/\.jpg$/, '.webp')}" width="800" height="450" loading="lazy"> <a href="${BASE}/${PLAIN.replace(/\.png$/, '.webp')}">x</a></p>`,
    );
    const escaped = `<img src="${BASE}/${LEGACY.replace(/'/g, '&#39;')}" alt="">`;
    expect(rewrite(escaped)).toBe(
      `<img src="${BASE}/${LEGACY.replace(/\.png$/, '.webp').replace(/'/g, '&#39;')}" alt="">`,
    );
  });

  it('handles JSON text with escaped slashes, bare media keys and JSON values', () => {
    expect(rewrite(`{"image":"https:\\/\\/r2.sotf-mods.com\\/${MEDIA.replace(/\//g, '\\/')}"}`)).toBe(
      `{"image":"https:\\/\\/r2.sotf-mods.com\\/${MEDIA.replace(/\.jpg$/, '.webp').replace(/\//g, '\\/')}"}`,
    );
    expect(rewrite(`{"key":"${MEDIA}"}`)).toBe(`{"key":"${MEDIA.replace(/\.jpg$/, '.webp')}"}`);
    const json = index.rewriteJson({
      thumbnail: PLAIN,
      nested: [{ url: `${BASE}/${PLAIN}` }, 'other.png', 3, null],
      text: `![a](${BASE}/${MEDIA})`,
    });
    expect(json.value).toEqual({
      thumbnail: PLAIN.replace(/\.png$/, '.webp'),
      nested: [{ url: `${BASE}/${PLAIN.replace(/\.png$/, '.webp')}` }, 'other.png', 3, null],
      text: `![a](${BASE}/${MEDIA.replace(/\.jpg$/, '.webp')})`,
    });
    expect([...json.keys].sort()).toEqual([MEDIA, PLAIN].sort());
  });

  it('rewrites a bare key only as the whole cell', () => {
    expect(index.rewriteCell(PLAIN).text).toBe(PLAIN.replace(/\.png$/, '.webp'));
    expect(index.rewriteCell(` ${PLAIN}\n`).text).toBe(` ${PLAIN.replace(/\.png$/, '.webp')}\n`);
    expect(index.rewriteCell(`file ${PLAIN} in a sentence`).count).toBe(0);
    expect(index.rewriteCell(PLAIN, { wholeKey: false }).count).toBe(0);
  });

  it('never touches other hosts, longer names, other extensions or unknown objects', () => {
    const untouched = [
      `https://example.com/${PLAIN}`,
      `https://evil.r2.sotf-mods.com/${PLAIN}`,
      `${BASE}/${PLAIN}.bak`,
      `${BASE}/${PLAIN}x`,
      `${BASE}/${PLAIN.replace('.png', '.jpg')}`,
      `${BASE}/1700000000000_a.png2`,
      `${BASE}/not-in-the-mapping.png`,
      `https://example.com/media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/original.jpg`,
      `${BASE}/${MEDIA.replace('original', 'original-2')}`,
    ];
    for (const text of untouched) expect(rewrite(text)).toBe(text);
  });

  it('rewrites several references in one text, longest key first', () => {
    const longer = new ImageRefIndex(
      new Map([
        ['1_a.png', '1_a.webp'],
        ['1_a.png (1).png', '1_a.png (1).webp'],
      ]),
      { bases: [BASE] },
    );
    expect(longer.rewriteText(`${BASE}/1_a.png (1).png and ${BASE}/1_a.png`).text).toBe(
      `${BASE}/1_a.png (1).webp and ${BASE}/1_a.webp`,
    );
  });

  it('is a plain finder with an identity mapping and works with any base', () => {
    const dev = new ImageRefIndex(new Map([['a b.png', 'a b.png']]), { bases: ['http://127.0.0.1:47333/sotf-mods'] });
    const matches = dev.locate('x http://127.0.0.1:47333/sotf-mods/a%20b.png y');
    expect(matches.map((m) => m.key)).toEqual(['a b.png']);
    expect(dev.locate('http://127.0.0.1:47333/other/a b.png')).toEqual([]);
  });
});

describe('extractImageUrlKeys', () => {
  it('returns the decoded keys of every image URL, even for unknown objects', () => {
    const text = `![a](${BASE}/${encodeURIComponent('x y.PNG')}) <img src="${BASE}/media/u/original.jpg"> ${BASE}/file.zip https://other.com/z.png`;
    expect(extractImageUrlKeys(text, [BASE]).sort()).toEqual(['media/u/original.jpg', 'x y.PNG'].sort());
  });
});
