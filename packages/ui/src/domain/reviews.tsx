/**
 * Reviews (research/03 §5.8, PLAN §7.7), presentational:
 *
 * - `StarRating`: 1–5 stars, fractional fill for averages, always with a text alternative.
 * - `RatingHistogram`: 5 → 1 thin bars with counts, mean and total; below the public threshold
 *   it says there are not enough reviews yet instead of showing stars.
 * - `ReviewCard`: author (or «Deleted survivor»), stars, title, body, version used, «Downloaded
 *   this mod», date (+ «edited»), helpful count, the creator's nested reply and an `actions`
 *   slot for the vote / report controls (owned by the page).
 */
import { BadgeCheck, CornerDownRight, EyeOff, Star, ThumbsUp } from 'lucide-react';
import type { ReactNode } from 'react';
import { Avatar } from '../avatar.tsx';
import { cn } from '../cn.ts';
import { Icon } from '../icons.tsx';
import { ProseLocator } from './content.tsx';
import type { ReviewDTO, ReviewsSummaryDTO } from './contracts.ts';
import { formatCount, formatDate, formatDateTime, formatRating, useDomainI18n } from './i18n.ts';
import { RankStamp, TrustedMark } from './stamps.tsx';

export interface StarRatingProps {
  /** 0–5 (fractions allowed). */
  value: number;
  size?: number;
  /** Visible numeric value next to the stars. */
  showValue?: boolean;
  className?: string;
}

export function StarRating({ value, size = 16, showValue = false, className }: StarRatingProps) {
  const { t, locale } = useDomainI18n();
  const clamped = Math.max(0, Math.min(5, value));
  const rating = formatRating(locale, clamped);
  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <span role="img" aria-label={t('ui_domain_rating_out_of', { rating })} className="relative inline-flex">
        <span className="flex text-border-strong" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: 5 fixed stars
            <Icon key={index} icon={Star} size={size} />
          ))}
        </span>
        <span
          className="absolute inset-y-0 start-0 flex overflow-hidden text-featured"
          style={{ width: `${(clamped / 5) * 100}%` }}
          aria-hidden="true"
        >
          {Array.from({ length: 5 }, (_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: 5 fixed stars
            <Icon key={index} icon={Star} size={size} className="fill-current" />
          ))}
        </span>
      </span>
      {showValue ? (
        <span className="text-sm font-semibold tabular-nums" aria-hidden="true">
          {rating}
        </span>
      ) : null}
    </span>
  );
}

export interface RatingHistogramProps {
  summary: ReviewsSummaryDTO;
  className?: string;
}

