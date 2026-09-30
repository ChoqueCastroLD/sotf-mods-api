import { withLocale } from '@sotf/i18n/server';
import { AdSlot } from '@sotf/ui/domain';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { configureDomainMessages, domainI18nFor, domainTranslate } from './domain-i18n.ts';

describe('app-wide ui-domain messages (WP-25, WP-62, WP-94)', () => {
  it('translates with the compiled catalogue and an explicit locale', () => {
    expect(domainTranslate('ui_domain_ad_label', undefined, 'es')).toBe('Publicidad');
    expect(domainTranslate('ui_domain_ad_label', undefined, 'en')).toBe('Advertisement');
  });

  it('follows the request locale in server renders', async () => {
    configureDomainMessages();
    const html = await withLocale('es', async () =>
      renderToStaticMarkup(createElement(AdSlot, { format: 'inline', client: 'ca-pub-1234567890', slot: '123456' })),
    );
    expect(html).toContain('aria-label="Publicidad"');
    const english = await withLocale('en', async () =>
      renderToStaticMarkup(createElement(AdSlot, { format: 'inline', client: 'ca-pub-1234567890', slot: '123456' })),
    );
    expect(english).toContain('aria-label="Advertisement"');
  });

  it('builds provider values with UTC dates and overridable taxonomy', () => {
    const value = domainI18nFor('pt-BR', (_key, fallback) => `${fallback}!`);
    expect(value.locale).toBe('pt-BR');
    expect(value.timeZone).toBe('UTC');
    expect(value.taxonomy?.('taxonomy_x', 'Tools')).toBe('Tools!');
  });
});
