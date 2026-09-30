export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Metrics_Open_Over_SlaInputs = {
    hours: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Review lanes over {hours} h" |
*
* @param {Ranger_Metrics_Open_Over_SlaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_metrics_open_over_sla: ((inputs: Ranger_Metrics_Open_Over_SlaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_Open_Over_SlaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
