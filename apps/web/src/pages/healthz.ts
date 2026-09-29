/**
 * `GET /healthz` — liveness of the web container for Coolify (PLAN §11.3). Shape: `HealthDTO`
 * of `@sotf/contracts/internal`. Never cached.
 */
import type { HealthDTO } from '@sotf/contracts/internal';
import type { APIRoute } from 'astro';
import type { z } from 'zod';
import { loadEnv } from '../lib/env.ts';

export const prerender = false;

export const GET: APIRoute = () => {
  const body: z.output<typeof HealthDTO> = {
    status: 'ok',
    service: 'web',
    version: loadEnv().release ?? 'dev',
    uptimeSeconds: Math.round(process.uptime()),
  };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
};

export const HEAD: APIRoute = (context) => GET(context);
