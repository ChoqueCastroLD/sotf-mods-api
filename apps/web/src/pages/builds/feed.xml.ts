/** `GET /builds/feed.xml` (PLAN §4.4, §8.6): RSS 2.0 of new and updated builds. */
import type { APIRoute } from 'astro';
import { buildsFeedRoute } from '../../lib/seo/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => buildsFeedRoute(context);
