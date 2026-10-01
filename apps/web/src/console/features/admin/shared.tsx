/**
 * Pieces shared by the admin screens: page header and panels, the 12 h re-authentication rule
 * (`REAUTH_REQUIRED` → «Sign in again»), failure toasts, `Intl` formatting in the console locale
 * and time zone, and the per-locale text fields of categories, tags, announcements and templates.
 */
import { isApiError } from '@sotf/contracts/client';
import { formatDate, formatDateTime, formatNumber, formatPercent, LOCALE_INFO, LOCALES, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Button } from '@sotf/ui/button';
import { cn } from '@sotf/ui/cn';
import { EmptyState } from '@sotf/ui/empty-state';
import { ErrorState } from '@sotf/ui/error-state';
import { Field } from '@sotf/ui/field';
import { Icon } from '@sotf/ui/icons';
import { Input } from '@sotf/ui/input';
import { Textarea } from '@sotf/ui/textarea';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { KeyRound, Languages } from 'lucide-react';
import { type ReactNode, useEffect, useId, useRef, useState } from 'react';
import { RouteError } from '../../components/RouteError.tsx';
import { currentPath, redirectToLogin } from '../../lib/auth.ts';
import { errorReference } from '../../lib/errors.ts';
import { shellApi } from '../../lib/http.ts';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale, problemText } from '../../lib/messages.ts';
import { notify } from '../../lib/notify.ts';

// -----------------------------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------------------------

export interface AdminHeaderProps {
  title: string;
  description: string;
  actions?: ReactNode;
}

