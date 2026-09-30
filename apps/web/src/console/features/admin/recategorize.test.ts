import { afterEach, describe, expect, it, vi } from 'vitest';

const currentTagsOf = vi.hoisted(() => vi.fn<(modId: number) => Promise<string[] | null>>());
vi.mock('./api.ts', () => ({ currentTagsOf }));

const { batches, mergeCsv, planChanges, rowsFromSuggestions } = await import('./recategorize.ts');

type Suggestion = Parameters<typeof rowsFromSuggestions>[0][number];

const suggestion = (id: number, currentTags: string[], suggestedTags: string[] = ['ui']): Suggestion =>
  ({
    mod: { id, name: `Mod ${id}`, manifestId: `Mod${id}` },
    currentCategory: 'qol',
    suggestedCategory: 'quality-of-life',
    suggestedTags,
    currentTags,
    confidence: 0.8,
    reason: 'keywords',
  }) as unknown as Suggestion;

afterEach(() => currentTagsOf.mockReset());

describe('planChanges', () => {
  it('adds chosen tags to the current tags the suggestion carries (no extra reads)', async () => {
    const rows = rowsFromSuggestions([suggestion(1, ['inventory'])]);
    const plan = await planChanges(rows, true);
    expect(plan).toEqual({
      changes: [{ modId: 1, categorySlug: 'quality-of-life', tagSlugs: ['inventory', 'ui'] }],
      tagsSkipped: 0,
    });
    expect(currentTagsOf).not.toHaveBeenCalled();
  });

  it('sends no tags when nothing new would be added or tags are off', async () => {
    const rows = rowsFromSuggestions([suggestion(1, ['ui'])]);
    expect((await planChanges(rows, true)).changes).toEqual([{ modId: 1, categorySlug: 'quality-of-life' }]);
    const other = rowsFromSuggestions([suggestion(2, [])]);
    expect((await planChanges(other, false)).changes).toEqual([{ modId: 2, categorySlug: 'quality-of-life' }]);
  });

  it('never drops existing tags: a full tag set skips the addition', async () => {
    const rows = rowsFromSuggestions([suggestion(1, ['a', 'b', 'c', 'd', 'e'])]);
    expect(await planChanges(rows, true)).toEqual({
      changes: [{ modId: 1, categorySlug: 'quality-of-life' }],
      tagsSkipped: 1,
    });
  });

  it('reads the public tags only for CSV rows the API did not suggest', async () => {
    const merged = mergeCsv(
      [],
      [
        {
          line: 2,
          modId: 9,
          manifestId: null,
          name: 'Nine',
          currentCategory: 'misc',
          categorySlug: 'building',
          tagSlugs: ['walls'],
          confidence: null,
          reason: null,
        },
      ],
      new Set(['building']),
      new Set(['walls']),
    );
    currentTagsOf.mockResolvedValueOnce(['decor']);
    expect((await planChanges(merged.rows, true)).changes).toEqual([
      { modId: 9, categorySlug: 'building', tagSlugs: ['decor', 'walls'] },
    ]);
    currentTagsOf.mockResolvedValueOnce(null);
    expect(await planChanges(merged.rows, true)).toEqual({
      changes: [{ modId: 9, categorySlug: 'building' }],
      tagsSkipped: 1,
    });
  });
});

describe('mergeCsv', () => {
  const rows = rowsFromSuggestions([suggestion(1, ['inventory'])]);
  const categories = new Set(['quality-of-life', 'building']);
  const tags = new Set(['ui', 'walls']);
  const line = (overrides: Record<string, unknown>) => ({
    line: 2,
    modId: null,
    manifestId: null,
    name: null,
    currentCategory: null,
    categorySlug: 'building',
    tagSlugs: [],
    confidence: null,
    reason: null,
    ...overrides,
  });

  it('replaces the suggestion of a listed mod (matched by manifest id) and keeps its current tags', () => {
    const result = mergeCsv(rows, [line({ manifestId: 'mod1', tagSlugs: ['walls', 'nope'] })], categories, tags);
    expect(result).toMatchObject({ added: 0, updated: 1, droppedTags: 1, skipped: [] });
    expect(result.rows[0]).toMatchObject({
      modId: 1,
      category: 'building',
      tags: ['walls'],
      currentTags: ['inventory'],
      source: 'csv',
    });
  });

  it('skips unknown mods, unknown categories and duplicates', () => {
    const result = mergeCsv(
      rows,
      [
        line({ manifestId: 'Ghost' }),
        line({ line: 3, modId: 1, categorySlug: 'weapons' }),
        line({ line: 4, modId: 7 }),
        line({ line: 5, modId: 7 }),
      ],
      categories,
      tags,
    );
    expect(result.skipped).toEqual([
      { line: 2, reason: 'unknown-mod', value: 'Ghost' },
      { line: 3, reason: 'unknown-category', value: 'weapons' },
      { line: 5, reason: 'duplicate', value: '7' },
    ]);
    expect(result.added).toBe(1);
    expect(result.rows.map((row) => row.modId)).toEqual([1, 7]);
  });
});

describe('batches', () => {
  it('splits into chunks of the given size', () => {
    expect(batches([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(batches([], 2)).toEqual([]);
  });
});
