export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Metrics_MeanInputs = {
    days: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mean review time · {days} d" |
*
* @param {Ranger_Metrics_MeanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_metrics_mean: ((inputs: Ranger_Metrics_MeanInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_MeanInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
