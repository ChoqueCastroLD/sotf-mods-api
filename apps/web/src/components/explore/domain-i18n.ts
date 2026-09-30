/**
 * `@sotf/ui/domain` i18n for the server-rendered Explore pages: numbers and dates in the request
 * locale, localized category/tag names on the cards, and the filter/sort/view copy from the
 * `explore` namespace. The rest of the `ui-domain` copy stays English until that namespace is
 * compiled into `@sotf/i18n` (docs/backlog/WP-25.md, WP-34.md).
 */
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { type DomainI18n, type DomainMessageKey, type DomainMessageParams, englishDomainI18n } from '@sotf/ui/domain';

type Override = (params: DomainMessageParams) => string;

function str(value: unknown): string {
  return typeof value === 'string' ? value : String(value ?? '');
}

const OVERRIDES: Partial<Record<DomainMessageKey, Override>> = {
  ui_domain_filter_included: () => m.explore_filter_included(),
  ui_domain_filter_excluded: () => m.explore_filter_excluded(),
  ui_domain_filter_exclude: (p) => m.explore_filter_exclude({ label: str(p.label) }),
  ui_domain_filter_unexclude: (p) => m.explore_filter_unexclude({ label: str(p.label) }),
  ui_domain_filter_clear: () => m.explore_clear_all(),
  ui_domain_sort_label: () => m.explore_sort_label(),
  ui_domain_view_label: () => m.explore_view_label(),
  ui_domain_view_grid: () => m.explore_view_grid(),
  ui_domain_view_list: () => m.explore_view_list(),
  ui_domain_view_compact: () => m.explore_view_compact(),
};

export function exploreDomainI18n(locale: Locale, taxonomy: (nameKey: string, fallback: string) => string): DomainI18n {
  return {
    locale: toHtmlLang(locale),
    t: (key, params) => {
      const override = OVERRIDES[key];
      return override ? override(params ?? {}) : englishDomainI18n.t(key, params);
    },
    taxonomy,
    timeZone: 'UTC',
  };
}
