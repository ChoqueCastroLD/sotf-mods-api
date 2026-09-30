/**
 * Presentation helpers of the Mod Jams pages: the phase label and tone, the accent colour and the
 * deadline a countdown points at. Pure (no I/O); the labels come from the `jams` i18n namespace.
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
  soon: 'bg-signal-soft text-signal',
  wait: 'bg-warning-soft text-warning',
  done: 'bg-fg/8 text-fg-muted',
};

/** Accent colours of the jam hero (the OG image uses the same palette). */
export const ACCENT_HEX: Readonly<Record<string, string>> = {
  signal: '#F2A93B',
  forest: '#4FA36B',
  ember: '#E8643C',
  ocean: '#3B9AD9',
  violet: '#8E6BD8',
};

export function accentHex(accent: string): string {
  return ACCENT_HEX[accent] ?? ACCENT_HEX.signal ?? '#F2A93B';
}

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
