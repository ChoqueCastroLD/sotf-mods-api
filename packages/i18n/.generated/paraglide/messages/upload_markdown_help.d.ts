export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Markdown_HelpInputs = {};
/**
* | output |
* | --- |
* | "Markdown: **bold**, _italic_, lists, `code`, > quotes, \|\|spoilers\|\|." |
*
* @param {Upload_Markdown_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_markdown_help: ((inputs?: Upload_Markdown_HelpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Markdown_HelpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
