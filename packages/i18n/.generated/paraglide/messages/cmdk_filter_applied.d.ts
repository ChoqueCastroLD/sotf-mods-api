export type LocalizedString = import('../runtime.js').LocalizedString;
export type Cmdk_Filter_AppliedInputs = {
    filter: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Filter applied: {filter}" |
*
* @param {Cmdk_Filter_AppliedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const cmdk_filter_applied: ((inputs: Cmdk_Filter_AppliedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filter_AppliedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
