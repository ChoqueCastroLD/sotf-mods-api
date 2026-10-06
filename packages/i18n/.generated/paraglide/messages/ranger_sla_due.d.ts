export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sla_DueInputs = {
    time: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{time} · due soon" |
*
* @param {Ranger_Sla_DueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sla_due: ((inputs: Ranger_Sla_DueInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_DueInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
