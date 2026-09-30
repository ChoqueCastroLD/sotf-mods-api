export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Compat_Report_CtaInputs = {};
/**
* | output |
* | --- |
* | "Report whether it works" |
*
* @param {Mod_Compat_Report_CtaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_compat_report_cta: ((inputs?: Mod_Compat_Report_CtaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_Report_CtaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
