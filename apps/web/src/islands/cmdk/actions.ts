/**
 * «Actions» group (PLAN §7.1 T0-07): theme, language, upload a mod or a build, Basecamp, Signals
 * and the backpack. Labels are localised (they already contain the localised terms: «Tema: Noche»,
 * «Idioma: Español»); each action also carries English keywords, so «dark» or «language» work in
 * any language.
 */
import { LOCALE_INFO, LOCALES, type Locale, localizePath, stripLocale, toHreflang } from '@sotf/i18n';
import { appliedTheme, setTheme, type Theme } from '@sotf/ui/theme';
import { t } from './i18n.ts';
import type { ActionId, ActionItem } from './types.ts';

export interface ActionContext {
  locale: Locale;
  /** Navigates to an unprefixed site path (adds the locale prefix). */
  go: (path: string) => void;
  /** Navigates to an absolute or already localised URL. */
  goTo: (url: string) => void;
}

const THEME_LABEL: Record<Theme, () => string> = {
  dark: () => t('cmdk_theme_night'),
  light: () => t('cmdk_theme_day'),
  system: () => t('cmdk_theme_system'),
};

const THEME_WORDS: Record<Theme, string> = {
  dark: 'theme dark night mode',
  light: 'theme light day mode',
  system: 'theme system auto device',
};

/** URL of the current page in another language: its hreflang alternate, else the localised path. */
export function languageUrl(locale: Locale, doc: Document = document): string {
  const alternate = doc.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${toHreflang(locale)}"]`);
  if (alternate?.href) return alternate.href;
  const { pathname, search, hash } = doc.location;
  return localizePath(stripLocale(pathname + search).path, locale) + hash;
}

function action(
  id: ActionId,
  title: string,
  keywords: string,
  run: () => void,
  options: { current?: boolean; path?: string | null } = {},
): ActionItem {
  return {
    key: `action:${id}`,
    type: 'action',
    id,
    title,
    keywords,
    current: options.current ?? false,
    path: options.path ?? null,
    run,
  };
}

export function buildActions(context: ActionContext): ActionItem[] {
  const theme = appliedTheme();
  const nav = (id: ActionId, title: string, keywords: string, path: string) =>
    action(id, title, keywords, () => context.go(path), { path });

  const actions: ActionItem[] = [
    nav('upload', t('cmdk_action_upload'), 'upload publish new mod', '/upload'),
    nav('basecamp', t('cmdk_action_basecamp'), 'basecamp dashboard creator stats', '/basecamp'),
    nav('signals', t('cmdk_action_signals'), 'signals notifications inbox', '/signals'),
    nav('backpack', t('cmdk_action_backpack'), 'backpack favorites saved', '/me/backpack'),
    nav(
      'upload-build',
      t('cmdk_action_upload_build'),
      `upload share build blueprint ${t('cmdk_term_builds')}`,
      '/upload-build',
    ),
  ];

  for (const value of ['dark', 'light', 'system'] as const) {
    const label = THEME_LABEL[value]();
    actions.push(
      action(
        `theme-${value}`,
        t('cmdk_action_theme', { theme: label }),
        `${THEME_WORDS[value]} ${label}`,
        () => setTheme(value),
        { current: theme === value },
      ),
    );
  }

  for (const code of LOCALES) {
    const info = LOCALE_INFO[code];
    actions.push(
      action(
        `language-${code}`,
        t('cmdk_action_language', { language: info.endonym }),
        `language ${info.endonym} ${info.englishName} ${code}`,
        () => context.goTo(languageUrl(code)),
        { current: code === context.locale },
      ),
    );
  }
  return actions;
}

/** Actions shown with an empty query (all of them inside the «Actions» scope). */
export const QUICK_ACTIONS: readonly ActionId[] = ['upload', 'basecamp', 'signals'];
