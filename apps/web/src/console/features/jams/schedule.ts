/**
 * The schedule of a jam as the editor sees it: six moments in `datetime-local` format (browser
 * zone), the order rule the API enforces (a date may not be before the one that precedes it among
 * the dates that are set), the standard schedule the editor can fill in, and the phase that
 * follows the current one.
 */
import { JAM_PHASES, type JamPhase } from '@sotf/contracts/jams';

export const DATE_FIELDS = [
  'announceAt',
  'submissionsOpenAt',
  'submissionsCloseAt',
  'votingOpenAt',
  'votingCloseAt',
  'archiveAt',
] as const;
export type DateField = (typeof DATE_FIELDS)[number];
export type DateValues = Record<DateField, string>;

/** Phase that starts at each moment (draft has none). */
export const FIELD_PHASE: Record<DateField, JamPhase> = {
  announceAt: 'announced',
  submissionsOpenAt: 'submissions',
  submissionsCloseAt: 'submissions_closed',
  votingOpenAt: 'voting',
  votingCloseAt: 'results',
  archiveAt: 'archived',
};

export interface OrderProblem {
  field: DateField;
  /** The set date before it that it must not precede. */
  previous: DateField;
}

/** `datetime-local` text → epoch ms (NaN when empty or invalid). */
function at(value: string): number {
  return value ? new Date(value).getTime() : Number.NaN;
}

/** Fields whose date is earlier than the previous set date. */
export function orderProblems(dates: DateValues): OrderProblem[] {
  const problems: OrderProblem[] = [];
  let last: { field: DateField; time: number } | null = null;
  for (const field of DATE_FIELDS) {
    const time = at(dates[field]);
    if (Number.isNaN(time)) continue;
    if (last && time < last.time) problems.push({ field, previous: last.field });
    else last = { field, time };
  }
  return problems;
}

const DAY = 86_400_000;

function local(time: number): string {
  const date = new Date(time);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/**
 * A usual jam: announced on `start`, submissions open 3 days later and stay open for 14 days, then
 * 7 days of voting, and the archive 14 days after voting closes. All at the time of `start`.
 */
export function standardSchedule(start: Date): DateValues {
  const base = start.getTime();
  const open = base + 3 * DAY;
  const close = open + 14 * DAY;
  const voteClose = close + 7 * DAY;
  return {
    announceAt: local(base),
    submissionsOpenAt: local(open),
    submissionsCloseAt: local(close),
    votingOpenAt: local(close),
    votingCloseAt: local(voteClose),
    archiveAt: local(voteClose + 14 * DAY),
  };
}

/** The next start date to suggest: tomorrow at 18:00 local time. */
export function suggestedStart(now: Date): Date {
  const date = new Date(now.getTime() + DAY);
  date.setHours(18, 0, 0, 0);
  return date;
}

/** `YYYY-MM-DDTHH:mm` of a Date in the browser zone (the value of a `datetime-local` input). */
export const toInputValue = (date: Date): string => local(date.getTime());

/** Set dates in order with their field, for the timeline under the form. */
export function timeline(dates: DateValues): Array<{ field: DateField; iso: string }> {
  return DATE_FIELDS.flatMap((field) => {
    const time = at(dates[field]);
    return Number.isNaN(time) ? [] : [{ field, iso: new Date(time).toISOString() }];
  });
}

/** The phase that the schedule moves a jam to next, with its date (or null). */
export function nextScheduled(phase: JamPhase, dates: DateValues, now: Date): { phase: JamPhase; iso: string } | null {
  if (phase === 'draft') return null;
  const current = JAM_PHASES.indexOf(phase);
  const upcoming = DATE_FIELDS.map((field) => ({ field, time: at(dates[field]) }))
    .filter(
      (entry) =>
        !Number.isNaN(entry.time) &&
        entry.time > now.getTime() &&
        JAM_PHASES.indexOf(FIELD_PHASE[entry.field]) > current,
    )
    .sort((a, b) => a.time - b.time)[0];
  return upcoming ? { phase: FIELD_PHASE[upcoming.field], iso: new Date(upcoming.time).toISOString() } : null;
}
