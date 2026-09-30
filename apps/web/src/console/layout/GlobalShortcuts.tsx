/**
 * Console-wide shortcuts: `g b` Basecamp, `g s` Signals, `g m` Backpack, `g ,` Settings,
 * `g r` Ranger Station (rangers), `[` sidebar, `?` this list. Screens add their own with
 * `useShortcut` (e.g. `j`/`k`/`a`/`c`/`r`/`e` in the moderation queue, WP-82).
 */

import { type LinkProps, useNavigate } from '@tanstack/react-router';
import { useShortcut } from '../hooks/use-shortcuts.tsx';
import { t } from '../lib/messages.ts';

export interface GlobalShortcutsProps {
  ranger: boolean;
  onToggleSidebar: () => void;
  onShowHelp: () => void;
}

export function GlobalShortcuts({ ranger, onToggleSidebar, onShowHelp }: GlobalShortcutsProps) {
  const navigate = useNavigate();
  const go = (to: string) => () => void navigate({ to: to as LinkProps['to'] });
  useShortcut('?', onShowHelp, { description: () => t('console_shortcut_help') });
  useShortcut('g b', go('/basecamp'), { description: () => t('console_shortcut_go_basecamp') });
  useShortcut('g s', go('/signals'), { description: () => t('console_shortcut_go_signals') });
  useShortcut('g m', go('/me/backpack'), { description: () => t('console_shortcut_go_backpack') });
  useShortcut('g ,', go('/settings/profile'), { description: () => t('console_shortcut_go_settings') });
  useShortcut('g r', go('/ranger'), { description: () => t('console_shortcut_go_ranger'), enabled: ranger });
  useShortcut('[', onToggleSidebar, { description: () => t('console_shortcut_toggle_sidebar') });
  return null;
}
