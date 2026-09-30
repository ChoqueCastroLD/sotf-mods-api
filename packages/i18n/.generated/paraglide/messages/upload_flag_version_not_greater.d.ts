export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Version_Not_GreaterInputs = {};
/**
* | output |
* | --- |
* | "The version isn’t greater than the latest one." |
*
* @param {Upload_Flag_Version_Not_GreaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_version_not_greater: ((inputs?: Upload_Flag_Version_Not_GreaterInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Version_Not_GreaterInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
