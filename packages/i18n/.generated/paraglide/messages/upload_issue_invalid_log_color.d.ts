export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Issue_Invalid_Log_ColorInputs = {};
/**
* | output |
* | --- |
* | "The log colour must be a hex colour like #FF9900." |
*
* @param {Upload_Issue_Invalid_Log_ColorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_issue_invalid_log_color: ((inputs?: Upload_Issue_Invalid_Log_ColorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_Log_ColorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
