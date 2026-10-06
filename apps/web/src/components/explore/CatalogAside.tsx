/**
 * Side blocks of the catalogue (server-rendered, never hydrated):
 *
 * - `FeaturedStrip`: the slim carousel above the list, the top mods of the week with their image
 *   (CSS scroll snap; `scripts/explore/catalog.ts` only wires the arrows).
 * - `SiteFigures`: downloads, mods published and users.
 * - `WeeklyList`: «Mods of the week», ranked by downloads in the last 7 days; #1 to #3 carry a
 *   thin accent bar; the rest of the list is behind «Show more» (a checkbox, no JavaScript).
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { formatNumber, type Locale, localizePath } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { cn } from '@sotf/ui/cn';
import { Cover, displayName } from '@sotf/ui/domain';
import { Icon } from '@sotf/ui/icons';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import type { SiteStats } from './aside.ts';

interface WithLocale {
  locale: Locale;
}

function modHref(mod: ModCardDTO, locale: Locale): string {
  return localizePath(mod.canonicalPath, locale);
}

function Avatar({ mod, size }: { mod: ModCardDTO; size: number }) {
  if (mod.userAvatarUrl) {
    return (
      <img
        src={mod.userAvatarUrl}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="shrink-0 rounded-full bg-raised object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return null;
}

// -------------------------------------------------------------------------------------------
// Carousel
// -------------------------------------------------------------------------------------------

export function FeaturedStrip({ mods, locale }: WithLocale & { mods: readonly ModCardDTO[] }) {
  if (mods.length === 0) return null;
  return (
    <section aria-label={m.landing_featured_label()} data-featured="" className="group/featured relative">
      <ul
        data-featured-track=""
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {mods.map((mod, index) => (
          <li
            key={mod.id}
            className="relative aspect-video max-h-44 w-[78%] shrink-0 snap-start overflow-hidden rounded-lg bg-raised sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]"
          >
            <Cover
              image={mod.thumbnail}
              seed={mod.slug}
              name={displayName(mod)}
              category={mod.category}
              sizes="(min-width: 64rem) 28rem, (min-width: 40rem) 50vw, 80vw"
              priority={index < 3}
              className={cn(
                'absolute inset-0 transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/slide:scale-[1.03]',
                mod.nsfw && 'scale-110 blur-lg',
              )}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
            />
            <a
              href={modHref(mod, locale)}
              className="group/slide absolute inset-0 flex flex-col justify-end gap-0.5 p-3 text-white outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
            >
              <span className="flex min-w-0 items-baseline gap-2">
                <span className="truncate text-base font-bold">{displayName(mod)}</span>
                {mod.latestVersion ? (
                  <span className="shrink-0 font-mono text-xs text-white/70">{mod.latestVersion}</span>
                ) : null}
              </span>
              <span className="flex min-w-0 items-center gap-1.5 text-xs text-white/80">
                <span className="truncate">{mod.userDisplayName}</span>
                <span aria-hidden="true">·</span>
                <span className="shrink-0 tabular-nums">
                  {m.landing_weekly_downloads({
                    count: mod.downloads7d,
                    display: formatNumber(locale, mod.downloads7d),
                  })}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        data-featured-nav="prev"
        hidden
        aria-label={m.landing_featured_prev()}
        className="absolute start-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center max-md:!hidden rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-focus"
      >
        <Icon icon={ChevronLeft} size={18} className="rtl:rotate-180" />
      </button>
      <button
        type="button"
        data-featured-nav="next"
        hidden
        aria-label={m.landing_featured_next()}
        className="absolute end-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center max-md:!hidden rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-focus"
      >
        <Icon icon={ChevronRight} size={18} className="rtl:rotate-180" />
      </button>
    </section>
  );
}

// -------------------------------------------------------------------------------------------
// Figures
// -------------------------------------------------------------------------------------------

export function SiteFigures({ stats, locale }: WithLocale & { stats: SiteStats }) {
  const items: [string, number][] = [
    [m.landing_stats_downloads(), stats.downloads],
    [m.landing_stats_mods(), stats.mods],
    [m.landing_stats_users(), stats.users],
  ];
  return (
    <section aria-label={m.landing_stats_aria()}>
      <dl className="grid grid-cols-3 divide-x divide-border rtl:divide-x-reverse">
        {items.map(([label, value]) => (
          <div key={label} className="flex min-w-0 flex-col gap-0.5 px-3 first:ps-0 last:pe-0">
            <dd className="order-2 text-xl font-bold tabular-nums text-fg">{formatNumber(locale, value)}</dd>
            <dt className="order-1 truncate text-xs text-fg-muted">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

// -------------------------------------------------------------------------------------------
// Mods of the week
// -------------------------------------------------------------------------------------------

const RANK_BAR = ['border-primary', 'border-primary/60', 'border-primary/30'] as const;

function WeeklyItem({ mod, rank, locale }: WithLocale & { mod: ModCardDTO; rank: number }) {
  const top = rank <= 3;
  return (
    <li>
      <a
        href={modHref(mod, locale)}
        className={cn(
          'group/weekly flex items-center gap-3 rounded-e-md border-s-2 py-2 pe-2 ps-2 transition-colors duration-(--dur-fast) hover:bg-fg/5 focus-visible:outline-2 focus-visible:outline-focus',
          top ? RANK_BAR[rank - 1] : 'border-transparent',
        )}
      >
        <span
          className={cn(
            'w-6 shrink-0 text-center text-sm font-bold tabular-nums',
            top ? 'text-fg' : 'font-medium text-fg-subtle',
          )}
        >
          <span className="sr-only">{m.landing_weekly_rank({ rank })}</span>
          <span aria-hidden="true">{rank}</span>
        </span>
        <span className="relative aspect-video w-20 shrink-0 overflow-hidden rounded-md bg-raised">
          <Cover
            image={mod.thumbnail}
            seed={mod.slug}
            name={displayName(mod)}
            category={mod.category}
            sizes="80px"
            className={cn(
              'transition-transform duration-(--dur-slow) ease-out motion-safe:group-hover/weekly:scale-105',
              mod.nsfw && 'scale-110 blur-md',
            )}
          />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="flex min-w-0 items-baseline gap-1.5">
            <span className="truncate text-sm font-semibold text-fg">{displayName(mod)}</span>
            {mod.latestVersion ? (
              <span className="shrink-0 font-mono text-2xs text-fg-subtle">{mod.latestVersion}</span>
            ) : null}
          </span>
          <span className="flex min-w-0 items-center gap-1.5 text-xs text-fg-muted">
            <Avatar mod={mod} size={16} />
            <span className="truncate">{mod.userDisplayName}</span>
            {mod.verifiedCreator ? (
              <span className="inline-flex h-4 shrink-0 items-center rounded-full border border-primary/40 bg-primary/12 px-1.5 text-[0.625rem] leading-none font-semibold text-fg">
                {m.explore_catalog_trusted()}
              </span>
            ) : null}
          </span>
          <span className="flex items-center gap-1 text-xs tabular-nums">
            <Icon icon={Download} size={12} className="text-fg-subtle" />
            <span className="font-semibold text-fg">{formatNumber(locale, mod.downloads7d)}</span>
            <span className="text-fg-subtle">{m.landing_weekly_this_week()}</span>
          </span>
        </span>
      </a>
    </li>
  );
}

export function WeeklyList({ mods, locale, visible }: WithLocale & { mods: readonly ModCardDTO[]; visible: number }) {
  const ranked = mods.filter((mod) => mod.downloads7d > 0);
  const first = ranked.slice(0, visible);
  const rest = ranked.slice(visible);
  return (
    <section aria-labelledby="weekly-title" className="flex flex-col gap-2">
      <h2 id="weekly-title" className="text-lg font-bold text-fg">
        {m.landing_weekly_title()}
      </h2>
      <p className="-mt-1 text-xs text-fg-muted">{m.landing_weekly_hint()}</p>
      {ranked.length === 0 ? (
        <p className="py-4 text-sm text-fg-muted">{m.landing_weekly_empty()}</p>
      ) : (
        <div className="flex flex-col">
          <ol className="flex flex-col gap-0.5">
            {first.map((mod, index) => (
              <WeeklyItem key={mod.id} mod={mod} rank={index + 1} locale={locale} />
            ))}
          </ol>
          {rest.length > 0 ? (
            <>
              <input id="weekly-more" type="checkbox" className="peer sr-only" />
              <ol start={visible + 1} className="mt-0.5 hidden flex-col gap-0.5 peer-checked:flex">
                {rest.map((mod, index) => (
                  <WeeklyItem key={mod.id} mod={mod} rank={visible + index + 1} locale={locale} />
                ))}
              </ol>
              <label
                htmlFor="weekly-more"
                className="mt-3 inline-flex h-9 cursor-pointer items-center justify-center rounded-md border border-border-strong text-sm font-medium text-fg transition-colors hover:bg-fg/6 peer-checked:hidden peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus"
              >
                {m.landing_weekly_more()}
              </label>
              <label
                htmlFor="weekly-more"
                className="mt-3 hidden h-9 cursor-pointer items-center justify-center rounded-md border border-border-strong text-sm font-medium text-fg transition-colors hover:bg-fg/6 peer-checked:inline-flex peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus"
              >
                {m.landing_weekly_less()}
              </label>
            </>
          ) : null}
        </div>
      )}
    </section>
  );
}
