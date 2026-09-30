/**
 * Empty and error states of the public kit pages (PLAN §1.2 «estados completos»), rendered on the
 * server as one React tree each (not hydrated): brand microcopy, what happened and what to do.
 */
import { buttonClasses } from '@sotf/ui/button';
import { EmptyState } from '@sotf/ui/empty-state';
import { ErrorState } from '@sotf/ui/error-state';
import { Icon } from '@sotf/ui/icons';
import { Layers } from 'lucide-react';

export interface KitsEmptyProps {
  title: string;
  text: string;
  action?: { label: string; href: string; nofollow?: boolean } | null;
  secondary?: { label: string; href: string } | null;
  headingLevel?: 2 | 3;
}

export function KitsEmpty({ title, text, action, secondary, headingLevel = 2 }: KitsEmptyProps) {
  return (
    <EmptyState
      icon={<Icon icon={Layers} size={32} />}
      title={title}
      description={text}
      headingLevel={headingLevel}
      action={
        action || secondary ? (
          <div className="flex flex-wrap justify-center gap-2">
            {action ? (
              <a
                href={action.href}
                rel={action.nofollow ? 'nofollow' : undefined}
                className={buttonClasses({ variant: 'primary' })}
              >
                {action.label}
              </a>
            ) : null}
            {secondary ? (
              <a href={secondary.href} className={buttonClasses({ variant: 'secondary' })}>
                {secondary.label}
              </a>
            ) : null}
          </div>
        ) : undefined
      }
    />
  );
}

export interface KitsErrorProps {
  title: string;
  text: string;
  retryHref: string;
  reference?: string | undefined;
}

/** The API did not answer: what happened, a retry link (works without JavaScript) and the ref. */
export function KitsError({ title, text, retryHref, reference }: KitsErrorProps) {
  return <ErrorState title={title} description={text} retryHref={retryHref} {...(reference ? { reference } : {})} />;
}
