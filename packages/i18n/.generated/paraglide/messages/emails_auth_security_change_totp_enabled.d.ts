export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Security_Change_Totp_EnabledInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Two-factor authentication with an authenticator app was turned on for your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Totp_EnabledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_security_change_totp_enabled: ((inputs: Emails_Auth_Security_Change_Totp_EnabledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Totp_EnabledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
