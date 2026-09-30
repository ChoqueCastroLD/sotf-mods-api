export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Link_Legacy_TextInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Still served; frozen routes sunset on {date}." |
*
* @param {Content_Dev_Link_Legacy_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_link_legacy_text: ((inputs: Content_Dev_Link_Legacy_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Legacy_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
