export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Report_Target_MissingInputs = {
    type: NonNullable<unknown>;
    id: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{type} #{id} (no longer exists)" |
*
* @param {Ranger_Report_Target_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_report_target_missing: ((inputs: Ranger_Report_Target_MissingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Target_MissingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
