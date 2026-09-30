/** `GET /llms.txt` (PLAN §8.7): the llmstxt.org map of the site. Cached 1 h (tags `sitemap`, `list:*`). */
import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env.ts';
import { allCards, allCategories } from '../lib/seo/data.ts';
import { llmsTxt } from '../lib/seo/llms.ts';
import { CONTENT_TYPES, machineResponse, machineUnavailable } from '../lib/seo/respond.ts';

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
