/**
 * Breadcrumbs (PLAN §3.9): `nav` landmark + ordered list, the last item is the current page.
 * `breadcrumbListJsonLd` builds the matching schema.org `BreadcrumbList` for the page head.
 */
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';

export interface BreadcrumbItem {
  label: ReactNode;
  /** Omit on the current page. */
  href?: string;
}

export interface BreadcrumbsProps {
  items: readonly BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const t = useUiTranslate();
  return (
    <nav aria-label={t('ui_breadcrumbs')} className={className}>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-sm text-fg-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: breadcrumb trails are positional
            <li key={index} className="inline-flex min-w-0 items-center gap-1">
              {item.href && !last ? (
                <a href={item.href} className="truncate rounded-xs underline-offset-3 hover:text-fg hover:underline">
                  {item.label}
                </a>
              ) : (
                <span
                  className={cn('truncate', last && 'font-medium text-fg')}
                  aria-current={last ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {last ? null : <Icon icon={ChevronRight} size={14} className="text-fg-subtle rtl:rotate-180" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export interface BreadcrumbJsonLdItem {
  name: string;
  /** Absolute URL, or a path resolved against `origin`. */
  href: string;
}

/** schema.org `BreadcrumbList` (serialize with `JSON.stringify` into `application/ld+json`). */
export function breadcrumbListJsonLd(items: readonly BreadcrumbJsonLdItem[], origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.href, origin).toString(),
    })),
  } as const;
}
