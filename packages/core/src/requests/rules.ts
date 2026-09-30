/**
 * Pure rules of the mod request board (T2): which statuses accept votes, edits and adoption, and
 * who may close a request. No I/O.
 */
import { REQUEST_RULES, type RequestStatus } from '@sotf/contracts/requests';

export { REQUEST_RULES };

/** Statuses that still collect votes and comments from the community. */
export function isActiveStatus(status: RequestStatus): boolean {
  return status === 'open' || status === 'adopted';
}

/** A request is editable by its author until a mod fulfils it. */
export function isEditableStatus(status: RequestStatus): boolean {
  return status !== 'fulfilled';
}

/** Title with NFC normalisation and collapsed whitespace. */
export function normaliseTitle(title: string): string {
  return title.normalize('NFC').replace(/\s+/g, ' ').trim();
}
