export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Incompatibility_UnknownInputs = {};
/**
* | output |
* | --- |
* | "An incompatible mod is not on SOTF Mods. Pick mods from the search." |
*
* @param {Upload_Preflight_Incompatibility_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_incompatibility_unknown: ((inputs?: Upload_Preflight_Incompatibility_UnknownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_UnknownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
