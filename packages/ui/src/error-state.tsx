/**
 * ErrorState (research/03 §5.6, PLAN §1.2): what happened, what to do, «Try again» and the
 * reference id (the request id / `cf-ray`) so support can find the log line.
 */
import { CircleAlert, RotateCw } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button, ButtonLink } from './button.tsx';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';

export interface ErrorStateProps {
  /** What happened (short, no blame). */
  title: ReactNode;
  /** What to do next. */
  description?: ReactNode;
  /** Retry in place (client). */
  onRetry?: () => void;
  /** Retry by navigation (server-rendered pages: usually the current URL). */
  retryHref?: string;
  retrying?: boolean;
  /** Reference id shown as «Ref: …». */
  reference?: string;
  /** Extra actions (link to Discord/status). */
  actions?: ReactNode;
  /** Heading level of the title. Default 2. */
  headingLevel?: 2 | 3 | 4;
  className?: string;
}

export function ErrorState({
  title,
  description,
  onRetry,
  retryHref,
  retrying,
  reference,
  actions,
  headingLevel = 2,
  className,
}: ErrorStateProps) {
  const t = useUiTranslate();
  const Heading = `h${headingLevel}` as const;
  const retryIcon = <Icon icon={RotateCw} size={16} />;
  return (
    <div role="alert" className={cn('flex flex-col items-center gap-3 px-4 py-12 text-center', className)}>
      <span
        className="flex size-12 items-center justify-center rounded-full bg-danger-soft text-danger"
        aria-hidden="true"
      >
        <Icon icon={CircleAlert} size={24} />
      </span>
      <Heading className="text-lg font-semibold text-fg">{title}</Heading>
      {description ? <p className="max-w-prose text-sm text-fg-muted">{description}</p> : null}
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {onRetry ? (
          <Button variant="secondary" icon={retryIcon} loading={retrying} onClick={onRetry}>
            {t('ui_retry')}
          </Button>
        ) : retryHref ? (
          <ButtonLink variant="secondary" icon={retryIcon} href={retryHref}>
            {t('ui_retry')}
          </ButtonLink>
        ) : null}
        {actions}
      </div>
      {reference ? <p className="readout select-all">{t('ui_error_reference', { id: reference })}</p> : null}
    </div>
  );
}
