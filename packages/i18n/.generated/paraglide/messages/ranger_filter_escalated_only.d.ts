export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Filter_Escalated_OnlyInputs = {};
/**
* | output |
* | --- |
* | "Escalated only" |
*
* @param {Ranger_Filter_Escalated_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_filter_escalated_only: ((inputs?: Ranger_Filter_Escalated_OnlyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filter_Escalated_OnlyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
