/**
 * Animated PNG (APNG) decoder: libvips only reads the default image of a PNG, so the frames are
 * extracted here (chunk parsing, one standalone PNG per frame decoded by sharp) and composited on a
 * canvas following the APNG rules (`dispose_op`, `blend_op`). The result is a list of full-canvas RGBA
 * frames that `image.ts` feeds back to sharp as an animated raw image (→ animated WebP).
 *
 * Pure bytes in, bytes out; refuses nothing by itself (callers check the dimensions and the budget
 * first through {@link probeApng}).
 */
import { crc32 } from 'node:zlib';
import sharp from 'sharp';

const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
/** Ancillary chunks that describe the colours of the frames (copied into every standalone frame). */
const COLOUR_CHUNKS = new Set(['PLTE', 'tRNS', 'gAMA', 'cHRM', 'sRGB', 'iCCP', 'sBIT']);

interface Chunk {
  type: string;
  data: Buffer;
}

interface FrameControl {
  width: number;
  height: number;
  x: number;
  y: number;
  /** Milliseconds. */
  delay: number;
  dispose: 0 | 1 | 2;
  blend: 0 | 1;
}

export interface ApngInfo {
  width: number;
  height: number;
  frames: number;
  /** 0 = loop forever. */
  loops: number;
}

export interface ApngFrames extends ApngInfo {
  /** Full-canvas RGBA frames (`width * height * 4` bytes each). */
  rgba: Buffer[];
  /** Milliseconds per frame. */
  delays: number[];
}

function readChunks(input: Buffer): Chunk[] | null {
  if (input.length < 8 + 12 || !input.subarray(0, 8).equals(SIGNATURE)) return null;
  const chunks: Chunk[] = [];
  let offset = 8;
  while (offset + 12 <= input.length) {
    const length = input.readUInt32BE(offset);
    const type = input.toString('latin1', offset + 4, offset + 8);
    const end = offset + 8 + length;
    if (end + 4 > input.length) return null;
    chunks.push({ type, data: input.subarray(offset + 8, end) });
    offset = end + 4;
    if (type === 'IEND') break;
  }
  return chunks;
}

function parseFrameControl(data: Buffer): FrameControl | null {
  if (data.length < 26) return null;
  const den = data.readUInt16BE(22) || 100;
  const delay = Math.round((data.readUInt16BE(20) * 1000) / den);
  const dispose = data.readUInt8(24);
  const blend = data.readUInt8(25);
  if (dispose > 2 || blend > 1) return null;
  return {
    width: data.readUInt32BE(4),
    height: data.readUInt32BE(8),
    x: data.readUInt32BE(12),
    y: data.readUInt32BE(16),
    // Browsers treat a 0 (and very small) delay as "as fast as possible": keep it playable.
    delay: Math.max(delay, 20),
    dispose: dispose as 0 | 1 | 2,
    blend: blend as 0 | 1,
  };
}

function chunkBytes(type: string, data: Buffer): Buffer {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, 'latin1');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])) >>> 0, 0);
  return Buffer.concat([head, data, crc]);
}

interface Layout {
  ihdr: Buffer;
  colour: Chunk[];
  info: ApngInfo;
  frames: Array<{ control: FrameControl; data: Buffer[] }>;
}

