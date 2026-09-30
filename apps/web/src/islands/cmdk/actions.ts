/**
 * Commands of the palette: «Go to» (Explore, Builds, Kits, Requests, Install guide, Patch Radar,
 * Creators, Compare, Developers; Basecamp, New mod, Signals, My kits, Downloads for members;
 * Ranger Station for moderators) and «Settings» (theme, the 13 languages). Labels are localised;
 * each command also carries English keywords, so «dark» or «language» work in any language.
 */
import { LOCALE_INFO, LOCALES, type Locale, localizePath, stripLocale, toHreflang } from '@sotf/i18n';
import { appliedTheme, setTheme, type Theme } from '@sotf/ui/theme';
import { t } from './i18n.ts';
import type { Session } from './session.ts';
import type { ActionIcon, ActionItem } from './types.ts';

export interface ActionContext {
  locale: Locale;
  session: Session;
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
  id: string,
  title: string,
  keywords: string,
  icon: ActionIcon,
  section: ActionItem['section'],
  run: () => void,
  options: { current?: boolean; path?: string | null } = {},
): ActionItem {
  return {
    key: `action:${id}`,
    type: 'action',
    id,
    title,
    keywords,
    icon,
    section,
    current: options.current ?? false,
    path: options.path ?? null,
    run,
  };
}

export function buildActions(context: ActionContext): ActionItem[] {
  const theme = appliedTheme();
  const { session } = context;
  const nav = (id: string, title: string, keywords: string, icon: ActionIcon, path: string) =>
    action(id, title, keywords, icon, 'go', () => context.go(path), { path });

  const actions: ActionItem[] = [
    nav('go-explore', t('cmdk_go_explore'), 'explore browse catalog all mods home', 'explore', '/mods'),
    nav('go-builds', t('cmdk_go_builds'), `builds blueprints ${t('cmdk_term_builds')}`, 'builds', '/builds'),
    nav('go-kits', t('cmdk_go_kits'), `kits collections packs ${t('cmdk_term_kits')}`, 'kits', '/kits'),
    nav('go-requests', t('cmdk_go_requests'), 'requests wishlist ideas suggest', 'requests', '/requests'),
    nav('go-install', t('cmdk_go_install'), 'install guide how to setup tutorial help start', 'install', '/install'),
    nav(
      'go-radar',
      t('cmdk_go_radar'),
      'patch radar updates game version broken compatibility',
      'radar',
      '/patch-radar',
    ),
    nav(
      'go-creators',
      t('cmdk_go_creators'),
      `creators authors modders ${t('cmdk_term_creators')}`,
      'creators',
      '/creators',
    ),
    nav('go-compare', t('cmdk_go_compare'), 'compare versus side by side', 'compare', '/compare'),
    nav('go-developers', t('cmdk_go_developers'), 'developers api docs openapi tokens', 'developers', '/developers'),
  ];

  if (session.signedIn) {
    actions.push(
      nav('basecamp', t('cmdk_action_basecamp'), 'basecamp dashboard creator stats studio', 'basecamp', '/basecamp'),
      nav('upload', t('cmdk_action_upload'), 'upload publish new mod create', 'upload', '/basecamp/new/mod'),
      nav(
        'upload-build',
        t('cmdk_action_upload_build'),
        `upload share new build blueprint ${t('cmdk_term_builds')}`,
        'upload',
        '/basecamp/new/build',
      ),
      nav('signals', t('cmdk_action_signals'), 'signals notifications inbox alerts', 'signals', '/signals'),
      nav('my-kits', t('cmdk_go_my_kits'), `my kits collections ${t('cmdk_term_kits')}`, 'kits', '/me/kits'),
      nav('backpack', t('cmdk_action_backpack'), 'backpack favorites saved following', 'backpack', '/me/backpack'),
      nav('downloads', t('cmdk_go_downloads'), 'downloads history past files', 'history', '/me/downloads'),
      nav(
        'settings',
        t('cmdk_go_settings'),
        'settings preferences account profile privacy tokens',
        'settings',
        '/settings',
      ),
    );
    if (session.moderator) {
      actions.push(
        nav('ranger', t('cmdk_go_ranger'), 'ranger station moderation reports queue staff', 'ranger', '/ranger'),
      );
    }
  } else {
    actions.push(nav('login', t('cmdk_go_login'), 'sign in log in login register account', 'basecamp', '/login'));
  }

  for (const value of ['dark', 'light', 'system'] as const) {
    const label = THEME_LABEL[value]();
    actions.push(
      action(
        `theme-${value}`,
        t('cmdk_action_theme', { theme: label }),
        `${THEME_WORDS[value]} ${label}`,
        value === 'dark' ? 'night' : value === 'light' ? 'day' : 'system',
        'settings',
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
        `language idioma ${info.endonym} ${info.englishName} ${code}`,
        'language',
        'settings',
        () => context.goTo(languageUrl(code)),
        { current: code === context.locale },
      ),
    );
  }
  return actions;
}

/** Commands shown with an empty query (all of them inside the «Actions» scope). */
export function quickActionIds(session: Session): readonly string[] {
  return session.signedIn
    ? ['go-explore', 'basecamp', 'upload', 'signals', 'go-kits']
    : ['go-explore', 'go-builds', 'go-kits', 'go-requests', 'go-install'];
}
