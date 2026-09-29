/**
 * Stepper (PLAN §3.9): «manual tabs» for wizards and the install guide. An ordered list; the
 * current step has `aria-current="step"`, completed steps show a check (never colour alone).
 * Steps with `href` are navigable (completed steps of a wizard, sections of a guide).
 */
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from './cn.ts';
import { Icon } from './icons.tsx';
import { useUiTranslate } from './labels.ts';

export interface StepItem {
  label: ReactNode;
  description?: ReactNode;
  href?: string;
}

export interface StepperProps {
  steps: readonly StepItem[];
  /** Index (0-based) of the current step. Steps before it are complete. */
  current: number;
  /** Accessible name of the list. Default: the localized «Progress». */
  label?: string;
  className?: string;
}

export function Stepper({ steps, current, label, className }: StepperProps) {
  const t = useUiTranslate();
  const active = steps[current];
  return (
    <nav aria-label={label ?? t('ui_stepper')} className={className}>
      <p className="mb-2 text-sm font-medium text-fg md:hidden">
        <span className="readout me-2">{t('ui_step_of', { current: current + 1, total: steps.length })}</span>
        {active?.label}
      </p>
      <ol className="flex gap-1 max-md:[&>li]:flex-1">
        {steps.map((step, index) => {
          const state = index < current ? 'complete' : index === current ? 'current' : 'upcoming';
          const body = (
            <>
              <span
                className={cn(
                  'flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold tabular-nums',
                  state === 'complete' && 'border-success bg-success text-fg-inverse',
                  state === 'current' && 'border-primary bg-primary text-primary-fg',
                  state === 'upcoming' && 'border-border-strong text-fg-muted',
                )}
                aria-hidden="true"
              >
                {state === 'complete' ? <Icon icon={Check} size={14} strokeWidth={3} /> : index + 1}
              </span>
              <span className="flex min-w-0 flex-col max-md:sr-only">
                <span className="truncate text-sm font-medium">{step.label}</span>
                {step.description ? <span className="truncate text-xs text-fg-muted">{step.description}</span> : null}
              </span>
              {state === 'complete' ? <span className="sr-only">({t('ui_step_complete')})</span> : null}
            </>
          );
          const classes = cn(
            'flex h-full items-center gap-2.5 rounded-t-md border-b-2 px-3 py-2 text-fg-muted',
            'max-md:justify-center max-md:px-0',
            state === 'current' && 'border-primary bg-raised text-fg',
            state === 'complete' && 'border-success text-fg',
            state === 'upcoming' && 'border-border',
          );
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: steps are positional
            <li key={index} className="min-w-0 md:flex-1">
              {step.href && state !== 'current' ? (
                <a href={step.href} className={cn(classes, 'hover:bg-fg/5')}>
                  {body}
                </a>
              ) : (
                <div className={classes} aria-current={state === 'current' ? 'step' : undefined}>
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
