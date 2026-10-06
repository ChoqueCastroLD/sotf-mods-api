export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Auth_Password_Changed_PreviewInputs = {};
/**
* | output |
* | --- |
* | "If this wasn’t you, secure your account." |
*
* @param {Emails_Auth_Password_Changed_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_auth_password_changed_preview: ((inputs?: Emails_Auth_Password_Changed_PreviewInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Password_Changed_PreviewInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
