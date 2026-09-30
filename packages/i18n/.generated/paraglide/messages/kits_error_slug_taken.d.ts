export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Error_Slug_TakenInputs = {};
/**
* | output |
* | --- |
* | "You already have a kit at this address. Pick another one." |
*
* @param {Kits_Error_Slug_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_error_slug_taken: ((inputs?: Kits_Error_Slug_TakenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_Slug_TakenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
