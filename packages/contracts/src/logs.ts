/**
 * Share logs: a player pastes or uploads a game log (RedLoader/BepInEx, `Player.log`, dedicated
 * server), the API redacts personal data, stores the compressed text for 24 hours and answers an
 * unguessable link. The viewer shows the log organised (levels, sources, mods, top errors).
 *
 * Guests pass Turnstile; signed-in members do not. The creator gets a one-time `deleteToken` to
 * delete the log before it expires. After the expiry (or a deletion, or reports) the link answers
 * `410 GONE` for 30 days and `404` afterwards.
 */
import { z } from 'zod';
import { TurnstileToken } from './auth.ts';
import { cache } from './cache.ts';
import { Count, EntityId, IsoDateTime, SitePath } from './common.ts';
import { dto } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';
import { LOG_KINDS, LOG_LEVELS } from './log-parser.ts';

export const LOG_RULES = {
  /** Largest log (redaction and storage work on the UTF-8 bytes of the text). */
  maxBytes: 5 * 1024 * 1024,
  titleMax: 80,
  /** Lifetime of a shared log. */
  ttlHours: 24,
  /** Reports that hide a log until a moderator looks at it. */
  reportsToHide: 3,
  idLength: 24,
} as const;

/** `AbCdEf…` base64url, 24 characters = 144 random bits. */
export const LogId = z
  .string()
  .length(LOG_RULES.idLength)
  .regex(/^[A-Za-z0-9_-]+$/, 'not a log id');

export const LogKind = z.enum(LOG_KINDS);
export const LogLevelName = z.enum(LOG_LEVELS);

export const LogRedactionsDTO = dto(
  'LogRedactionsDTO',
  z.object({
    paths: Count,
    steamIds: Count,
    ips: Count,
    emails: Count,
    secrets: Count,
    total: Count,
  }),
  {
    description: 'How many values of each kind were hidden before the log was saved.',
    examples: [{ paths: 4, steamIds: 1, ips: 2, emails: 1, secrets: 1, total: 9 }],
  },
);

export const LogModDTO = dto(
  'LogModDTO',
  z.object({
    name: z.string().max(80),
    version: z.string().max(40).nullable(),
    author: z.string().max(80).nullable(),
    line: z.number().int().positive(),
    mod: z
      .object({ id: EntityId, name: z.string(), canonicalPath: SitePath })
      .nullable()
      .describe('The catalog mod with the same name or manifest id'),
  }),
  {
    description: 'A mod found in the loader output, linked to its page when it is in the catalog.',
    examples: [
      {
        name: 'AmmoUi',
        version: '1.3.0',
        author: 'ImAxel',
        line: 12,
        mod: { id: 20, name: 'AmmoUi', canonicalPath: '/mods/imaxel/ammoui' },
      },
    ],
  },
);

export const LogSummaryDTO = dto(
  'LogSummaryDTO',
  z.object({
    kind: LogKind,
    gameVersion: z.string().nullable(),
    loaderName: z.string().nullable(),
    loaderVersion: z.string().nullable(),
    unityVersion: z.string().nullable(),
    mods: z.array(LogModDTO),
    counts: z.object({
      lines: Count,
      fatal: Count,
      error: Count,
      warning: Count,
      info: Count,
      debug: Count,
    }),
    topErrors: z.array(
      z.object({
        message: z.string(),
        count: Count,
        line: z.number().int().positive(),
        level: z.enum(['fatal', 'error']),
      }),
    ),
    firstErrorLine: z.number().int().positive().nullable(),
    firstTime: z.string().nullable(),
    lastTime: z.string().nullable(),
  }),
  {
    description: 'What the parser found in the log: versions, mods, level counts and the top distinct errors.',
    examples: [
      {
        kind: 'redloader',
        gameVersion: '1.1.4.2',
        loaderName: 'RedLoader',
        loaderVersion: '1.4.2',
        unityVersion: '2022.3.62f1',
        mods: [],
        counts: { lines: 155, fatal: 1, error: 15, warning: 18, info: 100, debug: 21 },
        topErrors: [{ message: 'MissingReferenceException: …', count: 9, line: 80, level: 'error' }],
        firstErrorLine: 60,
        firstTime: '14:02:09.203',
        lastTime: '14:05:41.020',
      },
    ],
  },
);
export type LogSummaryDTO = z.infer<typeof LogSummaryDTO>;

export const LogDTO = dto(
  'LogDTO',
  z.object({
    id: LogId,
    title: z.string().nullable(),
    kind: LogKind,
    createdAt: IsoDateTime,
    expiresAt: IsoDateTime,
    sizeBytes: Count,
    lineCount: Count,
    redactions: LogRedactionsDTO,
    summary: LogSummaryDTO,
    isOwner: z.boolean().describe('The signed-in viewer created this log (may delete it)'),
  }),
  {
    description: 'A shared log without its text (the text comes from `logs.raw`).',
    examples: [
      {
        id: 'k3Jf9xQ0mZpT2vLwYb8RaHdE',
        title: 'Crash after loading a save',
        kind: 'redloader',
        createdAt: '2026-10-01T12:00:00.000Z',
        expiresAt: '2026-10-02T12:00:00.000Z',
        sizeBytes: 15_320,
        lineCount: 155,
        redactions: { paths: 4, steamIds: 1, ips: 2, emails: 1, secrets: 1, total: 9 },
        summary: {
          kind: 'redloader',
          gameVersion: '1.1.4.2',
          loaderName: 'RedLoader',
          loaderVersion: '1.4.2',
          unityVersion: '2022.3.62f1',
          mods: [],
          counts: { lines: 155, fatal: 1, error: 15, warning: 18, info: 100, debug: 21 },
          topErrors: [],
          firstErrorLine: 60,
          firstTime: '14:02:09.203',
          lastTime: '14:05:41.020',
        },
        isOwner: false,
      },
    ],
  },
);
export type LogDTO = z.infer<typeof LogDTO>;

