export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Bulk_Review_TextInputs = {};
/**
* | output |
* | --- |
* | "They leave the queue and each one is logged. Review them first if you have not looked at them." |
*
* @param {Ranger_Bulk_Review_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_bulk_review_text: ((inputs?: Ranger_Bulk_Review_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Review_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
