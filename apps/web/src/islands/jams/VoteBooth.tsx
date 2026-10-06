/**
 * The voting booth: a full-screen dialog that walks a member through every entry of the jam, one
 * at a time. Big star rows per category (native radio groups: arrows, tab stops and announcements
 * come from the platform), every star is saved the moment it is tapped (optimistic, batched per
 * entry, with retry), a progress bar counts the entries rated, a strip jumps to any entry, and the
 * last step is a thank-you. Own entries never appear; votes can be changed until voting closes.
 */
import type { JamVoteResultDTO } from '@sotf/contracts/jams';
import { Button } from '@sotf/ui/button';
import { Icon } from '@sotf/ui/icons';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Star, X } from 'lucide-react';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { api, type Failure } from '../comments/lib/api.ts';
import { t } from '../comments/lib/messages.ts';
import { FailureNote, LiveRegion } from '../comments/lib/ui.tsx';
import { BOOTH_EVENT, type BoothEntry, progressOf, scoresOf, shuffleFor } from './booth.ts';
import { type JamStore, useJamState } from './store.ts';

export interface VoteBoothProps {
  store: JamStore;
  entries: BoothEntry[];
  voterId: number;
  jamTitle: string;
}

type SaveState = 'idle' | 'saving' | 'saved' | 'error';
const FLUSH_MS = 450;

