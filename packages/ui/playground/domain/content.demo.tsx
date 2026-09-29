import {
  AdSlot,
  ChartFigure,
  CommentItem,
  ConsentBar,
  ProseLocator,
  RatingHistogram,
  ReviewCard,
  Sparkline,
  StarRating,
} from '../../src/domain/index.ts';
import {
  anonymousReview,
  comment,
  deletedComment,
  proseHtml,
  review,
  reviewsSummary,
} from '../../src/domain/test/fixtures.ts';
import { Button } from '../../src/index.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Content · ProseLocator, reviews, comments, charts, AdSlot, ConsentBar';

const DAYS = Array.from({ length: 14 }, (_, index) => ({
  label: `2026-09-${String(index + 16).padStart(2, '0')}`,
  web: [120, 132, 101, 154, 170, 162, 190, 210, 180, 176, 220, 240, 233, 260][index] ?? 0,
  manager: [40, 42, 38, 51, 60, 58, 64, 70, 66, 61, 75, 80, 78, 90][index] ?? 0,
}));

export default function ContentDemo() {
  return (
    <DemoI18n>
      <div className="flex flex-col gap-8">
        <DemoRow label="ProseLocator (every @sotf/markdown hook)">
          <div className="rounded-lg border border-border bg-surface p-5">
            <ProseLocator html={proseHtml} />
          </div>
        </DemoRow>
        <DemoRow label="RatingHistogram · StarRating">
          <RatingHistogram summary={reviewsSummary} />
          <RatingHistogram summary={{ ...reviewsSummary, count: 2, showStars: false, average: 5 }} />
          <StarRating value={3.5} showValue />
        </DemoRow>
        <DemoRow label="ReviewCard">
          <div className="grid gap-4 lg:grid-cols-2">
            <ReviewCard
              review={review}
              creatorName="ImAxel"
              actions={
                <Button variant="ghost" size="sm">
                  Helpful?
                </Button>
              }
            />
            <ReviewCard review={anonymousReview} />
          </div>
        </DemoRow>
        <DemoRow label="CommentItem (bug report, solution reply, deleted)">
          <div className="flex max-w-2xl flex-col gap-6">
            <CommentItem
              comment={comment}
              permalink="#comment-221"
              actions={
                <Button variant="ghost" size="sm">
                  Reply
                </Button>
              }
            >
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </CommentItem>
            <CommentItem comment={deletedComment} />
          </div>
        </DemoRow>
        <DemoRow label="ChartFigure (static SVG here; Recharts + chartTheme in the console)">
          <ChartFigure
            title="Downloads · last 14 days"
            rowHeader="Day"
            series={[
              { key: 'web', label: 'Web' },
              { key: 'manager', label: 'RedManager' },
            ]}
            rows={DAYS}
            height={96}
          >
            <div className="relative h-24">
              <Sparkline values={DAYS.map((day) => day.web)} height={96} className="absolute inset-0" />
              <Sparkline
                values={DAYS.map((day) => day.manager)}
                height={96}
                className="absolute inset-0 text-(--color-chart-2)"
              />
            </div>
          </ChartFigure>
        </DemoRow>
        <DemoRow label="AdSlot (reserved heights)">
          <div className="grid gap-4 md:grid-cols-3">
            <AdSlot format="in-feed" client="ca-pub-0000000000000000" slot="0000000000" />
            <AdSlot format="inline" client="ca-pub-0000000000000000" slot="0000000000" showNotice />
            <AdSlot format="sidebar" client="ca-pub-0000000000000000" slot="0000000000" />
          </div>
        </DemoRow>
        <DemoRow label="ConsentBar (fixed to the viewport in pages; contained here)">
          <div className="relative h-40 overflow-hidden rounded-lg border border-border [transform:translateZ(0)]">
            <ConsentBar policyHref="#cookies" hidden={false} />
          </div>
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
