export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Flag_File_Too_LargeInputs = {};
/**
* | output |
* | --- |
* | "File too large" |
*
* @param {Ranger_Flag_File_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_flag_file_too_large: ((inputs?: Ranger_Flag_File_Too_LargeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Flag_File_Too_LargeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
