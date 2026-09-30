export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Mods_DescriptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Browse {count__number} Sons of the Forest mod for RedLoader. Filter by category, compatibility and multiplayer; sorted by what survivors download this week." |
* | * | "Browse {count__number} Sons of the Forest mods for RedLoader. Filter by category, compatibility and multiplayer; sorted by what survivors download this week." |
*
* @param {Explore_Meta_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_mods_description: ((inputs: Explore_Meta_Mods_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Mods_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
