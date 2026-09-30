export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Chart_Week_OfInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Week of {date}" |
*
* @param {Basecamp_Chart_Week_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_chart_week_of: ((inputs: Basecamp_Chart_Week_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Chart_Week_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
