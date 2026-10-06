/**
 * Header actions of a jam for signed-in members: follow (notifications), submit one of the member's
 * published mods or builds with entry notes, withdraw an entry before voting, and why voting is
 * not available when it is not (unverified e-mail, too new, not active enough).
 */
import type { EligibleModsDTO, JamEntryDTO } from '@sotf/contracts/jams';
import { Button, ButtonLink } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { Bell, BellRing, Plus, Vote } from 'lucide-react';
import { type FormEvent, useEffect, useId, useState } from 'react';
import { api, type Failure, get } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { FailureNote, Modal, notify } from '../comments/lib/ui.tsx';
import { openBooth } from './booth.ts';
import { type JamStore, useJamState } from './store.ts';

const NOTES_MAX = 1500;

export interface JamActionsProps {
  store: JamStore;
  root: ParentNode;
  verifyHref: string;
  maxEntries: number;
  emailVerified: boolean;
}

export function eligibilityText(reason: string | null): string {
  switch (reason) {
    case 'email_not_verified':
      return t('jams_vote_blocked_email');
    case 'account_too_new':
      return t('jams_vote_blocked_new');
    case 'not_enough_activity':
      return t('jams_vote_blocked_activity');
    default:
      return t('jams_vote_blocked_phase');
  }
}

/** Name of an entry from the server-rendered gallery (the store only holds ids). */
function entryName(root: ParentNode, entryId: number): string {
  const heading = root.querySelector(`[data-jam-entry="${entryId}"] h3`);
  return heading?.textContent?.trim() || t('jams_entry_fallback', { id: entryId });
}

