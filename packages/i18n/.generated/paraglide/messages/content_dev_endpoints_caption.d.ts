export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Endpoints_CaptionInputs = {
    domain: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Public endpoints: {domain}" |
*
* @param {Content_Dev_Endpoints_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_endpoints_caption: ((inputs: Content_Dev_Endpoints_CaptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Endpoints_CaptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
