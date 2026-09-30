/**
 * Tiny QR Code encoder for the share dialog (ISO/IEC 18004; byte mode, error correction level M,
 * versions 1–40, automatic mask). Loaded lazily the first time a visitor opens the QR code, so it
 * never weighs on the page. Follows the reference algorithm of Project Nayuki's QR Code generator
 * (MIT); the output is an SVG string with a 4-module quiet zone.
 */

const ECC_CODEWORDS_PER_BLOCK_M = [
  -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28,
  28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
];
const NUM_ERROR_CORRECTION_BLOCKS_M = [
  -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33,
  35, 37, 38, 40, 43, 45, 47, 49,
];
/** Format bits of level M. */
const ECL_FORMAT_BITS_M = 0;

function getBit(value: number, index: number): boolean {
  return ((value >>> index) & 1) !== 0;
}

function numRawDataModules(version: number): number {
  let result = (16 * version + 128) * version + 64;
  if (version >= 2) {
    const numAlign = Math.floor(version / 7) + 2;
    result -= (25 * numAlign - 10) * numAlign - 55;
    if (version >= 7) result -= 36;
  }
  return result;
}

function numDataCodewords(version: number): number {
  return (
    Math.floor(numRawDataModules(version) / 8) -
    (ECC_CODEWORDS_PER_BLOCK_M[version] as number) * (NUM_ERROR_CORRECTION_BLOCKS_M[version] as number)
  );
}

function gfMultiply(x: number, y: number): number {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z & 0xff;
}

function rsDivisor(degree: number): number[] {
  const result: number[] = new Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = gfMultiply(result[j] as number, root);
      if (j + 1 < result.length) result[j] = (result[j] as number) ^ (result[j + 1] as number);
    }
    root = gfMultiply(root, 0x02);
  }
  return result;
}

function rsRemainder(data: readonly number[], divisor: readonly number[]): number[] {
  const result: number[] = divisor.map(() => 0);
  for (const byte of data) {
    const factor = byte ^ (result.shift() as number);
    result.push(0);
    divisor.forEach((coefficient, index) => {
      result[index] = (result[index] as number) ^ gfMultiply(coefficient, factor);
    });
  }
  return result;
}

class QrMatrix {
  readonly version: number;
  readonly size: number;
  readonly modules: boolean[][];
  readonly isFunction: boolean[][];

  constructor(version: number) {
    this.version = version;
    this.size = version * 4 + 17;
    this.modules = Array.from({ length: this.size }, () => new Array<boolean>(this.size).fill(false));
    this.isFunction = Array.from({ length: this.size }, () => new Array<boolean>(this.size).fill(false));
  }

  private set(x: number, y: number, dark: boolean): void {
    (this.modules[y] as boolean[])[x] = dark;
    (this.isFunction[y] as boolean[])[x] = true;
  }

