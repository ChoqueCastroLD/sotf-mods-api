export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_YesterdayInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Yesterday: {count}" |
*
* @param {Basecamp_Kpi_YesterdayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_yesterday: ((inputs: Basecamp_Kpi_YesterdayInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_YesterdayInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
