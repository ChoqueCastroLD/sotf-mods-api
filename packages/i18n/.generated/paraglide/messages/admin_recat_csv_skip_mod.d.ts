export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Csv_Skip_ModInputs = {
    line: NonNullable<unknown>;
    value: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Line {line}: unknown mod “{value}” (use the numeric modId)." |
*
* @param {Admin_Recat_Csv_Skip_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_csv_skip_mod: ((inputs: Admin_Recat_Csv_Skip_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Skip_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