export function JamActions({ store, root, verifyHref, maxEntries, emailVerified }: JamActionsProps) {
  const state = useJamState(store);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [submitOpen, setSubmitOpen] = useState(false);
  const phase = store.phase;
  const follows =
    phase === 'announced' || phase === 'submissions' || phase === 'submissions_closed' || phase === 'voting';
  const canSubmit = phase === 'submissions' && state.myEntryIds.length < maxEntries;
  const canWithdraw = phase === 'announced' || phase === 'submissions' || phase === 'submissions_closed';

  const toggleFollow = async () => {
    if (busy) return;
    setBusy(true);
    setFailure(null);
    const next = !state.following;
    const result = await api<unknown>(next ? 'PUT' : 'DELETE', `/api/v2/jams/${encodeURIComponent(store.slug)}/follow`);
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    store.set({ ...state, following: next });
    notify(next ? t('jams_follow_done') : t('jams_unfollow_done'));
  };

  const withdraw = async (entryId: number) => {
    if (busy) return;
    setBusy(true);
    setFailure(null);
    const result = await api<unknown>('DELETE', `/api/v2/jams/${encodeURIComponent(store.slug)}/entries/${entryId}`);
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    store.set({ ...state, myEntryIds: state.myEntryIds.filter((id) => id !== entryId) });
    root.querySelector(`[data-jam-entry="${entryId}"]`)?.remove();
    notify(t('jams_withdraw_done'));
  };

  const canVoteNow = phase === 'voting' && state.eligibility.canVote && store.categories.length > 0;
  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {canVoteNow ? (
          <Button variant="primary" size="lg" onClick={() => openBooth()}>
            <Icon icon={Vote} size={18} />
            {state.votes.length > 0 ? t('jams_vote_continue') : t('jams_vote_start')}
          </Button>
        ) : null}
        {follows ? (
          <Button
            variant="secondary"
            onClick={toggleFollow}
            loading={busy}
            aria-pressed={state.following}
          >
            <Icon icon={state.following ? BellRing : Bell} size={18} />
            {state.following ? t('jams_following') : t('jams_follow')}
          </Button>
        ) : null}
        {canSubmit ? (
          emailVerified ? (
            <Button variant="primary" size="lg" onClick={() => setSubmitOpen(true)}>
              <Icon icon={Plus} size={18} />
              {t('jams_submit_action')}
            </Button>
          ) : (
            <ButtonLink href={verifyHref} variant="secondary">
              {t('jams_verify_to_submit')}
            </ButtonLink>
          )
        ) : null}
      </div>
      {phase === 'voting' && !state.eligibility.canVote ? (
        <p className="text-sm text-fg-muted">
          {eligibilityText(state.eligibility.reason)}{' '}
          {state.eligibility.reason === 'email_not_verified' ? (
            <a href={verifyHref} className="font-semibold text-primary underline underline-offset-3">
              {t('social_verify_action')}
            </a>
          ) : null}
        </p>
      ) : null}
      {state.myEntryIds.length > 0 ? (
        <section className="grid gap-1.5 border-t border-border pt-3" aria-label={t('jams_my_entries')}>
          <h3 className="text-sm font-semibold text-fg">{t('jams_my_entries')}</h3>
          <ul className="grid gap-1">
            {state.myEntryIds.map((entryId) => (
              <li key={entryId} className="flex flex-wrap items-center gap-2 text-sm text-fg">
                <span className="font-semibold">{entryName(root, entryId)}</span>
                {canWithdraw ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => withdraw(entryId)}
                    disabled={busy}
                  >
                    {t('jams_withdraw')}
                  </Button>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {failure ? <FailureNote failure={failure} /> : null}
      {submitOpen ? (
        <SubmitModal
          store={store}
          onClose={() => setSubmitOpen(false)}
          onDone={(entry) => {
            store.set({ ...store.get(), myEntryIds: [...store.get().myEntryIds, entry.id] });
            setSubmitOpen(false);
            notify(t('jams_submit_done'));
          }}
        />
      ) : null}
    </div>
  );
}

interface SubmitModalProps {
  store: JamStore;
  onClose: () => void;
  onDone: (entry: JamEntryDTO) => void;
}

function SubmitModal({ store, onClose, onDone }: SubmitModalProps) {
  const id = useId();
  const [mods, setMods] = useState<EligibleModsDTO['items'] | null>(null);
  const [loadFailure, setLoadFailure] = useState<Failure | null>(null);
  const [modId, setModId] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);

  useEffect(() => {
    let cancelled = false;
    void get<EligibleModsDTO>(`/api/v2/me/jams/${encodeURIComponent(store.slug)}/eligible-mods`).then((result) => {
      if (cancelled) return;
      if (result.ok) setMods(result.data.items);
      else setLoadFailure(result);
    });
    return () => {
      cancelled = true;
    };
  }, [store.slug]);

  const available = (mods ?? []).filter((mod) => !mod.submitted);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy || !modId) return;
    setBusy(true);
    setFailure(null);
    const trimmed = notes.normalize('NFC').trim();
    const result = await api<JamEntryDTO>('POST', `/api/v2/jams/${encodeURIComponent(store.slug)}/entries`, {
      modId: Number(modId),
      ...(trimmed ? { notesMd: trimmed } : {}),
    });
    setBusy(false);
    if (!result.ok) {
      setFailure(result);
      return;
    }
    onDone(result.data);
  };

  return (
    <Modal open onClose={onClose} title={t('jams_submit_title')} description={t('jams_submit_intro')}>
      {loadFailure ? (
        <FailureNote failure={loadFailure} />
      ) : mods === null ? (
        <p className="text-sm text-fg-muted">{t('jams_loading')}</p>
      ) : available.length === 0 ? (
        <p className="text-sm text-fg-muted">{t('jams_submit_none')}</p>
      ) : (
        <form className="grid gap-4" onSubmit={submit} aria-busy={busy || undefined}>
          <div className="grid gap-1.5">
            <label htmlFor={`${id}-mod`} className="text-sm font-semibold text-fg">
              {t('jams_submit_mod')}
            </label>
            <select
              id={`${id}-mod`}
              required
              value={modId}
              onChange={(event) => setModId(event.target.value)}
              disabled={busy}
              className="h-11 rounded-md border border-border-strong bg-surface px-3 text-sm text-fg md:h-10"
            >
              <option value="">{t('jams_submit_choose')}</option>
              {available.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor={`${id}-notes`} className="text-sm font-semibold text-fg">
              {t('jams_submit_notes')}
            </label>
            <textarea
              id={`${id}-notes`}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              maxLength={NOTES_MAX}
              rows={4}
              disabled={busy}
              aria-describedby={`${id}-notes-hint`}
              className="rounded-md border border-border-strong bg-surface px-3 py-2 text-sm text-fg"
            />
            <p id={`${id}-notes-hint`} className="text-xs text-fg-muted">
              {t('jams_submit_notes_hint', { max: NOTES_MAX })}
            </p>
          </div>
          {failure ? <FailureNote failure={failure} /> : null}
          <div className="flex flex-wrap justify-end gap-2">
            <Button variant="ghost" type="button" onClick={onClose} disabled={busy}>
              {t('social_action_cancel')}
            </Button>
            <Button variant="primary" type="submit" loading={busy} disabled={!modId}>
              {t('jams_submit_confirm')}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
