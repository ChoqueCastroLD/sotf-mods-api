export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Pager_OfInputs = {
    page: NonNullable<unknown>;
    pages: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Page {page} of {pages}" |
*
* @param {Console_Pager_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_pager_of: ((inputs: Console_Pager_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
