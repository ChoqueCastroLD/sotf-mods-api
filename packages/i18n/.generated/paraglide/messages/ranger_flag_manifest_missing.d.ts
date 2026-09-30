export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_Manifest_MissingInputs = {};
/**
* | output |
* | --- |
* | "manifest.json is missing" |
*
* @param {Ranger_Flag_Manifest_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_manifest_missing: ((inputs?: Ranger_Flag_Manifest_MissingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Manifest_MissingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
