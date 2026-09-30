export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Compare_Row_Downloads_WeekInputs = {};
/**
* | output |
* | --- |
* | "Downloads this week" |
*
* @param {Explore_Compare_Row_Downloads_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_compare_row_downloads_week: ((inputs?: Explore_Compare_Row_Downloads_WeekInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_Downloads_WeekInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
