export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entries_Filtered_Empty_TextInputs = {};
/**
* | output |
* | --- |
* | "No entry matches the search or the status. Clear the filters to see every entry." |
*
* @param {Jams_Entries_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entries_filtered_empty_text: ((inputs?: Jams_Entries_Filtered_Empty_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Filtered_Empty_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
