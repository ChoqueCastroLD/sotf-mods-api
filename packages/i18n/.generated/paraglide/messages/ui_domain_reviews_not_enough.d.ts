export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Reviews_Not_EnoughInputs = {};
/**
* | output |
* | --- |
* | "Not enough reviews for a score yet." |
*
* @param {Ui_Domain_Reviews_Not_EnoughInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_reviews_not_enough: ((inputs?: Ui_Domain_Reviews_Not_EnoughInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reviews_Not_EnoughInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
