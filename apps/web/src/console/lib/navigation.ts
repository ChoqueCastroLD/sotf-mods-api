/**
 * Console map (PLAN §4.3): areas, their sidebar sections and who sees them. Labels are functions
 * so they are evaluated in the current locale at render time.
 *
 * Links point at the routes of the area work packages (WP-80 Basecamp, WP-81 Signals/Settings/Me,
 * WP-82 Ranger, WP-83 Admin, WP-74 publishing); until a route exists, the console
 * shows its empty state (`components/AreaOutlet.tsx`) or «not on the map».
 */

import {
  Activity,
  BellRing,
  ChartLine,
  Database,
  Download,
  DraftingCompass,
  EyeOff,
  Flag,
  Gamepad2,
  Gauge,
  Hammer,
  Heart,
  House,
  Inbox,
  KeyRound,
  KeySquare,
  LayoutDashboard,
  type LucideIcon,
  Megaphone,
  MessageSquare,
  Network,
  NotebookPen,
  Package,
  Plug,
  Plus,
  ScrollText,
  Settings2,
  ShieldCheck,
  Shuffle,
  SlidersHorizontal,
  Tags,
  Trophy,
  UserRound,
  Users,
} from 'lucide-react';
import { t } from './messages.ts';

export const AREA_IDS = ['basecamp', 'me', 'signals', 'settings', 'ranger'] as const;
export type AreaId = (typeof AREA_IDS)[number];

export interface NavItem {
  to: string;
  label: () => string;
  icon: LucideIcon;
  /** Active only on this exact path (area overviews). */
  exact?: boolean;
  /** `false`: a flow rather than a place — left out of the phone's section strip. */
  phone?: boolean;
}

export interface NavSection {
  id: string;
  label?: () => string;
  items: readonly NavItem[];
  /** Admin-only section (Ranger Station → Admin). */
  adminOnly?: boolean;
}

export interface ConsoleArea {
  id: AreaId;
  to: string;
  label: () => string;
  icon: LucideIcon;
  sections: readonly NavSection[];
  /** Moderators and admins only. */
  rangerOnly?: boolean;
}

export interface Viewer {
  role: 'user' | 'moderator' | 'admin';
}

