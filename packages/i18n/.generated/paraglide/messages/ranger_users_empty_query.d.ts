export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Users_Empty_QueryInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Nobody matches «{query}»." |
*
* @param {Ranger_Users_Empty_QueryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_users_empty_query: ((inputs: Ranger_Users_Empty_QueryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Empty_QueryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
