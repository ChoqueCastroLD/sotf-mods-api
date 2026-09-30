/**
 * Helpers of the domain demos: the frame's locale (`?locale=`) drives the `ui-domain` copy (the
 * catalogues of @sotf/i18n, `packages/i18n/messages/ui-domain/<locale>.json`), `Intl` formatting
 * and the localised profile links, plus small layout wrappers. Demo copy is English on purpose
 * (developer tooling).
 */
import { type ReactNode, useMemo } from 'react';
import {
  createDomainTranslate,
  type DomainI18n,
  DomainI18nProvider,
  type DomainMessageKey,
} from '../../src/domain/index.ts';

type DomainCatalog = Partial<Record<DomainMessageKey, string>>;

const catalogs = import.meta.glob<DomainCatalog>('../../../i18n/messages/ui-domain/*.json', {
  eager: true,
  import: 'default',
});

const BCP47: Record<string, string> = { pt: 'pt-BR', zh: 'zh-Hans' };

/** The domain i18n of a playground locale (URL code of @sotf/i18n). */
export function demoDomainI18n(locale: string): DomainI18n {
  const tag = BCP47[locale] ?? locale;
  const catalog = catalogs[`../../../i18n/messages/ui-domain/${locale}.json`] ?? {};
  return {
    locale: tag,
    t: createDomainTranslate(catalog, tag),
    href: (path) => (locale === 'en' ? path : `/${locale}${path}`),
  };
}

export function DemoI18n({ children }: { children: ReactNode }) {
  const locale = new URLSearchParams(location.search).get('locale') ?? 'en';
  const value = useMemo(() => demoDomainI18n(locale), [locale]);
  return <DomainI18nProvider value={value}>{children}</DomainI18nProvider>;
}

export function DemoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="readout">{label}</p>
      {children}
    </div>
  );
}
