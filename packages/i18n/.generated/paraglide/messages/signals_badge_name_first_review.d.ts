export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Badge_Name_First_ReviewInputs = {};
/**
* | output |
* | --- |
* | "First Review" |
*
* @param {Signals_Badge_Name_First_ReviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_badge_name_first_review: ((inputs?: Signals_Badge_Name_First_ReviewInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_First_ReviewInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
