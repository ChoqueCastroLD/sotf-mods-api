export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_Report_TitleInputs = {
    added: NonNullable<unknown>;
    updated: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "CSV: {added} new rows, {updated} suggestions replaced" |
*
* @param {Admin_Recat_Csv_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_report_title: ((inputs: Admin_Recat_Csv_Report_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Report_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
