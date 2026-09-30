export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Flag_Extension_Not_AllowedInputs = {};
/**
* | output |
* | --- |
* | "Unusual file type for a mod." |
*
* @param {Upload_Flag_Extension_Not_AllowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_flag_extension_not_allowed: ((inputs?: Upload_Flag_Extension_Not_AllowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Flag_Extension_Not_AllowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
