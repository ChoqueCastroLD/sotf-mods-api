export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_Skip_DuplicateInputs = {
    line: NonNullable<unknown>;
    value: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Line {line}: mod {value} appears twice; the first line wins." |
*
* @param {Admin_Recat_Csv_Skip_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_skip_duplicate: ((inputs: Admin_Recat_Csv_Skip_DuplicateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_DuplicateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
