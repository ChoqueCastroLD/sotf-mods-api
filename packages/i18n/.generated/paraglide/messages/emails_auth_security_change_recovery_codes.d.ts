export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Security_Change_Recovery_CodesInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The recovery codes of your account were replaced on {when} (UTC). The old codes no longer work." |
*
* @param {Emails_Auth_Security_Change_Recovery_CodesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_security_change_recovery_codes: ((inputs: Emails_Auth_Security_Change_Recovery_CodesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Recovery_CodesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
