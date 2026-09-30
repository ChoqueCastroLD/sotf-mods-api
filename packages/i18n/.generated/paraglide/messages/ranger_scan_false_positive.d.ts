export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Scan_False_PositiveInputs = {};
/**
* | output |
* | --- |
* | "Verified false positive" |
*
* @param {Ranger_Scan_False_PositiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_scan_false_positive: ((inputs?: Ranger_Scan_False_PositiveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_False_PositiveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
