/**
 * Commands of the palette: «Go to» (Mods, Builds, Requests, Jams, Install guide, Share logs,
 * Developers; Dashboard, Upload, Notifications, Settings for members; Moderation for moderators;
 * Log in for guests) and «Settings» (the 13 languages). Labels are localised; each command also
 * carries English keywords, so «language» works in any language.
 */
import { LOCALE_INFO, LOCALES, type Locale, localizePath, stripLocale, toHreflang } from '@sotf/i18n';
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
  const { session } = context;
  const nav = (id: string, title: string, keywords: string, icon: ActionIcon, path: string) =>
    action(id, title, keywords, icon, 'go', () => context.go(path), { path });

  const actions: ActionItem[] = [
    nav('go-explore', t('shell_cmdk_go_mods'), 'mods browse catalog all home explore', 'explore', '/mods'),
    nav('go-builds', t('cmdk_go_builds'), `builds ${t('cmdk_term_builds')}`, 'builds', '/builds'),
    nav('go-requests', t('cmdk_go_requests'), 'requests wishlist ideas suggest', 'requests', '/requests'),
    nav('go-jams', t('cmdk_go_jams'), 'jams jam contest competition event challenge', 'jams', '/jams'),
    nav('go-install', t('cmdk_go_install'), 'install guide how to setup tutorial help start', 'install', '/install'),
    nav('go-logs', t('cmdk_go_logs'), 'logs share log crash error bug report help paste upload', 'install', '/logs'),
    nav('go-developers', t('cmdk_go_developers'), 'developers api docs openapi tokens', 'developers', '/developers'),
  ];

  if (session.signedIn) {
    actions.push(
      nav('dashboard', t('shell_cmdk_go_dashboard'), 'dashboard creator stats studio', 'dashboard', '/basecamp'),
      nav('upload', t('shell_cmdk_go_upload'), 'upload publish new mod create', 'upload', '/basecamp/new/mod'),
      nav(
        'upload-build',
        t('shell_cmdk_go_upload_build'),
        `upload share new build ${t('cmdk_term_builds')}`,
        'upload',
        '/basecamp/new/build',
      ),
      nav(
        'notifications',
        t('shell_cmdk_go_notifications'),
        'notifications inbox alerts signals',
        'notifications',
        '/signals',
      ),
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
        nav(
          'moderation',
          t('shell_cmdk_go_moderation'),
          'moderation reports queue staff ranger',
          'moderation',
          '/ranger',
        ),
      );
    }
  } else {
    actions.push(nav('login', t('shell_cmdk_go_login'), 'sign in log in login register account', 'login', '/login'));
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
    ? ['go-explore', 'dashboard', 'upload', 'notifications', 'go-builds']
    : ['go-explore', 'go-builds', 'go-requests', 'go-jams', 'go-install'];
}
