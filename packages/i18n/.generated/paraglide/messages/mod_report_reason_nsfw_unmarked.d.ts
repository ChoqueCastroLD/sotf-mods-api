export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Report_Reason_Nsfw_UnmarkedInputs = {};
/**
* | output |
* | --- |
* | "Adult content not marked 18+" |
*
* @param {Mod_Report_Reason_Nsfw_UnmarkedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_report_reason_nsfw_unmarked: ((inputs?: Mod_Report_Reason_Nsfw_UnmarkedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_Nsfw_UnmarkedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
