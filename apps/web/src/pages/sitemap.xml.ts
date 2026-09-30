/**
 * `GET /sitemap.xml` (PLAN §4.4, §8.6): the sitemap index. Lists every per-type sitemap with the
 * newest real `lastmod` of its pages. Cached 1 h at the edge and the origin (tags `sitemap` and
 * `html`: purged when content is published, edited or retired, and on deploy). Declared in
 * `robots.txt`; submitted to Search Console and Bing Webmaster Tools by the owner.
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env.ts';
import { CONTENT_TYPES, machineResponse, machineUnavailable } from '../lib/seo/respond.ts';
import { newestLastmod, SITEMAP_TYPES, sitemapPages } from '../lib/seo/sitemaps.ts';
import { sitemapIndex } from '../lib/seo/xml.ts';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  try {
    const entries = await Promise.all(
      SITEMAP_TYPES.map(async (type) => {
        const pages = await sitemapPages(type);
        return { type, count: pages.length, lastmod: newestLastmod(pages) };
      }),
    );
    const body = sitemapIndex(
      loadEnv().siteUrl,
      entries
        .filter((entry) => entry.count > 0)
        .map((entry) => ({ path: `/sitemaps/${entry.type}.xml`, lastmod: entry.lastmod })),
    );
    return machineResponse(context, body, { contentType: CONTENT_TYPES.xml, tags: ['sitemap'] });
  } catch (error) {
    console.error('[web] sitemap index failed', error);
    return machineUnavailable();
  }
};
