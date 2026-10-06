/**
 * Localized labels of the publishing wizard that depend on codes sent by the API (preflight rows,
 * inspection flags, manifest issues) or on enums. Static references to every message keep
 * Paraglide's per-message tree shaking (no `m[key]` lookups).
 *
 * The API names preflight rows `studio_preflight_<code>`; the wizard owns the texts in its
 * `upload` namespace (`upload_preflight_<code>`), see docs/backlog/WP-74.md.
 */

import { ut } from './i18n.ts';
import type { UploadFailure } from './lib/uploader.ts';
import type { BlockReason } from './lib/use-file-upload.ts';
import type { StepId } from './lib/wizard.ts';
import type { DedicatedServer, LinkKind, ModLicense, MultiplayerRole, Platform, SafeToRemove } from './types.ts';

type Label = () => string;

export const STEP_LABELS: Readonly<Record<StepId, Label>> = {
  file: () => ut('upload_step_file'),
  details: () => ut('upload_step_details'),
  compat: () => ut('upload_step_compat'),
  media: () => ut('upload_step_media'),
  release: () => ut('upload_step_release'),
  review: () => ut('upload_step_review'),
};

export const STEP_HINTS: Readonly<Record<StepId, Label>> = {
  file: () => ut('upload_step_file_hint'),
  details: () => ut('upload_step_details_hint'),
  compat: () => ut('upload_step_compat_hint'),
  media: () => ut('upload_step_media_hint'),
  release: () => ut('upload_step_release_hint'),
  review: () => ut('upload_step_review_hint'),
};

/** Inspection flags (`InspectionFlagCode`): shared by the local and the server inspection. */
export const FLAG_LABELS: Readonly<Record<string, Label>> = {
  zip_invalid: () => ut('upload_flag_zip_invalid'),
  zip_bomb_ratio: () => ut('upload_flag_zip_bomb_ratio'),
  zip_too_many_entries: () => ut('upload_flag_zip_too_many_entries'),
  zip_slip: () => ut('upload_flag_zip_slip'),
  absolute_path: () => ut('upload_flag_absolute_path'),
  manifest_missing: () => ut('upload_flag_manifest_missing'),
  manifest_invalid: () => ut('upload_flag_manifest_invalid'),
  manifest_id_mismatch: () => ut('upload_flag_manifest_id_mismatch'),
  version_not_semver: () => ut('upload_flag_version_not_semver'),
  version_not_greater: () => ut('upload_flag_version_not_greater'),
  extension_not_allowed: () => ut('upload_flag_extension_not_allowed'),
  extension_flagged: () => ut('upload_flag_extension_flagged'),
  file_too_large: () => ut('upload_flag_file_too_large'),
  blueprint_invalid: () => ut('upload_flag_blueprint_invalid'),
  scan_detections: () => ut('upload_flag_scan_detections'),
};

export function flagLabel(code: string): string {
  return FLAG_LABELS[code]?.() ?? ut('upload_flag_unknown', { code });
}

/** Manifest / blueprint issues (`ManifestIssueCode`). */
const ISSUE_LABELS: Readonly<Record<string, Label>> = {
  invalid_json: () => ut('upload_issue_invalid_json'),
  not_an_object: () => ut('upload_issue_not_an_object'),
  missing_id: () => ut('upload_issue_missing_id'),
  invalid_id: () => ut('upload_issue_invalid_id'),
  missing_version: () => ut('upload_issue_missing_version'),
  invalid_version: () => ut('upload_issue_invalid_version'),
  invalid_type: () => ut('upload_issue_invalid_type'),
  invalid_platform: () => ut('upload_issue_invalid_platform'),
  invalid_dependencies: () => ut('upload_issue_invalid_dependencies'),
  invalid_log_color: () => ut('upload_issue_invalid_log_color'),
  invalid_url: () => ut('upload_issue_invalid_url'),
  invalid_priority: () => ut('upload_issue_invalid_priority'),
  missing_guid: () => ut('upload_issue_missing_guid'),
  missing_name: () => ut('upload_issue_missing_name'),
  missing_description: () => ut('upload_issue_missing_description'),
  invalid_number_of_elements: () => ut('upload_issue_invalid_number_of_elements'),
  invalid_data: () => ut('upload_issue_invalid_data'),
  invalid_thumbnail: () => ut('upload_issue_invalid_thumbnail'),
};

