/**
 * `TrustedMark`: the small «Trusted» tag of the old site, shown next to an author name.
 */
import { cn } from '../cn.ts';
import { useDomainI18n } from './i18n.ts';

export interface TrustedMarkProps {
  /** Kept for callers that used to choose between an icon and a label: both show the word now. */
  withLabel?: boolean;
  /** Ignored (the badge scales with the surrounding text); kept so existing callers still type-check. */
  size?: number;
  className?: string;
}

/** The old site's «Trusted» badge: a small red-tinted tag with the word, next to an author name. */
export function TrustedMark({ className }: TrustedMarkProps) {
  const { t } = useDomainI18n();
  const label = t('ui_domain_trusted');
  return (
    <span
      title={t('ui_domain_trusted_creator')}
      className={cn(
        'inline-flex h-[1.125rem] shrink-0 items-center rounded-sm border border-primary/40 bg-primary/10 px-1.5 text-2xs font-semibold leading-none text-link',
        className,
      )}
    >
      {label}
    </span>
  );
}
