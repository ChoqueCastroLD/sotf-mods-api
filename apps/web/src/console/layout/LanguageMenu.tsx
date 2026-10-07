/**
 * Language switcher of the top bar (same control as the public header: an icon, the language code
 * and a list of native names). It switches the console in place, no reload: the choice is saved on
 * the account first (`PATCH /me/settings`, so the shell does not switch back to the saved language)
 * and then applied. A failure keeps the current language and says so in a toast.
 */

import { LOCALE_INFO, LOCALES, type Locale } from '@sotf/i18n';
import { cn } from '@sotf/ui/cn';
import { DisclosureMenu, disclosureItemClasses } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { RadarSpinner } from '@sotf/ui/spinner';
import { useQueryClient } from '@tanstack/react-query';
import { Check, Languages } from 'lucide-react';
import { useState } from 'react';
import { patchMe } from '../features/settings/api.ts';
import { useConsoleLocale } from '../hooks/use-console-locale.ts';
import { api } from '../lib/api.ts';
import { t } from '../lib/messages.ts';
import { notify } from '../lib/notify.ts';

export function LanguageMenu({ className }: { className?: string }) {
  const { locale, setLocale } = useConsoleLocale();
  const queryClient = useQueryClient();
  const [saving, setSaving] = useState<Locale | null>(null);

  const choose = async (code: Locale, element: HTMLElement) => {
    element.closest('details')?.removeAttribute('open');
    if (code === locale || saving) return;
    setSaving(code);
    try {
      const settings = await api.me.updateSettings({ body: { locale: code } });
      patchMe(queryClient, (me) => ({ ...me, settings }));
      setLocale(code);
    } catch {
      notify.error(t('console_language_failed'));
    } finally {
      setSaving(null);
    }
  };

  return (
    <DisclosureMenu
      align="end"
      hideChevron
      className={className}
      summaryClassName="flex h-11 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-fg-muted transition-colors duration-(--dur-fast) hover:bg-fg/8 hover:text-fg md:h-10"
      panelClassName="w-52"
      summary={
        <>
          <Icon icon={Languages} size={18} />
          <span className="sr-only">{t('ui_language')} </span>
          <span lang={LOCALE_INFO[locale].tag} className="uppercase">
            {locale}
          </span>
        </>
      }
    >
      <ul>
        {LOCALES.map((code) => {
          const selected = code === locale;
          return (
            <li key={code}>
              <button
                type="button"
                lang={LOCALE_INFO[code].tag}
                aria-current={selected ? 'true' : undefined}
                aria-busy={saving === code}
                onClick={(event) => void choose(code, event.currentTarget)}
                className={cn(disclosureItemClasses, 'min-h-9')}
              >
                <span className="flex w-4 shrink-0 text-primary">
                  {saving === code ? <RadarSpinner size={14} /> : selected ? <Icon icon={Check} size={16} /> : null}
                </span>
                {LOCALE_INFO[code].endonym}
              </button>
            </li>
          );
        })}
      </ul>
    </DisclosureMenu>
  );
}
