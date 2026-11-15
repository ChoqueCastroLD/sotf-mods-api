export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Faq_Cost_QInputs = {};
/**
* | output |
* | --- |
* | "Does it cost anything?" |
*
* @param {Manager_Faq_Cost_QInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_faq_cost_q: ((inputs?: Manager_Faq_Cost_QInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Cost_QInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
