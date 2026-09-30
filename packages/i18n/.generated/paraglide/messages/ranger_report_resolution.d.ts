export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Report_ResolutionInputs = {
    note: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Resolution: {note}" |
*
* @param {Ranger_Report_ResolutionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_report_resolution: ((inputs: Ranger_Report_ResolutionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_ResolutionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
