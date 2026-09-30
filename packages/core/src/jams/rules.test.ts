import { describe, expect, it } from 'vitest';
import {
  bayesian,
  computeStandings,
  nextAutoPhase,
  scheduledPhase,
  scheduleProblem,
  shuffleEntries,
  themeVisible,
  voteBlock,
} from './rules.ts';

const d = (s: string) => new Date(`2026-10-${s}T12:00:00.000Z`);
const schedule = {
  announceAt: d('01'),
  submissionsOpenAt: d('05'),
  submissionsCloseAt: d('10'),
  votingOpenAt: d('11'),
  votingCloseAt: d('15'),
  archiveAt: d('30'),
};

describe('phases', () => {
  it('follows the schedule', () => {
    expect(scheduledPhase(schedule, d('01'))).toBe('announced');
    expect(scheduledPhase(schedule, d('07'))).toBe('submissions');
    expect(scheduledPhase(schedule, d('10'))).toBe('submissions_closed');
    expect(scheduledPhase(schedule, d('12'))).toBe('voting');
    expect(scheduledPhase(schedule, d('16'))).toBe('results');
    expect(scheduledPhase(schedule, new Date('2027-01-01'))).toBe('archived');
    expect(scheduledPhase({ ...schedule, announceAt: null }, d('02'))).toBe('draft');
  });
  it('only moves forward, never from draft, never when locked', () => {
    expect(nextAutoPhase('draft', false, schedule, d('12'))).toBe('draft');
    expect(nextAutoPhase('submissions', true, schedule, d('12'))).toBe('submissions');
    expect(nextAutoPhase('submissions', false, schedule, d('12'))).toBe('voting');
    expect(nextAutoPhase('results', false, schedule, d('12'))).toBe('results');
  });
  it('rejects a schedule that goes back in time', () => {
    expect(scheduleProblem(schedule)).toBeNull();
    expect(scheduleProblem({ ...schedule, votingOpenAt: d('02') })).toContain('votingOpenAt');
  });
  it('hides a secret theme until submissions open', () => {
    expect(themeVisible(true, 'announced')).toBe(false);
    expect(themeVisible(true, 'submissions')).toBe(true);
    expect(themeVisible(false, 'announced')).toBe(true);
  });
});

describe('voteBlock', () => {
  const jam = { minVoterAgeDays: 3, minVoterActivity: 1 };
  const voter = { emailVerified: true, accountCreatedAt: d('01'), activity: 2 };
  it('allows an established verified member', () => {
    expect(voteBlock('voting', jam, voter, d('12'))).toBeNull();
  });
  it('blocks outside voting, unverified, new and inactive accounts', () => {
    expect(voteBlock('submissions', jam, voter, d('12'))).toBe('not_voting');
    expect(voteBlock('voting', jam, { ...voter, emailVerified: false }, d('12'))).toBe('email_not_verified');
    expect(voteBlock('voting', jam, { ...voter, accountCreatedAt: d('11') }, d('12'))).toBe('account_too_new');
    expect(voteBlock('voting', jam, { ...voter, activity: 0 }, d('12'))).toBe('not_enough_activity');
  });
});

describe('shuffle', () => {
  const items = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
  it('is stable per seed and differs between seeds', () => {
    expect(shuffleEntries(items, 'a')).toEqual(shuffleEntries(items, 'a'));
    expect(shuffleEntries(items, 'a').map((i) => i.id)).not.toEqual(shuffleEntries(items, 'b').map((i) => i.id));
    expect(shuffleEntries(items, 'a')).toHaveLength(20);
  });
});

describe('standings', () => {
  it('pulls few votes toward the mean', () => {
    expect(bayesian(0, 0, 5, 3)).toBe(3);
    expect(bayesian(5, 5, 5, 3)).toBeCloseTo(4);
    expect(bayesian(100, 5, 5, 3)).toBeGreaterThan(4.9);
  });
  it('ranks by Bayesian score with ties and a minimum of votes', () => {
    const categories = [
      { id: 1, key: 'fun', weight: 1 },
      { id: 2, key: 'polish', weight: 3 },
    ];
    const votes = [];
    // Entry 1: 6 voters, 5 stars. Entry 2: 6 voters, 3 stars. Entry 3: 1 voter, 5 stars (below min).
    for (let voter = 1; voter <= 6; voter++) {
      for (const categoryId of [1, 2]) {
        votes.push({ entryId: 1, categoryId, voterId: voter, score: 5 });
        votes.push({ entryId: 2, categoryId, voterId: voter, score: 3 });
      }
    }
    for (const categoryId of [1, 2]) votes.push({ entryId: 3, categoryId, voterId: 1, score: 5 });
    const rows = computeStandings({ categories, entryIds: [1, 2, 3], votes, minVotes: 5 });
    const pick = (entryId: number, key: string) => rows.find((r) => r.entryId === entryId && r.categoryKey === key);
    expect(pick(1, 'fun')?.rank).toBe(1);
    expect(pick(2, 'fun')?.rank).toBe(2);
    expect(pick(3, 'fun')?.rank).toBeNull();
    expect(pick(1, '_overall')?.rank).toBe(1);
    expect(pick(1, '_overall')?.votes).toBe(6);
    expect(pick(3, '_overall')?.rank).toBeNull();
  });
  it('shares a rank on equal scores', () => {
    const votes = [1, 2].flatMap((entryId) =>
      [1, 2, 3].map((voterId) => ({ entryId, categoryId: 1, voterId, score: 4 })),
    );
    const rows = computeStandings({
      categories: [{ id: 1, key: 'fun', weight: 1 }],
      entryIds: [1, 2],
      votes,
      minVotes: 2,
    });
    expect(rows.filter((r) => r.categoryKey === 'fun').map((r) => r.rank)).toEqual([1, 1]);
  });
});
