/**
 * DTO registry: every schema that crosses the wire as a request or response body is registered
 * here with a stable id (the OpenAPI component name), a description and at least one example.
 *
 * - `pnpm --filter @sotf/contracts test` checks that every registered DTO parses its examples.
 * - The OpenAPI generator (`openapi.ts`) turns the registry into `components.schemas`.
 * - `@sotf/ui` playgrounds and tests use `examplesOf(schema)` for realistic data.
 */
import { z } from 'zod';

export interface DtoMeta {
  /** OpenAPI component name (PascalCase, unique). */
  id: string;
  description: string;
  /** Examples in *input* form (what a client sends or a server serialises). */
  examples: readonly unknown[];
}

/** Registry of every DTO (request and response bodies). */
export const dtoRegistry = z.registry<DtoMeta>();

/**
 * Wire JSON Schema for query/path helpers whose Zod input type is wider than what travels in a
 * URL (e.g. `number | "12"`). The OpenAPI generator replaces the generated schema with this one.
 */
export const wireRegistry = z.registry<{ jsonSchema: Record<string, unknown> }>();

// `z.registry` is not iterable: keep the registration order ourselves.
const registeredDtoIds = new Set<string>();
const dtoSchemas: z.ZodType[] = [];

/**
 * Registers `schema` as a DTO. Examples are type-checked against the schema input type and are
 * validated at test time.
 */
export function dto<S extends z.ZodType>(
  id: string,
  schema: S,
  meta: { description: string; examples: readonly [z.input<S>, ...z.input<S>[]] },
): S {
  if (dtoRegistry.has(schema)) throw new Error(`DTO schema registered twice (${id})`);
  if (registeredDtoIds.has(id)) throw new Error(`duplicate DTO id ${id}`);
  registeredDtoIds.add(id);
  dtoSchemas.push(schema);
  dtoRegistry.add(schema, { id, description: meta.description, examples: meta.examples });
  return schema;
}

/** Metadata of a registered DTO, or `undefined` for inline schemas. */
export function dtoMeta(schema: z.ZodType): DtoMeta | undefined {
  return dtoRegistry.get(schema);
}

/** Typed examples of a registered DTO (empty array for inline schemas). */
export function examplesOf<S extends z.ZodType>(schema: S): readonly z.input<S>[] {
  return (dtoRegistry.get(schema)?.examples ?? []) as readonly z.input<S>[];
}

/** First example of a registered DTO; throws for unregistered schemas. */
export function exampleOf<S extends z.ZodType>(schema: S): z.input<S> {
  const first = dtoRegistry.get(schema)?.examples[0];
  if (first === undefined) throw new Error('schema is not a registered DTO');
  return first as z.input<S>;
}

/** Every registered DTO as `[schema, meta]` pairs, in registration order. */
export function registeredDtos(): Array<[z.ZodType, DtoMeta]> {
  const out: Array<[z.ZodType, DtoMeta]> = [];
  for (const schema of dtoSchemas) {
    const meta = dtoRegistry.get(schema);
    if (meta) out.push([schema, meta]);
  }
  return out;
}

// -----------------------------------------------------------------------------------------------
// Wire helpers for query strings and path parameters
// -----------------------------------------------------------------------------------------------

function wire<S extends z.ZodType>(schema: S, jsonSchema: Record<string, unknown>): S {
  wireRegistry.add(schema, { jsonSchema });
  return schema;
}

const DIGITS = /^-?\d{1,15}$/;

/**
 * Integer query/path parameter. Accepts a number or a decimal string (as it arrives in a URL)
 * and outputs a number.
 */
export function wireInt(opts: { min?: number; max?: number; description?: string } = {}) {
  let out = z.number().int();
  if (opts.min !== undefined) out = out.min(opts.min);
  if (opts.max !== undefined) out = out.max(opts.max);
  const schema = z.union([z.number(), z.string().regex(DIGITS).transform(Number)]).pipe(out);
  return wire(schema, {
    type: 'integer',
    ...(opts.min !== undefined ? { minimum: opts.min } : {}),
    ...(opts.max !== undefined ? { maximum: opts.max } : {}),
    ...(opts.description ? { description: opts.description } : {}),
  });
}

/** Integer parameter with a default (the input becomes optional). */
export function wireIntDefault(def: number, opts: { min?: number; max?: number; description?: string } = {}) {
  const base = z.union([z.number(), z.string().regex(DIGITS).transform(Number)]);
  let out = z.number().int();
  if (opts.min !== undefined) out = out.min(opts.min);
  if (opts.max !== undefined) out = out.max(opts.max);
  const schema = base.pipe(out).optional().default(def);
  return wire(schema, {
    type: 'integer',
    default: def,
    ...(opts.min !== undefined ? { minimum: opts.min } : {}),
    ...(opts.max !== undefined ? { maximum: opts.max } : {}),
    ...(opts.description ? { description: opts.description } : {}),
  });
}

const FLAG_VALUES = ['0', '1', 'true', 'false'] as const;

/**
 * Boolean query flag: `1`/`0` (canonical, used in SEO URLs) or `true`/`false`. Clients may pass a
 * boolean; the typed client serialises it as `1`/`0`.
 */
export function wireFlag(description?: string) {
  const schema = z.union([z.boolean(), z.enum(FLAG_VALUES).transform((v) => v === '1' || v === 'true')]).optional();
  return wire(schema, {
    type: 'string',
    enum: [...FLAG_VALUES],
    ...(description ? { description } : {}),
  });
}

/**
 * Repeatable query parameter (`?tag=a&tag=b`). Accepts a single value or an array and outputs an
 * array (deduplicated, order preserved).
 */
export function wireList<T extends z.ZodType<string, string>>(
  item: T,
  opts: { max?: number; description?: string } = {},
) {
  const max = opts.max ?? 20;
  const schema = z
    .union([item.transform((value) => [value]), z.array(item)])
    .transform((values) => [...new Set(values)])
    .refine((values) => values.length <= max, { message: `at most ${max} values` })
    .optional();
  const itemJson = z.toJSONSchema(item, { io: 'input', unrepresentable: 'any' }) as Record<string, unknown>;
  delete itemJson.$schema;
  return wire(schema, {
    type: 'array',
    items: itemJson,
    maxItems: max,
    ...(opts.description ? { description: opts.description } : {}),
  });
}

/** Look up the wire JSON Schema of a helper-built parameter. */
export function wireSchemaOf(schema: z.ZodType): Record<string, unknown> | undefined {
  return wireRegistry.get(schema)?.jsonSchema;
}
