/**
 * `GET /oembed?url=&format=json` (PLAN §4.2, §8.6): oEmbed `rich` provider for mod, library and
 * build pages; the legacy `/mods/:u/:s.json` 301s here.
 */
import type { APIRoute } from 'astro';
import { oembedRoute } from '../lib/seo/oembed.ts';

export const prerender = false;

export const GET: APIRoute = (context) => oembedRoute(context);
