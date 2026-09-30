/**
 * `GET /.well-known/security.txt` (RFC 9116, PLAN §4.4, §9): how to report a vulnerability.
 * `Expires` is computed one year ahead from the start of the current UTC month, so the file never
 * goes stale while the body stays stable within a month (cacheable at the edge for a day).
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../../lib/env.ts';
import { SOCIAL_LINKS } from '../../lib/site.ts';
import { CONTENT_TYPES, machineResponse } from '../sitemaps/_lib/respond.ts';

export const prerender = false;

/**
 * Private vulnerability reports go through GitHub Security Advisories of the site's repository
 * (no personal mailbox is published; a dedicated address can be added once it exists).
 */
export const SECURITY_CONTACT = `${SOCIAL_LINKS.github}/security/advisories/new`;

export function securityTxt(siteUrl: string, now: Date): string {
  const expires = new Date(Date.UTC(now.getUTCFullYear() + 1, now.getUTCMonth(), 1));
  return [
    `Contact: ${SECURITY_CONTACT}`,
    `Expires: ${expires.toISOString().replace(/\.\d{3}Z$/, 'Z')}`,
    'Preferred-Languages: en, es',
    `Canonical: ${siteUrl.replace(/\/+$/, '')}/.well-known/security.txt`,
    `Policy: ${siteUrl.replace(/\/+$/, '')}/content-policy`,
    '',
  ].join('\n');
}

export const GET: APIRoute = (context) =>
  machineResponse(context, securityTxt(loadEnv().siteUrl, new Date()), {
    contentType: CONTENT_TYPES.text,
    maxAge: 86_400,
  });
