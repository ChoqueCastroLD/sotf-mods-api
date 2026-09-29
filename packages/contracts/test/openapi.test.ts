/**
 * Acceptance (PLAN §12.3 WP-11): the OpenAPI generated from the contracts is valid (OpenAPI 3.1
 * validator), every Schema Object is valid JSON Schema 2020-12 and every DTO example validates
 * against its published component schema.
 */
import { Validator } from '@seriousme/openapi-schema-validator';
import { Ajv2020 } from 'ajv/dist/2020.js';
import { beforeAll, describe, expect, it } from 'vitest';
import { registeredDtos } from '../src/dto.ts';
import { buildOpenApiDocument, COMPONENT_REF_PREFIX, type OpenApiDocument } from '../src/openapi.ts';
import '../src/index.ts';

function collectRefs(node: unknown, out: string[] = []): string[] {
  if (Array.isArray(node)) for (const item of node) collectRefs(item, out);
  else if (node !== null && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      if (key === '$ref' && typeof value === 'string') out.push(value);
      else collectRefs(value, out);
    }
  }
  return out;
}

const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'patch', 'head', 'options'];

function operations(doc: OpenApiDocument): Array<{ path: string; method: string; op: Record<string, unknown> }> {
  return Object.entries(doc.paths).flatMap(([path, item]) =>
    Object.entries(item)
      .filter(([method]) => HTTP_METHODS.includes(method))
      .map(([method, op]) => ({ path, method, op: op as Record<string, unknown> })),
  );
}

describe.each([['public'], ['all']] as const)('OpenAPI document (%s)', (audience) => {
  let doc: OpenApiDocument;
  beforeAll(() => {
    doc = buildOpenApiDocument({ audience, version: 'test' });
  });

  it('is a valid OpenAPI 3.1 document', async () => {
    const validator = new Validator();
    const result = await validator.validate(structuredClone(doc));
    if (!result.valid) throw new Error(JSON.stringify(result.errors, null, 2).slice(0, 4000));
    expect(result.valid).toBe(true);
    expect(validator.version).toBe('3.1');
    expect(doc.openapi).toBe('3.1.0');
  });

  it('resolves every $ref to a component', () => {
    const refs = collectRefs(doc);
    expect(refs.length).toBeGreaterThan(100);
    for (const ref of refs) {
      expect(ref.startsWith(COMPONENT_REF_PREFIX), ref).toBe(true);
      expect(doc.components.schemas[ref.slice(COMPONENT_REF_PREFIX.length)], ref).toBeDefined();
    }
  });

  it('has unique operation ids and declares every path parameter', () => {
    const ops = operations(doc);
    const ids = ops.map(({ op }) => op.operationId);
    expect(new Set(ids).size).toBe(ids.length);
    for (const { path, op } of ops) {
      const inPath = [...path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
      const declared = ((op.parameters ?? []) as Array<{ name: string; in: string }>)
        .filter((p) => p.in === 'path')
        .map((p) => p.name);
      expect(declared.sort(), `${path}`).toEqual(inPath.sort());
    }
  });

  it('matches the audience', () => {
    const paths = Object.keys(doc.paths);
    if (audience === 'public') {
      expect(paths.some((p) => p.startsWith('/internal'))).toBe(false);
      expect(paths).not.toContain('/healthz');
    } else {
      expect(paths).toContain('/internal/downloads/resolve');
      expect(paths).toContain('/healthz');
    }
    expect(paths).toContain('/api/mods');
    expect(paths).toContain('/api/v2/mods/{id}');
  });
});

describe('OpenAPI content', () => {
  const doc = buildOpenApiDocument();

  it('marks Tier 2 legacy routes as deprecated and keeps Tier 1 current', () => {
    const get = (path: string) => (doc.paths[path]?.get ?? {}) as Record<string, unknown>;
    expect(get('/api/mods').deprecated).toBeUndefined();
    expect(get('/api/mods/{mod_id}/check').deprecated).toBeUndefined();
    expect(get('/api/stats').deprecated).toBe(true);
    expect(get('/api/mods/featured').deprecated).toBe(true);
  });

  it('documents legacy errors with the legacy envelope and v2 errors with problem+json', () => {
    const legacy = doc.paths['/api/mods/{mod_id}']?.get as {
      responses: Record<string, { content: Record<string, unknown> }>;
    };
    expect(Object.keys(legacy.responses['404']?.content ?? {})).toEqual(['application/json']);
    const v2 = doc.paths['/api/v2/mods/{id}']?.get as {
      responses: Record<string, { content: Record<string, unknown> }>;
    };
    expect(Object.keys(v2.responses['404']?.content ?? {})).toEqual(['application/problem+json']);
  });

  it('documents query parameters with their wire types', () => {
    const op = doc.paths['/api/v2/mods']?.get as {
      parameters: Array<{ name: string; schema: Record<string, unknown>; required: boolean }>;
    };
    const byName = new Map(op.parameters.map((p) => [p.name, p]));
    expect(byName.get('page')?.schema).toMatchObject({ type: 'integer', minimum: 1, default: 1 });
    expect(byName.get('tag')?.schema).toMatchObject({ type: 'array', items: { type: 'string' } });
    expect(byName.get('nsfw')?.schema).toMatchObject({ type: 'string', enum: ['0', '1', 'true', 'false'] });
    expect(byName.get('sort')?.required).toBe(false);
  });

  it('uses the session cookie security scheme on private routes only', () => {
    const me = doc.paths['/api/v2/me']?.get as { security: unknown[] };
    expect(me.security).toEqual([{ sessionCookie: [] }]);
    const mods = doc.paths['/api/v2/mods']?.get as { security: unknown[] };
    expect(mods.security).toEqual([]);
  });

  it('never forbids extra keys in response objects', () => {
    const card = doc.components.schemas.ModCardDTO as Record<string, unknown>;
    expect(card.additionalProperties).toBeUndefined();
    const body = doc.components.schemas.RegisterBody as Record<string, unknown>;
    expect(body.additionalProperties).toBe(false);
  });
});

describe('components as JSON Schema 2020-12', () => {
  const doc = buildOpenApiDocument({ audience: 'all' });
  const ajv = new Ajv2020({ strict: false, validateFormats: false, allErrors: true });
  ajv.addSchema({ $id: 'sotf-openapi', components: doc.components }, 'sotf-openapi');

  it('every component is a valid schema', () => {
    for (const [name, schema] of Object.entries(doc.components.schemas)) {
      const valid = ajv.validateSchema(schema);
      expect(valid, `${name}: ${JSON.stringify(ajv.errors)}`).toBe(true);
    }
  });

  it.each(registeredDtos().map(([schema, meta]) => [meta.id, schema, meta] as const))(
    '%s examples validate against the published component',
    (id, schema, meta) => {
      const componentName = doc.components.schemas[id] ? id : `${id}Input`;
      expect(doc.components.schemas[componentName], 'every DTO is published').toBeDefined();
      const validate = ajv.getSchema(`sotf-openapi#/components/schemas/${componentName}`);
      expect(validate).toBeDefined();
      for (const example of meta.examples) {
        // Response components describe the parsed (output) value; body components the input.
        const parsed = schema.parse(example);
        const ok = validate?.(parsed) || validate?.(example);
        expect(ok, `${id}: ${JSON.stringify(validate?.errors?.slice(0, 3))}`).toBe(true);
      }
    },
  );
});
