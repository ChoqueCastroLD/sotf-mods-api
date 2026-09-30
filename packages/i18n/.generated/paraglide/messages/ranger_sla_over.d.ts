export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sla_OverInputs = {
    hours: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Over {hours} h" |
*
* @param {Ranger_Sla_OverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sla_over: ((inputs: Ranger_Sla_OverInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sla_OverInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