export const CONSOLE_AREAS: readonly ConsoleArea[] = [
  {
    id: 'basecamp',
    to: '/dashboard',
    label: () => t('common_term_basecamp'),
    icon: LayoutDashboard,
    sections: [
      {
        id: 'basecamp',
        items: [
          { to: '/dashboard', label: () => t('console_nav_overview'), icon: House, exact: true },
          { to: '/dashboard/mods', label: () => t('console_nav_my_mods'), icon: Package },
          // Paraglide (the two labels live in the `basecamp` namespace, not in the shell catalogue).
          { to: '/dashboard/inbox', label: () => t('console_nav_inbox'), icon: Inbox },
          { to: '/dashboard/new/mod', label: () => t('console_nav_new_mod'), icon: Plus, phone: false },
          { to: '/dashboard/new/build', label: () => t('console_nav_new_build'), icon: DraftingCompass, phone: false },
          { to: '/dashboard/drafts', label: () => t('console_nav_drafts'), icon: NotebookPen },
          { to: '/dashboard/analytics', label: () => t('console_nav_analytics'), icon: ChartLine },
          { to: '/dashboard/jams', label: () => t('console_nav_jams'), icon: Trophy },
        ],
      },
    ],
  },
  {
    id: 'me',
    to: '/me/following',
    label: () => t('console_area_you'),
    icon: UserRound,
    sections: [
      {
        id: 'me',
        items: [
          { to: '/me/following', label: () => t('common_term_backpack'), icon: Heart },
          { to: '/me/downloads', label: () => t('console_nav_downloads'), icon: Download },
        ],
      },
    ],
  },
  {
    id: 'signals',
    to: '/notifications',
    label: () => t('common_term_signals'),
    icon: BellRing,
    sections: [],
  },
  {
    id: 'settings',
    to: '/settings/profile',
    label: () => t('common_account_settings'),
    icon: Settings2,
    sections: [
      {
        id: 'settings-account',
        label: () => t('console_nav_group_account'),
        items: [
          { to: '/settings/profile', label: () => t('console_nav_profile'), icon: UserRound },
          { to: '/settings/account', label: () => t('console_nav_account'), icon: KeyRound },
          { to: '/settings/security', label: () => t('console_nav_security'), icon: ShieldCheck },
          { to: '/settings/tokens', label: () => t('console_nav_tokens'), icon: KeySquare },
        ],
      },
      {
        id: 'settings-app',
        label: () => t('console_nav_group_app'),
        items: [
          { to: '/settings/notifications', label: () => t('console_nav_notifications'), icon: BellRing },
          { to: '/settings/preferences', label: () => t('console_nav_preferences'), icon: SlidersHorizontal },
          { to: '/settings/privacy', label: () => t('console_nav_privacy'), icon: EyeOff },
        ],
      },
      {
        id: 'settings-creator',
        label: () => t('console_nav_group_creator'),
        items: [
          { to: '/settings/creator', label: () => t('console_nav_creator'), icon: Hammer },
          { to: '/settings/data', label: () => t('console_nav_data'), icon: Database },
        ],
      },
    ],
  },
  {
    id: 'ranger',
    to: '/moderation',
    label: () => t('common_term_ranger_station'),
    icon: ShieldCheck,
    rangerOnly: true,
    sections: [
      {
        id: 'ranger',
        items: [
          { to: '/moderation', label: () => t('console_nav_queue'), icon: Inbox, exact: true },
          { to: '/moderation/reports', label: () => t('console_nav_reports'), icon: Flag },
          { to: '/moderation/comments', label: () => t('console_nav_comments'), icon: MessageSquare },
          { to: '/moderation/users', label: () => t('console_nav_users'), icon: Users },
          { to: '/moderation/jams', label: () => t('console_nav_jams'), icon: Trophy },
          { to: '/moderation/audit', label: () => t('console_nav_audit'), icon: ScrollText },
        ],
      },
      {
        id: 'admin',
        label: () => t('console_area_admin'),
        adminOnly: true,
        items: [
          { to: '/moderation/admin/game-builds', label: () => t('console_nav_game_builds'), icon: Gamepad2 },
          { to: '/moderation/admin/ecosystem', label: () => t('console_nav_ecosystem'), icon: Network },
          { to: '/moderation/admin/taxonomy', label: () => t('console_nav_taxonomy'), icon: Tags },
          { to: '/moderation/admin/recategorize', label: () => t('console_nav_recategorize'), icon: Shuffle },
          { to: '/moderation/admin/announcements', label: () => t('console_nav_announcements'), icon: Megaphone },
          { to: '/moderation/admin/settings', label: () => t('console_nav_site_settings'), icon: Settings2 },
          { to: '/moderation/admin/integrations', label: () => t('console_nav_integrations'), icon: Plug },
          { to: '/moderation/admin/performance', label: () => t('console_nav_performance'), icon: Gauge },
          { to: '/moderation/admin/operations', label: () => t('console_nav_operations'), icon: Activity },
        ],
      },
    ],
  },
];

export function isRangerRole(role: Viewer['role']): boolean {
  return role === 'moderator' || role === 'admin';
}

/** Areas the viewer can open. */
export function visibleAreas(viewer: Viewer): ConsoleArea[] {
  return CONSOLE_AREAS.filter((area) => !area.rangerOnly || isRangerRole(viewer.role));
}

/** Sections of an area the viewer can open. */
export function visibleSections(area: ConsoleArea, viewer: Viewer): NavSection[] {
  return area.sections.filter((section) => !section.adminOnly || viewer.role === 'admin');
}

