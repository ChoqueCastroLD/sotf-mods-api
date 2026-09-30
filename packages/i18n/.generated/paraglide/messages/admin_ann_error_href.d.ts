export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ann_Error_HrefInputs = {};
/**
* | output |
* | --- |
* | "Use a path starting with / or an https:// address." |
*
* @param {Admin_Ann_Error_HrefInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ann_error_href: ((inputs?: Admin_Ann_Error_HrefInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Error_HrefInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
