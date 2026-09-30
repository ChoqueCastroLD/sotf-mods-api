/**
 * BuildShare blueprint geometry (T1-06): `Data.Structures` → pieces (`ProfileID`, position,
 * rotation, `LengthScale`), packed for the 3D viewer, plus the static top-down SVG preview.
 *
 * The parser is tolerant on purpose (BuildShare has changed its layout between versions): every
 * object under `Structures` (depth ≤ 4) that carries a `Position` is a piece; its profile is the
 * `ProfileID` (or `Id`/`Name`/`Type`) of the piece or, failing that, of the nearest enclosing
 * structure. Vectors are `{x,y,z}` objects (any case) or `[x,y,z]` arrays; rotations are
 * quaternions `{x,y,z,w}` / `[x,y,z,w]` (identity when absent). Positions are world-space.
 */
import {
  type BuildBoundsDTO,
  GEOMETRY_MAX_PIECES,
  GEOMETRY_MAX_PROFILES,
  GEOMETRY_STRIDE,
} from '@sotf/contracts/build-viewer';
import { parseBuildShareBlueprintText } from '@sotf/contracts/manifest';

export interface Piece {
  profile: number;
  x: number;
  y: number;
  z: number;
  qx: number;
  qy: number;
  qz: number;
  qw: number;
  scale: number;
}

export interface BlueprintGeometry {
  pieces: Piece[];
  profiles: string[];
  totalPieces: number;
  size: BuildBoundsDTO;
}

const MAX_DEPTH = 4;
const MAX_RAW_PIECES = 500_000;

function num(value: unknown): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function lookup(record: Record<string, unknown>, names: readonly string[]): unknown {
  for (const key of Object.keys(record)) {
    if (names.includes(key.toLowerCase())) return record[key];
  }
  return undefined;
}

function vector(value: unknown, size: 3 | 4): number[] | null {
  if (Array.isArray(value)) {
    const parts = value.slice(0, size).map(num);
    return parts.length === size && parts.every((p) => p !== null) ? (parts as number[]) : null;
  }
  if (value !== null && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const keys = size === 3 ? ['x', 'y', 'z'] : ['x', 'y', 'z', 'w'];
    const parts = keys.map((k) => num(lookup(record, [k])));
    return parts.every((p) => p !== null) ? (parts as number[]) : null;
  }
  return null;
}

function profileOf(record: Record<string, unknown>): string | null {
  const raw = lookup(record, ['profileid', 'profile', 'id', 'name', 'type']);
  if (typeof raw === 'string' && raw.trim() !== '') return raw.trim().slice(0, 80);
  if (typeof raw === 'number' && Number.isFinite(raw)) return String(raw);
  return null;
}

/** Collects the raw pieces of a `Structures` array. */
function collect(node: unknown, inherited: string | null, depth: number, out: RawPiece[]): void {
  if (out.length >= MAX_RAW_PIECES || node === null || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const child of node) collect(child, inherited, depth, out);
    return;
  }
  const record = node as Record<string, unknown>;
  const profile = profileOf(record) ?? inherited;
  const position = vector(lookup(record, ['position', 'pos', 'location']), 3);
  const children = Object.entries(record).filter(
    ([key, value]) =>
      value !== null &&
      typeof value === 'object' &&
      !['position', 'pos', 'location', 'rotation', 'rot', 'orientation', 'scale'].includes(key.toLowerCase()),
  );
  const nested = children.some(([, value]) => Array.isArray(value) && value.some((v) => v && typeof v === 'object'));
  if (position && !nested) {
    const rotation = vector(lookup(record, ['rotation', 'rot', 'orientation']), 4) ?? [0, 0, 0, 1];
    const scale = num(lookup(record, ['lengthscale', 'length', 'scale'])) ?? 1;
    out.push({ profile: profile ?? 'unknown', position, rotation, scale: scale > 0 ? scale : 1 });
    return;
  }
  if (depth >= MAX_DEPTH) {
    if (position) {
      out.push({ profile: profile ?? 'unknown', position, rotation: [0, 0, 0, 1], scale: 1 });
    }
    return;
  }
  if (position && nested) {
    // A structure with its own elements: the elements are the pieces.
    for (const [, value] of children) collect(value, profile, depth + 1, out);
    return;
  }
  for (const [, value] of children) collect(value, profile, depth + 1, out);
}

interface RawPiece {
  profile: string;
  position: number[];
  rotation: number[];
  scale: number;
}

function normalizeQuaternion(q: number[]): [number, number, number, number] {
  const [x = 0, y = 0, z = 0, w = 1] = q;
  const length = Math.hypot(x, y, z, w);
  if (length < 1e-6) return [0, 0, 0, 1];
  return [x / length, y / length, z / length, w / length];
}

