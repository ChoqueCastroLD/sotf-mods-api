/**
 * Rating control of one entry card during voting: it shows where the member stands (rated, in
 * progress, own entry) and opens the voting booth at this entry. Own entries cannot be rated;
 * members who cannot vote are told why once, in the vote dock, so the cards stay clean.
 */
import { Icon } from '@sotf/ui/icons';
import { Check, Lock, Star } from 'lucide-react';
import { t } from '../comments/lib/messages.ts';
import { averageOf, openBooth, progressOf } from './booth.ts';
import { type JamStore, useJamState } from './store.ts';

export interface VotePanelProps {
  store: JamStore;
  entryId: number;
}

export function VotePanel({ store, entryId }: VotePanelProps) {
  const state = useJamState(store);
  if (state.myEntryIds.includes(entryId)) {
    return (
      <p className="flex min-h-11 items-center gap-2 rounded-lg bg-fg/8 px-3 text-sm font-semibold text-fg-muted">
        <Icon icon={Lock} size={16} />
        {t('jams_vote_own')}
      </p>
    );
  }
  if (!state.eligibility.canVote) return null;
  const progress = progressOf(state, entryId, store.categories.length);
  const average = averageOf(state, entryId);
  const done = progress === 'done';
  return (
    <button
      type="button"
      onClick={() => openBooth(entryId)}
      className={`group/rate flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border px-3 text-sm font-semibold transition-colors duration-(--dur-fast) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
        done
          ? 'border-success/40 bg-success-soft text-success hover:border-success'
          : progress === 'partial'
            ? 'border-primary/50 bg-primary-soft text-primary hover:border-primary'
            : 'border-border-strong bg-raised text-fg hover:border-primary hover:text-primary'
      }`}
    >
      <span className="inline-flex items-center gap-2">
        <Icon icon={done ? Check : Star} size={16} className={!done && progress === 'partial' ? 'fill-current' : ''} />
        {done
          ? t('jams_vote_rated_done')
          : progress === 'partial'
            ? t('jams_vote_rated', {
                done: store.get().votes.filter((v) => v.entryId === entryId).length,
                total: store.categories.length,
              })
            : t('jams_vote_action')}
      </span>
      {average !== null ? (
        <span className="inline-flex items-center gap-1 text-xs tabular-nums">
          <Icon icon={Star} size={13} className="fill-current" />
          {average.toFixed(1)}
        </span>
      ) : null}
    </button>
  );
}
