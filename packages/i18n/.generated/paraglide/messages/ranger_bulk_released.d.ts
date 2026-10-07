export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Bulk_ReleasedInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Released: {count}" |
*
* @param {Ranger_Bulk_ReleasedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_bulk_released: ((inputs: Ranger_Bulk_ReleasedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ReleasedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
