export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Range_InvalidInputs = {};
/**
* | output |
* | --- |
* | "The start date must not be after the end date, and the end date must not be in the future." |
*
* @param {Basecamp_Range_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_range_invalid: ((inputs?: Basecamp_Range_InvalidInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Range_InvalidInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
