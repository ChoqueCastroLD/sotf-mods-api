/**
 * A bordered message block of the wizard (errors, warnings, successes) that may contain lists.
 * `role="alert"` for errors (announced at once), `role="status"` otherwise. Icon + text: the tone
 * is never conveyed by colour alone.
 */
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react';
import type { ReactNode } from 'react';

export type CalloutTone = 'info' | 'success' | 'warning' | 'danger';

const TONES: Record<CalloutTone, { classes: string; icon: ReactNode }> = {
  info: { classes: 'border-border bg-raised', icon: <Icon icon={Info} size={18} className="text-signal" /> },
  success: {
    classes: 'border-success/40 bg-success-soft',
    icon: <Icon icon={CircleCheck} size={18} className="text-success" />,
  },
  warning: {
    classes: 'border-warning/50 bg-warning-soft',
    icon: <Icon icon={TriangleAlert} size={18} className="text-warning" />,
  },
  danger: {
    classes: 'border-danger/50 bg-danger-soft',
    icon: <Icon icon={CircleAlert} size={18} className="text-danger" />,
  },
};

export interface CalloutProps {
  tone?: CalloutTone;
  title?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  /** Live region role; defaults to `alert` for danger and `status` otherwise. */
  role?: 'alert' | 'status' | 'none';
  className?: string;
}

export function Callout({ tone = 'info', title, children, action, role, className }: CalloutProps) {
  const style = TONES[tone];
  const resolvedRole = role ?? (tone === 'danger' ? 'alert' : 'status');
  return (
    <div
      role={resolvedRole === 'none' ? undefined : resolvedRole}
      className={cn('flex items-start gap-3 rounded-lg border p-3 text-sm text-fg', style.classes, className)}
    >
      <span className="mt-0.5 flex shrink-0">{style.icon}</span>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {title ? <p className="font-medium">{title}</p> : null}
        {children ? <div className="text-fg-muted [&_a]:text-link [&_a]:underline">{children}</div> : null}
        {action ? <div className="mt-1 flex flex-wrap gap-2">{action}</div> : null}
      </div>
    </div>
  );
}