export function issueLabel(code: string, field: string): string {
  if (code === 'invalid_field') return ut('upload_issue_invalid_field', { field: field || '-' });
  return ISSUE_LABELS[code]?.() ?? ut('upload_issue_invalid_field', { field: field || '-' });
}

/** Preflight rows (`PreflightItemDTO.code`: flag codes and listing checks). */
const PREFLIGHT_LABELS: Readonly<Record<string, Label>> = {
  file_missing: () => ut('upload_preflight_file_missing'),
  file_inspecting: () => ut('upload_preflight_file_inspecting'),
  file_failed: () => ut('upload_preflight_file_failed'),
  file_expired: () => ut('upload_preflight_file_expired'),
  file_flagged: () => ut('upload_preflight_file_flagged'),
  file_ok: () => ut('upload_preflight_file_ok'),
  manifest_id_taken: () => ut('upload_preflight_manifest_id_taken'),
  name_ok: () => ut('upload_preflight_name_ok'),
  name_missing: () => ut('upload_preflight_name_missing'),
  slug_invalid: () => ut('upload_preflight_slug_invalid'),
  slug_taken: () => ut('upload_preflight_slug_taken'),
  slug_ok: () => ut('upload_preflight_slug_ok'),
  short_description_ok: () => ut('upload_preflight_short_description_ok'),
  short_description_missing: () => ut('upload_preflight_short_description_missing'),
  category_missing: () => ut('upload_preflight_category_missing'),
  category_invalid: () => ut('upload_preflight_category_invalid'),
  category_ok: () => ut('upload_preflight_category_ok'),
  tags_unknown: () => ut('upload_preflight_tags_unknown'),
  tags_ok: () => ut('upload_preflight_tags_ok'),
  tags_missing: () => ut('upload_preflight_tags_missing'),
  description_ok: () => ut('upload_preflight_description_ok'),
  description_short: () => ut('upload_preflight_description_short'),
  description_raw_html: () => ut('upload_preflight_description_raw_html'),
  thumbnail_ok: () => ut('upload_preflight_thumbnail_ok'),
  thumbnail_missing: () => ut('upload_preflight_thumbnail_missing'),
  gallery_ok: () => ut('upload_preflight_gallery_ok'),
  gallery_below_3: () => ut('upload_preflight_gallery_below_3'),
  media_processing: () => ut('upload_preflight_media_processing'),
  media_invalid: () => ut('upload_preflight_media_invalid'),
  source_ok: () => ut('upload_preflight_source_ok'),
  source_missing: () => ut('upload_preflight_source_missing'),
  platform_ok: () => ut('upload_preflight_platform_ok'),
  platform_missing: () => ut('upload_preflight_platform_missing'),
  license_ok: () => ut('upload_preflight_license_ok'),
  license_missing: () => ut('upload_preflight_license_missing'),
  changelog_ok: () => ut('upload_preflight_changelog_ok'),
  changelog_missing: () => ut('upload_preflight_changelog_missing'),
  dependency_unknown: () => ut('upload_preflight_dependency_unknown'),
  dependency_cycle: () => ut('upload_preflight_dependency_cycle'),
  target_missing: () => ut('upload_preflight_target_missing'),
  target_removed: () => ut('upload_preflight_target_removed'),
};

export function preflightLabel(code: string): string {
  return PREFLIGHT_LABELS[code]?.() ?? FLAG_LABELS[code]?.() ?? ut('upload_flag_unknown', { code });
}

export function blockLabel(block: BlockReason, formatBytes: (bytes: number) => string): string {
  switch (block.code) {
    case 'wrong_type':
      return ut('upload_block_wrong_type');
    case 'too_large':
      return ut('upload_block_too_large', { max: formatBytes(block.maxBytes) });
    case 'empty':
      return ut('upload_block_empty');
    case 'unreadable':
      return ut('upload_block_unreadable');
    case 'local_problems':
      return ut('upload_block_local_problems');
    case 'manifest_id_mismatch':
      return ut('upload_block_manifest_id_mismatch', { expected: block.expected, found: block.found });
    case 'version_not_semver':
      return ut('upload_block_version_not_semver', { version: block.version });
    case 'version_exists':
      return ut('upload_block_version_exists', { version: block.version });
    case 'version_not_greater':
      return ut('upload_block_version_not_greater', { version: block.version, previous: block.previous });
  }
}

