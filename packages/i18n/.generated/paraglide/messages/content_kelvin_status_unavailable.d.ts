export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Status_UnavailableInputs = {};
/**
* | output |
* | --- |
* | "We couldn’t load the mod’s current status. The mod page has the latest version." |
*
* @param {Content_Kelvin_Status_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_status_unavailable: ((inputs?: Content_Kelvin_Status_UnavailableInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_UnavailableInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
