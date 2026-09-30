export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Error_Required_IdentifierInputs = {};
/**
* | output |
* | --- |
* | "Enter your email or handle." |
*
* @param {Auth_Error_Required_IdentifierInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_error_required_identifier: ((inputs?: Auth_Error_Required_IdentifierInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Required_IdentifierInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
