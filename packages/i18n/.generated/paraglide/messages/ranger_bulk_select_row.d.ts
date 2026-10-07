export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Bulk_Select_RowInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Select {title}" |
*
* @param {Ranger_Bulk_Select_RowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_bulk_select_row: ((inputs: Ranger_Bulk_Select_RowInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Select_RowInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
