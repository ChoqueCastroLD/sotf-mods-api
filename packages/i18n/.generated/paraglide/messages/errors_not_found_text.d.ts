export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Not_Found_TextInputs = {};
/**
* | output |
* | --- |
* | "This page isn’t on our map. Something in the trees is watching — let’s get you back." |
*
* @param {Errors_Not_Found_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_not_found_text: ((inputs?: Errors_Not_Found_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
