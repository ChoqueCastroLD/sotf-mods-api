/**
 * Shapes of the pieces of a build (3D viewer). BuildShare blueprints only carry a numeric
 * `ProfileID` per piece, so the shape of each profile is inferred from the geometry itself:
 *
 * - every piece is a cylinder (a log, a cut log, a plank or a stick) along its **local Z** axis,
 *   centred on its position (verified on real blueprints: a floor is 5 parallel logs 0.45 m apart
 *   across, a wall 5 logs stacked 0.45 m apart, posts point up);
 * - **thickness**: the usual distance from a piece to the nearest parallel piece beside it (logs
 *   laid side by side touch), per profile;
 * - **length**: the usual distance from a piece to the next piece of the same profile laid end to
 *   end along its axis, per profile; times the piece's own `LengthScale`.
 *
 * Profiles without enough neighbours fall back to a standard log (0.45 m × 2.25 m). Pure: no
 * three.js, so the inference is unit tested on real blueprints.
 */

export const STRIDE = 9;
/** A standard log of the game (diameter and the length of a construction cell). */
export const DEFAULT_DIAMETER = 0.45;
export const DEFAULT_LENGTH = 2.25;
const MIN_DIAMETER = 0.06;
/**
 * Thickest piece drawn: a whole log. Large builds arrive sampled (see GEOMETRY_MAX_PIECES), so the
 * nearest neighbour is sometimes missing and the next one over (two logs away) would double it.
 */
const MAX_DIAMETER = DEFAULT_DIAMETER;
const MIN_LENGTH = 0.3;
const MAX_LENGTH = 6;
/** Pieces examined per profile (the inference is statistical; this bounds the work). */
const SAMPLE_PER_PROFILE = 400;
const CELL = 1;

export interface ProfileShape {
  diameter: number;
  length: number;
}

type Vec = [number, number, number];

/** Local Z axis of a piece in world space, from its quaternion. */
export function axisOf(qx: number, qy: number, qz: number, qw: number): Vec {
  return [2 * (qx * qz + qw * qy), 2 * (qy * qz - qw * qx), 1 - 2 * (qx * qx + qy * qy)];
}

