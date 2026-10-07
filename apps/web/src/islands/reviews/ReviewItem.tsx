/**
 * One review with its controls (PLAN §7.7), around the server's `ReviewCard` markup:
 *
 * - «Helpful?» yes / no (`aria-pressed`, never on your own review), optimistic with rollback;
 * - the mod author's one public reply: write, edit, delete (markdown-lite editor);
 * - report (others' reviews); edit and delete (your own, delete with undo).
 */
import { Button } from '@sotf/ui/button';
import { ReviewCard } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { Composer } from '../comments/Composer.tsx';
import { api, type Failure } from '../comments/lib/api.ts';
import { formatNumber, localized } from '../comments/lib/i18n.tsx';
import { myVote, rememberVote } from '../comments/lib/local.ts';
import { htmlToMarkdown } from '../comments/lib/markdown.ts';
import { ActionMenu, type MenuItem } from '../comments/lib/menu.tsx';
import { t } from '../comments/lib/messages.ts';
import type { MeSummary } from '../comments/lib/session.ts';
import { deferWithUndo, FailureNote, notifyFailure } from '../comments/lib/ui.tsx';
import { REVIEW_REPLY_MAX, type Review } from './types.ts';

export interface ReviewItemProps {
  review: Review;
  session: MeSummary;
  modAuthorId: number;
  creatorName: string;
  headingLevel?: 3 | 4;
  onChange: (review: Review) => void;
  /** Own review: switch to the edit form. */
  onEdit?: () => void;
  /** Own review: removed (returns the undo). */
  onRemove?: () => () => void;
  onReport: (reviewId: number) => void;
  announce: (message: string) => void;
}

function ReplyForm({
  review,
  onDone,
  onCancel,
}: {
  review: Review;
  onDone: (review: Review) => void;
  onCancel: () => void;
}) {
  const [body, setBody] = useState(() => (review.authorReply ? htmlToMarkdown(review.authorReply.bodyHtml) : ''));
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [empty, setEmpty] = useState(false);

  const submit = async () => {
    const text = body.normalize('NFC').trim();
    if (!text) {
      setEmpty(true);
      return;
    }
    setBusy(true);
    setFailure(null);
    const result = await api<Review>('PUT', `/api/v2/reviews/${review.id}/reply`, { bodyMd: text });
    setBusy(false);
    if (result.ok) onDone(result.data);
    else setFailure(result);
  };

  return (
    <form
      className="ms-4 grid gap-3 border-s-2 border-primary ps-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (!busy) void submit();
      }}
      noValidate
    >
      <Composer
        value={body}
        onChange={(value) => {
          setBody(value);
          setEmpty(false);
        }}
        maxLength={REVIEW_REPLY_MAX}
        label={t('social_review_reply_label')}
        autoFocus
        disabled={busy}
        invalid={empty}
        searchMentions={false}
        onSubmitShortcut={() => void submit()}
      />
      {empty ? (
        <p className="text-sm text-danger" role="alert">
          {t('social_comment_empty')}
        </p>
      ) : null}
      {failure ? <FailureNote failure={failure} onRetry={() => void submit()} /> : null}
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onCancel} disabled={busy}>
          {t('social_action_cancel')}
        </Button>
        <Button type="submit" loading={busy}>
          {review.authorReply ? t('social_action_save') : t('social_review_reply_submit')}
        </Button>
      </div>
    </form>
  );
}

