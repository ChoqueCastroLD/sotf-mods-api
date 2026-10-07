import type { StudioOverviewDTO } from '@sotf/contracts/studio';
import { describe, expect, it } from 'vitest';
import type { z } from 'zod';
import { attentionOf, type ModFacts, sortAttention } from './studio-overview.ts';

type Item = z.infer<typeof StudioOverviewDTO>['needsAttention'][number];

const ref = (id: number, name: string) =>
  ({
    id,
    name,
    kind: 'mod',
    slug: name,
    userHandle: 'u',
    canonicalPath: `/mods/u/${name}`,
    status: 'published',
  }) as unknown as Item['mod'];

function facts(over: Partial<Record<keyof ModFacts, string | number | null>>): ModFacts {
  return {
    id: 1,
    type: 'Mod',
    status: 'published',
    statusReason: null,
    qualityScore: null,
    sourceUrl: 'https://github.com/x/y',
    platform: null,
    license: null,
    descLength: '100',
    gallery: '3',
    tags: '1',
    d7: '0',
    total: '0',
    openCompat: '0',
    brokenCurrent: '0',
    unansweredComments: '0',
    recentQuestions: '0',
    unansweredReviews: '0',
    ...over,
  } as unknown as ModFacts;
}

describe('attentionOf', () => {
  it('lists unanswered questions and reviews, a missing source link and a thin gallery', () => {
    const found = attentionOf(
      facts({ recentQuestions: 2, unansweredReviews: 1, sourceUrl: null, gallery: '1' }),
      ref(1, 'a'),
    );
    expect(found.map((item) => [item.kind, item.count])).toEqual([
      ['unanswered_questions', 2],
      ['unanswered_reviews', 1],
      ['missing_source', 1],
      ['missing_gallery', 2],
    ]);
  });

  it('no longer lists breakage reports (compatibility reports left the UI)', () => {
    expect(attentionOf(facts({ brokenCurrent: 3 }), ref(1, 'a'))).toEqual([]);
  });

  it('only flags a rejected listing for a rejected mod and nothing for a removed one', () => {
    expect(attentionOf(facts({ status: 'rejected' }), ref(1, 'a')).map((item) => item.kind)).toEqual(['rejected']);
    expect(attentionOf(facts({ status: 'removed', recentQuestions: 4 }), ref(1, 'a'))).toEqual([]);
  });
});

describe('sortAttention', () => {
  const items: Item[] = [
    { kind: 'missing_gallery', mod: ref(1, 'Zed'), count: 2 },
    { kind: 'unanswered_questions', mod: ref(2, 'Alpha'), count: 1 },
    { kind: 'rejected', mod: ref(3, 'Mid'), count: 1 },
    { kind: 'unanswered_questions', mod: ref(4, 'Beta'), count: 7 },
  ];

  it('orders by urgency, then count, then name', () => {
    expect(sortAttention(items).map((item) => item.mod.id)).toEqual([3, 4, 2, 1]);
  });

  it('orders by count or by mod name on request', () => {
    expect(sortAttention(items, 'count').map((item) => item.mod.id)).toEqual([4, 1, 3, 2]);
    expect(sortAttention(items, 'name').map((item) => item.mod.id)).toEqual([2, 4, 3, 1]);
  });
});
