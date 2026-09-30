export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kelvin_Budget_Alert_TextInputs = {
    share: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{share} of today’s budget is spent. Past the budget, KelvinSeek answers with its offline replies until midnight UTC." |
*
* @param {Admin_Kelvin_Budget_Alert_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kelvin_budget_alert_text: ((inputs: Admin_Kelvin_Budget_Alert_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Budget_Alert_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
