/**
 * Text of the palette: the `cmdk` namespace (`packages/i18n/messages/cmdk/<locale>.json`, English
 * source, 13 locales) is loaded **for the page locale only**, as one ≈ 1 KB br JSON chunk fetched in
 * parallel with the palette chunk, together with the `shell` namespace of the same locale (a few
 * KB: the plain labels of the palette live there). Compiled Paraglide messages carry all 13 locales in every
 * message, and the whole `common/<locale>.json` is ≈ 3.7 KB br: either would push the island over
 * its 25 KB br budget (PLAN §8.2). That is why the dozen shared terms the palette shows (Mods,
 * Builds, theme names, «Try again»…) are mirrored as `cmdk_term_*`, `cmdk_theme_*`… keys with the
 * same text as `common`. The ICU subset of `messages/README.md` is interpreted by `formatIcu` of
 * `@sotf/ui/domain`.
 */
import type { Locale } from '@sotf/i18n';
import { toIntlLocale } from '@sotf/i18n';
import { formatIcu, type IcuParams } from '@sotf/ui/domain';
import type EN from '../../../../../packages/i18n/messages/cmdk/en.json';
import type SHELL_EN from '../../../../../packages/i18n/messages/shell/en.json';

/** Keys of the `cmdk` namespace and the palette's plain-wording keys of the `shell` namespace. */
export type MessageKey = keyof typeof EN | keyof typeof SHELL_EN;

type Catalog = Readonly<Partial<Record<string, string>>>;
type Loader = () => Promise<Catalog>;

const CATALOGS = import.meta.glob<Catalog>('../../../../../packages/i18n/messages/cmdk/*.json', {
  import: 'default',
});
const SHELL_CATALOGS = import.meta.glob<Catalog>('../../../../../packages/i18n/messages/shell/*.json', {
  import: 'default',
});

let messages: Catalog = {};
let lang = 'en';
let loaded: Promise<void> | null = null;

function loaderFor(locale: Locale): Loader {
  const find = (code: string) => Object.entries(CATALOGS).find(([path]) => path.endsWith(`/cmdk/${code}.json`))?.[1];
  return find(locale) ?? find('en') ?? (() => Promise.resolve({}));
}

function shellLoaderFor(locale: Locale): Loader {
  const find = (code: string) =>
    Object.entries(SHELL_CATALOGS).find(([path]) => path.endsWith(`/shell/${code}.json`))?.[1];
  return find(locale) ?? find('en') ?? (() => Promise.resolve({}));
}

/** Loads the catalogues of `locale`. Idempotent per page; a failed load can be retried. */
export function loadMessages(locale: Locale): Promise<void> {
  if (!loaded) {
    loaded = Promise.all([loaderFor(locale)(), shellLoaderFor(locale)()])
      .then(([catalog, shell]) => {
        messages = { ...catalog, ...shell };
        lang = toIntlLocale(locale);
      })
      .catch((error: unknown) => {
        loaded = null;
        throw error;
      });
  }
  return loaded;
}

/** A message of the `cmdk` (or palette-related `shell`) namespace in the page locale. */
export function t(key: MessageKey, params?: IcuParams): string {
  const template = messages[key];
  if (template === undefined) return key;
  return formatIcu(template, params, lang);
}
