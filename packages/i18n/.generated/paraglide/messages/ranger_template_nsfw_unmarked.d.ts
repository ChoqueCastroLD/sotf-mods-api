export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Template_Nsfw_UnmarkedInputs = {};
/**
* | output |
* | --- |
* | "The mod contains adult content: please mark it as NSFW." |
*
* @param {Ranger_Template_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_template_nsfw_unmarked: ((inputs?: Ranger_Template_Nsfw_UnmarkedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Nsfw_UnmarkedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