  drawFunctionPatterns(): void {
    const size = this.size;
    for (let i = 0; i < size; i++) {
      this.set(6, i, i % 2 === 0);
      this.set(i, 6, i % 2 === 0);
    }
    this.drawFinder(3, 3);
    this.drawFinder(size - 4, 3);
    this.drawFinder(3, size - 4);
    const positions = this.alignmentPositions();
    const count = positions.length;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        if ((i === 0 && j === 0) || (i === 0 && j === count - 1) || (i === count - 1 && j === 0)) continue;
        this.drawAlignment(positions[i] as number, positions[j] as number);
      }
    }
    this.drawFormatBits(0);
    this.drawVersion();
  }

  private drawFinder(x: number, y: number): void {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const distance = Math.max(Math.abs(dx), Math.abs(dy));
        const xx = x + dx;
        const yy = y + dy;
        if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) this.set(xx, yy, distance !== 2 && distance !== 4);
      }
    }
  }

  private drawAlignment(x: number, y: number): void {
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) this.set(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }
  }

  private alignmentPositions(): number[] {
    if (this.version === 1) return [];
    const numAlign = Math.floor(this.version / 7) + 2;
    const step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
    const result = [6];
    for (let position = this.size - 7; result.length < numAlign; position -= step) result.splice(1, 0, position);
    return result;
  }

  drawFormatBits(mask: number): void {
    const data = (ECL_FORMAT_BITS_M << 3) | mask;
    let remainder = data;
    for (let i = 0; i < 10; i++) remainder = (remainder << 1) ^ ((remainder >>> 9) * 0x537);
    const bits = ((data << 10) | remainder) ^ 0x5412;
    const size = this.size;
    for (let i = 0; i <= 5; i++) this.set(8, i, getBit(bits, i));
    this.set(8, 7, getBit(bits, 6));
    this.set(8, 8, getBit(bits, 7));
    this.set(7, 8, getBit(bits, 8));
    for (let i = 9; i < 15; i++) this.set(14 - i, 8, getBit(bits, i));
    for (let i = 0; i < 8; i++) this.set(size - 1 - i, 8, getBit(bits, i));
    for (let i = 8; i < 15; i++) this.set(8, size - 15 + i, getBit(bits, i));
    this.set(8, size - 8, true);
  }

  private drawVersion(): void {
    if (this.version < 7) return;
    let remainder = this.version;
    for (let i = 0; i < 12; i++) remainder = (remainder << 1) ^ ((remainder >>> 11) * 0x1f25);
    const bits = (this.version << 12) | remainder;
    for (let i = 0; i < 18; i++) {
      const bit = getBit(bits, i);
      const a = this.size - 11 + (i % 3);
      const b = Math.floor(i / 3);
      this.set(a, b, bit);
      this.set(b, a, bit);
    }
  }

  drawCodewords(data: readonly number[]): void {
    let i = 0;
    const size = this.size;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vertical = 0; vertical < size; vertical++) {
        for (let j = 0; j < 2; j++) {
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? size - 1 - vertical : vertical;
          if (!(this.isFunction[y] as boolean[])[x] && i < data.length * 8) {
            (this.modules[y] as boolean[])[x] = getBit(data[i >>> 3] as number, 7 - (i & 7));
            i++;
          }
        }
      }
    }
  }

  applyMask(mask: number): void {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        let invert: boolean;
        switch (mask) {
          case 0:
            invert = (x + y) % 2 === 0;
            break;
          case 1:
            invert = y % 2 === 0;
            break;
          case 2:
            invert = x % 3 === 0;
            break;
          case 3:
            invert = (x + y) % 3 === 0;
            break;
          case 4:
            invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
            break;
          case 5:
            invert = ((x * y) % 2) + ((x * y) % 3) === 0;
            break;
          case 6:
            invert = (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
            break;
          default:
            invert = (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
        }
        const row = this.modules[y] as boolean[];
        if (invert && !(this.isFunction[y] as boolean[])[x]) row[x] = !row[x];
      }
    }
  }

  penalty(): number {
    const size = this.size;
    const at = (x: number, y: number) => (this.modules[y] as boolean[])[x] as boolean;
    let result = 0;
    // Rule 1: runs of five or more modules of the same colour, in rows and columns.
    for (let a = 0; a < size; a++) {
      let rowRun = 1;
      let colRun = 1;
      for (let b = 1; b < size; b++) {
        if (at(b, a) === at(b - 1, a)) {
          rowRun++;
        } else {
          if (rowRun >= 5) result += 3 + (rowRun - 5);
          rowRun = 1;
        }
        if (at(a, b) === at(a, b - 1)) {
          colRun++;
        } else {
          if (colRun >= 5) result += 3 + (colRun - 5);
          colRun = 1;
        }
      }
      if (rowRun >= 5) result += 3 + (rowRun - 5);
      if (colRun >= 5) result += 3 + (colRun - 5);
    }
    // Rule 2: 2×2 blocks of the same colour.
    for (let y = 0; y < size - 1; y++) {
      for (let x = 0; x < size - 1; x++) {
        const color = at(x, y);
        if (color === at(x + 1, y) && color === at(x, y + 1) && color === at(x + 1, y + 1)) result += 3;
      }
    }
    // Rule 3: finder-like patterns (1:1:3:1:1 with four light modules on one side).
    const pattern = [true, false, true, true, true, false, true];
    const matches = (get: (i: number) => boolean, start: number): boolean => {
      for (let i = 0; i < 7; i++) if (get(start + i) !== pattern[i]) return false;
      const lightBefore = [1, 2, 3, 4].every((k) => start - k < 0 || !get(start - k));
      const lightAfter = [7, 8, 9, 10].every((k) => start + k >= size || !get(start + k));
      return lightBefore || lightAfter;
    };
    for (let a = 0; a < size; a++) {
      for (let start = 0; start + 7 <= size; start++) {
        if (matches((i) => at(i, a), start)) result += 40;
        if (matches((i) => at(a, i), start)) result += 40;
      }
    }
    // Rule 4: balance of dark and light modules.
    let dark = 0;
    for (const row of this.modules) for (const cell of row) if (cell) dark++;
    const total = size * size;
    const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
    result += Math.max(0, k) * 10;
    return result;
  }
}

