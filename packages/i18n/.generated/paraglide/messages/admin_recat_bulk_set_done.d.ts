export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Bulk_Set_DoneInputs = {
    count: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} row set to {name}" |
* | * | "{count__number} rows set to {name}" |
*
* @param {Admin_Recat_Bulk_Set_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_bulk_set_done: ((inputs: Admin_Recat_Bulk_Set_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_Set_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
