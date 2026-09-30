/**
 * Discovery (PLAN §7.9 and the T1 tier): Scout (T1-07), the natural-language mod finder of Cmd+K,
 * and the recommendations of the mod page (T1-15).
 *
 * Scout retrieves candidates with the server search, asks the language model to pick the ones that
 * answer the question and cites **only real mods** (every citation is a catalogue card). It has a
 * daily spend cap, an answer cache and its own rate limit; when the model is not configured or the
 * cap is spent, `GET /scout/status` says `available: false` and the palette hides the mode.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import { ModCardDTO } from './catalog.ts';
import { IdParam, Locale } from './common.ts';
import { dto, exampleOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const SCOUT_QUESTION_MIN = 3;
export const SCOUT_QUESTION_MAX = 300;
/** Mods a Scout answer cites at most. */
export const SCOUT_MAX_CITATIONS = 5;
/** Mods of each recommendation list of the mod page. */
export const RECOMMENDATIONS_PER_KIND = 8;

export const ScoutStatusDTO = dto(
  'ScoutStatusDTO',
  z.object({
    available: z.boolean().describe('The model is configured, enabled and today’s spend cap is not exhausted'),
    maxQuestionLength: z.number().int().positive(),
  }),
  {
    description: 'Whether Scout can answer right now (the palette shows its mode only when true).',
    examples: [{ available: true, maxQuestionLength: SCOUT_QUESTION_MAX }],
  },
);

export const ScoutRequestDTO = dto(
  'ScoutRequestDTO',
  z.object({
    question: z.string().trim().min(SCOUT_QUESTION_MIN).max(SCOUT_QUESTION_MAX),
    locale: Locale.default('en').describe('Language of the answer'),
  }),
  {
    description: 'A question for Scout.',
    examples: [{ question: 'a mod to carry more items in my backpack', locale: 'en' }],
  },
);

export const ScoutCitationDTO = dto(
  'ScoutCitationDTO',
  z.object({
    reason: z.string().max(240).describe('One line: why this mod answers the question'),
    mod: ModCardDTO,
  }),
  {
    description: 'A real mod recommended by Scout, with the reason.',
    examples: [{ reason: 'Raises the stack size of most items.', mod: exampleOf(ModCardDTO) }],
  },
);
export type ScoutCitationDTO = z.infer<typeof ScoutCitationDTO>;

export const ScoutAnswerDTO = dto(
  'ScoutAnswerDTO',
  z.object({
    question: z.string(),
    answer: z.string().max(1200).describe('Plain text in the requested locale'),
    citations: z.array(ScoutCitationDTO).max(SCOUT_MAX_CITATIONS),
    cached: z.boolean().describe('Served from the answer cache (no model call)'),
  }),
  {
    description: 'Scout answer with citations to real mods.',
    examples: [
      {
        question: 'a mod to carry more items in my backpack',
        answer: 'StackMod raises the stack size, which is the closest to carrying more.',
        citations: [{ reason: 'Raises the stack size of most items.', mod: exampleOf(ModCardDTO) }],
        cached: false,
      },
    ],
  },
);
export type ScoutAnswerDTO = z.infer<typeof ScoutAnswerDTO>;

export const ModRecommendationsDTO = dto(
  'ModRecommendationsDTO',
  z.object({
    alsoDownloaded: z
      .array(ModCardDTO)
      .max(RECOMMENDATIONS_PER_KIND)
      .describe('Players who downloaded this mod also downloaded'),
    similar: z
      .array(ModCardDTO)
      .max(RECOMMENDATIONS_PER_KIND)
      .describe('Similar by tags and category, reinforced by co-downloads'),
  }),
  {
    description: 'Recommendations computed nightly by the worker (T1-15).',
    examples: [{ alsoDownloaded: [exampleOf(ModCardDTO)], similar: [] }],
  },
);
export type ModRecommendationsDTO = z.infer<typeof ModRecommendationsDTO>;

export const discoveryEndpoints = {
  scoutStatus: defineEndpoint({
    id: 'discovery.scoutStatus',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/scout/status`,
    summary: 'Whether Scout (AI mod finder) is available',
    auth: 'public',
    response: ScoutStatusDTO,
    cache: cache.publicApi([], 60),
    rateLimit: 'anonymousRead',
  }),
  scout: defineEndpoint({
    id: 'discovery.scout',
    owner: 'WP-33',
    method: 'POST',
    path: `${API_V2_PREFIX}/scout`,
    summary: 'Ask Scout for mods (natural language, cited answer)',
    description:
      'Search + language model. Cited mods are always real, listable catalogue entries. 503 `UNAVAILABLE` when the model is not configured or today’s spend cap is exhausted; 429 over the rate limit.',
    auth: 'public',
    body: ScoutRequestDTO,
    response: ScoutAnswerDTO,
    errors: ['UNAVAILABLE'],
    cache: cache.noStore,
    rateLimit: 'scout',
  }),
  recommendations: defineEndpoint({
    id: 'discovery.recommendations',
    owner: 'WP-33',
    method: 'GET',
    path: `${API_V2_PREFIX}/mods/:id/recommendations`,
    summary: 'Players also downloaded, and similar mods',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: ModRecommendationsDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}', 'list:mods'], 900),
    rateLimit: 'anonymousRead',
  }),
} as const;
