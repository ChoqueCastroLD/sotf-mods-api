export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Empty_Filtered_TextInputs = {};
/**
* | output |
* | --- |
* | "No kit passes these filters yet. Clear them to see every kit." |
*
* @param {Kits_Empty_Filtered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_empty_filtered_text: ((inputs?: Kits_Empty_Filtered_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Empty_Filtered_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
