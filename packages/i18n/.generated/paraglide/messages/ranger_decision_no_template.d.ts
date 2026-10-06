export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Decision_No_TemplateInputs = {};
/**
* | output |
* | --- |
* | "No template, only my note" |
*
* @param {Ranger_Decision_No_TemplateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_decision_no_template: ((inputs?: Ranger_Decision_No_TemplateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decision_No_TemplateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
