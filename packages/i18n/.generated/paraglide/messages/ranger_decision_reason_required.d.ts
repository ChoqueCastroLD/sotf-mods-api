export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Decision_Reason_RequiredInputs = {};
/**
* | output |
* | --- |
* | "Write a reason (at least 3 characters)." |
*
* @param {Ranger_Decision_Reason_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_decision_reason_required: ((inputs?: Ranger_Decision_Reason_RequiredInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_Reason_RequiredInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
