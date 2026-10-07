import { ModListQuery } from '@sotf/contracts/catalog';
import { describe, expect, it } from 'vitest';
import { assertReachable } from './detail.ts';
import { runListQuery, sortEntries } from './listing.ts';
import { relatedEntries } from './related.ts';
import type { AuthorInfo, CatalogEntry, CatalogSnapshot, CategoryInfo, TagInfo } from './snapshot.ts';
import { wordsOf } from './snapshot.ts';

const NOW = new Date('2026-09-29T12:00:00.000Z');
const day = (n: number) => new Date(NOW.getTime() - n * 86_400_000);

function category(id: number, slug: string, extra: Partial<CategoryInfo> = {}): CategoryInfo {
  return {
    id,
    slug,
    kind: 'mod',
    name: slug,
    names: {},
    icon: null,
    sortOrder: id,
    legacySlugs: [],
    retired: false,
    ogImageKey: null,
    effectiveId: id,
    ref: { slug, nameKey: `taxonomy_category_${slug}`, name: slug, icon: null },
    ...extra,
  };
}

let nextId = 1;
function entry(extra: Partial<CatalogEntry> = {}): CatalogEntry {
  const id = extra.id ?? nextId++;
  const base = {
    id,
    kind: 'mod' as const,
    manifestId: `M${id}`,
    name: `Mod ${id}`,
    slug: `mod-${id}`,
    userId: 1,
    userHandle: 'alice',
    status: 'published' as const,
    nsfw: false,
    categoryId: 1,
    tagIds: [] as number[],
    tagSlugs: [] as string[],
    shortDescription: '',
    downloads: 0,
    downloads7d: 0,
    followers: 0,
    commentsCount: 0,
    ratingAvg: null,
    ratingCount: 0,
    ratingBayes: 4,
    trendingScore: 0,
    compatStatus: 'untested' as const,
    multiplayerRole: null,
    platform: null,
    dedicatedServer: null,
    hasSource: false,
    verifiedCreator: false,
    isFeatured: false,
    lastReleasedAt: day(10),
    publishedAt: day(100),
    createdAt: day(100),
    latestVersion: '1.0.0',
    latestChecks: 'passed',
    canonicalPath: `/mods/alice/mod-${id}`,
    thumbnail: null,
    thumb64Url: null,
    ...extra,
  };
  return {
    ...base,
    words: extra.words ?? wordsOf(`${base.name} ${base.shortDescription}`),
    card: { id } as never,
    ref: { id } as never,
  };
}

function snapshotOf(entries: CatalogEntry[]): CatalogSnapshot {
  const categories = new Map<number, CategoryInfo>([
    [1, category(1, 'quality-of-life', { legacySlugs: ['qol'] })],
    [2, category(2, 'gameplay')],
    [3, category(3, 'library')],
    [9, category(9, 'qol', { retired: true, effectiveId: 1 })],
  ]);
  const bySlug = new Map<string, CategoryInfo>();
  for (const c of categories.values()) bySlug.set(c.slug, categories.get(c.effectiveId) ?? c);
  bySlug.set('qol', categories.get(1) as CategoryInfo);
  const tags = new Map<number, TagInfo>(
    ['inventory', 'storage', 'cheats'].map((slug, i) => [
      i + 1,
      { id: i + 1, slug, name: slug, names: {}, group: null, isCurated: true, sortOrder: i },
    ]),
  );
  const author = (hidden: boolean): AuthorInfo => ({
    ref: {} as never,
    privacy: { hideActivity: false, hideRank: false, hideKits: false, hideFromLeaderboards: false },
    followersCount: 0,
    ratingAvg: null,
    hidden,
  });
  return {
    loadedAt: NOW,
    entries,
    byId: new Map(entries.map((e) => [e.id, e])),
    byManifestId: new Map(entries.map((e) => [e.manifestId, e])),
    byHandleSlug: new Map(entries.map((e) => [`${e.userHandle}\n${e.slug}`, e])),
    categories,
    categoriesBySlug: bySlug,
    tags,
    tagsBySlug: new Map([...tags.values()].map((t) => [t.slug, t])),
    authors: new Map([
      [1, author(false)],
      [2, author(true)],
    ]),
  };
}

const query = (input: Record<string, unknown> = {}) => ModListQuery.parse(input);
const ids = (list: CatalogEntry[]) => list.map((e) => e.id);

