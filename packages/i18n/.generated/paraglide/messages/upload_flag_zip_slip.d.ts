export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Zip_SlipInputs = {};
/**
* | output |
* | --- |
* | "A path escapes the mod folder (“..” or a link)." |
*
* @param {Upload_Flag_Zip_SlipInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_zip_slip: ((inputs?: Upload_Flag_Zip_SlipInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Zip_SlipInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
