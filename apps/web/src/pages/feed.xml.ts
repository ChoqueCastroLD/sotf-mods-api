/** `GET /feed.xml` (PLAN §4.4, §8.6): RSS 2.0 of new and updated mods and libraries. */
import type { APIRoute } from 'astro';
import { globalFeedRoute } from '../lib/seo/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => globalFeedRoute(context);
