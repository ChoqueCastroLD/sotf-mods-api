export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Cover_Error_RejectedInputs = {};
/**
* | output |
* | --- |
* | "The image was rejected." |
*
* @param {Kits_Cover_Error_RejectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_cover_error_rejected: ((inputs?: Kits_Cover_Error_RejectedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_Error_RejectedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
