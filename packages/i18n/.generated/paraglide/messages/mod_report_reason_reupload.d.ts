export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Report_Reason_ReuploadInputs = {};
/**
* | output |
* | --- |
* | "Re-upload of someone else’s work" |
*
* @param {Mod_Report_Reason_ReuploadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_report_reason_reupload: ((inputs?: Mod_Report_Reason_ReuploadInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_ReuploadInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
