/**
 * Iso-line extraction (marching squares) for the topographic artwork.
 *
 * Contours of a single scalar field never cross each other, which is what makes the
 * generated terrain read as a believable map rather than a pile of overlapping rings.
 */

import type { Point } from './svg.ts';

export interface ScalarGrid {
  /** Number of samples along x (columns). */
  readonly columns: number;
  /** Number of samples along y (rows). */
  readonly rows: number;
  /** World x of column 0. */
  readonly originX: number;
  /** World y of row 0. */
  readonly originY: number;
  /** Distance between neighbouring samples. */
  readonly step: number;
  /** Row-major samples, `values[row * columns + column]`. */
  readonly values: Float64Array;
}

export interface Polyline {
  readonly points: Point[];
  readonly closed: boolean;
}

/** Samples `field` on a regular grid covering `[x0, x1] × [y0, y1]` (inclusive). */
export function sampleGrid(
  field: (x: number, y: number) => number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  step: number,
): ScalarGrid {
  if (!(step > 0)) {
    throw new RangeError('Grid step must be positive');
  }
  const columns = Math.ceil((x1 - x0) / step) + 1;
  const rows = Math.ceil((y1 - y0) / step) + 1;
  const values = new Float64Array(columns * rows);
  for (let row = 0; row < rows; row += 1) {
    const y = y0 + row * step;
    for (let column = 0; column < columns; column += 1) {
      values[row * columns + column] = field(x0 + column * step, y);
    }
  }
  return { columns, rows, originX: x0, originY: y0, step, values };
}

/*
 * Edge identifiers: every grid edge gets a unique integer so segments from neighbouring
 * cells meet at exactly the same key (no floating-point matching).
 *   horizontal edge (column, row) → (column, row)-(column+1, row): 2 * (row * columns + column)
 *   vertical edge   (column, row) → (column, row)-(column, row+1): 2 * (row * columns + column) + 1
 */

/**
 * Extracts the iso-lines of `grid` at `level`, linked into polylines. Lines that leave
 * the sampled area are open; everything else is closed.
 */
export function isoLines(grid: ScalarGrid, level: number): Polyline[] {
  const { columns, rows, values, originX, originY, step } = grid;
  const value = (column: number, row: number): number => values[row * columns + column] as number;
  const positions = new Map<number, Point>();
  const neighbours = new Map<number, number[]>();

  const edgePoint = (key: number): void => {
    if (positions.has(key)) {
      return;
    }
    const base = key >> 1;
    const column = base % columns;
    const row = (base - column) / columns;
    const vertical = (key & 1) === 1;
    const a = value(column, row);
    const b = vertical ? value(column, row + 1) : value(column + 1, row);
    const t = a === b ? 0.5 : Math.min(1, Math.max(0, (level - a) / (b - a)));
    positions.set(key, {
      x: originX + (column + (vertical ? 0 : t)) * step,
      y: originY + (row + (vertical ? t : 0)) * step,
    });
  };

  const link = (from: number, to: number): void => {
    edgePoint(from);
    edgePoint(to);
    const listFrom = neighbours.get(from);
    if (listFrom) {
      listFrom.push(to);
    } else {
      neighbours.set(from, [to]);
    }
    const listTo = neighbours.get(to);
    if (listTo) {
      listTo.push(from);
    } else {
      neighbours.set(to, [from]);
    }
  };

  for (let row = 0; row < rows - 1; row += 1) {
    for (let column = 0; column < columns - 1; column += 1) {
      const tl = value(column, row);
      const tr = value(column + 1, row);
      const br = value(column + 1, row + 1);
      const bl = value(column, row + 1);
      const index = (tl >= level ? 8 : 0) | (tr >= level ? 4 : 0) | (br >= level ? 2 : 0) | (bl >= level ? 1 : 0);
      if (index === 0 || index === 15) {
        continue;
      }
      const top = 2 * (row * columns + column);
      const bottom = 2 * ((row + 1) * columns + column);
      const left = 2 * (row * columns + column) + 1;
      const right = 2 * (row * columns + column + 1) + 1;
      switch (index) {
        case 1:
        case 14:
          link(left, bottom);
          break;
        case 2:
        case 13:
          link(bottom, right);
          break;
        case 3:
        case 12:
          link(left, right);
          break;
        case 4:
        case 11:
          link(top, right);
          break;
        case 6:
        case 9:
          link(top, bottom);
          break;
        case 7:
        case 8:
          link(left, top);
          break;
        case 5:
        case 10: {
          // Saddle: resolve with the cell centre so contours never cross.
          const centreHigh = (tl + tr + br + bl) / 4 >= level;
          const diagonalHigh = index === 10; // tl and br above the level
          if (centreHigh === diagonalHigh) {
            link(left, bottom);
            link(top, right);
          } else {
            link(left, top);
            link(bottom, right);
          }
          break;
        }
        default:
          break;
      }
    }
  }

  // Segment ids: both endpoint keys packed into one exact integer (keys < 2 · columns · rows).
  const keySpace = 2 * columns * rows + 2;
  const visited = new Set<number>();
  const edgeId = (a: number, b: number): number => (a < b ? a * keySpace + b : b * keySpace + a);
  const polylines: Polyline[] = [];

  const walk = (start: number): Polyline => {
    const keys: number[] = [start];
    let previous = -1;
    let current = start;
    for (;;) {
      const options = neighbours.get(current) ?? [];
      let nextKey = -1;
      for (const candidate of options) {
        if (candidate !== previous && !visited.has(edgeId(current, candidate))) {
          nextKey = candidate;
          break;
        }
      }
      if (nextKey === -1) {
        // Degenerate two-point loop: `previous` is the only neighbour but unvisited.
        for (const candidate of options) {
          if (!visited.has(edgeId(current, candidate))) {
            nextKey = candidate;
            break;
          }
        }
      }
      if (nextKey === -1) {
        break;
      }
      visited.add(edgeId(current, nextKey));
      if (nextKey === start) {
        return { points: keys.map((key) => positions.get(key) as Point), closed: true };
      }
      keys.push(nextKey);
      previous = current;
      current = nextKey;
    }
    return { points: keys.map((key) => positions.get(key) as Point), closed: false };
  };

  // Open lines first (they start at a boundary edge with a single neighbour), in key order.
  const keys = [...neighbours.keys()].sort((a, b) => a - b);
  for (const key of keys) {
    const list = neighbours.get(key) ?? [];
    if (list.length === 1 && !visited.has(edgeId(key, list[0] as number))) {
      polylines.push(walk(key));
    }
  }
  for (const key of keys) {
    const list = neighbours.get(key) ?? [];
    if (list.some((other) => !visited.has(edgeId(key, other)))) {
      polylines.push(walk(key));
    }
  }
  return polylines;
}

