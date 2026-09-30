export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Report_ThanksInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Thanks — your report on {mod} is on the map" |
*
* @param {Me_Report_ThanksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_report_thanks: ((inputs: Me_Report_ThanksInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_ThanksInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
