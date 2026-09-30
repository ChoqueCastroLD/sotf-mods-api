export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sla_OverdueInputs = {
    time: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{time} · over SLA" |
*
* @param {Ranger_Sla_OverdueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sla_overdue: ((inputs: Ranger_Sla_OverdueInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_OverdueInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
