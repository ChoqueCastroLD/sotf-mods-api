export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_Libraries_TitleInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Libraries for Sons of the Forest mods ({count__number})" |
*
* @param {Explore_Meta_Libraries_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_libraries_title: ((inputs: Explore_Meta_Libraries_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_Libraries_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
