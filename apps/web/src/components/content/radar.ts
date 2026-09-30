/**
 * Data of Patch Radar (T0-10, PLAN §7.10, research/03 §6.15): `/patch-radar` (current game build)
 * and `/patch-radar/:build` (a past build, addressed by its label slug: `1.0.4`, `patch-13`).
 *
 * The page is public HTML shared by everyone: only anonymous API reads, NSFW rows dropped (they
 * are hidden by default everywhere, T0-30), rows ordered by 30-day downloads.
 */
import { isApiError } from '@sotf/contracts/client';
import type { GameBuildListDTO, PatchRadarDTO, PatchRadarRowDTO } from '@sotf/contracts/compat';
import type { z } from 'zod';
import { serverApi } from '../../lib/api.ts';

export type PatchRadar = z.output<typeof PatchRadarDTO>;
export type PatchRadarRow = z.output<typeof PatchRadarRowDTO>;
export type GameBuild = z.output<typeof GameBuildListDTO>['items'][number];

/** Budget of the Patch Radar reads (the page is useless without them, so it waits a little). */
const RADAR_TIMEOUT_MS = 5000;

/** URL segment of a game build: its label, lower-cased, with anything but `[a-z0-9.]` as `-`. */
export function buildSlug(label: string): string {
  return label
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Locale-less path of a build's radar (the current build lives at `/patch-radar`). */
export function buildPath(build: Pick<GameBuild, 'label' | 'isCurrent'>): string {
  return build.isCurrent ? '/patch-radar' : `/patch-radar/${encodeURIComponent(buildSlug(build.label))}`;
}

export type RadarResult =
  | { kind: 'ok'; radar: PatchRadar }
  /** No game build registered yet (nothing to show, `noindex`). */
  | { kind: 'empty' }
  | { kind: 'not-found' }
  /** Canonical URL of the requested build (other case, id, or the current build). */
  | { kind: 'redirect'; path: string }
  | { kind: 'error' };

function withoutNsfw(radar: PatchRadar): PatchRadar {
  const keep = (rows: readonly PatchRadarRow[]) =>
    rows.filter((row) => !row.mod.nsfw).sort((a, b) => b.downloads30d - a.downloads30d);
  return { ...radar, works: keep(radar.works), broken: keep(radar.broken), pending: keep(radar.pending) };
}

async function radarFor(buildId: number | undefined): Promise<RadarResult> {
  try {
    const radar = await serverApi().compat.patchRadar(
      { query: buildId === undefined ? {} : { build: buildId } },
      { signal: AbortSignal.timeout(RADAR_TIMEOUT_MS) },
    );
    return { kind: 'ok', radar: withoutNsfw(radar) };
  } catch (error) {
    if (isApiError(error) && error.status === 404)
      return buildId === undefined ? { kind: 'empty' } : { kind: 'not-found' };
    console.error('[web] patch radar failed', error);
    return { kind: 'error' };
  }
}

/** Radar of the current build. */
export function loadCurrentRadar(): Promise<RadarResult> {
  return radarFor(undefined);
}

/** Radar of the build addressed by `segment` (slug of its label, or its numeric id). */
export async function loadBuildRadar(segment: string): Promise<RadarResult> {
  let builds: GameBuild[];
  try {
    builds = (await serverApi().compat.gameBuilds(undefined, { signal: AbortSignal.timeout(RADAR_TIMEOUT_MS) })).items;
  } catch (error) {
    console.error('[web] game builds failed', error);
    return { kind: 'error' };
  }
  const wanted = buildSlug(segment);
  const build =
    builds.find((candidate) => buildSlug(candidate.label) === wanted) ??
    (/^\d+$/.test(segment) ? builds.find((candidate) => candidate.id === Number(segment)) : undefined);
  if (!build) return { kind: 'not-found' };
  const canonical = buildPath(build);
  if (build.isCurrent || canonical !== `/patch-radar/${segment}`) return { kind: 'redirect', path: canonical };
  return radarFor(build.id);
}

/** Most recent `updatedAt` of the ecosystem entries (the radar's «last change»), or the release date. */
export function radarModified(radar: PatchRadar): string {
  let latest = radar.build.releasedAt;
  for (const entry of radar.ecosystem) if (entry.updatedAt > latest) latest = entry.updatedAt;
  return latest;
}
