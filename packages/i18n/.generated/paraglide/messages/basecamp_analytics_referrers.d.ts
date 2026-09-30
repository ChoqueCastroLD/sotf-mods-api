export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Analytics_ReferrersInputs = {};
/**
* | output |
* | --- |
* | "Visits by source" |
*
* @param {Basecamp_Analytics_ReferrersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_analytics_referrers: ((inputs?: Basecamp_Analytics_ReferrersInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_ReferrersInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
