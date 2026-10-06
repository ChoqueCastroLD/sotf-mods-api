export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Escalate_TextInputs = {};
/**
* | output |
* | --- |
* | "Tell the admins what they need to look at. The item stays in its queue, marked as escalated and sorted as high risk." |
*
* @param {Ranger_Escalate_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_escalate_text: ((inputs?: Ranger_Escalate_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Escalate_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
