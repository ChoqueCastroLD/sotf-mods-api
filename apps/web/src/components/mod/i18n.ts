/**
 * i18n glue of the mod page (WP-62).
 *
 * - `configureModDomainI18n()` makes the `@sotf/ui/domain` components rendered by Astro speak the
 *   request locale: `Intl` formatting follows the page, and the `ui_domain_*` texts come from the
 *   Paraglide catalogue when the `ui-domain` namespace is compiled in (English source otherwise).
 *   Astro renders every React component separately, so a context provider cannot span the page:
 *   the configuration is process-wide and request-aware (the locale getter reads the request's
 *   AsyncLocalStorage through `getLocale()`).
 * - Small helpers for labels that come from data (taxonomy names, licences, link kinds).
 */
import type { LinkDTO } from '@sotf/contracts/common';
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { getLocale } from '@sotf/i18n/runtime';
import { DEFAULT_LABELS } from '@sotf/markdown/labels';
import type { MarkdownLabels } from '@sotf/markdown/types';
import {
  configureDomainI18n,
  createDomainTranslate,
  type DomainMessageKey,
  type DomainMessageParams,
} from '@sotf/ui/domain';

type MessageFn = (inputs?: Record<string, unknown>) => string;
const messages = m as unknown as Readonly<Record<string, MessageFn | undefined>>;

let configured = false;

/** Idempotent; called at the top of every mod page. */
export function configureModDomainI18n(): void {
  if (configured) return;
  configured = true;
  const english = createDomainTranslate({}, 'en');
  configureDomainI18n({
    get locale() {
      return toHtmlLang(getLocale() as Locale);
    },
    t: (key: DomainMessageKey, params?: DomainMessageParams) => {
      const message = messages[key];
      return message ? message((params ?? {}) as Record<string, unknown>) : english(key, params);
    },
    taxonomy: (nameKey: string, fallback: string) => {
      const message = messages[nameKey];
      return message ? message({}) : fallback;
    },
  });
}

/** Localised name of a category or tag (namespace `taxonomy`), or its English name. */
export function taxonomyName(ref: { nameKey: string; name: string }): string {
  const message = messages[ref.nameKey];
  return message ? message({}) : ref.name;
}

export type ModLicense = 'all-rights-reserved' | 'reupload-with-credit' | 'mit' | 'gpl-3.0' | 'cc-by-4.0' | 'other';

export function licenseLabel(license: ModLicense): string {
  switch (license) {
    case 'all-rights-reserved':
      return m.mod_license_all_rights_reserved();
    case 'reupload-with-credit':
      return m.mod_license_reupload_with_credit();
    case 'mit':
      return 'MIT';
    case 'gpl-3.0':
      return 'GPL-3.0';
    case 'cc-by-4.0':
      return 'CC BY 4.0';
    default:
      return m.mod_license_other();
  }
}

/** Official licence texts (the two custom ones are explained on the content policy). */
export function licenseHref(license: ModLicense): string | null {
  switch (license) {
    case 'mit':
      return 'https://opensource.org/license/mit';
    case 'gpl-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0.html';
    case 'cc-by-4.0':
      return 'https://creativecommons.org/licenses/by/4.0/';
    default:
      return null;
  }
}

export function linkLabel(link: LinkDTO): string {
  if (link.label) return link.label;
  switch (link.kind) {
    case 'kofi':
      return 'Ko-fi';
    case 'patreon':
      return 'Patreon';
    case 'github':
      return 'GitHub';
    case 'youtube':
      return 'YouTube';
    case 'twitch':
      return 'Twitch';
    case 'discord':
      return 'Discord';
    case 'website':
      return m.mod_link_website();
    default:
      return new URL(link.url).hostname.replace(/^www\./, '');
  }
}

/** Localised labels of the stored Markdown HTML (`localizeHtml`, see @sotf/markdown). */
export function markdownLabels(): MarkdownLabels {
  return {
    ...DEFAULT_LABELS,
    'alert-note': m.mod_md_alert_note(),
    'alert-tip': m.mod_md_alert_tip(),
    'alert-important': m.mod_md_alert_important(),
    'alert-warning': m.mod_md_alert_warning(),
    'alert-caution': m.mod_md_alert_caution(),
    spoiler: m.mod_md_spoiler(),
  };
}
