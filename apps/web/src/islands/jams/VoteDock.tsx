/**
 * The vote dock above the gallery: the member's ballot at a glance (entries rated of the entries
 * they can rate, a progress bar) with the one button that opens the voting booth. Also the place
 * that says why a member cannot vote (unverified e-mail, account too new, not active enough) or
 * that there is nothing to rate yet.
 */
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { ArrowRight, Check } from 'lucide-react';
import { t } from '../comments/lib/messages.ts';
import { openBooth, progressOf } from './booth.ts';
import { eligibilityText } from './JamActions.tsx';
import { type JamStore, useJamState } from './store.ts';

export interface VoteDockProps {
  store: JamStore;
  entryIds: number[];
  verifyHref: string;
}

export function VoteDock({ store, entryIds, verifyHref }: VoteDockProps) {
  const state = useJamState(store);
  const mine = new Set(state.myEntryIds);
  const votable = entryIds.filter((id) => !mine.has(id));
  const done = votable.filter((id) => progressOf(state, id, store.categories.length) === 'done').length;
  const started = state.votes.length > 0;
  const allDone = votable.length > 0 && done === votable.length;
  const pct = votable.length === 0 ? 0 : (done / votable.length) * 100;

  return (
    <div className="flex min-h-24 flex-col gap-4 border-y border-border py-4 md:flex-row md:items-center md:justify-between md:gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="text-lg font-bold text-fg">
          {t('jams_vote_dock_title')}
        </p>
        {state.eligibility.canVote ? (
          votable.length > 0 ? (
            <div className="flex items-center gap-3">
              <div
                className="h-2 max-w-sm flex-1 overflow-hidden rounded-full bg-border"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={votable.length}
                aria-valuenow={done}
                aria-label={t('jams_vote_progress', { done, total: votable.length })}
              >
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-(--dur-slow) ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="shrink-0 text-sm text-fg tabular-nums">
                {t('jams_vote_progress', { done, total: votable.length })}
              </p>
            </div>
          ) : (
            <p className="text-sm text-fg-muted">{t('jams_vote_nothing')}</p>
          )
        ) : (
          <p className="text-sm text-fg-muted">
            {eligibilityText(state.eligibility.reason)}{' '}
            {state.eligibility.reason === 'email_not_verified' ? (
              <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
                {t('social_verify_action')}
              </a>
            ) : null}
          </p>
        )}
        <p className="max-w-(--container-prose) text-xs text-fg-muted">{t('jams_voting_hint')}</p>
      </div>
      {state.eligibility.canVote && votable.length > 0 ? (
        <Button variant="primary" size="lg" glow onClick={() => openBooth()} className="shrink-0">
          {allDone ? <Icon icon={Check} size={18} /> : null}
          {allDone ? t('jams_vote_review') : started ? t('jams_vote_continue') : t('jams_vote_start')}
          {allDone ? null : <Icon icon={ArrowRight} size={18} />}
        </Button>
      ) : null}
    </div>
  );
}
