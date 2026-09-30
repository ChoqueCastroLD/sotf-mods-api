/**
 * Mod Jam rules (pure): the phase machine, the schedule, the vote eligibility and the standings
 * (Bayesian average with a minimum of votes). No I/O: everything here is unit tested.
 */
import { JAM_OVERALL_KEY, JAM_PHASES, type JamPhase } from '@sotf/contracts/jams';

export const PHASE_INDEX: Readonly<Record<JamPhase, number>> = Object.fromEntries(
  JAM_PHASES.map((phase, index) => [phase, index]),
) as Record<JamPhase, number>;

export interface JamSchedule {
  announceAt: Date | null;
  submissionsOpenAt: Date | null;
  submissionsCloseAt: Date | null;
  votingOpenAt: Date | null;
  votingCloseAt: Date | null;
  archiveAt: Date | null;
}

/** Phase and the schedule field that starts it (draft has none). */
const PHASE_STARTS: ReadonlyArray<readonly [JamPhase, keyof JamSchedule]> = [
  ['announced', 'announceAt'],
  ['submissions', 'submissionsOpenAt'],
  ['submissions_closed', 'submissionsCloseAt'],
  ['voting', 'votingOpenAt'],
  ['results', 'votingCloseAt'],
  ['archived', 'archiveAt'],
];

/** The latest phase whose start has passed (`draft` when none). Unset dates never start a phase. */
export function scheduledPhase(schedule: JamSchedule, now: Date): JamPhase {
  let phase: JamPhase = 'draft';
  for (const [candidate, field] of PHASE_STARTS) {
    const at = schedule[field];
    if (at && at.getTime() <= now.getTime()) phase = candidate;
  }
  return phase;
}

/**
 * The phase the worker moves a jam to: only forward, never out of `draft` (staff announce a jam)
 * and never while staff locked the phase.
 */
export function nextAutoPhase(current: JamPhase, locked: boolean, schedule: JamSchedule, now: Date): JamPhase {
  if (locked || current === 'draft') return current;
  const scheduled = scheduledPhase(schedule, now);
  return PHASE_INDEX[scheduled] > PHASE_INDEX[current] ? scheduled : current;
}

/** Validation message of a schedule, or null: dates that are set must not go back in time. */
export function scheduleProblem(schedule: JamSchedule): string | null {
  let last: { field: string; at: Date } | null = null;
  for (const [, field] of PHASE_STARTS) {
    const at = schedule[field];
    if (!at) continue;
    if (last && at.getTime() < last.at.getTime()) return `${field} must not be before ${last.field}`;
    last = { field, at };
  }
  return null;
}

/** The theme is public unless hidden and the jam has not reached submissions yet. */
export function themeVisible(themeHidden: boolean, phase: JamPhase): boolean {
  return !themeHidden || PHASE_INDEX[phase] >= PHASE_INDEX.submissions;
}

export const isPublicPhase = (phase: JamPhase): boolean => phase !== 'draft';
export const acceptsSubmissions = (phase: JamPhase): boolean => phase === 'submissions';
export const acceptsWithdrawals = (phase: JamPhase): boolean => PHASE_INDEX[phase] <= PHASE_INDEX.submissions_closed;
export const acceptsVotes = (phase: JamPhase): boolean => phase === 'voting';
export const showsResults = (phase: JamPhase, resultsPublishedAt: Date | null): boolean =>
  (phase === 'results' || phase === 'archived') && resultsPublishedAt !== null;

export type VoteBlock = 'email_not_verified' | 'account_too_new' | 'not_enough_activity' | 'not_voting';

export interface VoterFacts {
  emailVerified: boolean;
  accountCreatedAt: Date;
  activity: number;
}

/** Why a member cannot vote in a jam right now, or null. */
export function voteBlock(
  phase: JamPhase,
  jam: { minVoterAgeDays: number; minVoterActivity: number },
  voter: VoterFacts,
  now: Date,
): VoteBlock | null {
  if (!acceptsVotes(phase)) return 'not_voting';
  if (!voter.emailVerified) return 'email_not_verified';
  const ageMs = now.getTime() - voter.accountCreatedAt.getTime();
  if (ageMs < jam.minVoterAgeDays * 86_400_000) return 'account_too_new';
  if (voter.activity < jam.minVoterActivity) return 'not_enough_activity';
  return null;
}

