export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Categories_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Every category of Sons of the Forest mods and builds on SOTF Mods, with what each one covers and how many items it holds." |
*
* @param {Explore_Categories_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_categories_description: ((inputs?: Explore_Categories_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Categories_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
