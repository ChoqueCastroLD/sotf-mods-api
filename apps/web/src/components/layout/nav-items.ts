/**
 * Navigation data of the shell: one place for every path and label used by the header, the phone
 * menu sheet, the bottom tab bar and the account menu.
 *
 * Console routes (`/dashboard`, `/notifications`, `/moderation`, `/me/following`): change them here
 * only, every shell component reads {@link PATHS}. The old names (`/basecamp`, `/signals`,
 * `/ranger`, `/me/backpack`) redirect in `middleware/redirects.ts`.
 *
 * Paths are unprefixed; components add the locale prefix with `href()` for site pages. Console
 * routes are not localized, so they are used as they are.
 */
import { m } from '@sotf/i18n/messages';
import {
  BookOpen,
  CodeXml,
  Hammer,
  HandHelping,
  Info,
  type LucideIcon,
  Package,
  ScrollText,
  Trophy,
} from 'lucide-react';
import { SOCIAL_LINKS } from '../../lib/site.ts';

/** Site pages (get a locale prefix). */
export const SITE_PATHS = {
  home: '/',
  mods: '/mods',
  builds: '/builds',
  jams: '/jams',
  requests: '/requests',
  search: '/search',
  install: '/install',
  logs: '/logs',
  developers: '/developers',
  about: '/about',
  login: '/login',
  register: '/register',
  profile: '/profile',
  terms: '/terms',
  privacy: '/privacy',
  cookies: '/cookies',
  contentPolicy: '/content-policy',
  dmca: '/dmca',
} as const;

/** Console routes (no locale prefix). */
export const CONSOLE_PATHS = {
  dashboard: '/dashboard',
  notifications: '/notifications',
  moderation: '/moderation',
  following: '/me/following',
  downloads: '/me/downloads',
  settings: '/settings/profile',
  uploadMod: '/dashboard/new/mod',
} as const;

export const PATHS = { ...SITE_PATHS, ...CONSOLE_PATHS } as const;

export const DISCORD_URL = SOCIAL_LINKS.discord;

/** Discord glyph (Lucide has no brand icons); same path as the old site's navbar. */
export const DISCORD_ICON_PATH =
  'M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z';

export interface NavItem {
  id: string;
  label: string;
  /** Unprefixed site path; absent for external links. */
  path?: string;
  /** Absolute URL (opens in a new tab). */
  external?: string;
  icon: LucideIcon | 'discord';
}

/** Centre pill of the header (md and up). */
export function mainNav(): NavItem[] {
  return [
    { id: 'mods', path: PATHS.mods, label: m.common_term_mods(), icon: Package },
    { id: 'builds', path: PATHS.builds, label: m.common_term_builds(), icon: Hammer },
    { id: 'jams', path: PATHS.jams, label: m.jams_nav(), icon: Trophy },
    { id: 'requests', path: PATHS.requests, label: m.common_term_requests(), icon: HandHelping },
    { id: 'discord', external: DISCORD_URL, label: 'Discord', icon: 'discord' },
  ];
}

/** Rows of the phone menu sheet: what the bottom tab bar does not carry. */
export function menuNav(): NavItem[] {
  return [
    { id: 'jams', path: PATHS.jams, label: m.jams_nav(), icon: Trophy },
    { id: 'requests', path: PATHS.requests, label: m.common_term_requests(), icon: HandHelping },
    { id: 'discord', external: DISCORD_URL, label: 'Discord', icon: 'discord' },
    { id: 'install', path: PATHS.install, label: m.shell_more_install_guide(), icon: BookOpen },
    { id: 'logs', path: PATHS.logs, label: m.logs_nav_link(), icon: ScrollText },
    { id: 'developers', path: PATHS.developers, label: m.common_footer_developers(), icon: CodeXml },
    { id: 'about', path: PATHS.about, label: m.common_footer_about(), icon: Info },
  ];
}

/** Whether `path` is the current page or one of its ancestors in the URL. */
export function isCurrentPath(current: string, path: string): boolean {
  if (path === '/') return current === '/';
  return current === path || current.startsWith(`${path}/`);
}
