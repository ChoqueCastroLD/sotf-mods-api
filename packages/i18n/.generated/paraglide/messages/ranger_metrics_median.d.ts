export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Metrics_MedianInputs = {
    days: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Median review time · {days} d" |
*
* @param {Ranger_Metrics_MedianInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_metrics_median: ((inputs: Ranger_Metrics_MedianInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_MedianInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
