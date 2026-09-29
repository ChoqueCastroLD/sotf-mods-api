export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Unsupported_Media_Type_TitleInputs = {};
/**
* | output |
* | --- |
* | "File type not supported" |
*
* @param {Errors_Code_Unsupported_Media_Type_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_unsupported_media_type_title: ((inputs?: Errors_Code_Unsupported_Media_Type_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unsupported_Media_Type_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