function utf8Bytes(text: string): number[] {
  return Array.from(new TextEncoder().encode(text));
}

/** Encodes `text` (byte mode, level M) into a module matrix. */
export function encodeQr(text: string): boolean[][] {
  const bytes = utf8Bytes(text);
  let version = 1;
  let dataCapacityBits = 0;
  for (; version <= 40; version++) {
    dataCapacityBits = numDataCodewords(version) * 8;
    const countBits = version <= 9 ? 8 : 16;
    if (4 + countBits + bytes.length * 8 <= dataCapacityBits) break;
  }
  if (version > 40) throw new RangeError('QR payload too long');
  const countBits = version <= 9 ? 8 : 16;

  const bits: number[] = [];
  const append = (value: number, length: number) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1);
  };
  append(0b0100, 4);
  append(bytes.length, countBits);
  for (const byte of bytes) append(byte, 8);
  append(0, Math.min(4, dataCapacityBits - bits.length));
  append(0, (8 - (bits.length % 8)) % 8);
  for (let pad = 0xec; bits.length < dataCapacityBits; pad ^= 0xec ^ 0x11) append(pad, 8);

  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | (bits[i + j] as number);
    data.push(byte);
  }

  // Error correction and interleaving.
  const numBlocks = NUM_ERROR_CORRECTION_BLOCKS_M[version] as number;
  const blockEccLength = ECC_CODEWORDS_PER_BLOCK_M[version] as number;
  const rawCodewords = Math.floor(numRawDataModules(version) / 8);
  const numShortBlocks = numBlocks - (rawCodewords % numBlocks);
  const shortBlockLength = Math.floor(rawCodewords / numBlocks);
  const divisor = rsDivisor(blockEccLength);
  const blocks: number[][] = [];
  for (let i = 0, k = 0; i < numBlocks; i++) {
    const block = data.slice(k, k + shortBlockLength - blockEccLength + (i < numShortBlocks ? 0 : 1));
    k += block.length;
    const ecc = rsRemainder(block, divisor);
    if (i < numShortBlocks) block.push(0);
    blocks.push(block.concat(ecc));
  }
  const codewords: number[] = [];
  const blockLength = (blocks[0] as number[]).length;
  for (let i = 0; i < blockLength; i++) {
    blocks.forEach((block, j) => {
      if (i !== shortBlockLength - blockEccLength || j >= numShortBlocks) codewords.push(block[i] as number);
    });
  }

  const matrix = new QrMatrix(version);
  matrix.drawFunctionPatterns();
  matrix.drawCodewords(codewords);
  let bestMask = 0;
  let bestPenalty = Number.POSITIVE_INFINITY;
  for (let mask = 0; mask < 8; mask++) {
    matrix.applyMask(mask);
    matrix.drawFormatBits(mask);
    const penalty = matrix.penalty();
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      bestMask = mask;
    }
    matrix.applyMask(mask);
  }
  matrix.applyMask(bestMask);
  matrix.drawFormatBits(bestMask);
  return matrix.modules;
}

/** SVG markup of the QR code of `text` (black on transparent; the container is white). */
export function qrSvg(text: string, quietZone = 4): string {
  const modules = encodeQr(text);
  const size = modules.length + quietZone * 2;
  let path = '';
  modules.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) path += `M${x + quietZone} ${y + quietZone}h1v1h-1z`;
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="100%" height="100%" shape-rendering="crispEdges" aria-hidden="true" focusable="false"><path fill="#000" d="${path}"/></svg>`;
}
