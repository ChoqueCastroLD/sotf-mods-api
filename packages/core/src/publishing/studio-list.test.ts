import type { StudioModRowDTO } from '@sotf/contracts/studio';
import { describe, expect, it } from 'vitest';
import { refineStudioMods } from './studio.ts';

function row(
  id: number,
  name: string,
  over: { status?: string; category?: string; downloads7d?: number; rating?: number | null; unanswered?: number } = {},
): StudioModRowDTO {
  return {
    mod: {
      id,
      name,
      status: over.status ?? 'published',
      downloads: id * 10,
      ratingAvg: over.rating ?? null,
      ratingCount: over.rating ? 3 : 0,
      category: over.category
        ? { slug: over.category, nameKey: `taxonomy_category_${over.category}`, name: over.category }
        : null,
    },
    statusReason: null,
    downloads7d: over.downloads7d ?? 0,
    openCompatReports: 0,
    unansweredComments: over.unanswered ?? 0,
    unansweredReviews: 0,
    qualityScore: 0,
  } as unknown as StudioModRowDTO;
}

const ROWS = [
  row(1, 'Zipline', { category: 'tools', downloads7d: 5, rating: 4 }),
  row(2, 'Ammo UI', { category: 'ui', downloads7d: 50, unanswered: 4 }),
  row(3, 'ammo pouch', { category: 'tools', status: 'pending', downloads7d: 20, rating: 5 }),
  row(4, 'Backpack', { category: 'ui', status: 'rejected' }),
];

describe('refineStudioMods', () => {
  it('returns every row, unpaginated, without page or page size', () => {
    const result = refineStudioMods(ROWS, {});
    expect(result.items.map((r) => r.mod.id)).toEqual([1, 2, 3, 4]);
    expect(result.total).toBeUndefined();
  });

  it('searches the name, filters by status and category', () => {
    expect(refineStudioMods(ROWS, { q: 'AMMO' }).items.map((r) => r.mod.id)).toEqual([2, 3]);
    expect(refineStudioMods(ROWS, { status: 'pending' }).items.map((r) => r.mod.id)).toEqual([3]);
    expect(refineStudioMods(ROWS, { category: 'ui' }).items.map((r) => r.mod.id)).toEqual([2, 4]);
    expect(refineStudioMods(ROWS, { q: 'ammo', category: 'tools' }).items.map((r) => r.mod.id)).toEqual([3]);
  });

  it('sorts by downloads, name, rating and what needs attention', () => {
    const ids = (sort: 'downloads' | 'name' | 'rating' | 'attention') =>
      refineStudioMods(ROWS, { sort }).items.map((r) => r.mod.id);
    expect(ids('downloads')).toEqual([2, 3, 1, 4]);
    expect(ids('name')).toEqual([3, 2, 4, 1]);
    expect(ids('rating')).toEqual([3, 1, 2, 4]);
    expect(ids('attention')).toEqual([4, 2, 1, 3]);
  });

  it('paginates and reports the totals and facets of the unfiltered list', () => {
    const page = refineStudioMods(ROWS, { sort: 'name', page: 2, pageSize: 3, category: 'ui' });
    // A page past the end clamps to the last one.
    expect(page.items.map((r) => r.mod.id)).toEqual([2, 4]);
    expect(page.total).toBe(2);
    expect(page.totalPages).toBe(1);
    expect(page.page).toBe(1);
    const first = refineStudioMods(ROWS, { sort: 'name', page: 2, pageSize: 3 });
    expect(first.items.map((r) => r.mod.id)).toEqual([1]);
    expect(first.facets?.status).toEqual({ published: 2, pending: 1, rejected: 1 });
    expect(first.facets?.categories.map((c) => [c.slug, c.count])).toEqual([
      ['tools', 2],
      ['ui', 2],
    ]);
  });
});
