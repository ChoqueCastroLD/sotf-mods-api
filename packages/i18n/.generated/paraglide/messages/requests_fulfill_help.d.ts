export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_Fulfill_HelpInputs = {};
/**
* | output |
* | --- |
* | "Pick one of your published mods. The request will be marked as fulfilled and will point to it." |
*
* @param {Requests_Fulfill_HelpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_fulfill_help: ((inputs?: Requests_Fulfill_HelpInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_HelpInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
