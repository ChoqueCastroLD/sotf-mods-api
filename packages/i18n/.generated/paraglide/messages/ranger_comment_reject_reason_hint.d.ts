export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Comment_Reject_Reason_HintInputs = {};
/**
* | output |
* | --- |
* | "Kept in the audit log." |
*
* @param {Ranger_Comment_Reject_Reason_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_comment_reject_reason_hint: ((inputs?: Ranger_Comment_Reject_Reason_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Comment_Reject_Reason_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
