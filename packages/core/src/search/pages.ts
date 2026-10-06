/**
 * Static site pages offered by search and Cmd+K (PLAN §4.2, §7.9): key, path and the localised
 * title in the 13 locales. Paths are the English (unprefixed) canonical paths; the web adds the
 * locale prefix, as for every other path returned by the API.
 */
import type { Locale } from '@sotf/contracts/common';
import { LOCALES } from '@sotf/i18n/locales';
import * as messages from '@sotf/i18n/messages';

export interface SitePage {
  key: string;
  path: string;
  titles: Readonly<Record<Locale, string>>;
  /** Extra English words that should find the page. */
  keywords: readonly string[];
}

/** Localised titles live in the `search` i18n namespace (`search_page_<key>`). */
type PageMessage = (inputs: Record<string, never>, options: { locale: Locale }) => string;

function titlesOf(key: string): Record<Locale, string> {
  const message = (messages as unknown as Record<string, PageMessage>)[`search_page_${key.replaceAll('-', '_')}`];
  if (!message) throw new Error(`missing search message for page ${key}`);
  return Object.fromEntries(LOCALES.map((locale) => [locale, message({}, { locale })])) as Record<Locale, string>;
}

const page = (key: string, path: string, keywords: readonly string[]): SitePage => ({
  key,
  path,
  keywords,
  titles: titlesOf(key),
});

export const SITE_PAGES: readonly SitePage[] = [
  page('explore', '/mods', ['browse', 'catalog', 'mods', 'explore']),
  page('builds', '/builds', ['buildshare', 'blueprints', 'bases']),
  page('install', '/install', ['install', 'redloader', 'redmanager', 'setup', 'guide', 'loader']),
  page('about', '/about', ['about', 'team', 'contact']),
  page('developers', '/developers', ['api', 'docs', 'openapi', 'integration']),
  page('privacy', '/privacy', ['privacy', 'gdpr', 'data']),
  page('terms', '/terms', ['terms', 'tos', 'rules']),
  page('content-policy', '/content-policy', ['rules', 'nsfw', 'moderation', 'guidelines']),
  page('dmca', '/dmca', ['copyright', 'takedown']),
  page('cookies', '/cookies', ['cookies', 'consent', 'tracking']),
];
