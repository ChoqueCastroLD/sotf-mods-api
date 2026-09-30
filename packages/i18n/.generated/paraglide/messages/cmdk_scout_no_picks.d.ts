export type LocalizedString = import('../runtime.js').LocalizedString;
export type Cmdk_Scout_No_PicksInputs = {};
/**
* | output |
* | --- |
* | "Scout found no mod that fits. Try describing it differently." |
*
* @param {Cmdk_Scout_No_PicksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const cmdk_scout_no_picks: ((inputs?: Cmdk_Scout_No_PicksInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_No_PicksInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
