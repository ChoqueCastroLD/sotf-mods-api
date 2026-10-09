import { crc32 } from 'node:zlib';
import sharp from 'sharp';
import { describe, expect, it } from 'vitest';
import {
  convertToWebp,
  detectImageFormat,
  IMAGE_RULES,
  ImageRejectedError,
  processImage,
  variantWidths,
} from './image.ts';

async function jpegWithExif(width: number, height: number, orientation = 1): Promise<Buffer> {
  return sharp({ create: { width, height, channels: 3, background: { r: 200, g: 60, b: 20 } } })
    .jpeg()
    .withMetadata({ orientation, exif: { IFD0: { Copyright: 'secret-owner', Artist: 'gps-leak' } } })
    .toBuffer();
}

describe('image pipeline (PLAN §8.3)', { timeout: 120_000 }, () => {
  it('stores WebP only: original and one variant per width up to the original, without metadata', async () => {
    const out = await processImage(await jpegWithExif(2000, 1000));
    expect(out.sourceFormat).toBe('jpeg');
    expect([out.extension, out.contentType]).toEqual(['webp', 'image/webp']);
    expect([out.width, out.height]).toEqual([2000, 1000]);
    const widths = [...new Set(out.variants.map((v) => v.width))];
    expect(widths).toEqual([320, 640, 960, 1440, 1920]);
    expect(out.variants).toHaveLength(5);
    expect(out.variants.every((v) => v.format === 'webp')).toBe(true);
    for (const buffer of [out.original, ...out.variants.map((v) => v.body)]) {
      const meta = await sharp(buffer).metadata();
      expect(meta.format).toBe('webp');
      expect(meta.exif).toBeUndefined();
      expect(buffer.includes(Buffer.from('secret-owner'))).toBe(false);
    }
    expect((await sharp(out.original).metadata()).width).toBe(2000);
    const webp = out.variants.find((v) => v.width === 640);
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
    expect([out.sourceFormat, out.width, out.height, out.animated]).toEqual(['png', 64, 64, false]);
  });
});

// Animated sources stay animated (animated WebP), whatever they came from.
async function animatedGif(frames: number, width = 64, height = 32): Promise<Buffer> {
  const colours = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'];
  const images = await Promise.all(
    Array.from({ length: frames }, (_, i) =>
      sharp({ create: { width, height, channels: 3, background: colours[i % colours.length] as string } })
        .png()
        .toBuffer(),
    ),
  );
  return sharp(images, { join: { animated: true } })
    .gif({ delay: Array.from({ length: frames }, () => 120), loop: 0 })
    .toBuffer();
}

function pngChunk(type: string, data: Buffer): Buffer {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body) >>> 0);
  return Buffer.concat([length, body, crc]);
}

