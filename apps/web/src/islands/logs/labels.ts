/**
 * Text of the "Share logs" islands. The Astro pages render every key with the Paraglide messages of
 * the request locale (`components/logs/labels.ts`) and pass the dictionary as a prop, so the
 * islands ship no message catalogue. `{name}` placeholders are filled by {@link fill}.
 */
export const LOG_LABEL_KEYS = [
  // create form
  'field_text',
  'field_text_placeholder',
  'field_title',
  'field_title_placeholder',
  'drop_hint',
  'drop_active',
  'choose_file',
  'submit',
  'submitting',
  'clear',
  'size_info',
  'privacy_title',
  'privacy_text',
  'expiry_notice',
  'err_empty',
  'err_too_large',
  'err_binary',
  'err_file_type',
  'err_archive',
  'err_network',
  'err_turnstile',
  'err_rate',
  'err_busy',
  'err_generic',
  'done_title',
  'done_link',
  'done_redactions',
  'done_none',
  'done_delete_link',
  'done_delete_hint',
  'done_open',
  'done_another',
  'copy_link',
  'copied',
  'red_paths',
  'red_steam_ids',
  'red_ips',
  'red_emails',
  'red_secrets',
  // viewer
  'kind_redloader',
  'kind_bepinex',
  'kind_melonloader',
  'kind_player',
  'kind_server',
  'kind_unknown',
  'filter_all',
  'filter_errors',
  'filter_warnings',
  'filter_info',
  'filter_label',
  'search_label',
  'search_placeholder',
  'wrap',
  'jump_error',
  'no_errors',
  'download',
  'loading',
  'load_failed',
  'retry',
  'lines_shown',
  'no_matches',
  'repeated',
  'collapse',
  'copy_line',
  'copy_line_link',
  'log_region',
  'line_number',
  'delete_now',
  'delete_confirm',
  'delete_failed',
  'report',
  'report_title',
  'report_reason',
  'report_reason_personal_data',
  'report_reason_abuse',
  'report_reason_malware',
  'report_reason_other',
  'report_note',
  'report_send',
  'report_sent',
  'report_failed',
  'cancel',
  'expired_now',
  'expires_in',
] as const;

export type LogLabelKey = (typeof LOG_LABEL_KEYS)[number];
export type LogLabels = Record<LogLabelKey, string>;

/** Fills `{name}` placeholders. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, name: string) => (name in values ? String(values[name]) : whole));
}

export const MAX_LOG_BYTES = 5 * 1024 * 1024;
export const API_LOGS = '/api/v2/logs';

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(bytes < 10240 ? 1 : 0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const two = (n: number): string => String(n).padStart(2, '0');
  return `${two(h)}:${two(m)}:${two(s)}`;
}
