import { LOCALES } from '@sotf/i18n';
import { describe, expect, it } from 'vitest';
import { breadcrumbJsonLd, organizationJsonLd, serializeJsonLd, websiteJsonLd } from './jsonld.ts';
import { buildSeoHead, truncate } from './meta.ts';

const base = {
  title: 'Axel’s Mod Menu',
  titleTemplate: (title: string) => `${title} | SOTF Mods`,
  description: 'A mod menu.',
  siteUrl: 'https://sotf-mods.com/',
  path: '/mods/imaxel/axels-mod-menu?page=2',
} as const;

describe('buildSeoHead (PLAN §4.5)', () => {
  it('renders the hreflang cluster: 13 locales + x-default, absolute URLs', () => {
    const head = buildSeoHead({ ...base, locale: 'es' });
    const alternates = head.links.filter((link) => link.rel === 'alternate');
    expect(alternates).toHaveLength(LOCALES.length + 1);
    expect(alternates.map((link) => link.hreflang)).toEqual([
      'en',
      'es',
      'de',
      'fr',
      'it',
      'nl',
      'pl',
      'pt-BR',
      'ru',
      'sv',
      'tr',
      'zh-Hans',
      'ja',
      'x-default',
    ]);
    expect(alternates.find((link) => link.hreflang === 'pt-BR')?.href).toBe(
      'https://sotf-mods.com/pt/mods/imaxel/axels-mod-menu?page=2',
    );
    expect(alternates.at(-1)?.href).toBe('https://sotf-mods.com/mods/imaxel/axels-mod-menu?page=2');
  });

  it('self-referencing canonical per locale (paginated pages keep their page)', () => {
    const head = buildSeoHead({ ...base, locale: 'de' });
    expect(head.links[0]).toEqual({
      rel: 'canonical',
      href: 'https://sotf-mods.com/de/mods/imaxel/axels-mod-menu?page=2',
    });
    expect(head.lang).toBe('de');
    expect(buildSeoHead({ ...base, locale: 'zh' }).lang).toBe('zh-Hans');
  });

  it('untranslated pages: canonical to English, no cluster', () => {
    const head = buildSeoHead({ ...base, locale: 'fr', alternates: false, canonicalLocale: 'en' });
    expect(head.links).toEqual([{ rel: 'canonical', href: 'https://sotf-mods.com/mods/imaxel/axels-mod-menu?page=2' }]);
    expect(head.metas.some((meta) => meta.property === 'og:locale:alternate')).toBe(false);
  });

  it('title template, truncation, robots, theme-color, OG and Twitter', () => {
    const head = buildSeoHead({ ...base, locale: 'en', noindex: true, og: { imageAlt: 'Menu' } });
    expect(head.title).toBe('Axel’s Mod Menu | SOTF Mods');
    const meta = (key: string) =>
      head.metas.filter((tag) => tag.name === key || tag.property === key).map((tag) => tag.content);
    expect(meta('robots')).toEqual(['noindex, follow']);
    expect(meta('theme-color')).toEqual(['#0E1114', '#F6F7F8']);
    expect(meta('og:image')).toEqual(['https://sotf-mods.com/brand/og-default.png']);
    expect(meta('og:image:alt')).toEqual(['Menu']);
    expect(meta('og:locale')).toEqual(['en_US']);
    expect(meta('og:locale:alternate')).toHaveLength(12);
    expect(meta('twitter:card')).toEqual(['summary_large_image']);
    expect(head.metas.some((tag) => tag.name === 'keywords')).toBe(false);
  });

  it('OG image sizes: the default card states 1200 x 630, a custom image only its own size', () => {
    const meta = (head: ReturnType<typeof buildSeoHead>, key: string) =>
      head.metas.filter((tag) => tag.property === key).map((tag) => tag.content);
    const fallback = buildSeoHead({ ...base, locale: 'en', og: { imageAlt: 'x' } });
    expect(meta(fallback, 'og:image:width')).toEqual(['1200']);
    const custom = buildSeoHead({ ...base, locale: 'en', og: { imageAlt: 'x', image: 'https://r2.test/a.jpg' } });
    expect(meta(custom, 'og:image')).toEqual(['https://r2.test/a.jpg']);
    expect(meta(custom, 'og:image:width')).toEqual([]);
    const sized = buildSeoHead({
      ...base,
      locale: 'en',
      og: { imageAlt: 'x', image: 'https://r2.test/a.jpg', imageWidth: 1280, imageHeight: 720 },
    });
    expect(meta(sized, 'og:image:height')).toEqual(['720']);
  });

  it('NSFW pages: rating adult and no explicit OG image', () => {
    const head = buildSeoHead({ ...base, locale: 'en', adult: true, og: { image: '/x.png', imageAlt: 'x' } });
    expect(head.metas).toContainEqual({ name: 'rating', content: 'adult' });
    expect(head.metas.some((tag) => tag.property === 'og:image')).toBe(false);
  });

  it('error pages can omit the canonical', () => {
    expect(buildSeoHead({ ...base, locale: 'en', canonical: false }).links.some((l) => l.rel === 'canonical')).toBe(
      false,
    );
  });

  it('truncates on word boundaries', () => {
    expect(truncate('a'.repeat(10), 20)).toBe('a'.repeat(10));
    const long = 'Sons of the Forest mod by somebody with a very long name that keeps going';
    const out = truncate(long, 60);
    expect(out.length).toBeLessThanOrEqual(60);
    expect(out.endsWith('…')).toBe(true);
    expect(truncate(`${'word '.repeat(50)}`, 160).length).toBeLessThanOrEqual(160);
  });
});

describe('JSON-LD', () => {
  it('serializes without any way to close the script element', () => {
    const out = serializeJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Thing',
      name: '</script><script>alert(1)</script> & \u2028',
    });
    expect(out).not.toMatch(/<|>|&|\u2028/);
    expect(JSON.parse(out).name).toBe('</script><script>alert(1)</script> & \u2028');
  });

  it('builds Organization, WebSite with SearchAction and BreadcrumbList', () => {
    const org = organizationJsonLd('https://sotf-mods.com');
    expect((org as { sameAs?: unknown }).sameAs).toEqual([
      'https://discord.gg/sotf',
      'https://www.youtube.com/@ShokoCC',
      'https://github.com/ChoqueCastroLD/sotf-mods-api',
    ]);
    const site = websiteJsonLd('https://sotf-mods.com', 'pt', '/pt/search');
    expect(site.inLanguage).toBe('pt-BR');
    expect(JSON.stringify(site.potentialAction)).toContain('https://sotf-mods.com/pt/search?q={search_term_string}');
    const crumbs = breadcrumbJsonLd([{ name: 'Mods', url: 'https://sotf-mods.com/mods' }, { name: 'Axel' }]);
    expect(crumbs.itemListElement).toEqual([
      { '@type': 'ListItem', position: 1, name: 'Mods', item: 'https://sotf-mods.com/mods' },
      { '@type': 'ListItem', position: 2, name: 'Axel' },
    ]);
  });
});
