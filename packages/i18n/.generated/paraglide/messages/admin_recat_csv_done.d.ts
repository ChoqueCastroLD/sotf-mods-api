export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_DoneInputs = {
    added: NonNullable<unknown>;
    updated: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "CSV imported: {added} new rows, {updated} updated" |
*
* @param {Admin_Recat_Csv_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_done: ((inputs: Admin_Recat_Csv_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
