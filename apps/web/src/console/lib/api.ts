/**
 * Browser API client of the console (PLAN §5.1): same origin, session cookie, typed by
 * `@sotf/contracts`. The client module ships no Zod (types only), so importing it is cheap.
 *
 *   import { api } from '../lib/api.ts';
 *   const me = await api.me.get({}, { signal });
 */
import { type ApiClient, createApiClient } from '@sotf/contracts/client';

export const api: ApiClient = createApiClient({ baseUrl: '', credentials: 'same-origin' });
