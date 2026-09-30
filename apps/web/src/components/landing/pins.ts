/**
 * Live pins of the hero (research/03 §5.10): 3–5 things happening on the island. The release
 * and download pins come from `live/pulse` and are refreshed by the landing script every 60 s
 * (`islands/landing/pulse.ts` rebuilds them with the same rules); the build and Kit pins come
 * from the cached catalogue.
 */
import type { KitCardDTO, LivePulse, ModCardDTO } from './data.ts';

export type PinKind = 'release' | 'download' | 'build' | 'kit';

export interface Pin {
  kind: PinKind;
  href: string;
  name: string;
  /** Version for `release`/`download`, items count for `kit`. */
  version?: string;
  count?: number;
  /** ISO instant. */
  at: string;
}

/** Maximum pins driven by the pulse (1 release + downloads of other mods). */
export const PULSE_PIN_MAX = 3;

/** Release + recent downloads of distinct mods, newest first (same rules as the client). */
export function pulsePins(pulse: LivePulse | null): Pin[] {
  if (!pulse) return [];
  const pins: Pin[] = [];
  const seen = new Set<number>();
  if (pulse.latestRelease) {
    const { mod, version, at } = pulse.latestRelease;
    seen.add(mod.id);
    pins.push({ kind: 'release', href: mod.canonicalPath, name: mod.name, version, at });
  }
  for (const entry of pulse.recent) {
    if (pins.length >= PULSE_PIN_MAX) break;
    if (seen.has(entry.mod.id) || entry.mod.nsfw) continue;
    seen.add(entry.mod.id);
    pins.push({
      kind: 'download',
      href: entry.mod.canonicalPath,
      name: entry.mod.name,
      version: entry.version,
      at: entry.at,
    });
  }
  return pins;
}

/** Catalogue pins: the trending build and the featured Kit. */
export function catalogPins(build: ModCardDTO | undefined, kit: KitCardDTO | null): Pin[] {
  const pins: Pin[] = [];
  if (build) pins.push({ kind: 'build', href: build.canonicalPath, name: build.name, at: build.lastReleasedAt });
  if (kit)
    pins.push({ kind: 'kit', href: kit.canonicalPath, name: kit.name, count: kit.itemsCount, at: kit.updatedAt });
  return pins;
}