/**
 * First path segment of each area. The area ids keep their internal names (`basecamp`, `ranger`,
 * `signals`); the URLs use the plain words (`/dashboard`, `/moderation`, `/notifications`).
 */
const AREA_SEGMENTS: Readonly<Record<AreaId, string>> = {
  basecamp: 'dashboard',
  me: 'me',
  signals: 'notifications',
  settings: 'settings',
  ranger: 'moderation',
};

/** Area of a console pathname (`/moderation/admin/x` → ranger), or null outside the console. */
export function areaOf(pathname: string): AreaId | null {
  const first = pathname.split('/')[1]?.toLowerCase() ?? '';
  return AREA_IDS.find((id) => AREA_SEGMENTS[id] === first) ?? null;
}

export function findArea(id: AreaId): ConsoleArea {
  const area = CONSOLE_AREAS.find((candidate) => candidate.id === id);
  if (!area) throw new Error(`unknown console area ${id}`);
  return area;
}

/** Whether a nav link is the current page (exact) or an ancestor of it. */
export function isActivePath(pathname: string, item: Pick<NavItem, 'to' | 'exact'>): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (item.exact) return path === item.to;
  return path === item.to || path.startsWith(`${item.to}/`);
}

/** Areas the user can reach but the current viewer cannot see → «Rangers only». */
export function isAreaAllowed(id: AreaId, viewer: Viewer): boolean {
  return !findArea(id).rangerOnly || isRangerRole(viewer.role);
}

// -----------------------------------------------------------------------------------------------
// Phones: bottom tabs, section strip, pushed screens
// -----------------------------------------------------------------------------------------------

/** Where an area's bottom tab goes (Settings opens its list of sections, the phone's root). */
export function tabTarget(area: ConsoleArea): string {
  return area.id === 'settings' ? '/settings' : area.to;
}

/**
 * Places of an area shown as pills under the phone's top bar. Settings has no strip (its root is
 * a grouped list) and the Admin screens hide behind one «Admin» entry that opens their list.
 */
export function phoneItems(area: ConsoleArea, viewer: Viewer): NavItem[] {
  if (area.id === 'settings') return [];
  const items = area.sections
    .filter((section) => !section.adminOnly)
    .flatMap((section) => section.items)
    .filter((item) => item.phone !== false);
  if (area.id === 'ranger' && viewer.role === 'admin') {
    items.push({ to: '/moderation/admin', label: () => t('console_area_admin'), icon: ShieldCheck });
  }
  return items.length > 1 ? items : [];
}

/**
 * Pushed screens (a mod's editor, the publishing wizard, one jam, one user, an open queue item…)
 * take the whole screen on phones: the bottom tabs give way to the screen's own sticky actions and
 * the top bar shows a Back arrow.
 */
const PUSHED = [
  /^\/dashboard\/new(\/|$)/,
  /^\/dashboard\/drafts\/[^/]+/,
  /^\/dashboard\/mods\/[^/]+/,
  /^\/moderation\/users\/[^/]+/,
  /^\/moderation\/jams\/[^/]+/,
  /^\/moderation\/admin\/[^/]+/,
  /^\/settings\/[^/]+/,
] as const;

export function isPushedRoute(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '');
  return PUSHED.some((pattern) => pattern.test(path));
}

/** The screen Back leads to when there is no history to go back through. */
export function parentPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '');
  if (/^\/dashboard\/mods\/[^/]+/.test(path)) return '/dashboard/mods';
  if (/^\/dashboard\/drafts\/[^/]+/.test(path)) return '/dashboard/drafts';
  if (/^\/dashboard\/new/.test(path)) return '/dashboard';
  if (/^\/moderation\/admin\/[^/]+/.test(path)) return '/moderation/admin';
  if (/^\/moderation\/users\/[^/]+/.test(path)) return '/moderation/users';
  if (/^\/moderation\/jams\/[^/]+/.test(path)) return '/moderation/jams';
  if (/^\/settings\/[^/]+/.test(path)) return '/settings';
  return '/dashboard';
}
