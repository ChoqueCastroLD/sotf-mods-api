/**
 * The language model behind KelvinSeek (PLAN §5.5 "KelvinSeek (límites)"): OpenAI Chat Completions
 * over `fetch`, with a hard timeout, and the price table used to charge the daily budget.
 */

export interface KelvinModelRequest {
  model: string;
  system: string;
  user: string;
  timeoutMs: number;
  /** Ask for a JSON object answer (`response_format: json_object`). */
  json?: boolean;
  /** Overrides the model's default cap on the answer length. */
  maxOutputTokens?: number;
}

export interface KelvinModelResult {
  /** Raw text of the first choice. */
  text: string;
  /** Provider id of the completion (stored as `messageId`). */
  id: string;
  tokensIn: number;
  tokensOut: number;
}

/** Anything that turns a prompt into an answer (OpenAI in production, a fake in tests). */
export type KelvinModel = (request: KelvinModelRequest) => Promise<KelvinModelResult>;

export class KelvinModelError extends Error {
  override readonly name = 'KelvinModelError';
  readonly kind: 'timeout' | 'http' | 'network' | 'invalid';
  readonly status: number | undefined;
  constructor(kind: KelvinModelError['kind'], message: string, status?: number) {
    super(message);
    this.kind = kind;
    this.status = status;
  }
}

export interface OpenAiModelOptions {
  apiKey: string;
  /** Default `https://api.openai.com/v1` (tests point it at a simulated server). */
  baseUrl?: string;
  fetch?: typeof globalThis.fetch;
  /** Upper bound of the answer (the prompt asks for ≤ 40 words). */
  maxOutputTokens?: number;
}

interface ChatCompletion {
  id?: unknown;
  choices?: Array<{ message?: { content?: unknown } }>;
  usage?: { prompt_tokens?: unknown; completion_tokens?: unknown };
}

function count(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
}

/** OpenAI Chat Completions (`POST /chat/completions`), aborted after `timeoutMs`. */
export function openAiModel(options: OpenAiModelOptions): KelvinModel {
  const baseUrl = (options.baseUrl ?? 'https://api.openai.com/v1').replace(/\/+$/, '');
  const doFetch = options.fetch ?? globalThis.fetch;
  const maxOutputTokens = options.maxOutputTokens ?? 150;
  return async (request) => {
    const signal = AbortSignal.timeout(request.timeoutMs);
    let response: Response;
    try {
      response = await doFetch(`${baseUrl}/chat/completions`, {
        method: 'POST',
        headers: { authorization: `Bearer ${options.apiKey}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          model: request.model,
          messages: [
            { role: 'system', content: request.system },
            { role: 'user', content: request.user },
          ],
          max_completion_tokens: request.maxOutputTokens ?? maxOutputTokens,
          ...(request.json ? { response_format: { type: 'json_object' } } : {}),
        }),
        signal,
      });
    } catch (error) {
      if (signal.aborted) throw new KelvinModelError('timeout', `no answer within ${request.timeoutMs} ms`);
      throw new KelvinModelError('network', (error as Error).message);
    }
    let body: ChatCompletion;
    try {
      body = (await response.json()) as ChatCompletion;
    } catch (error) {
      if (signal.aborted) throw new KelvinModelError('timeout', `no answer within ${request.timeoutMs} ms`);
      throw new KelvinModelError('invalid', `unreadable body (${(error as Error).message})`, response.status);
    }
    if (!response.ok) throw new KelvinModelError('http', `status ${response.status}`, response.status);
    const text = body.choices?.[0]?.message?.content;
    if (typeof text !== 'string') throw new KelvinModelError('invalid', 'no message content', response.status);
    return {
      text,
      id: typeof body.id === 'string' ? body.id : '',
      tokensIn: count(body.usage?.prompt_tokens),
      tokensOut: count(body.usage?.completion_tokens),
    };
  };
}

/** USD per million tokens (input, output). Unknown models are charged at the highest price. */
export const KELVINSEEK_PRICES_PER_MTOK: Readonly<Record<string, readonly [number, number]>> = {
  'gpt-4o-mini': [0.15, 0.6],
  'gpt-4.1-nano': [0.1, 0.4],
  'gpt-4.1-mini': [0.4, 1.6],
  'gpt-4.1': [2, 8],
  'gpt-4o': [2.5, 10],
};

const HIGHEST_PRICE: readonly [number, number] = Object.values(KELVINSEEK_PRICES_PER_MTOK).reduce(
  (max, price) => [Math.max(max[0], price[0]), Math.max(max[1], price[1])],
  [0, 0] as readonly [number, number],
);

/** Cost of a call in micro-USD (rounded up, so the budget is never under-charged). */
export function kelvinCostMicroUsd(model: string, tokensIn: number, tokensOut: number): number {
  const [input, output] = KELVINSEEK_PRICES_PER_MTOK[model] ?? HIGHEST_PRICE;
  // USD per million tokens == micro-USD per token.
  return Math.ceil(tokensIn * input + tokensOut * output);
}
