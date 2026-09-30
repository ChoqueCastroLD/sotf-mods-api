/**
 * `GET /builds/:user/:slug.md` (PLAN §8.7): Markdown alternate of a build page. Mods 301 to
 * `/mods/…md`.
 */
import type { APIRoute } from 'astro';
import { modMarkdownRoute } from '../../../lib/seo/alternates.ts';

export const prerender = false;

export const GET: APIRoute = (context) => modMarkdownRoute(context, 'builds');