const catalog = [
  entry({
    id: 1,
    kind: 'mod',
    downloads: 500,
    tagIds: [1, 2],
    tagSlugs: ['inventory', 'storage'],
    platform: 'Client',
    compatStatus: 'works',
  }),
  entry({ id: 2, kind: 'library', categoryId: 3, downloads: 900, platform: 'Universal' }),
  entry({ id: 3, kind: 'build', categoryId: null, downloads: 50 }),
  entry({
    id: 4,
    kind: 'mod',
    categoryId: 2,
    downloads: 300,
    tagIds: [1],
    tagSlugs: ['inventory'],
    multiplayerRole: 'host_only',
  }),
  entry({ id: 5, kind: 'mod', status: 'pending', downloads: 10_000 }),
  entry({ id: 6, kind: 'mod', nsfw: true, downloads: 700, tagIds: [3], tagSlugs: ['cheats'] }),
  entry({ id: 7, kind: 'mod', userId: 2, downloads: 800 }),
  entry({ id: 8, kind: 'mod', status: 'unlisted', downloads: 800 }),
];
const snapshot = snapshotOf(catalog);

describe('Explore listing', () => {
  it('lists only published, non-NSFW items of visible authors', () => {
    const r = runListQuery(snapshot, query({ sort: 'downloads' }), NOW);
    expect(ids(r.items)).toEqual([2, 1, 4, 3]);
    expect(r.total).toBe(4);
    expect(r.totalPages).toBe(1);
  });

  it('includes NSFW only with nsfw=1', () => {
    expect(ids(runListQuery(snapshot, query({ sort: 'downloads', nsfw: '1' }), NOW).items)).toEqual([2, 6, 1, 4, 3]);
  });

  it('filters by type; libraries appear in type=library and all', () => {
    expect(ids(runListQuery(snapshot, query({ type: 'library' }), NOW).items)).toEqual([2]);
    expect(ids(runListQuery(snapshot, query({ type: 'all' }), NOW).items)).toContain(2);
    expect(ids(runListQuery(snapshot, query({ type: 'mod', sort: 'downloads' }), NOW).items)).toEqual([1, 4]);
  });

  it('resolves legacy category slugs and supports exclusion', () => {
    expect(ids(runListQuery(snapshot, query({ category: 'qol' }), NOW).items)).toEqual([1]);
    expect(
      ids(runListQuery(snapshot, query({ category: ['quality-of-life', 'gameplay'], sort: 'downloads' }), NOW).items),
    ).toEqual([1, 4]);
    expect(ids(runListQuery(snapshot, query({ excludeCategory: 'gameplay', sort: 'downloads' }), NOW).items)).toEqual([
      2, 1, 3,
    ]);
    expect(runListQuery(snapshot, query({ category: 'does-not-exist' }), NOW).total).toBe(0);
  });

  it('tags are AND, excluded tags always apply', () => {
    expect(ids(runListQuery(snapshot, query({ tag: 'inventory', sort: 'downloads' }), NOW).items)).toEqual([1, 4]);
    expect(ids(runListQuery(snapshot, query({ tag: ['inventory', 'storage'] }), NOW).items)).toEqual([1]);
    expect(ids(runListQuery(snapshot, query({ excludeTag: 'storage', type: 'mod' }), NOW).items)).toEqual([4]);
  });

  it('applies compat, platform, multiplayer, rating and freshness filters', () => {
    expect(ids(runListQuery(snapshot, query({ compat: 'works' }), NOW).items)).toEqual([1]);
    expect(ids(runListQuery(snapshot, query({ platform: 'Universal' }), NOW).items)).toEqual([2]);
    expect(ids(runListQuery(snapshot, query({ multiplayer: 'host_only' }), NOW).items)).toEqual([4]);
    // Several roles are OR (the /best/multiplayer-mods hub in one read); unknown roles are a 422.
    expect(ids(runListQuery(snapshot, query({ multiplayer: ['host_only', 'all_players'] }), NOW).items)).toEqual([4]);
    expect(runListQuery(snapshot, query({ multiplayer: ['client_side', 'all_players'] }), NOW).total).toBe(0);
    expect(ModListQuery.safeParse({ multiplayer: ['host_only', 'nope'] }).success).toBe(false);
    expect(runListQuery(snapshot, query({ minRating: '4' }), NOW).total).toBe(0);
    expect(runListQuery(snapshot, query({ updatedWithin: '30d' }), NOW).total).toBe(4);
  });

  it('computes disjunctive facets with exclusions applied', () => {
    const r = runListQuery(snapshot, query({ type: 'mod', category: 'gameplay', facets: '1' }), NOW);
    expect(ids(r.items)).toEqual([4]);
    // The kind facet ignores the type filter; the category facet ignores the category filter.
    expect(r.facets?.kind).toEqual([{ value: 'mod', count: 1 }]);
    expect(r.facets?.category).toEqual([
      { value: 'quality-of-life', count: 1 },
      { value: 'gameplay', count: 1 },
    ]);
    // Tag counts are refinements of the current result.
    expect(r.facets?.tag).toEqual([{ value: 'inventory', count: 1 }]);
    const all = runListQuery(snapshot, query({ type: 'all', facets: '1' }), NOW);
    expect(all.facets?.kind).toEqual([
      { value: 'mod', count: 2 },
      { value: 'library', count: 1 },
      { value: 'build', count: 1 },
    ]);
    expect(all.facets?.compat).toEqual([
      { value: 'works', count: 1 },
      { value: 'untested', count: 3 },
    ]);
  });

  it('counts freshness and rating facets ignoring their own filter', () => {
    const rated = snapshotOf([
      entry({ id: 21, ratingAvg: 4.6, ratingCount: 5, lastReleasedAt: day(5) }),
      entry({ id: 22, ratingAvg: 3.2, ratingCount: 3, lastReleasedAt: day(60) }),
      entry({ id: 23, ratingAvg: null, lastReleasedAt: day(200) }),
      entry({ id: 24, ratingAvg: 5, ratingCount: 9, lastReleasedAt: day(800) }),
    ]);
    const r = runListQuery(rated, query({ type: 'mod', facets: '1', updatedWithin: '30d', minRating: '4' }), NOW);
    expect(ids(r.items)).toEqual([21]);
    // updatedWithin counts ignore the freshness filter but keep minRating ≥ 4 (ids 21, 24).
    expect(r.facets?.updatedWithin).toEqual([
      { value: '30d', count: 1 },
      { value: '90d', count: 1 },
      { value: '1y', count: 1 },
    ]);
    // minRating counts ignore the rating filter but keep the 30-day window (id 21 only).
    expect(r.facets?.minRating).toEqual([
      { value: '1', count: 1 },
      { value: '2', count: 1 },
      { value: '3', count: 1 },
      { value: '4', count: 1 },
    ]);
    const all = runListQuery(rated, query({ type: 'mod', facets: '1' }), NOW);
    expect(all.facets?.updatedWithin).toEqual([
      { value: '30d', count: 1 },
      { value: '90d', count: 2 },
      { value: '1y', count: 3 },
    ]);
    expect(all.facets?.minRating).toEqual([
      { value: '1', count: 3 },
      { value: '2', count: 3 },
      { value: '3', count: 3 },
      { value: '4', count: 2 },
      { value: '5', count: 1 },
    ]);
  });

  it('paginates', () => {
    const r = runListQuery(snapshot, query({ sort: 'downloads', pageSize: '3', page: '2' }), NOW);
    expect(ids(r.items)).toEqual([3]);
    expect(r).toMatchObject({ page: 2, pageSize: 3, total: 4, totalPages: 2 });
  });

  it('sorts by relevance when given scores, ascending when asked', () => {
    const relevance = new Map([
      [4, 0.9],
      [1, 0.5],
    ]);
    expect(ids(runListQuery(snapshot, query({ sort: 'relevance' }), NOW, relevance).items)).toEqual([4, 1]);
    expect(ids(sortEntries([...catalog.slice(0, 4)], 'downloads', 'asc', undefined))).toEqual([3, 4, 1, 2]);
  });
});

