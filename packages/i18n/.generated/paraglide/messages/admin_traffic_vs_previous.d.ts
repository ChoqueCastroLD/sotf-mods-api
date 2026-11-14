export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Traffic_Vs_PreviousInputs = {
    value: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "vs {value} before" |
*
* @param {Admin_Traffic_Vs_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_traffic_vs_previous: ((inputs: Admin_Traffic_Vs_PreviousInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Vs_PreviousInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
