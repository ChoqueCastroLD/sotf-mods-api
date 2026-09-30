export type LocalizedString = import('../runtime.js').LocalizedString;
export type Discovery_Hint_SimilarInputs = {};
/**
* | output |
* | --- |
* | "Mods with matching tags and category." |
*
* @param {Discovery_Hint_SimilarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const discovery_hint_similar: ((inputs?: Discovery_Hint_SimilarInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Discovery_Hint_SimilarInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