/** A real 2-frame APNG: red 16x8 canvas, the second frame a blue 8x8 square at x = 8 (blend over). */
async function twoFrameApng(): Promise<Buffer> {
  const solid = async (w: number, h: number, c: string) =>
    sharp({ create: { width: w, height: h, channels: 4, background: c } })
      .png()
      .toBuffer();
  const idatOf = (png: Buffer) => {
    const start = png.indexOf('IDAT') - 4;
    return png.subarray(start + 8, start + 8 + png.readUInt32BE(start));
  };
  const first = await solid(16, 8, '#ff0000');
  const second = await solid(8, 8, '#0000ff');
  const fctl = (seq: number, w: number, h: number, x: number, delay: number) => {
    const b = Buffer.alloc(26);
    b.writeUInt32BE(seq, 0);
    b.writeUInt32BE(w, 4);
    b.writeUInt32BE(h, 8);
    b.writeUInt32BE(x, 12);
    b.writeUInt32BE(0, 16);
    b.writeUInt16BE(delay, 20);
    b.writeUInt16BE(1000, 22);
    b.writeUInt8(0, 24);
    b.writeUInt8(1, 25);
    return b;
  };
  const fdat = Buffer.concat([Buffer.from([0, 0, 0, 2]), idatOf(second)]);
  const head = first.subarray(0, first.indexOf('IDAT') - 4);
  return Buffer.concat([
    head,
    pngChunk('acTL', Buffer.from([0, 0, 0, 2, 0, 0, 0, 0])),
    pngChunk('fcTL', fctl(0, 16, 8, 0, 100)),
    pngChunk('IDAT', idatOf(first)),
    pngChunk('fcTL', fctl(1, 8, 8, 8, 200)),
    pngChunk('fdAT', fdat),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

describe('animations', { timeout: 120_000 }, () => {
  it('turns an animated GIF into an animated WebP original and animated variants', async () => {
    const out = await processImage(await animatedGif(4, 640, 320));
    expect([out.sourceFormat, out.animated, out.frames, out.width, out.height]).toEqual(['gif', true, 4, 640, 320]);
    const meta = await sharp(out.original, { animated: true }).metadata();
    expect([meta.format, meta.pages, meta.pageHeight, meta.width]).toEqual(['webp', 4, 320, 640]);
    expect(meta.delay).toEqual([120, 120, 120, 120]);
    expect([...new Set(out.variants.map((v) => v.width))]).toEqual([320, 640]);
    const small = await sharp(out.variants[0]?.body, { animated: true }).metadata();
    expect([small.pages, small.width, small.pageHeight]).toEqual([4, 320, 160]);
  });

  it('decodes an animated PNG (APNG) frame by frame into an animated WebP', async () => {
    const apng = await twoFrameApng();
    expect(await detectImageFormat(apng)).toEqual({ format: 'png', ext: 'png', contentType: 'image/png' });
    const out = await processImage(apng);
    expect([out.sourceFormat, out.animated, out.frames, out.width, out.height]).toEqual(['png', true, 2, 16, 8]);
    const meta = await sharp(out.original, { animated: true }).metadata();
    expect([meta.pages, meta.pageHeight, meta.delay]).toEqual([2, 8, [100, 200]]);
    // Second frame = red canvas with a blue square over the right half.
    const frame = (page: number) =>
      sharp(out.original, { animated: true, page }).raw().toBuffer({ resolveWithObject: true });
    const second = await frame(1);
    const px = (x: number) => [...second.data.subarray(x * second.info.channels, x * second.info.channels + 3)];
    expect(px(2)[0]).toBeGreaterThan(200);
    expect(px(2)[2]).toBeLessThan(60);
    expect(px(12)[2]).toBeGreaterThan(200);
    expect(px(12)[0]).toBeLessThan(60);
  });

  it('drops the animation to its first frame when it is over the pixel budget (uploads only)', async () => {
    const gif = await animatedGif(3, 64, 32);
    // 64 × 32 × 3 = 6 144 px: pretend the budget is smaller through the backfill converter.
    await expect(convertToWebp(gif, { maxPixels: 4_000 })).rejects.toMatchObject({ reason: 'too_large' });
    const still = await convertToWebp(gif, { maxPixels: 4_000, animationOverBudget: 'still' });
    expect([still.animated, still.frames]).toEqual([false, 1]);
  });
});

describe('convertToWebp (B22)', { timeout: 60_000 }, () => {
  it('keeps the dimensions, strips metadata and encodes WebP at quality 75', async () => {
    const png = await sharp({
      create: { width: 900, height: 400, channels: 4, background: { r: 51, g: 170, b: 85, alpha: 0.5 } },
    })
      .png()
      .toBuffer();
    const out = await convertToWebp(png);
    expect([out.sourceFormat, out.width, out.height, out.animated]).toEqual(['png', 900, 400, false]);
    const meta = await sharp(out.body).metadata();
    expect([meta.format, meta.width, meta.height, meta.hasAlpha]).toEqual(['webp', 900, 400, true]);
    const jpeg = await jpegWithExif(300, 200, 6);
    const oriented = await convertToWebp(jpeg);
    expect([oriented.width, oriented.height]).toEqual([200, 300]);
    expect(oriented.body.includes(Buffer.from('secret-owner'))).toBe(false);
  });

  it('is deterministic and refuses what it cannot read', async () => {
    const png = await sharp({ create: { width: 50, height: 50, channels: 3, background: '#fff' } })
      .png()
      .toBuffer();
    expect((await convertToWebp(png)).body.equals((await convertToWebp(png)).body)).toBe(true);
    await expect(convertToWebp(Buffer.from('not an image'))).rejects.toBeInstanceOf(ImageRejectedError);
    await expect(convertToWebp(png.subarray(0, 40))).rejects.toMatchObject({ reason: 'corrupt' });
  });
});
