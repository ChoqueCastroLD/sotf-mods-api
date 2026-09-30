export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_All_DescriptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Everything on the island in one list: {count__number} mod, library or build for Sons of the Forest, filterable and sortable." |
* | * | "Everything on the island in one list: {count__number} mods, libraries and builds for Sons of the Forest, filterable and sortable." |
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
