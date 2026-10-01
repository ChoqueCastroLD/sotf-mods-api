export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Err_File_TypeInputs = {};
/**
* | output |
* | --- |
* | "Use a .log or .txt file, or a .gz or .zip that contains one." |
*
* @param {Logs_Err_File_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_err_file_type: ((inputs?: Logs_Err_File_TypeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_File_TypeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
