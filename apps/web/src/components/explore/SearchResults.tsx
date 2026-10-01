/**
 * Search results grouped by type (server-rendered, not hydrated). Matches arrive from the API as
 * plain text with the match wrapped in «»; they are rendered as `<mark>` without any HTML
 * parsing. Links point to the page's locale.
 */
import type { SearchHitDTO } from '@sotf/contracts/search';
import { type Locale, localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { CompatBadge, type DomainI18n, DomainI18nProvider, formatCompact } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ArrowRight, BookOpen, Download, Layers, Package, Ruler, User } from 'lucide-react';
import type { ReactNode } from 'react';

export interface SearchGroup {
  key: SearchHitDTO['type'];
  title: string;
  hits: SearchHitDTO[];
}

export interface SearchResultsProps {
  groups: readonly SearchGroup[];
  locale: Locale;
  i18n: DomainI18n;
  exploreHref: string;
  exploreLabel: string;
}

const TYPE_ICON = { mod: Package, build: Ruler, kit: Layers, user: User, page: BookOpen } as const;

/** «Stack»Mod → Stack (marked) + Mod. Unbalanced markers are shown as text. */
export function highlight(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /«([^«»]+)»/g;
  let last = 0;
  let index = 0;
  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    out.push(
      <mark key={index++} className="rounded-xs bg-primary/20 px-0.5 text-fg">
        {match[1]}
      </mark>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Hit({ hit, locale, i18n }: { hit: SearchHitDTO; locale: Locale; i18n: DomainI18n }) {
  const TypeIcon = TYPE_ICON[hit.type];
  // The API may show a translated title and keep the original in `titleOriginal`; the highlight
  // always marks the match in the original text.
  const plain = hit.highlight?.replace(/[«»]/g, '');
  const original = hit.titleOriginal ?? null;
  const title = original === null && hit.highlight && plain === hit.title ? highlight(hit.highlight) : hit.title;
  const snippet = hit.highlight && plain !== hit.title && plain !== original ? highlight(hit.highlight) : null;
  const originalNode =
    original !== null ? (hit.highlight && plain === original ? highlight(hit.highlight) : original) : null;
  return (
    <li className="relative flex min-h-[4.5rem] min-w-0 items-center gap-3 rounded-xl border border-border bg-surface p-3 hover:border-border-strong hover:bg-raised active:bg-raised">
      <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-raised text-fg-muted md:size-12 md:rounded-md">
        {hit.thumbnailUrl ? (
          <img
            src={hit.thumbnailUrl}
            alt=""
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <Icon icon={TypeIcon} size={20} />
        )}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <a
          href={localizePath(hit.path, locale)}
          className="truncate font-semibold text-fg after:absolute after:inset-0 after:content-[''] focus-visible:outline-none after:focus-visible:rounded-lg after:focus-visible:outline-2 after:focus-visible:outline-focus"
        >
          {title}
        </a>
        {originalNode !== null ? (
          <span translate="no" className="truncate text-xs text-fg-subtle">
            {originalNode}
          </span>
        ) : null}
        {hit.subtitle ? <span className="truncate text-sm text-fg-muted">{hit.subtitle}</span> : null}
        {snippet ? <span className="line-clamp-1 text-sm text-fg-muted">{snippet}</span> : null}
      </span>
      <span className="flex shrink-0 flex-col items-end gap-1 text-xs text-fg-muted">
        {hit.compatStatus && hit.compatStatus !== 'untested' ? (
          <DomainI18nProvider value={i18n}>
            <CompatBadge status={hit.compatStatus} size="sm" short />
          </DomainI18nProvider>
        ) : null}
        {typeof hit.downloads === 'number' ? (
          <span className="inline-flex items-center gap-1 tabular-nums">
            <Icon icon={Download} size={14} />
            <span aria-hidden="true">{formatCompact(i18n.locale, hit.downloads)}</span>
            <span className="sr-only">{m.common_downloads_count({ count: hit.downloads })}</span>
          </span>
        ) : null}
      </span>
    </li>
  );
}

export default function SearchResults({ groups, locale, i18n, exploreHref, exploreLabel }: SearchResultsProps) {
  const hasMods = groups.some((group) => group.key === 'mod' || group.key === 'build');
  return (
    <div className="flex flex-col gap-8">
      {groups.map((group) => (
        <section key={group.key} aria-labelledby={`search-group-${group.key}`} className="flex flex-col gap-3">
          <h2 id={`search-group-${group.key}`} className="readout">
            {group.title} <span className="font-mono tabular-nums">({group.hits.length})</span>
          </h2>
          <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {group.hits.map((hit) => (
              <Hit key={`${hit.type}:${hit.id}`} hit={hit} locale={locale} i18n={i18n} />
            ))}
          </ul>
        </section>
      ))}
      {hasMods ? (
        <a
          href={exploreHref}
          rel="nofollow"
          className="inline-flex items-center gap-1 self-start text-sm font-medium text-link hover:underline"
        >
          {exploreLabel}
          <Icon icon={ArrowRight} size={14} className="rtl:rotate-180" />
        </a>
      ) : null}
    </div>
  );
}
