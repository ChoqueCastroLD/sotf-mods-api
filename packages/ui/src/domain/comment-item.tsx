/**
 * CommentItem (research/03 §5.8), presentational: one comment or reply of a thread. Shows the
 * author (or «Deleted user»), role badges (Creator, Moderator, Trusted), date and «edited»,
 * pinned / solution / bug-report markers, the sanitised body, image thumbnails, reaction counts
 * and an `actions` slot (reply, react, report — owned by the page). Replies are passed as
 * `children` (2 levels at most, rendered indented).
 *
 * Deleted comments keep their place in the thread with a placeholder; hidden ones (visible to
 * their author and the rangers only) carry the moderation note.
 */
import { Bug, CircleCheck, EyeOff, Pin, Trash2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Avatar } from '../avatar.tsx';
import { Badge } from '../badge.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { ProseLocator } from './content.tsx';
import type { CommentDTO } from './contracts.ts';
import { formatCount, formatDate, formatDateTime, useDomainI18n, useProfileHref } from './i18n.ts';
import { TrustedMark } from './stamps.tsx';

/** A top-level comment or a reply (same fields). */
export type CommentItemData = Omit<CommentDTO, 'replies' | 'repliesCount'> &
  Partial<Pick<CommentDTO, 'replies' | 'repliesCount'>>;

type ReactionKind = keyof CommentDTO['reactions'];

/** Same glyphs as `REACTION_EMOJI` of @sotf/contracts (checked by a unit test). */
export const REACTION_GLYPHS: Readonly<Record<ReactionKind, string>> = {
  thumbs_up: '👍',
  heart: '❤️',
  laugh: '😂',
  party: '🎉',
  pray: '🙏',
  fire: '🔥',
};

export interface CommentItemProps {
  comment: CommentItemData;
  /** Reply, react, report… */
  actions?: ReactNode;
  /** Replace the read-only reaction counts (interactive reactions of the page). */
  reactions?: ReactNode;
  /** Replies (rendered indented under the comment). */
  children?: ReactNode;
  /** Permalink of the comment (`#comment-{id}`). */
  permalink?: string;
  className?: string;
}

