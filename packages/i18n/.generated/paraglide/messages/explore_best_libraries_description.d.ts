export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Best_Libraries_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "The shared libraries Sons of the Forest mods depend on, ranked by downloads. Install them once, before the mods that need them." |
*
* @param {Explore_Best_Libraries_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_best_libraries_description: ((inputs?: Explore_Best_Libraries_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Libraries_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
