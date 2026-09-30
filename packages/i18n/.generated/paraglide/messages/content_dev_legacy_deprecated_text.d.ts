export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Legacy_Deprecated_TextInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "These routes keep answering until {date}, then they will be retired. Their responses carry these headers:" |
*
* @param {Content_Dev_Legacy_Deprecated_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_legacy_deprecated_text: ((inputs: Content_Dev_Legacy_Deprecated_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Deprecated_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
