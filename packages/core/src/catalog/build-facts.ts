/**
 * Build facts and generated OG images of the public DTOs:
 *
 * - `buildMetaOf`: the blueprint facts of a build's latest version (`ModVersion.buildMeta`, written
 *   by the publishing pipeline), falling back to the legacy mirror columns of `"Mod"`
 *   (`buildGuid`, `buildShareVersion`, `numberOfElements`) for builds published by the legacy site.
 * - `buildCardFacts`: the subset shown on cards (pieces and BuildShare version).
 * - `ogImageOf`: the 1200×630 share card rendered by `og.render` (`ogImageKey` in the public bucket).
 */
import type { BuildCardFactsDTO, OgImageDTO } from '@sotf/contracts/catalog';
import { BuildMetaDTO, buildSizeClass } from '@sotf/contracts/manifest';
import type { z } from 'zod';
import { publicObjectUrl } from '../storage/keys.ts';
import type { CatalogConfig } from './media.ts';

export interface LegacyBuildColumns {
  buildGuid: string | null;
  buildShareVersion: string | null;
  numberOfElements: number | string | null;
}

/** Blueprint facts of a build (null for mods and libraries, or when nothing is known). */
export function buildMetaOf(
  kind: 'mod' | 'library' | 'build',
  stored: unknown,
  legacy: LegacyBuildColumns,
): z.infer<typeof BuildMetaDTO> | null {
  if (kind !== 'build') return null;
  const parsed = BuildMetaDTO.safeParse(stored);
  if (parsed.success) return parsed.data;
  const guid = legacy.buildGuid?.trim();
  if (!guid) return null;
  const elements = Math.max(0, Math.trunc(Number(legacy.numberOfElements ?? 0)) || 0);
  return {
    guid,
    buildshareVersion: legacy.buildShareVersion?.trim() ?? '',
    elements,
    structures: null,
    blueprintAuthor: null,
    sizeClass: buildSizeClass(elements),
  };
}

/** Pieces and BuildShare version of a build card (null for mods and libraries). */
export function buildCardFacts(
  kind: 'mod' | 'library' | 'build',
  stored: unknown,
  legacy: LegacyBuildColumns,
): z.infer<typeof BuildCardFactsDTO> | null {
  if (kind !== 'build') return null;
  const meta = buildMetaOf(kind, stored, legacy);
  if (meta) return { pieces: meta.elements, buildShareVersion: meta.buildshareVersion || null };
  const pieces =
    legacy.numberOfElements === null ? null : Math.max(0, Math.trunc(Number(legacy.numberOfElements)) || 0);
  return { pieces, buildShareVersion: legacy.buildShareVersion?.trim() || null };
}

/** The generated OG image of an entity (null until `og.render` stored its key). */
export function ogImageOf(config: CatalogConfig, key: string | null | undefined): z.infer<typeof OgImageDTO> | null {
  const clean = key?.trim();
  if (!clean) return null;
  return { url: publicObjectUrl(config.mediaBaseUrl, clean), width: 1200, height: 630 };
}