describe('name sort and minimum downloads', () => {
  const named = [
    entry({ id: 21, name: 'zeta' }),
    entry({ id: 22, name: 'Alpha 10' }),
    entry({ id: 23, name: 'alpha 2' }),
    entry({ id: 24, name: 'Émile' }),
  ];
  it('sorts names A to Z (natural digits, no case or accents) and reverses with desc', () => {
    expect(ids(sortEntries([...named], 'name', 'asc', undefined))).toEqual([23, 22, 24, 21]);
    expect(ids(sortEntries([...named], 'name', 'desc', undefined))).toEqual([21, 24, 22, 23]);
  });

  it('keeps items with at least the minimum downloads', () => {
    const r = runListQuery(snapshot, query({ type: 'all', minDownloads: '500', sort: 'downloads' }), NOW);
    expect(ids(r.items)).toEqual([2, 1]);
  });
});

describe('Unapproved listing', () => {
  const pendingCatalog = [
    entry({ id: 1, status: 'published', downloads: 100 }),
    entry({ id: 2, status: 'pending', latestChecks: 'passed', downloads: 5, downloads7d: 3 }),
    entry({ id: 3, status: 'pending', latestChecks: 'passed', downloads: 9, downloads7d: 1 }),
    entry({ id: 4, status: 'pending', latestChecks: 'failed', downloads: 50 }),
    entry({ id: 5, status: 'pending', latestChecks: null, downloads: 50 }),
    entry({ id: 6, status: 'pending', latestChecks: 'passed', nsfw: true, downloads: 7 }),
    entry({ id: 7, status: 'pending', latestChecks: 'passed', userId: 2, downloads: 7 }),
    entry({ id: 8, status: 'rejected', latestChecks: 'passed', downloads: 7 }),
    entry({ id: 9, status: 'unlisted', latestChecks: 'passed', downloads: 7 }),
  ];
  const pendingSnapshot = snapshotOf(pendingCatalog);

  it('never mixes pending mods into the default listing', () => {
    expect(ids(runListQuery(pendingSnapshot, query({ type: 'all' }), NOW).items)).toEqual([1]);
  });

  it('lists only pending mods whose checks passed, from visible authors, without NSFW', () => {
    const r = runListQuery(pendingSnapshot, query({ type: 'all', unapproved: '1', sort: 'downloads' }), NOW);
    expect(ids(r.items)).toEqual([3, 2]);
    expect(r.total).toBe(2);
  });

  it('applies the same visibility rule as the mod page (reachable by URL)', () => {
    const reachable = pendingCatalog.filter((e) => {
      try {
        assertReachable(pendingSnapshot, e);
        return e.status === 'pending';
      } catch {
        return false;
      }
    });
    const listed = runListQuery(pendingSnapshot, query({ type: 'all', unapproved: '1', nsfw: '1' }), NOW).items;
    // NSFW opt-in adds the NSFW one; hidden authors stay out of both.
    expect(ids(listed).sort()).toEqual([2, 3, 6]);
    expect(
      ids(reachable)
        .filter((id) => id !== 7)
        .sort(),
    ).toEqual([2, 3, 6]);
  });

  it('keeps filters, facets and sorts working', () => {
    const r = runListQuery(pendingSnapshot, query({ type: 'all', unapproved: 'true', sort: 'week', facets: '1' }), NOW);
    expect(ids(r.items)).toEqual([2, 3]);
    expect(r.facets?.category).toEqual([{ value: 'quality-of-life', count: 2 }]);
    expect(
      runListQuery(pendingSnapshot, query({ type: 'all', unapproved: '1', category: 'gameplay' }), NOW).total,
    ).toBe(0);
  });

  it('parses the flag like the other flags', () => {
    expect(query({}).unapproved).toBeUndefined();
    expect(query({ unapproved: '1' }).unapproved).toBe(true);
    expect(query({ unapproved: '0' }).unapproved).toBe(false);
  });
});

