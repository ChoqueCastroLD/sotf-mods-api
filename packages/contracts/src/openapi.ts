/**
 * OpenAPI 3.1 document generated from the contracts (PLAN §5.1, T0-32). Served by the API at
 * `/api/v2/openapi.json` and rendered by Scalar at `/api/docs`; `/llms.txt` links to it.
 *
 * Every registered DTO becomes `components.schemas.<id>` (with its description and examples).
 * Request bodies are converted in Zod *input* mode and responses in *output* mode; when a DTO is
 * used both ways and the two JSON Schemas differ, the input variant is named `<id>Input`.
 * Response objects never declare `additionalProperties: false` (v2 only grows additively).
 */
import { z } from 'zod';
import { allEndpoints, type ContractDomain } from './contracts.ts';
import { dtoRegistry, registeredDtos, wireSchemaOf } from './dto.ts';
import { type Endpoint, openApiPath, responseKindOf, successStatus } from './endpoint.ts';
import { ERROR_DEFINITIONS, type ErrorCode, PROBLEM_CONTENT_TYPE } from './errors.ts';

export type JsonSchema = Record<string, unknown>;
export type OpenApiDocument = Record<string, unknown> & {
  openapi: string;
  paths: Record<string, Record<string, unknown>>;
  components: { schemas: Record<string, JsonSchema>; securitySchemes: Record<string, unknown> };
};

export interface OpenApiOptions {
  /** `public` (default) omits internal routes; `all` documents every contract. */
  audience?: 'public' | 'all';
  servers?: ReadonlyArray<{ url: string; description?: string }>;
  /** `info.version` (the deployed git sha is a good value). */
  version?: string;
}

export const OPENAPI_VERSION = '3.1.0';
export const COMPONENT_REF_PREFIX = '#/components/schemas/';

const DEFAULT_SERVERS = [
  { url: 'https://api.sotf-mods.com', description: 'Public API (third parties)' },
  { url: 'https://sotf-mods.com', description: 'Same origin as the website' },
];

export const DOMAIN_DESCRIPTIONS: Readonly<Record<ContractDomain, string>> = {
  admin: 'Administration (game builds, taxonomy, awards, announcements, settings) and the public announcements banner.',
  auth: 'Registration, login, password reset and email verification. Sessions use the `__Host-sotf_sid` cookie.',
  catalog: 'Mods, libraries and builds: explore, details, dependencies, taxonomy, creators and public profiles.',
  comments: 'Comments v2: threads, reactions, pins, solutions and bug reports; markdown preview.',
  compat: 'Compatibility per game build: field reports, aggregates, ecosystem and Patch Radar.',
  downloads: 'Downloads (302 to R2) and the download history.',
  events: 'Server-sent events and the analytics/RUM beacons.',
  follows: 'Follow mods (Backpack) and creators.',
  gamification: 'Badges, awards and the Day 1 checklist.',
  internal: 'Health checks and internal operations (Coolify network only).',
  kits: 'Kits: shareable mod collections.',
  legacy:
    'Legacy v1 API (`/api/*`) kept byte-compatible for RedManager, UpdatesChecker and KelvinSeek. Deprecated routes carry `Deprecation` and `Sunset` headers.',
  me: 'The signed-in user: profile, settings, privacy, sessions, data export and deletion.',
  moderation: 'Reports and the Ranger Station (moderators).',
  notifications: 'Signals (notifications), preferences and one-click unsubscribe.',
  reviews: 'Reviews, helpful votes and author replies.',
  search: 'Search and the compact Cmd+K index.',
  seo: 'Path resolution for legacy and canonical URLs.',
  stats: 'Public statistics and live counters.',
  studio: 'Basecamp: drafts, publishing, versions, analytics and inbox.',
  uploads: 'Direct uploads to R2 with presigned URLs.',
  versions: 'Versions of a mod in semver order, with security scans and compatibility.',
};

// -----------------------------------------------------------------------------------------------
// Zod → JSON Schema
// -----------------------------------------------------------------------------------------------

type Io = 'input' | 'output';

interface ZodDefLike {
  type: string;
  catchall?: unknown;
}

