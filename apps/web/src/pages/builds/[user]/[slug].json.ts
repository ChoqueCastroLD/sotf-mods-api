/**
 * `GET /builds/:user/:slug.json`: same as `/mods/:user/:slug.json` for builds (the legacy
 * `build.njk` template advertised an oEmbed URL that was never served). 301 to the real endpoint.
 */

import { modPath } from '@sotf/contracts/seo';
import type { APIRoute } from 'astro';
import { loadEnv } from '../../../lib/env.ts';
import { rawSegments, stripSuffix } from '../../../lib/seo/entities.ts';
import { machineRedirect } from '../../../lib/seo/respond.ts';

export const prerender = false;

export const GET: APIRoute = (context) => {
  const segments = rawSegments(context.url);
  const user = segments[1] ?? '';
  const slug = stripSuffix(segments[2] ?? '', '.json');
  const pageUrl = `${loadEnv().siteUrl}${modPath('build', user, slug)}`;
  return machineRedirect(`/oembed?url=${encodeURIComponent(pageUrl)}&format=json`);
};
