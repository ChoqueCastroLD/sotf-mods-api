/**
 * `GET /news/feed.xml` (T0-28, PLAN §4.4): RSS 2.0 of the site announcements, in English (machine
 * endpoints are not localized), full post text as HTML in each item. Edge-cached like the pages
 * (purged on deploy, which is when a post appears).
 */
import { m } from '@sotf/i18n/messages';
import type { APIRoute } from 'astro';
import { newsPosts } from '../../content/news/index.ts';
import { EDGE_TTL } from '../../lib/cache/policy.ts';
import { loadEnv } from '../../lib/env.ts';
import { LOGO_PATH } from '../../lib/site.ts';
import { CONTENT_TYPES, machineResponse } from '../sitemaps/_lib/respond.ts';
import { rss } from '../sitemaps/_lib/xml.ts';

export const prerender = false;

/** Absolutizes the root-relative links and images of a post for feed readers. */
function absolutize(html: string, siteUrl: string): string {
  return html.replace(
    /(href|src)="(\/(?![/\\])[^"]*)"/g,
    (_match, attribute: string, path: string) => `${attribute}="${siteUrl}${path}"`,
  );
}

export const GET: APIRoute = (context) => {
  const siteUrl = loadEnv().siteUrl.replace(/\/+$/, '');
  const posts = newsPosts('en');
  const body = rss({
    title: m.content_news_feed_title({}, { locale: 'en' }),
    link: `${siteUrl}/news`,
    selfUrl: `${siteUrl}/news/feed.xml`,
    description: m.content_news_description({}, { locale: 'en' }),
    language: 'en',
    ttl: 60,
    imageUrl: `${siteUrl}${LOGO_PATH}`,
    items: posts.map((post) => {
      const link = `${siteUrl}/news/${post.slug}`;
      return {
        title: post.title,
        link,
        guid: link,
        pubDate: `${post.published}T12:00:00Z`,
        description: absolutize(post.html, siteUrl),
        author: post.author,
        categories: ['News'],
      };
    }),
  });
  return machineResponse(context, body, { contentType: CONTENT_TYPES.rss, maxAge: EDGE_TTL.static });
};
