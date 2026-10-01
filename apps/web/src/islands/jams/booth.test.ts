import { describe, expect, it } from 'vitest';
import { averageOf, parseBoothEntries, progressOf, shuffleFor } from './booth.ts';
import type { JamState } from './store.ts';

const state = (votes: JamState['votes']): JamState => ({
  following: false,
  eligibility: { canVote: true, reason: null },
  myEntryIds: [],
  votes,
});

describe('shuffleFor', () => {
  const items = Array.from({ length: 12 }, (_, i) => i);

  it('gives the same order to the same voter and keeps every entry', () => {
    expect(shuffleFor(items, 42)).toEqual(shuffleFor(items, 42));
    expect([...shuffleFor(items, 42)].sort((a, b) => a - b)).toEqual(items);
  });

  it('gives different voters different orders', () => {
    expect(shuffleFor(items, 1)).not.toEqual(shuffleFor(items, 2));
  });
});

describe('progress', () => {
  const votes = [
    { entryId: 1, categoryId: 10, score: 4 },
    { entryId: 1, categoryId: 11, score: 5 },
    { entryId: 2, categoryId: 10, score: 3 },
  ];

  it('tells todo, partial and done apart', () => {
    expect(progressOf(state(votes), 3, 2)).toBe('todo');
    expect(progressOf(state(votes), 2, 2)).toBe('partial');
    expect(progressOf(state(votes), 1, 2)).toBe('done');
  });

  it('averages the own stars of an entry', () => {
    expect(averageOf(state(votes), 1)).toBe(4.5);
    expect(averageOf(state(votes), 3)).toBeNull();
  });
});

describe('parseBoothEntries', () => {
  it('keeps well-formed entries and ignores the rest', () => {
    const raw = JSON.stringify([
      { id: 1, name: 'A', path: '/mods/a', thumb: null, blurb: 'x', authors: ['u'] },
      { id: 'x' },
    ]);
    expect(parseBoothEntries(raw)).toEqual([
      { id: 1, name: 'A', path: '/mods/a', thumb: null, blurb: 'x', authors: ['u'] },
    ]);
    expect(parseBoothEntries('not json')).toEqual([]);
    expect(parseBoothEntries(undefined)).toEqual([]);
  });
});