function mode(values: number[], step: number): number | null {
  if (values.length < 3) return null;
  const counts = new Map<number, number>();
  for (const value of values) {
    const bucket = Math.round(value / step);
    counts.set(bucket, (counts.get(bucket) ?? 0) + 1);
  }
  let best = 0;
  let bestCount = 0;
  for (const [bucket, count] of counts) {
    if (count > bestCount || (count === bestCount && bucket < best)) {
      best = bucket;
      bestCount = count;
    }
  }
  return best * step;
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * Infers the diameter and length of every profile index present in `data` (packed pieces:
 * `[profileIndex, x, y, z, qx, qy, qz, qw, scale]`).
 */
export function inferProfileShapes(data: Float32Array, count: number): Map<number, ProfileShape> {
  const axes = new Float32Array(count * 3);
  const grid = new Map<string, number[]>();
  const byProfile = new Map<number, number[]>();
  for (let i = 0; i < count; i++) {
    const o = i * STRIDE;
    const axis = axisOf(data[o + 4] ?? 0, data[o + 5] ?? 0, data[o + 6] ?? 0, data[o + 7] ?? 1);
    const norm = Math.hypot(axis[0], axis[1], axis[2]) || 1;
    axes[i * 3] = axis[0] / norm;
    axes[i * 3 + 1] = axis[1] / norm;
    axes[i * 3 + 2] = axis[2] / norm;
    const key = `${Math.floor((data[o + 1] ?? 0) / CELL)},${Math.floor((data[o + 2] ?? 0) / CELL)},${Math.floor((data[o + 3] ?? 0) / CELL)}`;
    const cell = grid.get(key);
    if (cell) cell.push(i);
    else grid.set(key, [i]);
    const profile = data[o] ?? 0;
    const list = byProfile.get(profile);
    if (list) list.push(i);
    else byProfile.set(profile, [i]);
  }

  const shapes = new Map<number, ProfileShape>();
  for (const [profile, members] of byProfile) {
    const step = Math.max(1, Math.floor(members.length / SAMPLE_PER_PROFILE));
    const beside: number[] = [];
    const along: number[] = [];
    for (let m = 0; m < members.length; m += step) {
      const i = members[m] as number;
      const o = i * STRIDE;
      const px = data[o + 1] ?? 0;
      const py = data[o + 2] ?? 0;
      const pz = data[o + 3] ?? 0;
      const ax = axes[i * 3] ?? 0;
      const ay = axes[i * 3 + 1] ?? 0;
      const az = axes[i * 3 + 2] ?? 1;
      let nearestBeside = Number.POSITIVE_INFINITY;
      let nearestAlong = Number.POSITIVE_INFINITY;
      // Side-by-side neighbours sit within a cell or two; end-to-end ones up to MAX_LENGTH away.
      const reach = Math.ceil(MAX_LENGTH / CELL);
      const cx = Math.floor(px / CELL);
      const cy = Math.floor(py / CELL);
      const cz = Math.floor(pz / CELL);
      for (let dx = -reach; dx <= reach; dx++) {
        for (let dy = -reach; dy <= reach; dy++) {
          for (let dz = -reach; dz <= reach; dz++) {
            // Only the axis line needs the long reach; near cells cover the side neighbours.
            const near = Math.abs(dx) <= 1 && Math.abs(dy) <= 1 && Math.abs(dz) <= 1;
            if (!near) {
              const line = Math.abs(dx * ay - dy * ax) + Math.abs(dy * az - dz * ay) + Math.abs(dz * ax - dx * az);
              if (line > 1.8) continue;
            }
            const cell = grid.get(`${cx + dx},${cy + dy},${cz + dz}`);
            if (!cell) continue;
            for (const j of cell) {
              if (j === i) continue;
              const q = j * STRIDE;
              const vx = (data[q + 1] ?? 0) - px;
              const vy = (data[q + 2] ?? 0) - py;
              const vz = (data[q + 3] ?? 0) - pz;
              const parallel = Math.abs(
                ax * (axes[j * 3] ?? 0) + ay * (axes[j * 3 + 1] ?? 0) + az * (axes[j * 3 + 2] ?? 0),
              );
              if (parallel < 0.97) continue;
              const onAxis = vx * ax + vy * ay + vz * az;
              const dist = Math.hypot(vx, vy, vz);
              const across = Math.sqrt(Math.max(0, dist * dist - onAxis * onAxis));
              if (Math.abs(onAxis) < 0.1 && across >= MIN_DIAMETER && across < nearestBeside) nearestBeside = across;
              if (
                data[q] === profile &&
                across < 0.1 &&
                Math.abs(onAxis) >= MIN_LENGTH &&
                Math.abs(onAxis) < nearestAlong
              ) {
                nearestAlong = Math.abs(onAxis);
              }
            }
          }
        }
      }
      if (nearestBeside <= 1.2) beside.push(nearestBeside);
      if (nearestAlong <= MAX_LENGTH) along.push(nearestAlong);
    }
    const diameter = mode(beside, 0.05);
    const length = mode(along, 0.05);
    shapes.set(profile, {
      diameter: clamp(diameter ?? DEFAULT_DIAMETER, MIN_DIAMETER, MAX_DIAMETER),
      length: clamp(length ?? DEFAULT_LENGTH, MIN_LENGTH, MAX_LENGTH),
    });
  }
  return shapes;
}

/** Wood colour of a profile: log browns with a small, stable variation; thin pieces (sticks) paler. */
export function woodColor(profile: number, shape: ProfileShape): { h: number; s: number; l: number } {
  const jitter = ((profile * 0.618) % 1) - 0.5;
  if (shape.diameter < 0.15) return { h: 0.09 + jitter * 0.02, s: 0.4, l: 0.42 + jitter * 0.06 };
  return { h: 0.07 + jitter * 0.025, s: 0.5 + jitter * 0.1, l: 0.24 + jitter * 0.07 };
}

export interface Framing {
  /** Centre of the bulk of the build (x, z) and its mid height. */
  center: [number, number, number];
  /** Radius of the sphere that holds the bulk of the build. */
  radius: number;
}

/**
 * Where the camera should look: the 2nd–98th percentile box of the piece positions, so a few
 * stray pieces far away (a lone stake, a forgotten wall) do not shrink the building to a dot.
 */
export function frameOf(data: Float32Array, count: number): Framing {
  if (count === 0) return { center: [0, 0, 0], radius: 4 };
  const axis = (k: number) => {
    const values = new Float32Array(count);
    for (let i = 0; i < count; i++) values[i] = data[i * STRIDE + k] ?? 0;
    values.sort();
    return [values[Math.floor(count * 0.02)] ?? 0, values[Math.min(count - 1, Math.floor(count * 0.98))] ?? 0] as const;
  };
  const [x0, x1] = axis(1);
  const [y0, y1] = axis(2);
  const [z0, z1] = axis(3);
  const radius = Math.max(4, Math.hypot(x1 - x0, y1 - y0, z1 - z0) / 2);
  return { center: [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2], radius };
}
