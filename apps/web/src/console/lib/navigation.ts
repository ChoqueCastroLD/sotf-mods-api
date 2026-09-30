/**
 * Console map (PLAN §4.3): areas, their sidebar sections and who sees them. Labels are functions
 * so they are evaluated in the current locale at render time.
 *
 * Links point at the routes of the area work packages (WP-80 Basecamp, WP-81 Signals/Settings/Me,
 * WP-82 Ranger, WP-83 Admin, WP-74 publishing, WP-75 kits); until a route exists, the console
 * shows its empty state (`components/AreaPlaceholder.tsx`) or «not on the map».
 */

import {
  Award,
  Backpack,
  BellRing,
  Binoculars,
  Bot,
  ChartLine,
  Database,
  Download,
  DraftingCompass,
  EyeOff,
  Flag,
  Gamepad2,
  Gauge,
  Hammer,
  Inbox,
  KeyRound,
  Layers,
  LayoutDashboard,
  type LucideIcon,
  Megaphone,
  MessageSquare,
  Network,
  Package,
  Plug,
  Plus,
  ScrollText,
  Settings2,
  ShieldCheck,
  Shuffle,
  SlidersHorizontal,
  Tags,
  Tent,
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
    to: '/basecamp',
    label: () => t('common_term_basecamp'),
    icon: Tent,
    sections: [
      {
        id: 'basecamp',
        items: [
          { to: '/basecamp', label: () => t('console_nav_overview'), icon: LayoutDashboard, exact: true },
          { to: '/basecamp/mods', label: () => t('console_nav_my_mods'), icon: Package },
          { to: '/basecamp/new/mod', label: () => t('console_nav_new_mod'), icon: Plus },
          { to: '/basecamp/new/build', label: () => t('console_nav_new_build'), icon: DraftingCompass },
          { to: '/basecamp/analytics', label: () => t('console_nav_analytics'), icon: ChartLine },
          { to: '/basecamp/badges', label: () => t('console_nav_badges'), icon: Award },
        ],
      },
    ],
  },
  {
    id: 'me',
    to: '/me/backpack',
    label: () => t('common_nav_you'),
    icon: Backpack,
    sections: [
      {
        id: 'me',
        items: [
          { to: '/me/backpack', label: () => t('common_term_backpack'), icon: Backpack },
          { to: '/me/downloads', label: () => t('console_nav_downloads'), icon: Download },
          { to: '/me/kits', label: () => t('common_term_kits'), icon: Layers },
        ],
      },
    ],
  },
  {
    id: 'signals',
    to: '/signals',
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
        id: 'settings',
        items: [
          { to: '/settings/profile', label: () => t('console_nav_profile'), icon: UserRound },
          { to: '/settings/account', label: () => t('console_nav_account'), icon: KeyRound },
          { to: '/settings/security', label: () => t('console_nav_security'), icon: ShieldCheck },
          { to: '/settings/notifications', label: () => t('console_nav_notifications'), icon: BellRing },
          { to: '/settings/preferences', label: () => t('console_nav_preferences'), icon: SlidersHorizontal },
          { to: '/settings/privacy', label: () => t('console_nav_privacy'), icon: EyeOff },
          { to: '/settings/creator', label: () => t('console_nav_creator'), icon: Hammer },
          { to: '/settings/data', label: () => t('console_nav_data'), icon: Database },
        ],
      },
    ],
  },
  {
    id: 'ranger',
    to: '/ranger',
    label: () => t('common_term_ranger_station'),
    icon: Binoculars,
    rangerOnly: true,
    sections: [
      {
        id: 'ranger',
        items: [
          { to: '/ranger', label: () => t('console_nav_queue'), icon: Inbox, exact: true },
          { to: '/ranger/reports', label: () => t('console_nav_reports'), icon: Flag },
          { to: '/ranger/comments', label: () => t('console_nav_comments'), icon: MessageSquare },
          { to: '/ranger/users', label: () => t('console_nav_users'), icon: Users },
          { to: '/ranger/audit', label: () => t('console_nav_audit'), icon: ScrollText },
        ],
      },
      {
        id: 'admin',
        label: () => t('console_area_admin'),
        adminOnly: true,
        items: [
          { to: '/ranger/admin/game-builds', label: () => t('console_nav_game_builds'), icon: Gamepad2 },
          { to: '/ranger/admin/ecosystem', label: () => t('console_nav_ecosystem'), icon: Network },
          { to: '/ranger/admin/taxonomy', label: () => t('console_nav_taxonomy'), icon: Tags },
          { to: '/ranger/admin/recategorize', label: () => t('console_nav_recategorize'), icon: Shuffle },
          { to: '/ranger/admin/awards', label: () => t('console_nav_awards'), icon: Trophy },
          { to: '/ranger/admin/announcements', label: () => t('console_nav_announcements'), icon: Megaphone },
          { to: '/ranger/admin/settings', label: () => t('console_nav_site_settings'), icon: Settings2 },
          { to: '/ranger/admin/integrations', label: () => t('console_nav_integrations'), icon: Plug },
          { to: '/ranger/admin/kelvinseek', label: () => t('console_nav_kelvinseek'), icon: Bot },
          { to: '/ranger/admin/performance', label: () => t('console_nav_performance'), icon: Gauge },
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

/** Area of a console pathname (`/ranger/admin/x` → ranger), or null outside the console. */
export function areaOf(pathname: string): AreaId | null {
  const first = pathname.split('/')[1]?.toLowerCase() ?? '';
  return (AREA_IDS as readonly string[]).includes(first) ? (first as AreaId) : null;
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
