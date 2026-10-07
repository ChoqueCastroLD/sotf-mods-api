#!/usr/bin/env node
// biome-ignore-all lint/suspicious/noConsole: command line tool
/**
 * Fetches one URL per public template of a running web server and asserts the head tags
 * (title, description, canonical, hreflang cluster, robots, Open Graph, Twitter, theme-color,
 * icons, manifest) and the JSON-LD graph. Usage:
 *
 *   node apps/web/scripts/check-seo.mjs [--base http://127.0.0.1:47321] [--origin https://sotf-mods.com]
 *     [--indexable] [--locales en,es,ja|all]
 *
 * `--indexable` expects the production robots policy (index on public pages); without it every page
 * must be noindex (development/staging). `--origin` is the origin the canonicals must use
 * (default: the base).
 */
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE = opt('base', 'http://127.0.0.1:47321').replace(/\/+$/, '');
const ORIGIN = opt('origin', BASE).replace(/\/+$/, '');
const INDEXABLE = args.includes('--indexable');
const ALL_LOCALES = 'en,es,de,fr,it,nl,pl,pt,ru,sv,tr,zh,ja';
const CHECK_LOCALES = (opt('locales', 'en,es,ja') === 'all' ? ALL_LOCALES : opt('locales', 'en,es,ja')).split(',');

const problems = [];
const seen = { title: new Map(), description: new Map() };
let pagesChecked = 0;

function fail(url, message) {
  problems.push(`${url}: ${message}`);
}

async function get(path) {
  // The dev server answers 5xx while Vite re-optimizes dependencies: retry a few times.
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${BASE}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(180_000) });
    const text = await res.text();
    if (res.status < 500 || attempt >= 3) return { res, text };
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

function attr(tag, name) {
  const m = new RegExp(`\\s${name}="([^"]*)"`).exec(tag);
  return m
    ? m[1]
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
    : undefined;
}

function head(html) {
  const end = html.indexOf('</head>');
  return end > 0 ? html.slice(0, end) : html;
}

function metas(h) {
  return [...h.matchAll(/<meta\s[^>]*>/g)].map((m) => m[0]);
}

function metaContent(h, key, value) {
  return metas(h)
    .filter((tag) => attr(tag, key) === value)
    .map((tag) => attr(tag, 'content'));
}

function links(h) {
  return [...h.matchAll(/<link\s[^>]*>/g)].map((m) => m[0]);
}

function jsonLdNodes(h, url) {
  const nodes = [];
  for (const m of h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      for (const item of Array.isArray(data) ? data : [data]) nodes.push(item);
    } catch (error) {
      fail(url, `invalid JSON-LD: ${error.message}`);
    }
  }
  return nodes;
}

const typeOf = (node) => (Array.isArray(node['@type']) ? node['@type'] : [node['@type']]);

/** Checks of a JSON-LD node against the properties Google requires or recommends. */
function validateNode(url, node) {
  if (node['@context'] !== 'https://schema.org') fail(url, `JSON-LD ${typeOf(node)} without @context`);
  const types = typeOf(node);
  const need = (...keys) => {
    for (const key of keys) if (node[key] === undefined || node[key] === '') fail(url, `${types[0]} misses "${key}"`);
  };
  const t = (name) => types.includes(name);
  if (t('WebSite')) {
    need('name', 'url', 'potentialAction');
    if (node.potentialAction?.['@type'] !== 'SearchAction') fail(url, 'WebSite.potentialAction is not a SearchAction');
    if (!String(node.potentialAction?.target?.urlTemplate ?? '').includes('{search_term_string}'))
      fail(url, 'SearchAction target lacks {search_term_string}');
  }
  if (t('Organization')) {
    need('name', 'url', 'logo', 'sameAs');
    if (!String(node.logo).endsWith('/brand/logo.png'))
      fail(url, `Organization.logo is ${node.logo}, expected /brand/logo.png`);
    const same = (node.sameAs ?? []).join(' ');
    for (const host of ['discord.gg', 'youtube.com', 'github.com'])
      if (!same.includes(host)) fail(url, `Organization.sameAs lacks ${host}`);
  }
  if (t('BreadcrumbList')) {
    const items = node.itemListElement ?? [];
    if (items.length < 2) fail(url, 'BreadcrumbList has fewer than 2 items');
    items.forEach((item, index) => {
      if (item.position !== index + 1) fail(url, 'BreadcrumbList positions are not sequential');
      if (!item.name) fail(url, 'BreadcrumbList item without name');
      if (index < items.length - 1 && !item.item) fail(url, `BreadcrumbList item ${index + 1} without item URL`);
    });
  }
  if (t('SoftwareApplication') || t('VideoGame') || t('SoftwareSourceCode')) {
    need('name', 'url');
    if (t('SoftwareApplication')) {
      need('applicationCategory', 'operatingSystem', 'offers');
      if (node.offers && String(node.offers.price) !== '0') fail(url, 'SoftwareApplication offers is not free');
      if (node.aggregateRating && !(node.aggregateRating.ratingCount >= 1 && node.aggregateRating.ratingValue >= 1))
        fail(url, 'aggregateRating without real reviews');
    }
  }
  if (t('Event')) need('name', 'startDate', 'location');
  if (t('ItemList')) {
    if (!Array.isArray(node.itemListElement) || node.itemListElement.length === 0) fail(url, 'ItemList is empty');
  }
  if (t('ProfilePage')) need('mainEntity');
  if (t('Person')) need('name');
  if (t('CreativeWork')) need('name');
}

