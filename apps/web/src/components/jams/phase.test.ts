import type { JamSummaryDTO } from '@sotf/contracts/jams';
import { describe, expect, it } from 'vitest';
import { jamArtName, pickFeatured, seasonOfMonth, stageStates } from './phase.ts';

const base = {
  slug: 'a-jam',
  title: 'A Jam',
  theme: null,
  announceAt: null,
  submissionsOpenAt: null,
  votingOpenAt: null,
  phase: 'announced',
} as const;

describe('jamArtName', () => {
  it('prefers the season named in the slug, title or theme', () => {
    expect(jamArtName({ ...base, slug: 'winter-jam-2026' })).toBe('winter');
    expect(jamArtName({ ...base, title: 'Summer Mod Jam' })).toBe('summer');
    expect(jamArtName({ ...base, theme: 'Lost in the autumn fog' })).toBe('autumn');
    expect(jamArtName({ ...base, title: 'Waterfall Jam' })).toBe('generic');
  });

  it('falls back to the season of the schedule, then to the generic painting', () => {
    expect(jamArtName({ ...base, submissionsOpenAt: '2026-07-10T12:00:00.000Z' })).toBe('summer');
    expect(jamArtName({ ...base, announceAt: '2026-12-01T12:00:00.000Z' })).toBe('winter');
    expect(jamArtName(base)).toBe('generic');
  });

  it('maps every month to a season of the northern hemisphere', () => {
    expect([0, 2, 5, 8, 11].map(seasonOfMonth)).toEqual(['winter', 'spring', 'summer', 'autumn', 'winter']);
  });
});

describe('stageStates', () => {
  it('marks the stages before the current one as done', () => {
    expect(stageStates('announced')).toEqual(['current', 'upcoming', 'upcoming', 'upcoming']);
    expect(stageStates('submissions_closed')).toEqual(['done', 'current', 'upcoming', 'upcoming']);
    expect(stageStates('voting')).toEqual(['done', 'done', 'current', 'upcoming']);
    expect(stageStates('archived')).toEqual(['done', 'done', 'done', 'current']);
  });
});

describe('pickFeatured', () => {
  const jam = (id: number, phase: JamSummaryDTO['phase'], extra: Partial<JamSummaryDTO> = {}): JamSummaryDTO =>
    ({
      id,
      slug: `jam-${id}`,
      title: `Jam ${id}`,
      tagline: '',
      theme: null,
      themeHidden: false,
      bannerUrl: null,
      accent: 'signal',
      phase,
      entryCount: 0,
      announceAt: null,
      submissionsOpenAt: null,
      submissionsCloseAt: null,
      votingOpenAt: null,
      votingCloseAt: null,
      archiveAt: null,
      resultsPublishedAt: null,
      ogImageUrl: null,
      ...extra,
    }) as JamSummaryDTO;

  it('returns null without jams', () => {
    expect(pickFeatured([])).toBeNull();
  });

  it('features what is happening before what is coming or finished', () => {
    const items = [jam(1, 'archived'), jam(2, 'announced'), jam(3, 'voting'), jam(4, 'results')];
    expect(pickFeatured(items)?.id).toBe(3);
    expect(pickFeatured(items.filter((item) => item.id !== 3))?.id).toBe(2);
    expect(pickFeatured([jam(1, 'archived'), jam(4, 'results')])?.id).toBe(4);
  });

  it('picks the earliest milestone among jams in the same phase', () => {
    const later = jam(1, 'announced', { submissionsOpenAt: '2026-12-01T00:00:00.000Z' });
    const sooner = jam(2, 'announced', { submissionsOpenAt: '2026-11-01T00:00:00.000Z' });
    expect(pickFeatured([later, sooner])?.id).toBe(2);
  });
});
