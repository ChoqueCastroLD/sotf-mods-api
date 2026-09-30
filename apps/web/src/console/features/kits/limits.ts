/**
 * Kit rules the editor needs at run time, mirrored from `@sotf/contracts/kits` so the console
 * chunk does not pull Zod and the contract schemas (the client only ships types). The type
 * assertions below fail the typecheck as soon as the contract changes.
 */
import type {
  KIT_LIMITS as CONTRACT_KIT_LIMITS,
  KIT_VISIBILITIES as CONTRACT_VISIBILITIES,
} from '@sotf/contracts/kits';

export const KIT_LIMITS = { nameMax: 80, descriptionMax: 5000, noteMax: 280, maxItems: 200, indexMinItems: 3 } as const;
export const KIT_VISIBILITIES = ['public', 'unlisted', 'private'] as const;
/** Revision summary limit of `PUT /kits/:id/items`. */
export const REVISION_SUMMARY_MAX = 200;
export const NAME_MIN = 2;

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
const limitsInSync: Equal<typeof KIT_LIMITS, typeof CONTRACT_KIT_LIMITS> = true;
const visibilitiesInSync: Equal<typeof KIT_VISIBILITIES, typeof CONTRACT_VISIBILITIES> = true;
void limitsInSync;
void visibilitiesInSync;

/** `/k/XXXXXX` of a `KIT-XXXX-XX` code (same as `kitShortPath`). */
export function kitShortPath(code: string): string {
  return `/k/${code.slice(4).replace('-', '')}`;
}
