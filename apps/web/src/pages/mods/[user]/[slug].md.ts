/**
 * `GET /mods/:user/:slug.md` (PLAN §8.7): Markdown alternate of a mod or library page, announced
 * with `<link rel="alternate" type="text/markdown">`. Builds 301 to `/builds/…md`.
 */
import type { APIRoute } from 'astro';
import { modMarkdownRoute } from '../../../lib/seo/alternates.ts';

export const prerender = false;

export const GET: APIRoute = (context) => modMarkdownRoute(context, 'mods');