/** Geometry of a blueprint `Data.Structures` array (`null` when there is nothing to draw). */
export function geometryOfStructures(structures: unknown): BlueprintGeometry | null {
  const raw: RawPiece[] = [];
  collect(structures, null, 0, raw);
  if (raw.length === 0) return null;

  const totalPieces = raw.length;
  let kept = raw;
  if (raw.length > GEOMETRY_MAX_PIECES) {
    const step = raw.length / GEOMETRY_MAX_PIECES;
    kept = Array.from({ length: GEOMETRY_MAX_PIECES }, (_, i) => raw[Math.floor(i * step)] as RawPiece);
  }

  const counts = new Map<string, number>();
  for (const piece of kept) counts.set(piece.profile, (counts.get(piece.profile) ?? 0) + 1);
  const profiles = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1))
    .slice(0, GEOMETRY_MAX_PROFILES)
    .map(([name]) => name);
  const index = new Map(profiles.map((name, i) => [name, i]));
  const fallback = profiles.length - 1;

  let minX = Number.POSITIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let minZ = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  let maxZ = Number.NEGATIVE_INFINITY;
  for (const { position } of kept) {
    const [x = 0, y = 0, z = 0] = position;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
    minZ = Math.min(minZ, z);
    maxZ = Math.max(maxZ, z);
  }
  const cx = (minX + maxX) / 2;
  const cz = (minZ + maxZ) / 2;
  const pieces = kept.map((piece): Piece => {
    const [x = 0, y = 0, z = 0] = piece.position;
    const [qx, qy, qz, qw] = normalizeQuaternion(piece.rotation);
    return {
      profile: index.get(piece.profile) ?? fallback,
      x: round(x - cx),
      y: round(y - minY),
      z: round(z - cz),
      qx: round(qx, 1000),
      qy: round(qy, 1000),
      qz: round(qz, 1000),
      qw: round(qw, 1000),
      scale: round(Math.min(piece.scale, 64), 100),
    };
  });
  return {
    pieces,
    profiles,
    totalPieces,
    size: { width: round(maxX - minX, 10), depth: round(maxZ - minZ, 10), height: round(maxY - minY, 10) },
  };
}

function round(value: number, factor = 100): number {
  return Math.round(value * factor) / factor;
}

/** Geometry of the raw blueprint file (`null`: invalid or without positioned pieces). */
export function geometryOfBlueprintText(text: string): BlueprintGeometry | null {
  const parsed = parseBuildShareBlueprintText(text);
  if (!parsed.ok) return null;
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return null;
  }
  if (json === null || typeof json !== 'object') return null;
  const data = lookup(json as Record<string, unknown>, ['data']);
  let parsedData: unknown = data;
  if (typeof data === 'string') {
    try {
      parsedData = JSON.parse(data);
    } catch {
      return null;
    }
  }
  if (parsedData === null || typeof parsedData !== 'object') return null;
  return geometryOfStructures(lookup(parsedData as Record<string, unknown>, ['structures']));
}

/** Packs pieces as Float32 little-endian (`GEOMETRY_STRIDE` values per piece). */
export function packPieces(pieces: readonly Piece[]): Buffer {
  const data = new Float32Array(pieces.length * GEOMETRY_STRIDE);
  pieces.forEach((p, i) => {
    data.set([p.profile, p.x, p.y, p.z, p.qx, p.qy, p.qz, p.qw, p.scale], i * GEOMETRY_STRIDE);
  });
  return Buffer.from(data.buffer, data.byteOffset, data.byteLength);
}

export const PREVIEW_COLUMNS = 96;
export const PREVIEW_ROWS = 64;
const HEIGHT_BANDS = [0.22, 0.4, 0.58, 0.78, 1] as const;

/**
 * Static top-down preview: pieces are binned into a 96 × 64 grid (aspect preserved, 1 cell of
 * margin), every cell takes the height of its tallest piece and becomes one of five opacity
 * bands; adjacent cells of a band are merged into runs, so a large build stays a few KB. Fills use
 * `currentColor` and a `data-band` attribute, so the page decides colour and contrast.
 */
export function renderTopDownSvg(pieces: readonly Piece[], size: BuildBoundsDTO): string {
  const cols = PREVIEW_COLUMNS;
  const rows = PREVIEW_ROWS;
  const spanX = Math.max(size.width, 1);
  const spanZ = Math.max(size.depth, 1);
  const cell = Math.max(spanX / (cols - 2), spanZ / (rows - 2));
  const originX = -((cols - 2) * cell) / 2 - cell;
  const originZ = -((rows - 2) * cell) / 2 - cell;
  const heights = new Float32Array(cols * rows).fill(-1);
  for (const piece of pieces) {
    // Elongated pieces cover a few cells along their yaw.
    const yaw = 2 * Math.atan2(piece.qy, piece.qw);
    const half = Math.min(piece.scale * 0.5, 4);
    const steps = Math.max(1, Math.round(half / cell));
    for (let s = -steps; s <= steps; s++) {
      const offset = steps === 0 ? 0 : (s / steps) * half;
      const px = piece.x + Math.sin(yaw) * offset;
      const pz = piece.z + Math.cos(yaw) * offset;
      const col = Math.floor((px - originX) / cell);
      const row = Math.floor((pz - originZ) / cell);
      if (col < 0 || col >= cols || row < 0 || row >= rows) continue;
      const at = row * cols + col;
      if (piece.y > (heights[at] ?? -1)) heights[at] = piece.y;
    }
  }
  const top = Math.max(size.height, 0.001);
  const paths: string[] = HEIGHT_BANDS.map(() => '');
  for (let row = 0; row < rows; row++) {
    let col = 0;
    while (col < cols) {
      const h = heights[row * cols + col] ?? -1;
      if (h < 0) {
        col++;
        continue;
      }
      const band = Math.min(HEIGHT_BANDS.length - 1, Math.floor((h / top) * HEIGHT_BANDS.length));
      let end = col + 1;
      while (end < cols) {
        const next = heights[row * cols + end] ?? -1;
        if (next < 0 || Math.min(HEIGHT_BANDS.length - 1, Math.floor((next / top) * HEIGHT_BANDS.length)) !== band)
          break;
        end++;
      }
      paths[band] += `M${col} ${row}h${end - col}v1h-${end - col}z`;
      col = end;
    }
  }
  const body = paths
    .map((d, i) => (d ? `<path data-band="${i}" fill="currentColor" fill-opacity="${HEIGHT_BANDS[i]}" d="${d}"/>` : ''))
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cols} ${rows}" preserveAspectRatio="xMidYMid meet" shape-rendering="crispEdges" focusable="false" aria-hidden="true">${body}</svg>`;
}
