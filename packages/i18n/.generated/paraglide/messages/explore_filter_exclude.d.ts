export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Filter_ExcludeInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Exclude {label}" |
*
* @param {Explore_Filter_ExcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_filter_exclude: ((inputs: Explore_Filter_ExcludeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_ExcludeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