/** Splits an APNG into its frames, or returns null when it is not animated (plain PNG, one frame). */
function layout(input: Buffer): Layout | null {
  const chunks = readChunks(input);
  if (!chunks) return null;
  const ihdr = chunks.find((c) => c.type === 'IHDR')?.data;
  const actl = chunks.find((c) => c.type === 'acTL')?.data;
  if (!ihdr || ihdr.length < 13 || !actl || actl.length < 8) return null;
  const declared = actl.readUInt32BE(0);
  const loops = actl.readUInt32BE(4);
  const colour: Chunk[] = [];
  const frames: Layout['frames'] = [];
  let current: Layout['frames'][number] | null = null;
  let seenIdat = false;
  let pendingControl: FrameControl | null = null;
  for (const chunk of chunks) {
    if (chunk.type === 'fcTL') {
      pendingControl = parseFrameControl(chunk.data);
      if (!pendingControl) return null;
      current = { control: pendingControl, data: [] };
      frames.push(current);
    } else if (chunk.type === 'IDAT') {
      seenIdat = true;
      // The default image is the first frame only when an fcTL precedes it.
      if (current && frames.length === 1) current.data.push(chunk.data);
    } else if (chunk.type === 'fdAT') {
      if (current && chunk.data.length > 4) current.data.push(chunk.data.subarray(4));
    } else if (COLOUR_CHUNKS.has(chunk.type) && !seenIdat) {
      colour.push(chunk);
    }
  }
  const usable = frames.filter((f) => f.data.length > 0);
  if (usable.length < 2 || declared < 2) return null;
  return {
    ihdr: Buffer.from(ihdr),
    colour,
    info: { width: ihdr.readUInt32BE(0), height: ihdr.readUInt32BE(4), frames: usable.length, loops },
    frames: usable,
  };
}

/** Cheap check: dimensions and frame count of an animated PNG, null for a still PNG. */
export function probeApng(input: Buffer): ApngInfo | null {
  return layout(input)?.info ?? null;
}

function framePng(base: Layout, frame: Layout['frames'][number]): Buffer {
  const ihdr = Buffer.from(base.ihdr);
  ihdr.writeUInt32BE(frame.control.width, 0);
  ihdr.writeUInt32BE(frame.control.height, 4);
  return Buffer.concat([
    SIGNATURE,
    chunkBytes('IHDR', ihdr),
    ...base.colour.map((c) => chunkBytes(c.type, c.data)),
    chunkBytes('IDAT', Buffer.concat(frame.data)),
    chunkBytes('IEND', Buffer.alloc(0)),
  ]);
}

/** Decodes and composites every frame of an animated PNG. Null when `input` is not animated. */
export async function decodeApng(input: Buffer): Promise<ApngFrames | null> {
  const base = layout(input);
  if (!base) return null;
  const { width, height } = base.info;
  let canvas = Buffer.alloc(width * height * 4);
  const rgba: Buffer[] = [];
  const delays: number[] = [];
  for (const frame of base.frames) {
    const { control } = frame;
    if (control.x + control.width > width || control.y + control.height > height) {
      throw new Error('APNG frame outside the canvas');
    }
    const decoded = await sharp(framePng(base, frame), { failOn: 'error' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    if (decoded.info.width !== control.width || decoded.info.height !== control.height || decoded.info.channels !== 4) {
      throw new Error('APNG frame with unexpected dimensions');
    }
    const before = control.dispose === 2 ? Buffer.from(canvas) : null;
    for (let row = 0; row < control.height; row += 1) {
      for (let col = 0; col < control.width; col += 1) {
        const s = (row * control.width + col) * 4;
        const d = ((control.y + row) * width + control.x + col) * 4;
        const alpha = decoded.data[s + 3] as number;
        if (control.blend === 0 || alpha === 255) {
          decoded.data.copy(canvas, d, s, s + 4);
        } else if (alpha > 0) {
          const dstAlpha = canvas[d + 3] as number;
          const outAlpha = alpha + (dstAlpha * (255 - alpha)) / 255;
          for (let c = 0; c < 3; c += 1) {
            const src = decoded.data[s + c] as number;
            const dst = canvas[d + c] as number;
            canvas[d + c] = Math.round((src * alpha + (dst * dstAlpha * (255 - alpha)) / 255) / outAlpha);
          }
          canvas[d + 3] = Math.round(outAlpha);
        }
      }
    }
    rgba.push(Buffer.from(canvas));
    delays.push(control.delay);
    if (control.dispose === 1) {
      for (let row = 0; row < control.height; row += 1) {
        const start = ((control.y + row) * width + control.x) * 4;
        canvas.fill(0, start, start + control.width * 4);
      }
    } else if (before) {
      canvas = before;
    }
  }
  return { ...base.info, rgba, delays };
}
