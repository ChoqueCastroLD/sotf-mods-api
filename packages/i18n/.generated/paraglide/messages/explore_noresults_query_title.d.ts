export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Noresults_Query_TitleInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No results for “{query}”" |
*
* @param {Explore_Noresults_Query_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_noresults_query_title: ((inputs: Explore_Noresults_Query_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Noresults_Query_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
