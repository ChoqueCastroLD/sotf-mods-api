/**
 * Pieces shared by the backpack and the download history: public links in the console locale,
 * the mod thumbnail, dates in the browser time zone and the compatibility line.
 */

import type { ModCardDTO } from '@sotf/contracts/catalog';
import type { CompatSummaryDTO } from '@sotf/contracts/compat';
import { formatDate, localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { CompatBadge, categoryAccent, generativeCoverUri } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { CircleAlert } from 'lucide-react';
import { browserTimeZone } from '../../lib/i18n.ts';
import { activeLocale } from '../../lib/messages.ts';

/** A public site path in the console language (`/mods/a/b` → `/es/mods/a/b`). */
export function publicHref(path: string): string {
  return localizePath(path, activeLocale());
}

/** Calendar date in the console locale and the browser's time zone. */
export function localDate(iso: string): string {
  try {
    return formatDate(activeLocale(), iso, 'medium', { timeZone: browserTimeZone() });
  } catch {
    return iso.slice(0, 10);
  }
}

export function ModThumb({ mod, className }: { mod: ModCardDTO; className?: string }) {
  const src = mod.thumbnail?.url ?? generativeCoverUri(mod.slug, mod.name, categoryAccent(mod.category?.slug));
  return (
    <span aria-hidden="true" className={cn('block shrink-0 overflow-hidden rounded-md bg-raised', className)}>
      <img
        src={src}
        alt=""
        width={96}
        height={54}
        loading="lazy"
        decoding="async"
        className={cn('size-full object-cover', mod.nsfw && 'blur-md')}
      />
    </span>
  );
}

/** Compatibility of the latest version on the current build, with «Broken on the current build». */
export function CompatLine({ compat }: { compat: CompatSummaryDTO }) {
  const brokenNow = compat.status === 'broken' && compat.gameBuild?.isCurrent === true;
  return (
    <span className="flex flex-wrap items-center gap-2">
      <CompatBadge status={compat.status} build={compat.gameBuild?.label ?? null} size="sm" />
      {brokenNow ? (
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-danger">
          <Icon icon={CircleAlert} size={14} />
          {m.me_broken_on_current({ build: compat.gameBuild?.label ?? '' })}
        </span>
      ) : null}
    </span>
  );
}

/** Whether a mod is reported broken on the current game build. */
export function isBrokenNow(compat: CompatSummaryDTO): boolean {
  return compat.status === 'broken' && compat.gameBuild?.isCurrent === true;
}
