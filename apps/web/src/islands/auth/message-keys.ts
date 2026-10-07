/**
 * Which messages each auth island needs (see `i18n.tsx`). The page renders exactly these keys
 * in the request locale; a unit test scans the islands' sources and fails if one uses a key that
 * is not listed for it.
 */

/** Keys every island uses (alerts, API problems, the `@sotf/ui` primitives). */
export const BASE_KEYS = [
  'errors_network_title',
  'errors_network_detail',
  'errors_reference',
  'errors_code_validation_failed_title',
  'errors_code_validation_failed_detail',
  'errors_code_unauthenticated_title',
  'errors_code_unauthenticated_detail',
  'errors_code_invalid_credentials_title',
  'errors_code_invalid_credentials_detail',
  'errors_code_forbidden_title',
  'errors_code_forbidden_detail',
  'errors_code_email_not_verified_title',
  'errors_code_email_not_verified_detail',
  'errors_code_not_found_title',
  'errors_code_not_found_detail',
  'errors_code_gone_title',
  'errors_code_gone_detail',
  'errors_code_conflict_title',
  'errors_code_conflict_detail',
  'errors_code_unsupported_media_type_title',
  'errors_code_unsupported_media_type_detail',
  'errors_code_rate_limited_title',
  'errors_code_rate_limited_detail',
  'errors_code_turnstile_required_title',
  'errors_code_turnstile_required_detail',
  'errors_code_suspended_title',
  'errors_code_suspended_detail',
  'errors_code_internal_title',
  'errors_code_internal_detail',
  'errors_code_unavailable_title',
  'errors_code_unavailable_detail',
  'errors_code_unknown_title',
  'errors_code_unknown_detail',
  'auth_error_turnstile_failed',
  'auth_rate_limited',
  'auth_rate_limited_submit',
  'ui_close',
  'ui_notifications',
  'ui_optional',
  'ui_show_password',
  'ui_hide_password',
] as const;

const PASSWORD_METER_KEYS = [
  'ui_password_strength',
  'ui_password_strength_0',
  'ui_password_strength_1',
  'ui_password_strength_2',
  'ui_password_strength_3',
  'ui_password_strength_4',
] as const;

export const LOGIN_KEYS = [
  ...BASE_KEYS,
  'auth_field_identifier',
  'auth_field_password',
  'auth_field_remember',
  'auth_error_required_identifier',
  'auth_error_required_password',
  'auth_error_invalid_value',
  'auth_login_forgot',
  'auth_login_submit',
  'auth_login_new_here',
  'auth_login_create_account',
  'auth_login_legacy_note',
  'auth_login_turnstile_hint',
  'auth_login_already_heading',
  'auth_login_already_text',
  'auth_login_already_sign_out',
  'auth_flag_registered',
  'auth_flag_reset',
  'auth_flag_verified',
  'auth_flag_expired',
  'common_action_continue',
  'auth_login_passkey',
  'auth_login_passkey_failed',
  'auth_twofactor_heading',
  'auth_twofactor_text',
  'auth_twofactor_field',
  'auth_twofactor_hint',
  'auth_twofactor_submit',
  'auth_twofactor_passkey',
  'auth_twofactor_back',
  'auth_twofactor_expired',
  'auth_twofactor_wrong',
  'oauth_discord_continue',
  'oauth_divider',
  'oauth_error_title',
  'oauth_error_cancelled',
  'oauth_error_failed',
  'oauth_error_email_unverified',
  'oauth_error_email_missing',
  'oauth_error_banned',
  'oauth_error_already_linked',
  'oauth_error_unavailable',
  'oauth_error_two_factor',
] as const;

export const REGISTER_KEYS = [
  ...BASE_KEYS,
  ...PASSWORD_METER_KEYS,
  'errors_field_required',
  'errors_field_too_short',
  'errors_field_too_long',
  'errors_field_invalid_email',
  'errors_validation_summary',
  'auth_field_display_name',
  'auth_field_display_name_hint',
  'auth_field_handle',
  'auth_field_handle_hint',
  'auth_field_handle_placeholder',
  'auth_field_email',
  'auth_field_email_hint',
  'auth_field_new_password',
  'auth_field_new_password_hint',
  'auth_field_terms',
  'auth_error_handle_format',
  'auth_error_handle_reserved',
  'auth_error_handle_taken',
  'auth_error_email_taken',
  'auth_error_email_disposable',
  'auth_error_already_registered',
  'auth_error_password_breached',
  'auth_error_terms',
  'auth_error_invalid_value',
  'auth_register_submit',
  'auth_register_have_account',
  'common_account_sign_in',
  'common_footer_terms',
  'common_footer_privacy',
  'common_new_tab',
  // Welcome (Welcome.tsx)
  'common_welcome',
  'common_action_continue',
  'auth_welcome_verify',
  'auth_welcome_resend',
  'auth_welcome_resent',
  'auth_verify_already',
  'ui_theme',
  'ui_theme_dark',
  'ui_theme_light',
  'ui_theme_system',
] as const;

