/**
 * Small, dependency-free helpers for emitting compact, deterministic SVG markup.
 *
 * Every generator in this package builds SVG as strings so that the same code runs in
 * Node (SSR, build scripts, the OG worker) and in the browser without a DOM.
 */

export interface Point {
  readonly x: number;
  readonly y: number;
}

/**
 * Formats a number with at most `precision` decimals, without trailing zeros, without
 * a leading zero (`0.5` → `.5`) and without negative zero. `toFixed` is fully specified
 * by ECMAScript, so the output is identical in every engine.
 */
export function fmt(value: number, precision = 2): string {
  if (!Number.isFinite(value)) {
    throw new RangeError(`Cannot format non-finite number: ${value}`);
  }
  let text = value.toFixed(precision);
  if (text.includes('.')) {
    text = text.replace(/0+$/, '').replace(/\.$/, '');
  }
  if (text === '-0' || text === '') {
    return '0';
  }
  if (text.startsWith('0.')) {
    return text.slice(1);
  }
  if (text.startsWith('-0.')) {
    return `-${text.slice(2)}`;
  }
  return text;
}

/**
 * Joins already-formatted numbers using the shortest separators the SVG path grammar
 * allows: a minus sign or a second decimal point already terminate the previous number.
 */
export function joinNumbers(values: readonly string[]): string {
  let out = '';
  let previous = '';
  for (const value of values) {
    if (out.length === 0) {
      out = value;
    } else if (value.startsWith('-')) {
      out += value;
    } else if (value.startsWith('.') && previous.includes('.')) {
      out += value;
    } else {
      out += ` ${value}`;
    }
    previous = value;
  }
  return out;
}

/** Escapes text for use inside XML text nodes and double-quoted attributes. */
export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Valid XML `id`/`NCName`-ish token used for element ids and id prefixes. */
const ID_PATTERN = /^[A-Za-z_][A-Za-z0-9_.-]*$/;

export function assertIdToken(value: string, label = 'id'): string {
  if (!ID_PATTERN.test(value)) {
    throw new TypeError(`Invalid ${label} "${value}": use letters, digits, "_", "-" or "."`);
  }
  return value;
}

export type AttributeValue = string | number | boolean | null | undefined;

/** Serialises attributes in insertion order, skipping `null`, `undefined` and `false`. */
export function attrs(record: Readonly<Record<string, AttributeValue>>): string {
  let out = '';
  for (const [name, value] of Object.entries(record)) {
    if (value === null || value === undefined || value === false) {
      continue;
    }
    if (value === true) {
      out += ` ${name}`;
      continue;
    }
    const text = typeof value === 'number' ? fmt(value, 3) : value;
    out += ` ${name}="${escapeXml(text)}"`;
  }
  return out;
}

export interface SvgRootOptions {
  readonly viewBox: readonly [number, number, number, number];
  /** Intrinsic width/height attributes. Omit for fluid inline SVG. */
  readonly width?: number | string | undefined;
  readonly height?: number | string | undefined;
  /** Accessible name. When omitted the SVG is marked decorative (`aria-hidden`). */
  readonly title?: string | undefined;
  readonly preserveAspectRatio?: string | undefined;
  readonly className?: string | undefined;
  readonly extra?: Readonly<Record<string, AttributeValue>> | undefined;
}

/**
 * Wraps `body` in an `<svg>` root. Titled SVGs get `role="img"` + `<title>` so they are
 * announced; untitled ones are hidden from assistive technology.
 */
export function svgRoot(options: SvgRootOptions, body: string): string {
  const [minX, minY, width, height] = options.viewBox;
  const titled = options.title !== undefined && options.title.length > 0;
  const head = attrs({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: `${fmt(minX)} ${fmt(minY)} ${fmt(width)} ${fmt(height)}`,
    width: options.width,
    height: options.height,
    preserveAspectRatio: options.preserveAspectRatio,
    class: options.className,
    role: titled ? 'img' : undefined,
    'aria-hidden': titled ? undefined : 'true',
    ...options.extra,
  });
  const title = titled ? `<title>${escapeXml(options.title ?? '')}</title>` : '';
  return `<svg${head}>${title}${body}</svg>`;
}

