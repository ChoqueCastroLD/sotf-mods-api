export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Queue_Filtered_Empty_TextInputs = {};
/**
* | output |
* | --- |
* | "Nothing in this queue matches the filters. Clear them to see the whole queue." |
*
* @param {Ranger_Queue_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_queue_filtered_empty_text: ((inputs?: Ranger_Queue_Filtered_Empty_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_Filtered_Empty_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
