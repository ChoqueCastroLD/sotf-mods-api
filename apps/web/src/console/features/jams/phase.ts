/** Labels and tones of a jam phase in the console. */
import { JAM_PHASES, type JamPhase } from '@sotf/contracts/jams';
import { m } from '@sotf/i18n/messages';
import type { BadgeVariant } from '@sotf/ui/badge';

export { JAM_PHASES };

export function jamPhaseLabel(phase: JamPhase): string {
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

export function jamPhaseVariant(phase: JamPhase): BadgeVariant {
  switch (phase) {
    case 'submissions':
    case 'voting':
      return 'success';
    case 'announced':
      return 'signal';
    case 'submissions_closed':
      return 'warning';
    case 'results':
      return 'featured';
    default:
      return 'neutral';
  }
}

export function categoryName(category: { key: string; label: string | null }): string {
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
    default:
      return category.key;
  }
}
