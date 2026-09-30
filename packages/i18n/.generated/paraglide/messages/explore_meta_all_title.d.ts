export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Meta_All_TitleInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "All Sons of the Forest mods and builds ({count__number})" |
*
* @param {Explore_Meta_All_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_meta_all_title: ((inputs: Explore_Meta_All_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Meta_All_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
