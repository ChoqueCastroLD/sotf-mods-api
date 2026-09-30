export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_Comment_PlaceholderInputs = {};
/**
* | output |
* | --- |
* | "Add details, ask a question or offer help…" |
*
* @param {Requests_Comment_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_comment_placeholder: ((inputs?: Requests_Comment_PlaceholderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_PlaceholderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
