/**
 * Starter Kit of the install guide (T0-33 «Kit de inicio»): the most popular staff-picked Kit,
 * rendered on the server with the shared `KitCard` (no hydration). Numbers and dates follow the
 * page language; card texts come from the `ui_domain_*` catalogue when it is compiled into the
 * site messages, English otherwise (same glue as the other pages, see `builds/i18n.ts`).
 */
import type { KitCardDTO } from '@sotf/contracts/kits';
import { m } from '@sotf/i18n/messages';
import {
  createDomainTranslate,
  type DomainI18n,
  DomainI18nProvider,
  type DomainMessageKey,
  KitCard,
} from '@sotf/ui/domain';

type MessageFn = (inputs?: Record<string, unknown>) => string;
const messages = m as unknown as Readonly<Record<string, MessageFn | undefined>>;
const english = createDomainTranslate({}, 'en');

function domainI18n(lang: string): DomainI18n {
  return {
    locale: lang,
    timeZone: 'UTC',
    t: (key: DomainMessageKey, params) => {
      const message = messages[key];
      return message ? message((params ?? {}) as Record<string, unknown>) : english(key, params);
    },
    taxonomy: (nameKey: string, fallback: string) => {
      const message = messages[nameKey];
      return message ? message({}) : fallback;
    },
  };
}

export interface StarterKitProps {
  kit: KitCardDTO;
  /** BCP-47 page language. */
  lang: string;
  currentBuild: string | null;
}

export default function StarterKit({ kit, lang, currentBuild }: StarterKitProps) {
  return (
    <DomainI18nProvider value={domainI18n(lang)}>
      <KitCard kit={kit} currentBuild={currentBuild} headingLevel={3} />
    </DomainI18nProvider>
  );
}
