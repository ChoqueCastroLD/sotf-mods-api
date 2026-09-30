export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Empty_Unfiltered_TextInputs = {};
/**
* | output |
* | --- |
* | "Nothing has been published here yet. Check back soon." |
*
* @param {Explore_Empty_Unfiltered_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_empty_unfiltered_text: ((inputs?: Explore_Empty_Unfiltered_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Unfiltered_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
