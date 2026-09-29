/**
 * Ids (PLAN §2.6 "Ids"): new rows that are not legacy serials use uuid v7 generated in the app
 * (sessions, uploads, drafts, media, domain events). v7 is time-ordered, so it indexes well.
 */
import { uuidv7 } from 'uuidv7';

export function newId(): string {
  return uuidv7();
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export function isUuid(value: string): boolean {
  return UUID.test(value);
}
