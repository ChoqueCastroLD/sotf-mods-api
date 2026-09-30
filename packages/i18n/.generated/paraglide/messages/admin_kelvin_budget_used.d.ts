export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kelvin_Budget_UsedInputs = {
    spent: NonNullable<unknown>;
    budget: NonNullable<unknown>;
    share: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Today: {spent} of {budget} ({share})." |
*
* @param {Admin_Kelvin_Budget_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kelvin_budget_used: ((inputs: Admin_Kelvin_Budget_UsedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Budget_UsedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
