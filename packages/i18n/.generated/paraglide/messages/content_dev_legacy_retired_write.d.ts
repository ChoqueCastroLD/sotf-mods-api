export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Legacy_Retired_WriteInputs = {};
/**
* | output |
* | --- |
* | "Write routes that were retired (uploads, edits, comments, votes) also answer 410 with the same envelope: status false, error GONE. Use the v2 API with a toke..." |
*
* @param {Content_Dev_Legacy_Retired_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_legacy_retired_write: ((inputs?: Content_Dev_Legacy_Retired_WriteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Retired_WriteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
