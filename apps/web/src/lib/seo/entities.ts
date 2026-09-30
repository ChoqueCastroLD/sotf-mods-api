/**
 * Entity lookup of the per-entity machine endpoints (`.md`, `/feed.xml`, `/embed`, `/oembed`):
 * route parameters come from the raw path (legacy slugs carry `'`, `(`, `)`, `+` and spaces) and go
 * through the canonical resolver (`GET /api/v2/resolve`, PLAN §4.6), so renamed slugs, owner
 * changes and case differences 301 to the canonical URL and tombstones answer 410.
 */
import type { ModKind } from '@sotf/contracts/common';
import { modPath, profilePath } from '@sotf/contracts/seo';
import { serverApi } from '../api.ts';

export type Lookup =
  | { status: 200; id: number; kind: ModKind | 'user'; canonicalPath: string }
  | { status: 301; canonicalPath: string; id: number | null; kind: string | null }
  | { status: 404 }
  | { status: 410 };

function decodeSegment(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Decoded path segments of the request (`/mods/a/b.md` → `['mods','a','b.md']`). The locale prefix
 * is already gone (server entry).
 */
export function rawSegments(url: URL): string[] {
  return url.pathname
    .split('/')
    .filter((segment) => segment.length > 0)
    .map(decodeSegment);
}

/** Strips a machine suffix (`.md`, `.json`) from the last segment. */
export function stripSuffix(segment: string, suffix: string): string {
  return segment.endsWith(suffix) ? segment.slice(0, -suffix.length) : segment;
}

/** Resolves `/{mods|builds}/:user/:slug`. */
export async function lookupMod(prefix: 'mods' | 'builds', user: string, slug: string): Promise<Lookup> {
  const path = modPath(prefix === 'builds' ? 'build' : 'mod', user, slug);
  const resolved = await serverApi().seo.resolve({ query: { path } });
  if (resolved.status === 404 || resolved.status === 410) return { status: resolved.status };
  if (resolved.kind !== 'mod' && resolved.kind !== 'build') return { status: 404 };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { status: 404 };
    return { status: 301, canonicalPath: resolved.canonicalPath, id: resolved.id, kind: resolved.kind };
  }
  if (resolved.id === null) return { status: 404 };
  return { status: 200, id: resolved.id, kind: resolved.kind, canonicalPath: resolved.canonicalPath ?? path };
}

/** Resolves `/profile/:handle`. */
export async function lookupProfile(handle: string): Promise<Lookup> {
  const path = profilePath(handle);
  const resolved = await serverApi().seo.resolve({ query: { path } });
  if (resolved.status === 404 || resolved.status === 410) return { status: resolved.status };
  if (resolved.kind !== 'user') return { status: 404 };
  if (resolved.status === 301) {
    if (!resolved.canonicalPath) return { status: 404 };
    return { status: 301, canonicalPath: resolved.canonicalPath, id: resolved.id, kind: resolved.kind };
  }
  if (resolved.id === null) return { status: 404 };
  return { status: 200, id: resolved.id, kind: 'user', canonicalPath: resolved.canonicalPath ?? path };
}

/** Handle of a canonical profile path (`/profile/imaxel` → `imaxel`). */
export function handleOf(canonicalPath: string): string {
  return decodeSegment(canonicalPath.split('/').filter(Boolean)[1] ?? '');
}

/** `/builds/u/s` → `/mods/u/s` (per-mod feeds live under `/mods` for every kind). */
export function underMods(canonicalPath: string): string {
  return canonicalPath.replace(/^\/builds\//, '/mods/');
}
