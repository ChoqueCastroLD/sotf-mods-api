export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Description_Raw_HtmlInputs = {};
/**
* | output |
* | --- |
* | "The description contains HTML: it will show as plain text." |
*
* @param {Upload_Preflight_Description_Raw_HtmlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_description_raw_html: ((inputs?: Upload_Preflight_Description_Raw_HtmlInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Description_Raw_HtmlInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
