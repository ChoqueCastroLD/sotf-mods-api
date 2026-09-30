/**
 * The `ui-domain` catalogue (texts of the `@sotf/ui/domain` components: compatibility badges, kit
 * and mod cards, chart figures, stat tiles, badge stamps…) for the console, loaded **per locale**
 * like the shell messages (`./messages.ts`): one small lazy chunk of the active locale instead of
 * the Paraglide messages with their 13 translations.
 *
 * The shell starts the download right after the locale is activated (`preloadDomainCatalog`), so
 * the screens that render domain components (`components/DomainI18nBridge.tsx`) rarely wait.
 */
import type { Locale } from '@sotf/i18n';

export type DomainCatalog = Readonly<Record<string, string>>;
type CatalogModule = { default: DomainCatalog };

const LOADERS = import.meta.glob<CatalogModule>('../../../../../packages/i18n/messages/ui-domain/*.json');

const cache = new Map<Locale, Promise<DomainCatalog | null>>();

/**
 * The catalogue of `locale`, or `null` if it is missing or its chunk failed to load (the
 * components then fall back to their English source). The promise is cached and stable per
 * locale, so React's `use()` can read it.
 */
export function loadDomainCatalog(locale: Locale): Promise<DomainCatalog | null> {
  let pending = cache.get(locale);
  if (!pending) {
    const suffix = `/ui-domain/${locale}.json`;
    const load = Object.entries(LOADERS).find(([path]) => path.endsWith(suffix))?.[1];
    pending = load
      ? load().then(
          (module) => module.default,
          (error: unknown) => {
            // Cached as «missing» on purpose: retrying on every render would suspend in a loop.
            console.warn(`[console] ui-domain messages for ${locale} could not be loaded`, error);
            return null;
          },
        )
      : Promise.resolve(null);
    cache.set(locale, pending);
  }
  return pending;
}

/** Starts loading `locale`'s catalogue without waiting for it. */
export function preloadDomainCatalog(locale: Locale): void {
  void loadDomainCatalog(locale);
}
