export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Limits_Error_NumberInputs = {};
/**
* | output |
* | --- |
* | "Requests and seconds must be whole numbers above 0." |
*
* @param {Admin_Limits_Error_NumberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_limits_error_number: ((inputs?: Admin_Limits_Error_NumberInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_Error_NumberInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
