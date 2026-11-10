import { withLocale } from '@sotf/i18n/server';
import { TrustedMark } from '@sotf/ui/domain';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { configureDomainMessages, domainI18nFor, domainTranslate } from './domain-i18n.ts';

describe('app-wide ui-domain messages (WP-25, WP-62, WP-94)', () => {
  it('translates with the compiled catalogue and an explicit locale', () => {
    expect(domainTranslate('ui_domain_loader_other', undefined, 'es')).toBe('Otro cargador');
    expect(domainTranslate('ui_domain_loader_other', undefined, 'en')).toBe('Other loader');
  });

  it('follows the request locale in server renders', async () => {
    configureDomainMessages();
    const html = await withLocale('es', async () =>
      renderToStaticMarkup(createElement(TrustedMark, { withLabel: true })),
    );
    expect(html).toContain('De confianza');
    const english = await withLocale('en', async () =>
      renderToStaticMarkup(createElement(TrustedMark, { withLabel: true })),
    );
    expect(english).toContain('Trusted');
  });

  it('builds provider values with UTC dates and overridable taxonomy', () => {
    const value = domainI18nFor('pt-BR', (_key, fallback) => `${fallback}!`);
    expect(value.locale).toBe('pt-BR');
    expect(value.timeZone).toBe('UTC');
    expect(value.taxonomy?.('taxonomy_x', 'Tools')).toBe('Tools!');
  });
});
