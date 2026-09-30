export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Search_CountInputs = {
    count: NonNullable<unknown>;
    query: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No results for “{query}”" |
* | * | "one" | "{count__number} result for “{query}”" |
* | * | * | "{count__number} results for “{query}”" |
*
* @param {Explore_Search_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_search_count: ((inputs: Explore_Search_CountInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_CountInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