/** Relative-command path writer that rounds absolute coordinates first (no drift). */
export class PathWriter {
  private readonly parts: string[] = [];
  private cursorX = 0;
  private cursorY = 0;
  private readonly precision: number;
  private readonly scale: number;

  constructor(precision = 0) {
    if (!Number.isInteger(precision) || precision < 0 || precision > 4) {
      throw new RangeError(`PathWriter precision must be an integer in [0, 4], got ${precision}`);
    }
    this.precision = precision;
    this.scale = [1, 10, 100, 1000, 10000][precision] as number;
  }

  private round(value: number): number {
    return Math.round(value * this.scale) / this.scale;
  }

  private rel(value: number, origin: number): string {
    return fmt(this.round(value - origin), this.precision);
  }

  moveTo(x: number, y: number): this {
    const rx = this.round(x);
    const ry = this.round(y);
    this.parts.push(`M${joinNumbers([fmt(rx, this.precision), fmt(ry, this.precision)])}`);
    this.cursorX = rx;
    this.cursorY = ry;
    return this;
  }

  lineTo(x: number, y: number): this {
    const rx = this.round(x);
    const ry = this.round(y);
    this.parts.push(`l${joinNumbers([this.rel(rx, this.cursorX), this.rel(ry, this.cursorY)])}`);
    this.cursorX = rx;
    this.cursorY = ry;
    return this;
  }

  cubicTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number): this {
    const rx = this.round(x);
    const ry = this.round(y);
    const values = [
      this.rel(this.round(c1x), this.cursorX),
      this.rel(this.round(c1y), this.cursorY),
      this.rel(this.round(c2x), this.cursorX),
      this.rel(this.round(c2y), this.cursorY),
      this.rel(rx, this.cursorX),
      this.rel(ry, this.cursorY),
    ];
    this.parts.push(`c${joinNumbers(values)}`);
    this.cursorX = rx;
    this.cursorY = ry;
    return this;
  }

  quadTo(cx: number, cy: number, x: number, y: number): this {
    const rx = this.round(x);
    const ry = this.round(y);
    const values = [
      this.rel(this.round(cx), this.cursorX),
      this.rel(this.round(cy), this.cursorY),
      this.rel(rx, this.cursorX),
      this.rel(ry, this.cursorY),
    ];
    this.parts.push(`q${joinNumbers(values)}`);
    this.cursorX = rx;
    this.cursorY = ry;
    return this;
  }

  close(): this {
    this.parts.push('z');
    return this;
  }

  toString(): string {
    return this.parts.join('');
  }
}

/**
 * Appends a smooth curve through `points` (uniform Catmull-Rom converted to cubic Bézier
 * segments). Closed curves wrap around; open curves duplicate their end points.
 */
export function smoothCurve(writer: PathWriter, points: readonly Point[], closed: boolean): void {
  const count = points.length;
  if (count === 0) {
    return;
  }
  const at = (index: number): Point => {
    if (closed) {
      return points[((index % count) + count) % count] as Point;
    }
    return points[Math.min(Math.max(index, 0), count - 1)] as Point;
  };
  const first = at(0);
  writer.moveTo(first.x, first.y);
  if (count === 1) {
    return;
  }
  if (count === 2 && !closed) {
    const last = at(1);
    writer.lineTo(last.x, last.y);
    return;
  }
  const segments = closed ? count : count - 1;
  for (let i = 0; i < segments; i += 1) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    writer.cubicTo(
      p1.x + (p2.x - p0.x) / 6,
      p1.y + (p2.y - p0.y) / 6,
      p2.x - (p3.x - p1.x) / 6,
      p2.y - (p3.y - p1.y) / 6,
      p2.x,
      p2.y,
    );
  }
  if (closed) {
    writer.close();
  }
}
