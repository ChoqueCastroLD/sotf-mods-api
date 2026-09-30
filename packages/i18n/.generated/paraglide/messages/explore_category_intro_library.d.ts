export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Category_Intro_LibraryInputs = {};
/**
* | output |
* | --- |
* | "Shared code other mods depend on. Install them when a mod lists them as a requirement." |
*
* @param {Explore_Category_Intro_LibraryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_category_intro_library: ((inputs?: Explore_Category_Intro_LibraryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_LibraryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
