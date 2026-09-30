/**
 * `@sotf/ui/domain`: domain components of the «Locator» design system (PLAN §3.9, WP-25),
 * typed with the DTOs of `@sotf/contracts`, server-rendered by Astro (no `window` at render
 * time, most of them need no hydration) and shared with the console.
 *
 * Text comes from the `ui-domain` namespace (`./i18n.ts`); tokens, fonts and the generated
 * utilities from `@sotf/ui/tokens.css` (which scans this folder).
 */

export {
  BuildCard,
  type BuildCardProps,
  BuildCardSkeleton,
  CreatorCard,
  type CreatorCardProps,
  CreatorCardSkeleton,
  KitCard,
  type KitCardProps,
  KitCardSkeleton,
} from './cards.tsx';
export {
  CHART_SERIES,
  ChartFigure,
  type ChartFigureProps,
  type ChartSeries,
  chartTheme,
  niceTicks,
  seriesColor,
} from './chart-theme.tsx';
export { CommentItem, type CommentItemData, type CommentItemProps, REACTION_GLYPHS } from './comment-item.tsx';
export {
  COMPAT_STATUS_STYLE,
  COMPAT_STATUS_VALUES,
  CompatBadge,
  type CompatBadgeProps,
  CompatCapsule,
  type CompatCapsuleProps,
  compatCapsulePropsOf,
  type FieldReportCounts,
  FieldReportMeter,
  type FieldReportMeterProps,
  reportShares,
  useCompatLabel,
} from './compat.tsx';
export {
  AD_FORMATS,
  AD_MIN_HEIGHT,
  type AdFormat,
  AdSlot,
  type AdSlotProps,
  ConsentBar,
  type ConsentBarProps,
  PROSE_LOCATOR_CLASSES,
  ProseLocator,
  type ProseLocatorProps,
} from './content.tsx';
export type * from './contracts.ts';
export { DependencyList, type DependencyListProps, ModChip, type ModChipProps } from './dependencies.tsx';
export { DisclosureMenu, type DisclosureMenuProps, disclosureItemClasses } from './disclosure.tsx';
export {
  type DownloadOption,
  DownloadSplitButton,
  type DownloadSplitButtonProps,
  downloadOptionOf,
} from './download-split-button.tsx';
export {
  type FilterChipOption,
  FilterChips,
  type FilterChipsProps,
  type FilterState,
  nextFilterState,
  SortMenu,
  type SortMenuProps,
  type SortOption,
  VIEW_MODES,
  type ViewMode,
  ViewToggle,
  type ViewToggleProps,
} from './filters.tsx';
export { GalleryStrip, type GalleryStripProps, type GalleryVideo } from './gallery-strip.tsx';
export {
  configureDomainI18n,
  createDomainTranslate,
  DOMAIN_MESSAGE_KEYS,
  type DomainI18n,
  DomainI18nProvider,
  type DomainI18nProviderProps,
  type DomainMessageKey,
  type DomainMessageParams,
  type DomainTranslate,
  englishDomainI18n,
  formatBytes,
  formatCompact,
  formatCount,
  formatDate,
  formatDateTime,
  formatRating,
  formatShare,
  profilePath,
  SLOT,
  useDomainI18n,
  useProfileHref,
  withSlot,
} from './i18n.ts';
export { formatIcu, type IcuParams, parseIcu } from './icu.ts';
export {
  MOD_CARD_COMPACT_BELOW,
  MOD_CARD_VARIANTS,
  ModCard,
  type ModCardProps,
  ModCardSkeleton,
  type ModCardSkeletonProps,
  type ModCardVariant,
  modDownloadHref,
  RATING_MIN_REVIEWS,
  UPDATED_WINDOW_DAYS,
} from './mod-card.tsx';
export {
  RatingHistogram,
  type RatingHistogramProps,
  ReviewCard,
  type ReviewCardProps,
  StarRating,
  type StarRatingProps,
} from './reviews.tsx';
export {
  CardLink,
  type CardLinkProps,
  Cover,
  type CoverProps,
  cardClasses,
  cardControlClasses,
  categoryAccent,
  generativeBannerUri,
  generativeCoverUri,
  initialsOf,
  Placeholder,
} from './shared.tsx';
export {
  BadgeStamp,
  type BadgeStampProps,
  RankStamp,
  type RankStampProps,
  SPOTLIGHT_TIERS,
  type StampSize,
  TierStamp,
  type TierStampProps,
  TrustedMark,
  type TrustedMarkProps,
} from './stamps.tsx';
export {
  Sparkline,
  type SparklineProps,
  type StatDelta,
  StatTile,
  type StatTileProps,
  sparklinePoints,
} from './stat-tile.tsx';
export { VersionTable, type VersionTableProps } from './version-table.tsx';
