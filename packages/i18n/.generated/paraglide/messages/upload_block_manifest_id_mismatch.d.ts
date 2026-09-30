export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Block_Manifest_Id_MismatchInputs = {
    found: NonNullable<unknown>;
    expected: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "This file is a different mod: its manifest id is {found}, expected {expected}." |
*
* @param {Upload_Block_Manifest_Id_MismatchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_block_manifest_id_mismatch: ((inputs: Upload_Block_Manifest_Id_MismatchInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Block_Manifest_Id_MismatchInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