function override(ctx: { zodSchema: unknown; jsonSchema: JsonSchema }): void {
  const wire = wireSchemaOf(ctx.zodSchema as z.ZodType);
  if (wire) {
    for (const key of Object.keys(ctx.jsonSchema)) delete ctx.jsonSchema[key];
    Object.assign(ctx.jsonSchema, structuredCloneJson(wire));
    return;
  }
  const def = (ctx.zodSchema as { _zod?: { def?: ZodDefLike } })._zod?.def;
  // `z.object` (not strict) must not forbid unknown keys in the published schema.
  if (def?.type === 'object' && def.catchall === undefined) delete ctx.jsonSchema.additionalProperties;
}

function structuredCloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

interface Converted {
  root: JsonSchema;
  defs: Record<string, JsonSchema>;
}

function convert(schema: z.ZodType, io: Io): Converted {
  const js = z.toJSONSchema(schema, {
    target: 'draft-2020-12',
    io,
    metadata: dtoRegistry,
    unrepresentable: 'any',
    cycles: 'ref',
    reused: 'inline',
    override: override as never,
  }) as JsonSchema;
  const defs = (js.$defs ?? {}) as Record<string, JsonSchema>;
  delete js.$defs;
  delete js.$schema;
  for (const def of Object.values(defs)) delete def.$schema;
  return { root: js, defs };
}

function rewriteRefs(node: unknown, rename: (id: string) => string): unknown {
  if (Array.isArray(node)) return node.map((item) => rewriteRefs(item, rename));
  if (node !== null && typeof node === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(node)) {
      if (key === '$ref' && typeof value === 'string' && value.startsWith('#/$defs/')) {
        out[key] = `${COMPONENT_REF_PREFIX}${rename(value.slice('#/$defs/'.length))}`;
      } else {
        out[key] = rewriteRefs(value, rename);
      }
    }
    return out;
  }
  return node;
}

function refsIn(node: unknown, found = new Set<string>()): Set<string> {
  if (Array.isArray(node)) for (const item of node) refsIn(item, found);
  else if (node !== null && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (key === '$ref' && typeof value === 'string' && value.startsWith('#/$defs/')) found.add(value.slice(8));
      else refsIn(value, found);
    }
  }
  return found;
}

function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value !== null && typeof value === 'object') {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableJson((value as Record<string, unknown>)[key])}`)
      .join(',')}}`;
  }
  return JSON.stringify(value);
}

class SchemaCollector {
  readonly components: Record<string, JsonSchema> = {};
  /** DTO ids used in output (response) position. */
  private readonly outputIds = new Set<string>();
  private readonly outputDefs = new Map<string, JsonSchema>();

  /** First pass: remember every DTO that appears in a response. */
  registerOutput(schema: z.ZodType): void {
    const { defs } = convert(schema, 'output');
    for (const [id, def] of Object.entries(defs)) {
      this.outputIds.add(id);
      this.outputDefs.set(id, def);
    }
  }

  /** Converts a schema, adds its DTOs to the components and returns the (rewritten) root. */
  add(schema: z.ZodType, io: Io): JsonSchema {
    const { root, defs } = convert(schema, io);
    let rename: (id: string) => string = (id) => id;
    if (io === 'input') {
      // Input variants that differ from the published output variant get the `Input` suffix,
      // and so does every def that references one of them.
      const differs = new Set<string>();
      for (const [id, def] of Object.entries(defs)) {
        const output = this.outputDefs.get(id);
        if (this.outputIds.has(id) && output && stableJson(output) !== stableJson(def)) differs.add(id);
      }
      let changed = true;
      while (changed) {
        changed = false;
        for (const [id, def] of Object.entries(defs)) {
          if (differs.has(id) || !this.outputIds.has(id)) continue;
          if ([...refsIn(def)].some((ref) => differs.has(ref))) {
            differs.add(id);
            changed = true;
          }
        }
      }
      rename = (id) => (differs.has(id) ? `${id}Input` : id);
    }
    for (const [id, def] of Object.entries(defs)) {
      const name = rename(id);
      const rewritten = rewriteRefs(def, rename) as JsonSchema;
      const existing = this.components[name];
      if (existing && stableJson(existing) !== stableJson(rewritten)) {
        throw new Error(`OpenAPI component ${name} would have two different schemas (${io})`);
      }
      this.components[name] = rewritten;
    }
    return rewriteRefs(root, rename) as JsonSchema;
  }
}

// -----------------------------------------------------------------------------------------------
// Operations
// -----------------------------------------------------------------------------------------------

