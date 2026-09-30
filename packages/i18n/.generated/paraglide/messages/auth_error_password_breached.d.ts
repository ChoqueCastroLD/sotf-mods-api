export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Error_Password_BreachedInputs = {};
/**
* | output |
* | --- |
* | "This password appeared in a data breach. Choose a different one." |
*
* @param {Auth_Error_Password_BreachedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_error_password_breached: ((inputs?: Auth_Error_Password_BreachedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Password_BreachedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
