/**
 * Reviews island (WP-70, PLAN §7.7), signed-in visitors only (guests keep the server-rendered
 * reviews and the sign-in hint; nothing ships to them).
 *
 * - `overview` (`[data-island="reviews"]` of the mod page): «Write a review» opens the form in
 *   place; the three most helpful reviews get their controls.
 * - `page` (`#write-review[data-island="reviews-write"]` of `/reviews`): the form is shown in
 *   place and the current page of the list (same sort and cursor as the URL) gets its controls.
 *
 * The list is re-read from the same edge-cached endpoint and swapped for the server copy once
 * loaded (identical order and content). Your own review is found through your public review
 * list and shown with «Edit» and «Delete»; the mod's author cannot review their own mod and gets
 * the reply controls instead.
 */
import { Button } from '@sotf/ui/button';
import { StarRating } from '@sotf/ui/domain';
import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { api, get } from '../comments/lib/api.ts';
import { SocialI18n } from '../comments/lib/i18n.tsx';
import { emitCount } from '../comments/lib/live-count.ts';
import { t } from '../comments/lib/messages.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import { deferWithUndo, LiveRegion, notify, notifyFailure, ReportDialog } from '../comments/lib/ui.tsx';
import type { VersionOption } from '../comments/types.ts';
import { ReviewForm } from './ReviewForm.tsx';
import { ReviewItem } from './ReviewItem.tsx';
import { starMeaning } from './StarInput.tsx';
import type { Review, ReviewPage, ReviewSort, UserReview } from './types.ts';

export interface ReviewsIslandProps {
  mode: 'overview' | 'page';
  modId: number;
  modAuthorId: number;
  creatorName: string | undefined;
  session: MeSummary;
  verifyHref: string;
  /** Where the list is rendered (replaces the server copy), null when there is none. */
  listTarget: HTMLElement | null;
  /** Query of the list to mirror. */
  list: { sort: ReviewSort; cursor: string | null; limit: number };
  /** Link to the reviews page (overview mode). */
  reviewsHref: string | null;
  /** Open the form right away (`#write-review` in the URL). */
  startWriting: boolean;
  /** Called once the island's list is ready to replace the server copy. */
  onTakeOver: () => void;
}

const MY_REVIEW_PAGES = 3;

async function findMyReview(handle: string, modId: number): Promise<Review | null> {
  let cursor: string | null = null;
  for (let page = 0; page < MY_REVIEW_PAGES; page += 1) {
    const params = new URLSearchParams({ limit: '100' });
    if (cursor) params.set('cursor', cursor);
    const result = await get<{ items: UserReview[]; nextCursor: string | null }>(
      `/api/v2/users/${encodeURIComponent(handle)}/reviews?${params.toString()}`,
    );
    if (!result.ok) return null;
    const mine = result.data.items.find((item) => item.mod.id === modId && item.status !== 'deleted');
    if (mine) {
      const { mod: _mod, ...review } = mine;
      return review;
    }
    cursor = result.data.nextCursor;
    if (!cursor) break;
  }
  return null;
}

