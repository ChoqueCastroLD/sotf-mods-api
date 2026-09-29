/**
 * Toasts (research/03 §5.6) on sonner: bottom-right on desktop, bottom-centre on mobile (above
 * the fixed bars), at most 3 visible, 5 s (errors and progress persist until dismissed), pause
 * on hover, swipe to dismiss, optional action («Undo»).
 *
 * sonner only positions and stacks; every toast renders `ToastCard` (brand markup, icon + text,
 * never colour alone). `role="status"` for success/info/progress, `role="alert"` for warnings
 * and errors so assistive technology announces them assertively.
 *
 * Mount one `<Toaster />` per document (console root, or an island on public pages), then call
 * `toast.success('Saved')` from anywhere.
 */
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { Toaster as SonnerToaster, toast as sonner } from 'sonner';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';
import { RadarSpinner } from './spinner.tsx';
import { BELOW_MD_QUERY, useMediaQuery } from './use-media-query.ts';

export type ToastKind = 'success' | 'info' | 'warning' | 'error' | 'progress';

export const TOAST_DURATION_MS = 5000;

export interface ToastAction {
  label: ReactNode;
  onClick: () => void;
}

export interface ToastOptions {
  description?: ReactNode;
  /** One action button, e.g. `{ label: 'Undo', onClick: restore }`. */
  action?: ToastAction;
  /** Stable id: calling again with the same id updates the toast in place. */
  id?: string | number;
  /** Override the duration in ms (`Infinity` keeps it until dismissed). */
  duration?: number;
}

const ICONS = {
  success: <Icon icon={CircleCheck} size={18} className="text-success" />,
  info: <Icon icon={Info} size={18} className="text-signal" />,
  warning: <Icon icon={TriangleAlert} size={18} className="text-warning" />,
  error: <Icon icon={CircleAlert} size={18} className="text-danger" />,
  progress: <RadarSpinner size={18} className="text-signal" />,
} as const satisfies Record<ToastKind, ReactNode>;

interface ToastCardProps {
  id: string | number;
  kind: ToastKind;
  title: ReactNode;
  description?: ReactNode;
  action?: ToastAction;
}

export function ToastCard({ id, kind, title, description, action }: ToastCardProps) {
  const t = useUiTranslate();
  const assertive = kind === 'error' || kind === 'warning';
  return (
    <div
      role={assertive ? 'alert' : 'status'}
      className={cn(
        'pointer-events-auto flex w-full items-start gap-3 rounded-lg border border-border bg-overlay p-3 pe-2 text-fg shadow-lg inset-shadow-highlight md:w-(--width)',
        kind === 'error' && 'border-danger/50',
      )}
    >
      <span className="mt-0.5 flex">{ICONS[kind]}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium">{title}</p>
        {description ? <p className="text-sm text-fg-muted">{description}</p> : null}
      </div>
      {action ? (
        <button
          type="button"
          className="h-8 shrink-0 rounded-sm px-2 text-sm font-semibold text-link hover:bg-fg/8"
          onClick={() => {
            action.onClick();
            sonner.dismiss(id);
          }}
        >
          {action.label}
        </button>
      ) : null}
      <button
        type="button"
        aria-label={t('ui_close')}
        className="flex size-8 shrink-0 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg"
        onClick={() => sonner.dismiss(id)}
      >
        <Icon icon={X} size={16} />
      </button>
    </div>
  );
}

function show(kind: ToastKind, title: ReactNode, options: ToastOptions = {}): string | number {
  const persistent = kind === 'error' || kind === 'progress';
  return sonner.custom(
    (id) => <ToastCard id={id} kind={kind} title={title} description={options.description} action={options.action} />,
    {
      id: options.id,
      duration: options.duration ?? (persistent ? Number.POSITIVE_INFINITY : TOAST_DURATION_MS),
      unstyled: true,
    },
  );
}

export interface ProgressMessages<T> {
  loading: ReactNode;
  success: ReactNode | ((value: T) => ReactNode);
  error: ReactNode | ((error: unknown) => ReactNode);
}

export const toast = {
  success: (title: ReactNode, options?: ToastOptions) => show('success', title, options),
  info: (title: ReactNode, options?: ToastOptions) => show('info', title, options),
  warning: (title: ReactNode, options?: ToastOptions) => show('warning', title, options),
  error: (title: ReactNode, options?: ToastOptions) => show('error', title, options),
  /** Shows a progress toast until `promise` settles, then turns it into success or error. */
  progress<T>(promise: Promise<T>, messages: ProgressMessages<T>, options: Omit<ToastOptions, 'id'> = {}) {
    const id = show('progress', messages.loading, options);
    promise.then(
      (value) =>
        show('success', typeof messages.success === 'function' ? messages.success(value) : messages.success, {
          ...options,
          id,
        }),
      (error: unknown) =>
        show('error', typeof messages.error === 'function' ? messages.error(error) : messages.error, {
          ...options,
          id,
        }),
    );
    return id;
  },
  dismiss: (id?: string | number) => sonner.dismiss(id),
};

export interface ToasterProps {
  /** Distance from the viewport edge; raise it above fixed bottom bars (e.g. `5rem`). */
  offset?: string;
  mobileOffset?: string;
}

export function Toaster({ offset = '1.5rem', mobileOffset = '1rem' }: ToasterProps) {
  const t = useUiTranslate();
  const belowMd = useMediaQuery(BELOW_MD_QUERY);
  return (
    <SonnerToaster
      position={belowMd ? 'bottom-center' : 'bottom-right'}
      visibleToasts={3}
      gap={8}
      offset={offset}
      mobileOffset={mobileOffset}
      containerAriaLabel={t('ui_notifications')}
      className="z-(--z-toast)! font-sans"
      toastOptions={{ unstyled: true, closeButtonAriaLabel: t('ui_close') }}
    />
  );
}
