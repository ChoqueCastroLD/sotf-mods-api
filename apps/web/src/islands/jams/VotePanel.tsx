/**
 * Rating controls of one entry during voting: a button that opens a dialog with 1-5 stars per
 * category (native radio groups, so arrows, tab stops and announcements come from the platform).
 * Own entries cannot be rated; members who cannot vote see why. Votes can be changed until the
 * voting closes; live counts and averages are never shown.
 */
import type { JamVoteResultDTO } from '@sotf/contracts/jams';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Star } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';
import { api, type Failure } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { FailureNote, Modal, notify } from '../comments/lib/ui.tsx';
import { eligibilityText } from './JamActions.tsx';
import { type JamStore, useJamState } from './store.ts';

export interface VotePanelProps {
  store: JamStore;
  entryId: number;
  verifyHref: string;
}

export function VotePanel({ store, entryId, verifyHref }: VotePanelProps) {
  const state = useJamState(store);
  const [open, setOpen] = useState(false);
  const mine = state.myEntryIds.includes(entryId);
  const rated = state.votes.filter((vote) => vote.entryId === entryId);

  if (mine) {
    return <p className="rounded-md bg-fg/8 px-3 py-2 text-sm text-fg-muted">{t('jams_vote_own')}</p>;
  }
  if (!state.eligibility.canVote) {
    return (
      <p className="rounded-md bg-fg/8 px-3 py-2 text-xs text-fg-muted">
        {eligibilityText(state.eligibility.reason)}{' '}
        {state.eligibility.reason === 'email_not_verified' ? (
          <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
            {t('social_verify_action')}
          </a>
        ) : null}
      </p>
    );
  }
  return (
    <div>
      <Button
        variant={rated.length > 0 ? 'secondary' : 'outline'}
        size="sm"
        onClick={() => setOpen(true)}
        className="w-full"
      >
        <Icon icon={Star} size={16} className={rated.length > 0 ? 'fill-current text-featured' : ''} />
        {rated.length > 0
          ? t('jams_vote_rated', { done: rated.length, total: store.categories.length })
          : t('jams_vote_action')}
      </Button>
      {open ? <VoteModal store={store} entryId={entryId} onClose={() => setOpen(false)} /> : null}
    </div>
  );
}

function VoteModal({ store, entryId, onClose }: { store: JamStore; entryId: number; onClose: () => void }) {
  const name = useId();
  const initial = new Map(
    store
      .get()
      .votes.filter((vote) => vote.entryId === entryId)
      .map((v) => [v.categoryId, v.score]),
  );
  const [scores, setScores] = useState<Map<number, number>>(initial);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy || scores.size === 0) return;
    setBusy(true);
    setFailure(null);
    const result = await api<JamVoteResultDTO>(
      'PUT',
      `/api/v2/jams/${encodeURIComponent(store.slug)}/entries/${entryId}/votes`,
      { scores: Array.from(scores, ([categoryId, score]) => ({ categoryId, score })) },
    );
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    const current = store.get();
    store.set({
      ...current,
      votes: [
        ...current.votes.filter((vote) => vote.entryId !== entryId),
        ...result.data.votes.map((vote) => ({ entryId, categoryId: vote.categoryId, score: vote.score })),
      ],
    });
    notify(t('jams_vote_saved'));
    onClose();
  };

  return (
    <Modal open onClose={onClose} title={t('jams_vote_title')} description={t('jams_vote_intro')}>
      <form className="grid gap-4" onSubmit={submit} aria-busy={busy || undefined}>
        {store.categories.map((category) => (
          <fieldset key={category.id} className="grid gap-1" disabled={busy}>
            <legend className="text-sm font-semibold text-fg">{category.label}</legend>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => {
                const value = scores.get(category.id) ?? 0;
                return (
                  <label
                    key={star}
                    className="relative inline-flex size-11 cursor-pointer items-center justify-center rounded-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus md:size-9"
                  >
                    <input
                      type="radio"
                      name={`${name}-${category.id}`}
                      value={star}
                      checked={value === star}
                      onChange={() => setScores(new Map(scores).set(category.id, star))}
                      className="sr-only"
                    />
                    <Icon
                      icon={Star}
                      size={24}
                      className={star <= value ? 'fill-current text-featured' : 'text-border-strong'}
                    />
                    <span className="sr-only">{t('social_review_stars', { count: star })}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
        {failure ? <FailureNote failure={failure} /> : null}
        <div className="flex flex-wrap justify-end gap-2">
          <Button variant="ghost" type="button" onClick={onClose} disabled={busy}>
            {t('social_action_cancel')}
          </Button>
          <Button variant="primary" type="submit" loading={busy} disabled={scores.size === 0}>
            {t('jams_vote_save')}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
