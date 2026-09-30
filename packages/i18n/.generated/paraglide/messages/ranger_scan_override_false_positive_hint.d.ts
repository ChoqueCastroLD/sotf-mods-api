export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Scan_Override_False_Positive_HintInputs = {};
/**
* | output |
* | --- |
* | "You checked the files: the detections are false positives. A version held by the scan is released." |
*
* @param {Ranger_Scan_Override_False_Positive_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_scan_override_false_positive_hint: ((inputs?: Ranger_Scan_Override_False_Positive_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_False_Positive_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