export function VoteBooth({ store, entries, voterId, jamTitle }: VoteBoothProps) {
  const state = useJamState(store);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [saveState, setSaveState] = useState<Record<number, SaveState>>({});
  const [failure, setFailure] = useState<Failure | null>(null);
  const [announce, setAnnounce] = useState('');
  const pending = useRef(new Map<number, Map<number, number>>());
  const timers = useRef(new Map<number, number>());
  const groupName = useId();
  const titleId = useId();

  const order = useMemo(() => {
    const mine = new Set(state.myEntryIds);
    return shuffleFor(
      entries.filter((entry) => !mine.has(entry.id)),
      voterId,
    );
    // The order must not reshuffle while voting: only the page's own-entry list matters.
  }, [entries, voterId, state.myEntryIds.join(',')]);
  const total = order.length;
  const categories = store.categories;
  const complete = order.filter((entry) => progressOf(state, entry.id, categories.length) === 'done').length;
  const finished = open && index >= total && total > 0;
  const entry = order[index];

  const flush = useCallback(
    async (entryId: number) => {
      const batch = pending.current.get(entryId);
      if (!batch || batch.size === 0) return;
      pending.current.delete(entryId);
      window.clearTimeout(timers.current.get(entryId));
      timers.current.delete(entryId);
      setSaveState((current) => ({ ...current, [entryId]: 'saving' }));
      const result = await api<JamVoteResultDTO>(
        'PUT',
        `/api/v2/jams/${encodeURIComponent(store.slug)}/entries/${entryId}/votes`,
        { scores: Array.from(batch, ([categoryId, score]) => ({ categoryId, score })) },
      );
      if (!result.ok) {
        // Keep what the voter chose: it is retried, never silently dropped.
        const again = pending.current.get(entryId) ?? new Map<number, number>();
        for (const [categoryId, score] of batch) if (!again.has(categoryId)) again.set(categoryId, score);
        pending.current.set(entryId, again);
        setFailure(result);
        setSaveState((current) => ({ ...current, [entryId]: 'error' }));
        return;
      }
      setFailure(null);
      setSaveState((current) => ({ ...current, [entryId]: pending.current.has(entryId) ? 'saving' : 'saved' }));
      setAnnounce(t('jams_booth_saved'));
    },
    [store],
  );

  const flushAll = useCallback(() => {
    for (const entryId of Array.from(pending.current.keys())) void flush(entryId);
  }, [flush]);

  const rate = (entryId: number, categoryId: number, score: number) => {
    const current = store.get();
    store.set({
      ...current,
      votes: [
        ...current.votes.filter((vote) => !(vote.entryId === entryId && vote.categoryId === categoryId)),
        { entryId, categoryId, score },
      ],
    });
    const batch = pending.current.get(entryId) ?? new Map<number, number>();
    batch.set(categoryId, score);
    pending.current.set(entryId, batch);
    setSaveState((s) => ({ ...s, [entryId]: 'saving' }));
    window.clearTimeout(timers.current.get(entryId));
    timers.current.set(
      entryId,
      window.setTimeout(() => void flush(entryId), FLUSH_MS),
    );
  };

  const close = useCallback(() => {
    flushAll();
    setOpen(false);
  }, [flushAll]);

  // Open from anywhere on the page.
  useEffect(() => {
    const onOpen = (event: Event) => {
      const wanted = (event as CustomEvent<{ entryId?: number }>).detail?.entryId;
      const snapshot = store.get();
      const list = order;
      let start = wanted === undefined ? -1 : list.findIndex((item) => item.id === wanted);
      if (start < 0) {
        start = list.findIndex((item) => progressOf(snapshot, item.id, categories.length) !== 'done');
        if (start < 0) start = 0;
      }
      setIndex(start);
      setFailure(null);
      setOpen(true);
    };
    document.addEventListener(BOOTH_EVENT, onOpen);
    return () => document.removeEventListener(BOOTH_EVENT, onOpen);
  }, [order, store, categories.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Never lose a tap: send whatever is queued when the page is left.
  useEffect(() => {
    window.addEventListener('pagehide', flushAll);
    return () => window.removeEventListener('pagehide', flushAll);
  }, [flushAll]);

  const go = (next: number) => {
    if (entry) void flush(entry.id);
    setIndex(Math.max(0, Math.min(total, next)));
    setFailure(null);
    dialogRef.current?.querySelector('[data-booth-scroll]')?.scrollTo({ top: 0 });
  };

  const own = scoresOf(state, entry?.id ?? -1);
  const status = entry ? (saveState[entry.id] ?? 'idle') : 'idle';

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => {
        flushAll();
        setOpen(false);
      }}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-bg p-0 text-fg backdrop:bg-black/80"
    >
      {open ? (
        <div className="mx-auto flex h-dvh max-w-6xl flex-col">
          <header className="flex items-center gap-3 border-b border-border px-4 py-3 md:px-6">
            <div className="min-w-0 flex-1">
              <p id={titleId} className="truncate text-sm font-semibold text-fg-muted">
                {t('jams_booth_title')} · {jamTitle}
              </p>
              <div className="mt-1.5 flex items-center gap-3">
                <div
                  className="h-2 flex-1 overflow-hidden rounded-full bg-border"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={total}
                  aria-valuenow={complete}
                  aria-label={t('jams_vote_progress', { done: complete, total })}
                >
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-(--dur-slow) ease-out"
                    style={{ width: `${total === 0 ? 0 : (complete / total) * 100}%` }}
                  />
                </div>
                <p className="shrink-0 text-xs text-fg-muted tabular-nums">
                  {t('jams_vote_progress', { done: complete, total })}
                </p>
              </div>
            </div>
            <Button variant="icon" size="md" aria-label={t('jams_booth_close')} onClick={close}>
              <Icon icon={X} size={20} />
            </Button>
          </header>

          <div data-booth-scroll className="flex-1 overflow-y-auto overscroll-contain">
            {finished ? (
              <Finished
                onClose={close}
                onReview={() => {
                  const firstOpen = order.findIndex((item) => progressOf(state, item.id, categories.length) !== 'done');
                  go(firstOpen < 0 ? 0 : firstOpen);
                }}
                done={complete === total}
                left={total - complete}
              />
            ) : entry ? (
              <div className="grid gap-6 p-4 md:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:p-8">
                <div className="flex min-w-0 flex-col gap-4">
                  <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-border bg-sunken sm:aspect-[16/10]">
                    {entry.thumb ? (
                      <img
                        key={entry.id}
                        src={entry.thumb}
                        alt=""
                        width={640}
                        height={400}
                        decoding="async"
                        className="size-full animate-rise object-cover"
                      />
                    ) : (
                      <div className="grid size-full place-items-center text-fg-subtle">
                        <Icon icon={Star} size={48} />
                      </div>
                    )}
                    <span className="absolute start-3 top-3 rounded-md bg-bg/85 px-2.5 py-1 text-xs text-fg backdrop-blur-sm tabular-nums">
                      {t('jams_booth_entry_of', { current: index + 1, total })}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-2xl font-bold text-fg sm:text-3xl md:text-4xl">{entry.name}</h2>
                    {entry.authors.length > 0 ? (
                      <p className="text-sm text-fg-muted">
                        {t('jams_by')} <span className="font-semibold text-fg">{entry.authors.join(', ')}</span>
                      </p>
                    ) : null}
                    {entry.blurb ? (
                      <p className="line-clamp-2 text-sm text-fg-muted lg:line-clamp-none">{entry.blurb}</p>
                    ) : null}
                    <a
                      href={entry.path}
                      target="_blank"
                      rel="noopener"
                      className="mt-1 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-link underline underline-offset-3"
                    >
                      {t('jams_booth_open_mod')}
                      <Icon icon={ExternalLink} size={14} />
                    </a>
                  </div>
                </div>

                <form
                  className="flex min-w-0 flex-col gap-3"
                  onSubmit={(event) => event.preventDefault()}
                  aria-label={t('jams_vote_title')}
                >
                  {categories.map((category) => {
                    const value = own.get(category.id) ?? 0;
                    return (
                      <fieldset
                        key={`${entry.id}-${category.id}`}
                        className="rounded-xl border border-border bg-surface p-3 md:p-4"
                      >
                        <legend className="sr-only">{category.label}</legend>
                        <div className="mb-2 flex items-baseline justify-between gap-3" aria-hidden="true">
                          <span className="text-lg font-bold text-fg">{category.label}</span>
                          <span className="text-sm text-fg-muted tabular-nums">{value > 0 ? `${value}/5` : '–/5'}</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 sm:justify-start sm:gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <label
                              key={star}
                              className="relative inline-flex size-12 flex-1 cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-fg/6 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-focus sm:size-14 sm:flex-none"
                            >
                              <input
                                type="radio"
                                name={`${groupName}-${entry.id}-${category.id}`}
                                value={star}
                                checked={value === star}
                                onChange={() => rate(entry.id, category.id, star)}
                                className="sr-only"
                              />
                              <Icon
                                icon={Star}
                                size={34}
                                strokeWidth={1.5}
                                className={`transition-[transform,color,fill] duration-(--dur-base) ease-(--ease-spring) ${
                                  star <= value ? 'scale-110 fill-current text-fg' : 'text-border-strong'
                                } ${star === value ? 'drop-shadow-[0_0_8px_rgb(245_212_154/0.6)]' : ''}`}
                              />
                              <span className="sr-only">
                                {t('social_review_stars', { count: star })} · {category.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    );
                  })}
                  <p
                    className="flex min-h-6 items-center gap-1.5 text-sm text-fg-muted"
                    aria-hidden="true"
                    data-save-state={status}
                  >
                    {status === 'saving' ? (
                      <span>{t('jams_booth_saving')}</span>
                    ) : status === 'saved' ? (
                      <>
                        <Icon icon={Check} size={16} className="text-success" />
                        <span className="text-success">{t('jams_booth_saved')}</span>
                      </>
                    ) : null}
                  </p>
                  {failure ? <FailureNote failure={failure} onRetry={() => entry && void flush(entry.id)} /> : null}
                </form>
              </div>
            ) : (
              <p className="p-8 text-center text-fg-muted">{t('jams_booth_none')}</p>
            )}
          </div>

          {!finished && total > 0 ? (
            <footer className="flex items-center gap-3 border-t border-border bg-surface px-4 py-3 md:px-6">
              <Button variant="secondary" onClick={() => go(index - 1)} disabled={index === 0} className="shrink-0">
                <Icon icon={ArrowLeft} size={18} />
                <span className="max-sm:sr-only">{t('jams_booth_prev')}</span>
              </Button>
              <nav
                aria-label={t('jams_booth_jump')}
                className="flex min-w-0 flex-1 items-center justify-start gap-1.5 overflow-x-auto px-1.5 py-1.5 sm:justify-center"
              >
                {order.map((item, position) => {
                  const progress = progressOf(state, item.id, categories.length);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => go(position)}
                      aria-current={position === index ? 'step' : undefined}
                      aria-label={`${position + 1}: ${item.name} (${
                        progress === 'done'
                          ? t('jams_booth_state_done')
                          : progress === 'partial'
                            ? t('jams_booth_state_partial')
                            : t('jams_booth_state_todo')
                      })`}
                      className={`relative grid size-8 shrink-0 place-items-center rounded-full text-xs tabular-nums transition-colors md:size-9 ${
                        progress === 'done'
                          ? 'bg-primary text-primary-fg'
                          : progress === 'partial'
                            ? 'bg-primary-soft text-primary ring-1 ring-primary'
                            : 'bg-sunken text-fg-muted ring-1 ring-border-strong'
                      } ${position === index ? 'outline-2 outline-offset-2 outline-fg' : ''}`}
                    >
                      {progress === 'done' ? <Icon icon={Check} size={14} strokeWidth={2.5} /> : position + 1}
                    </button>
                  );
                })}
              </nav>
              <Button variant="primary" onClick={() => go(index + 1)} className="shrink-0">
                <span className="max-sm:sr-only">
                  {index === total - 1 ? t('jams_booth_finish') : t('jams_booth_next')}
                </span>
                <Icon icon={index === total - 1 ? Check : ArrowRight} size={18} />
              </Button>
            </footer>
          ) : null}
          <LiveRegion message={announce} />
        </div>
      ) : null}
    </dialog>
  );
}

function Finished({
  onClose,
  onReview,
  done,
  left,
}: {
  onClose: () => void;
  onReview: () => void;
  done: boolean;
  left: number;
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-5 px-6 py-12 text-center md:py-20">
      <h2 className="text-3xl font-bold text-fg">
        {done ? t('jams_booth_done_title') : t('jams_booth_left_title', { count: left })}
      </h2>
      <p className="text-fg-muted">{t('jams_booth_done_text')}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant={done ? 'primary' : 'secondary'} size="lg" onClick={onClose}>
          {t('jams_booth_done_close')}
        </Button>
        <Button variant={done ? 'secondary' : 'primary'} size="lg" onClick={onReview}>
          {done ? t('jams_vote_review') : t('jams_vote_continue')}
        </Button>
      </div>
    </div>
  );
}
