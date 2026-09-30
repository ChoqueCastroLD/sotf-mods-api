export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Category_Intro_Builds_GenericInputs = {
    category: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Sons of the Forest builds in the {category} category: BuildShare blueprints ready to place." |
*
* @param {Explore_Category_Intro_Builds_GenericInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_category_intro_builds_generic: ((inputs: Explore_Category_Intro_Builds_GenericInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Builds_GenericInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
