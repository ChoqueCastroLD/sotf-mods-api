/** `GET /categories/:slug/feed.xml` (PLAN §4.4, §8.6): RSS 2.0 of a category. */
import type { APIRoute } from 'astro';
import { categoryFeedRoute } from '../../../lib/seo/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => categoryFeedRoute(context);
