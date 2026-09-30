export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Feature_CtaInputs = {};
/**
* | output |
* | --- |
* | "Take a look" |
*
* @param {Ui_Domain_Feature_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_feature_cta: ((inputs?: Ui_Domain_Feature_CtaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Feature_CtaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
