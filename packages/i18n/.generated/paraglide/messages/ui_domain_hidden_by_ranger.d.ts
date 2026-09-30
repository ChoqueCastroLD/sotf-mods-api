export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Hidden_By_RangerInputs = {};
/**
* | output |
* | --- |
* | "Hidden by a ranger. Only you and the rangers can see it." |
*
* @param {Ui_Domain_Hidden_By_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_hidden_by_ranger: ((inputs?: Ui_Domain_Hidden_By_RangerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Hidden_By_RangerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
