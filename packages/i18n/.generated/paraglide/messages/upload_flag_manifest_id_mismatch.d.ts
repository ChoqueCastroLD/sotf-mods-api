export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Manifest_Id_MismatchInputs = {};
/**
* | output |
* | --- |
* | "The manifest id doesn’t match this mod." |
*
* @param {Upload_Flag_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_manifest_id_mismatch: ((inputs?: Upload_Flag_Manifest_Id_MismatchInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Manifest_Id_MismatchInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
