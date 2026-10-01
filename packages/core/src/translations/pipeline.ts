/**
 * The model-facing part of the listing translation, free of any database: translating name and
 * short description of all locales in one call, and translating a masked, chunked Markdown
 * description into one locale. `translateMod` (service.ts) wires these to the budget accounting;
 * the same functions run against a real model in `docs/ops/translation-samples.md`.
 */
import type { TranslationField, TranslationLocale } from '@sotf/contracts/translations';
import type { KelvinModel, KelvinModelRequest, KelvinModelResult } from '../kelvinseek/model.ts';
import {
  chunkText,
  DESCRIPTION_SYSTEM_PROMPT,
  descriptionMaxOutputTokens,
  descriptionUserPrompt,
  LANGUAGE_NAME_OF,
  type ListingTranslation,
  type MaskedText,
  maskMarkdown,
  parseTranslations,
  stripAnswerFence,
  type TextChunk,
  TRANSLATION_SYSTEM_PROMPT,
  translationMaxOutputTokens,
  translationProblem,
  translationUserPrompt,
  unmaskText,
} from './text.ts';

/** Characters of one description chunk sent to the model. */
export const DESCRIPTION_CHUNK_CHARS = 3000;
/** Attempts per model call that fails validation or transiently. */
export const CALL_ATTEMPTS = 2;

/** A model call (budget accounting, auth handling) as `translateMod` provides it. */
export type ModelCall = (request: KelvinModelRequest) => Promise<KelvinModelResult>;

/** Errors that must end the whole run instead of being retried (budget gone, key rejected). */
export type IsFatal = (error: unknown) => boolean;

export interface PipelineSettings {
  model: string;
  timeoutMs: number;
  /** Source language code of the original text. */
  from: string;
  isFatal?: IsFatal;
  warn?: (fields: Record<string, unknown>, message: string) => void;
}

/** Name and short description of `locales` in one call; empty map when the model never answered usably. */
export async function translateListing(
  call: ModelCall,
  settings: PipelineSettings,
  input: { texts: Partial<Record<'name' | 'shortDescription', string>>; locales: readonly TranslationLocale[] },
): Promise<Map<TranslationLocale, ListingTranslation>> {
  const fields = (['name', 'shortDescription'] as const).filter((f) => input.texts[f] !== undefined);
  let parsed = new Map<TranslationLocale, ListingTranslation>();
  for (let attempt = 1; attempt <= CALL_ATTEMPTS && parsed.size === 0; attempt++) {
    let answer: KelvinModelResult;
    try {
      answer = await call({
        model: settings.model,
        system: TRANSLATION_SYSTEM_PROMPT,
        user: translationUserPrompt({ texts: input.texts, from: settings.from, locales: input.locales }),
        timeoutMs: settings.timeoutMs,
        maxOutputTokens: translationMaxOutputTokens(input.locales.length, fields as readonly TranslationField[]),
        json: true,
      });
    } catch (error) {
      if (settings.isFatal?.(error) || attempt === CALL_ATTEMPTS) throw error;
      continue;
    }
    parsed = parseTranslations(answer.text, input.locales, fields);
  }
  return parsed;
}

export interface PreparedDescription {
  masked: MaskedText;
  chunks: TextChunk[];
}

/** Masks everything that must not change and cuts the description into chunks. */
export function prepareDescription(original: string, protectedTerms: readonly string[]): PreparedDescription {
  const masked = maskMarkdown(original, protectedTerms);
  return { masked, chunks: chunkText(masked.text, DESCRIPTION_CHUNK_CHARS) };
}

async function translateChunk(
  call: ModelCall,
  settings: PipelineSettings,
  input: { locale: TranslationLocale; text: string; part: number; parts: number },
): Promise<string> {
  const { text } = input;
  // Nothing translatable (only code, links and symbols): keep it as it is.
  if (!/\p{L}/u.test(text.replace(/⟦\d+⟧/g, ''))) return text;
  let lastProblem = 'unknown';
  for (let attempt = 1; attempt <= CALL_ATTEMPTS; attempt++) {
    let answer: KelvinModelResult;
    try {
      answer = await call({
        model: settings.model,
        system: DESCRIPTION_SYSTEM_PROMPT,
        user: descriptionUserPrompt({
          text,
          language: LANGUAGE_NAME_OF[input.locale],
          from: settings.from,
          part: input.part,
          parts: input.parts,
        }),
        timeoutMs: settings.timeoutMs,
        maxOutputTokens: descriptionMaxOutputTokens(text.length),
      });
    } catch (error) {
      if (settings.isFatal?.(error) || attempt === CALL_ATTEMPTS) throw error;
      continue;
    }
    const out = stripAnswerFence(answer.text).replace(/\r\n?/g, '\n').trim();
    const problem = translationProblem(text, out);
    // A list or table reflowed by the model is cosmetic once every placeholder is intact.
    if (problem === null || (problem === 'structure' && attempt === CALL_ATTEMPTS)) return out;
    lastProblem = problem;
    settings.warn?.({ locale: input.locale, part: input.part, problem }, 'translated chunk rejected');
  }
  throw new Error(`description chunk ${input.part} (${input.locale}) failed validation: ${lastProblem}`);
}

/** The description translated into one locale, chunk by chunk, with the protected spans put back. */
export async function translateDescription(
  call: ModelCall,
  settings: PipelineSettings,
  prepared: PreparedDescription,
  locale: TranslationLocale,
): Promise<string> {
  const parts: string[] = [];
  for (const [index, chunk] of prepared.chunks.entries()) {
    const out = await translateChunk(call, settings, {
      locale,
      text: chunk.text,
      part: index + 1,
      parts: prepared.chunks.length,
    });
    parts.push(out, chunk.sep);
  }
  return unmaskText(parts.join('').trimEnd(), prepared.masked.tokens).trim();
}

export type { KelvinModel };
