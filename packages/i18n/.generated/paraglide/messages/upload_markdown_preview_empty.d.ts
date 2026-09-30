export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Markdown_Preview_EmptyInputs = {};
/**
* | output |
* | --- |
* | "The preview appears here as you type." |
*
* @param {Upload_Markdown_Preview_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_markdown_preview_empty: ((inputs?: Upload_Markdown_Preview_EmptyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_Preview_EmptyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
