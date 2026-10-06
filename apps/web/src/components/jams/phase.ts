/**
 * Presentation helpers of the Mod Jams pages: the phase label and tone and the deadline a
 * countdown points at. Pure (no I/O); the labels come from the `jams` i18n namespace.
 */
import type { JamPhase, JamSummaryDTO } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';

export type JamPhaseTone = 'soon' | 'live' | 'wait' | 'done';

export function phaseLabel(phase: JamPhase): string {
  switch (phase) {
    case 'draft':
      return m.jams_phase_draft();
    case 'announced':
      return m.jams_phase_announced();
    case 'submissions':
      return m.jams_phase_submissions();
    case 'submissions_closed':
      return m.jams_phase_submissions_closed();
    case 'voting':
      return m.jams_phase_voting();
    case 'results':
      return m.jams_phase_results();
    case 'archived':
      return m.jams_phase_archived();
  }
}

export function phaseTone(phase: JamPhase): JamPhaseTone {
  switch (phase) {
    case 'submissions':
    case 'voting':
      return 'live';
    case 'announced':
      return 'soon';
    case 'submissions_closed':
      return 'wait';
    default:
      return 'done';
  }
}

export const PHASE_TONE_CLASSES: Readonly<Record<JamPhaseTone, string>> = {
  live: 'bg-success-soft text-success',
  soon: 'bg-fg/10 text-fg',
  wait: 'bg-warning-soft text-warning',
  done: 'bg-fg/8 text-fg-muted',
};

export interface JamDeadline {
  /** What the countdown waits for. */
  kind: 'submissions_open' | 'submissions_close' | 'voting_open' | 'voting_close';
  at: string;
}

/** The next milestone of a running jam, or null when nothing is scheduled (or it is over). */
export function nextDeadline(
  jam: Pick<JamSummaryDTO, 'phase' | 'submissionsOpenAt' | 'submissionsCloseAt' | 'votingOpenAt' | 'votingCloseAt'>,
): JamDeadline | null {
  const pick = (kind: JamDeadline['kind'], at: string | null): JamDeadline | null => (at ? { kind, at } : null);
  switch (jam.phase) {
    case 'announced':
      return pick('submissions_open', jam.submissionsOpenAt);
    case 'submissions':
      return pick('submissions_close', jam.submissionsCloseAt);
    case 'submissions_closed':
      return pick('voting_open', jam.votingOpenAt);
    case 'voting':
      return pick('voting_close', jam.votingCloseAt);
    default:
      return null;
  }
}

export function deadlineLabel(kind: JamDeadline['kind']): string {
  switch (kind) {
    case 'submissions_open':
      return m.jams_countdown_submissions_open();
    case 'submissions_close':
      return m.jams_countdown_submissions_close();
    case 'voting_open':
      return m.jams_countdown_voting_open();
    case 'voting_close':
      return m.jams_countdown_voting_close();
  }
}

export function categoryLabel(category: { key: string; label: string | null }): string {
  if (category.label) return category.label;
  switch (category.key) {
    case 'fun':
      return m.jams_category_fun();
    case 'polish':
      return m.jams_category_polish();
    case 'creativity':
      return m.jams_category_creativity();
    case 'lore':
      return m.jams_category_lore();
    case '_overall':
      return m.jams_category_overall();
    default:
      return category.key.replace(/[-_]+/g, ' ').replace(/^./, (c) => c.toUpperCase());
  }
}

/* ------------------------------------------------------------------------------------------ *
 * The four stages of a jam (announce → build → vote → results).
 * ------------------------------------------------------------------------------------------ */

export const JAM_STAGES = ['announce', 'build', 'vote', 'results'] as const;
export type JamStage = (typeof JAM_STAGES)[number];
export type JamStageState = 'done' | 'current' | 'upcoming';

/** State of each stage for a phase (index-aligned with {@link JAM_STAGES}). */
export function stageStates(phase: JamPhase): JamStageState[] {
  const current: number = {
    draft: 0,
    announced: 0,
    submissions: 1,
    submissions_closed: 1,
    voting: 2,
    results: 3,
    archived: 3,
  }[phase];
  return JAM_STAGES.map((_, index) => (index < current ? 'done' : index === current ? 'current' : 'upcoming'));
}

export function stageLabel(stage: JamStage): string {
  switch (stage) {
    case 'announce':
      return m.jams_stage_announce();
    case 'build':
      return m.jams_stage_build();
    case 'vote':
      return m.jams_stage_vote();
    case 'results':
      return m.jams_stage_results();
  }
}

export interface StageDates {
  /** Start of the stage (or its only moment). */
  from: string | null;
  /** End of a ranged stage. */
  to: string | null;
}

export function stageDates(
  jam: Pick<
    JamSummaryDTO,
    'announceAt' | 'submissionsOpenAt' | 'submissionsCloseAt' | 'votingOpenAt' | 'votingCloseAt' | 'resultsPublishedAt'
  >,
  stage: JamStage,
): StageDates {
  switch (stage) {
    case 'announce':
      return { from: jam.announceAt, to: null };
    case 'build':
      return { from: jam.submissionsOpenAt, to: jam.submissionsCloseAt };
    case 'vote':
      return { from: jam.votingOpenAt, to: jam.votingCloseAt };
    case 'results':
      return { from: jam.resultsPublishedAt ?? jam.votingCloseAt, to: null };
  }
}

/** The jam a hub features: whatever is happening now, else the next one, else the latest results. */
const FEATURE_ORDER: readonly JamPhase[] = ['voting', 'submissions', 'submissions_closed', 'announced', 'results'];

export function pickFeatured(items: readonly JamSummaryDTO[]): JamSummaryDTO | null {
  for (const phase of FEATURE_ORDER) {
    const found = items.filter((jam) => jam.phase === phase);
    if (found.length === 0) continue;
    // Several in the same phase: the one whose next milestone comes first (results: the newest).
    const key = (jam: JamSummaryDTO): number => {
      const at = phase === 'results' ? jam.resultsPublishedAt : (nextDeadline(jam)?.at ?? null);
      const time = at ? Date.parse(at) : Number.POSITIVE_INFINITY;
      return phase === 'results' ? -time : time;
    };
    return [...found].sort((a, b) => key(a) - key(b))[0] ?? null;
  }
  return null;
}

/** Whether the phase has a live (ticking) feel: submissions and voting. */
export function isLivePhase(phase: JamPhase): boolean {
  return phase === 'submissions' || phase === 'voting';
}
