export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Rum_LegendInputs = {
    samples: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Green: good · amber: needs improvement · red: poor (Core Web Vitals thresholds). “few”: under {samples} samples, read with care." |
*
* @param {Admin_Rum_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_rum_legend: ((inputs: Admin_Rum_LegendInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_LegendInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
