/** `GET /profile/:handle/feed.xml` (PLAN §4.4, §8.6): RSS 2.0 of a creator's releases. */
import type { APIRoute } from 'astro';
import { profileFeedRoute } from '../../../lib/seo/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => profileFeedRoute(context);
