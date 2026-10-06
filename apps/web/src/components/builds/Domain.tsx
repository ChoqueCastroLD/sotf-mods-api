/**
 * Server-only React blocks of the build page (no hydration): the first reviews and comments and
 * the related builds, drawn with the `@sotf/ui/domain` components inside a `DomainI18nProvider`
 * that follows the page language (`buildDomainI18n`).
 */
import {
  BuildCard,
  CommentItem,
  DependencyList,
  DomainI18nProvider,
  RatingHistogram,
  ReviewCard,
} from '@sotf/ui/domain';
import type { ReactNode } from 'react';
import type { CommentPage, ModCardDTO, ModDetailDTO, ReviewPage } from './data.ts';
import { buildDomainI18n } from './i18n.ts';

type ReviewsSummary = Parameters<typeof RatingHistogram>[0]['summary'];

function Scope({ lang, children }: { lang: string; children?: ReactNode }) {
  return <DomainI18nProvider value={buildDomainI18n(lang)}>{children}</DomainI18nProvider>;
}

export interface BuildReviewListProps {
  lang: string;
  summary: ReviewsSummary;
  reviews: ReviewPage['items'];
  creatorName: string;
}

/** Histogram + the most helpful reviews. */
export function BuildReviewList({ lang, summary, reviews, creatorName }: BuildReviewListProps) {
  return (
    <Scope lang={lang}>
      <div className="grid gap-5 md:grid-cols-[14rem_1fr] md:items-start">
        <RatingHistogram summary={summary} />
        <ul className="grid gap-4" data-review-list="">
          {reviews.map((review) => (
            <li key={review.id} id={`review-${review.id}`}>
              <ReviewCard review={review} creatorName={creatorName} headingLevel={3} />
            </li>
          ))}
        </ul>
      </div>
    </Scope>
  );
}

export interface BuildCommentListProps {
  lang: string;
  comments: CommentPage['items'];
  /** «N more replies» under a comment whose replies were cut. */
  moreRepliesLabel: (count: number) => string;
}

/** Top comments with their first replies (the comments island of WP-70 takes over from here). */
export function BuildCommentList({ lang, comments, moreRepliesLabel }: BuildCommentListProps) {
  return (
    <Scope lang={lang}>
      <ol className="grid gap-6" data-comment-list="">
        {comments.map((comment) => (
          <li key={comment.id} id={`comment-${comment.id}`}>
            <CommentItem comment={comment} permalink={`#comment-${comment.id}`}>
              {comment.replies.map((reply) => (
                <div key={reply.id} id={`comment-${reply.id}`}>
                  <CommentItem comment={reply} permalink={`#comment-${reply.id}`} />
                </div>
              ))}
            </CommentItem>
            {comment.repliesCount > comment.replies.length ? (
              <p className="ms-12 mt-2 text-sm text-fg-muted">
                {moreRepliesLabel(comment.repliesCount - comment.replies.length)}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </Scope>
  );
}

export interface RelatedBuildsProps {
  lang: string;
  builds: readonly ModCardDTO[];
  label: string;
}

/** Related blueprints: one column on phones, two on tablets, four on desktop. */
export function RelatedBuildGrid({ lang, builds, label }: RelatedBuildsProps) {
  return (
    <Scope lang={lang}>
      <ul aria-label={label} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {builds.map((build) => (
          <li key={build.id} className="min-w-0">
            <BuildCard build={build} headingLevel={3} className="h-full" />
          </li>
        ))}
      </ul>
    </Scope>
  );
}

export interface BuildDependenciesProps {
  lang: string;
  dependencies: ModDetailDTO['dependencies'];
}

/** Required, optional and conflicting mods of the build (besides BuildShare, covered by the steps). */
export function BuildDependencies({ lang, dependencies }: BuildDependenciesProps) {
  return (
    <Scope lang={lang}>
      <DependencyList dependencies={dependencies} headingLevel={3} />
    </Scope>
  );
}
