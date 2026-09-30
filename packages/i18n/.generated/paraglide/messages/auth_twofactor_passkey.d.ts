export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Twofactor_PasskeyInputs = {};
/**
* | output |
* | --- |
* | "Use a passkey instead" |
*
* @param {Auth_Twofactor_PasskeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_twofactor_passkey: ((inputs?: Auth_Twofactor_PasskeyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Twofactor_PasskeyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
