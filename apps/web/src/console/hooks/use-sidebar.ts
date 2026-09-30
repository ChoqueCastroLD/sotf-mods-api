/**
 * Sidebar collapse (research/03 §6.9): icons only on tablets (768–1023 px) unless expanded for a
 * moment; on desktop the user's choice is remembered. Below 768 px there is no sidebar (menu).
 */
import { useMediaQuery } from '@sotf/ui';
import { useCallback, useState } from 'react';
import { STORAGE_KEYS, storage } from '../lib/storage.ts';

export const TABLET_QUERY = '(min-width: 48rem) and (max-width: 63.99rem)';

export interface SidebarState {
  collapsed: boolean;
  tablet: boolean;
  toggle: () => void;
}

export function useSidebar(): SidebarState {
  const tablet = useMediaQuery(TABLET_QUERY);
  const [pinnedCollapsed, setPinnedCollapsed] = useState(() => storage.get(STORAGE_KEYS.sidebarCollapsed) === '1');
  const [tabletExpanded, setTabletExpanded] = useState(false);
  const toggle = useCallback(() => {
    if (tablet) {
      setTabletExpanded((expanded) => !expanded);
      return;
    }
    setPinnedCollapsed((collapsed) => {
      storage.set(STORAGE_KEYS.sidebarCollapsed, collapsed ? '0' : '1');
      return !collapsed;
    });
  }, [tablet]);
  return { collapsed: tablet ? !tabletExpanded : pinnedCollapsed, tablet, toggle };
}
