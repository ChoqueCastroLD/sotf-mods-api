export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Reports_Empty_Open_TextInputs = {};
/**
* | output |
* | --- |
* | "Nothing to look at. New reports appear here and in the queue." |
*
* @param {Ranger_Reports_Empty_Open_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_reports_empty_open_text: ((inputs?: Ranger_Reports_Empty_Open_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reports_Empty_Open_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