export function failureLabel(failure: UploadFailure): string {
  switch (failure) {
    case 'network':
      return ut('upload_failure_network');
    case 'expired':
      return ut('upload_failure_expired');
    case 'too_large':
      return ut('upload_failure_too_large');
    case 'unsupported':
      return ut('upload_failure_unsupported');
    case 'forbidden':
      return ut('upload_failure_forbidden');
    case 'rejected':
      return ut('upload_failure_rejected');
    case 'api':
      return ut('upload_failure_api');
  }
}

export const PLATFORM_LABELS: Readonly<Record<Platform, { title: Label; description: Label }>> = {
  Client: { title: () => ut('upload_platform_client'), description: () => ut('upload_platform_client_hint') },
  Server: { title: () => ut('upload_platform_server'), description: () => ut('upload_platform_server_hint') },
  Universal: { title: () => ut('upload_platform_universal'), description: () => ut('upload_platform_universal_hint') },
};

export const MULTIPLAYER_LABELS: Readonly<Record<MultiplayerRole, { title: Label; description: Label }>> = {
  singleplayer_only: {
    title: () => ut('upload_multiplayer_singleplayer_only'),
    description: () => ut('upload_multiplayer_singleplayer_only_hint'),
  },
  client_side: {
    title: () => ut('upload_multiplayer_client_side'),
    description: () => ut('upload_multiplayer_client_side_hint'),
  },
  host_only: {
    title: () => ut('upload_multiplayer_host_only'),
    description: () => ut('upload_multiplayer_host_only_hint'),
  },
  all_players: {
    title: () => ut('upload_multiplayer_all_players'),
    description: () => ut('upload_multiplayer_all_players_hint'),
  },
  unknown: { title: () => ut('upload_multiplayer_unknown'), description: () => ut('upload_multiplayer_unknown_hint') },
};

export const DEDICATED_LABELS: Readonly<Record<DedicatedServer, Label>> = {
  yes: () => ut('upload_dedicated_yes'),
  no: () => ut('upload_dedicated_no'),
  partial: () => ut('upload_dedicated_partial'),
  unknown: () => ut('upload_dedicated_unknown'),
};

export const SAFE_TO_REMOVE_LABELS: Readonly<Record<SafeToRemove, { title: Label; description: Label }>> = {
  yes: { title: () => ut('upload_safe_remove_yes'), description: () => ut('upload_safe_remove_yes_hint') },
  no: { title: () => ut('upload_safe_remove_no'), description: () => ut('upload_safe_remove_no_hint') },
  unknown: { title: () => ut('upload_safe_remove_unknown'), description: () => ut('upload_safe_remove_unknown_hint') },
};

export const LICENSE_LABELS: Readonly<Record<ModLicense, Label>> = {
  'all-rights-reserved': () => ut('upload_license_all_rights_reserved'),
  'reupload-with-credit': () => ut('upload_license_reupload_with_credit'),
  mit: () => ut('upload_license_mit'),
  'gpl-3.0': () => ut('upload_license_gpl3'),
  'cc-by-4.0': () => ut('upload_license_cc_by4'),
  other: () => ut('upload_license_other'),
};

export const LINK_KIND_LABELS: Readonly<Record<LinkKind, Label>> = {
  website: () => ut('upload_link_website'),
  github: () => ut('upload_link_github'),
  youtube: () => ut('upload_link_youtube'),
  twitch: () => ut('upload_link_twitch'),
  discord: () => ut('upload_link_discord'),
  kofi: () => ut('upload_link_kofi'),
  patreon: () => ut('upload_link_patreon'),
  other: () => ut('upload_link_other'),
};

export const DEPENDENCY_KIND_LABELS = {
  required: () => ut('upload_dependency_required'),
  optional: () => ut('upload_dependency_optional'),
  conflicts: () => ut('upload_dependency_conflicts'),
} as const;
