export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Filter_UnexcludeInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Stop excluding {label}" |
*
* @param {Explore_Filter_UnexcludeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_filter_unexclude: ((inputs: Explore_Filter_UnexcludeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_UnexcludeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
