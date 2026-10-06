/**
 * Localized labels of the moderation enums. Every status, action and reason shown in Ranger
 * Station comes from these switches over the contract enums (PLAN §7.4: the legacy «unapprove
 * said approved» bug cannot come back — one enum, one message).
 */
import { m } from '@sotf/i18n/messages';
import type {
  InspectionFlag,
  Lane,
  ModerationAction,
  ReportFilter,
  ReportReason,
  ReportStatus,
  ReportTargetType,
  Role,
  SanctionKind,
  ScanSummary,
} from './api.ts';

export function laneLabel(lane: Lane): string {
  switch (lane) {
    case 'new_mods':
      return m.ranger_lane_new_mods();
    case 'versions':
      return m.ranger_lane_versions();
    case 'post_review':
      return m.ranger_lane_post_review();
    case 'builds':
      return m.ranger_lane_builds();
    case 'reports':
      return m.ranger_lane_reports();
    case 'comments':
      return m.ranger_lane_comments();
  }
}

export function laneHint(lane: Lane): string {
  switch (lane) {
    case 'new_mods':
      return m.ranger_lane_new_mods_hint();
    case 'versions':
      return m.ranger_lane_versions_hint();
    case 'post_review':
      return m.ranger_lane_post_review_hint();
    case 'builds':
      return m.ranger_lane_builds_hint();
    case 'reports':
      return m.ranger_lane_reports_hint();
    case 'comments':
      return m.ranger_lane_comments_hint();
  }
}

export function laneEmpty(lane: Lane): string {
  switch (lane) {
    case 'reports':
      return m.ranger_lane_empty_reports();
    case 'comments':
      return m.ranger_lane_empty_comments();
    default:
      return m.ranger_lane_empty_text();
  }
}

export function actionLabel(action: ModerationAction): string {
  switch (action) {
    case 'approve':
      return m.ranger_action_approve();
    case 'reject':
      return m.ranger_action_reject();
    case 'request_changes':
      return m.ranger_action_request_changes();
    case 'unlist':
      return m.ranger_action_unlist();
    case 'remove':
      return m.ranger_action_remove();
    case 'restore':
      return m.ranger_action_restore();
  }
}

/** Label of «approve» on an active version in the post-review lanes: it only marks it reviewed. */
export function approveLabel(postReview: boolean): string {
  return postReview ? m.ranger_action_mark_reviewed() : m.ranger_action_approve();
}

/** Toast after a decision (the resulting status, never a guess). */
export function decidedMessage(action: ModerationAction, title: string): string {
  switch (action) {
    case 'approve':
      return m.ranger_decided_approve({ title });
    case 'reject':
      return m.ranger_decided_reject({ title });
    case 'request_changes':
      return m.ranger_decided_request_changes({ title });
    case 'unlist':
      return m.ranger_decided_unlist({ title });
    case 'remove':
      return m.ranger_decided_remove({ title });
    case 'restore':
      return m.ranger_decided_restore({ title });
  }
}

export function flagLabel(code: InspectionFlag['code']): string {
  switch (code) {
    case 'zip_invalid':
      return m.ranger_flag_zip_invalid();
    case 'zip_bomb_ratio':
      return m.ranger_flag_zip_bomb_ratio();
    case 'zip_too_many_entries':
      return m.ranger_flag_zip_too_many_entries();
    case 'zip_slip':
      return m.ranger_flag_zip_slip();
    case 'absolute_path':
      return m.ranger_flag_absolute_path();
    case 'manifest_missing':
      return m.ranger_flag_manifest_missing();
    case 'manifest_invalid':
      return m.ranger_flag_manifest_invalid();
    case 'manifest_id_mismatch':
      return m.ranger_flag_manifest_id_mismatch();
    case 'version_not_semver':
      return m.ranger_flag_version_not_semver();
    case 'version_not_greater':
      return m.ranger_flag_version_not_greater();
    case 'extension_not_allowed':
      return m.ranger_flag_extension_not_allowed();
    case 'extension_flagged':
      return m.ranger_flag_extension_flagged();
    case 'file_too_large':
      return m.ranger_flag_file_too_large();
    case 'blueprint_invalid':
      return m.ranger_flag_blueprint_invalid();
    case 'scan_detections':
      return m.ranger_flag_scan_detections();
  }
}

export function scanVerdictLabel(verdict: ScanSummary['verdict']): string {
  switch (verdict) {
    case 'pending':
      return m.ranger_scan_pending();
    case 'clean':
      return m.ranger_scan_clean();
    case 'suspicious':
      return m.ranger_scan_suspicious();
    case 'malicious':
      return m.ranger_scan_malicious();
    case 'unknown':
      return m.ranger_scan_unknown();
    case 'false_positive':
      return m.ranger_scan_false_positive();
  }
}

export function reportReasonLabel(reason: ReportReason): string {
  switch (reason) {
    case 'malware':
      return m.ranger_reason_malware();
    case 'broken':
      return m.ranger_reason_broken();
    case 'reupload':
      return m.ranger_reason_reupload();
    case 'nsfw_unmarked':
      return m.ranger_reason_nsfw_unmarked();
    case 'spam':
      return m.ranger_reason_spam();
    case 'harassment':
      return m.ranger_reason_harassment();
    case 'illegal':
      return m.ranger_reason_illegal();
    case 'other':
      return m.ranger_reason_other();
  }
}

export function reportTargetLabel(type: ReportTargetType): string {
  switch (type) {
    case 'mod':
      return m.ranger_target_mod();
    case 'version':
      return m.ranger_target_version();
    case 'comment':
      return m.ranger_target_comment();
    case 'review':
      return m.ranger_target_review();
    case 'user':
      return m.ranger_target_user();
    case 'kit':
      return m.ranger_target_kit();
    case 'compat_report':
      return m.ranger_target_compat_report();
    case 'request':
      return m.ranger_target_request();
    case 'request_comment':
      return m.ranger_target_request_comment();
  }
}

export function reportStatusLabel(status: ReportStatus | ReportFilter): string {
  switch (status) {
    case 'open':
      return m.ranger_report_status_open();
    case 'resolved':
      return m.ranger_report_status_resolved();
    case 'dismissed':
      return m.ranger_report_status_dismissed();
    case 'all':
      return m.ranger_report_status_all();
  }
}

export function sanctionLabel(kind: SanctionKind): string {
  switch (kind) {
    case 'suspend':
      return m.ranger_sanction_suspend();
    case 'ban':
      return m.ranger_sanction_ban();
    case 'comment_mute':
      return m.ranger_sanction_comment_mute();
    case 'upload_mute':
      return m.ranger_sanction_upload_mute();
  }
}

export function sanctionHint(kind: SanctionKind): string {
  switch (kind) {
    case 'suspend':
      return m.ranger_sanction_suspend_hint();
    case 'ban':
      return m.ranger_sanction_ban_hint();
    case 'comment_mute':
      return m.ranger_sanction_comment_mute_hint();
    case 'upload_mute':
      return m.ranger_sanction_upload_mute_hint();
  }
}

export function roleLabel(role: Role): string {
  switch (role) {
    case 'admin':
      return m.ranger_role_admin();
    case 'moderator':
      return m.ranger_role_moderator();
    default:
      return m.ranger_role_user();
  }
}
