/**
 * `GET /sitemaps/{static,mods,builds,categories,tags,kits,creators,news,best}.xml` (PLAN §4.4,
 * §8.6): every indexable URL of the type in the 13 locales, each with its hreflang cluster, a real
 * `lastmod` and `image:image` for mods, builds and kits. Cached 1 h (tag `sitemap`).
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../../lib/env.ts';
import { CONTENT_TYPES, machineError, machineResponse, machineUnavailable } from '../../lib/seo/respond.ts';
import { isSitemapType, sitemapPages } from '../../lib/seo/sitemaps.ts';
import { urlset } from '../../lib/seo/xml.ts';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const type = context.params.type;
  if (!isSitemapType(type)) return machineError(context, 404, 'Unknown sitemap.');
  try {
    const pages = await sitemapPages(type);
    return machineResponse(context, urlset(loadEnv().siteUrl, pages), {
      contentType: CONTENT_TYPES.xml,
      tags: ['sitemap'],
    });
  } catch (error) {
    console.error(`[web] sitemap ${type} failed`, error);
    return machineUnavailable();
  }
};
