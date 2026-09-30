export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Metrics_Within_SlaInputs = {
    hours: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Decided within {hours} h" |
*
* @param {Ranger_Metrics_Within_SlaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_metrics_within_sla: ((inputs: Ranger_Metrics_Within_SlaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Metrics_Within_SlaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