export const FORGOT_KEYS = [
  ...BASE_KEYS,
  'errors_field_required',
  'errors_field_too_long',
  'errors_field_invalid_email',
  'auth_error_invalid_value',
  'auth_field_email',
  'auth_forgot_submit',
  'auth_forgot_sent_heading',
  'auth_forgot_sent_text',
  'auth_forgot_sent_spam',
  'auth_forgot_try_again',
  'auth_back_to_sign_in',
] as const;

export const RESET_KEYS = [
  ...BASE_KEYS,
  ...PASSWORD_METER_KEYS,
  'errors_field_required',
  'errors_field_too_short',
  'errors_field_too_long',
  'auth_error_invalid_value',
  'auth_error_password_breached',
  'auth_field_new_password',
  'auth_field_new_password_hint',
  'auth_reset_submit',
  'auth_reset_invalid_heading',
  'auth_reset_invalid_text',
  'auth_reset_request_new',
  'auth_back_to_sign_in',
] as const;

export const VERIFY_KEYS = [
  ...BASE_KEYS,
  'auth_verify_heading',
  'auth_verify_checking',
  'auth_verify_done_heading',
  'auth_verify_done_text',
  'auth_verify_invalid_heading',
  'auth_verify_invalid_text',
  'auth_verify_resend',
  'auth_verify_sign_in_to_resend',
  'auth_verify_already',
  'auth_welcome_resent',
  'common_account_sign_in',
  'common_action_continue',
  'common_action_retry',
] as const;

export const OAUTH_LINK_KEYS = [
  ...BASE_KEYS,
  'auth_field_password',
  'auth_error_required_password',
  'auth_error_invalid_value',
  'oauth_link_heading',
  'oauth_link_text',
  'oauth_link_password',
  'oauth_link_submit',
  'oauth_link_invalid_heading',
  'oauth_link_invalid_text',
  'auth_back_to_sign_in',
  'auth_login_forgot',
] as const;

export type AuthMessageKey =
  | (typeof LOGIN_KEYS)[number]
  | (typeof REGISTER_KEYS)[number]
  | (typeof FORGOT_KEYS)[number]
  | (typeof RESET_KEYS)[number]
  | (typeof VERIFY_KEYS)[number]
  | (typeof OAUTH_LINK_KEYS)[number];

/** Island → its keys (the unit test maps source files to these lists). */
export const ISLAND_KEYS = {
  LoginForm: LOGIN_KEYS,
  RegisterForm: REGISTER_KEYS,
  ForgotPasswordForm: FORGOT_KEYS,
  ResetPasswordForm: RESET_KEYS,
  VerifyEmail: VERIFY_KEYS,
  OAuthLink: OAUTH_LINK_KEYS,
} as const;

export type AuthIslandName = keyof typeof ISLAND_KEYS;

/**
 * Placeholders of parameterized messages. `string` arguments stay `{name}` in the template;
 * `number` arguments are formatted on the client; `variants` are pre-rendered per value
 * (plurals: the forms only use these values).
 */
export const MESSAGE_PARAMS: Readonly<
  Partial<
    Record<
      AuthMessageKey,
      {
        strings?: readonly string[];
        numbers?: readonly string[];
        variants?: { name: string; values: readonly number[] };
      }
    >
  >
> = {
  errors_reference: { strings: ['id'] },
  auth_rate_limited: { numbers: ['seconds'] },
  auth_rate_limited_submit: { numbers: ['seconds'] },
  auth_login_already_text: { strings: ['name', 'handle'] },
  auth_field_handle_hint: { strings: ['url'] },
  auth_welcome_verify: { strings: ['email'] },
  auth_forgot_sent_text: { strings: ['email'] },
  ui_password_strength: { strings: ['level'] },
  errors_field_too_short: { variants: { name: 'min', values: [2, 3, 10] } },
  errors_field_too_long: { variants: { name: 'max', values: [24, 32, 254, 256] } },
  errors_validation_summary: { variants: { name: 'count', values: [1, 2, 3, 4, 5] } },
};
