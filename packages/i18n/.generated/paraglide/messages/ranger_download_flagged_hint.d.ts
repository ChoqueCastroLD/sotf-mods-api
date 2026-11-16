export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Download_Flagged_HintInputs = {};
/**
* | output |
* | --- |
* | "Flagged file: open it only in a sandbox or a virtual machine." |
*
* @param {Ranger_Download_Flagged_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_download_flagged_hint: ((inputs?: Ranger_Download_Flagged_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Download_Flagged_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