function parameters(collector: SchemaCollector, schema: z.ZodType | undefined, location: 'path' | 'query'): unknown[] {
  if (!schema) return [];
  const root = collector.add(schema, 'input');
  const properties = (root.properties ?? {}) as Record<string, JsonSchema>;
  const required = new Set((root.required ?? []) as string[]);
  return Object.entries(properties).map(([name, propSchema]) => {
    const { description, ...rest } = propSchema;
    const param: Record<string, unknown> = {
      name,
      in: location,
      required: location === 'path' ? true : required.has(name),
      schema: rest,
    };
    if (typeof description === 'string') param.description = description;
    if (rest.type === 'array') {
      param.style = 'form';
      param.explode = true;
    }
    return param;
  });
}

function errorResponse(endpoint: Endpoint, codes: ErrorCode[]): Record<string, unknown> {
  const titles = [...new Set(codes.map((code) => `${code}: ${ERROR_DEFINITIONS[code].title}`))].join(' · ');
  const legacy = endpoint.errorFormat === 'legacy';
  return {
    description: titles,
    content: legacy
      ? { 'application/json': { schema: { $ref: `${COMPONENT_REF_PREFIX}LegacyErrorResponse` } } }
      : { [PROBLEM_CONTENT_TYPE]: { schema: { $ref: `${COMPONENT_REF_PREFIX}ProblemDTO` } } },
  };
}

function operation(
  collector: SchemaCollector,
  domain: string,
  endpoint: Endpoint,
  method: string,
): Record<string, unknown> {
  const kind = responseKindOf(endpoint);
  const status = String(successStatus(endpoint));
  const op: Record<string, unknown> = {
    operationId: method === 'head' ? `${endpoint.id}.head` : endpoint.id,
    summary: endpoint.summary,
    tags: [domain],
  };
  if (endpoint.description) op.description = endpoint.description;
  if (endpoint.deprecated) op.deprecated = true;
  op.security =
    endpoint.auth === 'public' ? [] : endpoint.auth === 'internal' ? [{ internalAuth: [] }] : [{ sessionCookie: [] }];
  op['x-sotf-auth'] = endpoint.auth;
  if (endpoint.requires && endpoint.requires.length > 0) op['x-sotf-requires'] = [...endpoint.requires];
  if (endpoint.rateLimit) op['x-sotf-rate-limit'] = endpoint.rateLimit;
  op['x-sotf-cache'] = endpoint.cache.kind;

  const params = [...parameters(collector, endpoint.params, 'path'), ...parameters(collector, endpoint.query, 'query')];
  if (params.length > 0) op.parameters = params;

  if (endpoint.body && method !== 'head') {
    const bodySchema = collector.add(endpoint.body, 'input');
    const contentType = endpoint.bodyKind === 'text' ? 'text/plain' : 'application/json';
    op.requestBody = {
      required: !endpoint.body.safeParse({}).success,
      content: { [contentType]: { schema: bodySchema } },
    };
  }

  const responses: Record<string, unknown> = {};
  if (kind === 'json' && endpoint.response && method !== 'head') {
    responses[status] = {
      description: 'Success',
      content: { 'application/json': { schema: collector.add(endpoint.response, 'output') } },
    };
  } else if (kind === 'redirect') {
    responses[status] = {
      description: 'Redirect to the file on R2 (`Cache-Control: no-store, private`)',
      headers: {
        Location: { description: 'R2 URL with the key encoded per segment', schema: { type: 'string', format: 'uri' } },
      },
    };
  } else if (kind === 'text' && method !== 'head') {
    responses[status] = { description: 'Plain text', content: { 'text/plain': { schema: { type: 'string' } } } };
  } else if (kind === 'csv' && method !== 'head') {
    responses[status] = { description: 'CSV export', content: { 'text/csv': { schema: { type: 'string' } } } };
  } else if (kind === 'event-stream') {
    const event = endpoint.response ? collector.add(endpoint.response, 'output') : { type: 'string' };
    responses[status] = {
      description: 'Server-sent events; every `data:` line is one JSON event (see `x-sotf-event`)',
      content: { 'text/event-stream': { schema: { type: 'string' }, 'x-sotf-event': event } },
    };
  } else {
    responses[status] = { description: 'Success (no content)' };
  }

  const codes = new Set<ErrorCode>(endpoint.errors ?? []);
  if (endpoint.params || endpoint.query || endpoint.body) codes.add('VALIDATION_FAILED');
  if (endpoint.rateLimit && endpoint.rateLimit !== 'downloads' && endpoint.rateLimit !== 'beacon')
    codes.add('RATE_LIMITED');
  if (endpoint.auth !== 'public' && endpoint.auth !== 'internal') codes.add('UNAUTHENTICATED');
  const byStatus = new Map<number, ErrorCode[]>();
  for (const code of codes) {
    const s = ERROR_DEFINITIONS[code].status;
    byStatus.set(s, [...(byStatus.get(s) ?? []), code]);
  }
  for (const [s, list] of [...byStatus.entries()].sort((a, b) => a[0] - b[0]))
    responses[String(s)] = errorResponse(endpoint, list);
  responses.default = errorResponse(endpoint, ['INTERNAL', 'UNAVAILABLE']);
  op.responses = responses;
  return op;
}

