/**
 * What the legacy route groups share: the platform services, the clock, the serializer options and
 * the `route()` registration bound to the module's Fastify context.
 */
import type { Endpoint } from '@sotf/contracts';
import type { Clock } from '@sotf/core';
import type { FastifyInstance } from 'fastify';
import type { Platform } from '../lib/types.ts';
import { type LegacyHandler, type LegacyRouteOptions, legacyRoute } from './route.ts';
import type { SerializeOptions } from './serializers.ts';

export interface LegacyContext {
  app: FastifyInstance;
  platform: Platform;
  clock: Clock;
  serialize: SerializeOptions;
  route(endpoint: Endpoint, handler: LegacyHandler): void;
}

export function createLegacyContext(
  app: FastifyInstance,
  platform: Platform,
  clock: Clock,
  routeOptions: LegacyRouteOptions,
): LegacyContext {
  return {
    app,
    platform,
    clock,
    serialize: { snakeAliases: platform.env.LEGACY_SNAKE_ALIASES },
    route: (endpoint, handler) => legacyRoute(app, endpoint, handler, routeOptions),
  };
}
