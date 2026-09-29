/**
 * Helpers of the domain demos: the frame's locale drives `Intl` formatting (the copy stays
 * English until the `ui-domain` namespace is translated in @sotf/i18n), and small layout
 * wrappers. Demo copy is English on purpose (developer tooling).
 */
import type { ReactNode } from 'react';
import { DomainI18nProvider, englishDomainI18n } from '../../src/domain/index.ts';

const BCP47: Record<string, string> = { pt: 'pt-BR', zh: 'zh-Hans' };

export function DemoI18n({ children }: { children: ReactNode }) {
  const locale = new URLSearchParams(location.search).get('locale') ?? 'en';
  return (
    <DomainI18nProvider value={{ ...englishDomainI18n, locale: BCP47[locale] ?? locale }}>
      {children}
    </DomainI18nProvider>
  );
}

export function DemoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="readout">{label}</p>
      {children}
    </div>
  );
}
