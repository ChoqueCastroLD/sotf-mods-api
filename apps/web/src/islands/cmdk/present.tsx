/**
 * Presentational pieces of the palette: result rows, highlighted titles, the compat mark and the
 * preview pane (≥ lg) with the direct download. Every status carries text, never colour alone.
 */
import type { CompatStatus } from '@sotf/contracts/common';
import { formatCompactNumber, type Locale } from '@sotf/i18n';
import {
  Backpack,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  CircleX,
  Download,
  DraftingCompass,
  ExternalLink,
  FileText,
  FolderTree,
  Globe,
  LibraryBig,
  type LucideIcon,
  Monitor,
  Moon,
  Package,
  Puzzle,
  Radio,
  Sun,
  TentTree,
  Upload,
  UserRound,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { t } from './i18n.ts';
import { highlight, serverHighlight, type TextSegment } from './text.ts';
import type { ActionItem, EntryItem, PaletteItem, ResultItem } from './types.ts';

/** Lucide glyph with the brand stroke (1.75 px, 2 px at ≤ 16 px), decorative. */
export function Glyph({ icon: Shape, size }: { icon: LucideIcon; size: number }) {
  return <Shape size={size} strokeWidth={size <= 16 ? 2 : 1.75} aria-hidden="true" focusable="false" />;
}

/** Button looks of `@sotf/ui` (primary / secondary, md, full width), without its bundle. */
const BUTTON =
  'relative inline-flex w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium select-none h-10 px-4 text-sm max-md:h-11 ' +
  'transition-[background-color,border-color,color,box-shadow,translate] duration-(--dur-fast) ease-out active:translate-y-px';
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

function entryIcon(item: EntryItem): LucideIcon {
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

function actionIcon(item: ActionItem): LucideIcon {
  if (item.id === 'theme-dark') return Moon;
  if (item.id === 'theme-light') return Sun;
  if (item.id === 'theme-system') return Monitor;
  if (item.id.startsWith('language-')) return Globe;
  if (item.id === 'upload' || item.id === 'upload-build') return Upload;
  if (item.id === 'basecamp') return TentTree;
  if (item.id === 'signals') return Radio;
  return Backpack;
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
  } else {
    parts.push(kindLabel(item));
  }
  return parts.join(' · ');
}

function Thumb({ item }: { item: PaletteItem }) {
  if (item.type !== 'action' && item.thumb) {
    return (
      <img
        src={item.thumb}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="size-8 shrink-0 rounded-sm bg-sunken object-cover"
      />
    );
  }
  const glyph = item.type === 'action' ? actionIcon(item) : entryIcon(item);
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-sunken text-fg-muted">
      <Glyph icon={glyph} size={16} />
    </span>
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

/** Content of one result row (the `CommandItem` wrapper lives in the palette). */
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

/** `/mods/:user/:slug/download/latest` of a mod, library or build (download routes live under `/mods`). */
export function latestDownloadPath(item: EntryItem): string | null {
  if (item.type !== 'mod' && item.type !== 'build') return null;
  const [, section, user, slug] = item.path.split('/');
  if ((section !== 'mods' && section !== 'builds') || !user || !slug) return null;
  return `/mods/${user}/${slug}/download/latest`;
}

export interface PreviewProps {
  item: PaletteItem | null;
  locale: Locale;
  categoryName: (slug: string) => string | null;
  hrefOf: (path: string) => string;
  onOpen: (item: PaletteItem) => void;
  onDownload: (item: EntryItem) => void;
  modKey: string;
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-xs text-fg-subtle">{label}</dt>
      <dd className="min-w-0 truncate text-end text-xs text-fg">{children}</dd>
    </div>
  );
}

/** Preview pane (≥ lg): mini card, compatibility and the direct download (research/03 §5.5). */
export function Preview({ item, locale, categoryName, hrefOf, onOpen, onDownload, modKey }: PreviewProps) {
  if (!item) {
    return <p className="m-auto max-w-48 text-center text-sm text-fg-muted">{t('cmdk_preview_empty')}</p>;
  }
  if (item.type === 'action') {
    return (
      <div className="m-auto flex max-w-56 flex-col items-center gap-3 text-center">
        <Thumb item={item} />
        <p className="text-sm font-medium text-fg">{item.title}</p>
        <p className="text-xs text-fg-muted">{t('cmdk_preview_hint')}</p>
      </div>
    );
  }

  const download = latestDownloadPath(item);
  const category = item.categorySlug ? categoryName(item.categorySlug) : null;
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="flex items-start gap-3">
        {item.thumb ? (
          <img
            src={item.thumb}
            alt=""
            width={64}
            height={64}
            decoding="async"
            className="size-16 shrink-0 rounded-md border border-border bg-sunken object-cover"
          />
        ) : (
          <span className="flex size-16 shrink-0 items-center justify-center rounded-md border border-border bg-sunken text-fg-muted">
            <Glyph icon={entryIcon(item)} size={28} />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="font-mono text-2xs tracking-wide text-fg-subtle uppercase">{kindLabel(item)}</p>
          <p className="line-clamp-2 font-display text-lg leading-tight font-semibold text-fg">{item.title}</p>
          {item.subtitle ? <p className="truncate text-sm text-fg-muted">{item.subtitle}</p> : null}
        </div>
      </div>

      <dl className="flex flex-col gap-1.5 rounded-md border border-border bg-sunken/60 p-3">
        {item.compat ? (
          <Fact label={t('cmdk_fact_compat')}>
            <CompatMark status={item.compat} withText />
          </Fact>
        ) : null}
        {item.downloads !== undefined ? (
          <Fact label={t('cmdk_fact_downloads')}>{downloadsLabel(locale, item.downloads)}</Fact>
        ) : null}
        {category ? <Fact label={t('cmdk_kind_category')}>{category}</Fact> : null}
        {item.manifestId ? (
          <Fact label={t('cmdk_fact_manifest_id')}>
            <code className="font-mono">{item.manifestId}</code>
          </Fact>
        ) : null}
        {item.type === 'kit' && item.count !== undefined ? (
          <Fact label={t('cmdk_fact_contents')}>{t('cmdk_kit_items', { count: item.count })}</Fact>
        ) : null}
        {item.type === 'user' && item.count !== undefined ? (
          <Fact label={t('cmdk_fact_published')}>{t('cmdk_mods_count', { count: item.count })}</Fact>
        ) : null}
      </dl>

      {item.tags && item.tags.length > 0 ? (
        <ul className="flex flex-wrap gap-1">
          {item.tags.slice(0, 6).map((tag) => (
            <li key={tag} className="rounded-xs border border-border px-1.5 py-0.5 font-mono text-2xs text-fg-muted">
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-col gap-2">
        {download ? (
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onDownload(item)}
            className={PRIMARY}
            aria-keyshortcuts={`${modKey === '⌘' ? 'Meta' : 'Control'}+D`}
          >
            <Glyph icon={Download} size={16} />
            {t('cmdk_preview_download')}
          </button>
        ) : null}
        <a
          href={hrefOf(item.path)}
          tabIndex={-1}
          onMouseDown={(event) => event.preventDefault()}
          onClick={(event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            onOpen(item);
          }}
          className={SECONDARY}
        >
          <Glyph icon={ExternalLink} size={16} />
          {t('cmdk_preview_open')}
        </a>
      </div>
    </div>
  );
}
