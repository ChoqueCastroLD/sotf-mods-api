export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Compare_Not_FoundInputs = {
    ref: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "We could not find “{ref}”." |
*
* @param {Explore_Compare_Not_FoundInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_compare_not_found: ((inputs: Explore_Compare_Not_FoundInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Not_FoundInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
