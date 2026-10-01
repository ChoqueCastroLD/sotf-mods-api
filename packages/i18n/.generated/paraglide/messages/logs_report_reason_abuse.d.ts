export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Report_Reason_AbuseInputs = {};
/**
* | output |
* | --- |
* | "Abusive or illegal content" |
*
* @param {Logs_Report_Reason_AbuseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_report_reason_abuse: ((inputs?: Logs_Report_Reason_AbuseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Report_Reason_AbuseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
