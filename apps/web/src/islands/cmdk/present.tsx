/**
 * Presentational pieces of the palette: result rows with their thumbnails, highlighted titles,
 * the compat mark and the preview pane (≥ lg): hero image, gallery strip, the facts that decide
 * whether to install, and the actions. Every status carries text, never colour alone. Images are
 * small, rounded, lazy and always inside a box of fixed size (`object-cover`), so nothing shifts
 * when they load; the icon shows only when there is no image (or it fails).
 */
import type { CompatStatus } from '@sotf/contracts/common';
import { formatCompactNumber, formatDate, type Locale } from '@sotf/i18n';
import { Avatar } from '@sotf/ui/avatar';
import {
  Backpack,
  Check,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Clock,
  Code,
  Download,
  DraftingCompass,
  Ellipsis,
  ExternalLink,
  FilePlus2,
  FileText,
  FolderTree,
  GitCompareArrows,
  Globe,
  Heart,
  History,
  Hourglass,
  Info,
  LayoutGrid,
  Library,
  LibraryBig,
  Lightbulb,
  type LucideIcon,
  Monitor,
  Moon,
  Package,
  Puzzle,
  Radar,
  Radio,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Sun,
  Tag,
  TentTree,
  Trophy,
  Upload,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import type { Detail, Mini, PreviewImage } from './detail.ts';
import { t } from './i18n.ts';
import type { ItemAction } from './itemActions.ts';
import { highlight, serverHighlight, type TextSegment } from './text.ts';
import type { ActionIcon, EntryItem, PaletteItem, ResultItem } from './types.ts';
import { isEntry } from './types.ts';

export { latestDownloadPath } from './itemActions.ts';

/** Lucide glyph with the brand stroke (1.75 px, 2 px at ≤ 16 px), decorative. */
export function Glyph({ icon: Shape, size }: { icon: LucideIcon; size: number }) {
  return <Shape size={size} strokeWidth={size <= 16 ? 2 : 1.75} aria-hidden="true" focusable="false" />;
}

/** Button looks of `@sotf/ui` (primary / secondary, md, full width), without its bundle. */
const BUTTON =
  'relative inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none h-10 px-4 text-sm max-md:h-11 ' +
  'transition-[background-color,border-color,color,box-shadow,translate] duration-(--dur-fast) ease-out active:translate-y-px motion-reduce:transition-none';
const PRIMARY = `${BUTTON} bg-primary text-primary-fg hover:bg-primary-hover`;
const SECONDARY = `${BUTTON} border border-border-strong bg-raised text-fg shadow-xs inset-shadow-highlight hover:bg-[color-mix(in_oklab,var(--color-raised),var(--color-fg)_7%)]`;

export const COMPAT_ICON: Record<CompatStatus, { icon: LucideIcon; tone: string; label: () => string }> = {
  works: { icon: CircleCheck, tone: 'text-success', label: () => t('cmdk_compat_works') },
  mixed: { icon: CircleAlert, tone: 'text-warning', label: () => t('cmdk_compat_mixed') },
  broken: { icon: CircleX, tone: 'text-danger', label: () => t('cmdk_compat_broken') },
  untested: { icon: CircleDashed, tone: 'text-fg-muted', label: () => t('cmdk_compat_untested') },
};

export function Highlighted({ segments }: { segments: readonly TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.match ? (
          <mark key={index} className="bg-transparent font-semibold text-primary">
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}

const ACTION_ICONS: Record<ActionIcon, LucideIcon> = {
  explore: Search,
  builds: DraftingCompass,
  kits: Package,
  requests: Lightbulb,
  install: Info,
  radar: Radar,
  creators: UsersRound,
  compare: GitCompareArrows,
  jams: Trophy,
  developers: Code,
  settings: Settings,
  basecamp: TentTree,
  upload: Upload,
  signals: Radio,
  backpack: Backpack,
  history: History,
  ranger: ShieldCheck,
  night: Moon,
  day: Sun,
  system: Monitor,
  language: Globe,
};

export function entryIcon(item: EntryItem): LucideIcon {
  switch (item.type) {
    case 'mod':
      return item.kind === 'library' ? LibraryBig : Puzzle;
    case 'build':
      return DraftingCompass;
    case 'kit':
      return Package;
    case 'user':
      return UserRound;
    case 'category':
      return FolderTree;
    default:
      return FileText;
  }
}

/** Kind label of an entry («Mod», «Library», «Kit»…). */
export function kindLabel(item: EntryItem): string {
  switch (item.type) {
    case 'mod':
      return item.kind === 'library' ? t('cmdk_kind_library') : t('cmdk_kind_mod');
    case 'build':
      return t('cmdk_kind_build');
    case 'kit':
      return t('cmdk_kind_kit');
    case 'user':
      return t('cmdk_kind_creator');
    case 'category':
      return t('cmdk_kind_category');
    default:
      return t('cmdk_kind_page');
  }
}

export function downloadsLabel(locale: Locale, count: number): string {
  return t('cmdk_downloads', { count, display: formatCompactNumber(locale, count) });
}

function ratingLabel(rating: number): string {
  return rating.toFixed(1);
}

/** Secondary line of a row. */
function entryMeta(item: EntryItem, locale: Locale): string {
  const parts: string[] = [];
  if (item.type === 'user') {
    if (item.subtitle) parts.push(item.subtitle);
    if (item.count !== undefined) parts.push(t('cmdk_mods_count', { count: item.count }));
  } else if (item.type === 'kit') {
    if (item.subtitle) parts.push(item.subtitle);
    if (item.count !== undefined) parts.push(t('cmdk_kit_items', { count: item.count }));
  } else if (item.type === 'mod' || item.type === 'build') {
    parts.push(kindLabel(item));
    if (item.subtitle) parts.push(item.subtitle);
    if (item.downloads !== undefined) parts.push(downloadsLabel(locale, item.downloads));
    if (item.rating) parts.push(`★ ${ratingLabel(item.rating)}`);
  } else {
    parts.push(kindLabel(item));
  }
  return parts.join(' · ');
}

// ---------------------------------------------------------------------------------------------
// Images
// ---------------------------------------------------------------------------------------------

/**
 * A lazy image inside a box that already has its final size; when the file fails to load the
 * fallback takes its place, so a broken thumbnail never shows the browser's broken-image glyph.
 */
function Picture({
  src,
  width,
  height,
  className,
  fallback,
  eager = false,
}: {
  src: string;
  width: number;
  height: number;
  className: string;
  fallback: ReactNode;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  // A reused element (the preview) must forget the failure of the previous picture.
  useEffect(() => setFailed(false), [src]);
  if (failed) return <>{fallback}</>;
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${className} bg-sunken object-cover`}
    />
  );
}

const ICON_BOX = 'flex shrink-0 items-center justify-center rounded-md bg-sunken text-fg-muted';

/** 40 px square of a row: thumbnail, creator avatar, or the icon of the kind / command. */
function Thumb({ item }: { item: PaletteItem }) {
  if (item.type === 'search') {
    return (
      <span className={`${ICON_BOX} size-10`}>
        <Glyph icon={Clock} size={16} />
      </span>
    );
  }
  if (item.type === 'suggestion') {
    if (item.avatar) return <Avatar name={item.title} id={item.value} src={item.thumb} size={40} />;
    return (
      <span className={`${ICON_BOX} size-10`}>
        <Glyph icon={item.operator === 'cat' ? FolderTree : Tag} size={16} />
      </span>
    );
  }
  if (item.type === 'action') {
    return (
      <span className={`${ICON_BOX} size-10`}>
        <Glyph icon={ACTION_ICONS[item.icon]} size={16} />
      </span>
    );
  }
  if (item.type === 'user') return <Avatar name={item.title} id={item.id} src={item.thumb} size={40} />;
  const fallback = (
    <span className={`${ICON_BOX} size-10`}>
      <Glyph icon={entryIcon(item)} size={16} />
    </span>
  );
  if (!item.thumb) return fallback;
  return (
    <Picture src={item.thumb} width={40} height={40} className="size-10 shrink-0 rounded-md" fallback={fallback} />
  );
}

export function CompatMark({ status, withText = false }: { status: CompatStatus; withText?: boolean }) {
  const style = COMPAT_ICON[status];
  const label = style.label();
  return (
    <span className={`inline-flex items-center gap-1 ${style.tone}`} title={withText ? undefined : label}>
      <Glyph icon={style.icon} size={14} />
      <span className={withText ? 'text-xs text-fg-muted' : 'sr-only'}>{label}</span>
    </span>
  );
}

/** Content of one result row (the option wrapper lives in the palette). */
export function RowContent({ result, locale }: { result: ResultItem; locale: Locale }) {
  const { item } = result;
  if (item.type === 'action') {
    return (
      <>
        <Thumb item={item} />
        <span className="min-w-0 flex-1 truncate">
          <Highlighted segments={highlight(item.title, result.terms)} />
        </span>
        {item.current ? (
          <span className="shrink-0 rounded-xs border border-border px-1.5 py-0.5 text-2xs text-fg-muted">
            {t('cmdk_action_current')}
          </span>
        ) : null}
      </>
    );
  }
  if (item.type === 'search') {
    return (
      <>
        <Thumb item={item} />
        <span className="min-w-0 flex-1 truncate">{item.title}</span>
      </>
    );
  }
  if (item.type === 'suggestion') {
    return (
      <>
        <Thumb item={item} />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium">{item.title}</span>
          {item.detail ? <span className="truncate font-mono text-xs text-fg-muted">{item.detail}</span> : null}
        </span>
      </>
    );
  }
  const snippet = result.serverHighlight ? serverHighlight(result.serverHighlight) : null;
  return (
    <>
      <Thumb item={item} />
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-medium">
          <Highlighted segments={highlight(item.title, result.terms)} />
        </span>
        <span className="truncate text-xs text-fg-muted">
          {snippet ? <Highlighted segments={snippet} /> : (item.note ?? entryMeta(item, locale))}
        </span>
      </span>
      {item.compat && (item.type === 'mod' || item.type === 'build') ? <CompatMark status={item.compat} /> : null}
    </>
  );
}

// ---------------------------------------------------------------------------------------------
// Preview
// ---------------------------------------------------------------------------------------------

export interface PreviewProps {
  item: PaletteItem | null;
  /** Fetched details of the item (null while loading or when unavailable). */
  detail: Detail | null;
  loading: boolean;
  locale: Locale;
  categoryName: (slug: string) => string | null;
  hrefOf: (path: string) => string;
  actions: readonly ItemAction[];
  onAction: (id: ItemAction['id']) => void;
  onMenu: () => void;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="shrink-0 text-xs text-fg-subtle">{label}</dt>
      <dd className="min-w-0 truncate text-end text-xs text-fg">{children}</dd>
    </div>
  );
}

/** 16:9 box (fixed ratio: no layout shift) with the image, or the icon of the item when it has none. */
function Hero({ image, fallback, eager }: { image: PreviewImage | null; fallback: ReactNode; eager?: boolean }) {
  const empty = <span className="flex size-full items-center justify-center text-fg-muted">{fallback}</span>;
  return (
    <div className="aspect-video w-full shrink-0 overflow-hidden rounded-md border border-border bg-sunken">
      {image ? (
        <Picture src={image.src} width={320} height={180} className="size-full" fallback={empty} eager={eager} />
      ) : (
        empty
      )}
    </div>
  );
}

function Strip({ images }: { images: readonly PreviewImage[] }) {
  if (images.length === 0) return null;
  return (
    <ul aria-label={t('cmdk_preview_gallery')} className="grid grid-cols-4 gap-1.5">
      {images.map((image) => (
        <li key={image.src} className="aspect-video overflow-hidden rounded-sm border border-border bg-sunken">
          <Picture src={image.src} width={80} height={45} className="size-full" fallback={null} />
        </li>
      ))}
    </ul>
  );
}

function MiniList({
  label,
  entries,
  hrefOf,
}: {
  label: string;
  entries: readonly Mini[];
  hrefOf: (path: string) => string;
}) {
  if (entries.length === 0) return null;
  return (
    <section className="flex flex-col gap-1.5">
      <h3 className="font-mono text-2xs tracking-wide text-fg-subtle uppercase">{label}</h3>
      <ul className="flex flex-col gap-1">
        {entries.map((entry) => {
          const body = (
            <>
              {entry.thumb ? (
                <Picture
                  src={entry.thumb}
                  width={32}
                  height={32}
                  className="size-8 shrink-0 rounded-sm"
                  fallback={
                    <span className={`${ICON_BOX} size-8 rounded-sm`}>
                      <Glyph icon={Puzzle} size={14} />
                    </span>
                  }
                />
              ) : (
                <span className={`${ICON_BOX} size-8 rounded-sm`}>
                  <Glyph icon={Puzzle} size={14} />
                </span>
              )}
              <span className="min-w-0 flex-1 truncate text-xs text-fg">{entry.title}</span>
              {entry.note ? <span className="shrink-0 text-2xs text-fg-subtle">{entry.note}</span> : null}
            </>
          );
          return (
            <li key={`${entry.path}|${entry.title}`}>
              {entry.path ? (
                <a
                  href={hrefOf(entry.path)}
                  tabIndex={-1}
                  onMouseDown={(event) => event.preventDefault()}
                  className="flex items-center gap-2 rounded-md p-1 hover:bg-fg/8"
                >
                  {body}
                </a>
              ) : (
                <span className="flex items-center gap-2 p-1">{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Skeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-1.5">
      <span className="skeleton block h-3 w-4/5 [--color-raised:light-dark(var(--color-night-100),var(--color-night-900))]" />
      <span className="skeleton block h-3 w-3/5 [--color-raised:light-dark(var(--color-night-100),var(--color-night-900))]" />
    </div>
  );
}

/** Preview pane (≥ lg): everything the decision needs, and the actions (research/03 §5.5). */
export function Preview({
  item,
  detail,
  loading,
  locale,
  categoryName,
  hrefOf,
  actions,
  onAction,
  onMenu,
}: PreviewProps) {
  if (!item) {
    return <p className="m-auto max-w-48 text-center text-sm text-fg-muted">{t('cmdk_preview_empty')}</p>;
  }
  if (!isEntry(item)) {
    const icon = item.type === 'action' ? ACTION_ICONS[item.icon] : item.type === 'search' ? Clock : Tag;
    const hint =
      item.type === 'search'
        ? t('cmdk_preview_search_hint')
        : item.type === 'suggestion'
          ? t('cmdk_preview_filter_hint')
          : t('cmdk_preview_hint');
    return (
      <div className="m-auto flex max-w-56 flex-col items-center gap-3 text-center">
        <span className={`${ICON_BOX} size-12`}>
          <Glyph icon={icon} size={22} />
        </span>
        <p className="text-sm font-medium text-fg">{item.title}</p>
        <p className="text-xs text-fg-muted">{hint}</p>
      </div>
    );
  }

  const mod = detail?.kind === 'mod' ? detail : null;
  const creator = detail?.kind === 'user' ? detail : null;
  const kit = detail?.kind === 'kit' ? detail : null;
  const category = mod?.category ?? (item.categorySlug ? categoryName(item.categorySlug) : null);
  const icon = <Glyph icon={entryIcon(item)} size={32} />;
  const heroImage: PreviewImage | null =
    mod?.hero ?? creator?.banner ?? kit?.cover ?? (item.thumb ? { src: item.thumb, alt: '' } : null);
  const primary = actions.find((action) => action.id === 'download');
  const open = actions.find((action) => action.id === 'open');
  const version = mod?.version;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 *:shrink-0">
      {item.type === 'category' || item.type === 'page' || (item.type === 'user' && !heroImage) ? null : (
        <Hero image={heroImage} fallback={icon} eager />
      )}
      {mod ? <Strip images={mod.gallery} /> : null}

      <div className="flex items-start gap-3">
        {item.type === 'user' ? (
          <Avatar name={item.title} id={item.id} src={creator?.avatar ?? item.thumb} size={48} />
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-2xs tracking-wide text-fg-subtle uppercase">{kindLabel(item)}</p>
          <p className="line-clamp-2 font-display text-lg leading-tight font-semibold text-fg">{item.title}</p>
          {item.type === 'user' || !item.subtitle ? (
            item.subtitle ? (
              <p className="truncate text-sm text-fg-muted">{item.subtitle}</p>
            ) : null
          ) : (
            <p className="mt-0.5 flex min-w-0 items-center gap-1.5 text-sm text-fg-muted">
              {(mod?.author ?? kit?.owner) ? (
                <Avatar
                  name={(mod?.author ?? kit?.owner)?.name ?? ''}
                  id={(mod?.author ?? kit?.owner)?.id ?? 0}
                  src={(mod?.author ?? kit?.owner)?.avatar}
                  size={20}
                />
              ) : null}
              <span className="truncate">{item.subtitle}</span>
            </p>
          )}
        </div>
        {item.compat && (item.type === 'mod' || item.type === 'build') ? (
          <CompatMark status={item.compat} withText />
        ) : null}
      </div>

      {mod?.description ? <p className="line-clamp-3 text-sm text-fg-muted">{mod.description}</p> : null}
      {loading && !detail ? <Skeleton /> : null}

      <dl className="flex flex-col gap-1.5 rounded-md border border-border bg-sunken/60 p-3">
        {version ? (
          <Fact label={t('cmdk_fact_version')}>
            <span className="font-mono">v{version}</span>
            {mod?.updatedAt ? (
              <span className="text-fg-muted"> · {formatDate(locale, mod.updatedAt, 'medium')}</span>
            ) : null}
          </Fact>
        ) : null}
        {category ? <Fact label={t('cmdk_kind_category')}>{category}</Fact> : null}
        {item.downloads !== undefined || mod ? (
          <Fact label={t('cmdk_fact_downloads')}>{downloadsLabel(locale, mod?.downloads ?? item.downloads ?? 0)}</Fact>
        ) : null}
        {mod && mod.downloads7d > 0 ? (
          <Fact label={t('cmdk_fact_weekly')}>
            {t('cmdk_downloads_week', { display: formatCompactNumber(locale, mod.downloads7d) })}
          </Fact>
        ) : null}
        {mod ? <Fact label={t('cmdk_fact_followers')}>{formatCompactNumber(locale, mod.followers)}</Fact> : null}
        {mod?.rating ? (
          <Fact label={t('cmdk_fact_rating')}>
            ★ {ratingLabel(mod.rating)} ({mod.ratingCount})
          </Fact>
        ) : item.rating ? (
          <Fact label={t('cmdk_fact_rating')}>★ {ratingLabel(item.rating)}</Fact>
        ) : null}
        {item.manifestId ? (
          <Fact label={t('cmdk_fact_manifest_id')}>
            <code className="font-mono">{item.manifestId}</code>
          </Fact>
        ) : null}
        {item.type === 'kit' ? (
          <Fact label={t('cmdk_fact_contents')}>{t('cmdk_kit_items', { count: kit?.items ?? item.count ?? 0 })}</Fact>
        ) : null}
        {kit ? <Fact label={t('cmdk_fact_followers')}>{formatCompactNumber(locale, kit.followers)}</Fact> : null}
        {item.type === 'user' ? (
          <Fact label={t('cmdk_fact_published')}>
            {t('cmdk_mods_count', { count: creator?.mods ?? item.count ?? 0 })}
          </Fact>
        ) : null}
        {creator ? <Fact label={t('cmdk_fact_total')}>{downloadsLabel(locale, creator.downloads)}</Fact> : null}
        {creator ? (
          <Fact label={t('cmdk_fact_followers')}>{formatCompactNumber(locale, creator.followers)}</Fact>
        ) : null}
      </dl>

      {mod ? <MiniList label={t('cmdk_fact_deps')} entries={mod.dependencies} hrefOf={hrefOf} /> : null}
      {creator ? <MiniList label={t('cmdk_preview_top_mods')} entries={creator.top} hrefOf={hrefOf} /> : null}
      {kit ? <MiniList label={t('cmdk_preview_kit_items')} entries={kit.top} hrefOf={hrefOf} /> : null}

      {(mod?.tags ?? item.tags ?? []).length > 0 ? (
        <ul className="flex flex-wrap gap-1">
          {(mod?.tags.length ? mod.tags : (item.tags ?? [])).slice(0, 6).map((tag) => (
            <li key={tag} className="rounded-xs border border-border px-1.5 py-0.5 font-mono text-2xs text-fg-muted">
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-col gap-2 pt-1">
        {primary ? (
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onAction('download')}
            className={PRIMARY}
            aria-keyshortcuts="Shift+Enter"
          >
            <Glyph icon={Download} size={16} />
            {primary.label}
          </button>
        ) : null}
        {open ? (
          <a
            href={hrefOf(item.path)}
            tabIndex={-1}
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
              event.preventDefault();
              onAction('open');
            }}
            className={SECONDARY}
          >
            <Glyph icon={ExternalLink} size={16} />
            {open.label}
          </a>
        ) : null}
        {actions.length > 2 ? (
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onMenu}
            aria-haspopup="menu"
            aria-keyshortcuts="ArrowRight"
            className="inline-flex min-h-8 items-center justify-center gap-2 rounded-md text-xs font-medium text-link hover:bg-fg/8"
          >
            <Glyph icon={Ellipsis} size={16} />
            {t('cmdk_act_more')}
          </button>
        ) : null}
      </div>
    </div>
  );
}

/** Glyph of an item action (menu and quick buttons). */
export const ITEM_ACTION_ICONS: Record<ItemAction['id'], LucideIcon> = {
  open: ExternalLink,
  'new-tab': LayoutGrid,
  download: Download,
  follow: Heart,
  kit: Library,
  'copy-link': FilePlus2,
  'copy-id': Check,
  compare: GitCompareArrows,
  versions: History,
  report: Hourglass,
};

export { Star as RatingGlyph };
