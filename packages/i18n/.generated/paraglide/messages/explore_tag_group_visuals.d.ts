export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Tag_Group_VisualsInputs = {};
/**
* | output |
* | --- |
* | "Visuals" |
*
* @param {Explore_Tag_Group_VisualsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_tag_group_visuals: ((inputs?: Explore_Tag_Group_VisualsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_VisualsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