export function RatingHistogram({ summary, className }: RatingHistogramProps) {
  const { t, locale } = useDomainI18n();
  const max = Math.max(1, ...([5, 4, 3, 2, 1] as const).map((star) => summary.histogram[String(star) as '1']));
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6', className)}>
      <div className="flex flex-col gap-1">
        {summary.showStars && summary.average !== null ? (
          <>
            <p className="font-display-caps text-display-sm leading-none tabular-nums">
              {formatRating(locale, summary.average)}
            </p>
            <StarRating value={summary.average} />
          </>
        ) : (
          <p className="max-w-48 text-sm text-fg-muted">{t('ui_domain_reviews_not_enough')}</p>
        )}
        <p className="text-xs text-fg-muted">{t('ui_domain_reviews_count', { count: summary.count })}</p>
      </div>
      <table className="w-full max-w-sm border-collapse text-xs tabular-nums">
        <caption className="sr-only">{t('ui_domain_reviews_histogram')}</caption>
        <tbody>
          {([5, 4, 3, 2, 1] as const).map((star) => {
            const count = summary.histogram[String(star) as '1'];
            return (
              <tr key={star}>
                <th scope="row" className="w-10 py-0.5 pe-2 text-start font-normal text-fg-muted">
                  <span className="inline-flex items-center gap-0.5">
                    {star}
                    <Icon icon={Star} size={12} className="fill-current text-featured" />
                    <span className="sr-only">{t('ui_domain_reviews_stars', { count: star })}</span>
                  </span>
                </th>
                <td className="py-0.5">
                  <span className="block h-1.5 w-full rounded-full bg-fg/8">
                    <span
                      className="block h-full rounded-full bg-featured"
                      style={{ width: `${(count / max) * 100}%` }}
                    />
                  </span>
                </td>
                <td className="w-10 py-0.5 ps-2 text-end text-fg-muted">{formatCount(locale, count)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export interface ReviewCardProps {
  review: ReviewDTO;
  /** Name of the mod's creator (header of the nested reply). */
  creatorName?: string;
  /** Vote («Helpful?») and report controls. */
  actions?: ReactNode;
  headingLevel?: 3 | 4;
  className?: string;
}

export function ReviewCard({ review, creatorName, actions, headingLevel = 3, className }: ReviewCardProps) {
  const { t, locale, timeZone } = useDomainI18n();
  const Heading = `h${headingLevel}` as const;
  const author = review.author;
  const name = author?.displayName ?? t('ui_domain_deleted_user');
  return (
    <article
      data-review-id={review.id}
      data-status={review.status}
      className={cn('flex flex-col gap-3 rounded-lg border border-border bg-surface p-4 md:p-5', className)}
    >
      {review.status === 'hidden' ? (
        <p className="flex items-center gap-1.5 rounded-sm bg-warning-soft px-2 py-1 text-xs text-warning">
          <Icon icon={EyeOff} size={14} />
          {t('ui_domain_hidden_by_ranger')}
        </p>
      ) : null}
      <header className="flex items-start gap-3">
        <Avatar name={name} id={author?.id ?? 0} src={author?.avatarUrl} size={40} />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <p className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
            {author ? (
              <a
                href={`/profile/${encodeURIComponent(author.handle)}`}
                className="truncate font-semibold text-fg hover:underline"
              >
                {name}
              </a>
            ) : (
              <span className="font-semibold text-fg-muted">{name}</span>
            )}
            {author?.verifiedCreator ? <TrustedMark size={14} /> : null}
            {author?.survivorRank ? <RankStamp rank={author.survivorRank} size="sm" className="ms-1" /> : null}
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-fg-muted">
            <time dateTime={review.createdAt} title={formatDateTime(locale, review.createdAt, timeZone)}>
              {formatDate(locale, review.createdAt, timeZone)}
            </time>
            {review.editedAt ? <span>{t('ui_domain_edited')}</span> : null}
            {review.modVersion ? (
              <span className="font-mono text-2xs">
                {t('ui_domain_review_used_version', { version: review.modVersion.version })}
              </span>
            ) : null}
            {review.isVerifiedDownload ? (
              <span className="inline-flex items-center gap-1 text-success">
                <Icon icon={BadgeCheck} size={12} />
                {t('ui_domain_review_verified_download')}
              </span>
            ) : null}
          </p>
        </div>
        <StarRating value={review.rating} size={14} />
      </header>
      {review.title ? <Heading className="text-base font-semibold text-fg">{review.title}</Heading> : null}
      {review.bodyHtml ? <ProseLocator html={review.bodyHtml} size="sm" /> : null}
      <footer className="flex flex-wrap items-center gap-3 text-xs text-fg-muted">
        {review.helpfulCount > 0 ? (
          <span className="inline-flex items-center gap-1">
            <Icon icon={ThumbsUp} size={12} />
            {t('ui_domain_review_helpful_count', { count: review.helpfulCount })}
          </span>
        ) : null}
        {actions ? <div className="ms-auto flex items-center gap-2">{actions}</div> : null}
      </footer>
      {review.authorReply ? (
        <section className="ms-4 flex flex-col gap-1.5 border-s-2 border-primary ps-4">
          <p className="flex items-center gap-1.5 text-xs text-fg-muted">
            <Icon icon={CornerDownRight} size={14} />
            <span className="font-semibold text-fg">
              {creatorName ? t('ui_domain_review_reply_from', { name: creatorName }) : t('ui_domain_review_reply')}
            </span>
            <time dateTime={review.authorReply.repliedAt}>
              {formatDate(locale, review.authorReply.repliedAt, timeZone)}
            </time>
          </p>
          <ProseLocator html={review.authorReply.bodyHtml} size="sm" />
        </section>
      ) : null}
    </article>
  );
}
