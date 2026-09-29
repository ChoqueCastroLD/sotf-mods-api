export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Unsupported_Media_Type_DetailInputs = {};
/**
* | output |
* | --- |
* | "We can’t accept this kind of file. Check the allowed formats and try again." |
*
* @param {Errors_Code_Unsupported_Media_Type_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_unsupported_media_type_detail: ((inputs?: Errors_Code_Unsupported_Media_Type_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unsupported_Media_Type_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
