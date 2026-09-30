import { KitCode, normalizeKitCode } from '@sotf/contracts/kits';
import { describe, expect, it } from 'vitest';
import {
  compatSummary,
  compatWorks,
  conflictPairs,
  type DependencyEdge,
  deletedSlug,
  diffItems,
  generateKitCode,
  kitNoindex,
  multiplayerSummary,
  type Resolver,
  resolveAutoDependencies,
  revisionSummary,
  type StoredItem,
  slugCandidate,
  slugFromName,
  totalBytes,
} from './rules.ts';

describe('share codes', () => {
  it('generates canonical Crockford codes that round-trip through normalizeKitCode', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 2000; i++) {
      const code = generateKitCode();
      expect(KitCode.safeParse(code).success).toBe(true);
      expect(normalizeKitCode(code)).toBe(code);
      expect(normalizeKitCode(code.slice(4).replace('-', '').toLowerCase())).toBe(code);
      seen.add(code);
    }
    // 2000 draws from 32^6 codes: a collision would be a broken generator.
    expect(seen.size).toBe(2000);
  });

  it('uses the random source for every character', () => {
    let n = 0;
    expect(generateKitCode(() => n++ % 32)).toBe('KIT-0123-45');
    expect(generateKitCode(() => 31)).toBe('KIT-ZZZZ-ZZ');
  });
});

describe('slugs', () => {
  it('derives ASCII slugs from names', () => {
    expect(slugFromName('Dédié Server Pack!')).toBe('dedie-server-pack');
    expect(slugFromName("  Kelvin's   Helpers -- v2 ")).toBe('kelvin-s-helpers-v2');
    expect(slugFromName('日本語')).toBe('kit');
    expect(slugFromName('a')).toBe('kit');
    const long = slugFromName(`${'word-'.repeat(30)}end`);
    expect(long.length).toBeLessThanOrEqual(80);
    expect(long.endsWith('-')).toBe(false);
  });

  it('numbers candidates within 80 characters', () => {
    expect(slugCandidate('pack', 1)).toBe('pack');
    expect(slugCandidate('pack', 2)).toBe('pack-2');
    const base = 'x'.repeat(80);
    expect(slugCandidate(base, 12)).toBe(`${'x'.repeat(77)}-12`);
    expect(deletedSlug('pack', 7)).toBe('pack~deleted-7');
  });
});

function resolver(
  graph: Record<number, DependencyEdge[]>,
  mods: Record<number, { manifestId: string; addable?: boolean }>,
  loaded: Set<number> = new Set(Object.keys(graph).map(Number)),
): Resolver {
  const byManifest = new Map(Object.entries(mods).map(([id, m]) => [m.manifestId, Number(id)]));
  return {
    find(edge) {
      const id = edge.depModId ?? byManifest.get(edge.depManifestId);
      if (id === undefined || !mods[id]) return undefined;
      return { id, manifestId: mods[id].manifestId, addable: mods[id].addable !== false };
    },
    edgesOf: (modId) => (loaded.has(modId) ? (graph[modId] ?? []) : undefined),
  };
}

const req = (depModId: number | null, depManifestId = ''): DependencyEdge => ({
  kind: 'required',
  depModId,
  depManifestId,
});

describe('automatic dependencies', () => {
  const mods = {
    1: { manifestId: 'Menu' },
    2: { manifestId: 'Lib' },
    3: { manifestId: 'Core' },
    4: { manifestId: 'Gone', addable: false },
    5: { manifestId: 'Other' },
  };

  it('adds required dependencies transitively, breadth-first, skipping present, missing and removed ones', () => {
    const graph = {
      1: [
        req(2),
        { kind: 'optional', depModId: 5, depManifestId: 'Other' } as DependencyEdge,
        req(4),
        req(null, 'Nope'),
      ],
      2: [req(null, 'Core'), req(1)],
      3: [],
      5: [req(3)],
    };
    expect(resolveAutoDependencies([1], resolver(graph, mods))).toEqual({ auto: [2, 3], unknown: [] });
    expect(resolveAutoDependencies([1, 3], resolver(graph, mods))).toEqual({ auto: [2], unknown: [] });
    expect(resolveAutoDependencies([5, 1], resolver(graph, mods))).toEqual({ auto: [3, 2], unknown: [] });
  });

  it('reports mods whose edges must still be loaded', () => {
    const graph = { 1: [req(2)], 2: [req(3)] };
    const partial = resolveAutoDependencies([1], resolver(graph, mods, new Set([1])));
    expect(partial).toEqual({ auto: [2], unknown: [2] });
    expect(resolveAutoDependencies([1], resolver(graph, mods, new Set([1, 2, 3])))).toEqual({
      auto: [2, 3],
      unknown: [],
    });
  });

  it('counts each conflicting pair once, by id or manifest, only between kit items', () => {
    const graph = {
      1: [{ kind: 'conflicts', depModId: null, depManifestId: 'Lib' } as DependencyEdge],
      2: [{ kind: 'conflicts', depModId: 1, depManifestId: 'Menu' } as DependencyEdge],
      3: [{ kind: 'conflicts', depModId: 5, depManifestId: 'Other' } as DependencyEdge],
    };
    expect(conflictPairs([1, 2, 3], resolver(graph, mods))).toEqual([[1, 2]]);
    expect(conflictPairs([1, 2, 3, 5], resolver(graph, mods))).toEqual([
      [1, 2],
      [3, 5],
    ]);
  });
});

