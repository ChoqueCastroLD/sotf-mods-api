export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Reply_SubmitInputs = {};
/**
* | output |
* | --- |
* | "Post reply" |
*
* @param {Kitsocial_Reply_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_reply_submit: ((inputs?: Kitsocial_Reply_SubmitInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Reply_SubmitInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
