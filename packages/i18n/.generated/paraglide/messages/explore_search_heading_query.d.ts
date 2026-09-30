export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Search_Heading_QueryInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Results for “{query}”" |
*
* @param {Explore_Search_Heading_QueryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_search_heading_query: ((inputs: Explore_Search_Heading_QueryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Heading_QueryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