export function CommentItem({ comment, actions, reactions, children, permalink, className }: CommentItemProps) {
  const { t, locale, timeZone } = useDomainI18n();
  const profileHref = useProfileHref();
  const deleted = comment.status === 'deleted';
  const author = deleted ? null : comment.author;
  const name = author?.displayName ?? t('ui_domain_deleted_user');
  const isReply = comment.parentId !== null;
  const reactionEntries = (Object.keys(REACTION_GLYPHS) as ReactionKind[]).filter(
    (kind) => comment.reactions[kind] > 0,
  );
  return (
    <article
      id={`comment-${comment.id}`}
      data-comment-id={comment.id}
      data-status={comment.status}
      className={cn('flex flex-col gap-3', isReply ? 'ms-6 border-s border-border ps-4 md:ms-10' : '', className)}
    >
      <div
        className={cn(
          'flex gap-3',
          comment.pinnedAt && !isReply && 'rounded-lg border border-border bg-surface p-3',
          comment.isSolution && 'rounded-lg border border-success/50 bg-success-soft/40 p-3',
        )}
      >
        <Avatar name={name} id={author?.id ?? 0} src={author?.avatarUrl} size={isReply ? 32 : 40} />
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <header className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {author ? (
              <a href={profileHref(author.handle)} className="font-semibold text-fg hover:underline">
                {name}
              </a>
            ) : (
              <span className="font-semibold text-fg-muted">{name}</span>
            )}
            {!deleted && comment.badges.includes('verified') ? <TrustedMark /> : null}
            {!deleted && comment.badges.includes('author') ? (
              <Badge variant="neutral" size="sm">
                {t('ui_domain_comment_badge_author')}
              </Badge>
            ) : null}
            {!deleted && comment.badges.includes('ranger') ? (
              <Badge variant="neutral" size="sm">
                {t('ui_domain_comment_badge_ranger')}
              </Badge>
            ) : null}
            {permalink ? (
              <a href={permalink} className="text-xs text-fg-muted hover:underline">
                <time dateTime={comment.createdAt} title={formatDateTime(locale, comment.createdAt, timeZone)}>
                  {formatDate(locale, comment.createdAt, timeZone)}
                </time>
              </a>
            ) : (
              <time
                dateTime={comment.createdAt}
                title={formatDateTime(locale, comment.createdAt, timeZone)}
                className="text-xs text-fg-muted"
              >
                {formatDate(locale, comment.createdAt, timeZone)}
              </time>
            )}
            {comment.editedAt && !deleted ? (
              <span className="text-xs text-fg-muted">{t('ui_domain_edited')}</span>
            ) : null}
          </header>
          {!deleted && (comment.pinnedAt || comment.isSolution || comment.isBugReport) ? (
            <p className="flex flex-wrap items-center gap-1.5">
              {comment.pinnedAt ? (
                <Badge variant="neutral" size="sm" icon={<Icon icon={Pin} size={12} />}>
                  {t('ui_domain_comment_pinned')}
                </Badge>
              ) : null}
              {comment.isSolution ? (
                <Badge variant="success" size="sm" icon={<Icon icon={CircleCheck} size={12} />}>
                  {t('ui_domain_comment_solution')}
                </Badge>
              ) : null}
              {comment.isBugReport ? (
                <Badge variant="danger" size="sm" icon={<Icon icon={Bug} size={12} />}>
                  {comment.modVersion
                    ? t('ui_domain_comment_bug_on', { version: comment.modVersion.version })
                    : t('ui_domain_comment_bug')}
                </Badge>
              ) : null}
              {comment.bugResolvedIn ? (
                <Badge variant="success" size="sm" icon={<Icon icon={CircleCheck} size={12} />}>
                  {t('ui_domain_comment_bug_fixed_in', { version: comment.bugResolvedIn.version })}
                </Badge>
              ) : null}
            </p>
          ) : null}
          {comment.status === 'hidden' ? (
            <p className="flex items-center gap-1.5 rounded-sm bg-warning-soft px-2 py-1 text-xs text-warning">
              <Icon icon={EyeOff} size={14} />
              {comment.hiddenReason
                ? t('ui_domain_hidden_by_ranger_reason', { reason: comment.hiddenReason })
                : t('ui_domain_hidden_by_ranger')}
            </p>
          ) : null}
          {comment.status === 'pending' ? (
            <p className="text-xs text-fg-muted">{t('ui_domain_comment_pending')}</p>
          ) : null}
          {deleted ? (
            <p className="flex items-center gap-1.5 text-sm text-fg-subtle italic">
              <Icon icon={Trash2} size={14} />
              {t('ui_domain_comment_deleted')}
            </p>
          ) : (
            <ProseLocator html={comment.bodyHtml} size="sm" />
          )}
          {!deleted && comment.images.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {comment.images.map((image) => (
                <li key={image.url}>
                  <a href={image.url} className="block overflow-hidden rounded-md border border-border">
                    <img
                      src={image.url}
                      srcSet={image.srcset ?? undefined}
                      sizes="160px"
                      alt={image.alt ?? t('ui_domain_comment_image')}
                      width={160}
                      height={image.width && image.height ? Math.round((160 * image.height) / image.width) : 90}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-40 object-cover"
                      style={{ backgroundColor: image.dominantColor ?? undefined }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {!deleted && (reactions || reactionEntries.length > 0 || actions) ? (
            <footer className="flex flex-wrap items-center gap-2">
              {reactions ??
                (reactionEntries.length > 0 ? (
                  <ul className="flex flex-wrap gap-1.5" aria-label={t('ui_domain_comment_reactions')}>
                    {reactionEntries.map((kind) => (
                      <li
                        key={kind}
                        className="inline-flex h-7 items-center gap-1 rounded-full border border-border px-2 text-xs tabular-nums"
                      >
                        <span aria-hidden="true">{REACTION_GLYPHS[kind]}</span>
                        <span className="sr-only">{t(`ui_domain_reaction_${kind}`)}:</span>
                        {formatCount(locale, comment.reactions[kind])}
                      </li>
                    ))}
                  </ul>
                ) : null)}
              {actions ? <div className="ms-auto flex items-center gap-1">{actions}</div> : null}
            </footer>
          ) : null}
        </div>
      </div>
      {children ? <div className="flex flex-col gap-4">{children}</div> : null}
    </article>
  );
}