export const CreateLogBody = dto(
  'CreateLogBody',
  z.strictObject({
    text: z.string().min(1).max(LOG_RULES.maxBytes),
    title: z.string().trim().max(LOG_RULES.titleMax).optional(),
    turnstileToken: TurnstileToken.optional().describe('Required for guests'),
  }),
  {
    description: 'The text of the log (up to 5 MB), an optional title and, for guests, the Turnstile token.',
    examples: [
      {
        text: '[14:02:09.203] [Info   :RedLoader] RedLoader 1.4.2',
        title: 'My crash',
        turnstileToken: 'XXXX.DUMMY.TOKEN.XXXX',
      },
    ],
  },
);
export type CreateLogBody = z.infer<typeof CreateLogBody>;

export const LogCreatedDTO = dto(
  'LogCreatedDTO',
  z.object({
    id: LogId,
    path: SitePath,
    deleteToken: z.string().min(16).max(64).describe('Shown once: deletes the log before it expires'),
    expiresAt: IsoDateTime,
    kind: LogKind,
    lineCount: Count,
    sizeBytes: Count,
    redactions: LogRedactionsDTO,
  }),
  {
    description: 'A log that was just saved.',
    examples: [
      {
        id: 'k3Jf9xQ0mZpT2vLwYb8RaHdE',
        path: '/logs/k3Jf9xQ0mZpT2vLwYb8RaHdE',
        deleteToken: 'r4nd0mD3l3t3T0k3nr4nd0m',
        expiresAt: '2026-10-02T12:00:00.000Z',
        kind: 'redloader',
        lineCount: 155,
        sizeBytes: 15_320,
        redactions: { paths: 4, steamIds: 1, ips: 2, emails: 1, secrets: 1, total: 9 },
      },
    ],
  },
);
export type LogCreatedDTO = z.infer<typeof LogCreatedDTO>;

export const LOG_REPORT_REASONS = ['personal_data', 'abuse', 'malware', 'other'] as const;

export const ReportLogBody = dto(
  'ReportLogBody',
  z.strictObject({ reason: z.enum(LOG_REPORT_REASONS), note: z.string().trim().max(500).optional() }),
  { description: 'Abuse report of a shared log.', examples: [{ reason: 'personal_data', note: 'Shows my address' }] },
);

const base = `${API_V2_PREFIX}/logs`;
const idParams = z.object({ id: LogId });

export const logsEndpoints = {
  create: defineEndpoint({
    id: 'logs.create',
    owner: 'WP-LOGS',
    method: 'POST',
    path: base,
    summary: 'Share a log (deleted after 24 hours)',
    description:
      'Redacts paths, Steam ids, IPs, e-mails and secrets, parses the log and stores it compressed for 24 hours. Guests pass Turnstile.',
    auth: 'public',
    requires: ['turnstile'],
    body: CreateLogBody,
    status: 201,
    response: LogCreatedDTO,
    errors: ['TURNSTILE_REQUIRED', 'PAYLOAD_TOO_LARGE', 'VALIDATION_FAILED', 'UNAVAILABLE'],
    cache: cache.noStore,
    rateLimit: 'logsCreate',
  }),
  get: defineEndpoint({
    id: 'logs.get',
    owner: 'WP-LOGS',
    method: 'GET',
    path: `${base}/:id`,
    summary: 'A shared log (summary, mods and counts)',
    auth: 'public',
    params: idParams,
    response: LogDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'logsRead',
  }),
  raw: defineEndpoint({
    id: 'logs.raw',
    owner: 'WP-LOGS',
    method: 'GET',
    path: `${base}/:id/raw`,
    summary: 'The redacted text of a shared log',
    auth: 'public',
    params: idParams,
    query: z.object({ download: z.enum(['1']).optional() }),
    responseKind: 'text',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'logsRead',
  }),
  delete: defineEndpoint({
    id: 'logs.delete',
    owner: 'WP-LOGS',
    method: 'DELETE',
    path: `${base}/:id`,
    summary: 'Delete a shared log now',
    description: 'With the `deleteToken` of the creation or as the signed-in creator.',
    auth: 'public',
    params: idParams,
    query: z.object({ token: z.string().min(16).max(64).optional() }),
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'GONE', 'FORBIDDEN'],
    cache: cache.noStore,
    rateLimit: 'logsRead',
  }),
  report: defineEndpoint({
    id: 'logs.report',
    owner: 'WP-LOGS',
    method: 'POST',
    path: `${base}/:id/report`,
    summary: 'Report a shared log',
    auth: 'public',
    params: idParams,
    body: ReportLogBody,
    responseKind: 'empty',
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.noStore,
    rateLimit: 'reports',
  }),
} as const;