function checkPage(label, html, status, expect) {
  pagesChecked++;
  if (status !== expect.status) {
    fail(label, `status ${status}, expected ${expect.status}`);
    return;
  }
  const h = head(html);
  const title =
    /<title>([\s\S]*?)<\/title>/
      .exec(h)?.[1]
      ?.replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"') ?? '';
  const description = metaContent(h, 'name', 'description')[0] ?? '';
  const robots = metaContent(h, 'name', 'robots')[0] ?? '';
  const canonical = links(h).find((l) => attr(l, 'rel') === 'canonical');
  const alternates = links(h).filter((l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang'));

  if (!title) fail(label, 'no <title>');
  if (title.length > 60) fail(label, `title ${title.length} chars: ${title}`);
  if (!expect.noindex && description.length < (/^(zh|ja)$/.test(expect.locale ?? '') ? 20 : 40))
    fail(label, `description too short (${description.length}): ${description}`);
  if (description.length > 160) fail(label, `description ${description.length} chars`);
  if (!expect.noindex && !/<html[^>]* lang="[a-zA-Z-]+"/.test(html.slice(0, 600))) fail(label, '<html lang> missing');
  if (!metaContent(h, 'name', 'viewport').length) fail(label, 'no viewport');
  if (!expect.noindex && metaContent(h, 'name', 'theme-color').length < 1) fail(label, 'no theme-color');

  const wantIndex = INDEXABLE && !expect.noindex;
  if (wantIndex && !expect.mayNoindex && /noindex/.test(robots)) fail(label, `robots is "${robots}", expected index`);
  if (!wantIndex && !/noindex/.test(robots)) fail(label, `robots is "${robots}", expected noindex`);

  // Noindex pages (filters, search, auth, console shells) only need the robots policy and a title.
  if (expect.noindex || (expect.mayNoindex && /noindex/.test(robots))) return;

  if (expect.canonical !== false) {
    if (!canonical) fail(label, 'no canonical');
    else {
      const href = attr(canonical, 'href');
      if (!href?.startsWith(ORIGIN)) fail(label, `canonical not on ${ORIGIN}: ${href}`);
      if (href?.includes('?') && !expect.canonicalQuery) fail(label, `canonical keeps a query: ${href}`);
      if (expect.canonicalPath !== undefined && href !== `${ORIGIN}${expect.canonicalPath}`)
        fail(label, `canonical ${href}, expected ${ORIGIN}${expect.canonicalPath}`);
    }
  }
  if (expect.hreflang !== false) {
    const langs = alternates.map((l) => attr(l, 'hreflang'));
    if (langs.length !== 14 || !langs.includes('x-default'))
      fail(label, `hreflang cluster has ${langs.length} entries: ${langs.join(',')}`);
    for (const l of alternates)
      if (!attr(l, 'href')?.startsWith(ORIGIN)) fail(label, `hreflang href not absolute on origin: ${attr(l, 'href')}`);
  }

  const ogTitle = metaContent(h, 'property', 'og:title')[0];
  if (!ogTitle) fail(label, 'no og:title');
  // Sizes are stated for the default card and the generated 1200 x 630 cards; a legacy thumbnail
  // without known dimensions carries none (a wrong size is worse than no size).
  const ogImageUrl = metaContent(h, 'property', 'og:image')[0] ?? '';
  const sized = /\/og-default\.png$|\/og\//.test(ogImageUrl);
  for (const key of [
    'og:description',
    'og:url',
    'og:site_name',
    'og:type',
    'og:locale',
    'og:image',
    'og:image:alt',
    ...(sized ? ['og:image:width', 'og:image:height'] : []),
  ]) {
    if (!metaContent(h, 'property', key).length) {
      if (expect.adult && key.startsWith('og:image')) continue;
      fail(label, `no ${key}`);
    }
  }
  for (const key of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!metaContent(h, 'name', key).length && !(expect.adult && key === 'twitter:image')) fail(label, `no ${key}`);
  }
  if (metaContent(h, 'name', 'twitter:card')[0] !== 'summary_large_image')
    fail(label, 'twitter:card is not summary_large_image');
  const image = metaContent(h, 'property', 'og:image')[0];
  if (image && !/^https?:\/\//.test(image)) fail(label, `og:image not absolute: ${image}`);
  const alternateLocales = metaContent(h, 'property', 'og:locale:alternate');
  if (expect.hreflang !== false && alternateLocales.length !== 12)
    fail(label, `og:locale:alternate x${alternateLocales.length}`);

  for (const rel of ['icon', 'apple-touch-icon', 'manifest']) {
    if (!links(h).some((l) => attr(l, 'rel') === rel)) fail(label, `no <link rel="${rel}">`);
  }

  const nodes = jsonLdNodes(h, label);
  for (const node of nodes) validateNode(label, node);
  const types = nodes.flatMap(typeOf);
  for (const need of expect.jsonLd ?? []) {
    const alternatives = need.split('|');
    if (!alternatives.some((alt) => types.includes(alt)))
      fail(label, `JSON-LD lacks ${need} (has ${types.join(',') || 'none'})`);
  }
  if (!expect.skipUnique) {
    for (const [kind, value] of [
      ['title', title],
      ['description', description],
    ]) {
      const key = `${expect.locale ?? 'en'}|${value}`;
      const previous = seen[kind].get(key);
      if (previous && previous !== label) fail(label, `${kind} duplicates ${previous}: ${value}`);
      else seen[kind].set(key, label);
    }
  }
}

function loc(path, locale) {
  if (locale === 'en') return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

async function sample(type, count = 1) {
  const { text } = await get(`/sitemaps/${type}.xml`);
  const urls = [...text.matchAll(/<loc>([^<]*)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter((p) => !/^\/(es|de|fr|it|nl|pl|pt|ru|sv|tr|zh|ja)(\/|$)/.test(p));
  return urls.slice(0, count);
}

const [mod] = await sample('mods');
const [build] = await sample('builds');
const [category] = await sample('categories');
const [tag] = await sample('tags');
const [request] = await sample('requests');
const [jam] = await sample('jams');
const [profile] = await sample('creators');

/** [path, template expectation] */
const templates = [
  ['/', { jsonLd: ['WebSite', 'Organization'] }],
  ['/mods', { jsonLd: ['CollectionPage|ItemList'] }],
  ['/mods?page=2', { noindex: false, canonicalQuery: true, skipUnique: true }],
  ['/mods?sort=downloads', { noindex: true, skipUnique: true }],
  ['/mods?q=forest', { noindex: true, skipUnique: true }],
  ['/search?q=forest', { noindex: true, hreflang: false, skipUnique: true }],
  ['/search', { noindex: true, hreflang: false, skipUnique: true }],
  ['/categories', { jsonLd: ['BreadcrumbList'] }],
  category && [category, { jsonLd: ['BreadcrumbList', 'ItemList|CollectionPage'] }],
  ['/tags', { jsonLd: ['BreadcrumbList'] }],
  tag && [tag, { jsonLd: ['BreadcrumbList'] }],
  mod && [mod, { jsonLd: ['SoftwareApplication|VideoGame', 'BreadcrumbList'] }],
  mod && [`${mod}/versions`, { jsonLd: ['BreadcrumbList'] }],
  // Reviews are indexable from 3 visible reviews only.
  mod && [`${mod}/reviews`, { jsonLd: ['BreadcrumbList'], mayNoindex: true }],
  ['/builds', { jsonLd: ['BreadcrumbList', 'ItemList|CollectionPage'] }],
  build && [build, { jsonLd: ['BreadcrumbList', 'CreativeWork|SoftwareApplication'] }],
  profile && [profile, { jsonLd: ['ProfilePage', 'BreadcrumbList'] }],
  ['/jams', { jsonLd: ['BreadcrumbList'] }],
  jam && [jam, { jsonLd: ['Event', 'BreadcrumbList'] }],
  ['/requests', { jsonLd: ['BreadcrumbList'] }],
  request && [request, { jsonLd: ['BreadcrumbList'] }],
  ['/requests/new', { noindex: true, skipUnique: true }],
  ['/install', { jsonLd: ['BreadcrumbList'] }],
  ['/about', { jsonLd: ['BreadcrumbList'] }],
  ['/developers', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/privacy', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/terms', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/cookies', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/dmca', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/content-policy', { jsonLd: ['BreadcrumbList'], hreflang: false }],
  ['/logs', {}],
  ['/login', { noindex: true, hreflang: false, skipUnique: true }],
  ['/register', { noindex: true, hreflang: false, skipUnique: true }],
  ['/forgot-password', { noindex: true, hreflang: false, skipUnique: true }],
  ['/dashboard', { noindex: true, hreflang: false, skipUnique: true }],
  ['/moderation', { noindex: true, hreflang: false, skipUnique: true }],
  ['/notifications', { noindex: true, hreflang: false, skipUnique: true }],
  ['/settings', { noindex: true, hreflang: false, skipUnique: true }],
  ['/me', { noindex: true, hreflang: false, skipUnique: true }],
].filter(Boolean);

for (const [path, expect] of templates) {
  for (const locale of CHECK_LOCALES) {
    // Authenticated shells and auth pages are checked in English only.
    if (expect.noindex && locale !== 'en' && !path.startsWith('/mods') && !path.startsWith('/search')) continue;
    const localized = loc(path, locale);
    const label = `${locale}:${path}`;
    try {
      const { res, text } = await get(localized);
      const redirected = res.status >= 300 && res.status < 400;
      if (redirected) {
        // guest-only redirect (e.g. /dashboard -> /login) is fine for the console shells
        if (!/^\/(dashboard|moderation|notifications|settings|me|requests\/new)/.test(path))
          fail(label, `unexpected redirect ${res.status} -> ${res.headers.get('location')}`);
        continue;
      }
      const canonicalPath =
        expect.canonicalPath ?? (path.includes('?') ? undefined : loc(expect.canonicalLike ?? path, locale));
      checkPage(label, text, res.status, {
        status: 200,
        locale,
        ...expect,
        canonicalPath: expect.noindex || expect.hreflang === false ? undefined : canonicalPath,
      });
    } catch (error) {
      fail(label, `fetch failed: ${error.message}`);
    }
  }
}

// Not found page: 404 with noindex.
{
  const { res, text } = await get('/this-page-does-not-exist');
  if (res.status !== 404) fail('/404', `status ${res.status}`);
  else if (!/noindex/.test(metaContent(head(text), 'name', 'robots')[0] ?? '')) fail('/404', 'not noindex');
}

// Share logs page and OG images.
const ogUrls = new Set();
for (const [path] of templates) {
  if ([mod, build, profile, jam].includes(path)) {
    const { text } = await get(path);
    const image = metaContent(head(text), 'property', 'og:image')[0];
    if (image) ogUrls.add(image);
  }
}
ogUrls.add(`${ORIGIN}/brand/og-default.png`);
for (const image of ogUrls) {
  const url = image.replace(ORIGIN, BASE);
  const res = await fetch(url, { signal: AbortSignal.timeout(120_000) });
  const type = res.headers.get('content-type') ?? '';
  const size = (await res.arrayBuffer()).byteLength;
  // Local S3 has no copy of the legacy thumbnails: only generated and default cards are asserted.
  if (!/\/og\/|og-default/.test(url)) console.log(`og skipped (thumbnail fallback) ${image}`);
  else if (!res.ok || !/^image\//.test(type) || size < 2000)
    fail(url, `OG image broken: ${res.status} ${type} ${size} bytes`);
  else console.log(`og ok ${res.status} ${type} ${size}B ${image}`);
}

console.log(`${pagesChecked} pages checked against ${BASE} (${INDEXABLE ? 'indexable' : 'noindex'} policy)`);
if (problems.length) {
  console.log(`${problems.length} problems:`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
console.log('SEO check passed');
