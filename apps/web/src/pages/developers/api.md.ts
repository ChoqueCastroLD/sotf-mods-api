/**
 * `GET /developers/api.md`: the creator API guide for people and AI agents (Markdown, English).
 * Linked from `/api/v2`, the OpenAPI description, `/.well-known/api-catalog` and `llms.txt`.
 */
import type { APIRoute } from 'astro';
import { apiGuideMarkdown } from '../../lib/api-guide.ts';
import { loadEnv } from '../../lib/env.ts';
import { CONTENT_TYPES, machineResponse } from '../../lib/seo/respond.ts';

export const prerender = false;

export const GET: APIRoute = (context) =>
  machineResponse(context, apiGuideMarkdown(loadEnv().siteUrl), {
    contentType: CONTENT_TYPES.markdown,
    headers: { 'access-control-allow-origin': '*' },
  });
