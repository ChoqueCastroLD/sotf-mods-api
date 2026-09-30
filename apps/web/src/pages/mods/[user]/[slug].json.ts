/**
 * `GET /mods/:user/:slug.json` (PLAN §4.6): the legacy site advertised this URL as its oEmbed
 * endpoint but never served it. It now 301s to the real oEmbed endpoint for the page.
 */

import { modPath } from '@sotf/contracts/seo';
import type { APIRoute } from 'astro';
import { loadEnv } from '../../../lib/env.ts';
import { rawSegments, stripSuffix } from '../../sitemaps/_lib/entities.ts';
import { machineRedirect } from '../../sitemaps/_lib/respond.ts';

export const prerender = false;

export const GET: APIRoute = (context) => {
  const segments = rawSegments(context.url);
  const user = segments[1] ?? '';
  const slug = stripSuffix(segments[2] ?? '', '.json');
  const pageUrl = `${loadEnv().siteUrl}${modPath('mod', user, slug)}`;
  return machineRedirect(`/oembed?url=${encodeURIComponent(pageUrl)}&format=json`);
};
