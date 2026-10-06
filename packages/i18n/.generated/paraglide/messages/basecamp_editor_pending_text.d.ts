export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Editor_Pending_TextInputs = {};
/**
* | output |
* | --- |
* | "Moderators usually decide within 72 hours. You can keep improving the listing meanwhile." |
*
* @param {Basecamp_Editor_Pending_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_editor_pending_text: ((inputs?: Basecamp_Editor_Pending_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Pending_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
