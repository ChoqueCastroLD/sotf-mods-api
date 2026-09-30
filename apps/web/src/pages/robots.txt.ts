/**
 * `GET /robots.txt` (PLAN §8.6): served by the origin (Cloudflare's Managed robots.txt stays off).
 * Production gets exactly the file of the plan (search and AI answers allowed, AI training opted
 * out through Content Signals); every other environment (staging, preflight, development)
 * disallows everything and also answers `X-Robots-Tag: noindex` (security headers).
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env.ts';
import { CONTENT_TYPES, machineResponse } from '../lib/seo/respond.ts';
import { PRODUCTION_ORIGIN } from '../lib/site.ts';

export const prerender = false;

/** The production file, byte for byte (PLAN §8.6). */
export const ROBOTS_TXT = [
  'User-agent: *',
  'Allow: /',
  'Disallow: /basecamp',
  'Disallow: /ranger',
  'Disallow: /settings',
  'Disallow: /signals',
  'Disallow: /me',
  'Disallow: /api/',
  'Disallow: /search',
  'Disallow: /*/download/',
  'Disallow: /_internal/',
  `Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`,
  'Content-Signal: search=yes, ai-input=yes, ai-train=no',
  '',
].join('\n');

/** Non-production environments must never be crawled. */
export const ROBOTS_TXT_NOINDEX = 'User-agent: *\nDisallow: /\n';

export const GET: APIRoute = (context) =>
  machineResponse(context, loadEnv().indexable ? ROBOTS_TXT : ROBOTS_TXT_NOINDEX, {
    contentType: CONTENT_TYPES.text,
    maxAge: 86_400,
  });
