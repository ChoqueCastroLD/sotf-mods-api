/**
 * Small pieces shared by the kit screens: visibility labels and badge, the mini knolling mat and
 * the localized problem text of a failed kit call.
 */

import { isApiError } from '@sotf/contracts/client';
import { toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';
import { cn } from '@sotf/ui/cn';
import { Icon } from '@sotf/ui/icons';
import { EyeOff, Globe, Lock } from 'lucide-react';
import { activeLocale, problemText } from '../../lib/messages.ts';
import type { KitCardDTO, KitVisibility } from './api.ts';

export function visibilityLabel(visibility: KitVisibility): string {
  switch (visibility) {
    case 'public':
      return m.kits_visibility_public();
    case 'unlisted':
      return m.kits_visibility_unlisted();
    default:
      return m.kits_visibility_private();
  }
}

export function visibilityHint(visibility: KitVisibility): string {
  switch (visibility) {
    case 'public':
      return m.kits_visibility_public_hint();
    case 'unlisted':
      return m.kits_visibility_unlisted_hint();
    default:
      return m.kits_visibility_private_hint();
  }
}

export const VISIBILITY_ICONS = { public: Globe, unlisted: EyeOff, private: Lock } as const;

export function VisibilityBadge({ visibility }: { visibility: KitVisibility }) {
  return (
    <Badge variant="outline-mono" size="sm" icon={<Icon icon={VISIBILITY_ICONS[visibility]} size={12} />}>
      {visibilityLabel(visibility)}
    </Badge>
  );
}

const KNOLL_ROTATION = [-2, 1.5, -1, 2, -1.5, 1] as const;

/** Mini knolling mat of a kit card (decorative). */
export function MiniKnolling({
  kit,
  className,
}: {
  kit: Pick<KitCardDTO, 'previewThumbnails' | 'cover'>;
  className?: string;
}) {
  if (kit.cover) {
    return (
      <span aria-hidden="true" className={cn('block overflow-hidden rounded-md bg-raised', className)}>
        <img src={kit.cover.url} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
      </span>
    );
  }
  const slots = kit.previewThumbnails.slice(0, 6);
  return (
    <span
      aria-hidden="true"
      className={cn(
        'texture-blueprint grid grid-cols-3 grid-rows-2 place-items-center gap-1 rounded-md border border-dashed border-blueprint/50 bg-sunken p-1.5',
        className,
      )}
    >
      {Array.from({ length: 6 }, (_, index) => {
        const src = slots[index];
        return (
          <span
            key={index}
            style={{ rotate: `${KNOLL_ROTATION[index]}deg` }}
            className={cn(
              'block aspect-square w-full overflow-hidden rounded-xs',
              src ? 'bg-raised shadow-xs' : 'border border-dashed border-blueprint/40',
            )}
          >
            {src ? <img src={src} alt="" loading="lazy" decoding="async" className="size-full object-cover" /> : null}
          </span>
        );
      })}
    </span>
  );
}

/** Title of a failed call, for toasts («Couldn't save: …»). */
export function failureDetail(error: unknown): string {
  if (isApiError(error)) {
    if (error.code === 'CONFLICT') return m.kits_error_slug_taken();
    if (error.code === 'EMAIL_NOT_VERIFIED') return m.kits_error_email();
    if (error.code === 'RATE_LIMITED') return m.kits_error_rate();
    if (error.code === 'VALIDATION_FAILED') return m.kits_error_validation();
    return problemText(error.code).detail;
  }
  return problemText(null).detail;
}

/** Calendar date in the console locale and the browser's time zone: «Sep 29, 2026». */
export function shortDate(value: string): string {
  try {
    return new Intl.DateTimeFormat(toHtmlLang(activeLocale()), { dateStyle: 'medium' }).format(new Date(value));
  } catch {
    return value.slice(0, 10);
  }
}
