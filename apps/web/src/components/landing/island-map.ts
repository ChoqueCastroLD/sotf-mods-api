/**
 * Layout of the hero «island map»: which mods become waypoints and where they sit.
 *
 * Everything is deterministic (seeded by the mod id through `@sotf/brand/random`), integer-ish
 * arithmetic on a fixed artboard, so the cached HTML never reshuffles and two renders agree. Two
 * artboards are laid out from the same ordered list: `full` (desktop, ~26 waypoints) and
 * `compact` (phones/tablets, fewer). Labels never overlap each other, the compass or the scale.
 */
import { createRng } from '@sotf/brand/random';
import { topoField, topoLines } from '@sotf/brand/topo';
import type { ModCardDTO } from './data.ts';

export type WaypointKind = 'trending' | 'updated' | 'legend';
export type LabelSide = 'right' | 'left';

export interface MapSpec {
  readonly width: number;
  readonly height: number;
  readonly max: number;
  /** Font size of the label in artboard units. */
  readonly font: number;
}

export const FULL_MAP: MapSpec = { width: 520, height: 470, max: 26, font: 11 };
export const COMPACT_MAP: MapSpec = { width: 360, height: 400, max: 12, font: 11 };
export const MAP_SEED = 'sotf-mods:island-map';
/** Labels are cut here (the aria-label and the card carry the full name). */
export const LABEL_MAX_CHARS = 20;
const LABEL_HEIGHT = 24;
const MARKER = 14;
const PAD = 14;

export interface Waypoint {
  mod: ModCardDTO;
  kind: WaypointKind;
  /** Released within the last 7 days: the marker pulses. */
  recent: boolean;
  label: string;
}

export interface Placement {
  id: number;
  /** Artboard coordinates of the marker centre. */
  x: number;
  y: number;
  side: LabelSide;
}

interface Rect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const RECENT_MS = 7 * 24 * 60 * 60 * 1000;

export function truncateLabel(name: string): string {
  const chars = Array.from(name.trim());
  return chars.length <= LABEL_MAX_CHARS
    ? chars.join('')
    : `${chars
        .slice(0, LABEL_MAX_CHARS - 1)
        .join('')
        .trimEnd()}…`;
}

/** Interleaves trending, recently updated and all-time popular mods (first kind wins on dupes). */
export function selectWaypoints(
  lists: {
    trending: readonly ModCardDTO[] | null;
    updated: readonly ModCardDTO[] | null;
    legends: readonly ModCardDTO[] | null;
  },
  now: number = Date.now(),
  limit: number = FULL_MAP.max + 6,
): Waypoint[] {
  const sources: Array<[WaypointKind, readonly ModCardDTO[]]> = [
    ['trending', lists.trending ?? []],
    ['updated', lists.updated ?? []],
    ['legend', lists.legends ?? []],
  ];
  const seen = new Set<number>();
  const out: Waypoint[] = [];
  const cursor = [0, 0, 0];
  // Weighted round robin: 1 trending, 1 updated, 2 legends per round keeps the mix balanced.
  const weights = [1, 1, 2];
  let progressed = true;
  while (out.length < limit && progressed) {
    progressed = false;
    for (let s = 0; s < sources.length; s += 1) {
      const [kind, list] = sources[s] as [WaypointKind, readonly ModCardDTO[]];
      for (let w = 0; w < (weights[s] as number); w += 1) {
        while ((cursor[s] as number) < list.length) {
          const mod = list[cursor[s] as number] as ModCardDTO;
          cursor[s] = (cursor[s] as number) + 1;
          if (seen.has(mod.id) || mod.nsfw) continue;
          seen.add(mod.id);
          const released = Date.parse(mod.lastReleasedAt ?? '');
          out.push({
            mod,
            kind,
            recent: Number.isFinite(released) && now - released < RECENT_MS,
            label: truncateLabel(mod.name),
          });
          progressed = true;
          break;
        }
      }
    }
  }
  return out;
}

/** Approximate rendered width of a label (mono-ish sans at `font`, plus marker and gap). */
function labelWidth(label: string, font: number): number {
  return Math.ceil(Array.from(label).length * font * 0.6) + MARKER + 12;
}

const overlaps = (a: Rect, b: Rect, gap = 2): boolean =>
  a.x1 < b.x2 + gap && a.x2 > b.x1 - gap && a.y1 < b.y2 + gap && a.y2 > b.y1 - gap;

/** Places up to `spec.max` waypoints; a mod that finds no free spot is dropped. */
export function layoutWaypoints(waypoints: readonly Waypoint[], spec: MapSpec): Placement[] {
  const { width, height } = spec;
  const field = topoField(MAP_SEED, { width, height, peaks: 4, roughness: 0.45 });
  // Sea level: the 30th percentile of a coarse sample, so markers prefer the island's land.
  const samples: number[] = [];
  for (let gy = 0; gy < 16; gy += 1)
    for (let gx = 0; gx < 16; gx += 1) samples.push(field((gx + 0.5) * (width / 16), (gy + 0.5) * (height / 16)));
  samples.sort((a, b) => a - b);
  const sea = samples[Math.floor(samples.length * 0.3)] as number;

  const forbidden: Rect[] = [
    { x1: width - 84, y1: 0, x2: width, y2: 84 }, // compass
    { x1: 0, y1: height - 34, x2: 132, y2: height }, // scale bar
  ];
  const occupied: Rect[] = [...forbidden];
  const placed: Placement[] = [];
  for (const wp of waypoints) {
    if (placed.length >= spec.max) break;
    const rng = createRng(wp.mod.id, 'island-map');
    const w = labelWidth(wp.label, spec.font);
    for (let attempt = 0; attempt < 120; attempt += 1) {
      const x = Math.round(rng.range(PAD + 6, width - PAD - 6));
      const y = Math.round(rng.range(PAD + LABEL_HEIGHT / 2, height - PAD - LABEL_HEIGHT / 2));
      if (attempt < 60 && field(x, y) < sea) continue;
      const preferLeft = x > width - w - PAD;
      const preferRight = x < w + PAD;
      const side: LabelSide =
        preferLeft && !preferRight
          ? 'left'
          : preferRight && !preferLeft
            ? 'right'
            : rng.next() < 0.5
              ? 'right'
              : 'left';
      const rect: Rect =
        side === 'right'
          ? { x1: x - MARKER / 2, x2: x - MARKER / 2 + w, y1: y - LABEL_HEIGHT / 2, y2: y + LABEL_HEIGHT / 2 }
          : { x1: x + MARKER / 2 - w, x2: x + MARKER / 2, y1: y - LABEL_HEIGHT / 2, y2: y + LABEL_HEIGHT / 2 };
      if (rect.x1 < PAD || rect.x2 > width - PAD || rect.y1 < PAD || rect.y2 > height - PAD) continue;
      if (occupied.some((other) => overlaps(rect, other))) continue;
      occupied.push(rect);
      placed.push({ id: wp.mod.id, x, y, side });
      break;
    }
  }
  return placed;
}

/** Contour paths of an artboard (regular + index lines) for the inline SVG. */
export function mapContours(spec: MapSpec): { regular: string; index: string } {
  const lines = topoLines(MAP_SEED, {
    width: spec.width,
    height: spec.height,
    peaks: 4,
    roughness: 0.45,
    levels: 12,
    step: Math.round(Math.min(spec.width, spec.height) / 28),
    indexEvery: 4,
  });
  return { regular: lines.regular, index: lines.index };
}
