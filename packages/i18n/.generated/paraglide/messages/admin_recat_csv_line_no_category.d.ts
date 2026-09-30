export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_Line_No_CategoryInputs = {
    line: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Line {line}: no category." |
*
* @param {Admin_Recat_Csv_Line_No_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_line_no_category: ((inputs: Admin_Recat_Csv_Line_No_CategoryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Line_No_CategoryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
