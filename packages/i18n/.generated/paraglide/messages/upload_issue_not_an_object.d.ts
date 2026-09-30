export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Issue_Not_An_ObjectInputs = {};
/**
* | output |
* | --- |
* | "The JSON must be an object." |
*
* @param {Upload_Issue_Not_An_ObjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_issue_not_an_object: ((inputs?: Upload_Issue_Not_An_ObjectInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Not_An_ObjectInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
