export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Template_Nsfw_UnmarkedInputs = {};
/**
* | output |
* | --- |
* | "The mod contains adult content: please mark it as NSFW." |
*
* @param {Signals_Template_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_template_nsfw_unmarked: ((inputs?: Signals_Template_Nsfw_UnmarkedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Nsfw_UnmarkedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
