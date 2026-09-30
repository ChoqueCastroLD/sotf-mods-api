export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_File_Too_LargeInputs = {};
/**
* | output |
* | --- |
* | "The file is too large." |
*
* @param {Upload_Flag_File_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_file_too_large: ((inputs?: Upload_Flag_File_Too_LargeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_File_Too_LargeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