/** Heading block of an admin screen (the only h1 of the outlet). */
export function AdminHeader({ title, description, actions }: AdminHeaderProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div className="grid gap-1">
        <p className="readout text-signal max-md:hidden">{m.admin_readout()}</p>
        <h1 className="font-display-caps text-display-xs text-fg max-md:sr-only">{title}</h1>
        <p className="max-w-prose text-sm text-fg-muted max-md:line-clamp-2">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export interface PanelProps {
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** A titled card of a screen (h2). */
export function Panel({ title, description, actions, children, className }: PanelProps) {
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      className={cn('grid gap-4 rounded-lg border border-border bg-surface p-4 md:p-5', className)}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="grid gap-1">
          <h2 id={id} className="text-base font-semibold text-fg">
            {title}
          </h2>
          {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}

/** Horizontal scroller for wide tables (keeps the page from scrolling sideways on phones). */
export function TableScroller({ label, children }: { label: string; children: ReactNode }) {
  const region = useRef<HTMLElement>(null);
  const [more, setMore] = useState(false);
  // A soft fade on the trailing edge tells touch users there is more to swipe to.
  useEffect(() => {
    const element = region.current;
    if (!element) return;
    const update = () => setMore(Math.abs(element.scrollLeft) + element.clientWidth < element.scrollWidth - 4);
    update();
    element.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    if (element.firstElementChild) observer.observe(element.firstElementChild);
    return () => {
      element.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, []);
  return (
    <section
      ref={region}
      aria-label={label}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be reachable by keyboard (WCAG 2.1.1)
      tabIndex={0}
      data-more={more ? 'true' : 'false'}
      className="overflow-x-auto rounded-md border border-border data-[more=true]:[mask-image:linear-gradient(to_right,#000_calc(100%-2.5rem),transparent)] rtl:data-[more=true]:[mask-image:linear-gradient(to_left,#000_calc(100%-2.5rem),transparent)]"
    >
      {children}
    </section>
  );
}

export const thClasses = 'px-3 py-2 text-start readout whitespace-nowrap';
export const tdClasses = 'px-3 py-2 align-middle';

// -----------------------------------------------------------------------------------------------
// Failures and the 12 h re-authentication rule
// -----------------------------------------------------------------------------------------------

export function isReauthRequired(error: unknown): boolean {
  return isApiError(error) && error.code === 'REAUTH_REQUIRED';
}

/** Ends the (too old) session and comes back to this screen after signing in again. */
export async function signInAgain(): Promise<void> {
  const next = currentPath();
  try {
    await shellApi.logout();
  } catch {
    // Signing out failing (already gone, offline) must not block the way back in.
  }
  redirectToLogin(next);
}

/** The server's own words for a failed write: field messages of a 422, else the problem text. */
export function failureDetail(error: unknown): string {
  if (isApiError(error)) {
    const fields = error.problem.errors ?? [];
    if (error.code === 'VALIDATION_FAILED' && fields.length > 0) {
      return fields
        .slice(0, 3)
        .map((field) => (field.path ? `${field.path}: ${field.message}` : field.message))
        .join(' · ');
    }
    if (error.code === 'CONFLICT' && error.problem.detail) return error.problem.detail;
    return problemText(error.code).detail;
  }
  return problemText(null).detail;
}

/** Toast for a failed admin action; the 12 h rule offers «Sign in again». */
export function reportFailure(error: unknown, title: string): void {
  if (isReauthRequired(error)) {
    notify.warning(m.admin_reauth_title(), {
      id: 'admin-reauth',
      description: m.admin_reauth_text(),
      duration: Number.POSITIVE_INFINITY,
      action: { label: m.admin_reauth_action(), onClick: () => void signInAgain() },
    });
    return;
  }
  const reference = errorReference(error);
  notify.error(title, {
    description: reference
      ? `${failureDetail(error)} (${m.admin_error_reference({ reference })})`
      : failureDetail(error),
  });
}

/** «Confirm it's you»: the admin session is older than 12 h. */
export function ReauthPanel() {
  const [busy, setBusy] = useState(false);
  return (
    <EmptyState
      icon={<Icon icon={KeyRound} size={32} />}
      title={m.admin_reauth_title()}
      description={m.admin_reauth_text()}
      action={
        <Button
          loading={busy}
          onClick={() => {
            setBusy(true);
            void signInAgain();
          }}
        >
          {m.admin_reauth_action()}
        </Button>
      }
    />
  );
}

/** Error component of every admin route: the re-authentication panel, else the console's. */
export function AdminRouteError(props: ErrorComponentProps) {
  if (isReauthRequired(props.error)) return <ReauthPanel />;
  return <RouteError {...props} />;
}

/** Inline failure of a panel (not the whole screen) with retry. */
export function PanelError({ error, onRetry }: { error: unknown; onRetry: () => void }) {
  if (isReauthRequired(error)) return <ReauthPanel />;
  const reference = errorReference(error);
  return (
    <ErrorState
      title={m.admin_panel_error_title()}
      description={failureDetail(error)}
      onRetry={onRetry}
      {...(reference ? { reference } : {})}
    />
  );
}

// -----------------------------------------------------------------------------------------------
// Formatting (console locale; dates of the calendar in UTC, instants in the browser's zone)
// -----------------------------------------------------------------------------------------------

export function locale(): Locale {
  return activeLocale();
}

/** A calendar date (`2026-09-29`) as «Sep 29, 2026». */
export function formatDay(value: string): string {
  try {
    return formatDate(locale(), `${value.slice(0, 10)}T00:00:00Z`, 'medium');
  } catch {
    return value;
  }
}

/** An instant in the viewer's time zone: «Sep 29, 2026, 2:05 PM». */
export function formatInstant(value: string): string {
  try {
    return formatDateTime(locale(), value, 'medium', 'short', { timeZone: browserTimeZone() });
  } catch {
    return value;
  }
}

export function formatCount(value: number): string {
  return formatNumber(locale(), value);
}

export function formatShare(ratio: number): string {
  return formatPercent(locale(), ratio);
}

export function formatUsd(value: number): string {
  return formatNumber(locale(), value, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: value > 0 && value < 0.01 ? 4 : 2,
  });
}

/** Today in UTC as `YYYY-MM-DD`. */
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/** `YYYY-MM-DD` plus `days` (UTC). */
export function addDays(day: string, days: number): string {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

const pad = (value: number) => String(value).padStart(2, '0');

/** ISO instant → value of an `<input type="datetime-local">` (browser zone). */
export function toLocalInput(iso: string | null | undefined): string {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

/** Value of an `<input type="datetime-local">` (browser zone) → ISO instant, or null. */
export function fromLocalInput(value: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

/** Plain text of server-rendered (sanitized) HTML, for short previews. */
export function htmlToText(html: string | null | undefined): string {
  if (!html) return '';
  if (typeof DOMParser === 'undefined')
    return html
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  return (new DOMParser().parseFromString(html, 'text/html').body.textContent ?? '').replace(/\s+/g, ' ').trim();
}

/** Lowercase kebab slug of a free text (`Weapons & Gear` → `weapons-gear`). */
export function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

// -----------------------------------------------------------------------------------------------
// Per-locale texts
// -----------------------------------------------------------------------------------------------

export type LocalizedTexts = Partial<Record<Locale, string>>;

/** Drops empty entries (the API falls back to English for missing locales). */
export function compactTexts(texts: LocalizedTexts): LocalizedTexts {
  const out: LocalizedTexts = {};
  for (const code of LOCALES) {
    const value = texts[code]?.trim();
    if (value) out[code] = value;
  }
  return out;
}

export interface LocalizedFieldsProps {
  /** Summary of the disclosure («Translations»). */
  label: string;
  values: LocalizedTexts;
  onChange: (next: LocalizedTexts) => void;
  maxLength: number;
  multiline?: boolean;
  /** Locales edited elsewhere in the form (English, usually). */
  exclude?: readonly Locale[];
  disabled?: boolean;
}

/** One optional field per locale, folded; shows how many are filled. */
export function LocalizedFields({
  label,
  values,
  onChange,
  maxLength,
  multiline,
  exclude = ['en'],
  disabled,
}: LocalizedFieldsProps) {
  const codes = LOCALES.filter((code) => !exclude.includes(code));
  const filled = codes.filter((code) => values[code]?.trim()).length;
  return (
    <details className="group rounded-md border border-border bg-sunken/50">
      <summary className="flex min-h-11 cursor-pointer items-center gap-2 px-3 text-sm font-medium text-fg">
        <Icon icon={Languages} size={16} className="text-fg-muted" />
        <span className="flex-1">{label}</span>
        <span className="text-xs text-fg-muted tabular-nums">
          {m.admin_translations_filled({ filled, total: codes.length })}
        </span>
      </summary>
      <div className="grid gap-3 border-t border-border p-3 sm:grid-cols-2">
        {codes.map((code) => {
          const value = values[code] ?? '';
          const change = (next: string) => onChange({ ...values, [code]: next });
          const info = LOCALE_INFO[code];
          return (
            <Field key={code} label={`${info.endonym} (${code})`} optional>
              {multiline ? (
                <Textarea
                  lang={info.tag}
                  value={value}
                  maxLength={maxLength}
                  minRows={2}
                  maxRows={6}
                  disabled={disabled}
                  onChange={(event) => change(event.currentTarget.value)}
                />
              ) : (
                <Input
                  lang={info.tag}
                  value={value}
                  maxLength={maxLength}
                  disabled={disabled}
                  onChange={(event) => change(event.currentTarget.value)}
                />
              )}
            </Field>
          );
        })}
      </div>
    </details>
  );
}

/** Small colored dot + label (status cells). */
export function StatusDot({
  tone,
  children,
}: {
  tone: 'success' | 'warning' | 'danger' | 'muted';
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden="true"
        className={cn(
          'size-2 shrink-0 rounded-full',
          tone === 'success' && 'bg-success',
          tone === 'warning' && 'bg-warning',
          tone === 'danger' && 'bg-danger',
          tone === 'muted' && 'bg-fg-subtle',
        )}
      />
      {children}
    </span>
  );
}
