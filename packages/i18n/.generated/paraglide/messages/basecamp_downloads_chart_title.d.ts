export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Downloads_Chart_TitleInputs = {
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Downloads in the period: {total}" |
*
* @param {Basecamp_Downloads_Chart_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_downloads_chart_title: ((inputs: Basecamp_Downloads_Chart_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Downloads_Chart_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
