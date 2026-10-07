/**
 * «Nothing found» state of the search pages: what happened, how to widen the search (a clear-all
 * button; the active filters stay removable in the chip row above), links to the categories and a
 * few popular items. Plain text and links, no illustration. Server-rendered, never hydrated.
 */
import type { ModCardDTO } from '@sotf/contracts/catalog';
import { type Locale, localizePath } from '@sotf/i18n';
import { buttonClasses } from '@sotf/ui/button';
import { type DomainI18n, DomainI18nProvider, ModCard } from '@sotf/ui/domain';

export interface NoResultsProps {
  title: string;
  text: string;
  /** Extra line under the text (spelling tips). */
  tip?: string | undefined;
  clear?: { label: string; href: string } | null;
  browse?: { heading: string; links: readonly { label: string; href: string }[] } | null;
  popular?: { heading: string; items: readonly ModCardDTO[] } | null;
  locale: Locale;
  i18n: DomainI18n;
}

export default function NoResults({ title, text, tip, clear, browse, popular, locale, i18n }: NoResultsProps) {
  return (
    <div className="flex flex-col gap-8 py-4 lg:py-8">
      <div className="flex max-w-prose flex-col items-start gap-3">
        <h2 className="text-xl font-bold text-balance text-fg lg:text-2xl">{title}</h2>
        <p className="text-base text-pretty text-fg-muted">{text}</p>
        {tip ? <p className="text-sm text-pretty text-fg-subtle">{tip}</p> : null}
        {clear ? (
          <a
            href={clear.href}
            rel="nofollow"
            className={`${buttonClasses({ variant: 'primary', size: 'md' })} mt-1 max-sm:w-full`}
          >
            {clear.label}
          </a>
        ) : null}
      </div>

      {browse && browse.links.length > 0 ? (
        <section className="flex flex-col gap-3" aria-label={browse.heading}>
          <h3 className="text-sm font-semibold text-fg">{browse.heading}</h3>
          <ul className="flex flex-wrap gap-2">
            {browse.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex h-9 items-center rounded-full border border-border-strong px-3.5 text-sm text-fg transition-colors hover:bg-fg/6 active:bg-fg/8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {popular && popular.items.length > 0 ? (
        <section className="flex flex-col gap-3" aria-label={popular.heading}>
          <h3 className="text-sm font-semibold text-fg">{popular.heading}</h3>
          <DomainI18nProvider value={i18n}>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {popular.items.map((mod) => (
                <li key={mod.id} className="min-w-0">
                  <ModCard
                    mod={{ ...mod, canonicalPath: localizePath(mod.canonicalPath, locale) }}
                    variant="grid"
                    narrow="tile"
                    headingLevel={4}
                    className="h-full"
                  />
                </li>
              ))}
            </ul>
          </DomainI18nProvider>
        </section>
      ) : null}
    </div>
  );
}
