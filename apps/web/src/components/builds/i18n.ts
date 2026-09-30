/**
 * i18n glue of the build page (WP-63).
 *
 * - `buildDomainI18n(lang)` is the value of the `DomainI18nProvider` wrapping every
 *   `@sotf/ui/domain` component rendered by the page (see `Domain.tsx`): `Intl` formatting follows
 *   the page language and the `ui_domain_*` texts come from the Paraglide catalogue when that
 *   namespace is compiled in (the English source otherwise). A provider (instead of the
 *   process-wide `configureDomainI18n`) keeps the page independent of other pages' setup.
 * - Labels of stored Markdown HTML (alerts, spoilers) and the size-class texts.
 */
import { BUILD_SIZE_THRESHOLDS } from '@sotf/contracts/manifest';
import { formatNumber, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { DEFAULT_LABELS } from '@sotf/markdown/labels';
import type { MarkdownLabels } from '@sotf/markdown/types';
import { createDomainTranslate, type DomainI18n, type DomainMessageKey } from '@sotf/ui/domain';
import type { BuildSizeClass } from './data.ts';

type MessageFn = (inputs?: Record<string, unknown>) => string;
const messages = m as unknown as Readonly<Record<string, MessageFn | undefined>>;
const english = createDomainTranslate({}, 'en');

/** `DomainI18n` of the page (BCP-47 `lang`, UTC dates: the HTML is shared and edge-cached). */
export function buildDomainI18n(lang: string): DomainI18n {
  return {
    locale: lang,
    timeZone: 'UTC',
    t: (key: DomainMessageKey, params) => {
      const message = messages[key];
      return message ? message((params ?? {}) as Record<string, unknown>) : english(key, params);
    },
    taxonomy: (nameKey: string, fallback: string) => {
      const message = messages[nameKey];
      return message ? message({}) : fallback;
    },
  };
}

/** Localised labels of the stored Markdown HTML (`localizeHtml`). */
export function markdownLabels(): MarkdownLabels {
  return {
    ...DEFAULT_LABELS,
    'alert-note': m.builds_md_alert_note(),
    'alert-tip': m.builds_md_alert_tip(),
    'alert-important': m.builds_md_alert_important(),
    'alert-warning': m.builds_md_alert_warning(),
    'alert-caution': m.builds_md_alert_caution(),
    spoiler: m.builds_md_spoiler(),
  };
}

/** «Fewer than 500 pieces», «500 to 1,999 pieces»… for a size class (thresholds of WP-11). */
export function sizeRangeLabel(size: BuildSizeClass, locale: Locale): string {
  const { S, M, L } = BUILD_SIZE_THRESHOLDS;
  const n = (value: number) => formatNumber(locale, value);
  switch (size) {
    case 'S':
      return m.builds_size_range_below({ max: n(S) });
    case 'M':
      return m.builds_size_range_between({ min: n(S), max: n(M - 1) });
    case 'L':
      return m.builds_size_range_between({ min: n(M), max: n(L - 1) });
    default:
      return m.builds_size_range_above({ min: n(L) });
  }
}

/** Login URL that brings the visitor back to the page. */
export function loginHrefFor(loginPath: string, pagePath: string): string {
  return `${loginPath}?next=${encodeURIComponent(pagePath)}`;
}
