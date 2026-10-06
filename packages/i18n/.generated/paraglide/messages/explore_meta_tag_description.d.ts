export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Tag_DescriptionInputs = {
    count: NonNullable<unknown>;
    tag: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} Sons of the Forest mod or build tagged “{tag}”, with ratings and direct downloads." |
* | * | "{count__number} Sons of the Forest mods and builds tagged “{tag}”, with ratings and direct downloads." |
*
* @param {Explore_Meta_Tag_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_tag_description: ((inputs: Explore_Meta_Tag_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Tag_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
