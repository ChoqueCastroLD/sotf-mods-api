export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Manifest_MissingInputs = {};
/**
* | output |
* | --- |
* | "No manifest.json was found (at most two folders deep)." |
*
* @param {Upload_Flag_Manifest_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_manifest_missing: ((inputs?: Upload_Flag_Manifest_MissingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Manifest_MissingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
