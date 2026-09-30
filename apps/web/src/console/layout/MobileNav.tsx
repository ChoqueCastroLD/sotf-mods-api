/**
 * Mobile menu (< 768 px, research/03 §6.9 «la sidebar pasa a menú en el header»): a native modal
 * `<dialog>` (focus trap, Escape and top layer for free, no extra JavaScript) sliding from the
 * start edge. Closes on navigation and on a click on the backdrop.
 */

import { Icon } from '@sotf/ui/icons';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { t } from '../lib/messages.ts';
import { type AreaId, findArea, type Viewer } from '../lib/navigation.ts';
import { BrandLogo } from './BrandLogo.tsx';
import { AreaList, SectionList } from './NavLinks.tsx';

export interface MobileNavProps {
  viewer: Viewer;
  area: AreaId | null;
  pathname: string;
  unread: number;
}

const MENU_ID = 'console-mobile-menu';

export function MobileNav({ viewer, area, pathname, unread }: MobileNavProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const current = area ? findArea(area) : null;

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
  }, [open]);

  // Any navigation closes the menu (also Back/Forward).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('common_nav_open_menu')}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={MENU_ID}
        className="-ms-2 flex size-11 items-center justify-center rounded-md text-fg hover:bg-fg/8 md:hidden"
      >
        <Icon icon={Menu} size={22} />
      </button>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click only; the keyboard closes the modal dialog with Escape (native) and the close button */}
      <dialog
        ref={dialog}
        id={MENU_ID}
        aria-label={t('console_nav_label')}
        onClose={close}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-dvh w-[min(20rem,86vw)] max-w-none border-e border-border bg-surface p-0 text-fg backdrop:bg-bg/70 backdrop:backdrop-blur-sm open:animate-rise md:hidden"
      >
        <div className="flex h-full flex-col gap-4 overflow-y-auto p-3">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex h-11 items-center rounded-md px-2 text-fg"
              aria-label={`${t('common_site_name')} · ${t('common_nav_home')}`}
            >
              <BrandLogo variant="lockup" />
            </a>
            <button
              type="button"
              onClick={close}
              aria-label={t('common_nav_close_menu')}
              className="flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-fg/8 hover:text-fg"
            >
              <Icon icon={X} size={20} />
            </button>
          </div>
          <AreaList
            viewer={viewer}
            current={area}
            label={t('console_area_switcher')}
            unread={unread}
            pathname={pathname}
            onNavigate={close}
          />
          {current && current.sections.length > 0 ? (
            <>
              <hr className="border-border" />
              <SectionList area={current} viewer={viewer} pathname={pathname} onNavigate={close} />
            </>
          ) : null}
          <a
            href="/"
            className="mt-auto flex min-h-11 items-center gap-3 rounded-md px-3 text-sm text-fg-muted hover:bg-fg/8 hover:text-fg"
          >
            {t('console_back_to_site')}
          </a>
        </div>
      </dialog>
    </>
  );
}
