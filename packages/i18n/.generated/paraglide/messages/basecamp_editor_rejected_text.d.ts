export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Editor_Rejected_TextInputs = {};
/**
* | output |
* | --- |
* | "The rangers asked for changes. Fix the listing and resubmit it from the Status tab." |
*
* @param {Basecamp_Editor_Rejected_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_editor_rejected_text: ((inputs?: Basecamp_Editor_Rejected_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Rejected_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
