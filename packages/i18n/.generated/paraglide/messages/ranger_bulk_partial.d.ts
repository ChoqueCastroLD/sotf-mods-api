export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Bulk_PartialInputs = {
    failed: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{failed} could not be changed. Try those again." |
*
* @param {Ranger_Bulk_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_bulk_partial: ((inputs: Ranger_Bulk_PartialInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_PartialInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
