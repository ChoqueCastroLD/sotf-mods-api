import { m } from '@sotf/i18n/messages';
import { createElement as h } from 'react';
import { describe, expect, it } from 'vitest';
import { EmailLayout, emailStyles, renderEmail, siteLink } from '../index.ts';

const SITE = 'https://sotf-mods.com';

function email(locale: 'en' | 'es' | 'zh', footer = {}) {
  return h(
    EmailLayout,
    { locale, siteUrl: `${SITE}/`, preview: 'Your code is 123456', footer },
    h('p', { style: emailStyles.text }, 'Body text'),
  );
}

describe('EmailLayout', () => {
  it('renders HTML and plain text with the logo header and the localized footer', async () => {
    const { html, text } = await renderEmail(email('en'));
    expect(html).toMatch(/^<!DOCTYPE html/);
    expect(html).toContain('lang="en"');
    expect(html).toContain('Your code is 123456');
    expect(html).toContain(`${SITE}/brand/logo-sm.png`);
    expect(html).toContain('Body text');
    expect(html).toContain(m.common_tagline({}, { locale: 'en' }));
    expect(html).toContain(`href="${SITE}/settings/notifications"`);
    expect(html).toContain(`href="${SITE}/privacy"`);
    expect(html).not.toContain('<script');
    expect(html).not.toContain('Big Shoulders');
    expect(html).not.toContain('text-transform');
    expect(text).toContain('Body text');
    expect(text).toContain(m.common_tagline({}, { locale: 'en' }));
  });

  it('uses the recipient locale for texts, lang and links', async () => {
    const { html } = await renderEmail(email('es'));
    expect(html).toContain('lang="es"');
    expect(html).toContain(m.common_tagline({}, { locale: 'es' }));
    expect(html).toContain(`href="${SITE}/es/privacy"`);
    const zh = await renderEmail(email('zh'));
    expect(zh.html).toContain('lang="zh-Hans"');
  });

  it('adds the reason and the unsubscribe link when given', async () => {
    const { html } = await renderEmail(
      email('en', {
        reason: 'You follow Axel’s Mod Menu.',
        unsubscribeUrl: `${SITE}/unsubscribe?t=abc`,
        unsubscribeLabel: 'Unsubscribe',
      }),
    );
    expect(html).toContain('You follow Axel’s Mod Menu.');
    expect(html).toContain(`href="${SITE}/unsubscribe?t=abc"`);
    expect(html).toContain('Unsubscribe');
  });

  it('requires a label with an unsubscribe URL', async () => {
    await expect(renderEmail(email('en', { unsubscribeUrl: `${SITE}/u` }))).rejects.toThrow(/unsubscribeLabel/);
  });

  it('builds localized site links', () => {
    expect(siteLink(SITE, 'en', '/')).toBe(`${SITE}/`);
    expect(siteLink(SITE, 'de', '/')).toBe(`${SITE}/de`);
    expect(siteLink(`${SITE}/`, 'fr', '/mods')).toBe(`${SITE}/fr/mods`);
  });
});
