/**
 * Signed-in state of the social islands: the mod page's session promise (the header's account
 * hint; guests never pay for a request). Re-exported so the three islands share one source.
 */
export type { MeSummary } from '../../../scripts/account-hint.ts';
export { whenSession } from '../../../scripts/mod/session.ts';