/** FNV-1a hash used to shuffle entries per seed (stable for one voter, different between voters). */
export function shuffleKey(seed: string, id: number): number {
  let hash = 0x811c9dc5;
  for (const ch of `${seed}:${id}`) {
    hash ^= ch.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
}

export function shuffleEntries<T extends { id: number }>(items: readonly T[], seed: string): T[] {
  return [...items].sort((a, b) => shuffleKey(seed, a.id) - shuffleKey(seed, b.id) || a.id - b.id);
}

/* ---------------------------------- standings --------------------------------------------- */

export interface StandingCategory {
  id: number;
  key: string;
  weight: number;
}
export interface StandingVote {
  entryId: number;
  categoryId: number;
  voterId: number;
  score: number;
}
export interface StandingRow {
  entryId: number;
  categoryKey: string;
  votes: number;
  average: number;
  score: number;
  rank: number | null;
}

/** Bayesian average: `(v / (v + m)) · R + (m / (v + m)) · C`. */
export function bayesian(votes: number, mean: number, minVotes: number, prior: number): number {
  if (votes <= 0) return prior;
  return (votes / (votes + minVotes)) * mean + (minVotes / (votes + minVotes)) * prior;
}

/** Competition ranking ("1, 1, 3") of the rows that have enough votes; the others get no rank. */
function assignRanks(rows: StandingRow[], minVotes: number): void {
  const ranked = rows.filter((row) => row.votes >= minVotes).sort((a, b) => b.score - a.score || a.entryId - b.entryId);
  let previous: number | null = null;
  let rank = 0;
  ranked.forEach((row, index) => {
    if (previous === null || Math.abs(row.score - previous) > 1e-9) rank = index + 1;
    previous = row.score;
    row.rank = rank;
  });
}

/**
 * Standings of a jam from its valid votes. Per category: the Bayesian score pulls entries with few
 * votes toward the mean of the category. Overall: the weighted mean of the category scores, ranked
 * among the entries that have at least `minVotes` distinct voters.
 */
export function computeStandings(input: {
  categories: readonly StandingCategory[];
  entryIds: readonly number[];
  votes: readonly StandingVote[];
  minVotes: number;
}): StandingRow[] {
  const { categories, entryIds, votes, minVotes } = input;
  const out: StandingRow[] = [];
  const byEntryCategory = new Map<string, number[]>();
  const votersOfEntry = new Map<number, Set<number>>();
  const allScores = new Map<number, number[]>();
  for (const vote of votes) {
    const key = `${vote.entryId}:${vote.categoryId}`;
    byEntryCategory.set(key, [...(byEntryCategory.get(key) ?? []), vote.score]);
    const voters = votersOfEntry.get(vote.entryId) ?? new Set<number>();
    voters.add(vote.voterId);
    votersOfEntry.set(vote.entryId, voters);
    allScores.set(vote.categoryId, [...(allScores.get(vote.categoryId) ?? []), vote.score]);
  }
  const mean = (values: readonly number[]) => values.reduce((sum, v) => sum + v, 0) / values.length;
  const categoryRows = new Map<number, StandingRow[]>();
  for (const category of categories) {
    const scores = allScores.get(category.id) ?? [];
    const prior = scores.length > 0 ? mean(scores) : 3;
    const rows: StandingRow[] = entryIds.map((entryId) => {
      const own = byEntryCategory.get(`${entryId}:${category.id}`) ?? [];
      const average = own.length > 0 ? mean(own) : 0;
      return {
        entryId,
        categoryKey: category.key,
        votes: own.length,
        average,
        score: bayesian(own.length, average, minVotes, prior),
        rank: null,
      };
    });
    assignRanks(rows, minVotes);
    categoryRows.set(category.id, rows);
    out.push(...rows);
  }
  const totalWeight = categories.reduce((sum, c) => sum + c.weight, 0) || 1;
  const overall: StandingRow[] = entryIds.map((entryId) => {
    let score = 0;
    let average = 0;
    for (const category of categories) {
      const row = categoryRows.get(category.id)?.find((r) => r.entryId === entryId);
      score += (row?.score ?? 0) * category.weight;
      average += (row?.average ?? 0) * category.weight;
    }
    return {
      entryId,
      categoryKey: JAM_OVERALL_KEY,
      votes: votersOfEntry.get(entryId)?.size ?? 0,
      average: average / totalWeight,
      score: score / totalWeight,
      rank: null,
    };
  });
  assignRanks(overall, minVotes);
  out.push(...overall);
  return out;
}
