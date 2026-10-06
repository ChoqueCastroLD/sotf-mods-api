export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Libraries_DescriptionInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} library that other Sons of the Forest mods depend on. Install them before the mods that need them." |
* | * | "{count__number} libraries that other Sons of the Forest mods depend on. Install them before the mods that need them." |
*
* @param {Explore_Meta_Libraries_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_libraries_description: ((inputs: Explore_Meta_Libraries_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Libraries_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
