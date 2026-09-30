export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Limits_BusyInputs = {};
/**
* | output |
* | --- |
* | "If you write too fast, Kelvin asks for a break for a few seconds. Nothing is lost." |
*
* @param {Content_Kelvin_Limits_BusyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_limits_busy: ((inputs?: Content_Kelvin_Limits_BusyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_BusyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
