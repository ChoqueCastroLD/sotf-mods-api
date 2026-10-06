/**
 * Banner: global announcements (a game update, maintenance, winter). Icon + text, optional action,
 * dismissible; with `persistId` the dismissal survives reloads (see `dismissals.ts`, which also
 * hides it before first paint).
 */
import { CircleAlert, Info, Snowflake, TriangleAlert, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { cn } from './cn.ts';
import { isDismissed, rememberDismissal } from './dismissals.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';

export type BannerTone = 'info' | 'signal' | 'warning' | 'danger' | 'winter';

const TONE: Record<BannerTone, { classes: string; icon: ReactNode }> = {
  info: { classes: 'border-border bg-raised', icon: <Icon icon={Info} size={18} className="text-signal" /> },
  signal: {
    classes: 'border-signal/40 bg-signal-soft',
    icon: <Icon icon={Info} size={18} className="text-signal" />,
  },
  warning: {
    classes: 'border-warning/40 bg-warning-soft',
    icon: <Icon icon={TriangleAlert} size={18} className="text-warning" />,
  },
  danger: {
    classes: 'border-danger/40 bg-danger-soft',
    icon: <Icon icon={CircleAlert} size={18} className="text-danger" />,
  },
  winter: {
    classes: 'border-blueprint/40 bg-blueprint-surface',
    icon: <Icon icon={Snowflake} size={18} className="text-blueprint" />,
  },
};

export interface BannerProps {
  tone?: BannerTone;
  title?: ReactNode;
  children?: ReactNode;
  /** Call to action (a `ButtonLink` or link). */
  action?: ReactNode;
  /** Show the × button. */
  dismissible?: boolean;
  /** Remember the dismissal under this id (`[a-z0-9._-]`, e.g. `patch-1.0.4`). */
  persistId?: string;
  onDismiss?: () => void;
  /** Replace the tone icon. */
  icon?: ReactNode;
  className?: string;
}

export function Banner({
  tone = 'info',
  title,
  children,
  action,
  dismissible = false,
  persistId,
  onDismiss,
  icon,
  className,
}: BannerProps) {
  const t = useUiTranslate();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (persistId && isDismissed(persistId)) setHidden(true);
  }, [persistId]);
  if (hidden) return null;
  const style = TONE[tone];
  return (
    <div
      data-banner-id={persistId}
      className={cn(
        'flex items-start gap-3 rounded-lg border p-3 text-sm text-fg md:items-center',
        style.classes,
        className,
      )}
    >
      <span className="mt-0.5 flex md:mt-0">{icon ?? style.icon}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <p className="min-w-0 flex-1">
          {title ? <strong className="me-1.5 font-semibold">{title}</strong> : null}
          {children}
        </p>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {dismissible ? (
        <button
          type="button"
          data-banner-dismiss=""
          aria-label={t('ui_dismiss')}
          className="-my-1 flex size-8 shrink-0 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg"
          onClick={() => {
            if (persistId) rememberDismissal(persistId);
            setHidden(true);
            onDismiss?.();
          }}
        >
          <Icon icon={X} size={16} />
        </button>
      ) : null}
    </div>
  );
}
