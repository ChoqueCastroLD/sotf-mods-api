export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Dependency_UnknownInputs = {};
/**
* | output |
* | --- |
* | "A dependency isn’t on SOTF Mods: players will need to find it elsewhere." |
*
* @param {Upload_Preflight_Dependency_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_dependency_unknown: ((inputs?: Upload_Preflight_Dependency_UnknownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Dependency_UnknownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
