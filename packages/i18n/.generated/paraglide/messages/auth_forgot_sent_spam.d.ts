export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Forgot_Sent_SpamInputs = {};
/**
* | output |
* | --- |
* | "Nothing after a few minutes? Check your spam folder or try again." |
*
* @param {Auth_Forgot_Sent_SpamInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_forgot_sent_spam: ((inputs?: Auth_Forgot_Sent_SpamInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Sent_SpamInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
