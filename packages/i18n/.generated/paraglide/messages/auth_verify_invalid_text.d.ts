export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Verify_Invalid_TextInputs = {};
/**
* | output |
* | --- |
* | "Verification links work once and expire after 24 hours. Ask for a new one." |
*
* @param {Auth_Verify_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_verify_invalid_text: ((inputs?: Auth_Verify_Invalid_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Invalid_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
