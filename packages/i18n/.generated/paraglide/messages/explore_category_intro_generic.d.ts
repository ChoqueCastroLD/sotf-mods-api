export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Category_Intro_GenericInputs = {
    category: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Sons of the Forest mods in the {category} category, with ratings and direct downloads." |
*
* @param {Explore_Category_Intro_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_category_intro_generic: ((inputs: Explore_Category_Intro_GenericInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_GenericInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
