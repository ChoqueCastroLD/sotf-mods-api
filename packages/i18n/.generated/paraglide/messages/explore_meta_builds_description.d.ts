export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Builds_DescriptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} BuildShare build for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads." |
* | * | "{count__number} BuildShare builds for Sons of the Forest: bases, forts and treehouses made by the community. Free downloads." |
*
* @param {Explore_Meta_Builds_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_builds_description: ((inputs: Explore_Meta_Builds_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Builds_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