export function ReviewItem({
  review,
  session,
  modAuthorId,
  creatorName,
  headingLevel = 3,
  onChange,
  onEdit,
  onRemove,
  onReport,
  announce,
}: ReviewItemProps) {
  const [vote, setVote] = useState<1 | -1 | 0>(() => myVote(session.id, review.id));
  const [replying, setReplying] = useState(false);
  const isOwn = review.author?.id === session.id;
  const isModOwner = session.id === modAuthorId;

  const castVote = async (value: 1 | -1) => {
    const previous = { vote, review };
    const next = vote === value ? 0 : value;
    setVote(next);
    // Optimistic counts.
    let helpful = review.helpfulCount;
    let unhelpful = review.unhelpfulCount;
    if (vote === 1) helpful -= 1;
    if (vote === -1) unhelpful -= 1;
    if (next === 1) helpful += 1;
    if (next === -1) unhelpful += 1;
    onChange({ ...review, helpfulCount: Math.max(0, helpful), unhelpfulCount: Math.max(0, unhelpful) });
    const result =
      next === 0
        ? await api<Review>('DELETE', `/api/v2/reviews/${review.id}/vote`)
        : await api<Review>('PUT', `/api/v2/reviews/${review.id}/vote`, { value: next });
    if (result.ok) {
      rememberVote(session.id, review.id, next);
      onChange(result.data);
      announce(next === 0 ? t('social_vote_removed') : t('social_vote_saved'));
    } else {
      setVote(previous.vote);
      onChange(previous.review);
      notifyFailure(result);
    }
  };

  const deleteReply = () => {
    const before = review;
    onChange({ ...review, authorReply: null });
    deferWithUndo(
      t('social_review_reply_deleted'),
      () => {
        void api<Review>('DELETE', `/api/v2/reviews/${review.id}/reply`).then((result) => {
          if (result.ok) onChange(result.data);
          else {
            onChange(before);
            notifyFailure(result);
          }
        });
      },
      () => onChange(before),
    );
  };

  const remove = () => {
    if (!onRemove) return;
    const restore = onRemove();
    deferWithUndo(
      t('social_review_deleted'),
      () => {
        void api('DELETE', `/api/v2/reviews/${review.id}`).then((result) => {
          if (!result.ok) {
            restore();
            notifyFailure(result);
          }
        });
      },
      restore,
    );
  };

  const items: MenuItem[] = [];
  if (isOwn) {
    if (onEdit) items.push({ key: 'edit', label: t('social_action_edit'), onSelect: onEdit });
    if (onRemove) items.push({ key: 'delete', label: t('social_action_delete'), danger: true, onSelect: remove });
  }
  if (isModOwner && review.status === 'visible') {
    items.push({
      key: 'reply',
      label: review.authorReply ? t('social_review_reply_edit') : t('social_review_reply'),
      onSelect: () => setReplying(true),
    });
    if (review.authorReply) {
      items.push({ key: 'reply-delete', label: t('social_review_reply_delete'), danger: true, onSelect: deleteReply });
    }
  }
  if (!isOwn) items.push({ key: 'report', label: t('social_report'), onSelect: () => onReport(review.id) });

  const display: Review = {
    ...review,
    bodyHtml: review.bodyHtml ? localized(review.bodyHtml) : null,
    authorReply: review.authorReply
      ? { ...review.authorReply, bodyHtml: localized(review.authorReply.bodyHtml) }
      : null,
  };
  const name = review.author?.displayName || review.author?.handle || t('social_deleted_user');

  return (
    <div className="grid gap-3">
      <ReviewCard
        review={display}
        creatorName={creatorName}
        headingLevel={headingLevel}
        actions={
          <>
            {!isOwn && review.status === 'visible' ? (
              <fieldset
                aria-label={t('social_vote_label')}
                className="m-0 flex min-w-0 items-center gap-1 border-0 p-0"
              >
                <span className="me-1 text-xs text-fg-muted" aria-hidden="true">
                  {t('social_vote_label')}
                </span>
                <button
                  type="button"
                  aria-pressed={vote === 1}
                  aria-label={t('social_vote_yes', { count: review.helpfulCount })}
                  onClick={() => void castVote(1)}
                  className="inline-flex h-11 items-center gap-1 rounded-full border border-border px-2.5 text-xs tabular-nums hover:border-border-strong aria-pressed:border-success aria-pressed:bg-success-soft md:h-8"
                >
                  <Icon icon={ThumbsUp} size={14} />
                  <span aria-hidden="true">{formatNumber(review.helpfulCount)}</span>
                </button>
                <button
                  type="button"
                  aria-pressed={vote === -1}
                  aria-label={t('social_vote_no')}
                  onClick={() => void castVote(-1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border hover:border-border-strong aria-pressed:border-danger aria-pressed:bg-danger-soft md:size-8"
                >
                  <Icon icon={ThumbsDown} size={14} />
                </button>
              </fieldset>
            ) : null}
            <ActionMenu label={t('social_more_actions', { name })} items={items} />
          </>
        }
      />
      {replying ? (
        <ReplyForm
          review={review}
          onCancel={() => setReplying(false)}
          onDone={(fresh) => {
            onChange(fresh);
            setReplying(false);
            announce(t('social_review_reply_saved'));
          }}
        />
      ) : null}
    </div>
  );
}
