/**
 * Frame of every settings screen (research/03 §6.11): the page heading, a «← Settings» link on
 * phones (list of sections → detail, the iOS pattern), and cards that save independently
 * («Save» per card, with a toast). Also the section list shown at `/settings` on phones.
 */
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { Link } from '@tanstack/react-router';
import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  Database,
  EyeOff,
  Hammer,
  KeyRound,
  KeySquare,
  type LucideIcon,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from 'lucide-react';
import type { FormEvent, ReactNode } from 'react';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';

export const SETTINGS_SECTIONS = [
  'profile',
  'account',
  'security',
  'tokens',
  'notifications',
  'preferences',
  'privacy',
  'creator',
  'data',
] as const;
export type SettingsSection = (typeof SETTINGS_SECTIONS)[number];

export const SECTION_META: Readonly<
  Record<
    SettingsSection,
    { to: `/settings/${SettingsSection}`; icon: LucideIcon; title: () => string; hint: () => string }
  >
> = {
  profile: {
    to: '/settings/profile',
    icon: UserRound,
    title: () => m.settings_profile_title(),
    hint: () => m.settings_profile_hint(),
  },
  account: {
    to: '/settings/account',
    icon: KeyRound,
    title: () => m.settings_account_title(),
    hint: () => m.settings_account_hint(),
  },
  security: {
    to: '/settings/security',
    icon: ShieldCheck,
    title: () => m.settings_security_title(),
    hint: () => m.settings_security_hint(),
  },
  tokens: {
    to: '/settings/tokens',
    icon: KeySquare,
    title: () => m.tokens_title(),
    hint: () => m.tokens_hint(),
  },
  notifications: {
    to: '/settings/notifications',
    icon: BellRing,
    title: () => m.settings_notifications_title(),
    hint: () => m.settings_notifications_hint(),
  },
  preferences: {
    to: '/settings/preferences',
    icon: SlidersHorizontal,
    title: () => m.settings_preferences_title(),
    hint: () => m.settings_preferences_hint(),
  },
  privacy: {
    to: '/settings/privacy',
    icon: EyeOff,
    title: () => m.settings_privacy_title(),
    hint: () => m.settings_privacy_hint(),
  },
  creator: {
    to: '/settings/creator',
    icon: Hammer,
    title: () => m.settings_creator_title(),
    hint: () => m.settings_creator_hint(),
  },
  data: {
    to: '/settings/data',
    icon: Database,
    title: () => m.settings_data_title(),
    hint: () => m.settings_data_hint(),
  },
};

export function SettingsPage({ section, children }: { section: SettingsSection; children: ReactNode }) {
  const meta = SECTION_META[section];
  useDocumentTitle(meta.title());
  return (
    <div className="grid max-w-3xl gap-6">
      <Link
        to="/settings"
        className="-ms-1 inline-flex h-11 items-center gap-1 justify-self-start rounded-md px-1 text-sm font-semibold text-link md:hidden"
      >
        <Icon icon={ChevronLeft} size={18} />
        {m.settings_back()}
      </Link>
      <header className="grid gap-1">
        <p className="readout text-signal">{m.settings_readout()}</p>
        <h1 className="font-display-caps text-display-xs text-fg">{meta.title()}</h1>
        <p className="max-w-prose text-sm text-fg-muted">{meta.hint()}</p>
      </header>
      {children}
    </div>
  );
}

export interface SettingsCardProps {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Makes the card a form with a «Save» footer. */
  onSubmit?: () => void | Promise<void>;
  dirty?: boolean;
  saving?: boolean;
  onReset?: () => void;
  submitLabel?: ReactNode;
  tone?: 'default' | 'danger';
  className?: string;
}

export function SettingsCard({
  id,
  title,
  description,
  children,
  onSubmit,
  dirty = true,
  saving = false,
  onReset,
  submitLabel,
  tone = 'default',
  className,
}: SettingsCardProps) {
  const headingId = id ? `${id}-title` : undefined;
  const body = (
    <>
      <div className="grid gap-1">
        <h2 id={headingId} className={cn('text-lg font-semibold', tone === 'danger' ? 'text-danger' : 'text-fg')}>
          {title}
        </h2>
        {description ? <p className="text-sm text-fg-muted">{description}</p> : null}
      </div>
      {children ? <div className="grid gap-4">{children}</div> : null}
    </>
  );
  const classes = cn(
    'grid gap-4 rounded-lg border bg-surface p-4 md:p-6',
    tone === 'danger' ? 'border-danger/50' : 'border-border',
    className,
  );
  if (!onSubmit) {
    return (
      <section id={id} aria-labelledby={headingId} className={classes}>
        {body}
      </section>
    );
  }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void onSubmit();
  };
  return (
    <form id={id} aria-labelledby={headingId} className={classes} onSubmit={submit} noValidate>
      {body}
      <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border pt-4">
        {onReset && dirty ? (
          <Button variant="ghost" onClick={onReset} disabled={saving}>
            {m.settings_discard()}
          </Button>
        ) : null}
        <Button type="submit" loading={saving} disabled={!dirty}>
          {submitLabel ?? m.settings_save()}
        </Button>
      </div>
    </form>
  );
}

/** The list of sections (`/settings` on phones; also a desktop overview). */
export function SettingsIndex() {
  useDocumentTitle(m.settings_index_title());
  return (
    <div className="grid max-w-3xl gap-6">
      <header className="grid gap-1">
        <p className="readout text-signal">{m.settings_readout()}</p>
        <h1 className="font-display-caps text-display-xs text-fg">{m.settings_index_title()}</h1>
      </header>
      <nav aria-label={m.settings_index_title()}>
        <ul className="grid divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
          {SETTINGS_SECTIONS.map((section) => {
            const meta = SECTION_META[section];
            return (
              <li key={section}>
                <Link
                  to={meta.to}
                  className="flex min-h-16 items-center gap-3 px-4 py-3 hover:bg-fg/5 focus-visible:bg-fg/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-fg/8 text-fg-muted">
                    <Icon icon={meta.icon} size={18} />
                  </span>
                  <span className="grid min-w-0 flex-1">
                    <span className="font-semibold text-fg">{meta.title()}</span>
                    <span className="truncate text-sm text-fg-muted">{meta.hint()}</span>
                  </span>
                  <Icon icon={ChevronRight} size={18} className="text-fg-subtle rtl:rotate-180" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
