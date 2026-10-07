/**
 * Empty and error states of the listing pages (research/03 §6.2 «Estados»), as one React tree
 * each so their icons and actions render inside the primitive (server-rendered, not hydrated).
 */
import { buttonClasses } from '@sotf/ui/button';
import { ErrorState } from '@sotf/ui/error-state';
import { Icon } from '@sotf/ui/icons';
import { WifiOff, X } from 'lucide-react';
import { DiscoveryEmpty } from './DiscoveryEmpty.tsx';

export interface RemovableFilter {
  key: string;
  label: string;
  removeHref: string;
}

export interface ListingEmptyProps {
  title: string;
  text: string;
  /** Filters that can be removed («Try removing: …»). */
  filters?: readonly RemovableFilter[];
  tryRemovingLabel?: string;
  removeLabel?: (label: string) => string;
  /** Primary action (clear all, back to page 1, browse all). */
  action?: { label: string; href: string; nofollow?: boolean } | null;
  headingLevel?: 2 | 3;
}

export function ListingEmpty({
  title,
  text,
  filters = [],
  tryRemovingLabel,
  removeLabel,
  action,
  headingLevel = 3,
}: ListingEmptyProps) {
  return (
    <DiscoveryEmpty title={title} text={text} headingLevel={headingLevel} art={false}>
      {filters.length > 0 ? (
        <div className="flex flex-col items-center gap-3">
          {tryRemovingLabel ? <p className="text-sm text-fg-muted">{tryRemovingLabel}</p> : null}
          <ul className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <li key={filter.key}>
                <a
                  href={filter.removeHref}
                  rel="nofollow"
                  className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border-strong px-3.5 text-sm text-fg hover:bg-fg/6 active:bg-fg/8"
                >
                  <Icon icon={X} size={14} />
                  {removeLabel ? removeLabel(filter.label) : filter.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {action ? (
        <a
          href={action.href}
          rel={action.nofollow ? 'nofollow' : undefined}
          className={`${buttonClasses({ variant: filters.length > 0 ? 'primary' : 'secondary', size: 'md' })} max-sm:h-12 max-sm:w-full`}
        >
          {action.label}
        </a>
      ) : null}
    </DiscoveryEmpty>
  );
}

export interface ListingErrorProps {
  title: string;
  text: string;
  retryHref: string;
  reference?: string | undefined;
  headingLevel?: 2 | 3;
}

export function ListingError({ title, text, retryHref, reference, headingLevel = 3 }: ListingErrorProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-fg-subtle" aria-hidden="true">
        <Icon icon={WifiOff} size={28} />
      </span>
      <ErrorState
        title={title}
        description={text}
        retryHref={retryHref}
        {...(reference ? { reference } : {})}
        headingLevel={headingLevel}
      />
    </div>
  );
}
