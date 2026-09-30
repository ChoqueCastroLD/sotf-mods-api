/**
 * Pure rules of Kits (PLAN §7.8): share codes, slugs, automatic dependencies, conflicts, the
 * multiplayer and compatibility summaries and revision summaries. No I/O: the service loads the
 * data and these functions decide.
 */
import { randomInt } from 'node:crypto';
import type { CompatStatus, MultiplayerRole } from '@sotf/contracts/common';
import { CROCKFORD_ALPHABET, KIT_LIMITS, type KitCode } from '@sotf/contracts/kits';

// -----------------------------------------------------------------------------------------------
// Codes and slugs
// -----------------------------------------------------------------------------------------------

/** A random share code `KIT-XXXX-XX` (Crockford base32, 32^6 ≈ 1.07 × 10^9 codes). */
export function generateKitCode(random: (max: number) => number = randomInt): KitCode {
  let raw = '';
  for (let i = 0; i < 6; i++) raw += CROCKFORD_ALPHABET[random(CROCKFORD_ALPHABET.length)];
  return `KIT-${raw.slice(0, 4)}-${raw.slice(4)}`;
}

/**
 * Slug derived from a kit name: lowercase ASCII letters, digits and single hyphens, 2–80
 * characters (accents are folded, everything else becomes a hyphen). Falls back to `kit`.
 */
export function slugFromName(name: string): string {
  const slug = name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
  return slug.length >= 2 ? slug : 'kit';
}

/** The n-th candidate of a derived slug: `name`, `name-2`, `name-3`… (always ≤ 80 characters). */
export function slugCandidate(base: string, attempt: number): string {
  if (attempt <= 1) return base;
  const suffix = `-${attempt}`;
  return `${base.slice(0, 80 - suffix.length).replace(/-+$/g, '')}${suffix}`;
}

/** Slug given to a soft-deleted kit so its owner can reuse the original slug. */
export function deletedSlug(slug: string, kitId: number): string {
  return `${slug}~deleted-${kitId}`;
}

// -----------------------------------------------------------------------------------------------
// Dependencies and conflicts
// -----------------------------------------------------------------------------------------------

export interface DependencyEdge {
  kind: 'required' | 'optional' | 'conflicts';
  depModId: number | null;
  depManifestId: string;
}

/** What the resolver knows about a candidate mod. */
export interface ResolverMod {
  id: number;
  manifestId: string;
  /** False for mods that cannot be added (removed, rejected, hidden author…). */
  addable: boolean;
}

export interface Resolver {
  /** A mod by id or, when the id is unknown, by manifest id. */
  find(edge: DependencyEdge): ResolverMod | undefined;
  /**
   * Dependency edges of the version a mod resolves to (pinned or latest); `undefined` while they
   * have not been loaded yet.
   */
  edgesOf(modId: number): readonly DependencyEdge[] | undefined;
}

export interface AutoDependencies {
  /** Mods to add as `auto`, in discovery order. */
  auto: number[];
  /** Mods reached whose edges are not loaded yet: load them and resolve again. */
  unknown: number[];
}

/**
 * Required dependencies of `explicit` that are not in it, transitively, in discovery order
 * (breadth-first, each level in the order of the items that need it). Unresolvable or
 * non-addable targets are skipped. The caller loads the edges of `unknown` and calls again until
 * nothing is unknown.
 */
export function resolveAutoDependencies(explicit: readonly number[], resolver: Resolver): AutoDependencies {
  const inKit = new Set(explicit);
  const auto: number[] = [];
  const unknown: number[] = [];
  let frontier = [...explicit];
  while (frontier.length > 0) {
    const next: number[] = [];
    for (const modId of frontier) {
      const edges = resolver.edgesOf(modId);
      if (edges === undefined) {
        unknown.push(modId);
        continue;
      }
      for (const edge of edges) {
        if (edge.kind !== 'required') continue;
        const target = resolver.find(edge);
        if (!target?.addable || inKit.has(target.id)) continue;
        inKit.add(target.id);
        auto.push(target.id);
        next.push(target.id);
      }
    }
    frontier = next;
  }
  return { auto, unknown };
}

/** Unordered pairs `[a, b]` (a < b) of kit mods where one declares a conflict with the other. */
export function conflictPairs(modIds: readonly number[], resolver: Resolver): Array<[number, number]> {
  const inKit = new Set(modIds);
  const seen = new Set<string>();
  const pairs: Array<[number, number]> = [];
  for (const modId of modIds) {
    for (const edge of resolver.edgesOf(modId) ?? []) {
      if (edge.kind !== 'conflicts') continue;
      const target = resolver.find(edge);
      if (!target || target.id === modId || !inKit.has(target.id)) continue;
      const pair: [number, number] = modId < target.id ? [modId, target.id] : [target.id, modId];
      const key = `${pair[0]}:${pair[1]}`;
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push(pair);
    }
  }
  return pairs;
}

// -----------------------------------------------------------------------------------------------
// Summaries
// -----------------------------------------------------------------------------------------------