/** Builds the OpenAPI 3.1 document of every (public) contract. */
export function buildOpenApiDocument(options: OpenApiOptions = {}): OpenApiDocument {
  const audience = options.audience ?? 'public';
  const entries = allEndpoints().filter(
    ({ endpoint }) => audience === 'all' || (endpoint.auth !== 'internal' && endpoint.path.startsWith('/api/')),
  );
  const collector = new SchemaCollector();
  for (const { endpoint } of entries) {
    if (endpoint.response) collector.registerOutput(endpoint.response);
  }
  const paths: Record<string, Record<string, unknown>> = {};
  const usedDomains = new Set<string>();
  for (const { domain, endpoint } of entries) {
    usedDomains.add(domain);
    const path = openApiPath(endpoint.path);
    const item = paths[path] ?? {};
    const method = endpoint.method.toLowerCase();
    if (item[method]) throw new Error(`duplicate operation ${endpoint.method} ${endpoint.path}`);
    item[method] = operation(collector, domain, endpoint, method);
    if (endpoint.head) item.head = operation(collector, domain, endpoint, 'head');
    paths[path] = item;
  }
  // Problem and legacy error schemas are referenced by every operation.
  collector.add(dtoById('ProblemDTO'), 'output');
  if (entries.some(({ endpoint }) => endpoint.errorFormat === 'legacy'))
    collector.add(dtoById('LegacyErrorResponse'), 'output');
  // DTOs not reachable from an operation (oEmbed, manifest issues…) are still published.
  for (const [schema, meta] of registeredDtos()) {
    if (!collector.components[meta.id] && !collector.components[`${meta.id}Input`]) collector.add(schema, 'output');
  }

  const sortedPaths = Object.fromEntries(Object.entries(paths).sort(([a], [b]) => a.localeCompare(b)));
  const schemas = Object.fromEntries(Object.entries(collector.components).sort(([a], [b]) => a.localeCompare(b)));
  return {
    openapi: OPENAPI_VERSION,
    info: {
      title: 'SOTF Mods API',
      version: options.version ?? '2.0.0',
      summary: 'The home of Sons of the Forest modding: mods, builds, kits, compatibility and the legacy v1 API.',
      description:
        'Public GET endpoints are cacheable and CORS-enabled (`*`, no credentials). Session endpoints use the ' +
        '`__Host-sotf_sid` cookie and are same-origin only. Errors are RFC 9457 `application/problem+json`; the legacy ' +
        '`/api/*` routes keep their `{status:false,error,message}` envelope. Only additive changes happen within v2.',
      contact: { name: 'SOTF Mods', url: 'https://sotf-mods.com/developers' },
      license: { name: 'API terms', url: 'https://sotf-mods.com/terms' },
    },
    jsonSchemaDialect: 'https://json-schema.org/draft/2020-12/schema',
    servers: (options.servers ?? DEFAULT_SERVERS).map((server) => ({ ...server })),
    tags: [...usedDomains].sort().map((name) => ({ name, description: DOMAIN_DESCRIPTIONS[name as ContractDomain] })),
    paths: sortedPaths,
    components: {
      schemas,
      securitySchemes: {
        sessionCookie: {
          type: 'apiKey',
          in: 'cookie',
          name: '__Host-sotf_sid',
          description: 'Opaque session cookie (HttpOnly)',
        },
        internalAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'X-Internal-Auth',
          description: 'Shared secret on the internal network',
        },
      },
    },
  };
}

function dtoById(id: string): z.ZodType {
  const found = registeredDtos().find(([, meta]) => meta.id === id);
  if (!found) throw new Error(`unknown DTO ${id}`);
  return found[0];
}
