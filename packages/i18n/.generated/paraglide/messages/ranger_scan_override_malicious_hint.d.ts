export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Scan_Override_Malicious_HintInputs = {};
/**
* | output |
* | --- |
* | "The file is harmful. The version is pulled and stays unavailable." |
*
* @param {Ranger_Scan_Override_Malicious_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_scan_override_malicious_hint: ((inputs?: Ranger_Scan_Override_Malicious_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_Malicious_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
