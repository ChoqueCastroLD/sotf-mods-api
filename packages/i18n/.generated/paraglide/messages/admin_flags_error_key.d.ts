export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Flags_Error_KeyInputs = {};
/**
* | output |
* | --- |
* | "Use 1–60 letters, digits, dots, hyphens or underscores." |
*
* @param {Admin_Flags_Error_KeyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_flags_error_key: ((inputs?: Admin_Flags_Error_KeyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_Error_KeyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
