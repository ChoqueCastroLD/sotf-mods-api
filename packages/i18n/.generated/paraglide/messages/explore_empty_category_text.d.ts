export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Empty_Category_TextInputs = {};
/**
* | output |
* | --- |
* | "No mods in this category yet. Browse all mods or be the first to publish one." |
*
* @param {Explore_Empty_Category_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_empty_category_text: ((inputs?: Explore_Empty_Category_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_Category_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
