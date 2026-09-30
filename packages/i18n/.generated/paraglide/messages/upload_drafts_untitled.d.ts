export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Drafts_UntitledInputs = {};
/**
* | output |
* | --- |
* | "Untitled draft" |
*
* @param {Upload_Drafts_UntitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_drafts_untitled: ((inputs?: Upload_Drafts_UntitledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_UntitledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
