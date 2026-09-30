export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Editor_Rejected_ReasonInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Reason: {reason}" |
*
* @param {Basecamp_Editor_Rejected_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_editor_rejected_reason: ((inputs: Basecamp_Editor_Rejected_ReasonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Rejected_ReasonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