describe('week sort', () => {
  it('orders by downloads of the last 7 days, then all-time downloads', () => {
    const list = [
      entry({ id: 1, downloads: 1000, downloads7d: 5 }),
      entry({ id: 2, downloads: 10, downloads7d: 50 }),
      entry({ id: 3, downloads: 500, downloads7d: 5 }),
    ];
    expect(ids(runListQuery(snapshotOf(list), query({ sort: 'week' }), NOW).items)).toEqual([2, 1, 3]);
  });
});

describe('related mods', () => {
  it('prefers shared tags and similar words within the same family', () => {
    const list = [
      entry({
        id: 20,
        name: 'Stack Mod',
        shortDescription: 'bigger stacks in the inventory',
        tagIds: [1],
        tagSlugs: ['inventory'],
      }),
      entry({
        id: 21,
        name: 'Custom Stacks',
        shortDescription: 'configure stacks',
        tagIds: [1],
        tagSlugs: ['inventory'],
      }),
      entry({ id: 22, name: 'Unrelated', categoryId: 2 }),
      entry({ id: 23, kind: 'build', name: 'Stack house', tagIds: [1], tagSlugs: ['inventory'] }),
    ];
    const snap = snapshotOf(list);
    expect(ids(relatedEntries(snap, list[0] as CatalogEntry))).toEqual([21]);
  });
});