export interface MultiplayerSummary {
  allPlayers: number;
  hostOnly: number;
  clientSide: number;
  singleplayerOnly: number;
  unknown: number;
}

/** «Every player needs 4 · Only the host 2» (T0-18). */
export function multiplayerSummary(roles: ReadonlyArray<MultiplayerRole | null>): MultiplayerSummary {
  const out: MultiplayerSummary = { allPlayers: 0, hostOnly: 0, clientSide: 0, singleplayerOnly: 0, unknown: 0 };
  for (const role of roles) {
    switch (role) {
      case 'all_players':
        out.allPlayers++;
        break;
      case 'host_only':
        out.hostOnly++;
        break;
      case 'client_side':
        out.clientSide++;
        break;
      case 'singleplayer_only':
        out.singleplayerOnly++;
        break;
      default:
        out.unknown++;
    }
  }
  return out;
}

export interface CompatSummary {
  works: number;
  untested: number;
  broken: number;
  conflicts: number;
}

/**
 * «✔ 11/12 · ⚠ 1 unverified · ✖ 0 conflicts» against the current build. `mixed` counts as
 * unverified (it is not a confirmed "works").
 */
export function compatSummary(statuses: readonly CompatStatus[], conflicts: number): CompatSummary {
  const out: CompatSummary = { works: 0, untested: 0, broken: 0, conflicts };
  for (const status of statuses) {
    if (status === 'works') out.works++;
    else if (status === 'broken') out.broken++;
    else out.untested++;
  }
  return out;
}

/** A kit passes the `compat=works` filter when nothing is broken and nothing conflicts. */
export function compatWorks(summary: CompatSummary): boolean {
  return summary.broken === 0 && summary.conflicts === 0;
}

/** Sum of the known file sizes (null when none is known). */
export function totalBytes(sizes: ReadonlyArray<number | null>): number | null {
  let known = false;
  let total = 0;
  for (const size of sizes) {
    if (size === null || !Number.isFinite(size) || size < 0) continue;
    known = true;
    total += size;
  }
  return known ? total : null;
}

/** True unless the kit is public with at least `KIT_LIMITS.indexMinItems` items (§7.8 SEO). */
export function kitNoindex(visibility: string, itemsCount: number): boolean {
  return !(visibility === 'public' && itemsCount >= KIT_LIMITS.indexMinItems);
}

// -----------------------------------------------------------------------------------------------
// Revisions
// -----------------------------------------------------------------------------------------------

export interface StoredItem {
  modId: number;
  note: string | null;
  pinnedVersionId: number | null;
  isAutoDependency: boolean;
}

export interface ItemsDiff {
  added: number[];
  removed: number[];
  /** Same mods, other order. */
  reordered: boolean;
  /** Notes, pins or auto flags changed on kept mods. */
  edited: number[];
  changed: boolean;
}

/** What a new item list changes with respect to the stored one (both in position order). */
export function diffItems(before: readonly StoredItem[], after: readonly StoredItem[]): ItemsDiff {
  const old = new Map(before.map((i) => [i.modId, i]));
  const next = new Map(after.map((i) => [i.modId, i]));
  const added = after.filter((i) => !old.has(i.modId)).map((i) => i.modId);
  const removed = before.filter((i) => !next.has(i.modId)).map((i) => i.modId);
  const edited = after
    .filter((i) => {
      const o = old.get(i.modId);
      return (
        o !== undefined &&
        (o.note !== i.note || o.pinnedVersionId !== i.pinnedVersionId || o.isAutoDependency !== i.isAutoDependency)
      );
    })
    .map((i) => i.modId);
  const keptBefore = before.filter((i) => next.has(i.modId)).map((i) => i.modId);
  const keptAfter = after.filter((i) => old.has(i.modId)).map((i) => i.modId);
  const reordered = keptBefore.some((id, index) => keptAfter[index] !== id);
  return {
    added,
    removed,
    reordered,
    edited,
    changed: added.length > 0 || removed.length > 0 || reordered || edited.length > 0,
  };
}

export const REVISION_SUMMARY_MAX = 200;

/**
 * Human summary of a revision («+Cook Alert, −StackMod»), in English like every stored system
 * text (the UI shows it verbatim; users can write their own with `revisionSummary`).
 */
export function revisionSummary(diff: ItemsDiff, nameOf: (modId: number) => string): string {
  const parts = [...diff.added.map((id) => `+${nameOf(id)}`), ...diff.removed.map((id) => `−${nameOf(id)}`)];
  if (parts.length === 0) {
    if (diff.reordered && diff.edited.length > 0) parts.push('Reordered and edited notes');
    else if (diff.reordered) parts.push('Reordered');
    else parts.push('Edited notes');
  }
  let text = '';
  for (const [index, part] of parts.entries()) {
    const next = index === 0 ? part : `${text}, ${part}`;
    if (next.length > REVISION_SUMMARY_MAX) {
      if (index === 0) return part.slice(0, REVISION_SUMMARY_MAX);
      const rest = parts.length - index;
      return `${text}, +${rest} more`.slice(0, REVISION_SUMMARY_MAX);
    }
    text = next;
  }
  return text;
}
