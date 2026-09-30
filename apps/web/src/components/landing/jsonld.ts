/**
 * `FAQPage` of the landing (PLAN §4.5): the same questions and answers the page shows. Together
 * with `WebSite` + `SearchAction` and `Organization` (`lib/seo/jsonld.ts`) it forms the landing
 * graph.
 */
import { type Locale, toHreflang } from '@sotf/i18n';
import type { FAQPage, WithContext } from 'schema-dts';
import type { FaqItem } from '../../content/faq/index.ts';

export function faqPageJsonLd(items: readonly FaqItem[], pageUrl: string, locale: Locale): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: toHreflang(locale),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
