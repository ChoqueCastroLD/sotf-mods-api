export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Security_Change_Passkey_AddedInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A passkey was added to your account on {when} (UTC)." |
*
* @param {Emails_Auth_Security_Change_Passkey_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_security_change_passkey_added: ((inputs: Emails_Auth_Security_Change_Passkey_AddedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Passkey_AddedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
