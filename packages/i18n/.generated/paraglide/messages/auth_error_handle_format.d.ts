export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Error_Handle_FormatInputs = {};
/**
* | output |
* | --- |
* | "Use lowercase letters, numbers and single hyphens, not at the start or end." |
*
* @param {Auth_Error_Handle_FormatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_error_handle_format: ((inputs?: Auth_Error_Handle_FormatInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Error_Handle_FormatInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
