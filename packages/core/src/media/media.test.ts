import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import { detectImageFormat, IMAGE_RULES, ImageRejectedError, processImage, variantWidths } from './image.ts';

async function jpegWithExif(width: number, height: number, orientation = 1): Promise<Buffer> {
  return sharp({ create: { width, height, channels: 3, background: { r: 200, g: 60, b: 20 } } })
    .jpeg()
    .withMetadata({ orientation, exif: { IFD0: { Copyright: 'secret-owner', Artist: 'gps-leak' } } })
    .toBuffer();
}

// AVIF encoding at five widths takes seconds on a busy host.
describe('image pipeline (PLAN §8.3)', { timeout: 120_000 }, () => {
  it('generates AVIF and WebP at every width up to the original, without metadata', async () => {
    const out = await processImage(await jpegWithExif(2000, 1000));
    expect(out.format).toBe('jpeg');
    expect([out.width, out.height]).toEqual([2000, 1000]);
    const widths = [...new Set(out.variants.map((v) => v.width))];
    expect(widths).toEqual([320, 640, 960, 1440, 1920]);
    expect(out.variants.filter((v) => v.format === 'avif')).toHaveLength(5);
    expect(out.variants.filter((v) => v.format === 'webp')).toHaveLength(5);
    for (const buffer of [out.original, ...out.variants.map((v) => v.body)]) {
      const meta = await sharp(buffer).metadata();
      expect(meta.exif).toBeUndefined();
      expect(buffer.includes(Buffer.from('secret-owner'))).toBe(false);
    }
    const webp = out.variants.find((v) => v.format === 'webp' && v.width === 640);
    expect((await sharp(webp?.body).metadata()).width).toBe(640);
    expect(out.thumbhash).toMatch(/^[A-Za-z0-9+/]+$/);
    expect(out.dominantColor).toMatch(/^#[0-9A-F]{6}$/);
  });

  it('applies the EXIF orientation before dropping it', async () => {
    const out = await processImage(await jpegWithExif(400, 200, 6));
    expect([out.width, out.height]).toEqual([200, 400]);
  });

  it('never enlarges: small images get one variant at their own width', async () => {
    const png = await sharp({ create: { width: 100, height: 80, channels: 4, background: '#0000' } })
      .png()
      .toBuffer();
    const out = await processImage(png);
    expect([...new Set(out.variants.map((v) => v.width))]).toEqual([100]);
    expect(variantWidths(700)).toEqual([320, 640]);
    expect(variantWidths(50)).toEqual([50]);
    expect(IMAGE_RULES.widths.at(-1)).toBe(1920);
  });

  it('refuses SVG, unknown bytes, corrupt files and images over 8 000 px per side', async () => {
    const reason = async (input: Buffer) => {
      try {
        await processImage(input);
        return 'ok';
      } catch (error) {
        return error instanceof ImageRejectedError ? error.reason : 'other';
      }
    };
    expect(await reason(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg"><script>x</script></svg>'))).toBe(
      'unsupported_format',
    );
    expect(await reason(Buffer.from('plain text, not an image'))).toBe('unsupported_format');
    const png = await sharp({ create: { width: 50, height: 50, channels: 3, background: '#fff' } })
      .png()
      .toBuffer();
    expect(await reason(png.subarray(0, 40))).toBe('corrupt');
    const wide = await sharp({ create: { width: 8001, height: 2, channels: 3, background: '#fff' } })
      .png()
      .toBuffer();
    expect(await reason(wide)).toBe('too_large');
    expect(await detectImageFormat(png)).toEqual({ format: 'png', ext: 'png', contentType: 'image/png' });
  });

  it('accepts an animated PNG as a PNG (file-type names it image/apng) and keeps its first frame', async () => {
    const crc32 = (buf: Buffer) => {
      let crc = 0xffffffff;
      for (const byte of buf) {
        crc ^= byte;
        for (let k = 0; k < 8; k += 1) crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
      }
      return (crc ^ 0xffffffff) >>> 0;
    };
    const chunk = (type: string, data: Buffer) => {
      const length = Buffer.alloc(4);
      length.writeUInt32BE(data.length);
      const body = Buffer.concat([Buffer.from(type), data]);
      const crc = Buffer.alloc(4);
      crc.writeUInt32BE(crc32(body));
      return Buffer.concat([length, body, crc]);
    };
    const png = await sharp({ create: { width: 64, height: 64, channels: 3, background: '#f00' } })
      .png()
      .toBuffer();
    const idat = png.indexOf('IDAT') - 4;
    // `acTL` (animation control) before the first IDAT is what makes a PNG an APNG.
    const apng = Buffer.concat([
      png.subarray(0, idat),
      chunk('acTL', Buffer.from([0, 0, 0, 1, 0, 0, 0, 0])),
      png.subarray(idat),
    ]);
    expect(await detectImageFormat(apng)).toEqual({ format: 'png', ext: 'png', contentType: 'image/png' });
    const out = await processImage(apng);
    expect([out.format, out.width, out.height]).toEqual(['png', 64, 64]);
  });
});
