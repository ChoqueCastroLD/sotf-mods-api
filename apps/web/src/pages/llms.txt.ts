/** `GET /llms.txt` (PLAN §8.7): the llmstxt.org map of the site. Cached 1 h (tags `sitemap`, `list:*`). */
import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env.ts';
import { allCards, allCategories } from './sitemaps/_lib/data.ts';
import { llmsTxt } from './sitemaps/_lib/llms.ts';
import { CONTENT_TYPES, machineResponse, machineUnavailable } from './sitemaps/_lib/respond.ts';

export const prerender = false;

export const GET: APIRoute = async (context) => {
  try {
    const [cards, categories] = await Promise.all([allCards(), allCategories()]);
    const body = llmsTxt({ siteUrl: loadEnv().siteUrl, cards, categories, now: new Date() });
    return machineResponse(context, body, {
      contentType: CONTENT_TYPES.text,
      tags: ['sitemap', 'list:mods', 'list:builds'],
    });
  } catch (error) {
    console.error('[web] llms.txt failed', error);
    return machineUnavailable();
  }
};
