/**
 * `GET /{INDEXNOW_KEY}.txt` (PLAN §4.4, §8.6): proves ownership of the host to IndexNow. Answers
 * the key as plain text only for the configured key (and only in production, the only environment
 * that submits URLs); any other `*.txt` is a 404. Static routes (`robots.txt`, `ads.txt`,
 * `llms.txt`…) take precedence over this dynamic one.
 */
import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env.ts';
import { CONTENT_TYPES, machineError, machineResponse } from '../lib/seo/respond.ts';

export const prerender = false;

const KEY_PATTERN = /^[a-zA-Z0-9-]{8,128}$/;

export const GET: APIRoute = (context) => {
  const env = loadEnv();
  const key = env.indexNowKey;
  const requested = context.params.indexnow;
  if (!env.indexable || !key || !KEY_PATTERN.test(key) || requested !== key) {
    return machineError(context, 404, 'Not found.');
  }
  return machineResponse(context, key, { contentType: CONTENT_TYPES.text, maxAge: 86_400 });
};
