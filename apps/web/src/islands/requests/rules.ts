/**
 * `REQUEST_RULES` of @sotf/contracts as literals (the island ships no Zod). The type annotation
 * makes the build fail when the contract changes and this copy does not.
 */
import type { REQUEST_RULES } from '@sotf/contracts/requests';

export const REQUEST_LIMITS: Pick<
  typeof REQUEST_RULES,
  'titleMin' | 'titleMax' | 'bodyMax' | 'commentMax' | 'maxOpenPerUser' | 'perDay'
> = {
  titleMin: 8,
  titleMax: 140,
  bodyMax: 4000,
  commentMax: 2000,
  maxOpenPerUser: 10,
  perDay: 5,
};
