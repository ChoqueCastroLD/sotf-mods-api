export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Analytics_No_RatingsInputs = {};
/**
* | output |
* | --- |
* | "No reviews in this period." |
*
* @param {Basecamp_Analytics_No_RatingsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_analytics_no_ratings: ((inputs?: Basecamp_Analytics_No_RatingsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_No_RatingsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
