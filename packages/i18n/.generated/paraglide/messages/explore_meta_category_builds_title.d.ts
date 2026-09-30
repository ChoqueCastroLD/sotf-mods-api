export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Category_Builds_TitleInputs = {
    category: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Sons of the Forest {category} builds ({count__number})" |
*
* @param {Explore_Meta_Category_Builds_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_category_builds_title: ((inputs: Explore_Meta_Category_Builds_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Category_Builds_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
