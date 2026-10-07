/**
 * Account menu of the top bar: public profile, settings, keyboard shortcuts, back to the site and
 * sign out. A `<details>` disclosure (WP-25 `DisclosureMenu`): light, keyboard- and
 * screen-reader-friendly, no popup library in the shell.
 */

import { Avatar } from '@sotf/ui/avatar';
import { cn } from '@sotf/ui/cn';
import { DisclosureMenu, disclosureItemClasses } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { useQueryClient } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { ArrowLeft, Keyboard, LogOut, Settings2, UserRound } from 'lucide-react';
import { useState } from 'react';
import type { Me } from '../hooks/use-me.ts';
import { shellApi } from '../lib/http.ts';
import { t } from '../lib/messages.ts';
import { notify } from '../lib/notify.ts';

export interface AccountMenuProps {
  me: Me;
  onShowShortcuts: () => void;
}

function closeMenu(element: Element) {
  const details = element.closest('details');
  if (details) details.open = false;
}

export function AccountMenu({ me, onShowShortcuts }: AccountMenuProps) {
  const queryClient = useQueryClient();
  const [signingOut, setSigningOut] = useState(false);
  const { user } = me;

  const signOut = async () => {
    setSigningOut(true);
    try {
      const result = await shellApi.logout();
      queryClient.clear();
      // `/logout` (same-origin GET) also clears the cookies of a session that was already gone.
      window.location.assign(result === 'signed-out' ? '/' : '/logout');
    } catch {
      setSigningOut(false);
      notify.error(t('console_sign_out_failed'));
    }
  };

  const item = cn(disclosureItemClasses, 'w-full max-md:min-h-11');
  return (
    <DisclosureMenu
      align="end"
      hideChevron
      summaryClassName="flex min-h-11 items-center gap-2 rounded-full p-0.5 hover:bg-fg/8 md:min-h-10 md:pe-3"
      panelClassName="w-60"
      summary={
        <>
          <Avatar name={user.displayName} id={user.id} src={user.avatarUrl} size={32} />
          <span className="hidden max-w-36 truncate text-sm font-medium text-fg md:inline">{user.displayName}</span>
          <span className="sr-only">{t('common_account_menu')}</span>
        </>
      }
    >
      <div className="flex flex-col gap-0.5 px-2.5 py-2">
        <span className="truncate text-sm font-semibold text-fg">{user.displayName}</span>
        <span className="truncate text-xs text-fg-muted">@{user.handle}</span>
      </div>
      <hr className="my-1 border-border" />
      <a href={`/profile/${encodeURIComponent(user.handle)}`} className={item}>
        <Icon icon={UserRound} size={16} />
        {t('common_account_profile')}
      </a>
      <Link to={'/settings/profile' as '/'} className={item} onClick={(event) => closeMenu(event.currentTarget)}>
        <Icon icon={Settings2} size={16} />
        {t('common_account_settings')}
      </Link>
      <button
        type="button"
        className={item}
        onClick={(event) => {
          closeMenu(event.currentTarget);
          onShowShortcuts();
        }}
      >
        <Icon icon={Keyboard} size={16} />
        {t('console_shortcuts_open')}
      </button>
      <a href="/" className={item}>
        <Icon icon={ArrowLeft} size={16} />
        {t('console_back_to_site')}
      </a>
      <hr className="my-1 border-border" />
      <button type="button" className={item} disabled={signingOut} aria-busy={signingOut} onClick={signOut}>
        <Icon icon={LogOut} size={16} />
        {t('common_account_sign_out')}
      </button>
    </DisclosureMenu>
  );
}
