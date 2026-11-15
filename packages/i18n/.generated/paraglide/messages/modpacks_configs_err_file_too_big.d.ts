export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Configs_Err_File_Too_BigInputs = {};
/**
* | output |
* | --- |
* | "A file is larger than 256 KB." |
*
* @param {Modpacks_Configs_Err_File_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_configs_err_file_too_big: ((inputs?: Modpacks_Configs_Err_File_Too_BigInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_Err_File_Too_BigInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
