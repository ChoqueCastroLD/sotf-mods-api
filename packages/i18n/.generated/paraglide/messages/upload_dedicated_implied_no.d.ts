export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Dedicated_Implied_NoInputs = {};
/**
* | output |
* | --- |
* | "No. This mod runs only in the player’s own game." |
*
* @param {Upload_Dedicated_Implied_NoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_dedicated_implied_no: ((inputs?: Upload_Dedicated_Implied_NoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_Implied_NoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
