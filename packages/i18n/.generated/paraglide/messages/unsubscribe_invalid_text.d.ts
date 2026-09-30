export type LocalizedString = import('../runtime.js').LocalizedString;
export type Unsubscribe_Invalid_TextInputs = {};
/**
* | output |
* | --- |
* | "This unsubscribe link is invalid or has expired. Change your emails in Settings." |
*
* @param {Unsubscribe_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const unsubscribe_invalid_text: ((inputs?: Unsubscribe_Invalid_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Invalid_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
