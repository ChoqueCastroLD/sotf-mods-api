export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Autosave_LimitInputs = {};
/**
* | output |
* | --- |
* | "Draft limit reached: delete a draft to save this one." |
*
* @param {Upload_Autosave_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_autosave_limit: ((inputs?: Upload_Autosave_LimitInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_LimitInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
