/**
 * Building blocks shared by the auth islands: the root wrapper (text dictionary, `@sotf/ui`
 * labels, toast bus), the accessible form-level alert (what happened, what to do,
 * reference: PLAN §1.2), the error summary that links to each invalid field (research/03 §5.7) and
 * the rate-limit countdown.
 */
import { Icon } from '@sotf/ui/icons';
import { englishUiTranslate, type UiTranslate, UiTranslateProvider } from '@sotf/ui/labels';
import { CircleAlert, TriangleAlert } from 'lucide-react';
import {
  createContext,
  type ReactNode,
  type RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { toast } from '../../lib/client/toast.ts';
import type { ApiFailure } from './api.ts';
import { type AuthDictionary, AuthI18nProvider, createTranslate, type Translate, useT } from './i18n.tsx';
import type { AuthMessageKey } from './message-keys.ts';

/** Props every auth island receives from its page. */
export interface AuthIslandProps {
  /** Messages of the island in the page locale (`messages.server.ts`). */
  messages: AuthDictionary;
  /** BCP-47 language of the page. */
  lang: string;
}

export type ToastKind = 'success' | 'info' | 'error';
export type Notify = (kind: ToastKind, title: string, description?: string) => void;

const NotifyContext = createContext<Notify>(() => {});

/** Shows a toast on the shared public toast bus (`lib/client/toast.ts`). */
export function useNotify(): Notify {
  return useContext(NotifyContext);
}

const notify: Notify = (kind, title, description) => {
  toast[kind](title, description ? { description } : undefined);
};

/** Root of every auth island. */
export function AuthIsland({ messages, lang, children }: AuthIslandProps & { children: ReactNode }) {
  const uiTranslate = useMemo<UiTranslate>(() => {
    const t = createTranslate(messages, lang);
    return (key, params) =>
      messages[key] !== undefined ? t(key as AuthMessageKey, params) : englishUiTranslate(key, params);
  }, [messages, lang]);
  return (
    <AuthI18nProvider messages={messages} lang={lang}>
      <UiTranslateProvider value={uiTranslate}>
        <NotifyContext.Provider value={notify}>{children}</NotifyContext.Provider>
      </UiTranslateProvider>
    </AuthI18nProvider>
  );
}

/** A failure the form shows above its fields. */
export type FormFailure = ApiFailure | { ok: false; kind: 'turnstile' };

export interface AlertText {
  title: string;
  detail: string;
  reference?: string;
}

/** API problem codes with their own text (the others read as «something went wrong»). */
const KNOWN_PROBLEMS: ReadonlySet<string> = new Set([
  'VALIDATION_FAILED',
  'UNAUTHENTICATED',
  'INVALID_CREDENTIALS',
  'FORBIDDEN',
  'EMAIL_NOT_VERIFIED',
  'NOT_FOUND',
  'GONE',
  'CONFLICT',
  'UNSUPPORTED_MEDIA_TYPE',
  'RATE_LIMITED',
  'TURNSTILE_REQUIRED',
  'SUSPENDED',
  'INTERNAL',
  'UNAVAILABLE',
]);

/** Title and detail of an API problem code (the UI translates by `code`, PLAN §5.1). */
export function problemText(t: Translate, code: string): { title: string; detail: string } {
  const base = KNOWN_PROBLEMS.has(code) ? `errors_code_${code.toLowerCase()}` : 'errors_code_unknown';
  return { title: t(`${base}_title` as AuthMessageKey), detail: t(`${base}_detail` as AuthMessageKey) };
}

/** Localized text of a failure; `retryIn` overrides the rate-limit wait with the live countdown. */
export function failureText(t: Translate, failure: FormFailure, retryIn = 0): AlertText {
  if (failure.kind === 'network') return { title: t('errors_network_title'), detail: t('errors_network_detail') };
  if (failure.kind === 'turnstile') {
    return { title: t('errors_code_turnstile_required_title'), detail: t('auth_error_turnstile_failed') };
  }
  const { problem } = failure;
  if (problem.code === 'RATE_LIMITED') {
    const seconds = retryIn > 0 ? retryIn : (problem.retryAfter ?? 0);
    return {
      title: t('errors_code_rate_limited_title'),
      detail: seconds > 0 ? t('auth_rate_limited', { seconds }) : t('errors_code_rate_limited_detail'),
      ...(problem.requestId ? { reference: problem.requestId } : {}),
    };
  }
  const text = problemText(t, problem.code);
  // Expected outcomes of the auth flow do not need a support reference.
  const expected = ['INVALID_CREDENTIALS', 'VALIDATION_FAILED', 'CONFLICT', 'TURNSTILE_REQUIRED'].includes(
    problem.code,
  );
  return {
    title: text.title,
    detail: text.detail,
    ...(problem.requestId && !expected ? { reference: problem.requestId } : {}),
  };
}

export interface FormAlertProps {
  failure: FormFailure | null;
  /** Live seconds left of a rate limit. */
  retryIn?: number;
  /** Replaces the detail text (e.g. the generic sign-in error of T0-13). */
  detail?: string;
  alertRef?: RefObject<HTMLDivElement | null>;
  children?: ReactNode;
}

/**
 * Form-level alert. It is focused when it appears (`tabIndex=-1`) so keyboard and screen-reader
 * users land on the explanation; the live region announces later changes.
 */
export function FormAlert({ failure, retryIn = 0, detail, alertRef, children }: FormAlertProps) {
  const t = useT();
  if (!failure) return null;
  const text = failureText(t, failure, retryIn);
  const warning = failure.kind === 'problem' && failure.problem.code === 'RATE_LIMITED';
  return (
    <div
      ref={alertRef}
      role="alert"
      tabIndex={-1}
      data-form-alert
      className={
        warning
          ? 'flex gap-3 rounded-md border border-warning/50 bg-warning/10 p-3 text-sm text-fg outline-none focus-visible:outline-2 focus-visible:outline-focus'
          : 'flex gap-3 rounded-md border border-danger/50 bg-danger/10 p-3 text-sm text-fg outline-none focus-visible:outline-2 focus-visible:outline-focus'
      }
    >
      <span className={warning ? 'mt-0.5 flex text-warning' : 'mt-0.5 flex text-danger'}>
        <Icon icon={warning ? TriangleAlert : CircleAlert} size={18} />
      </span>
      <div className="grid gap-1">
        <p className="font-semibold">{text.title}</p>
        <p className="text-fg-muted">{detail ?? text.detail}</p>
        {children}
        {text.reference ? (
          <p className="font-mono text-xs text-fg-subtle">{t('errors_reference', { id: text.reference })}</p>
        ) : null}
      </div>
    </div>
  );
}

export interface SummaryItem {
  /** `id` of the invalid control. */
  id: string;
  label: string;
  message: string;
}

/** Error summary of a long form: count + one link per invalid field (focus moves to it). */
export function ErrorSummary({
  items,
  summaryRef,
}: {
  items: readonly SummaryItem[];
  summaryRef?: RefObject<HTMLDivElement | null>;
}) {
  const t = useT();
  if (items.length === 0) return null;
  return (
    <div
      ref={summaryRef}
      role="alert"
      tabIndex={-1}
      data-error-summary
      className="grid gap-2 rounded-md border border-danger/50 bg-danger/10 p-3 text-sm outline-none focus-visible:outline-2 focus-visible:outline-focus"
    >
      <p className="flex items-center gap-2 font-semibold text-fg">
        <Icon icon={CircleAlert} size={18} className="text-danger" />
        {t('errors_validation_summary', { count: items.length })}
      </p>
      <ul className="grid gap-1 ps-7">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-link underline underline-offset-3"
              onClick={(event) => {
                const target = document.getElementById(item.id);
                if (!target) return;
                event.preventDefault();
                target.focus();
                target.scrollIntoView({ block: 'center', behavior: 'smooth' });
              }}
            >
              {item.label}: {item.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Seconds left of a server-imposed wait; ticks every second and stops at zero. */
export function useCountdown(): [number, (seconds: number) => void] {
  const [left, setLeft] = useState(0);
  useEffect(() => {
    if (left <= 0) return;
    const timer = setTimeout(() => setLeft((value) => Math.max(0, value - 1)), 1000);
    return () => clearTimeout(timer);
  }, [left]);
  const start = useCallback((seconds: number) => setLeft(Math.max(0, Math.ceil(seconds))), []);
  return [left, start];
}

/** Focuses an element after the render that shows it. */
export function useFocusOnChange<T>(value: T, ref: RefObject<HTMLElement | null>): void {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (value) ref.current?.focus();
  }, [value, ref]);
}

/** Host of the Turnstile widget: empty (0 px) until Cloudflare needs an interaction. */
export function TurnstileSlot({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  return <div ref={containerRef} data-turnstile className="empty:hidden" />;
}
