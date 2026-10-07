import { describe, expect, it } from 'vitest';
import {
  type DateValues,
  nextScheduled,
  orderProblems,
  standardSchedule,
  suggestedStart,
  timeline,
} from './schedule.ts';

const empty: DateValues = {
  announceAt: '',
  submissionsOpenAt: '',
  submissionsCloseAt: '',
  votingOpenAt: '',
  votingCloseAt: '',
  archiveAt: '',
};

describe('orderProblems', () => {
  it('accepts a schedule in order, with gaps and equal dates', () => {
    expect(orderProblems(empty)).toEqual([]);
    expect(
      orderProblems({ ...empty, submissionsOpenAt: '2026-10-10T10:00', votingOpenAt: '2026-10-20T10:00' }),
    ).toEqual([]);
    expect(
      orderProblems({ ...empty, submissionsCloseAt: '2026-10-20T10:00', votingOpenAt: '2026-10-20T10:00' }),
    ).toEqual([]);
  });

  it('names the field and the date it must not precede, skipping unset dates', () => {
    expect(orderProblems({ ...empty, announceAt: '2026-10-10T10:00', submissionsCloseAt: '2026-10-09T10:00' })).toEqual(
      [{ field: 'submissionsCloseAt', previous: 'announceAt' }],
    );
  });

  it('compares each date with the last valid one, not with the offending one', () => {
    const problems = orderProblems({
      ...empty,
      announceAt: '2026-10-10T10:00',
      submissionsOpenAt: '2026-10-05T10:00',
      submissionsCloseAt: '2026-10-12T10:00',
    });
    expect(problems).toEqual([{ field: 'submissionsOpenAt', previous: 'announceAt' }]);
  });
});

describe('standardSchedule', () => {
  it('is in order and spans announcement to archive', () => {
    const start = new Date(2026, 9, 12, 18, 0);
    const dates = standardSchedule(start);
    expect(orderProblems(dates)).toEqual([]);
    expect(dates.announceAt).toBe('2026-10-12T18:00');
    expect(dates.submissionsOpenAt).toBe('2026-10-15T18:00');
    expect(dates.votingOpenAt).toBe(dates.submissionsCloseAt);
  });

  it('suggests tomorrow at 18:00', () => {
    const suggested = suggestedStart(new Date(2026, 9, 6, 9, 30));
    expect([suggested.getDate(), suggested.getHours(), suggested.getMinutes()]).toEqual([7, 18, 0]);
  });
});

describe('timeline and nextScheduled', () => {
  const dates = standardSchedule(new Date(2026, 9, 12, 18, 0));

  it('lists the set dates in order', () => {
    expect(timeline({ ...empty, votingOpenAt: '2026-10-20T10:00' }).map((entry) => entry.field)).toEqual([
      'votingOpenAt',
    ]);
    expect(timeline(dates)).toHaveLength(6);
  });

  it('finds the next phase change after now, none for a draft or when everything passed', () => {
    expect(nextScheduled('draft', dates, new Date(2026, 9, 13))).toBeNull();
    expect(nextScheduled('announced', dates, new Date(2026, 9, 13))?.phase).toBe('submissions');
    expect(nextScheduled('archived', dates, new Date(2027, 0, 1))).toBeNull();
    // A jam announced early: the announcement date still ahead is not a next step.
    expect(nextScheduled('announced', dates, new Date(2026, 9, 10))?.phase).toBe('submissions');
    expect(nextScheduled('submissions', dates, new Date(2026, 9, 10))?.phase).toBe('submissions_closed');
  });
});
