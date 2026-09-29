/**
 * @sotf/i18n: internationalisation for SOTF Mods v2 (PLAN §4.1, §7.11).
 *
 * This entry point is runtime-agnostic and message-free (safe in any bundle): locale metadata and
 * mapping, locale-aware paths and hreflang, and `Intl` formatters.
 *
 * Other entry points:
 * - `@sotf/i18n/messages`: the compiled messages (`m.common_action_save()`), tree-shakeable.
 * - `@sotf/i18n/runtime`: `getLocale()` / `setLocale()` (Paraglide runtime, configured).
 * - `@sotf/i18n/server`: `withLocale(locale, fn)`, per-request locale via AsyncLocalStorage (Node).
 * - `@sotf/i18n/errors`: localized text for API problem codes.
 */
export {
  compareStrings,
  type DateFormatOptions,
  type DateInput,
  type DateStyle,
  formatBytes,
  formatCompactNumber,
  formatDate,
  formatDateTime,
  formatList,
  formatNumber,
  formatPercent,
  formatRelativeTime,
  formatTime,
  formatUnit,
  type RelativeTimeOptions,
  toIsoDate,
  type UnitName,
} from './format.ts';
export {
  assertLocale,
  DEFAULT_LOCALE,
  fromLegacyLangCookie,
  isLocale,
  LOCALE_INFO,
  LOCALES,
  type Locale,
  type LocaleInfo,
  matchLocale,
  negotiateLocale,
  PREFIXED_LOCALES,
  parseAcceptLanguage,
  toHreflang,
  toHtmlLang,
  toIntlLocale,
  toOgLocale,
} from './locales.ts';
export {
  type HreflangAlternate,
  hreflangAlternates,
  isLocalizedPath,
  type LocalizedPathPredicate,
  type LocalizePathOptions,
  localizePath,
  type SplitPath,
  stripLocale,
  UNLOCALIZED_SEGMENTS,
} from './paths.ts';
