export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Issue_Invalid_PlatformInputs = {};
/**
* | output |
* | --- |
* | "The platform must be Client, Server or Universal." |
*
* @param {Upload_Issue_Invalid_PlatformInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_issue_invalid_platform: ((inputs?: Upload_Issue_Invalid_PlatformInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_PlatformInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
