export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Traffic_Breakdowns_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Page views of the period grouped by page type, source, country, language, device and session." |
*
* @param {Admin_Traffic_Breakdowns_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_traffic_breakdowns_description: ((inputs?: Admin_Traffic_Breakdowns_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Breakdowns_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
