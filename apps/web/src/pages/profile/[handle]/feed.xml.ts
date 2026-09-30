/** `GET /profile/:handle/feed.xml` (PLAN §4.4, §8.6): RSS 2.0 of a creator's releases. */
import type { APIRoute } from 'astro';
import { profileFeedRoute } from '../../sitemaps/_lib/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => profileFeedRoute(context);
