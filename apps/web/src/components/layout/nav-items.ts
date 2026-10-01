/**
 * Navigation data of the shell, shared by the header bar, the «More» menu (desktop popover and
 * mobile sheet) and the footer-independent mobile chrome. Labels resolve in the request locale.
 *
 * The bar shows as many destinations as fit: `from` is the Tailwind breakpoint where an item
 * joins the bar. Below it the same destination lives in the «More» menu (`CLASS_HIDE_FROM`
 * hides the menu copy once the bar has it), so nothing is ever unreachable and nothing is shown
 * twice. «Share logs», «Patch Radar», «Developers» and the install guide are Help: menu only.
 */
import { m } from '@sotf/i18n/messages';
import { BookOpen, CodeXml, HandHelping, Newspaper, Radar, ScrollText, TentTree, Trophy } from 'lucide-react';

export type Breakpoint = 'md' | 'lg' | 'xl';

/** Literal class names so Tailwind can see them. */
export const SHOW_FROM: Record<Breakpoint, string> = {
  md: 'hidden md:block',
  lg: 'hidden lg:block',
  xl: 'hidden xl:block',
};
export const HIDE_FROM: Record<Breakpoint, string> = {
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
};

export interface BarItem {
  path: string;
  label: string;
  from: Breakpoint;
}

export function barItems(): BarItem[] {
  return [
    { path: '/mods', label: m.common_nav_explore(), from: 'md' },
    { path: '/builds', label: m.common_term_builds(), from: 'md' },
    { path: '/kits', label: m.common_term_kits(), from: 'md' },
    { path: '/install', label: m.common_nav_install(), from: 'lg' },
    { path: '/jams', label: m.jams_nav(), from: 'lg' },
    { path: '/requests', label: m.common_term_requests(), from: 'xl' },
    { path: '/creators', label: m.common_nav_creators(), from: 'xl' },
  ];
}

export interface MoreItem {
  path: string;
  label: string;
  icon: typeof BookOpen;
  /** The bar already has this destination from this breakpoint up (hide the desktop menu copy). */
  inBarFrom?: Breakpoint;
}

export interface MoreGroup {
  id: 'help' | 'community';
  title: string;
  items: MoreItem[];
}

export function moreGroups(): MoreGroup[] {
  return [
    {
      id: 'help',
      title: m.shell_more_help(),
      items: [
        { path: '/install', label: m.shell_more_install_guide(), icon: BookOpen },
        { path: '/logs', label: m.logs_nav_link(), icon: ScrollText },
        { path: '/patch-radar', label: m.common_term_patch_radar(), icon: Radar },
        { path: '/developers', label: m.common_footer_developers(), icon: CodeXml },
      ],
    },
    {
      id: 'community',
      title: m.shell_more_community(),
      items: [
        { path: '/jams', label: m.jams_nav(), icon: Trophy, inBarFrom: 'lg' },
        { path: '/requests', label: m.common_term_requests(), icon: HandHelping, inBarFrom: 'xl' },
        { path: '/creators', label: m.common_nav_creators(), icon: TentTree, inBarFrom: 'xl' },
        { path: '/news', label: m.common_nav_news(), icon: Newspaper },
      ],
    },
  ];
}

/** Whether `path` is the current page or one of its ancestors in the URL. */
export function isCurrentPath(current: string, path: string): boolean {
  return current === path || current.startsWith(`${path}/`);
}
