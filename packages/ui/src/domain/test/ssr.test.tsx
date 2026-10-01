/**
 * Every domain component renders on the server without a DOM (Astro renders them with
 * `renderToString`, mostly without hydration). The case table must cover every component the
 * barrel exports, and each case's markup is pinned by a snapshot.
 */
import type { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import * as domain from '../index.ts';
import {
  anonymousReview,
  betaVersion,
  build,
  comment,
  conflict,
  creator,
  deletedComment,
  dependencies,
  kit,
  mod,
  modDetail,
  modWithoutImage,
  privateKit,
  proseHtml,
  review,
  reviewsSummary,
  version,
  yankedVersion,
} from './fixtures.ts';

const {
  AdSlot,
  BadgeStamp,
  BuildCard,
  BuildCardSkeleton,
  ChartFigure,
  CommentItem,
  CompatBadge,
  CompatCapsule,
  ConsentBar,
  CreatorCard,
  CreatorCardSkeleton,
  DependencyList,
  DisclosureMenu,
  DomainI18nProvider,
  DownloadSplitButton,
  FieldReportMeter,
  FilterChips,
  GalleryStrip,
  KitCard,
  KitCardSkeleton,
  ModCard,
  ModCardSkeleton,
  ModChip,
  OriginalName,
  ProseLocator,
  RankStamp,
  RatingHistogram,
  ReviewCard,
  SortMenu,
  Sparkline,
  StarRating,
  StatTile,
  TierStamp,
  TrustedMark,
  VersionTable,
  ViewToggle,
  CardLink,
  Cover,
  Placeholder,
} = domain;

type Case = [name: string, render: () => ReactElement];

const cases: Record<string, Case[]> = {
  ModCard: [
    ['grid', () => <ModCard mod={mod} currentBuild="1.0.4" action={<button type="button">♥</button>} />],
    ['grid without image, pending, featured', () => <ModCard mod={modWithoutImage} isNew />],
    ['grid updated recently', () => <ModCard mod={mod} now="2026-09-30T00:00:00.000Z" viewTransition={false} />],
    ['row', () => <ModCard mod={mod} variant="row" />],
    ['row without download', () => <ModCard mod={mod} variant="row" downloadHref={null} />],
    ['compact', () => <ModCard mod={mod} variant="compact" headingLevel={4} />],
    ['feature', () => <ModCard mod={mod} variant="feature" quote="Built it for my own saves first." priority />],
  ],
  ModCardSkeleton: [
    ['grid', () => <ModCardSkeleton />],
    ['row', () => <ModCardSkeleton variant="row" />],
    ['compact', () => <ModCardSkeleton variant="compact" />],
    ['feature', () => <ModCardSkeleton variant="feature" />],
  ],
  BuildCard: [
    ['with pieces', () => <BuildCard build={build} pieces={1248} buildShareVersion="1.2" />],
    ['unknown pieces', () => <BuildCard build={build} />],
  ],
  BuildCardSkeleton: [['default', () => <BuildCardSkeleton />]],
  KitCard: [
    ['knolling', () => <KitCard kit={kit} totalSize={48 * 1024 * 1024} compat="works" currentBuild="1.0.4" />],
    ['private and empty', () => <KitCard kit={privateKit} />],
  ],
  KitCardSkeleton: [['default', () => <KitCardSkeleton />]],
  CreatorCard: [['default', () => <CreatorCard creator={creator} iconMode="inline" />]],
  CreatorCardSkeleton: [['default', () => <CreatorCardSkeleton />]],
  StatTile: [
    [
      'up',
      () => (
        <StatTile label="Downloads" value={1_982_114} delta={{ change: 0.12, days: 7 }} sparkline={[3, 5, 4, 8, 9]} />
      ),
    ],
    ['down', () => <StatTile label="Followers" value={58} format="count" delta={{ change: -0.05, days: 30 }} />],
    [
      'flat, display',
      () => <StatTile label="Rating" value={4.6} display="4.6" size="display" delta={{ change: 0, days: 7 }} />,
    ],
  ],
  Sparkline: [
    ['decorative', () => <Sparkline values={[1, 3, 2, 5]} />],
    ['labelled, single value', () => <Sparkline values={[4]} label="Flat week" />],
  ],
  CompatBadge: [
    ['works on build', () => <CompatBadge status="works" build="1.0.4" />],
    ['broken short', () => <CompatBadge status="broken" build="1.0.4" short size="sm" />],
    ['untested', () => <CompatBadge status="untested" />],
    ['mixed', () => <CompatBadge status="mixed" build="1.0.4" />],
  ],
  CompatCapsule: [
    ['from a mod detail', () => <CompatCapsule {...domain.compatCapsulePropsOf(modDetail)} />],
    [
      'row, unknowns, conflict',
      () => <CompatCapsule compat={modDetail.compatCurrent} layout="row" dependencies={[conflict]} />,
    ],
  ],
  FieldReportMeter: [
    [
      'with reports',
      () => (
        <FieldReportMeter
          works={31}
          partial={1}
          broken={3}
          build="1.0.4"
          reportHref="/report"
          byBuild={version.compat}
        />
      ),
    ],
    ['empty', () => <FieldReportMeter works={0} partial={0} broken={0} onReport={() => {}} />],
  ],
  VersionTable: [
    [
      'versions',
      () => (
        <VersionTable versions={[betaVersion, version, yankedVersion]} lastDownloadedAt="2026-09-27T00:00:00.000Z" />
      ),
    ],
    ['empty', () => <VersionTable versions={[]} />],
  ],
  OriginalName: [
    [
      'translated',
      () => <OriginalName card={{ name: 'Axel Mod Menu', localized: { name: 'Menú de mods de Axel' } }} />,
    ],
    ['untranslated renders nothing', () => <OriginalName card={{ name: 'Axel Mod Menu' }} />],
  ],
  ModChip: [
    ['required, linked', () => <ModChip dependency={dependencies[0] as domain.DependencyDTO} />],
    ['optional, missing', () => <ModChip dependency={dependencies[1] as domain.DependencyDTO} />],
    ['conflicts, removed', () => <ModChip dependency={conflict} />],
  ],
  DependencyList: [
    ['grouped', () => <DependencyList dependencies={[...dependencies, conflict]} />],
    ['empty', () => <DependencyList dependencies={[]} />],
  ],
  RankStamp: [['veteran', () => <RankStamp rank="veteran" animate />]],
  TierStamp: [
    ['spotlight', () => <TierStamp tier="fortress" size="lg" />],
    ['regular inline icon', () => <TierStamp tier="campfire" size="sm" iconMode="inline" />],
  ],
  BadgeStamp: [
    ['earned (lucide icon)', () => <BadgeStamp name="Crash landing" icon="plane-landing" count={3} />],
    ['earned (field-kit icon)', () => <BadgeStamp name="Original survivor" icon="contour-pin" iconMode="inline" />],
    [
      'locked with progress',
      () => <BadgeStamp name="Field medic" icon="cross" locked progress={{ current: 4, target: 10 }} />,
    ],
  ],
  TrustedMark: [
    ['icon', () => <TrustedMark />],
    ['with label', () => <TrustedMark withLabel />],
  ],
  DownloadSplitButton: [
    [
      'with other versions',
      () => (
        <DownloadSplitButton
          primary={domain.downloadOptionOf(version)}
          others={[domain.downloadOptionOf(betaVersion)]}
          allVersionsHref="/mods/imaxel/axel's-mod-menu/versions"
          glow
        />
      ),
    ],
    [
      'done, single',
      () => <DownloadSplitButton primary={{ version: '1.0.0', href: '/d/1.0.0' }} state="done" size="md" />,
    ],
  ],
  GalleryStrip: [
    ['links with video', () => <GalleryStrip images={modDetail.gallery} video={modDetail.video} selectedIndex={1} />],
    ['buttons', () => <GalleryStrip images={modDetail.gallery} onSelect={() => {}} selectedIndex={0} />],
    ['empty', () => <GalleryStrip images={[]} />],
  ],
  FilterChips: [
    [
      'links',
      () => (
        <FilterChips
          label="Category"
          clearHref="/mods"
          options={[
            {
              value: 'qol',
              label: 'Quality of Life',
              count: 42,
              state: 'include',
              href: '/mods',
              excludeHref: '/mods?not=qol',
            },
            {
              value: 'gameplay',
              label: 'Gameplay',
              count: 1200,
              href: '/mods?category=gameplay',
              excludeHref: '/mods?not=gameplay',
            },
            { value: 'nsfw', label: 'NSFW', state: 'exclude', href: '/mods', excludeHref: '/mods' },
          ]}
        />
      ),
    ],
    ['callbacks', () => <FilterChips label="Tags" onChange={() => {}} options={[{ value: 'ui', label: 'UI' }]} />],
  ],
  SortMenu: [
    [
      'links',
      () => (
        <SortMenu
          value="downloads"
          options={[
            { value: 'downloads', label: 'Most downloaded', href: '?sort=downloads' },
            { value: 'recent', label: 'Recently updated', href: '?sort=recent' },
          ]}
        />
      ),
    ],
    [
      'callbacks',
      () => (
        <SortMenu
          value="b"
          onValueChange={() => {}}
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
          ]}
        />
      ),
    ],
  ],
  ViewToggle: [
    [
      'links',
      () => <ViewToggle value="grid" hrefs={{ grid: '?view=grid', list: '?view=list', compact: '?view=compact' }} />,
    ],
    ['callbacks', () => <ViewToggle value="list" onValueChange={() => {}} modes={['grid', 'list']} />],
  ],
  DisclosureMenu: [['default', () => <DisclosureMenu summary="More">Content</DisclosureMenu>]],
  AdSlot: [
    ['in-feed', () => <AdSlot format="in-feed" client="ca-pub-0000000000000000" slot="1234567890" />],
    ['sidebar with notice', () => <AdSlot format="sidebar" client="ca-pub-0000000000000000" slot="1" showNotice />],
    ['inline', () => <AdSlot format="inline" client="ca-pub-0000000000000000" slot="2" />],
  ],
  ConsentBar: [
    ['hidden until the script reveals it', () => <ConsentBar policyHref="/cookies" />],
    ['visible', () => <ConsentBar policyHref="/cookies" hidden={false} />],
  ],
  ProseLocator: [
    ['html', () => <ProseLocator html={proseHtml} lang="en" />],
    [
      'children, small',
      () => (
        <ProseLocator size="sm">
          <p>Plain</p>
        </ProseLocator>
      ),
    ],
  ],
  StarRating: [['fraction with value', () => <StarRating value={4.6} showValue />]],
  RatingHistogram: [
    ['stars', () => <RatingHistogram summary={reviewsSummary} />],
    ['not enough', () => <RatingHistogram summary={{ ...reviewsSummary, count: 2, showStars: false, average: 5 }} />],
  ],
  ReviewCard: [
    [
      'full',
      () => <ReviewCard review={review} creatorName="ImAxel" actions={<button type="button">Helpful</button>} />,
    ],
    ['deleted author, hidden', () => <ReviewCard review={anonymousReview} />],
  ],
  CommentItem: [
    [
      'with reply',
      () => (
        <CommentItem comment={comment} permalink="#comment-221" actions={<button type="button">Reply</button>}>
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </CommentItem>
      ),
    ],
    ['deleted', () => <CommentItem comment={deletedComment} />],
  ],
  ChartFigure: [
    [
      'two series',
      () => (
        <ChartFigure
          title="Downloads"
          rowHeader="Day"
          series={[
            { key: 'web', label: 'Web' },
            { key: 'manager', label: 'RedManager' },
          ]}
          rows={[{ label: '2026-09-29', web: 120, manager: 40 }]}
        >
          <svg aria-hidden="true" />
        </ChartFigure>
      ),
    ],
  ],
  CardLink: [['default', () => <CardLink href="/mods/x">X</CardLink>]],
  Placeholder: [['sized', () => <Placeholder className="size-12 rounded-md" />]],
  Cover: [
    ['image', () => <Cover image={mod.thumbnail} seed={mod.slug} name={mod.name} sizes="100vw" />],
    ['generative', () => <Cover image={null} seed="kelvin-seek" name="Kelvin Seek" />],
  ],
  DomainI18nProvider: [
    [
      'spanish formatting',
      () => (
        <DomainI18nProvider value={{ ...domain.englishDomainI18n, locale: 'es' }}>
          <StatTile label="Descargas" value={1_982_114} />
        </DomainI18nProvider>
      ),
    ],
  ],
};

describe('domain components render on the server', () => {
  it('has no DOM in this environment', () => {
    expect(typeof window).toBe('undefined');
    expect(typeof document).toBe('undefined');
  });

  it('covers every component exported by the barrel', () => {
    const components = Object.entries(domain)
      .filter(([name, value]) => typeof value === 'function' && /^[A-Z]/.test(name))
      .map(([name]) => name)
      .sort();
    expect(Object.keys(cases).sort()).toEqual(components);
  });

  for (const [component, list] of Object.entries(cases)) {
    for (const [label, render] of list) {
      it(`${component} · ${label}`, () => {
        const html = renderToString(render());
        expect(html).toMatchSnapshot();
      });
    }
  }
});
