export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Search_No_ResultsInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Nothing on the map for “{query}”. Try fewer words." |
*
* @param {Common_Search_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_search_no_results: ((inputs: Common_Search_No_ResultsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_No_ResultsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
