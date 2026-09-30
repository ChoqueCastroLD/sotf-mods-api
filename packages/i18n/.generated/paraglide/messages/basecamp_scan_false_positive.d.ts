export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Scan_False_PositiveInputs = {};
/**
* | output |
* | --- |
* | "False positive" |
*
* @param {Basecamp_Scan_False_PositiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_scan_false_positive: ((inputs?: Basecamp_Scan_False_PositiveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Scan_False_PositiveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
