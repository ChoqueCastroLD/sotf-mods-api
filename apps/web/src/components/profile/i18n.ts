/**
 * i18n glue of the profile (namespace `profile`): the label of a profile link and the `DomainI18n`
 * of the `@sotf/ui/domain` components the page renders (numbers and dates follow the page language).
 */
import type { LinkDTO } from '@sotf/contracts/common';
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { DomainI18n, DomainMessageKey, DomainMessageParams } from '@sotf/ui/domain';
import { domainTranslate } from '../../lib/domain-i18n.ts';

/** Visible label of a profile link (the user's own label wins). */
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
      return m.profile_link_website();
    default:
      try {
        return new URL(link.url).hostname.replace(/^www\./, '');
      } catch {
        return link.url;
      }
  }
}

// -----------------------------------------------------------------------------------------------
// @sotf/ui/domain
// -----------------------------------------------------------------------------------------------

type Override = (params: DomainMessageParams) => string;

function overrides(): Partial<Record<DomainMessageKey, Override>> {
  return {
    ui_domain_trusted_creator: () => m.profile_trusted(),
  };
}

/** `DomainI18n` of the page (BCP-47 `lang`, UTC dates: the HTML is shared and edge-cached). */
export function profileDomainI18n(
  locale: Locale,
  taxonomy: (nameKey: string, fallback: string) => string = (_key, fallback) => fallback,
): DomainI18n {
  const table = overrides();
  return {
    locale: toHtmlLang(locale),
    timeZone: 'UTC',
    t: (key, params) => {
      const override = table[key];
      return override ? override(params ?? {}) : domainTranslate(key, params, locale);
    },
    taxonomy,
  };
}
