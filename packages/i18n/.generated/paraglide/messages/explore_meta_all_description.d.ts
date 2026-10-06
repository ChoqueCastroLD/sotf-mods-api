export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_All_DescriptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod, library or build for Sons of the Forest in one list. Filter and sort by category, tag, rating and more." |
* | * | "{count__number} mods, libraries and builds for Sons of the Forest in one list. Filter and sort by category, tag, rating and more." |
*
* @param {Explore_Meta_All_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_all_description: ((inputs: Explore_Meta_All_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_All_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
