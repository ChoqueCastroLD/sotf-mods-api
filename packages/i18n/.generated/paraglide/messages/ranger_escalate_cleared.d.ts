export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Escalate_ClearedInputs = {};
/**
* | output |
* | --- |
* | "Escalation cleared." |
*
* @param {Ranger_Escalate_ClearedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_escalate_cleared: ((inputs?: Ranger_Escalate_ClearedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_ClearedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
