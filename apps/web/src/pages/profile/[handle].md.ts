/**
 * `GET /profile/:handle.md` (PLAN §8.7): Markdown alternate of a public profile (stats, mods and
 * builds with dates and figures).
 */
import type { APIRoute } from 'astro';
import { profileMarkdownRoute } from '../../lib/seo/alternates.ts';

export const prerender = false;

export const GET: APIRoute = (context) => profileMarkdownRoute(context);
