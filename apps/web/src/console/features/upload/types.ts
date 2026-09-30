/**
 * Enumerations and types of the publishing wizard, from the contracts (single source of truth).
 */
import {
  DEDICATED_SERVER,
  DEPENDENCY_KINDS,
  LINK_KINDS,
  MOD_LICENSES,
  MULTIPLAYER_ROLES,
  PLATFORMS,
  SAFE_TO_REMOVE,
  VERSION_CHANNELS,
} from '@sotf/contracts/common';
import type { DraftData, DraftDTO, PreflightItemDTO } from '@sotf/contracts/studio';

export type { DraftData, DraftDTO, PreflightItemDTO };
export {
  DEDICATED_SERVER,
  DEPENDENCY_KINDS,
  LINK_KINDS,
  MOD_LICENSES,
  MULTIPLAYER_ROLES,
  PLATFORMS,
  SAFE_TO_REMOVE,
  VERSION_CHANNELS,
};

export type Platform = (typeof PLATFORMS)[number];
export type MultiplayerRole = (typeof MULTIPLAYER_ROLES)[number];
export type DedicatedServer = (typeof DEDICATED_SERVER)[number];
export type SafeToRemove = (typeof SAFE_TO_REMOVE)[number];
export type ModLicense = (typeof MOD_LICENSES)[number];
export type LinkKind = (typeof LINK_KINDS)[number];
export type DependencyKind = (typeof DEPENDENCY_KINDS)[number];
export type VersionChannel = (typeof VERSION_CHANNELS)[number];

export type SupportLink = NonNullable<DraftData['supportLinks']>[number];
export type DraftDependency = NonNullable<DraftData['dependencies']>[number];
export type GalleryRef = NonNullable<DraftData['gallery']>[number];

/** Updates the draft data (functional, like `setState`). */
export type UpdateData = (update: (data: DraftData) => DraftData) => void;
