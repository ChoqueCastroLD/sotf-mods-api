export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_Skip_CategoryInputs = {
    line: NonNullable<unknown>;
    value: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Line {line}: “{value}” is not an active mod category." |
*
* @param {Admin_Recat_Csv_Skip_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_skip_category: ((inputs: Admin_Recat_Csv_Skip_CategoryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_CategoryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
