export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_Manifest_Id_MismatchInputs = {};
/**
* | output |
* | --- |
* | "Manifest id differs from the mod" |
*
* @param {Ranger_Flag_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_manifest_id_mismatch: ((inputs?: Ranger_Flag_Manifest_Id_MismatchInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_Manifest_Id_MismatchInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
