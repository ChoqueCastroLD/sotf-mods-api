export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Limits_BudgetInputs = {};
/**
* | output |
* | --- |
* | "The AI service has a daily budget. When it runs out, Kelvin still understands you: he picks the closest known order without AI until the next day." |
*
* @param {Content_Kelvin_Limits_BudgetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_limits_budget: ((inputs?: Content_Kelvin_Limits_BudgetInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_BudgetInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
