/**
 * Personal access tokens (PLAN §7.1 T1-08). A token is `sotfm_pat_<43 base64url chars>`, sent as
 * `Authorization: Bearer …` to the public API. It is shown once when created; only its hash is
 * stored. Scopes limit what it may do; tokens can never manage tokens, the account, sessions or
 * staff areas (those need the signed-in browser session).
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { IsoDateTime, Uuid } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

/** Prefix of every token (secret scanners and humans recognise it). */
export const PAT_PREFIX = 'sotfm_pat_';
/** Active (not revoked, not expired) tokens per account. */
export const PAT_MAX_ACTIVE = 20;

export const PAT_SCOPES = ['read', 'mods:write', 'social:write'] as const;
export const PatScope = z.enum(PAT_SCOPES);
export type PatScope = z.infer<typeof PatScope>;

/** Expiry choices offered by the console, in days (`null` = never). */
export const PAT_EXPIRY_DAYS = [7, 30, 90, 365] as const;

export const PersonalAccessTokenDTO = dto(
  'PersonalAccessTokenDTO',
  z.object({
    id: Uuid,
    name: z.string(),
    prefix: z.string().describe('First characters of the token, to recognise it in a list'),
    scopes: z.array(PatScope),
    createdAt: IsoDateTime,
    lastUsedAt: IsoDateTime.nullable(),
    expiresAt: IsoDateTime.nullable(),
  }),
  {
    description: 'A personal access token of the signed-in user (the secret is never returned again).',
    examples: [
      {
        id: '0198f4b0-7c2e-7a51-9d0e-3f1f6c2a9b10',
        name: 'GitHub Action',
        prefix: 'sotfm_pat_a1B2',
        scopes: ['read', 'mods:write'],
        createdAt: '2026-09-01T10:00:00.000Z',
        lastUsedAt: '2026-09-20T08:30:00.000Z',
        expiresAt: null,
      },
    ],
  },
);
export type PersonalAccessTokenDTO = z.infer<typeof PersonalAccessTokenDTO>;

export const PersonalAccessTokenListDTO = dto(
  'PersonalAccessTokenListDTO',
  z.object({ items: z.array(PersonalAccessTokenDTO), max: z.number().int() }),
  {
    description: 'Active personal access tokens, newest first, and the per-account limit.',
    examples: [{ items: [exampleOf(PersonalAccessTokenDTO)], max: PAT_MAX_ACTIVE }],
  },
);

export const CreatePersonalAccessTokenBody = dto(
  'CreatePersonalAccessTokenBody',
  z.strictObject({
    name: z.string().trim().min(1).max(64),
    scopes: z
      .array(PatScope)
      .min(1)
      .max(PAT_SCOPES.length)
      .refine((scopes) => new Set(scopes).size === scopes.length, 'duplicate scopes'),
    expiresInDays: z.number().int().min(1).max(365).nullable(),
    password: z.string().min(1).max(1024).describe('Current password (confirms the action)'),
  }),
  {
    description: 'Creates a token. `expiresInDays: null` never expires.',
    examples: [
      { name: 'GitHub Action', scopes: ['read', 'mods:write'], expiresInDays: 90, password: 'hunter2hunter2' },
    ],
  },
);

export const CreatedPersonalAccessTokenDTO = dto(
  'CreatedPersonalAccessTokenDTO',
  z.object({
    token: z.string().describe('The secret, shown only in this response'),
    item: PersonalAccessTokenDTO,
  }),
  {
    description: 'A newly created token with its one-time secret.',
    examples: [
      {
        token: 'sotfm_pat_a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V',
        item: exampleOf(PersonalAccessTokenDTO),
      },
    ],
  },
);

const base = `${API_V2_PREFIX}/me/tokens`;

export const tokensEndpoints = {
  list: defineEndpoint({
    id: 'tokens.list',
    owner: 'WP-30',
    method: 'GET',
    path: base,
    summary: 'List personal access tokens',
    auth: 'session',
    response: PersonalAccessTokenListDTO,
    errors: ['UNAUTHENTICATED'],
    cache: cache.noStore,
  }),
  create: defineEndpoint({
    id: 'tokens.create',
    owner: 'WP-30',
    method: 'POST',
    path: base,
    summary: 'Create a personal access token',
    description: 'Needs the browser session and the current password. The secret is returned once.',
    auth: 'verified',
    requires: ['password_confirmation'],
    body: CreatePersonalAccessTokenBody,
    status: 201,
    response: CreatedPersonalAccessTokenDTO,
    errors: ['UNAUTHENTICATED', 'EMAIL_NOT_VERIFIED', 'INVALID_CREDENTIALS', 'CONFLICT'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
  revoke: defineEndpoint({
    id: 'tokens.revoke',
    owner: 'WP-30',
    method: 'DELETE',
    path: `${base}/:id`,
    summary: 'Revoke a personal access token',
    auth: 'session',
    params: z.object({ id: Uuid }),
    responseKind: 'empty',
    errors: ['UNAUTHENTICATED', 'NOT_FOUND'],
    cache: cache.noStore,
    rateLimit: 'userWrite',
  }),
} as const;
