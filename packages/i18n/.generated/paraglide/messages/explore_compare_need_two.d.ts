export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Compare_Need_TwoInputs = {};
/**
* | output |
* | --- |
* | "Choose at least two mods to compare." |
*
* @param {Explore_Compare_Need_TwoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_compare_need_two: ((inputs?: Explore_Compare_Need_TwoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Need_TwoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