describe('summaries', () => {
  it('summarises multiplayer roles', () => {
    expect(multiplayerSummary(['all_players', 'all_players', 'host_only', 'client_side', null, 'unknown'])).toEqual({
      allPlayers: 2,
      hostOnly: 1,
      clientSide: 1,
      singleplayerOnly: 0,
      unknown: 2,
    });
  });

  it('summarises compatibility (mixed is unverified) and the compat filter', () => {
    const summary = compatSummary(['works', 'works', 'mixed', 'untested', 'broken'], 0);
    expect(summary).toEqual({ works: 2, untested: 2, broken: 1, conflicts: 0 });
    expect(compatWorks(summary)).toBe(false);
    expect(compatWorks(compatSummary(['works', 'untested'], 0))).toBe(true);
    expect(compatWorks(compatSummary(['works'], 1))).toBe(false);
  });

  it('adds known sizes and flags indexable kits', () => {
    expect(totalBytes([10, null, 5])).toBe(15);
    expect(totalBytes([null, null])).toBeNull();
    expect(totalBytes([])).toBeNull();
    expect(kitNoindex('public', 3)).toBe(false);
    expect(kitNoindex('public', 2)).toBe(true);
    expect(kitNoindex('unlisted', 10)).toBe(true);
    expect(kitNoindex('private', 10)).toBe(true);
  });
});

describe('revisions', () => {
  const item = (modId: number, extra: Partial<StoredItem> = {}): StoredItem => ({
    modId,
    note: null,
    pinnedVersionId: null,
    isAutoDependency: false,
    ...extra,
  });
  const names: Record<number, string> = { 1: 'Cook Alert', 2: 'StackMod', 3: 'SonsAxLib' };
  const nameOf = (id: number) => names[id] ?? `#${id}`;

  it('diffs additions, removals, order and edits', () => {
    const before = [item(1), item(2), item(3, { isAutoDependency: true })];
    expect(diffItems(before, before).changed).toBe(false);
    const diff = diffItems(before, [item(2), item(1, { note: 'F1' }), item(4)]);
    expect(diff).toEqual({ added: [4], removed: [3], reordered: true, edited: [1], changed: true });
  });

  it('writes human summaries within 200 characters', () => {
    expect(revisionSummary(diffItems([item(2)], [item(2), item(1)]), nameOf)).toBe('+Cook Alert');
    expect(revisionSummary(diffItems([item(1), item(2)], [item(2)]), nameOf)).toBe('−Cook Alert');
    expect(revisionSummary(diffItems([item(1), item(2)], [item(2), item(1)]), nameOf)).toBe('Reordered');
    expect(revisionSummary(diffItems([item(1)], [item(1, { note: 'x' })]), nameOf)).toBe('Edited notes');
    expect(revisionSummary(diffItems([item(1), item(2)], [item(2, { note: 'x' }), item(1)]), nameOf)).toBe(
      'Reordered and edited notes',
    );
    const many = Array.from({ length: 60 }, (_, i) => item(100 + i));
    const long = revisionSummary(diffItems([], many), (id) => `Mod number ${id}`);
    expect(long.length).toBeLessThanOrEqual(200);
    expect(long).toMatch(/\+\d+ more$/);
    expect(revisionSummary(diffItems([], [item(9)]), () => 'x'.repeat(300)).length).toBe(200);
  });
});
