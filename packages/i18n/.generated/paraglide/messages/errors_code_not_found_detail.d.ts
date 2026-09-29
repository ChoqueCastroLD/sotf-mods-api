export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Not_Found_DetailInputs = {};
/**
* | output |
* | --- |
* | "We couldn’t find what you asked for. It may have been moved or deleted." |
*
* @param {Errors_Code_Not_Found_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_not_found_detail: ((inputs?: Errors_Code_Not_Found_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Not_Found_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