export function ReviewsIsland(props: ReviewsIslandProps) {
  const {
    mode,
    modId,
    modAuthorId,
    creatorName,
    session,
    verifyHref,
    listTarget,
    list,
    reviewsHref,
    startWriting,
    onTakeOver,
  } = props;
  const [items, setItems] = useState<Review[] | null>(null);
  const [mine, setMine] = useState<Review | null | undefined>(undefined);
  const [writing, setWriting] = useState(startWriting);
  const [editingOwn, setEditingOwn] = useState(false);
  const [reportId, setReportId] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const versions = useRef<Promise<VersionOption[]> | null>(null);
  const writeButton = useRef<HTMLButtonElement | null>(null);
  const isModOwner = session.id === modAuthorId;

  const announce = useCallback((message: string) => {
    setAnnouncement('');
    window.setTimeout(() => setAnnouncement(message), 50);
  }, []);

  useEffect(() => {
    if (!listTarget) return;
    const controller = new AbortController();
    const params = new URLSearchParams({ sort: list.sort, limit: String(list.limit) });
    if (list.cursor) params.set('cursor', list.cursor);
    void get<ReviewPage>(`/api/v2/mods/${modId}/reviews?${params.toString()}`, controller.signal).then((result) => {
      if (!result.ok) return;
      setItems(result.data.items);
      onTakeOver();
    });
    return () => controller.abort();
  }, [listTarget, list.sort, list.cursor, list.limit, modId, onTakeOver]);

  useEffect(() => {
    if (isModOwner) {
      setMine(null);
      return;
    }
    let cancelled = false;
    void findMyReview(session.handle, modId).then((review) => {
      if (!cancelled) setMine(review);
    });
    return () => {
      cancelled = true;
    };
  }, [isModOwner, session.handle, modId]);

  const loadVersions = useCallback(() => {
    versions.current ??= get<{ items: Array<{ id: number; version: string; status: string }> }>(
      `/api/v2/mods/${modId}/versions`,
    ).then((result) => {
      if (!result.ok) {
        versions.current = null;
        return [];
      }
      return result.data.items
        .filter((item) => item.status === 'active' || item.status === 'yanked')
        .map((item) => ({ id: item.id, version: item.version }));
    });
    return versions.current;
  }, [modId]);

  const replaceItem = useCallback((fresh: Review) => {
    setItems((current) => current?.map((item) => (item.id === fresh.id ? fresh : item)) ?? current);
    setMine((current) => (current && current.id === fresh.id ? fresh : current));
  }, []);

  const removeOwn = useCallback(() => {
    const beforeItems = items;
    const beforeMine = mine;
    if (beforeMine) emitCount('reviews', -1);
    setItems((current) => current?.filter((item) => item.id !== beforeMine?.id) ?? current);
    setMine(null);
    return () => {
      if (beforeMine) emitCount('reviews', 1);
      setItems(beforeItems);
      setMine(beforeMine);
    };
  }, [items, mine]);

  const deleteMine = () => {
    if (!mine) return;
    const id = mine.id;
    const restore = removeOwn();
    deferWithUndo(
      t('social_review_deleted'),
      () => {
        void api('DELETE', `/api/v2/reviews/${id}`).then((result) => {
          if (!result.ok) {
            restore();
            notifyFailure(result);
          }
        });
      },
      restore,
    );
  };

  const listNode = useMemo(() => {
    if (!listTarget || !items) return null;
    const node =
      items.length > 0 ? (
        <ul className="grid gap-3" data-review-list data-sort={list.sort}>
          {items.map((review) => (
            <li key={review.id}>
              <ReviewItem
                review={review}
                session={session}
                modAuthorId={modAuthorId}
                creatorName={creatorName ?? ''}
                onChange={replaceItem}
                {...(review.author?.id === session.id
                  ? {
                      onEdit: () => {
                        setEditingOwn(true);
                        setWriting(true);
                      },
                      onRemove: removeOwn,
                    }
                  : {})}
                onReport={setReportId}
                announce={announce}
              />
            </li>
          ))}
        </ul>
      ) : null;
    return node ? createPortal(<SocialI18n>{node}</SocialI18n>, listTarget) : null;
  }, [listTarget, items, list.sort, session, modAuthorId, creatorName, replaceItem, removeOwn, announce]);

  const onDone = (review: Review, created: boolean) => {
    setMine(review);
    setWriting(false);
    setEditingOwn(false);
    if (created) emitCount('reviews', 1);
    if (created) setItems((current) => (current ? [review, ...current] : current));
    else replaceItem(review);
    announce(created ? t('social_review_posted') : t('social_review_updated'));
    notify(created ? t('social_review_posted') : t('social_review_updated'));
    window.setTimeout(() => writeButton.current?.focus(), 0);
  };

  let writer: ReactNode;
  if (isModOwner) {
    writer = <p className="text-sm text-fg-muted">{t('social_review_own_mod')}</p>;
  } else if (!session.emailVerified) {
    writer = (
      <p className="text-sm">
        {t('social_verify_to_review')}{' '}
        <a href={verifyHref} className="font-semibold text-link underline underline-offset-3">
          {t('social_verify_action')}
        </a>
      </p>
    );
  } else if (mine === undefined) {
    writer = <p className="text-sm text-fg-muted">{t('social_loading')}</p>;
  } else if (writing && (!mine || editingOwn)) {
    writer = (
      <ReviewForm
        modId={modId}
        existing={editingOwn ? mine : null}
        loadVersions={loadVersions}
        onDone={onDone}
        onCancel={() => {
          setWriting(false);
          setEditingOwn(false);
          window.setTimeout(() => writeButton.current?.focus(), 0);
        }}
        autoFocus
      />
    );
  } else if (mine) {
    writer = (
      <div className="grid gap-2">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold">{t('social_review_yours')}</span>
          <StarRating value={mine.rating} size={14} />
          <span className="text-fg-muted">{starMeaning(mine.rating)}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            ref={writeButton}
            variant="secondary"
            size="sm"
            onClick={() => {
              setEditingOwn(true);
              setWriting(true);
            }}
          >
            {t('social_review_edit')}
          </Button>
          <Button variant="ghost" size="sm" onClick={deleteMine}>
            {t('social_action_delete')}
          </Button>
          {mode === 'overview' && reviewsHref ? (
            <a
              href={reviewsHref}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-link underline underline-offset-3 md:min-h-8"
            >
              {t('social_review_see_all')}
            </a>
          ) : null}
        </div>
      </div>
    );
  } else {
    writer = (
      <Button
        ref={writeButton}
        variant={mode === 'page' ? 'primary' : 'secondary'}
        onClick={() => setWriting(true)}
        className="justify-self-start"
      >
        {t('social_review_write')}
      </Button>
    );
  }

  return (
    <SocialI18n>
      <div className="grid gap-3">
        {mode === 'page' ? (
          <h3 className="font-semibold">{mine ? t('social_review_yours') : t('social_review_write')}</h3>
        ) : null}
        {writer}
      </div>
      {listNode}
      <ReportDialog
        target={reportId === null ? null : { type: 'review', id: reportId }}
        onClose={() => setReportId(null)}
      />
      <LiveRegion message={announcement} />
    </SocialI18n>
  );
}
