/**
 * `GET /mods/:user/:slug/feed.xml` (PLAN §4.2, §8.6): RSS 2.0 of every release of a mod, library
 * or build, with changelogs. Cached 1 h with `mod:{id}` (purged by new versions).
 */
import type { APIRoute } from 'astro';
import { modFeedRoute } from '../../../sitemaps/_lib/feed-routes.ts';

export const prerender = false;

export const GET: APIRoute = (context) => modFeedRoute(context);
