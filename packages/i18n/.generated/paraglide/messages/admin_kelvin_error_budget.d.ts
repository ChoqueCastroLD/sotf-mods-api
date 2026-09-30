export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kelvin_Error_BudgetInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Between 0 and {max}." |
*
* @param {Admin_Kelvin_Error_BudgetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kelvin_error_budget: ((inputs: Admin_Kelvin_Error_BudgetInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Error_BudgetInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