function sq(value: number): number {
  return value * value;
}

function perpendicularDistance(point: Point, a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared === 0) {
    return Math.sqrt(sq(point.x - a.x) + sq(point.y - a.y));
  }
  const t = ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSquared;
  const px = a.x + t * dx;
  const py = a.y + t * dy;
  return Math.sqrt(sq(point.x - px) + sq(point.y - py));
}

/** Ramer–Douglas–Peucker simplification (iterative, keeps both end points). */
export function simplifyOpen(points: readonly Point[], tolerance: number): Point[] {
  if (points.length <= 2) {
    return [...points];
  }
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const stack: Array<[number, number]> = [[0, points.length - 1]];
  while (stack.length > 0) {
    const [first, last] = stack.pop() as [number, number];
    let maxDistance = 0;
    let index = -1;
    for (let i = first + 1; i < last; i += 1) {
      const distance = perpendicularDistance(points[i] as Point, points[first] as Point, points[last] as Point);
      if (distance > maxDistance) {
        maxDistance = distance;
        index = i;
      }
    }
    if (index !== -1 && maxDistance > tolerance) {
      keep[index] = 1;
      stack.push([first, index], [index, last]);
    }
  }
  return points.filter((_, i) => keep[i] === 1);
}

/** Simplifies a closed ring by splitting it at its two most distant vertices. */
export function simplifyClosed(points: readonly Point[], tolerance: number): Point[] {
  if (points.length <= 4) {
    return [...points];
  }
  const origin = points[0] as Point;
  let far = 0;
  let farDistance = -1;
  for (let i = 1; i < points.length; i += 1) {
    const p = points[i] as Point;
    const distance = sq(p.x - origin.x) + sq(p.y - origin.y);
    if (distance > farDistance) {
      farDistance = distance;
      far = i;
    }
  }
  const firstHalf = simplifyOpen(points.slice(0, far + 1), tolerance);
  const secondHalf = simplifyOpen([...points.slice(far), origin], tolerance);
  return [...firstHalf.slice(0, -1), ...secondHalf.slice(0, -1)];
}

export function polylineLength(points: readonly Point[], closed: boolean): number {
  let length = 0;
  for (let i = 1; i < points.length; i += 1) {
    const a = points[i - 1] as Point;
    const b = points[i] as Point;
    length += Math.sqrt(sq(b.x - a.x) + sq(b.y - a.y));
  }
  if (closed && points.length > 1) {
    const a = points[points.length - 1] as Point;
    const b = points[0] as Point;
    length += Math.sqrt(sq(b.x - a.x) + sq(b.y - a.y));
  }
  return length;
}
