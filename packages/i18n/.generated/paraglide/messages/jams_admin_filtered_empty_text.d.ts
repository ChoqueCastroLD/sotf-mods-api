export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Admin_Filtered_Empty_TextInputs = {};
/**
* | output |
* | --- |
* | "No jam matches the search or the filters. Clear them to see every jam." |
*
* @param {Jams_Admin_Filtered_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_admin_filtered_empty_text: ((inputs?: Jams_Admin_Filtered_Empty_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Filtered_Empty_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
