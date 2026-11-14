export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Empty_Query_TitleInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No modpacks match “{query}”" |
*
* @param {Modpacks_Empty_Query_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_empty_query_title: ((inputs: Modpacks_Empty_Query_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Empty_Query_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
