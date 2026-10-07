export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Reports_Filter_TargetInputs = {};
/**
* | output |
* | --- |
* | "Reported content" |
*
* @param {Ranger_Reports_Filter_TargetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_reports_filter_target: ((inputs?: Ranger_Reports_Filter_TargetInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Filter_TargetInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
